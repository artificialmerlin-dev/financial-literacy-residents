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
        fontSize: '0.85rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        marginBottom: '0.5rem',
      }}>
        Educational content for medical residents &middot; 2026
      </p>
      <p style={{
        fontSize: '0.8rem',
        color: 'var(--color-source)',
        fontStyle: 'italic',
        marginBottom: 0,
      }}>
        This is educational content, not financial advice.
      </p>
    </footer>
  )
}
