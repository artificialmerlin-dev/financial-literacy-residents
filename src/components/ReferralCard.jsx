export default function ReferralCard() {
  return (
    <div style={{
      backgroundColor: '#1a365d',
      color: '#ffffff',
      padding: '2rem',
      marginTop: '2rem',
    }}>
      <div style={{
        fontFamily: 'var(--font-main)',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      }}>
        Chase Sapphire Preferred
      </div>
      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.6,
        marginBottom: '1.25rem',
        opacity: 0.9,
      }}>
        The cornerstone of the Chase trifecta. Earn points on travel and dining,
        transfer to airline and hotel partners, and get solid travel protections.
      </p>
      <a
        href="https://www.referyourchasecard.com/19v/6E9OEZ384K"
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-main)',
          fontSize: '1rem',
          color: '#1a365d',
          backgroundColor: '#ffffff',
          padding: '0.75rem 1.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Apply for Chase Sapphire Preferred &rarr;
      </a>
      <p style={{
        fontSize: '0.75rem',
        marginTop: '0.75rem',
        marginBottom: 0,
        opacity: 0.7,
        fontStyle: 'italic',
      }}>
        *I may benefit financially if you apply through this link.
      </p>
    </div>
  )
}
