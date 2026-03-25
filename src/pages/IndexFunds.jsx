import Stat from '../components/Stat'
import Rule from '../components/Rule'
import SideNote from '../components/SideNote'

export default function IndexFunds() {
  return (
    <div className="page">
      <span className="section-number">02</span>
      <h1>Index Funds</h1>
      <p className="subtitle">
        The case for owning the entire market — and paying almost nothing to do it.
      </p>

      <Stat value="94%" label="of actively managed large-cap funds underperformed their index over twenty years" />

      <Rule />

      <h2>The SPIVA Scorecard</h2>
      <p>
        Standard & Poor's publishes a semi-annual report comparing actively managed funds to their
        benchmark indices. The results are consistent and devastating for active management.
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
        The simplest evidence-based investment strategy requires just three funds: a U.S. total
        stock market index, an international stock index, and a U.S. total bond market index.
        This gives you broad diversification across thousands of companies and bonds at near-zero cost.
      </p>

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

      <SideNote>
        Expense ratios shown are annual costs as a percentage of assets. Fidelity's ZERO funds
        have no expense ratio at all. The difference between 0.00% and 0.11% may seem trivial, but
        on a $3 million portfolio held for 30 years, it compounds to tens of thousands of dollars.
      </SideNote>

      <Rule />

      <h2>The Simplest Option</h2>
      <p>
        If choosing three funds and rebalancing feels like more than you want to manage right now,
        buy a single <strong>target-date fund</strong>. These funds hold a mix of stocks and bonds and
        automatically shift more conservative as you approach retirement. Vanguard's Target Retirement
        2065 fund (VLXVX) charges <strong>0.08%</strong> and handles everything. You can always move
        to a three-fund portfolio later when you have the bandwidth.
      </p>

      <p className="source">
        Fund data: Vanguard, Fidelity, and Charles Schwab, as of early 2026. SPIVA data: S&P Dow Jones Indices.
      </p>
    </div>
  )
}
