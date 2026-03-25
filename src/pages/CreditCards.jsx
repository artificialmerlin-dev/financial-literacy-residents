import Card from '../components/Card'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import ReferralCard from '../components/ReferralCard'

export default function CreditCards() {
  return (
    <div className="page">
      <span className="section-number">07</span>
      <h1>Credit Cards</h1>
      <p className="subtitle">
        A tool for building credit and earning travel rewards — if and only if you pay in full every month.
      </p>

      <Rule />

      <h2>The Only Rule</h2>
      <p>
        Credit card rewards are worth pursuing <strong>only if you pay your statement balance in full
        every single month</strong>. Credit card interest rates are typically 20-29% APR. No amount of
        points or cashback justifies carrying a balance. If you cannot commit to paying in full, use
        a debit card.
      </p>

      <Rule />

      <h2>The Chase Ultimate Rewards Ecosystem</h2>
      <p>
        Chase's Ultimate Rewards program is widely considered the most versatile points system available
        to consumers. Points can be redeemed for travel through Chase's portal, transferred 1:1 to
        airline and hotel partners, or used as cash back. The transfer partners are what make the system
        powerful: <strong>Hyatt, United, Southwest, British Airways, Air France/KLM,</strong> and others.
      </p>

      <h3>Earning Rates</h3>
      <p>
        With the right combination of Chase cards, you earn <strong>5x points on travel booked through
        Chase, 3x on dining and select streaming services, 2x on other travel purchases,</strong> and
        <strong> 1x on everything else</strong>. Points transfer between Chase cards, so your everyday
        spending on a no-fee card still earns transferable points when paired with a Sapphire card.
      </p>

      <Rule />

      <h2>The Chase Trifecta</h2>
      <p>
        Three cards, used together, maximize your earning rate across all spending categories while
        keeping annual fees minimal.
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        <Card topColor="var(--color-steel)">
          <h3 style={{ marginTop: 0 }}>Chase Sapphire Preferred</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            $95/year
          </p>
          <p style={{ marginBottom: 0 }}>
            The anchor card. Earns 3x on dining and 2x on travel. Enables 1:1 point transfers to
            airline and hotel partners. Points earned on your other Chase cards become transferable
            when moved to this card.
          </p>
        </Card>

        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>Chase Freedom Unlimited</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            $0/year
          </p>
          <p style={{ marginBottom: 0 }}>
            Your everyday card. Earns 1.5% (1.5x points) on all purchases, 3x on dining,
            and 3x on drugstore purchases. No annual fee means all earnings are pure profit.
          </p>
        </Card>

        <Card topColor="var(--color-green)">
          <h3 style={{ marginTop: 0 }}>Chase Freedom Flex</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
            $0/year
          </p>
          <p style={{ marginBottom: 0 }}>
            Earns 5x on rotating quarterly bonus categories (groceries, gas, Amazon, etc.),
            3x on dining, and 1x on everything else. Activate each quarter's bonus for maximum earning.
          </p>
        </Card>
      </div>

      <ReferralCard />

      <p className="source">
        Card details and earning rates reflect publicly available information as of early 2026.
        Specific signup bonus amounts change frequently and are not listed here.
      </p>
    </div>
  )
}
