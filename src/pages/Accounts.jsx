import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

const faq = [
  {
    question: 'What is the Roth IRA contribution limit for 2026?',
    answer: 'The 2026 Roth IRA contribution limit is $7,500. The income phase-out for single filers begins at $153,000.',
  },
  {
    question: 'Should medical residents contribute to Roth or Traditional retirement accounts?',
    answer: 'Most residents should choose Roth contributions. Residents are in the 22% tax bracket on a roughly $65,000 salary. As attendings earning $400,000 or more, they will be in the 32-37% bracket. Paying taxes now at the lower rate and getting tax-free growth is almost always the better math.',
  },
  {
    question: 'What is the 403(b) contribution limit for 2026?',
    answer: 'The 2026 employee contribution limit for 403(b) plans is $24,500.',
  },
]

export default function Accounts() {
  return (
    <article className="page">
      <PageSEO
        title="Retirement Accounts for Medical Residents — Roth IRA, 403(b), HSA Limits 2026"
        description="Complete guide to retirement accounts for medical residents: Roth IRA, 403(b), 457(b), HSA contribution limits for 2026, priority order, and why Roth wins during residency."
        path="/accounts"
        faq={faq}
      />
      <span className="section-number">01</span>
      <h1>Retirement Accounts</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>7 min read</p>
      <p className="subtitle">
        The tax code gives you powerful tools to build wealth. Use them.
      </p>

      <div style={{
        borderLeft: '3px solid var(--color-accent)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'var(--color-card-bg)',
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>Priority Order</h3>
        <div className="priority-list" style={{ margin: 0 }}>
          <div className="priority-item">Employer match on 403(b)/401(k) — this is free money, always capture it first</div>
          <div className="priority-item">Max out Roth IRA ($7,500)</div>
          <div className="priority-item">Increase 403(b) contributions toward the $24,500 limit</div>
          <div className="priority-item">457(b) if your institution offers one ($24,500 additional)</div>
          <div className="priority-item">HSA (Health Savings Account) if you have a qualifying high-deductible health plan (HDHP)</div>
          <div className="priority-item">Taxable brokerage account with remaining funds</div>
        </div>
      </div>

      <Rule />

      <h2>Pre-tax (Traditional) vs Post-tax (Roth)</h2>

      <div className="side-by-side">
        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Traditional (Pre-tax)</h3>
          <p>Contributions reduce your taxable income <strong>today</strong>. You pay income tax when you withdraw in retirement. This benefits you most when your current tax rate is <strong>higher</strong> than your expected retirement rate.</p>
          <p style={{ marginBottom: 0 }}>For example, if you earn $65,000 and contribute $5,000 pre-tax to your 403(b), the IRS treats you as if you earned $60,000 — so you owe less tax this year.</p>
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

      <p>
        You don't need all of these right now. Most residents should focus on two: a <strong>Roth
        IRA</strong> (you open it yourself at Vanguard, Fidelity, or Schwab) and your employer's
        <strong> 403(b) or 401(k)</strong>.
      </p>

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
            <strong>Key note:</strong> Income phase-out begins at $153,000 MAGI (Modified Adjusted Gross Income) for single filers in 2026. During residency,
            you are well under this limit. After residency, you may need the Backdoor Roth IRA method (explained below).
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
          <h3 style={{ marginTop: 0 }}>HSA (Health Savings Account)</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            Requires a high-deductible health plan (HDHP)
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
        After residency, your income will exceed Roth IRA contribution limits. The Backdoor Roth is
        a legal workaround: you contribute to a Traditional IRA (non-deductible) and immediately
        convert it to a Roth IRA. The conversion triggers no additional tax because you already
        paid tax on the contribution. This strategy is legal, widely used by physicians, and has
        been confirmed by the IRS. It requires having no other pre-tax IRA balances to avoid the
        pro-rata rule.
      </p>
      <SideNote>
        During residency, you don't need the Backdoor — contribute directly to your Roth IRA.
        The Backdoor becomes relevant when your income exceeds $153,000 (single) as an attending.
      </SideNote>

      <p className="source">
        Contribution limits: IRS Revenue Procedure 2025-11. Phase-out thresholds: IRS Notice 2025-75.
      </p>

      <RelatedLinks links={[
        { to: '/index-funds', label: 'Index Funds' },
        { to: '/taxes', label: 'Taxes' },
        { to: '/fees', label: 'The Fee Problem' },
      ]} />
    </article>
  )
}
