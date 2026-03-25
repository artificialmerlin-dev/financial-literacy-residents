import { useState } from 'react'
import Stat from './Stat'

// Approximate years to FI based on savings rate (MMM curve data)
// Source: Mr. Money Mustache "The Shockingly Simple Math Behind Early Retirement"
// Assumes 5% real return on investments, 4% withdrawal rate
function yearsToFI(savingsRate) {
  if (savingsRate <= 0) return Infinity
  if (savingsRate >= 100) return 0
  const lookup = {
    5: 66, 10: 51, 15: 43, 20: 37, 25: 32, 30: 28,
    35: 25, 40: 22, 45: 19, 50: 17, 55: 14.5, 60: 12.5,
    65: 10.5, 70: 8.5, 75: 7, 80: 5.5, 85: 4, 90: 3, 95: 2, 100: 0,
  }
  const keys = Object.keys(lookup).map(Number).sort((a, b) => a - b)
  if (savingsRate <= 5) return lookup[5]
  if (savingsRate >= 100) return 0
  for (let i = 0; i < keys.length - 1; i++) {
    if (savingsRate >= keys[i] && savingsRate <= keys[i + 1]) {
      const ratio = (savingsRate - keys[i]) / (keys[i + 1] - keys[i])
      return Math.round(lookup[keys[i]] + ratio * (lookup[keys[i + 1]] - lookup[keys[i]]))
    }
  }
  return lookup[5]
}

function parseCurrency(val) {
  return parseInt(val.replace(/[^0-9]/g, ''), 10) || 0
}

function formatCurrency(num) {
  return '$' + num.toLocaleString()
}

export default function FICalculator() {
  const [income, setIncome] = useState('65000')
  const [expenses, setExpenses] = useState('50000')
  const [saved, setSaved] = useState('0')

  const inc = parseCurrency(income)
  const exp = parseCurrency(expenses)
  const sav = parseCurrency(saved)

  const annualSavings = Math.max(inc - exp, 0)
  const savingsRate = inc > 0 ? Math.round((annualSavings / inc) * 100) : 0
  const fiNumber = exp * 25
  const remaining = Math.max(fiNumber - sav, 0)
  const years = sav >= fiNumber ? 0 : yearsToFI(savingsRate)

  return (
    <div>
      <div className="calc-inputs">
        <div className="calc-input">
          <label>Annual income (gross)</label>
          <input
            type="text"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label>Annual expenses</label>
          <input
            type="text"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            inputMode="numeric"
          />
        </div>
        <div className="calc-input">
          <label>Already saved</label>
          <input
            type="text"
            value={saved}
            onChange={(e) => setSaved(e.target.value)}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="calc-results">
        <Stat value={`${savingsRate}%`} label="Savings rate" />
        <Stat value={formatCurrency(fiNumber)} label="FI number (25x expenses)" />
        <Stat value={years === Infinity ? '---' : `~${years} yrs`} label="Approximate years to FI" />
      </div>
    </div>
  )
}
