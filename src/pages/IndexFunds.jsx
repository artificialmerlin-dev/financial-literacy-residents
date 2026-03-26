import Card from '../components/Card'
import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function IndexFunds() {
  return (
    <div className="page">
      <span className="section-number">02</span>
      <h1>Index Funds</h1>
      <p className="caption" style={{ marginBottom: '0.5rem' }}>6 min read</p>
      <p className="subtitle">
        The case for owning the entire market — and paying almost nothing to do it.
      </p>

      <Stat value="94%" label="of actively managed large-cap funds underperformed their index over twenty years" />

      <Rule />

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

      <Rule />

      <h2>The SPIVA Scorecard</h2>
      <p>
        The S&P SPIVA Scorecard (an independent study that tracks how professional money managers
        perform against simple index funds) is published semi-annually by Standard & Poor's.
        The results are consistent and devastating for active management.
        Over one year, <strong>54%</strong> of actively managed large-cap funds underperform.
        Over five years, <strong>77%</strong>. Over ten, <strong>87%</strong>. Over fifteen, <strong>92%</strong>.
        Over twenty years, <strong>94%</strong> of active funds fail to beat the index. On a risk-adjusted
        basis, <strong>97%</strong> underperform over twenty years.
      </p>
      <p>
        These are not cherry-picked numbers. This is the most comprehensive, survivorship-bias-free
        dataset on active fund performance in existence.
      </p>
      <p className="source">Source: S&P SPIVA U.S. Scorecard, 2005-2024.</p>

      <Rule />

      <h2>The Million-Dollar Bet</h2>
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

      <h2>The Three-Fund Portfolio</h2>
      <p>
        If you want more control, the simplest evidence-based investment strategy requires just three funds: a U.S. total
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
      </p>
    </div>
  )
}
