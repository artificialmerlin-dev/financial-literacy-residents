import { Link } from 'react-router-dom'
import Stat from '../components/Stat'
import PageSEO from '../components/PageSEO'

const sections = [
  { path: '/accounts', number: '01', title: 'Retirement Accounts', desc: 'Roth vs Traditional, 403(b), 457(b), IRA, HSA' },
  { path: '/investing', number: '02', title: 'Investing', desc: 'Why 94% of stock-pickers lose, and what to buy instead' },
  { path: '/fees', number: '03', title: 'The Fee Problem', desc: 'The $1.34M cost of a 1% advisory fee' },
  { path: '/taxes', number: '04', title: 'Taxes', desc: '2026 brackets, deductions, and key moves' },
  { path: '/loans', number: '05', title: 'Student Loans', desc: 'PSLF, IDR plans, and the July 2026 deadline' },
  { path: '/insurance', number: '06', title: 'Insurance', desc: 'Disability and life insurance for residents' },
  { path: '/credit-cards', number: '07', title: 'Credit Cards', desc: 'Points strategy and the Chase trifecta' },
  { path: '/calculator', number: '08', title: 'FI Calculator', desc: 'Your savings rate, FI number, and timeline' },
  { path: '/resources', number: '09', title: 'Resources', desc: 'Books, sites, and tools' },
]

export default function Home() {
  return (
    <article className="page">
      <PageSEO
        title="Financial Literacy for Medical Residents — Retirement, Investing, Loans & Insurance Guide"
        description="A comprehensive financial literacy guide for medical residents covering retirement accounts, index funds, student loans, insurance, taxes, and more. Built on IRS data, the SPIVA Scorecard, and the Trinity Study."
        path="/"
      />
      <h1>Financial Literacy for Medical Residents</h1>
      <p className="subtitle">
        A guide to building wealth during training — and the mistakes to avoid.
      </p>

      <div className="disclaimer-box">
        This is educational content, not financial, tax, or legal advice.
        Created by a medical resident drawing on published research including
        the S&P SPIVA Scorecard, the Trinity Study, IRS.gov, and physician
        finance resources like White Coat Investor. Consult a qualified
        professional for your specific situation.
      </div>

      <section>
        <div className="stats-row">
          <Stat value="7.4/10" label="Avg resident financial stress" />
          <Stat value="$303K" label="Avg resident loan balance" />
          <Stat value="94%" label="of stock-pickers who lose to a simple index fund over 20 years" />
          <Stat value="$1.34M" label="Cost of 1% advisory fee" />
        </div>
      </section>

      <div style={{
        borderLeft: '3px solid var(--color-green)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2.5rem',
        backgroundColor: 'var(--color-card-bg)',
      }}>
        <p style={{ marginBottom: 0 }}>
          <strong>New to all of this?</strong> Start with these three pages:{' '}
          <Link to="/accounts">Retirement Accounts</Link> &rarr;{' '}
          <Link to="/investing">Investing</Link> &rarr;{' '}
          <Link to="/fees">The Fee Problem</Link>.
          Everything else builds on those.
        </p>
      </div>

      <hr className="rule" />

      <section>
        <div className="section-grid">
          {sections.map(({ path, number, title, desc }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'block',
                border: '1px solid var(--color-card-border)',
                backgroundColor: 'var(--color-card-bg)',
                padding: '1.25rem 1.5rem',
                textDecoration: 'none',
                color: 'var(--color-text)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-rule)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-card-border)'}
            >
              <span className="section-number">{number}</span>
              <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>{title}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic' }}>{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{
        marginTop: '2.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--color-rule)',
        fontSize: '0.85rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        lineHeight: 1.6,
      }}>
        <p style={{ marginBottom: 0 }}>
          Created by a radiology resident. Content is based on IRS.gov data, the S&P SPIVA
          Scorecard, the Trinity Study, and physician finance resources including White Coat
          Investor, Bogleheads, and Student Loan Planner. This is educational content, not
          financial advice.
        </p>
      </section>
    </article>
  )
}
