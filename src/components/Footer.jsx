export default function Footer() {
  return (
    <footer style={{
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '2rem 1.5rem 3rem',
      borderTop: '1px solid var(--color-rule)',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '0.8rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        marginBottom: '0.75rem',
        lineHeight: 1.6,
      }}>
        Created by a radiology resident. Content is based on IRS.gov data, the S&P SPIVA
        Scorecard, the Trinity Study, and physician finance resources including White Coat
        Investor, Bogleheads, and Student Loan Planner. This is educational content, not
        financial advice.
      </p>
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--color-source)',
        fontStyle: 'italic',
        marginBottom: 0,
      }}>
        Educational content for medical residents &middot; 2026
      </p>
    </footer>
  )
}
