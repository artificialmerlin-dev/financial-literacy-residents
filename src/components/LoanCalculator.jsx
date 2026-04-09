import { useState, useMemo } from 'react'
import Stat from './Stat'

// --- Constants ---

// 2026 Federal Poverty Guidelines (48 contiguous states)
// Source: Federal Register, January 2026
const FPL_BASE = 15960
const FPL_PER_PERSON = 5680

const SPECIALTIES = [
  { label: 'Select a specialty (optional)', salary: 0 },
  { label: 'Family Medicine — $260K', salary: 260000 },
  { label: 'Internal Medicine — $300K', salary: 300000 },
  { label: 'Pediatrics — $260K', salary: 260000 },
  { label: 'Psychiatry — $310K', salary: 310000 },
  { label: 'Emergency Medicine — $370K', salary: 370000 },
  { label: 'Radiology — $470K', salary: 470000 },
  { label: 'Anesthesiology — $440K', salary: 440000 },
  { label: 'General Surgery — $430K', salary: 430000 },
  { label: 'Orthopedic Surgery — $600K', salary: 600000 },
  { label: 'Cardiology — $560K', salary: 560000 },
  { label: 'Dermatology — $470K', salary: 470000 },
  { label: 'Gastroenterology — $500K', salary: 500000 },
  { label: 'Ophthalmology — $390K', salary: 390000 },
  { label: 'Urology — $490K', salary: 490000 },
  { label: 'OB/GYN — $340K', salary: 340000 },
  { label: 'Neurology — $330K', salary: 330000 },
  { label: 'Pathology — $340K', salary: 340000 },
  { label: 'PM&R — $320K', salary: 320000 },
]

function fpl(householdSize) {
  return FPL_BASE + FPL_PER_PERSON * Math.max(householdSize - 1, 0)
}

function formatCurrency(num) {
  if (num < 0) return '$0'
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(2) + 'M'
  return '$' + Math.round(num).toLocaleString()
}

function formatCurrencyShort(num) {
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(1) + 'M'
  if (num >= 1e3) return '$' + Math.round(num / 1e3) + 'K'
  return '$' + Math.round(num)
}

// --- IDR Payment Calculations ---

function monthlyPAYE(agi, householdSize) {
  const discretionary = Math.max(agi - fpl(householdSize) * 1.5, 0)
  return (discretionary * 0.10) / 12
}

function monthlyIBROld(agi, householdSize) {
  const discretionary = Math.max(agi - fpl(householdSize) * 1.5, 0)
  return (discretionary * 0.15) / 12
}

// For MFS: use only borrower's AGI
function idrPayment(agi, householdSize, plan) {
  if (plan === 'paye') return monthlyPAYE(agi, householdSize)
  if (plan === 'ibr-old') return monthlyIBROld(agi, householdSize)
  return monthlyPAYE(agi, householdSize) // default to PAYE
}

// --- Simulation Functions ---

