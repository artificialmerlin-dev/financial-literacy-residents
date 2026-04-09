import { useState } from 'react'
import Stat from './Stat'

const RESIDENT_SALARY = 65000
const FPL_1 = 15060 // 2025 federal poverty line, family of 1
const POVERTY_THRESHOLD = FPL_1 * 1.5

function formatCurrency(num) {
  if (num < 0) return '$0'
  return '$' + Math.round(num).toLocaleString()
}

function monthlyIDR(annualIncome) {
  const discretionary = Math.max(annualIncome - POVERTY_THRESHOLD, 0)
  return (discretionary * 0.10) / 12
}

function simulatePSLF(loanBalance, interestRate, yearsTraining, attendingSalary) {
  const monthlyRate = interestRate / 100 / 12
  const trainingMonths = yearsTraining * 12
  const attendingMonths = Math.max(120 - trainingMonths, 0)
  const trainingPayment = monthlyIDR(RESIDENT_SALARY)
  const attendingPayment = monthlyIDR(attendingSalary)

  let balance = loanBalance
  let totalPaid = 0

  // Training years
  for (let m = 0; m < trainingMonths; m++) {
    const interest = balance * monthlyRate
    balance = balance + interest - Math.min(trainingPayment, balance + interest)
    totalPaid += Math.min(trainingPayment, balance + interest + trainingPayment)
    if (balance <= 0) return { totalPaid, forgiven: 0, balanceAtForgiveness: 0 }
  }

  // Attending years until 120 payments
  for (let m = 0; m < attendingMonths; m++) {
    const interest = balance * monthlyRate
    balance = balance + interest - Math.min(attendingPayment, balance + interest)
    totalPaid += Math.min(attendingPayment, balance + interest + attendingPayment)
    if (balance <= 0) return { totalPaid, forgiven: 0, balanceAtForgiveness: 0 }
  }

  return { totalPaid, forgiven: Math.max(balance, 0), balanceAtForgiveness: Math.max(balance, 0) }
}

function simulateAggressive(loanBalance, interestRate, yearsTraining, attendingSalary) {
  const monthlyRate = interestRate / 100 / 12
  const trainingMonths = yearsTraining * 12
  const trainingPayment = monthlyIDR(RESIDENT_SALARY)
  const annualAttendingPayment = attendingSalary * 0.30
  const monthlyAttendingPayment = annualAttendingPayment / 12

  let balance = loanBalance
  let totalPaid = 0

  // Training years — same IDR payments
  for (let m = 0; m < trainingMonths; m++) {
    const interest = balance * monthlyRate
    const payment = Math.min(trainingPayment, balance + interest)
    balance = balance + interest - payment
    totalPaid += payment
    if (balance <= 0) return { totalPaid, yearsAfterTraining: 0 }
  }

  // Attending years — aggressive 30% of gross
  let attendingMonths = 0
  const maxMonths = 360 // 30 year cap
  while (balance > 0 && attendingMonths < maxMonths) {
    const interest = balance * monthlyRate
    const payment = Math.min(monthlyAttendingPayment, balance + interest)
    balance = balance + interest - payment
    totalPaid += payment
    attendingMonths++
  }

  return { totalPaid, yearsAfterTraining: attendingMonths / 12 }
}

