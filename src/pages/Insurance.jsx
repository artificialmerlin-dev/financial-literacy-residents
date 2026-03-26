import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function Insurance() {
  return (
    <div className="page">
      <span className="section-number">06</span>
      <h1>Insurance</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>7 min read</p>
      <p className="subtitle">
        Protecting the asset that funds everything else — your ability to earn.
      </p>

      <Rule />

      <h2>Disability Insurance</h2>

      <Stat value="1 in 4" label="of today's 20-year-olds will become disabled before retirement" />
      <SideNote>Source: Social Security Administration (SSA), 2024.</SideNote>

      <p>
        The statistic is jarring because most people associate disability with accidents. In reality,
        <strong> 90% of long-term disabilities are caused by illness</strong> — cancer, heart disease,
        musculoskeletal disorders, mental health conditions. A surgeon who develops a hand tremor. A
        radiologist who loses visual acuity. These are not freak events; they are the ordinary wear
        of a long career.
      </p>

      <h3>Do you need it?</h3>
      <p>
        If you depend on your income, have debt, or anyone depends on you financially, <strong>yes</strong>.
        Your future earning potential as a physician is your most valuable asset — worth several million
        dollars over a career. Disability insurance protects that asset.
      </p>

      <h3>Own-Occupation Definition</h3>
      <p>
        The most critical feature of any disability policy is its definition of disability. An
        <strong> "own-occupation"</strong> policy pays benefits if you cannot perform the duties of
        <strong> your specific medical specialty</strong>. If a surgeon becomes unable to operate but
        could theoretically work as a consultant, an own-occupation policy still pays. A weaker
        "any-occupation" policy would not.
      </p>

      <h3>Two non-negotiable riders</h3>
      <div className="priority-list">
        <div className="priority-item"><strong>Non-cancelable and guaranteed renewable</strong> — the insurer cannot raise your premiums or cancel your policy as long as you pay</div>
        <div className="priority-item"><strong>True own-occupation</strong> — pays if you cannot work in your specific specialty, even if you earn income in another field</div>
      </div>

      <h3>Three riders worth the extra cost</h3>
      <div className="priority-list">
        <div className="priority-item"><strong>Partial/residual disability</strong> — pays a proportional benefit if you can work but at reduced capacity or income</div>
        <div className="priority-item"><strong>Cost-of-living adjustment (COLA)</strong> — your benefit increases with inflation each year you are on claim</div>
        <div className="priority-item"><strong>Future Increase Option (FIO)</strong> — allows you to increase coverage later (as an attending) without new medical underwriting</div>
      </div>

      <h3>The Big 5 Carriers</h3>
      <p>
        Five companies dominate the physician disability market and offer true own-occupation policies:
        <strong> Guardian, MassMutual, Principal, The Standard,</strong> and <strong>Ameritas</strong>.
        Get quotes from at least two or three. Specialty, age, gender, state, and health history all
        affect pricing.
      </p>
      <p>
        <strong>Don't call each carrier yourself.</strong> Contact an independent disability insurance
        broker — they shop all five carriers for you and the quotes are free. The broker is paid by
        the insurance company, not you.
      </p>

      <h3>Why Buy During Residency</h3>
      <p>
        Most residency programs offer access to group disability policies at <strong>20-40% discounts</strong>.
        More importantly, locking in a policy during residency means your premiums are based on your
        younger age and health — permanently. The <strong>Future Increase Option (FIO)</strong> lets you
        increase your coverage to match your attending salary later without any additional medical
        underwriting. A typical resident premium is <strong>$150-$350 per month</strong>.
      </p>

      <Rule />

      <h2>Life Insurance</h2>

      <h3>Do you need it?</h3>
      <p>
        Life insurance exists to replace your income for people who depend on it.
        If you are <strong>married with a dependent spouse, have children, co-signed debt, or a shared
        mortgage</strong> — yes, you need coverage. If you are <strong>single with no dependents</strong>,
        you probably do not need it yet.
      </p>

      <h3>Term vs Whole Life</h3>
      <div className="side-by-side">
        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>Term Life</h3>
          <p>
            Pure insurance. You pay a fixed premium for a set period (typically 20 or 30 years).
            If you die during the term, your beneficiaries receive the death benefit.
            A healthy 30-year-old resident can get <strong>$500,000 of coverage for about $25 per month</strong>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Simple, transparent, and inexpensive. This is what the vast majority of financial
            experts recommend for physicians.
          </p>
        </Card>
        <Card topColor="var(--color-accent)">
          <h3 style={{ marginTop: 0 }}>Whole Life</h3>
          <p>
            Combines insurance with a savings component. Coverage lasts your entire life, and the policy
            builds "cash value" over time. The same <strong>$500,000 of coverage costs roughly
            $540 per month</strong> — more than twenty times the cost of term.
          </p>
          <p style={{ marginBottom: 0 }}>
            The "investment" component typically returns 2-4% after fees — far less than a simple
            index fund. The complexity benefits the agent's commission, not you.
          </p>
        </Card>
      </div>

      <p>
        That's a <strong>20x markup</strong>. The $515/month difference, invested in index funds
        at 7% for 30 years, grows to roughly <strong>$620,000</strong>.
      </p>
      <p>
        The standard advice from independent financial experts: <strong>buy term, invest the
        difference</strong>.
      </p>

      <SideNote>
        Residents are prime targets for whole life insurance salespeople, who earn commissions
        of 50-100% of your first-year premium. Be skeptical of any advisor who leads with
        whole life or "permanent" insurance products during residency.
      </SideNote>

      <p className="source">
        Disability statistics: Social Security Administration. Premium estimates are illustrative
        and vary by specialty, age, gender, state, and health status.
      </p>
    </div>
  )
}
