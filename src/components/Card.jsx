export default function Card({ children, topColor, style }) {
  return (
    <div style={{
      border: '1px solid var(--color-card-border)',
      borderTop: topColor ? `3px solid ${topColor}` : '1px solid var(--color-card-border)',
      backgroundColor: 'var(--color-card-bg)',
      padding: '1.5rem',
      ...style,
    }}>
      {children}
    </div>
  )
}