function simulatePSLF({
  balance, rate, residentSalary, attendingSalary, yearsTraining,
  householdSize, filingStatus, spouseIncome, paymentsAlreadyMade
}) {
  const monthlyRate = rate / 100 / 12
  const trainingMonths = yearsTraining * 12
  const totalNeeded = 120 - paymentsAlreadyMade
  const trainingPaymentMonths = Math.min(trainingMonths, totalNeeded)
  const attendingPaymentMonths = Math.max(totalNeeded - trainingPaymentMonths, 0)

  // Determine AGI for IDR calculation
  const residentAGI = filingStatus === 'mfs' ? residentSalary : residentSalary + spouseIncome
  const attendingAGI = filingStatus === 'mfs' ? attendingSalary : attendingSalary + spouseIncome

  const residentPayment = idrPayment(residentAGI, householdSize, 'paye')
  const attendingPayment = idrPayment(attendingAGI, householdSize, 'paye')

  let bal = balance
  let totalPaid = 0
  const yearlyData = [{ year: 0, cumulative: 0, balance: bal }]

  // Months already completed (before simulation)
  // Training period
  for (let m = 0; m < trainingPaymentMonths; m++) {
    const interest = bal * monthlyRate
    const payment = Math.min(residentPayment, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    if ((m + 1) % 12 === 0 || m === trainingPaymentMonths - 1) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  // Attending period until 120 payments
  for (let m = 0; m < attendingPaymentMonths; m++) {
    const interest = bal * monthlyRate
    const payment = Math.min(attendingPayment, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    if ((m + 1) % 12 === 0 || m === attendingPaymentMonths - 1) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  const forgiven = Math.max(bal, 0)
  const totalYears = (paymentsAlreadyMade + trainingPaymentMonths + attendingPaymentMonths) / 12

  // Pad data to 30 years for chart comparison
  while (yearlyData.length <= 30) {
    yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: 0 })
  }

  return {
    totalPaid,
    forgiven,
    taxOnForgiveness: 0, // PSLF is tax-free
    totalCost: totalPaid,
    monthlyDuringResidency: residentPayment,
    monthlyAsAttending: attendingPayment,
    yearsToComplete: totalYears,
    yearlyData,
  }
}

function simulateRefinance({
  balance, originalRate, residentSalary, attendingSalary, yearsTraining,
  refiRate, householdSize, filingStatus, spouseIncome, paymentsAlreadyMade
}) {
  const originalMonthlyRate = originalRate / 100 / 12
  const trainingMonths = yearsTraining * 12
  const residentAGI = filingStatus === 'mfs' ? residentSalary : residentSalary + spouseIncome

  // During training: stay on federal IDR (don't refinance yet)
  const residentPayment = idrPayment(residentAGI, householdSize, 'paye')
  let bal = balance
  let totalPaid = 0
  const yearlyData = [{ year: 0, cumulative: 0, balance: bal }]

  for (let m = 0; m < trainingMonths; m++) {
    const interest = bal * originalMonthlyRate
    const payment = Math.min(residentPayment, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    if ((m + 1) % 12 === 0) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  // After training: refinance and pay aggressively (20% of gross attending salary)
  const refiMonthlyRate = refiRate / 100 / 12
  const aggressiveMonthly = (attendingSalary * 0.20) / 12
  let attendingMonths = 0
  const maxMonths = 360

  while (bal > 0.01 && attendingMonths < maxMonths) {
    const interest = bal * refiMonthlyRate
    const payment = Math.min(aggressiveMonthly, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    attendingMonths++
    if (attendingMonths % 12 === 0) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  // Pad to 30 years
  while (yearlyData.length <= 30) {
    yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: 0 })
  }

  return {
    totalPaid,
    forgiven: 0,
    taxOnForgiveness: 0,
    totalCost: totalPaid,
    monthlyDuringResidency: residentPayment,
    monthlyAsAttending: aggressiveMonthly,
    yearsToComplete: yearsTraining + attendingMonths / 12,
    payoffYearsAfterTraining: attendingMonths / 12,
    yearlyData,
  }
}

function simulateIDRForgiveness({
  balance, rate, residentSalary, attendingSalary, yearsTraining,
  householdSize, filingStatus, spouseIncome, paymentsAlreadyMade,
  forgivenessYears, marginalTaxRate
}) {
  const monthlyRate = rate / 100 / 12
  const trainingMonths = yearsTraining * 12
  const totalMonths = forgivenessYears * 12 - (paymentsAlreadyMade)
  const trainingPmtMonths = Math.min(trainingMonths, totalMonths)
  const attendingPmtMonths = Math.max(totalMonths - trainingPmtMonths, 0)

  const residentAGI = filingStatus === 'mfs' ? residentSalary : residentSalary + spouseIncome
  const attendingAGI = filingStatus === 'mfs' ? attendingSalary : attendingSalary + spouseIncome

  const residentPayment = idrPayment(residentAGI, householdSize, 'paye')
  const attendingPayment = idrPayment(attendingAGI, householdSize, 'paye')

  let bal = balance
  let totalPaid = 0
  const yearlyData = [{ year: 0, cumulative: 0, balance: bal }]

  for (let m = 0; m < trainingPmtMonths; m++) {
    const interest = bal * monthlyRate
    const payment = Math.min(residentPayment, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    if ((m + 1) % 12 === 0) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  for (let m = 0; m < attendingPmtMonths; m++) {
    const interest = bal * monthlyRate
    const payment = Math.min(attendingPayment, bal + interest)
    bal = bal + interest - payment
    totalPaid += payment
    if ((m + 1) % 12 === 0) {
      yearlyData.push({ year: yearlyData.length, cumulative: totalPaid, balance: Math.max(bal, 0) })
    }
  }

  const forgiven = Math.max(bal, 0)
  const taxBomb = forgiven * (marginalTaxRate / 100)

  while (yearlyData.length <= 30) {
    yearlyData.push({
      year: yearlyData.length,
      cumulative: totalPaid + (yearlyData.length >= forgivenessYears ? taxBomb : 0),
      balance: yearlyData.length >= forgivenessYears ? 0 : Math.max(bal, 0)
    })
  }

  return {
    totalPaid,
    forgiven,
    taxOnForgiveness: taxBomb,
    totalCost: totalPaid + taxBomb,
    monthlyDuringResidency: residentPayment,
    monthlyAsAttending: attendingPayment,
    yearsToComplete: forgivenessYears,
    yearlyData,
  }
}

// --- Simple SVG Chart ---

function CostChart({ pslf, refi, idr, maxYears }) {
  const W = 680, H = 280, PAD = { top: 20, right: 20, bottom: 40, left: 70 }
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom

  const allVals = [...pslf.map(d => d.cumulative), ...refi.map(d => d.cumulative), ...idr.map(d => d.cumulative)]
  const maxVal = Math.max(...allVals, 1)
  const years = Math.min(maxYears, 30)

  const x = (yr) => PAD.left + (yr / years) * plotW
  const y = (val) => PAD.top + plotH - (val / maxVal) * plotH

  const pathD = (data) => data.slice(0, years + 1).map((d, i) =>
    `${i === 0 ? 'M' : 'L'}${x(d.year).toFixed(1)},${y(d.cumulative).toFixed(1)}`
  ).join(' ')

  const yTicks = [0, maxVal * 0.25, maxVal * 0.5, maxVal * 0.75, maxVal]

  return (
    <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: W, fontFamily: 'var(--font-main)' }}>
        {/* Grid lines */}
        {yTicks.map((v, i) => (
          <g key={i}>
            <line x1={PAD.left} y1={y(v)} x2={W - PAD.right} y2={y(v)}
              stroke="#E8E8E4" strokeWidth="1" />
            <text x={PAD.left - 8} y={y(v) + 4} textAnchor="end"
              fontSize="11" fill="#888">
              {formatCurrencyShort(v)}
            </text>
          </g>
        ))}
        {/* X-axis labels */}
        {Array.from({ length: Math.floor(years / 5) + 1 }, (_, i) => i * 5).map(yr => (
          <text key={yr} x={x(yr)} y={H - 8} textAnchor="middle" fontSize="11" fill="#888">
            {yr}yr
          </text>
        ))}
        {/* Lines */}
        <path d={pathD(pslf)} fill="none" stroke="#2D6A4F" strokeWidth="2.5" />
        <path d={pathD(refi)} fill="none" stroke="#264653" strokeWidth="2.5" />
        <path d={pathD(idr)} fill="none" stroke="#A4262C" strokeWidth="2.5" strokeDasharray="6,3" />
        {/* Legend */}
        <g transform={`translate(${PAD.left + 10}, ${PAD.top + 10})`}>
          <line x1="0" y1="0" x2="20" y2="0" stroke="#2D6A4F" strokeWidth="2.5" />
          <text x="26" y="4" fontSize="11" fill="#111">PSLF</text>
          <line x1="0" y1="16" x2="20" y2="16" stroke="#264653" strokeWidth="2.5" />
          <text x="26" y="20" fontSize="11" fill="#111">Refinance</text>
          <line x1="0" y1="32" x2="20" y2="32" stroke="#A4262C" strokeWidth="2.5" strokeDasharray="6,3" />
          <text x="26" y="36" fontSize="11" fill="#111">IDR forgiveness</text>
        </g>
        {/* Axis lines */}
        <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={H - PAD.bottom} stroke="#CCC" />
        <line x1={PAD.left} y1={H - PAD.bottom} x2={W - PAD.right} y2={H - PAD.bottom} stroke="#CCC" />
      </svg>
    </div>
  )
}

// --- Main Component ---

export default function LoanCalculator() {
  const [loanBalance, setLoanBalance] = useState(250000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [filingStatus, setFilingStatus] = useState('single')
  const [spouseIncome, setSpouseIncome] = useState(0)
  const [residentSalary, setResidentSalary] = useState(65000)
  const [attendingSalary, setAttendingSalary] = useState(350000)
  const [yearsTraining, setYearsTraining] = useState(4)
  const [employer, setEmployer] = useState('yes')
  const [paymentsAlreadyMade, setPaymentsAlreadyMade] = useState(0)
  const [householdSize, setHouseholdSize] = useState(1)
  const [refiRate, setRefiRate] = useState(5.0)
  const [marginalTaxRate, setMarginalTaxRate] = useState(35)

  const handleNumber = (setter) => (e) => {
    const val = e.target.value
    if (val === '') { setter(0); return }
    const num = parseInt(val.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(num)) setter(num)
  }

  const handleRate = (setter) => (e) => {
    const val = e.target.value
    if (val === '') { setter(0); return }
    const num = parseFloat(val)
    if (!isNaN(num)) setter(num)
  }

  const handleSpecialty = (e) => {
    const salary = SPECIALTIES[e.target.selectedIndex]?.salary
    if (salary > 0) setAttendingSalary(salary)
  }

  // Determine forgiveness years based on plan (PAYE = 20)
  const forgivenessYears = 20

  const results = useMemo(() => {
    const common = {
      balance: loanBalance,
      rate: interestRate,
      residentSalary,
      attendingSalary,
      yearsTraining,
      householdSize,
      filingStatus,
      spouseIncome: filingStatus === 'single' ? 0 : spouseIncome,
      paymentsAlreadyMade,
    }

    const pslf = simulatePSLF(common)
    const refi = simulateRefinance({ ...common, originalRate: interestRate, refiRate })
    const idr = simulateIDRForgiveness({ ...common, forgivenessYears, marginalTaxRate })

    // Determine recommendation
    let recommended = 'pslf'
    let reason = ''
    const costs = [
      { path: 'pslf', cost: pslf.totalCost, label: 'PSLF' },
      { path: 'refi', cost: refi.totalCost, label: 'Refinance' },
      { path: 'idr', cost: idr.totalCost, label: 'IDR forgiveness' },
    ].sort((a, b) => a.cost - b.cost)

    if (employer === 'no') {
      // Can't do PSLF
      recommended = refi.totalCost < idr.totalCost ? 'refi' : 'idr'
      reason = 'PSLF requires a qualifying nonprofit employer. '
      reason += recommended === 'refi'
        ? `Refinancing and aggressive repayment costs ${formatCurrency(refi.totalCost)} total — ${formatCurrency(idr.totalCost - refi.totalCost)} less than staying on IDR for ${forgivenessYears} years.`
        : `IDR forgiveness costs ${formatCurrency(idr.totalCost)} total (including the ${formatCurrency(idr.taxOnForgiveness)} tax bill), which is less than the ${formatCurrency(refi.totalCost)} you'd pay through aggressive refinanced repayment.`
    } else if (employer === 'unsure') {
      recommended = costs[0].path
      reason = `If you end up at a qualifying employer, ${costs[0].label} is the lowest-cost path at ${formatCurrency(costs[0].cost)}. Until you decide, stay on IDR to preserve all options — do NOT refinance federal loans.`
    } else {
      recommended = costs[0].path
      if (recommended === 'pslf') {
        reason = `PSLF is the lowest-cost path at ${formatCurrency(pslf.totalCost)}. You'd pay ${formatCurrency(pslf.totalPaid)} over ${pslf.yearsToComplete.toFixed(1)} years, then ${formatCurrency(pslf.forgiven)} is forgiven tax-free.`
      } else if (recommended === 'refi') {
        reason = `Even with PSLF available, aggressive refinanced repayment is cheaper at ${formatCurrency(refi.totalCost)}. This typically happens when the loan balance is low relative to attending income.`
      } else {
        reason = `IDR forgiveness is the lowest-cost path at ${formatCurrency(idr.totalCost)} (including the tax bill). This can happen with very high loan balances relative to income.`
      }
    }

    // MFS comparison (only if married)
    let mfsNote = null
    if (filingStatus === 'mfj' && spouseIncome > 0) {
      const mfsPslf = simulatePSLF({ ...common, filingStatus: 'mfs' })
      const savings = pslf.totalPaid - mfsPslf.totalPaid
      if (savings > 5000) {
        mfsNote = `Filing separately could save ~${formatCurrency(savings)} in loan payments over the PSLF period by excluding your spouse's income from the IDR calculation. However, MFS means losing the student loan interest deduction, child tax credits, and paying higher tax rates. Run the numbers with a tax professional.`
      }
    }

    return { pslf, refi, idr, recommended, reason, mfsNote }
  }, [loanBalance, interestRate, residentSalary, attendingSalary, yearsTraining,
      householdSize, filingStatus, spouseIncome, paymentsAlreadyMade, refiRate,
      marginalTaxRate, forgivenessYears, employer])

  const { pslf, refi, idr, recommended, reason, mfsNote } = results

  const debtToIncome = attendingSalary > 0 ? (loanBalance / attendingSalary).toFixed(1) : '—'

  const recColor = {
    pslf: 'var(--color-green)',
    refi: 'var(--color-steel)',
    idr: 'var(--color-accent)',
  }[recommended]

  const recLabel = { pslf: 'PSLF', refi: 'Refinance + Aggressive Payoff', idr: `IDR ${forgivenessYears}-Year Forgiveness` }[recommended]

  const selectStyle = {
    width: '100%', fontFamily: 'var(--font-main)', fontSize: '1.1rem',
    padding: '0.75rem 1rem', border: '1px solid var(--color-card-border)',
    background: 'var(--color-card-bg)', color: 'var(--color-text)', outline: 'none',
  }

  return (
    <div>
      <h2>PSLF vs Refinance vs IDR Forgiveness</h2>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
        Enter your details below. Results update as you type.
      </p>

      {/* --- Inputs --- */}
      <div className="calc-inputs-2col">
        <div className="calc-input">
          <label htmlFor="loan-balance">Total federal loan balance</label>
          <input id="loan-balance" type="text" value={loanBalance || ''} onChange={handleNumber(setLoanBalance)} inputMode="numeric" />
        </div>
        <div className="calc-input">
          <label htmlFor="loan-rate">Weighted average interest rate (%)</label>
          <input id="loan-rate" type="number" step="0.1" value={interestRate} onChange={handleRate(setInterestRate)} style={selectStyle} />
        </div>
        <div className="calc-input">
          <label htmlFor="loan-resident-salary">Current resident salary</label>
          <input id="loan-resident-salary" type="text" value={residentSalary || ''} onChange={handleNumber(setResidentSalary)} inputMode="numeric" />
        </div>
        <div className="calc-input">
          <label htmlFor="loan-attending-salary">Expected attending salary</label>
          <input id="loan-attending-salary" type="text" value={attendingSalary || ''} onChange={handleNumber(setAttendingSalary)} inputMode="numeric" />
        </div>
        <div className="calc-input">
          <label htmlFor="loan-specialty">Specialty (auto-fills salary)</label>
          <select id="loan-specialty" onChange={handleSpecialty} style={selectStyle}>
            {SPECIALTIES.map(({ label }, i) => <option key={i}>{label}</option>)}
          </select>
        </div>
        <div className="calc-input">
          <label htmlFor="loan-years">Years of training remaining</label>
          <select id="loan-years" value={yearsTraining} onChange={(e) => setYearsTraining(parseInt(e.target.value, 10))} style={selectStyle}>
            {[1, 2, 3, 4, 5, 6, 7].map((y) => <option key={y} value={y}>{y} {y === 1 ? 'year' : 'years'}</option>)}
          </select>
        </div>
        <div className="calc-input">
          <label htmlFor="loan-filing">Filing status</label>
          <select id="loan-filing" value={filingStatus} onChange={(e) => setFilingStatus(e.target.value)} style={selectStyle}>
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
            <option value="mfs">Married filing separately</option>
          </select>
        </div>
        {filingStatus !== 'single' && (
          <div className="calc-input">
            <label htmlFor="loan-spouse">Spouse income</label>
            <input id="loan-spouse" type="text" value={spouseIncome || ''} onChange={handleNumber(setSpouseIncome)} inputMode="numeric" />
          </div>
        )}
        <div className="calc-input">
          <label htmlFor="loan-household">Household size (for poverty line calculation)</label>
          <select id="loan-household" value={householdSize} onChange={(e) => setHouseholdSize(parseInt(e.target.value, 10))} style={selectStyle}>
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="calc-input">
          <label htmlFor="loan-payments">Qualifying PSLF payments already made</label>
          <select id="loan-payments" value={paymentsAlreadyMade} onChange={(e) => setPaymentsAlreadyMade(parseInt(e.target.value, 10))} style={selectStyle}>
            {Array.from({ length: 13 }, (_, i) => i * 12).map((n) => (
              <option key={n} value={n}>{n} ({(n / 12).toFixed(0)} {n === 12 ? 'year' : 'years'})</option>
            ))}
          </select>
        </div>
      </div>

      <div className="calc-input" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block', fontSize: '0.85rem', color: 'var(--color-secondary)',
          marginBottom: '0.5rem', fontStyle: 'italic',
        }}>
          Will you work at a qualifying 501(c)(3) employer after training?
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { value: 'yes', label: 'Yes — academic medicine or nonprofit hospital' },
            { value: 'no', label: 'No — private practice or for-profit' },
            { value: 'unsure', label: 'Not sure yet' },
          ].map(({ value, label }) => (
            <label key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-main)', fontSize: '0.95rem', cursor: 'pointer' }}>
              <input type="radio" name="employer-type" value={value} checked={employer === value}
                onChange={(e) => setEmployer(e.target.value)} style={{ accentColor: 'var(--color-steel)' }} />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Advanced: refinance rate and tax rate */}
      <details style={{ marginBottom: '1.5rem' }}>
        <summary style={{ cursor: 'pointer', fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic' }}>
          Advanced assumptions (refinance rate, tax rate)
        </summary>
        <div className="calc-inputs-2col" style={{ marginTop: '0.75rem' }}>
          <div className="calc-input">
            <label htmlFor="loan-refi-rate">Refinance rate (%) — typically 4-6% for physicians</label>
            <input id="loan-refi-rate" type="number" step="0.1" value={refiRate} onChange={handleRate(setRefiRate)} style={selectStyle} />
          </div>
          <div className="calc-input">
            <label htmlFor="loan-tax-rate">Estimated marginal tax rate at forgiveness (%)</label>
            <input id="loan-tax-rate" type="number" step="1" value={marginalTaxRate} onChange={handleRate(setMarginalTaxRate)} style={selectStyle} />
          </div>
        </div>
      </details>

      {/* --- Recommendation --- */}
      <div style={{
        borderLeft: `3px solid ${recColor}`,
        padding: '1.5rem',
        backgroundColor: 'var(--color-card-bg)',
        marginBottom: '1.5rem',
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: recColor }}>
          Recommended: {recLabel}
        </h3>
        <p style={{ marginBottom: mfsNote ? '1rem' : 0, fontSize: '0.95rem' }}>{reason}</p>
        {mfsNote && (
          <p style={{ marginBottom: 0, fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-secondary)' }}>
            {mfsNote}
          </p>
        )}
      </div>

      {/* --- Side-by-Side Comparison --- */}
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th style={{ color: employer === 'no' ? 'var(--color-source)' : 'var(--color-green)' }}>PSLF</th>
              <th style={{ color: 'var(--color-steel)' }}>Refinance</th>
              <th style={{ color: 'var(--color-accent)' }}>IDR {forgivenessYears}-yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly during residency</td>
              <td>{formatCurrency(pslf.monthlyDuringResidency)}/mo</td>
              <td>{formatCurrency(refi.monthlyDuringResidency)}/mo</td>
              <td>{formatCurrency(idr.monthlyDuringResidency)}/mo</td>
            </tr>
            <tr>
              <td>Monthly as attending</td>
              <td>{formatCurrency(pslf.monthlyAsAttending)}/mo</td>
              <td>{formatCurrency(refi.monthlyAsAttending)}/mo</td>
              <td>{formatCurrency(idr.monthlyAsAttending)}/mo</td>
            </tr>
            <tr>
              <td>Total payments</td>
              <td>{formatCurrency(pslf.totalPaid)}</td>
              <td>{formatCurrency(refi.totalPaid)}</td>
              <td>{formatCurrency(idr.totalPaid)}</td>
            </tr>
            <tr>
              <td>Amount forgiven</td>
              <td>{formatCurrency(pslf.forgiven)}</td>
              <td>$0</td>
              <td>{formatCurrency(idr.forgiven)}</td>
            </tr>
            <tr>
              <td>Tax on forgiveness</td>
              <td>$0 (tax-free)</td>
              <td>N/A</td>
              <td>{formatCurrency(idr.taxOnForgiveness)}</td>
            </tr>
            <tr style={{ fontWeight: 600 }}>
              <td>Total cost</td>
              <td style={{ color: employer === 'no' ? 'var(--color-source)' : undefined }}>{formatCurrency(pslf.totalCost)}{employer === 'no' ? '*' : ''}</td>
              <td>{formatCurrency(refi.totalCost)}</td>
              <td>{formatCurrency(idr.totalCost)}</td>
            </tr>
            <tr>
              <td>Timeline</td>
              <td>{pslf.yearsToComplete.toFixed(1)} years</td>
              <td>{refi.yearsToComplete.toFixed(1)} years</td>
              <td>{idr.yearsToComplete} years</td>
            </tr>
          </tbody>
        </table>
      </div>
      {employer === 'no' && (
        <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginTop: '0.25rem' }}>
          *PSLF shown for reference only — requires a qualifying nonprofit employer.
        </p>
      )}

      <Stat value={`${debtToIncome}x`} label="Debt-to-income ratio (loan balance / attending salary)" />

      {/* --- Chart --- */}
      <h3 style={{ marginTop: '2rem' }}>Cumulative cost over time</h3>
      <CostChart
        pslf={pslf.yearlyData}
        refi={refi.yearlyData}
        idr={idr.yearlyData}
        maxYears={Math.max(forgivenessYears, Math.ceil(refi.yearsToComplete), 15)}
      />

      {/* --- Assumptions / Notes --- */}
      <div style={{
        display: 'grid', gap: '0.75rem', marginTop: '1rem',
        fontSize: '0.8rem', color: 'var(--color-secondary)', fontStyle: 'italic', lineHeight: 1.5,
      }}>
        <p style={{ marginBottom: 0 }}>
          IDR payments use the PAYE formula: 10% of discretionary income (AGI minus 150% of the federal poverty
          line for your household size). 2026 FPL for a household of {householdSize}: {formatCurrency(fpl(householdSize))}.
        </p>
        <p style={{ marginBottom: 0 }}>
          PSLF forgiveness is tax-free (IRC Section 108(f)(1)). IDR forgiveness after 20-25 years is taxable as
          ordinary income as of January 1, 2026 — the ARPA tax-free provision expired and was not extended.
        </p>
        <p style={{ marginBottom: 0 }}>
          Refinance path assumes IDR payments during training, then refinancing at {refiRate}% and allocating 20% of
          gross attending salary ({formatCurrency(attendingSalary * 0.20)}/year) to repayment.
        </p>
        <p style={{ marginBottom: 0 }}>
          This calculator uses PAYE (available until July 2028). The new RAP plan (available July 2026) uses 1-10% of
          full AGI rather than discretionary income, with forgiveness after 30 years. RAP produces higher payments at
          physician incomes. If you're already on PAYE, stay on it.
        </p>
        {filingStatus === 'mfs' && (
          <p style={{ marginBottom: 0 }}>
            Filing separately: only your AGI ({formatCurrency(residentSalary)} → {formatCurrency(attendingSalary)}) is
            used for IDR calculations. This lowers loan payments but means losing child tax credits, the student loan
            interest deduction, and paying higher marginal tax rates.
          </p>
        )}
        <p style={{ marginBottom: 0 }}>
          The SAVE plan was struck down by the 8th Circuit (March 2026). If you were on SAVE, switch to PAYE or IBR
          immediately — forbearance months on SAVE do not count toward PSLF or IDR forgiveness.
        </p>
        <p style={{ marginBottom: 0 }}>
          This is a simplified model. It assumes flat salaries (no growth), single IDR plan throughout, and does not
          model interest capitalization events, tax deduction benefits of MFS vs MFJ, or IRS insolvency exceptions.
          For personalized analysis with your actual loan data, use the free calculators above or consult a student
          loan specialist.
        </p>
      </div>
    </div>
  )
}
