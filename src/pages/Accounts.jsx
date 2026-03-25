import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function Accounts() {
  return (
    <div className="page">
      <span className="section-number">01</span>
      <h1>Retirement Accounts</h1>
      <p className="subtitle">
        The tax code gives you powerful tools to build wealth. Use them.
      </p>

      <Rule />

      <h2>Pre-tax (Traditional) vs Post-tax (Roth)</h2>

      <div className="side-by-side">
        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Traditional (Pre-tax)</h3>
          <p>Contributions reduce your taxable income <strong>today</strong>. You pay income tax when you withdraw in retirement. This benefits you most when your current tax rate is <strong>higher</strong> than your expected retirement rate.</p>
        </Card>
        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>Roth (Post-tax)</h3>
          <p>Contributions are made with after-tax dollars. All growth and withdrawals are <strong>tax-free</strong> in retirement. This benefits you most when your current tax rate is <strong>lower</strong> than your future rate.</p>
        </Card>
      </div>

      <h3>Why Roth is almost always right during residency</h3>
      <p>
        As a resident earning roughly $60,000-$75,000, you are in the <strong>22% federal bracket</strong>.
        As an attending, you will likely be in the <strong>32-37% bracket</strong>. Paying taxes now at a
        lower rate and letting your money grow tax-free for decades is one of the most valuable financial
        moves available during training.
      </p>

      <Rule />

      <h2>Account Types</h2>

      <div className="account-cards">
        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>403(b) / 401(k)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Provided by your employer
          </p>
          <p><strong>2026 limit:</strong> $24,500</p>
          <p><strong>Tax treatment:</strong> Traditional or Roth option (choose Roth during residency)</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key note:</strong> Always contribute enough to capture your employer match. Many hospital
            403(b) plans have been criticized for high-fee default options — always review fund choices yourself
            and select low-cost index funds.
          </p>
        </Card>

        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>457(b)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Provided by your employer (if governmental)
          </p>
          <p><strong>2026 limit:</strong> $24,500 (separate from 403b)</p>
          <p><strong>Tax treatment:</strong> Traditional or Roth</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key note:</strong> A 457(b) limit is <strong>separate</strong> from your 403(b), meaning you can
            contribute $24,500 to each. No early withdrawal penalty — a significant advantage. Only available at
            some institutions.
          </p>
        </Card>

        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Roth IRA</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Opened individually (Vanguard, Fidelity, Schwab)
          </p>
          <p><strong>2026 limit:</strong> $7,500</p>
          <p><strong>Tax treatment:</strong> Post-tax contributions, tax-free growth and withdrawals</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key note:</strong> Income phase-out begins at $153,000 MAGI (single) for 2026. During residency,
            you are well under this limit. After residency, you may need the Backdoor Roth IRA method.
          </p>
        </Card>

        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Traditional IRA</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Opened individually
          </p>
          <p><strong>2026 limit:</strong> $7,500 (shared with Roth IRA)</p>
          <p><strong>Tax treatment:</strong> Pre-tax contributions, taxed on withdrawal</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key note:</strong> Deductibility phases out if you have an employer plan. During residency,
            the Roth IRA is almost always the better choice. A Traditional IRA is primarily used as a conduit
            for the Backdoor Roth strategy.
          </p>
        </Card>

        <Card topColor="var(--color-accent)">
          <h3 style={{ marginTop: 0 }}>HSA</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Requires a high-deductible health plan
          </p>
          <p><strong>2026 limit:</strong> $4,400 individual / $8,750 family</p>
          <p><strong>Tax treatment:</strong> Triple tax-advantaged — pre-tax in, tax-free growth, tax-free out for medical</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key note:</strong> The only account with a tax benefit at every stage. If you can afford to
            pay medical expenses out of pocket, let the HSA grow as a stealth retirement account.
          </p>
        </Card>
      </div>

      <Rule />

      <h2>Priority Order</h2>
      <div className="priority-list">
        <div className="priority-item">Employer match on 403(b)/401(k) — this is free money, always capture it first</div>
        <div className="priority-item">Max out Roth IRA ($7,500)</div>
        <div className="priority-item">Increase 403(b) contributions toward the $24,500 limit</div>
        <div className="priority-item">457(b) if your institution offers one ($24,500 additional)</div>
        <div className="priority-item">HSA if you have a qualifying high-deductible plan</div>
        <div className="priority-item">Taxable brokerage account with remaining funds</div>
      </div>

      <Rule />

      <h2>The Roth IRA Math</h2>
      <Stat value="~$286,000" label="Tax-free at retirement" />
      <SideNote>
        Contributing $7,500 per year for 5 years of residency ($37,500 total) and letting it grow at 7%
        annualized for 30 years yields approximately $286,000 — all tax-free. Start early. Time is the
        single most powerful variable in compounding.
      </SideNote>

      <Rule />

      <h2>How to Set Up Your Employer 403(b)</h2>
      <p>
        Log in to your employer's retirement portal (Fidelity, TIAA, Empower, or similar).
        Increase your deferral percentage to at least the match threshold. Select the <strong>Roth</strong> option
        if available. Choose a low-cost index fund — a total stock market index or a target-date fund with
        an expense ratio under 0.15%. Avoid the default "stable value" or actively managed options.
      </p>

      <Rule />

      <h2>Backdoor Roth IRA</h2>
      <p>
        When your income exceeds the Roth IRA contribution limit as an attending, you can still
        contribute to a Roth IRA through the "backdoor" method: contribute to a Traditional IRA (non-deductible),
        then convert to Roth. This is a well-established strategy confirmed by the IRS. It requires having
        no other pre-tax IRA balances to avoid the pro-rata rule.
      </p>
      <SideNote>
        The Backdoor Roth is primarily relevant after residency when your income exceeds the direct
        contribution limit. During residency, contribute directly to your Roth IRA.
      </SideNote>

      <p className="source">
        Contribution limits: IRS Revenue Procedure 2025-11. Phase-out thresholds: IRS Notice 2025-75.
      </p>
    </div>
  )
}
