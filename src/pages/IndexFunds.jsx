import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'
import PageSEO from '../components/PageSEO'
import RelatedLinks from '../components/RelatedLinks'

const faq = [
  {
    question: 'Should doctors pick individual stocks?',
    answer: 'The evidence strongly suggests no. Over 20 years, 94% of professional fund managers — people who do this full-time with dedicated research teams — fail to beat a simple index fund. Individual investors fare even worse due to behavioral mistakes like panic selling and performance chasing. Most physicians are better served by low-cost index funds or target-date funds.',
  },
  {
    question: 'What is the best investment for medical residents?',
    answer: 'For most residents, the simplest and most effective approach is a target-date retirement fund (like Vanguard Target Retirement 2065) or a total U.S. stock market index fund (like VTSAX or FZROX). These provide broad diversification at near-zero cost and require no ongoing management.',
  },
  {
    question: 'What is the three-fund portfolio?',
    answer: 'The three-fund portfolio is a simple investing strategy using three index funds: a U.S. total stock market fund, an international stock market fund, and a U.S. bond fund. Together, these hold approximately 15,000 securities worldwide. It\'s recommended by the Bogleheads investing community and most physician finance experts.',
  },
]

export default function IndexFunds() {
  return (
    <article className="page">
      <PageSEO
        title="Investing for Medical Residents — Why Index Funds Beat Stock Picking"
        description="Why 94% of professional stock pickers lose to index funds, the behavior gap that costs investors thousands, and exactly what to buy in your retirement accounts as a medical resident."
        path="/investing"
        faq={faq}
      />
      <span className="section-number">02</span>
      <h1>Investing</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>8 min read</p>
      <p className="subtitle">
        You need to invest. The only question is how.
      </p>

      <Rule />

      <h2>Why not just pick stocks?</h2>

      <p>
        Before we talk about what to invest in, let's look at what the professionals achieve.
        These are full-time fund managers with teams of analysts, proprietary data, Bloomberg
        terminals, and decades of experience. They wake up every morning with one job: beat
        the market. And the data on how they perform is comprehensive, public, and devastating.
      </p>
      <p>
        The S&P SPIVA Scorecard (an independent study that tracks how professional money managers
        perform against simple index funds) has been published semi-annually for two decades. Over
        one year, <strong>54%</strong> of actively managed large-cap funds underperform their
        benchmark index. Over five years, <strong>77%</strong>. Over ten, <strong>87%</strong>.
        Over twenty years, <strong>94%</strong> fail to beat the index. On a risk-adjusted basis,
        <strong> 97%</strong> underperform over twenty years. If people who do this for a living
        can't consistently beat the market, the odds that you'll do it in your spare time between
        overnight calls are very low.
      </p>

      <h3>The behavior gap</h3>
      <p>
        It gets worse. Even when individual investors buy good funds, they consistently
        underperform those very funds because of behavioral mistakes — buying after prices have
        risen, selling after they've fallen, chasing hot tips from colleagues, and panic-selling
        during downturns. Research from Dalbar and others estimates this "behavior gap" costs the
        average investor <strong>1-3% annually</strong> over long periods. That may sound small, but
        over a 30-year career it compounds into hundreds of thousands of dollars in lost wealth.
        The problem isn't the investment. The problem is the investor.
      </p>

      <h3>Survivorship bias</h3>
      <p>
        You'll hear stories — an attending who bought Tesla at $30, a friend who doubled their
        money on Nvidia. You won't hear about the losses. For every person who picked a winning
        stock, there are dozens who picked losers, or sold too early, or held too long. The winners
        tell their stories at conferences. The losers stay quiet. This creates a distorted picture
        of how common stock-picking success actually is. In the same way that you don't judge a
        drug's efficacy by asking only the patients who got better, you can't judge an investment
        strategy by listening only to those who got lucky.
      </p>

      <h3>The time argument</h3>
      <p>
        You're working 60-80 hours a week. Even if stock picking could work in theory, it
        requires constant research, monitoring, and decision-making. The evidence says that even
        with unlimited time, it doesn't work for the vast majority of professionals. But you
        don't have unlimited time — and every hour spent researching individual stocks is an hour
        that could go toward your patients, your training, your relationships, or your sleep.
      </p>

      <h3>The permission to play</h3>
      <p>
        If you genuinely enjoy researching stocks and want to allocate 5-10% of your portfolio to
        individual picks as a hobby, that's a reasonable approach — as long as the other 90-95% is
        in low-cost index funds. Treat it as entertainment spending with upside potential, not as
        your core wealth-building strategy.
      </p>

      <Rule />

      <h2>What the data says</h2>

      <p>
        Two datasets tell the story. The first tracks every professional fund manager in America.
        The second tracks the most famous investor alive.
      </p>

      <Stat value="94%" label="of actively managed large-cap funds underperformed their index over twenty years" />

      <p>
        These are not cherry-picked numbers. The SPIVA Scorecard is the most comprehensive,
        survivorship-bias-free dataset on active fund performance in existence. It accounts for
        funds that closed or merged (which disproportionately happens to poor performers), so
        the real failure rate may be even higher than the headline figure suggests.
      </p>
      <p className="source">Source: S&P SPIVA U.S. Scorecard, 2005-2024.</p>

      <h3>The Million-Dollar Bet</h3>
      <p>
        In 2008, Warren Buffett made a public wager of one million dollars: he bet that a simple
        S&P 500 index fund would outperform a hand-picked portfolio of five funds-of-hedge-funds
        over ten years. The hedge fund side was chosen by Ted Seides, a professional asset manager.
      </p>
      <p>
        The result was not close. The index fund returned <strong>7.1% annualized</strong>, turning
        $1 million into roughly $1.854 million. The hedge fund portfolio returned <strong>2.2%
        annualized</strong>, reaching just $1.22 million. After fees, the hedge funds captured only
        a fraction of the market's gains.
      </p>

      <div className="quote-block">
        <p style={{ marginBottom: '0.5rem' }}>
          "Performance comes, performance goes. Fees never falter."
        </p>
        <p className="quote-attr">— Warren Buffett, 2018 Berkshire Hathaway annual letter</p>
      </div>

      <Rule />

      <h2>What to actually buy</h2>

      <div style={{
        borderLeft: '3px solid var(--color-green)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'var(--color-card-bg)',
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.75rem' }}>If you want zero decisions</h3>
        <p style={{ marginBottom: '1rem' }}>
          Buy one of these and never think about it again: a <strong>target-date retirement fund</strong> (e.g.
          Vanguard Target Retirement 2065 at 0.08%) or a <strong>total U.S. stock market index fund</strong> (e.g.
          Vanguard VTSAX at 0.04%, Fidelity FZROX at 0.00%, or Schwab SWTSX at 0.03%).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          A target-date fund automatically adjusts your mix of stocks and bonds as you age. A total stock market
          or S&P 500 fund is 100% stocks — higher long-term growth potential but more short-term volatility.
          Either is a great choice for a resident with 30+ years until retirement.
        </p>
        <p style={{ marginBottom: 0, fontWeight: 600 }}>
          The key is picking one and actually doing it.
        </p>
      </div>

      <h3>What's the difference?</h3>
      <p>
        A <strong>target-date fund</strong> holds a mix of stocks and bonds and automatically shifts toward
        more bonds as you approach retirement. A <strong>total stock market</strong> or <strong>S&P 500
        fund</strong> is 100% stocks — higher long-term growth potential, but more short-term volatility.
        Either is a great choice for a resident with 30+ years until retirement.
      </p>

      <h3>The Three-Fund Portfolio</h3>
      <p>
        If you want slightly more control, the simplest evidence-based investment strategy requires just three funds: a U.S. total
        stock market index, an international stock index, and a U.S. total bond market index.
        This gives you broad diversification across thousands of companies and bonds at near-zero cost.
      </p>

      <SideNote>
        These are ticker symbols — the short codes you type when buying a fund in your brokerage account.
        The percentages in parentheses are annual expense ratios (the yearly fee the fund charges, deducted automatically).
      </SideNote>

      <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Asset Class</th>
            <th>Vanguard</th>
            <th>Fidelity</th>
            <th>Schwab</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>U.S. Total Stock</td>
            <td>VTSAX (0.04%)</td>
            <td>FZROX (0.00%)</td>
            <td>SWTSX (0.03%)</td>
          </tr>
          <tr>
            <td>International Stock</td>
            <td>VTIAX (0.11%)</td>
            <td>FZILX (0.00%)</td>
            <td>SWISX (0.06%)</td>
          </tr>
          <tr>
            <td>U.S. Total Bond</td>
            <td>VBTLX (0.05%)</td>
            <td>FXNAX (0.025%)</td>
            <td>SWAGX (0.04%)</td>
          </tr>
        </tbody>
      </table>
      </div>

      <SideNote>
        Expense ratios shown are annual costs as a percentage of assets. Fidelity's ZERO funds
        have no expense ratio at all. The difference between 0.00% and 0.11% may seem trivial, but
        on a $3 million portfolio held for 30 years, it compounds to tens of thousands of dollars.
      </SideNote>

      <p className="source">
        Fund data: Vanguard, Fidelity, and Charles Schwab, as of early 2026. SPIVA data: S&P Dow Jones Indices.
        Behavior gap research: Dalbar Quantitative Analysis of Investor Behavior.
      </p>

      <RelatedLinks links={[
        { to: '/fees', label: 'The Fee Problem' },
        { to: '/calculator', label: 'FI Calculator' },
        { to: '/accounts', label: 'Retirement Accounts' },
      ]} />
    </article>
  )
}
