export default function Stat({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-main)',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'var(--color-text)',
        lineHeight: 1.2,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'var(--font-main)',
        fontSize: '0.8rem',
        color: 'var(--color-secondary)',
        fontStyle: 'italic',
        marginTop: '0.35rem',
        lineHeight: 1.4,
      }}>
        {label}
      </div>
    </div>
  )
}
