import { useState } from 'react'
import Stat from './Stat'

function formatCurrency(num) {
  return '$' + Math.round(num).toLocaleString()
}

export default function FICalculator() {
  const [income, setIncome] = useState(65000)
  const [expenses, setExpenses] = useState(50000)
  const [saved, setSaved] = useState(0)
  const [realReturn, setRealReturn] = useState(5)

  const annualSavings = income - expenses
  const savingsRate = income > 0 && annualSavings > 0
    ? Math.round((annualSavings / income) * 100)
    : 0
  const fiNumber = expenses * 25
  const alreadyFI = saved >= fiNumber && fiNumber > 0

  let yearsDisplay
  if (annualSavings <= 0) {
    yearsDisplay = 'N/A'
  } else if (alreadyFI) {
    yearsDisplay = null // handled separately
  } else {
    const fiTarget = fiNumber - saved
    const r = realReturn / 100
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
          <label>Annual income (gross)</label>
          <input
            type="text"
            value={income || ''}
            onChange={handleNumber(setIncome)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label>Annual expenses</label>
          <input
            type="text"
            value={expenses || ''}
            onChange={handleNumber(setExpenses)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label>Already saved</label>
          <input
            type="text"
            value={saved || ''}
            onChange={handleNumber(setSaved)}
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="calc-slider">
        <label>Expected real return after inflation</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={realReturn}
            onChange={(e) => setRealReturn(parseFloat(e.target.value))}
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
          Real return = after inflation. U.S. stocks have historically averaged ~7% nominal, ~4-5% real.
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
          FI number = annual expenses x 25. The portfolio size where you can withdraw 4% per year to cover expenses indefinitely.
        </p>
        <p style={{ marginBottom: 0 }}>
          Based on the 4% safe withdrawal rate (Trinity Study, 1998). For 40+ year horizons, 3-3.5% is more conservative.
        </p>
        <p style={{ marginBottom: 0 }}>
          Real return means after inflation. If the market returns 8% and inflation is 3%, your real return is 5%.
        </p>
      </div>
    </div>
  )
}
