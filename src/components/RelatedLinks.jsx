import { Link } from 'react-router-dom'

export default function RelatedLinks({ links }) {
  return (
    <div style={{
      marginTop: '2.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--color-rule)',
      fontSize: '0.85rem',
      color: 'var(--color-secondary)',
    }}>
      <span style={{ fontStyle: 'italic' }}>Related: </span>
      {links.map(({ to, label }, i) => (
        <span key={to}>
          {i > 0 && ' → '}
          <Link to={to}>{label}</Link>
        </span>
      ))}
    </div>
  )
}
