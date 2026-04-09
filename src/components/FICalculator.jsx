import { useState } from 'react'
import Stat from './Stat'

function formatCurrency(num) {
  return '$' + Math.round(num).toLocaleString()
}

export default function FICalculator() {
  const [income, setIncome] = useState(55000)
  const [expenses, setExpenses] = useState(45000)
  const [saved, setSaved] = useState(0)
  const [realReturn, setRealReturn] = useState(4)
  const [accountType, setAccountType] = useState('tax-advantaged')

  const annualSavings = income - expenses
  const savingsRate = income > 0 && annualSavings > 0
    ? Math.round((annualSavings / income) * 100)
    : 0
  const fiNumber = expenses * 25
  const alreadyFI = saved >= fiNumber && fiNumber > 0

  const taxDrag = accountType === 'taxable' ? 0.15 : 0
  const effectiveReturn = realReturn * (1 - taxDrag)

  let yearsDisplay
  if (annualSavings <= 0) {
    yearsDisplay = 'N/A'
  } else if (alreadyFI) {
    yearsDisplay = null // handled separately
  } else {
    const fiTarget = fiNumber - saved
    const r = effectiveReturn / 100
    if (r === 0) {
      yearsDisplay = (fiTarget / annualSavings).toFixed(1)
    } else {
      const years = Math.log((fiTarget * r / annualSavings) + 1) / Math.log(1 + r)
      yearsDisplay = years > 0 ? years.toFixed(1) : '0.0'
    }
  }

  const handleNumber = (setter) => (e) => {
    const val = e.target.value
    if (val === '') { setter(0); return }
    const num = parseInt(val.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(num)) setter(num)
  }

  return (
    <div>
      <div className="calc-inputs">
        <div className="calc-input">
          <label htmlFor="fi-income">Annual income (after taxes)</label>
          <input
            id="fi-income"
            type="text"
            value={income || ''}
            onChange={handleNumber(setIncome)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label htmlFor="fi-expenses">Annual expenses</label>
          <input
            id="fi-expenses"
            type="text"
            value={expenses || ''}
            onChange={handleNumber(setExpenses)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label htmlFor="fi-saved">Already saved</label>
          <input
            id="fi-saved"
            type="text"
            value={saved || ''}
            onChange={handleNumber(setSaved)}
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="calc-inputs" style={{ marginTop: '0.5rem' }}>
        <div className="calc-input">
          <label htmlFor="fi-account-type">Account type</label>
          <select
            id="fi-account-type"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: '1rem',
              padding: '0.5rem',
              border: '1px solid var(--color-card-border)',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              width: '100%',
            }}
          >
            <option value="tax-advantaged">Roth / 403(b) / IRA (tax-advantaged)</option>
            <option value="taxable">Taxable brokerage account</option>
          </select>
          <p style={{
            fontStyle: 'italic',
            fontSize: '0.8rem',
            color: 'var(--color-secondary)',
            marginTop: '0.35rem',
            marginBottom: 0,
          }}>
            {accountType === 'taxable'
              ? 'Taxable accounts incur ~15% annual tax drag on gains (dividends + capital gains distributions).'
              : 'Tax-advantaged accounts grow tax-free or tax-deferred — no annual drag on gains.'}
          </p>
        </div>
      </div>

      <div className="calc-slider">
        <label>Expected real return — inflation-adjusted</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={realReturn}
            onChange={(e) => setRealReturn(parseFloat(e.target.value))}
            aria-label="Expected real return percentage"
            aria-valuenow={realReturn}
            aria-valuemin={1}
            aria-valuemax={10}
            style={{ flex: 1 }}
          />
          <span style={{
            fontFamily: 'var(--font-main)',
            fontSize: '1.1rem',
            fontWeight: 600,
            minWidth: '3rem',
            textAlign: 'right',
          }}>
            {realReturn}%
          </span>
        </div>
        <p style={{
          fontStyle: 'italic',
          fontSize: '0.8rem',
          color: 'var(--color-secondary)',
          marginTop: '0.35rem',
          marginBottom: 0,
        }}>
          Real return = after inflation. U.S. stocks have historically averaged ~10% nominal, ~7% real. A 4% assumption is conservative and accounts for a diversified portfolio with bonds.
        </p>
      </div>

      <div className="calc-results">
        <Stat value={`${savingsRate}%`} label="Savings rate" />
        <Stat value={formatCurrency(fiNumber)} label="FI number (25x expenses)" />
        <Stat
          value={alreadyFI ? '0' : yearsDisplay}
          label={alreadyFI
            ? 'Already FI at this spending level'
            : 'Approximate years to FI'}
        />
      </div>

      <div style={{
        display: 'grid',
        gap: '0.75rem',
        marginTop: '0.5rem',
        fontSize: '0.8rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        lineHeight: 1.5,
      }}>
        <p style={{ marginBottom: 0 }}>
          Income should be net of all taxes (federal, state, FICA). This is your actual take-home pay.
        </p>
        <p style={{ marginBottom: 0 }}>
          FI number = annual expenses × 25. The portfolio size where you can withdraw 4% per year to cover expenses indefinitely.
        </p>
        <p style={{ marginBottom: 0 }}>
          Based on the 4% safe withdrawal rate (Trinity Study, 1998). For 40+ year horizons, 3-3.5% is more conservative.
        </p>
        <p style={{ marginBottom: 0 }}>
          Real return means after inflation. If the market returns 7% and inflation is 3%, your real return is ~4%. Using real returns means the FI number and years are in today's dollars.
        </p>
        {accountType === 'taxable' && (
          <p style={{ marginBottom: 0 }}>
            Tax drag: in a taxable account, dividends and capital gains distributions are taxed annually, reducing your effective return by ~15%. The actual impact varies by fund efficiency and your tax bracket.
          </p>
        )}
      </div>
    </div>
  )
}
