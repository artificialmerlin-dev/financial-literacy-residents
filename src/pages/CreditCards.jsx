import Card from '../components/Card'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import ReferralCard from '../components/ReferralCard'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

export default function CreditCards() {
  return (
    <article className="page">
      <PageSEO
        title="Best Credit Cards for Medical Residents — Chase Ultimate Rewards Strategy"
        description="How medical residents can earn free travel with credit card points. The Chase trifecta strategy, how points transfers work, and a concrete example booking a trip to Berlin."
        path="/credit-cards"
      />
      <span className="section-number">07</span>
      <h1>Credit Cards</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>6 min read</p>
      <p className="subtitle">
        A tool for building credit and earning travel rewards — if and only if you pay in full every month.
      </p>

      <Rule />

      <h2>The Only Rule</h2>
      <p>
        Credit card rewards are worth pursuing <strong>only if you pay your statement balance in full
        every single month</strong>. Credit card interest rates are typically 20-29% APR (Annual
        Percentage Rate). No amount of points or cashback justifies carrying a balance. If you cannot
        commit to paying in full, use a debit card.
      </p>

      <Rule />

      <h2>What Are Points?</h2>
      <p>
        Credit card rewards are a percentage of your spending returned to you as points.
        Points can be redeemed for travel bookings, statement credits toward your bill, or
        transferred to airline and hotel loyalty programs — where their value typically increases
        by 50-100%.
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

      <h2>The Recommended Chase Card Combination</h2>
      <p>
        The recommended Chase card combination (often called the "Chase trifecta"): three cards that together
        maximize your points across all spending categories, while keeping annual fees minimal.
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

      <Rule />

      <h2>What 75,000 points actually gets you</h2>
      <p>
        The Chase Sapphire Preferred signup bonus is <strong>75,000 points</strong> after spending $5,000
        in the first 3 months. Signup bonus amounts change periodically — check the current offer. Here's
        what that looks like as a real trip:
      </p>

      <div style={{
        borderLeft: '3px solid var(--color-steel)',
        padding: '1.25rem 1.5rem',
        margin: '1.5rem 0',
        backgroundColor: 'var(--color-card-bg)',
      }}>
        <h3 style={{ marginTop: 0 }}>Example: A long weekend in Berlin — almost free</h3>
        <p>
          Chase points transfer 1:1 to United Airlines and World of Hyatt. That means your signup
          bonus alone can cover a transatlantic trip. A round-trip economy flight to Berlin via United
          runs as low as <strong>60,000 points</strong> (30,000 each way at saver pricing — varies by
          date, can be lower with flexibility). One to two nights at a Hyatt hotel runs roughly
          <strong> 8,000 to 15,000 points per night</strong> depending on the property and dates.
        </p>
        <p style={{ marginBottom: 0 }}>
          Total: your 75,000-point signup bonus covers a transatlantic round trip plus hotel. Out of
          pocket: <strong>$95</strong> annual fee, taxes and fees on the award flight (roughly $50 to $100),
          and meals. That's a trip that would cost <strong>$800 to $1,200 in cash</strong> — from a
          single credit card signup bonus.
        </p>
      </div>

      <h3>How to actually book this</h3>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://www.united.com/en/us/book-flight/united-award-travel" target="_blank" rel="noopener noreferrer">
              Search United award flights
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            Use United's award search to find saver-level flights to Europe. Be flexible with
            dates — use the 30-day calendar view to find the cheapest days.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://www.hyatt.com/en-US/search" target="_blank" rel="noopener noreferrer">
              Search Hyatt award nights
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            Search Hyatt properties by destination and toggle "Use Points" to see award pricing
            per night.
          </p>
        </Card>

        <Card>
          <h3 style={{ marginTop: 0 }}>
            <a href="https://www.pointsforfamilytravel.com/blog/chase-sapphire-preferred-credit-card-limited-100k-welcome-bonus" target="_blank" rel="noopener noreferrer">
              Points for Family Travel — Chase Sapphire guide
            </a>
          </h3>
          <p style={{ marginBottom: 0 }}>
            Detailed breakdown of how to maximize the CSP signup bonus with transfer partner examples.
          </p>
        </Card>
      </div>

      <SideNote>
        Award pricing is dynamic and varies by date, route, and availability. These are realistic
        examples based on typical saver-level pricing, not guarantees. Flexibility with travel dates
        is the single biggest factor in getting good redemptions.
      </SideNote>

      <ReferralCard />

      <p className="source">
        Card details and earning rates reflect publicly available information as of early 2026.
        Specific signup bonus amounts change frequently and are not listed here.
      </p>

      <RelatedLinks links={[
        { to: '/fees', label: 'The Fee Problem' },
        { to: '/calculator', label: 'FI Calculator' },
        { to: '/resources', label: 'Resources' },
      ]} />
    </article>
  )
}
