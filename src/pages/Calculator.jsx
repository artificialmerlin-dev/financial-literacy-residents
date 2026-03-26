import FICalculator from '../components/FICalculator'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function Calculator() {
  return (
    <div className="page">
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
            $65K income, $50K expenses, $0 saved, 5% real return &rarr; <strong>23% savings rate</strong>,
            <strong> $1.25M FI number</strong>, <strong>~33.7 years to FI</strong>
          </p>
        </div>
        <div style={{
          border: '1px solid var(--color-card-border)',
          backgroundColor: 'var(--color-card-bg)',
          padding: '1.25rem 1.5rem',
        }}>
          <h3 style={{ marginTop: 0 }}>New Attending</h3>
          <p style={{ marginBottom: 0 }}>
            $400K income, $120K expenses, $50K saved, 5% real return &rarr; <strong>70% savings rate</strong>,
            <strong> $3M FI number</strong>, <strong>~8.7 years to FI</strong>
          </p>
        </div>
        <div style={{
          border: '1px solid var(--color-card-border)',
          backgroundColor: 'var(--color-card-bg)',
          padding: '1.25rem 1.5rem',
        }}>
          <h3 style={{ marginTop: 0 }}>"Live Like a Resident" Attending</h3>
          <p style={{ marginBottom: 0 }}>
            $400K income, $65K expenses, $50K saved, 5% real return &rarr; <strong>84% savings rate</strong>,
            <strong> $1.63M FI number</strong>, <strong>~4.3 years to FI</strong>
          </p>
        </div>
      </div>

      <SideNote>
        The "live like a resident" scenario is the most powerful lever in physician finance. Keeping your
        expenses at resident levels for 3-5 years after training — while your income jumps 4-6x — can
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
    </div>
  )
}
