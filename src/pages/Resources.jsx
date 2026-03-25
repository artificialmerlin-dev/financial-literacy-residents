import Card from '../components/Card'
import Rule from '../components/Rule'

export default function Resources() {
  return (
    <div className="page">
      <span className="section-number">09</span>
      <h1>Resources</h1>
      <p className="subtitle">
        The best physician finance education is free. Start here.
      </p>

      <Rule />

      <h2>Websites and Communities</h2>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://whitecoatinvestor.com" target="_blank" rel="noopener noreferrer">White Coat Investor</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            whitecoatinvestor.com
          </p>
          <p style={{ marginBottom: 0 }}>
            The most widely read physician finance site. Offers a free 12-week financial boot camp,
            a comprehensive blog archive, and books covering every major financial topic relevant
            to physicians.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://physicianonfire.com" target="_blank" rel="noopener noreferrer">Physician on FIRE</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            physicianonfire.com
          </p>
          <p style={{ marginBottom: 0 }}>
            Detailed calculators, a step-by-step Backdoor Roth IRA guide, and a physician's
            perspective on financial independence and early retirement.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://mrmoneymustache.com" target="_blank" rel="noopener noreferrer">Mr. Money Mustache</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            mrmoneymustache.com
          </p>
          <p style={{ marginBottom: 0 }}>
            Not physician-specific, but foundational. Start with "The Shockingly Simple Math Behind
            Early Retirement" — the article that launched a movement and explains why your savings
            rate matters more than your income.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://choosefi.com" target="_blank" rel="noopener noreferrer">ChooseFI Podcast</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            choosefi.com
          </p>
          <p style={{ marginBottom: 0 }}>
            A long-running podcast on financial independence. The early episodes are especially
            valuable — Episode 026 on the pillars of FI is a widely recommended starting point.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://studentloanplanner.com" target="_blank" rel="noopener noreferrer">Student Loan Planner</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            studentloanplanner.com
          </p>
          <p style={{ marginBottom: 0 }}>
            Founded by Travis Hornsby. Offers flat-fee loan strategy consultations ($595) and
            free educational content on federal repayment plans, PSLF, and refinancing.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}><a href="https://bogleheads.org" target="_blank" rel="noopener noreferrer">Bogleheads</a></h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            bogleheads.org
          </p>
          <p style={{ marginBottom: 0 }}>
            Named after Vanguard founder John Bogle. Their wiki on the three-fund portfolio is the
            canonical reference, and the forum is one of the most helpful investing communities online.
          </p>
        </Card>
      </div>

      <Rule />

      <h2>Books</h2>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        <Card>
          <h3 style={{ marginTop: 0 }}>The White Coat Investor</h3>
          <p className="caption" style={{ marginBottom: '0.5rem' }}>James M. Dahle, MD</p>
          <p style={{ marginBottom: 0 }}>
            The definitive personal finance book for physicians. Covers investing, insurance,
            student loans, taxes, and practice management in clear, direct prose.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>The Simple Path to Wealth</h3>
          <p className="caption" style={{ marginBottom: '0.5rem' }}>JL Collins</p>
          <p style={{ marginBottom: 0 }}>
            Originally a series of letters to the author's daughter. Explains why a single
            total stock market index fund is all most people need, and how to think about
            money, work, and freedom.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>The Psychology of Money</h3>
          <p className="caption" style={{ marginBottom: '0.5rem' }}>Morgan Housel</p>
          <p style={{ marginBottom: 0 }}>
            Short, readable essays on the behavioral side of finance. Helps you understand
            why smart people make irrational financial decisions and how to avoid the same traps.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>I Will Teach You to Be Rich</h3>
          <p className="caption" style={{ marginBottom: '0.5rem' }}>Ramit Sethi</p>
          <p style={{ marginBottom: 0 }}>
            A practical, step-by-step system for automating your finances. Covers accounts,
            savings, investing, and spending — with specific scripts for negotiating and
            optimizing every financial relationship.
          </p>
        </Card>
      </div>
    </div>
  )
}
