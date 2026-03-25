import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const sections = [
  { path: '/', label: 'Home' },
  { path: '/accounts', label: 'Retirement Accounts' },
  { path: '/index-funds', label: 'Index Funds' },
  { path: '/fees', label: 'The Fee Problem' },
  { path: '/taxes', label: 'Taxes' },
  { path: '/loans', label: 'Student Loans' },
  { path: '/insurance', label: 'Insurance' },
  { path: '/credit-cards', label: 'Credit Cards' },
  { path: '/calculator', label: 'FI Calculator' },
  { path: '/resources', label: 'Resources' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-rule)',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            color: '#A4262C',
            letterSpacing: '-0.01em',
          }}>
            FLR
          </span>
          <span className="nav-full-name" style={{
            fontFamily: 'var(--font-main)',
            fontSize: '0.85rem',
            color: '#111111',
            fontWeight: 'normal',
          }}>
            Financial Literacy for Residents
          </span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--color-text)' }} />
          <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--color-text)' }} />
          <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--color-text)' }} />
        </button>
      </div>
      {open && (
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 1.5rem 1rem',
          borderTop: '1px solid var(--color-card-border)',
        }}>
          {sections.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.5rem 0',
                fontFamily: 'var(--font-main)',
                fontSize: '0.95rem',
                color: pathname === path ? 'var(--color-accent)' : 'var(--color-text)',
                textDecoration: pathname === path ? 'underline' : 'none',
                textUnderlineOffset: '4px',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