export default function PSLFCalculator() {
  const [loanBalance, setLoanBalance] = useState(250000)
  const [attendingSalary, setAttendingSalary] = useState(350000)
  const [yearsRemaining, setYearsRemaining] = useState(4)
  const [interestRate, setInterestRate] = useState(6.5)
  const [employer, setEmployer] = useState('yes')

  const handleNumber = (setter) => (e) => {
    const val = e.target.value
    if (val === '') { setter(0); return }
    const num = parseInt(val.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(num)) setter(num)
  }

  const handleRate = (e) => {
    const val = e.target.value
    if (val === '') { setInterestRate(0); return }
    const num = parseFloat(val)
    if (!isNaN(num)) setInterestRate(num)
  }

  const pslf = simulatePSLF(loanBalance, interestRate, yearsRemaining, attendingSalary)
  const aggressive = simulateAggressive(loanBalance, interestRate, yearsRemaining, attendingSalary)

  const pslfCost = pslf.totalPaid
  const aggressiveCost = aggressive.totalPaid
  const savings = aggressiveCost - pslfCost
  const costsClose = Math.abs(savings) < aggressiveCost * 0.20

  let zone = 'yellow'
  let zoneColor = '#D4A017'
  if (employer === 'yes') {
    if (costsClose) {
      zone = 'yellow'
      zoneColor = '#D4A017'
    } else if (pslfCost < aggressiveCost) {
      zone = 'green'
      zoneColor = '#2D6A4F'
    } else {
      zone = 'red'
      zoneColor = '#A4262C'
    }
  } else if (employer === 'no') {
    zone = 'red'
    zoneColor = '#A4262C'
  } else {
    zone = 'yellow'
    zoneColor = '#D4A017'
  }

  const debtToIncome = attendingSalary > 0 ? (loanBalance / attendingSalary).toFixed(1) : '—'

  return (
    <div>
      <h2>Should you pursue loan forgiveness?</h2>

      <div className="calc-inputs-2col">
        <div className="calc-input">
          <label htmlFor="pslf-balance">Total federal student loan balance</label>
          <input
            id="pslf-balance"
            type="text"
            value={loanBalance || ''}
            onChange={handleNumber(setLoanBalance)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label htmlFor="pslf-salary">Expected attending salary</label>
          <input
            id="pslf-salary"
            type="text"
            value={attendingSalary || ''}
            onChange={handleNumber(setAttendingSalary)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label>Years of residency/fellowship remaining</label>
          <select
            value={yearsRemaining}
            onChange={(e) => setYearsRemaining(parseInt(e.target.value, 10))}
            style={{
              width: '100%',
              fontFamily: 'var(--font-main)',
              fontSize: '1.1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-card-border)',
              background: 'var(--color-card-bg)',
              color: 'var(--color-text)',
              outline: 'none',
              appearance: 'auto',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((y) => (
              <option key={y} value={y}>{y} {y === 1 ? 'year' : 'years'}</option>
            ))}
          </select>
        </div>
        <div className="calc-input">
          <label htmlFor="pslf-rate">Average loan interest rate (%)</label>
          <input
            id="pslf-rate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={handleRate}
            style={{
              width: '100%',
              fontFamily: 'var(--font-main)',
              fontSize: '1.1rem',
              padding: '0.75rem 1rem',
              border: '1px solid var(--color-card-border)',
              background: 'var(--color-card-bg)',
              color: 'var(--color-text)',
              outline: 'none',
            }}
          />
        </div>
      </div>

      <div className="calc-input" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block',
          fontSize: '0.85rem',
          color: 'var(--color-secondary)',
          marginBottom: '0.5rem',
          fontStyle: 'italic',
        }}>
          Plan to work at a qualifying nonprofit employer (501c3)?
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { value: 'yes', label: 'Yes — academic medicine or nonprofit hospital' },
            { value: 'no', label: 'No — private practice' },
            { value: 'unsure', label: 'Not sure yet' },
          ].map(({ value, label }) => (
            <label key={value} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-main)',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}>
              <input
                type="radio"
                name="employer"
                value={value}
                checked={employer === value}
                onChange={(e) => setEmployer(e.target.value)}
                style={{ accentColor: 'var(--color-steel)' }}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Results */}
      <div style={{
        borderLeft: `3px solid ${zoneColor}`,
        padding: '1.5rem',
        backgroundColor: 'var(--color-card-bg)',
        marginTop: '1.5rem',
      }}>
        <h3 style={{
          marginTop: 0,
          color: zoneColor,
        }}>
          {zone === 'green' && 'PSLF likely saves you money'}
          {zone === 'red' && 'Aggressive repayment likely wins'}
          {zone === 'yellow' && 'It depends on your specific situation'}
        </h3>

        {zone === 'green' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
              <Stat value={formatCurrency(pslfCost)} label="Estimated total paid with PSLF" />
              <Stat value={formatCurrency(aggressiveCost)} label="Estimated total paid with aggressive repayment" />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <Stat value={formatCurrency(savings)} label="Estimated savings with PSLF" />
            </div>
            {pslf.forgiven > 0 && (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: 0 }}>
                Estimated amount forgiven: {formatCurrency(pslf.forgiven)}. PSLF forgiveness is tax-free.
              </p>
            )}
          </>
        )}

        {zone === 'red' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '1.5rem 0' }}>
              <Stat value={formatCurrency(aggressiveCost)} label="Estimated total paid (aggressive)" />
              <Stat value={formatCurrency(pslfCost)} label="Estimated total paid (PSLF, if eligible)" />
            </div>
            {employer === 'no' ? (
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                PSLF requires working at a qualifying nonprofit employer. If you're planning private
                practice, forgiveness isn't available — but the good news is you can pay off loans fast
                on an attending salary. At 30% of a {formatCurrency(attendingSalary)} salary,
                you'd be done in roughly <strong>{aggressive.yearsAfterTraining.toFixed(1)} years</strong> after
                training.
              </p>
            ) : (
              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: 0 }}>
                With your loan balance and income, aggressive repayment costs less overall.
                Estimated payoff: ~{aggressive.yearsAfterTraining.toFixed(1)} years after training.
              </p>
            )}
          </>
        )}

        {zone === 'yellow' && (
          <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>
            The two paths are close enough that other factors matter: tax filing strategy, spouse income,
            exact employer, fellowship plans. Use the free calculators above with your real loan data,
            or consider a one-time consultation with a student loan specialist.
          </p>
        )}

        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-secondary)',
          marginTop: '1rem',
          marginBottom: 0,
        }}>
          Debt-to-income ratio: {debtToIncome}x
        </p>
      </div>

      <div style={{
        display: 'grid',
        gap: '0.75rem',
        marginTop: '1.5rem',
        fontSize: '0.8rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        lineHeight: 1.5,
      }}>
        <p style={{ marginBottom: 0 }}>
          This is a simplified estimate. It assumes a single filer, uses a flat resident salary
          of $65,000, and doesn't account for salary growth, tax filing strategy, or spouse
          income — all of which affect IDR payments. Use the free calculators above with your
          actual loan data for a more precise comparison.
        </p>
        <p style={{ marginBottom: 0 }}>
          PSLF forgiveness is tax-free. IDR forgiveness after 20-25 years is currently taxable
          as income — a major difference.
        </p>
      </div>
    </div>
  )
}
