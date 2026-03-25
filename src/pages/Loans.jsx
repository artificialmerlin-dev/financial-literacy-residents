import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function Loans() {
  return (
    <div className="page">
      <span className="section-number">05</span>
      <h1>Student Loans</h1>
      <p className="subtitle">
        Your loan strategy is a six-figure decision. Get it right before you start making payments.
      </p>

      <Stat value="$215,000" label="Median medical student debt, Class of 2025" />

      <Rule />

      <h2>Two Paths</h2>
      <div className="side-by-side">
        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>PSLF Forgiveness</h3>
          <p>
            <strong>Public Service Loan Forgiveness</strong> erases your remaining federal loan balance
            after 120 qualifying monthly payments (10 years) while working full-time at a 501(c)(3)
            employer — which includes most academic medical centers and nonprofit hospitals.
          </p>
          <p>
            Forgiveness is <strong>tax-free</strong>. Even <strong>$0 payments count</strong> toward
            the 120 payment threshold if you are on an income-driven repayment plan. A five-year
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
            During residency, enroll in an income-driven repayment plan to keep payments manageable.
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

      <h2>Income-Driven Repayment Plans</h2>

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
          A <strong>new plan effective July 1, 2026</strong>. Payments range from <strong>1-10% of
          full AGI</strong> (not discretionary income). Forgiveness after 30 years. This is the
          replacement plan under the One Big Beautiful Bill Act.
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
        The <strong>One Big Beautiful Bill Act</strong> includes a provision that loans originated
        after July 1, 2026 will <strong>not count residency training years toward PSLF</strong>.
        This is a fundamental change to the program. Current residents with existing federal loans
        are <strong>grandfathered</strong> under the old rules — your residency years still count.
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

      <h2>Getting Professional Help</h2>
      <p>
        <strong><a href="https://studentloanplanner.com" target="_blank" rel="noopener noreferrer">Student Loan Planner</a></strong> (studentloanplanner.com), founded by Travis Hornsby,
        offers flat-fee loan consultations for <strong>$595</strong>. They have advised over 13,000
        clients with an average reported savings of <strong>$80,000+</strong> per borrower. For a
        six-figure loan decision, this is one of the highest-return professional consultations
        available.
      </p>

      <p className="source">
        Median debt: AAMC Graduation Questionnaire, 2025. PSLF rules: Department of Education.
        SAVE ruling: Eighth Circuit, March 2026. OBBBA provisions: Congressional Budget Office analysis.
      </p>
    </div>
  )
}
