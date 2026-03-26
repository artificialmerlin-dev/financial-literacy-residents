import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

const faq = [
  {
    question: 'How much does a 1% financial advisor fee cost over a career?',
    answer: '$1.34 million over a 35-year physician career, assuming $40K/year contributions at 7% return.',
  },
  {
    question: 'What is a fee-only fiduciary financial advisor?',
    answer: 'A fiduciary is legally required to act in your best interest. Fee-only means they are paid directly by you (flat fee or hourly), not by commissions on products they sell. Fewer than 2% of financial advisors meet this standard.',
  },
]

export default function Fees() {
  return (
    <article className="page">
      <PageSEO
        title="How 1% Advisory Fees Cost Physicians $1.34 Million — Fee-Only Alternatives"
        description="A 1% financial advisor fee costs a physician $1.34 million over a 35-year career. Learn the difference between fee-only and fee-based advisors, and find fiduciary directories."
        path="/fees"
        faq={faq}
      />
      <span className="section-number">03</span>
      <h1>The Fee Problem</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>4 min read</p>
      <p className="subtitle">
        The most important number in investing is the one your advisor hopes you never calculate.
      </p>

      <Stat value="$1.34M" label="What a 1% advisory fee costs a physician over a 35-year career" />

      <Rule />

      <h2>The Math</h2>
      <p>
        Consider a physician who contributes <strong>$40,000 per year</strong> to investment accounts over
        a <strong>35-year career</strong>, earning a <strong>7% gross return</strong>. Without any advisory
        fee, this portfolio grows to approximately <strong>$5.9 million</strong>. With a 1% annual advisory
        fee — often called an AUM (assets under management) fee — reducing net returns to 6%, the portfolio
        reaches roughly <strong>$4.6 million</strong>.
        The difference — <strong>$1.34 million</strong> — goes to the advisor.
      </p>
      <p>
        On a $5 million portfolio, a 1% fee means paying <strong>$50,000 per year</strong>. For what?
        In most cases, for purchasing the same index funds you could buy yourself for roughly
        <strong> $120 per year</strong> in fund expenses.
      </p>

      <SideNote>
        Assumptions: $40,000 annual contributions, 7% gross annual return, 35-year accumulation period,
        1% annual advisory fee deducted from assets under management.
      </SideNote>

      <Rule />

      <h2>Fee-Only vs Fee-Based</h2>
      <p>
        The financial advice industry has a terminology problem. A <strong>"fee-based"</strong> advisor
        can still earn commissions on products they sell you — the word "fee" in the title is misleading.
        A <strong>"fee-only"</strong> advisor earns compensation only from the fees you pay directly,
        with no commissions, kickbacks, or revenue sharing from fund companies. Fewer than <strong>2%</strong> of
        financial advisors in the United States are fee-only fiduciaries.
      </p>
      <p>
        A <strong>fiduciary</strong> is legally required to act in your best interest. Most financial
        advisors are not fiduciaries — they're salespeople who earn commissions on the products
        they recommend to you.
      </p>

      <Rule />

      <h2>If You Want Professional Help</h2>
      <p>
        There are legitimate reasons to hire an advisor — complex tax situations, estate planning,
        behavioral coaching during market downturns. If you do, seek a <strong>fee-only fiduciary</strong> who
        charges a flat fee or hourly rate rather than a percentage of your assets. Three directories
        that list vetted fee-only advisors:
      </p>
      <p>
        <strong><a href="https://napfa.org" target="_blank" rel="noopener noreferrer">NAPFA</a></strong> (napfa.org) — the National Association of Personal Financial Advisors,
        the largest professional association of fee-only financial planners.
      </p>
      <p>
        <strong><a href="https://garrettplanningnetwork.com" target="_blank" rel="noopener noreferrer">Garrett Planning Network</a></strong> (garrettplanningnetwork.com) — a network of hourly,
        as-needed financial planners. Pay only for the time you use.
      </p>
      <p>
        <strong><a href="https://xyplanningnetwork.com" target="_blank" rel="noopener noreferrer">XY Planning Network</a></strong> (xyplanningnetwork.com) — fee-only advisors who specialize
        in working with Gen X and Gen Y clients, many of whom serve physicians.
      </p>

      <p>
        <strong>You probably don't need a financial advisor during residency</strong> — a target-date fund
        or total stock market index fund handles everything. These directories are useful later, when
        you're an attending with a more complex financial picture (multiple income sources, real estate,
        practice ownership).
      </p>

      <p className="source">
        Fee impact calculations assume annual compounding. Advisor prevalence data: Investment News, 2024 survey.
      </p>

      <RelatedLinks links={[
        { to: '/investing', label: 'Investing' },
        { to: '/accounts', label: 'Retirement Accounts' },
        { to: '/resources', label: 'Resources' },
      ]} />
    </article>
  )
}
