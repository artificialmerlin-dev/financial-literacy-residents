import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function Taxes() {
  return (
    <div className="page">
      <span className="section-number">04</span>
      <h1>Taxes</h1>
      <p className="subtitle">
        Understanding your bracket today — and where it is headed — shapes every financial decision.
      </p>

      <Rule />

      <h2>2026 Federal Tax Brackets (Single Filers)</h2>
      <table>
        <thead>
          <tr>
            <th>Rate</th>
            <th>Taxable Income</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10%</td><td>$0 - $11,925</td></tr>
          <tr><td>12%</td><td>$11,926 - $48,475</td></tr>
          <tr><td>22%</td><td>$48,476 - $103,350</td></tr>
          <tr><td>24%</td><td>$103,351 - $197,300</td></tr>
          <tr><td>32%</td><td>$197,301 - $250,525</td></tr>
          <tr><td>35%</td><td>$250,526 - $626,350</td></tr>
          <tr><td>37%</td><td>Over $626,350</td></tr>
        </tbody>
      </table>

      <SideNote>
        The standard deduction for 2026 is $16,100 for single filers. This means a resident earning
        $65,000 has a taxable income of roughly $48,900 — placing most of their income in the 12% bracket
        with only a small portion in the 22% bracket.
      </SideNote>

      <Rule />

      <h2>Your Effective Rate as a Resident</h2>
      <p>
        At a typical resident salary of around <strong>$65,000</strong>, your <strong>effective federal
        tax rate</strong> is roughly <strong>13-15%</strong>. This is the weighted average of all the
        brackets your income passes through — not the 22% marginal rate that applies only to your
        last dollars of income. Understanding this distinction is critical for making Roth vs Traditional
        contribution decisions.
      </p>

      <Rule />

      <h2>Where Your Rate Is Headed</h2>
      <p>
        As an attending physician earning <strong>$400,000 or more</strong>, your marginal federal tax
        rate will be <strong>32-37%</strong>. This is why Roth contributions during residency are so
        valuable: you pay 12-22% on the money now instead of 32-37% later. Every dollar you contribute
        to a Roth account during training carries a permanent, built-in tax arbitrage.
      </p>

      <Rule />

      <h2>Key Tax Moves During Residency</h2>
      <p>
        <strong>Maximize Roth contributions.</strong> Your low bracket makes this the optimal time to pay
        taxes on retirement contributions and let them grow tax-free for decades.
      </p>
      <p>
        <strong>Student loan interest deduction.</strong> You can deduct up to <strong>$2,500</strong> of
        student loan interest paid. This deduction phases out for single filers with MAGI above $80,000,
        so most residents qualify. It is an "above-the-line" deduction — you get it even with the standard
        deduction.
      </p>
      <p>
        <strong>HSA contributions if eligible.</strong> If you have a qualifying high-deductible health plan,
        HSA contributions reduce your taxable income while growing tax-free. This is the only account with
        a tax benefit at contribution, growth, and withdrawal.
      </p>

      <SideNote>
        State and local taxes vary significantly by location. A resident in Texas or Florida pays no
        state income tax, while a resident in California or New York may owe an additional 5-10% or more.
        Factor your state's rate into any Roth vs Traditional analysis.
      </SideNote>

      <Rule />

      <p style={{
        fontStyle: 'italic',
        color: 'var(--color-secondary)',
        fontSize: '0.9rem',
      }}>
        This is not tax advice. Tax law is complex and your situation is unique. Consult a tax
        professional for guidance specific to your circumstances.
      </p>

      <p className="source">
        2026 brackets and standard deduction: IRS Revenue Procedure 2025-11.
      </p>
    </div>
  )
}
