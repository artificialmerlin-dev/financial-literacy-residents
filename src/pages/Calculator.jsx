import FICalculator from '../components/FICalculator'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

const faq = [
  {
    question: 'What is the 25x rule for retirement?',
    answer: 'The 25x rule says you need 25 times your annual expenses saved to retire. If you spend $100,000 per year, your target is $2.5 million. This is the inverse of the 4% withdrawal rate.',
  },
  {
    question: 'What is the 4% rule?',
    answer: 'The 4% rule says you can withdraw 4% of your portfolio in your first year of retirement, then adjust for inflation each year, and have a high probability of not running out of money over 30 years. It comes from the 1998 Trinity Study. For longer retirements, a 3-3.5% rate is safer.',
  },
]

export default function Calculator() {
  return (
    <article className="page">
      <PageSEO
        title="Financial Independence Calculator for Physicians — 25x Rule & 4% Withdrawal Rate"
        description="Interactive FI calculator for medical residents and physicians. Enter your income, expenses, and savings to see your FI number, savings rate, and years to financial independence."
        path="/calculator"
        faq={faq}
      />
      <span className="section-number">08</span>
      <h1>FI Calculator</h1>
      <p className="subtitle">
        How long until work becomes optional? The answer depends on one number: your savings rate.
      </p>

      <Rule />

      <FICalculator />

      <Rule />

      <h2>Example Scenarios</h2>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{
          border: '1px solid var(--color-card-border)',
          backgroundColor: 'var(--color-card-bg)',
          padding: '1.25rem 1.5rem',
        }}>
          <h3 style={{ marginTop: 0 }}>PGY-1 Resident</h3>
          <p style={{ marginBottom: 0 }}>
            $55K after-tax income, $45K expenses, $0 saved, 4% real return &rarr; <strong>18% savings rate</strong>,
            <strong> $1.13M FI number</strong>, <strong>~43.5 years to FI</strong>
          </p>
        </div>
        <div style={{
          border: '1px solid var(--color-card-border)',
          backgroundColor: 'var(--color-card-bg)',
          padding: '1.25rem 1.5rem',
        }}>
          <h3 style={{ marginTop: 0 }}>New Attending</h3>
          <p style={{ marginBottom: 0 }}>
            $275K after-tax income, $120K expenses, $50K saved, 4% real return &rarr; <strong>56% savings rate</strong>,
            <strong> $3M FI number</strong>, <strong>~14.4 years to FI</strong>
          </p>
        </div>
        <div style={{
          border: '1px solid var(--color-card-border)',
          backgroundColor: 'var(--color-card-bg)',
          padding: '1.25rem 1.5rem',
        }}>
          <h3 style={{ marginTop: 0 }}>"Live Like a Resident" Attending</h3>
          <p style={{ marginBottom: 0 }}>
            $275K after-tax income, $55K expenses, $50K saved, 4% real return &rarr; <strong>80% savings rate</strong>,
            <strong> $1.38M FI number</strong>, <strong>~5.5 years to FI</strong>
          </p>
        </div>
      </div>

      <SideNote>
        The "live like a resident" scenario is the most powerful lever in physician finance. Keeping your
        expenses at resident levels for 3-5 years after training — while your take-home income jumps 4-6x — can
        compress decades of saving into a few years.
      </SideNote>

      <Rule />

      <h2>The 25x Rule</h2>
      <p>
        Financial independence (FI) is commonly defined as having <strong>25 times your annual expenses</strong> invested
        in a diversified portfolio. This is the inverse of the 4% rule: if you can withdraw 4% of your
        portfolio each year to cover living expenses, you no longer need employment income to sustain
        your lifestyle.
      </p>
      <p>
        A resident spending $50,000 per year needs <strong>$1,250,000</strong> to reach FI. An attending
        spending $150,000 per year needs <strong>$3,750,000</strong>. The math makes clear that controlling
        expenses has an outsized impact — it both reduces your FI target and increases your savings rate.
      </p>

      <Rule />

      <h2>The 4% Rule</h2>
      <p>
        The 4% withdrawal rate comes from the <strong>Trinity Study</strong> (Cooley, Hubbard, and Walz, 1998),
        which analyzed historical U.S. market data and found that a 4% initial withdrawal rate, adjusted
        annually for inflation, had a high probability of sustaining a portfolio over a 30-year retirement.
      </p>
      <p>
        For physicians who may retire early and face a 40-50 year retirement horizon, many researchers
        recommend a more conservative withdrawal rate of <strong>3-3.5%</strong>. This means targeting
        <strong> 28-33 times annual expenses</strong> rather than 25 times.
      </p>

      <p className="source">
        Trinity Study: Cooley, Hubbard & Walz, "Retirement Savings: Choosing a Withdrawal Rate That Is
        Sustainable," AAII Journal, 1998.
      </p>

      <RelatedLinks links={[
        { to: '/investing', label: 'Investing' },
        { to: '/fees', label: 'The Fee Problem' },
        { to: '/resources', label: 'Resources' },
      ]} />
    </article>
  )
}
