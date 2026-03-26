import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PSLFCalculator from '../components/PSLFCalculator'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

const faq = [
  {
    question: 'Should doctors do PSLF or pay off student loans?',
    answer: 'It depends on your debt-to-income ratio and career plans. If your loans exceed 2x your expected attending salary and you plan to work at a nonprofit or academic hospital, PSLF is usually the better path. If your loans are lower relative to income and you want to be debt-free quickly, aggressive repayment as an attending makes sense.',
  },
  {
    question: 'What is the SAVE plan status in 2026?',
    answer: 'The SAVE plan was officially ended by the Eighth Circuit Court of Appeals on March 9, 2026. Borrowers must switch to IBR, PAYE, or the new RAP plan.',
  },
  {
    question: 'What is the RAP student loan plan?',
    answer: 'RAP (Repayment Assistance Plan) is a new income-driven repayment plan effective July 1, 2026. Payments are 1-10% of full AGI with forgiveness after 30 years.',
  },
]

export default function Loans() {
  return (
    <article className="page">
      <PageSEO
        title="Student Loan Repayment for Doctors — PSLF vs Aggressive Payoff Calculator"
        description="Compare PSLF forgiveness vs aggressive repayment for medical residents. Interactive calculator, IDR plan comparison (PAYE, IBR, RAP), and the July 2026 PSLF deadline explained."
        path="/loans"
        faq={faq}
      />
      <span className="section-number">05</span>
      <h1>Student Loans</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>7 min read</p>
      <p className="subtitle">
        Your loan strategy is a six-figure decision. Get it right before you start making payments.
      </p>

      <Stat value="$215,000" label="Median medical student debt, Class of 2025" />

      <Rule />

      <h2>Two Paths</h2>
      <div className="side-by-side">
        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>PSLF (Public Service Loan Forgiveness)</h3>
          <p>
            PSLF erases your remaining federal loan balance
            after 120 qualifying monthly payments (10 years) while working full-time at a 501(c)(3)
            employer — which includes most academic medical centers and nonprofit hospitals.
          </p>
          <p>
            Most academic medical centers, teaching hospitals, and VA hospitals qualify. Check yours
            by searching on the IRS Tax Exempt Organization Search tool, or ask your HR department.
          </p>
          <p>
            Forgiveness is <strong>tax-free</strong>. Even <strong>$0 payments count</strong> toward
            the 120 payment threshold if you are on an income-driven repayment (IDR) plan — where your monthly
            payment is based on your income, not your loan balance. A five-year
            residency means you arrive at fellowship or your first attending job with <strong>60
            payments already completed</strong> — halfway to forgiveness.
          </p>
          <p style={{ marginBottom: 0 }}>
            If pursuing PSLF, your goal during residency is to <strong>minimize payments</strong> —
            every dollar you pay beyond the minimum is a dollar that would have been forgiven.
          </p>
        </Card>
        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Aggressive Repayment</h3>
          <p>
            If you will <strong>not</strong> work at a qualifying employer (private practice, for-profit
            hospital), PSLF is not an option. Your strategy shifts to minimizing total interest paid.
          </p>
          <p>
            During residency, enroll in an income-driven repayment (IDR) plan to keep payments manageable.
            Once your attending salary arrives, redirect as much income as possible toward the loan
            principal. Some physicians pay off $200,000+ in two to three years of focused repayment.
          </p>
          <p style={{ marginBottom: 0 }}>
            After completing residency, <strong>refinancing</strong> to a lower interest rate can save
            tens of thousands in interest — but only if you are certain you will not pursue PSLF.
          </p>
        </Card>
      </div>

      <Rule />

      <h2>Income-Driven Repayment (IDR) Plans</h2>
      <p>
        IDR plans set your monthly payment based on your income, not your loan balance. This keeps
        payments affordable during residency, when your salary is low relative to your debt.
      </p>

      <Card style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>PAYE (Pay As You Earn)</h3>
        <p>
          Payments are <strong>10% of discretionary income</strong>. Remaining balance forgiven after
          20 years. This has been the preferred plan for many PSLF-pursuing residents. Note: PAYE
          is set to <strong>sunset for new borrowers in July 2028</strong>, so current residents can
          still enroll.
        </p>
      </Card>

      <Card style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>IBR (Income-Based Repayment)</h3>
        <p>
          Payments are <strong>10-15% of discretionary income</strong>, depending on when you
          borrowed. Still available for pre-July-2026 loans. Forgiveness after 20-25 years.
        </p>
      </Card>

      <Card style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>RAP (Repayment Assistance Plan)</h3>
        <p>
          RAP is the new income-driven plan Congress created to replace SAVE and the other plans
          being phased out. <strong>Effective July 1, 2026.</strong> Payments range from <strong>1-10% of
          full AGI (Adjusted Gross Income)</strong> — not discretionary income. Forgiveness after 30 years.
          This is the replacement plan under the One Big Beautiful Bill Act.
        </p>
      </Card>

      <Card style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>SAVE</h3>
        <p style={{ marginBottom: 0 }}>
          <strong>Dead.</strong> The Eighth Circuit entered final judgment on March 9, 2026,
          striking down the SAVE plan. Do not count on it. If you were previously enrolled in
          SAVE, you need to switch to another IDR plan immediately.
        </p>
      </Card>

      <Rule />

      <h2>Critical: July 2026 PSLF Changes</h2>
      <p>
        The <strong>One Big Beautiful Bill Act</strong> includes a major change to PSLF.
        New loans borrowed after July 1, 2026 will <strong>not count residency training years
        toward PSLF</strong>. If you already have loans, you are <strong>grandfathered</strong> under
        the old rules — this doesn't affect you. Your residency years still count toward forgiveness.
        But if you take out new federal loans after July 2026, those loans will not accrue PSLF
        credit during residency.
      </p>
      <SideNote>
        If you have not yet consolidated or enrolled in an IDR plan, do so before this deadline.
        Consult studentaid.gov and speak with your loan servicer.
      </SideNote>

      <Rule />

      <h2>The Cardinal Rule</h2>
      <p>
        <strong>Never refinance federal loans if you are pursuing PSLF.</strong> Refinancing converts
        federal loans to private loans, permanently disqualifying them from PSLF, income-driven
        repayment, and all federal protections. This decision is <strong>irreversible</strong>.
      </p>

      <Rule />

      <h2>Free tools to figure out your plan</h2>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://studentaid.gov/loan-simulator" target="_blank" rel="noopener noreferrer">
              Federal Student Aid Loan Simulator
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            The official government tool. Connects to your actual loan data, compares all
            repayment plans, shows estimated monthly payments and total cost. Start here.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://students-residents.aamc.org/financial-aid-resources/medloans-organizer-and-calculator-mloc" target="_blank" rel="noopener noreferrer">
              AAMC MedLoans Organizer (MLOC)
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            Built specifically for medical students and residents. Free for all trainees at
            AAMC member schools. Upload your federal loan data and compare repayment scenarios.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://www.studentloanplanner.com/free-student-loan-calculator/" target="_blank" rel="noopener noreferrer">
              Student Loan Planner Calculator
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            Compares PSLF, RAP, IBR, PAYE, and refinancing scenarios side by side. Designed
            for physicians. Free to use — no account required.
          </p>
        </Card>
      </div>

      <SideNote>
        For a personalized analysis of a complex loan situation (married filing separately,
        multiple loan types, fellowship considerations), a paid consultation with a student
        loan specialist may be worth it. Student Loan Planner and Dream Bigger Financial are
        two services used by physicians.
      </SideNote>

      <Rule />

      <PSLFCalculator />

      <p className="source">
        Median debt: AAMC Graduation Questionnaire, 2025. PSLF rules: Department of Education.
        SAVE ruling: Eighth Circuit, March 2026. OBBBA provisions: Congressional Budget Office analysis.
      </p>

      <RelatedLinks links={[
        { to: '/taxes', label: 'Taxes' },
        { to: '/resources', label: 'Resources' },
        { to: '/calculator', label: 'FI Calculator' },
      ]} />
    </article>
  )
}
