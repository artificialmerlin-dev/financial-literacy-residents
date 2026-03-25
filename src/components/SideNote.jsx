export default function SideNote({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-main)',
      fontStyle: 'italic',
      fontSize: '0.85rem',
      color: 'var(--color-secondary)',
      lineHeight: 1.6,
      marginBottom: '1.25rem',
    }}>
      {children}
    </p>
  )
}
