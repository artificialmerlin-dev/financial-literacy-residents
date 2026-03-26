import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

export default function Taxes() {
  return (
    <article className="page">
      <PageSEO
        title="Tax Strategy for Medical Residents — Brackets, Deductions & Roth Contributions 2026"
        description="2026 federal tax brackets, standard deduction, effective tax rates for residents, student loan interest deduction, and why Roth contributions matter during training."
        path="/taxes"
      />
      <span className="section-number">04</span>
      <h1>Taxes</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>5 min read</p>
      <p className="subtitle">
        Understanding your bracket today — and where it is headed — shapes every financial decision.
      </p>

      <Rule />

      <h2>2026 Federal Tax Brackets (Single Filers)</h2>
      <div className="table-wrap">
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
      </div>

      <h3>How brackets actually work</h3>
      <p>
        <strong>Important: you don't pay 22% on all of your income.</strong> Tax brackets are marginal — you
        pay 10% on the first ~$11,925, 12% on the next ~$36,550, and 22% only on income above ~$48,475.
        Your actual effective rate on a $65,000 salary (after the $16,100 standard deduction) is about 13-15%.
      </p>

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
        student loan interest paid. This deduction phases out for single filers with MAGI (Modified Adjusted
        Gross Income) above $80,000, so most residents qualify. You get this even if you take the standard
        deduction — it's an "above the line" deduction. Your loan servicer sends you a Form 1098-E each
        January with the amount. Any tax software (TurboTax, FreeTaxUSA, etc.) handles it automatically.
      </p>
      <p>
        <strong>HSA (Health Savings Account) contributions if eligible.</strong> If you have a qualifying
        high-deductible health plan (HDHP), HSA contributions reduce your taxable income while growing
        tax-free. This is the only account with a tax benefit at contribution, growth, and withdrawal.
      </p>

      <h3>State and local taxes</h3>
      <p>
        State income taxes vary dramatically. Examples: <strong>Texas and Florida</strong> have no state
        income tax. <strong>Maryland</strong> charges ~7-8% combined state and county. <strong>California's</strong> top
        rate reaches 13.3%. This matters when comparing job offers.
      </p>

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

      <RelatedLinks links={[
        { to: '/accounts', label: 'Retirement Accounts' },
        { to: '/loans', label: 'Student Loans' },
        { to: '/calculator', label: 'FI Calculator' },
      ]} />
    </article>
  )
}
