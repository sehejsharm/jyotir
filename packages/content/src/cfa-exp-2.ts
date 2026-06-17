export const expansionTopics = [
  // Economics Topics
  {
    id: "cfa-economics-gdp-business-cycles",
    subjectId: "cfa-economics",
    name: "GDP, Business Cycles & Economic Indicators",
    slug: "gdp-business-cycles",
    orderIndex: 1
  },
  {
    id: "cfa-economics-monetary-fiscal-policy",
    subjectId: "cfa-economics",
    name: "Monetary & Fiscal Policy",
    slug: "monetary-fiscal-policy",
    orderIndex: 2
  },
  {
    id: "cfa-economics-international-trade-forex",
    subjectId: "cfa-economics",
    name: "International Trade & Foreign Exchange",
    slug: "international-trade-forex",
    orderIndex: 3
  },
  {
    id: "cfa-economics-geopolitics-globalisation",
    subjectId: "cfa-economics",
    name: "Geopolitics & Globalisation",
    slug: "geopolitics-globalisation",
    orderIndex: 4
  },
  // Financial Statement Analysis Topics
  {
    id: "cfa-financial-reporting-income-statement",
    subjectId: "cfa-financial-reporting",
    name: "Income Statement & Revenue Recognition",
    slug: "income-statement",
    orderIndex: 1
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity",
    subjectId: "cfa-financial-reporting",
    name: "Balance Sheet & Shareholders Equity",
    slug: "balance-sheet-equity",
    orderIndex: 2
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement",
    subjectId: "cfa-financial-reporting",
    name: "Cash Flow Statement & FCF Analysis",
    slug: "cash-flow-statement",
    orderIndex: 3
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes",
    subjectId: "cfa-financial-reporting",
    name: "Inventories, PP&E & Deferred Taxes",
    slug: "inventory-ppe-taxes",
    orderIndex: 4
  }
];

export const expansionMaterials = [
  // Material 1: GDP, Business Cycles & Economic Indicators
  {
    id: "cfa-economics-gdp-business-cycles-m01",
    topicId: "cfa-economics-gdp-business-cycles",
    title: "GDP, Business Cycles & Economic Indicators",
    content: `**Gross Domestic Product (GDP)** is the total market value of all final goods and services produced within a country in a given period. It is the primary measure of economic output and living standards.

## Measuring GDP

GDP can be measured three equivalent ways:

| Approach | Formula |
| --- | --- |
| Expenditure | GDP = C + I + G + (X - M) |
| Income | GDP = wages + profits + rents + interest |
| Value-added | Sum of value added at each production stage |

- **C** is private consumption, **I** is gross investment, **G** is government spending, and **(X - M)** is net exports.
- **Real GDP** adjusts for price changes using a base-year price level; **nominal GDP** uses current prices.

## Business Cycle Phases

Economies move through recurring expansions and contractions:

| Phase | Characteristics |
| --- | --- |
| Expansion | Rising output, employment, and confidence |
| Peak | Output at maximum; inflation pressures build |
| Contraction | Falling output and rising unemployment |
| Trough | Output at minimum; recovery begins |

- A **recession** is conventionally defined as two consecutive quarters of negative real GDP growth.

## Economic Indicators

Indicators are classified by their timing relative to the cycle:

- **Leading indicators** turn before the economy: equity prices, building permits, yield curve slope, new orders.
- **Coincident indicators** move with the economy: employment, personal income, industrial production.
- **Lagging indicators** turn after the economy: CPI, commercial loan levels, unemployment duration.

### Tip
- The yield curve is among the most reliable leading indicators; an **inverted yield curve** (short rates above long rates) has historically preceded recessions.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 2: Monetary & Fiscal Policy
  {
    id: "cfa-economics-monetary-fiscal-policy-m01",
    topicId: "cfa-economics-monetary-fiscal-policy",
    title: "Monetary & Fiscal Policy",
    content: `**Monetary policy** and **fiscal policy** are the two main tools governments and central banks use to manage economic activity, inflation, and unemployment.

## Monetary Policy

Conducted by the **central bank**, monetary policy controls the money supply and interest rates:

- **Expansionary**: lower policy rates, asset purchases (QE) — stimulates borrowing and growth.
- **Contractionary**: raise rates, sell assets — cools inflation.

The **quantity theory of money** relates money supply to nominal output:

\`\`\`
M * V = P * Y
\`\`\`

where **M** is money supply, **V** is velocity, **P** is price level, and **Y** is real output.

## Fiscal Policy

Conducted by the **government**, fiscal policy adjusts spending and taxation:

| Tool | Expansionary | Contractionary |
| --- | --- | --- |
| Government spending | Increase | Decrease |
| Taxes | Cut | Raise |

- The **fiscal multiplier** amplifies the effect of spending changes on GDP; it is larger when the marginal propensity to consume is higher.
- **Automatic stabilisers** (e.g., unemployment insurance, progressive taxes) dampen cycles without discretionary action.

## Policy Interactions

- **Crowding out**: heavy government borrowing can raise real interest rates, reducing private investment.
- Expansionary fiscal policy combined with tight monetary policy tends to raise real rates and appreciate the currency.
- Central bank **independence** from political pressure is associated with lower and more stable inflation.

### Tip
- On the exam, distinguish the **tool** (interest rate vs. government spending), the **objective** (price stability vs. growth), and the **institution** (central bank vs. treasury).`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 3: International Trade & Foreign Exchange
  {
    id: "cfa-economics-international-trade-forex-m01",
    topicId: "cfa-economics-international-trade-forex",
    title: "International Trade & Foreign Exchange",
    content: `**International trade** and **foreign exchange** markets are closely linked: trade creates demand for currencies, and exchange rate movements influence competitiveness.

## Comparative Advantage

A country has a **comparative advantage** in goods it can produce at a lower **opportunity cost**, even if another country is absolutely more efficient at everything. Specialisation and trade raise total output for both parties.

## Balance of Payments

The **BOP** records all economic transactions between residents and the rest of the world:

| Account | Records |
| --- | --- |
| Current account | Trade in goods, services, income, transfers |
| Capital account | Non-financial asset transfers |
| Financial account | Portfolio, FDI, reserve flows |

- The current account and financial account **must sum to zero** (with statistical discrepancy).
- A **current account deficit** is financed by a financial account surplus (net capital inflows).

## Exchange Rate Determination

- The **spot rate** is for immediate delivery; the **forward rate** locks in a future exchange.
- **Purchasing Power Parity (PPP)**: currencies adjust so identical baskets cost the same across countries; high-inflation currencies depreciate.
- **Covered interest rate parity**: the forward premium/discount equals the interest rate differential, eliminating arbitrage.

\`\`\`
F/S = (1 + r_d) / (1 + r_f)
\`\`\`

### Tip
- A country with higher inflation or lower real interest rates tends to see its currency **depreciate** over time — remember both PPP and the interest rate channel.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 4: Geopolitics & Globalisation
  {
    id: "cfa-economics-geopolitics-globalisation-m01",
    topicId: "cfa-economics-geopolitics-globalisation",
    title: "Geopolitics & Globalisation",
    content: `**Geopolitics** studies how geography, power, and political relationships shape economic outcomes. **Globalisation** refers to the increasing integration of economies through trade, capital, labour, and information flows.

## Drivers of Globalisation

- Trade liberalisation through **WTO** rules, bilateral and multilateral trade agreements.
- **Foreign direct investment (FDI)** and the rise of **multinational corporations**.
- Technology reducing transportation and communication costs.

## Geopolitical Risk Factors

Analysts assess geopolitical risks across several dimensions:

| Risk Type | Examples |
| --- | --- |
| Political instability | Elections, coups, policy reversals |
| Trade restrictions | Tariffs, sanctions, export controls |
| Resource nationalism | Expropriation of natural resources |
| Military conflict | Supply chain disruption, commodity shocks |

## Impact on Investments

- **Tariffs and sanctions** raise input costs, alter supply chains, and compress margins for affected firms.
- Geopolitical shocks create **risk-off** episodes: investors shift to safe-haven assets (USD, Treasuries, gold).
- **Country risk premiums** are added to discount rates for investments in politically unstable markets.

## Deglobalisation Trends

Recent trends include reshoring, friend-shoring, and strategic decoupling in semiconductors and critical minerals, reflecting a shift from pure efficiency to **resilience** in global supply chains.

### Tip
- CFA candidates should evaluate geopolitical risk through the lens of **investment implications**: which asset classes, sectors, and currencies are affected, and how does the risk premium change?`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 5: Income Statement & Revenue Recognition
  {
    id: "cfa-financial-reporting-income-statement-m01",
    topicId: "cfa-financial-reporting-income-statement",
    title: "Income Statement & Revenue Recognition",
    content: `The **income statement** (profit and loss statement) reports a company's revenues, expenses, and profits over a period. It is the primary gauge of operating performance.

## Income Statement Structure

\`\`\`
Revenue
- Cost of goods sold (COGS)
= Gross profit
- Operating expenses (SG&A, R&D, D&A)
= Operating income (EBIT)
- Interest expense
+ Other income / (expense)
= Pretax income (EBT)
- Income tax expense
= Net income
\`\`\`

## Revenue Recognition (IFRS 15 / ASC 606)

The five-step model for recognising revenue:

| Step | Action |
| --- | --- |
| 1 | Identify the contract with the customer |
| 2 | Identify the performance obligations |
| 3 | Determine the transaction price |
| 4 | Allocate price to performance obligations |
| 5 | Recognise revenue when each obligation is satisfied |

- Revenue is recognised when **control** of goods or services is transferred to the customer, not necessarily when cash is received.
- **Long-term contracts** use the **percentage-of-completion** method under IFRS; completed-contract is generally not permitted.

## Analyst Adjustments

- **Non-recurring items** (restructuring charges, asset write-downs) should be excluded from normalised earnings.
- **EBITDA** (earnings before interest, taxes, depreciation, and amortisation) is widely used as a proxy for operating cash flow but ignores capex and working capital changes.

### Tip
- Focus on whether revenue recognition timing accelerates or delays income; aggressive recognition inflates near-term earnings and inflates receivables.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 6: Balance Sheet & Shareholders Equity
  {
    id: "cfa-financial-reporting-balance-sheet-equity-m01",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    title: "Balance Sheet & Shareholders Equity",
    content: `The **balance sheet** (statement of financial position) presents a company's assets, liabilities, and shareholders equity at a point in time. The fundamental identity is:

\`\`\`
Assets = Liabilities + Shareholders Equity
\`\`\`

## Asset Classification

| Category | Examples |
| --- | --- |
| Current assets | Cash, receivables, inventory, prepaid expenses |
| Non-current assets | PP&E, intangibles, goodwill, long-term investments |

- Assets are listed in **decreasing liquidity** under US GAAP; IFRS allows the reverse.

## Liability Classification

- **Current liabilities** are due within one year: accounts payable, accrued expenses, current portion of long-term debt.
- **Non-current liabilities**: bonds payable, deferred tax liabilities, pension obligations.

## Shareholders Equity Components

\`\`\`
Shareholders equity = Paid-in capital + Retained earnings
                      - Treasury stock +/- AOCI
\`\`\`

- **Paid-in capital**: par value plus additional paid-in capital from share issuances.
- **Retained earnings**: cumulative net income less dividends paid.
- **AOCI (Accumulated Other Comprehensive Income)**: unrealised gains/losses on AFS securities, foreign currency translation adjustments, pension remeasurements.
- **Treasury stock** reduces equity; it is shares repurchased and not yet retired.

### Book Value vs Market Value

- **Book value per share** = shareholders equity / shares outstanding.
- Market value usually differs from book value; a **price-to-book ratio** below 1 may indicate distress or value.

### Tip
- AOCI items bypass the income statement; analysts must watch for large swings that affect reported equity but not net income.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 7: Cash Flow Statement & FCF Analysis
  {
    id: "cfa-financial-reporting-cash-flow-statement-m01",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    title: "Cash Flow Statement & FCF Analysis",
    content: `The **cash flow statement** reconciles net income to actual cash flows and discloses how a company generates and uses cash across three activities.

## Three Sections

| Section | Includes |
| --- | --- |
| Operating (CFO) | Cash from core business; net income adjusted for non-cash items and working capital changes |
| Investing (CFI) | Capital expenditures, acquisitions, purchases/sales of investments |
| Financing (CFF) | Debt issuance/repayment, equity issuance, dividends, share buybacks |

## Direct vs Indirect Method (CFO)

- **Direct method**: lists actual cash receipts and payments (preferred by analysts, required disclosures differ by standard).
- **Indirect method**: starts with net income and adjusts for non-cash charges and working capital changes (most common in practice).

Key adjustments under indirect method:
- Add back **depreciation and amortisation** (non-cash charges).
- Subtract increases in current assets (e.g., receivables, inventory).
- Add increases in current liabilities (e.g., payables).

## Free Cash Flow

\`\`\`
FCFF = CFO + Interest*(1-t) - Capex
FCFE = CFO - Capex + Net borrowing
\`\`\`

- **FCFF** (free cash flow to the firm) is available to all capital providers and is discounted at WACC.
- **FCFE** (free cash flow to equity) is available to equity holders and is discounted at the cost of equity.

### Tip
- High net income but low CFO is a red flag; it often signals aggressive revenue recognition or deteriorating working capital management.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  // Material 8: Inventories, PP&E & Deferred Taxes
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-m01",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    title: "Inventories, PP&E & Deferred Taxes",
    content: `Inventory, property/plant/equipment, and deferred taxes are major balance sheet items with significant accounting choices that affect comparability across firms.

## Inventory Cost Flow Methods

| Method | Allowed under IFRS | Allowed under US GAAP |
| --- | --- | --- |
| FIFO | Yes | Yes |
| Weighted average | Yes | Yes |
| LIFO | No | Yes |

- In a **rising price** environment, **LIFO** produces higher COGS, lower inventory, and lower taxable income.
- To compare a LIFO firm with FIFO peers, add the **LIFO reserve** to inventory and subtract the tax-adjusted reserve from retained earnings.

## PP&E

- Recorded at **cost** initially; subsequently at cost less accumulated depreciation (cost model) or revalued fair value under IFRS.
- **Depreciation methods**: straight-line (SL), declining balance (accelerated), and units-of-production.
- Accelerated depreciation raises early-year expenses and reduces taxable income sooner.

\`\`\`
Annual SL depreciation = (Cost - Salvage value) / Useful life
\`\`\`

## Deferred Taxes

Differences between **book income** (GAAP) and **taxable income** (tax code) create deferred tax assets and liabilities:

- **Deferred tax liability (DTL)**: tax is owed in the future (e.g., accelerated depreciation for tax purposes).
- **Deferred tax asset (DTA)**: tax savings in the future (e.g., warranty expenses recognised for book but not yet for tax).

### Tip
- Under IFRS, inventory write-downs can be **reversed** if value recovers; US GAAP prohibits inventory write-up reversals — this creates permanent comparability differences.`,
    estimatedReadTime: 2,
    orderIndex: 0
  }
];

export const expansionQuestions = [
  // Topic 1: GDP, Business Cycles & Economic Indicators (q01-q08)
  {
    id: "cfa-economics-gdp-business-cycles-q01",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "Which component is NOT included in the expenditure approach to calculating GDP?",
    optionA: "Private consumption expenditure",
    optionB: "Net exports of goods and services",
    optionC: "Gross private domestic investment",
    optionD: "Intermediate goods purchased by manufacturers",
    correctOption: "D",
    explanation: "GDP counts only final goods and services; intermediate goods are excluded to avoid double counting.",
    orderIndex: 0
  },
  {
    id: "cfa-economics-gdp-business-cycles-q02",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "An economy experiencing two consecutive quarters of declining real GDP is most likely in which phase?",
    optionA: "Peak",
    optionB: "Contraction (recession)",
    optionC: "Expansion",
    optionD: "Trough",
    correctOption: "B",
    explanation: "A recession is conventionally defined as two consecutive quarters of negative real GDP growth, placing the economy in the contraction phase.",
    orderIndex: 1
  },
  {
    id: "cfa-economics-gdp-business-cycles-q03",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "Which of the following is best classified as a leading economic indicator?",
    optionA: "Average duration of unemployment",
    optionB: "Commercial and industrial loans outstanding",
    optionC: "Slope of the yield curve",
    optionD: "Index of industrial production",
    correctOption: "C",
    explanation: "The yield curve slope is a leading indicator; an inverted curve typically precedes recessions. Unemployment duration and loan levels are lagging; industrial production is coincident.",
    orderIndex: 2
  },
  {
    id: "cfa-economics-gdp-business-cycles-q04",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "Real GDP differs from nominal GDP in that real GDP:",
    optionA: "is adjusted for changes in the price level",
    optionB: "includes only goods, not services",
    optionC: "counts government transfer payments",
    optionD: "excludes depreciation of the capital stock",
    correctOption: "A",
    explanation: "Real GDP uses base-year prices to remove the effect of inflation, making it a true volume measure of output.",
    orderIndex: 3
  },
  {
    id: "cfa-economics-gdp-business-cycles-q05",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "Which indicator typically turns after the economy has already begun to recover?",
    optionA: "New orders for capital goods",
    optionB: "Building permits issued",
    optionC: "Stock market index",
    optionD: "Consumer price index",
    correctOption: "D",
    explanation: "The CPI is a lagging indicator; inflation typically peaks and declines after the economic cycle has turned, reflecting prior demand conditions.",
    orderIndex: 4
  },
  {
    id: "cfa-economics-gdp-business-cycles-q06",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "At the peak of a business cycle, an analyst would most likely observe:",
    optionA: "maximum output and emerging inflationary pressure",
    optionB: "low output and falling business confidence",
    optionC: "high unemployment and rising inventory",
    optionD: "rapidly falling interest rates and rising consumer confidence",
    correctOption: "A",
    explanation: "At the peak, output is at its maximum and resource utilisation is high, which typically generates inflationary pressure before the contraction begins.",
    orderIndex: 5
  },
  {
    id: "cfa-economics-gdp-business-cycles-q07",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "If government spending increases by $200 billion and private consumption falls by $200 billion, GDP measured by the expenditure approach will:",
    optionA: "increase because government spending has a larger multiplier",
    optionB: "remain unchanged, as the two changes offset each other",
    optionC: "decrease because the private sector is more efficient",
    optionD: "increase by exactly $400 billion",
    correctOption: "B",
    explanation: "In the expenditure approach, C and G are additive components of GDP; an equal rise in G and fall in C leaves the total unchanged.",
    orderIndex: 6
  },
  {
    id: "cfa-economics-gdp-business-cycles-q08",
    topicId: "cfa-economics-gdp-business-cycles",
    text: "Employment and personal income data are best described as which type of economic indicator?",
    optionA: "Leading indicators",
    optionB: "Coincident indicators",
    optionC: "Lagging indicators",
    optionD: "Structural indicators",
    correctOption: "B",
    explanation: "Employment and personal income move roughly in tandem with the business cycle and are classified as coincident indicators.",
    orderIndex: 7
  },
  // Topic 2: Monetary & Fiscal Policy (q01-q08)
  {
    id: "cfa-economics-monetary-fiscal-policy-q01",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "A central bank that lowers its policy interest rate and purchases government securities is implementing:",
    optionA: "expansionary monetary policy",
    optionB: "contractionary fiscal policy",
    optionC: "contractionary monetary policy",
    optionD: "expansionary fiscal policy",
    correctOption: "A",
    explanation: "Lowering rates and purchasing securities (QE) expands the money supply and stimulates borrowing, which is expansionary monetary policy conducted by the central bank.",
    orderIndex: 0
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q02",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "In the quantity theory of money (MV = PY), if velocity and real output are constant, a 5% increase in the money supply will most likely result in:",
    optionA: "a 5% increase in real output",
    optionB: "a 5% increase in the price level",
    optionC: "a 5% decrease in velocity",
    optionD: "no change in the price level",
    correctOption: "B",
    explanation: "With V and Y constant, MV = PY implies that a 5% rise in M translates directly into a 5% rise in P, the price level.",
    orderIndex: 1
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q03",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "Automatic stabilisers differ from discretionary fiscal policy in that automatic stabilisers:",
    optionA: "act counter-cyclically without new government decisions",
    optionB: "require legislative approval before taking effect",
    optionC: "are always more powerful than spending programmes",
    optionD: "only operate during recessions, not expansions",
    correctOption: "A",
    explanation: "Automatic stabilisers such as progressive taxes and unemployment insurance respond automatically to economic conditions without requiring new legislative action.",
    orderIndex: 2
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q04",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "Crowding out refers to the tendency of expansionary fiscal policy to:",
    optionA: "reduce net exports by raising domestic prices",
    optionB: "lower private investment by pushing up real interest rates",
    optionC: "increase the money supply beyond the central bank's target",
    optionD: "raise household savings through Ricardian equivalence",
    correctOption: "B",
    explanation: "When the government borrows heavily to finance spending, competition for funds raises real interest rates, which reduces (crowds out) private sector investment.",
    orderIndex: 3
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q05",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "A combination of tight monetary policy and expansionary fiscal policy would most likely lead to:",
    optionA: "lower real interest rates and a weaker currency",
    optionB: "lower inflation and a depreciating currency",
    optionC: "higher real interest rates and an appreciating currency",
    optionD: "higher inflation and a weaker currency",
    correctOption: "C",
    explanation: "Tight monetary policy raises interest rates while expansionary fiscal policy increases government borrowing, both putting upward pressure on rates and attracting capital inflows that appreciate the currency.",
    orderIndex: 4
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q06",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "Central bank independence is primarily associated with:",
    optionA: "higher government budget deficits",
    optionB: "more volatile exchange rates over time",
    optionC: "faster economic growth in every cycle",
    optionD: "lower and more stable long-run inflation",
    correctOption: "D",
    explanation: "Research consistently finds that independent central banks free from political pressure maintain better inflation credibility, resulting in lower and more stable long-run inflation.",
    orderIndex: 5
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q07",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "A government raises taxes and cuts spending during an economic expansion. This policy is best described as:",
    optionA: "expansionary fiscal policy",
    optionB: "contractionary fiscal policy",
    optionC: "neutral fiscal policy",
    optionD: "expansionary monetary policy",
    correctOption: "B",
    explanation: "Raising taxes and cutting government spending reduces aggregate demand, making the stance contractionary fiscal policy.",
    orderIndex: 6
  },
  {
    id: "cfa-economics-monetary-fiscal-policy-q08",
    topicId: "cfa-economics-monetary-fiscal-policy",
    text: "The fiscal multiplier is largest when the marginal propensity to consume (MPC) is:",
    optionA: "equal to zero",
    optionB: "equal to one",
    optionC: "closest to one",
    optionD: "closest to zero",
    correctOption: "C",
    explanation: "The fiscal multiplier = 1 / (1 - MPC); as MPC approaches one, the multiplier grows very large because each round of spending generates nearly equal additional consumption.",
    orderIndex: 7
  },
  // Topic 3: International Trade & Foreign Exchange (q01-q08)
  {
    id: "cfa-economics-international-trade-forex-q01",
    topicId: "cfa-economics-international-trade-forex",
    text: "Comparative advantage suggests that countries should specialise in goods for which they have:",
    optionA: "the lowest absolute cost of production",
    optionB: "the lowest opportunity cost of production",
    optionC: "the highest absolute productivity levels",
    optionD: "the most advanced technological capacity",
    correctOption: "B",
    explanation: "Comparative advantage is determined by opportunity cost, not absolute cost; a country benefits by specialising where its opportunity cost is lowest relative to trading partners.",
    orderIndex: 0
  },
  {
    id: "cfa-economics-international-trade-forex-q02",
    topicId: "cfa-economics-international-trade-forex",
    text: "A country running a current account deficit is necessarily running a:",
    optionA: "surplus in its capital and financial accounts combined",
    optionB: "budget surplus in government finances",
    optionC: "trade surplus in goods but a deficit in services",
    optionD: "surplus in foreign exchange reserves",
    correctOption: "A",
    explanation: "The balance of payments must sum to zero; a current account deficit is financed by a corresponding surplus in the capital and financial accounts (net capital inflows).",
    orderIndex: 1
  },
  {
    id: "cfa-economics-international-trade-forex-q03",
    topicId: "cfa-economics-international-trade-forex",
    text: "Purchasing Power Parity (PPP) predicts that over the long run, a country with higher inflation relative to a trading partner will see its currency:",
    optionA: "appreciate to restore competitiveness",
    optionB: "remain stable due to central bank intervention",
    optionC: "depreciate by approximately the inflation differential",
    optionD: "appreciate because higher prices attract foreign investment",
    correctOption: "C",
    explanation: "PPP holds that exchange rates adjust to offset inflation differentials; the higher-inflation country's currency depreciates so that identical goods cost the same across borders.",
    orderIndex: 2
  },
  {
    id: "cfa-economics-international-trade-forex-q04",
    topicId: "cfa-economics-international-trade-forex",
    text: "Covered interest rate parity implies that the forward exchange rate premium or discount equals:",
    optionA: "the difference in inflation rates between the two countries",
    optionB: "the trade balance difference between the two economies",
    optionC: "the interest rate differential between the two countries",
    optionD: "the current account surplus of the higher-rate country",
    correctOption: "C",
    explanation: "Covered interest rate parity states that the forward premium or discount on a currency equals the interest rate differential, preventing risk-free arbitrage between money markets.",
    orderIndex: 3
  },
  {
    id: "cfa-economics-international-trade-forex-q05",
    topicId: "cfa-economics-international-trade-forex",
    text: "Which of the following is recorded in the financial account of the balance of payments?",
    optionA: "A country's exports of manufactured goods",
    optionB: "Dividend income received from foreign investments",
    optionC: "Unilateral transfer payments to foreign governments",
    optionD: "Foreign direct investment inflows to domestic firms",
    correctOption: "D",
    explanation: "FDI inflows represent cross-border investment transactions recorded in the financial account, not the current account.",
    orderIndex: 4
  },
  {
    id: "cfa-economics-international-trade-forex-q06",
    topicId: "cfa-economics-international-trade-forex",
    text: "If a domestic country's interest rates rise relative to a foreign country, the most likely immediate effect on the domestic currency is:",
    optionA: "depreciation, as borrowing costs increase",
    optionB: "appreciation, as capital flows in seeking higher yields",
    optionC: "no change, as rates do not affect exchange rates",
    optionD: "depreciation, as inflation expectations increase",
    correctOption: "B",
    explanation: "Higher domestic interest rates attract foreign capital seeking better returns, increasing demand for the domestic currency and causing it to appreciate.",
    orderIndex: 5
  },
  {
    id: "cfa-economics-international-trade-forex-q07",
    topicId: "cfa-economics-international-trade-forex",
    text: "The spot exchange rate differs from the forward exchange rate in that the spot rate:",
    optionA: "is for immediate or near-immediate currency delivery",
    optionB: "applies only to currency swap transactions",
    optionC: "is set by government regulation rather than market forces",
    optionD: "guarantees a fixed rate for future transactions",
    correctOption: "A",
    explanation: "The spot rate is the current market rate for immediate (or settlement within two business days) delivery, whereas the forward rate is agreed upon now for future delivery.",
    orderIndex: 6
  },
  {
    id: "cfa-economics-international-trade-forex-q08",
    topicId: "cfa-economics-international-trade-forex",
    text: "An import tariff imposed by a large country is most likely to:",
    optionA: "lower the domestic price of the imported good",
    optionB: "benefit domestic consumers at the expense of producers",
    optionC: "increase total economic welfare in the importing country",
    optionD: "raise the domestic price and protect domestic producers",
    correctOption: "D",
    explanation: "A tariff raises the domestic price of imports above the world price, protecting domestic producers but reducing consumer surplus; net welfare in the importing country typically falls.",
    orderIndex: 7
  },
  // Topic 4: Geopolitics & Globalisation (q01-q08)
  {
    id: "cfa-economics-geopolitics-globalisation-q01",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "A government expropriates a foreign mining company's assets without adequate compensation. This event is an example of:",
    optionA: "trade liberalisation risk",
    optionB: "currency convertibility risk",
    optionC: "resource nationalism risk",
    optionD: "portfolio rebalancing risk",
    correctOption: "C",
    explanation: "Expropriation of natural resource assets by a government is a classic form of resource nationalism, a key geopolitical risk for international investors.",
    orderIndex: 0
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q02",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "During a geopolitical risk-off episode, capital typically flows toward which of the following assets?",
    optionA: "Emerging market equities and high-yield bonds",
    optionB: "Commodities linked to industrial production",
    optionC: "Small-cap domestic growth stocks",
    optionD: "USD, US Treasuries, and gold",
    correctOption: "D",
    explanation: "In risk-off episodes driven by geopolitical stress, investors seek safe-haven assets such as the USD, US Treasuries, and gold due to their perceived stability and liquidity.",
    orderIndex: 1
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q03",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "The primary driver of post-World War II globalisation was:",
    optionA: "trade liberalisation under multilateral agreements and declining transport costs",
    optionB: "elimination of all foreign direct investment",
    optionC: "fixed exchange rate systems maintained by all major economies",
    optionD: "government mandates requiring domestic firms to export",
    correctOption: "A",
    explanation: "Globalisation was primarily driven by multilateral trade liberalisation (GATT/WTO) and technological advances that sharply reduced transportation and communication costs.",
    orderIndex: 2
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q04",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "When analysts add a country risk premium to the discount rate for an investment in a politically unstable market, this adjustment accounts for:",
    optionA: "the expected appreciation of the local currency",
    optionB: "lower corporate tax rates in emerging markets",
    optionC: "additional systematic and unsystematic risks unique to that market",
    optionD: "the diversification benefit from international exposure",
    correctOption: "C",
    explanation: "A country risk premium captures the additional risks — including political instability, expropriation, and legal uncertainty — that investors face in markets beyond standard market risk.",
    orderIndex: 3
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q05",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "Reshoring and friend-shoring of supply chains reflect a shift in corporate priorities from:",
    optionA: "sustainability to profitability",
    optionB: "labour-intensive to capital-intensive production",
    optionC: "domestic markets to global expansion",
    optionD: "pure cost efficiency to resilience and security",
    correctOption: "D",
    explanation: "Reshoring and friend-shoring represent a strategic shift away from pure cost minimisation toward supply chain resilience, driven by geopolitical tensions and pandemic-related disruptions.",
    orderIndex: 4
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q06",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "Economic sanctions imposed on a country most directly affect an investor through:",
    optionA: "improved access to the sanctioned country's capital markets",
    optionB: "increased diversification benefits from that market",
    optionC: "restricted capital flows, asset freezes, and trade disruption",
    optionD: "lower inflation expectations in the sanctioning countries",
    correctOption: "C",
    explanation: "Sanctions restrict cross-border capital flows, can freeze assets, and disrupt trade, directly impairing the value and accessibility of investments in or tied to the sanctioned country.",
    orderIndex: 5
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q07",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "Which of the following best describes the role of the WTO in the context of globalisation?",
    optionA: "Setting global monetary policy and exchange rate targets",
    optionB: "Regulating cross-border equity and bond issuances",
    optionC: "Providing a forum for trade liberalisation and dispute resolution",
    optionD: "Enforcing domestic labour and environmental standards",
    correctOption: "C",
    explanation: "The WTO provides a multilateral framework for negotiating trade liberalisation agreements and a mechanism for resolving trade disputes between member countries.",
    orderIndex: 6
  },
  {
    id: "cfa-economics-geopolitics-globalisation-q08",
    topicId: "cfa-economics-geopolitics-globalisation",
    text: "A military conflict that disrupts a major oil-producing region would most likely cause:",
    optionA: "a fall in global commodity prices and higher corporate margins",
    optionB: "a supply shock raising energy prices and compressing industrial margins",
    optionC: "a risk-on rally in equity markets due to defence spending",
    optionD: "appreciation of currencies in energy-importing nations",
    correctOption: "B",
    explanation: "A military conflict disrupting oil supply creates a negative supply shock, pushing energy prices higher and raising input costs that compress margins for energy-intensive industries.",
    orderIndex: 7
  },
  // Topic 5: Income Statement & Revenue Recognition (q01-q08)
  {
    id: "cfa-financial-reporting-income-statement-q01",
    topicId: "cfa-financial-reporting-income-statement",
    text: "Under IFRS 15 and ASC 606, revenue is recognised when:",
    optionA: "cash is received from the customer",
    optionB: "the invoice is sent to the customer",
    optionC: "control of goods or services is transferred to the customer",
    optionD: "the contract is signed by both parties",
    correctOption: "C",
    explanation: "The five-step revenue recognition model requires recognising revenue when (or as) the entity satisfies a performance obligation by transferring control to the customer.",
    orderIndex: 0
  },
  {
    id: "cfa-financial-reporting-income-statement-q02",
    topicId: "cfa-financial-reporting-income-statement",
    text: "EBITDA is commonly used as a proxy for operating cash flow but has a significant limitation because it ignores:",
    optionA: "depreciation and amortisation charges",
    optionB: "interest expense and tax payments",
    optionC: "capital expenditures and working capital changes",
    optionD: "non-recurring restructuring charges",
    correctOption: "C",
    explanation: "EBITDA adds back non-cash charges but does not account for capex needed to maintain operations or changes in working capital, making it an imperfect cash flow proxy.",
    orderIndex: 1
  },
  {
    id: "cfa-financial-reporting-income-statement-q03",
    topicId: "cfa-financial-reporting-income-statement",
    text: "On the income statement, gross profit is calculated as:",
    optionA: "revenue minus all operating expenses including SG&A",
    optionB: "revenue minus cost of goods sold",
    optionC: "revenue minus interest expense and taxes",
    optionD: "operating income plus depreciation and amortisation",
    correctOption: "B",
    explanation: "Gross profit equals revenue minus the cost of goods sold (COGS), reflecting the profitability of core production before operating expenses.",
    orderIndex: 2
  },
  {
    id: "cfa-financial-reporting-income-statement-q04",
    topicId: "cfa-financial-reporting-income-statement",
    text: "An analyst identifying non-recurring items such as restructuring charges in an income statement should most likely:",
    optionA: "include them in normalised earnings to be conservative",
    optionB: "exclude them when calculating normalised or core earnings",
    optionC: "capitalise them on the balance sheet for future amortisation",
    optionD: "double-count them to account for future recurrence",
    correctOption: "B",
    explanation: "Non-recurring items distort the underlying earnings power of the business; analysts exclude them to derive a normalised earnings figure that better reflects sustainable performance.",
    orderIndex: 3
  },
  {
    id: "cfa-financial-reporting-income-statement-q05",
    topicId: "cfa-financial-reporting-income-statement",
    text: "Under the percentage-of-completion method for long-term contracts, revenue is recognised:",
    optionA: "only upon final delivery and customer acceptance",
    optionB: "equally across all periods regardless of progress",
    optionC: "when all costs have been incurred and recovered",
    optionD: "in proportion to the stage of completion each period",
    correctOption: "D",
    explanation: "The percentage-of-completion method allocates revenue and costs to each period based on the proportion of the contract completed, matching revenue with the work performed.",
    orderIndex: 4
  },
  {
    id: "cfa-financial-reporting-income-statement-q06",
    topicId: "cfa-financial-reporting-income-statement",
    text: "A company that accelerates revenue recognition relative to the economic delivery of its product would most likely show:",
    optionA: "inflated near-term earnings and higher accounts receivable",
    optionB: "lower near-term revenues and higher accounts payable",
    optionC: "lower gross margins and reduced cash flow from operations",
    optionD: "higher deferred revenue and lower reported net income",
    correctOption: "A",
    explanation: "Aggressive early revenue recognition inflates reported earnings in the near term and increases receivables, as cash has not yet been collected from customers.",
    orderIndex: 5
  },
  {
    id: "cfa-financial-reporting-income-statement-q07",
    topicId: "cfa-financial-reporting-income-statement",
    text: "Operating income (EBIT) is best defined as:",
    optionA: "earnings before interest and taxes from core operations",
    optionB: "gross profit minus depreciation only",
    optionC: "net income before preferred dividends",
    optionD: "net income plus interest expense",
    correctOption: "A",
    explanation: "EBIT (earnings before interest and taxes) represents operating income from core business activities before the effects of capital structure and tax obligations.",
    orderIndex: 6
  },
  {
    id: "cfa-financial-reporting-income-statement-q08",
    topicId: "cfa-financial-reporting-income-statement",
    text: "A software company sells a bundled product containing a licence and one year of support. Under the five-step model, the company should:",
    optionA: "recognise all revenue on the contract signing date",
    optionB: "identify two performance obligations and allocate the price to each",
    optionC: "defer all revenue until the support period is complete",
    optionD: "recognise revenue only when the entire contract is terminated",
    correctOption: "B",
    explanation: "The five-step model requires identifying distinct performance obligations; the licence and the support are separate obligations, and the transaction price must be allocated to each.",
    orderIndex: 7
  },
  // Topic 6: Balance Sheet & Shareholders Equity (q01-q08)
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q01",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "The fundamental accounting equation underlying the balance sheet is:",
    optionA: "Assets = Revenue - Expenses",
    optionB: "Assets = Liabilities + Shareholders Equity",
    optionC: "Net income = Assets - Liabilities",
    optionD: "Cash flow = Net income + Depreciation",
    correctOption: "B",
    explanation: "The balance sheet identity is Assets = Liabilities + Shareholders Equity, reflecting that all assets are financed either by debt (liabilities) or by owners' contributions and retained profits.",
    orderIndex: 0
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q02",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Accumulated Other Comprehensive Income (AOCI) arises from items that:",
    optionA: "are included in net income and retained earnings",
    optionB: "arise only from dividend payments to shareholders",
    optionC: "are recorded as long-term liabilities on the balance sheet",
    optionD: "bypass the income statement and affect equity directly",
    correctOption: "D",
    explanation: "AOCI captures unrealised gains/losses on AFS securities, foreign currency translation adjustments, and pension remeasurements that go directly to equity without passing through the income statement.",
    orderIndex: 1
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q03",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Treasury stock on the balance sheet represents shares that have been:",
    optionA: "issued and outstanding in the hands of the public",
    optionB: "authorised but never issued to investors",
    optionC: "converted from preferred into common stock",
    optionD: "repurchased by the company and not yet retired",
    correctOption: "D",
    explanation: "Treasury stock consists of shares the company has repurchased from shareholders but not cancelled; it reduces total shareholders equity and is not considered outstanding.",
    orderIndex: 2
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q04",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Under IFRS, balance sheet assets are generally presented in which order?",
    optionA: "Decreasing order of liquidity (most liquid last)",
    optionB: "Only alphabetical order is acceptable",
    optionC: "Increasing order of liquidity (least liquid first) or decreasing, both permitted",
    optionD: "Strictly increasing order of value",
    correctOption: "C",
    explanation: "IFRS allows companies to present assets in either increasing or decreasing order of liquidity; US GAAP requires decreasing liquidity (most liquid first).",
    orderIndex: 3
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q05",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "A company's price-to-book ratio is below 1.0. This most likely indicates that the market:",
    optionA: "believes the firm's assets are worth less than their book value",
    optionB: "values the firm more than its recorded net assets",
    optionC: "expects very high future earnings growth from the firm",
    optionD: "is unaware of the company's true asset values",
    correctOption: "A",
    explanation: "A price-to-book ratio below 1 means the market price is below book value per share, suggesting the market believes the assets are impaired, the business is unprofitable, or book value is overstated.",
    orderIndex: 4
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q06",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Which of the following is classified as a non-current (long-term) liability on the balance sheet?",
    optionA: "Defined benefit pension obligation",
    optionB: "Accrued wages payable in the current period",
    optionC: "Accounts payable due in 30 days",
    optionD: "Current portion of long-term debt",
    correctOption: "A",
    explanation: "A defined benefit pension obligation is a long-term commitment to fund future employee benefits, classified as a non-current liability; the other options are current liabilities.",
    orderIndex: 5
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q07",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Retained earnings on the balance sheet represent:",
    optionA: "the cumulative net income earned less dividends paid over time",
    optionB: "cash held by the company in its bank account",
    optionC: "shares issued above their par value to investors",
    optionD: "unrealised gains recorded in other comprehensive income",
    correctOption: "A",
    explanation: "Retained earnings accumulate all net income earned since inception, reduced by dividends paid; they are not a cash account but a measure of reinvested profits.",
    orderIndex: 6
  },
  {
    id: "cfa-financial-reporting-balance-sheet-equity-q08",
    topicId: "cfa-financial-reporting-balance-sheet-equity",
    text: "Goodwill appearing on a company's balance sheet arises when:",
    optionA: "the company generates brand value through advertising",
    optionB: "the company internally develops patents and trademarks",
    optionC: "the company acquires another firm for more than the fair value of net identifiable assets",
    optionD: "the fair value of assets exceeds their carrying amount",
    correctOption: "C",
    explanation: "Goodwill is the excess of the acquisition price paid over the fair value of the target's identifiable net assets; it is only recognised through a business combination, not internal development.",
    orderIndex: 7
  },
  // Topic 7: Cash Flow Statement & FCF Analysis (q01-q08)
  {
    id: "cfa-financial-reporting-cash-flow-statement-q01",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "Under the indirect method of preparing the cash flow from operations, depreciation is added back to net income because:",
    optionA: "it is a non-cash charge that reduced net income but did not use cash",
    optionB: "it represents a cash inflow from asset disposals",
    optionC: "it increases the tax shield and reduces tax payments",
    optionD: "it offsets capital expenditures in the investing section",
    correctOption: "A",
    explanation: "Depreciation reduces net income without requiring a cash outflow; the indirect method adds it back to reconcile net income to actual cash generated from operations.",
    orderIndex: 0
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q02",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "Capital expenditures (capex) appear on the cash flow statement under:",
    optionA: "cash flows from operating activities",
    optionB: "cash flows from financing activities",
    optionC: "cash flows from investing activities",
    optionD: "supplemental disclosure of non-cash activities",
    correctOption: "C",
    explanation: "Capital expenditures represent purchases of long-term assets and are classified as cash outflows in the investing activities section of the cash flow statement.",
    orderIndex: 1
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q03",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "Free cash flow to equity (FCFE) is most accurately calculated as:",
    optionA: "EBITDA minus taxes and capex",
    optionB: "net income plus depreciation minus capex",
    optionC: "FCFF minus interest expense",
    optionD: "CFO minus capex plus net borrowing",
    correctOption: "D",
    explanation: "FCFE = CFO - Capex + Net borrowing; this represents cash available to equity holders after reinvestment needs and after accounting for debt transactions.",
    orderIndex: 2
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q04",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "A company reports high net income but very low cash flow from operations. This pattern is most likely a sign of:",
    optionA: "efficient working capital management and high asset turnover",
    optionB: "aggressive revenue recognition or deteriorating working capital",
    optionC: "conservative accounting that understates true earnings",
    optionD: "high depreciation charges reducing taxable income",
    correctOption: "B",
    explanation: "A large gap between net income and CFO often indicates aggressive revenue recognition (inflating income) or rising receivables and inventory consuming cash — both red flags for analysts.",
    orderIndex: 3
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q05",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "Dividend payments to shareholders are classified under which section of the cash flow statement under US GAAP?",
    optionA: "Operating activities",
    optionB: "Investing activities",
    optionC: "Supplemental non-cash disclosures",
    optionD: "Financing activities",
    correctOption: "D",
    explanation: "Under US GAAP, dividend payments to shareholders are classified as cash outflows from financing activities, reflecting their nature as returns of capital to equity providers.",
    orderIndex: 4
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q06",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "Free cash flow to the firm (FCFF) is discounted at the WACC rather than the cost of equity because FCFF represents:",
    optionA: "cash available only to equity holders after debt service",
    optionB: "net income adjusted for non-cash working capital changes",
    optionC: "operating income after taxes but before depreciation",
    optionD: "cash available to all capital providers before financing costs",
    correctOption: "D",
    explanation: "FCFF is available to both debt and equity holders before any financing payments; it must be discounted at the WACC, which blends the required returns of all capital providers.",
    orderIndex: 5
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q07",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "An increase in accounts receivable during a period would appear in the indirect method cash flow from operations as:",
    optionA: "an addition to net income, as more sales were made",
    optionB: "a non-cash investing activity disclosed in supplemental notes",
    optionC: "a financing inflow, reflecting customer credit extended",
    optionD: "a subtraction from net income, as cash has not yet been collected",
    correctOption: "D",
    explanation: "An increase in receivables means revenue was recognised but cash not yet received; this use of working capital is subtracted from net income in the indirect method.",
    orderIndex: 6
  },
  {
    id: "cfa-financial-reporting-cash-flow-statement-q08",
    topicId: "cfa-financial-reporting-cash-flow-statement",
    text: "The direct method of presenting cash flows from operations differs from the indirect method in that the direct method:",
    optionA: "shows actual cash received from customers and paid to suppliers",
    optionB: "starts with net income and adjusts for non-cash items",
    optionC: "is only permitted under US GAAP, not IFRS",
    optionD: "excludes changes in working capital from the calculation",
    correctOption: "A",
    explanation: "The direct method lists actual cash receipts (e.g., from customers) and cash payments (e.g., to suppliers, employees) rather than starting from net income and working backward.",
    orderIndex: 7
  },
  // Topic 8: Inventories, PP&E & Deferred Taxes (q01-q08)
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q01",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "LIFO inventory accounting is permitted under US GAAP but prohibited under IFRS. In a period of rising prices, LIFO produces:",
    optionA: "higher ending inventory and lower COGS than FIFO",
    optionB: "lower ending inventory and higher COGS than FIFO",
    optionC: "identical COGS and inventory values to FIFO",
    optionD: "higher net income and higher taxes than FIFO",
    correctOption: "B",
    explanation: "Under LIFO in a rising price environment, the most recently purchased (higher-cost) inventory is expensed first, yielding higher COGS and lower ending inventory compared with FIFO.",
    orderIndex: 0
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q02",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "To compare a LIFO firm with a FIFO peer, an analyst should add the LIFO reserve to the LIFO firm's:",
    optionA: "COGS on the income statement",
    optionB: "accumulated depreciation on PP&E",
    optionC: "total debt on the balance sheet",
    optionD: "inventory balance on the balance sheet",
    correctOption: "D",
    explanation: "The LIFO reserve is the cumulative difference between LIFO and FIFO inventory values; adding it to the LIFO firm's inventory restates it to approximate FIFO and allows comparability.",
    orderIndex: 1
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q03",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "Under the straight-line depreciation method, annual depreciation expense is calculated as:",
    optionA: "(Cost + Salvage value) divided by useful life",
    optionB: "Cost multiplied by the declining balance rate",
    optionC: "(Cost - Salvage value) divided by useful life",
    optionD: "Units produced divided by total estimated units",
    correctOption: "C",
    explanation: "Straight-line depreciation spreads the depreciable base (cost minus salvage value) evenly over the asset's useful life, producing the same expense each period.",
    orderIndex: 2
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q04",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "A deferred tax liability arises when:",
    optionA: "book income exceeds taxable income, creating a future tax obligation",
    optionB: "taxable income exceeds book income, so taxes are paid early",
    optionC: "a company records a tax loss carryforward on its balance sheet",
    optionD: "warranty expenses are recognised for tax before book purposes",
    correctOption: "A",
    explanation: "A DTL arises when book income exceeds taxable income (e.g., due to accelerated tax depreciation), meaning taxes that should have been paid now will be owed in the future.",
    orderIndex: 3
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q05",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "Under IFRS, if market value recovers after an inventory write-down, the company is permitted to:",
    optionA: "write up inventory but only to its original historical cost",
    optionB: "write up inventory to any market value regardless of cost",
    optionC: "reverse the write-down up to the original carrying amount",
    optionD: "not adjust inventory; the write-down is permanent under IFRS",
    correctOption: "C",
    explanation: "IFRS (IAS 2) permits reversal of a prior inventory write-down if the net realisable value subsequently recovers, limited to the original write-down amount; US GAAP prohibits any reversal.",
    orderIndex: 4
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q06",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "Compared with straight-line depreciation, an accelerated depreciation method will in early years produce:",
    optionA: "lower depreciation expense and higher net income",
    optionB: "higher depreciation expense and lower taxable income",
    optionC: "identical depreciation but different salvage values",
    optionD: "lower total depreciation over the entire asset life",
    correctOption: "B",
    explanation: "Accelerated methods (e.g., double-declining balance) front-load depreciation, producing higher expense in early years, lower taxable income, and deferred tax liabilities relative to straight-line.",
    orderIndex: 5
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q07",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "A deferred tax asset is most likely created when a company:",
    optionA: "uses accelerated depreciation for tax but straight-line for books",
    optionB: "capitalises an expense for book purposes that is immediately expensed for tax",
    optionC: "recognises revenue earlier for book purposes than for tax purposes",
    optionD: "recognises warranty expense for book purposes before it is deductible for taxes",
    correctOption: "D",
    explanation: "Warranty expense recognised on the books before it is tax-deductible creates a temporary difference where book income is lower than taxable income, generating a deferred tax asset (future tax savings).",
    orderIndex: 6
  },
  {
    id: "cfa-financial-reporting-inventory-ppe-taxes-q08",
    topicId: "cfa-financial-reporting-inventory-ppe-taxes",
    text: "Under IFRS, the revaluation model for PP&E allows a company to:",
    optionA: "revalue assets to fair value, with gains going to other comprehensive income",
    optionB: "revalue assets downward only, never upward",
    optionC: "revalue assets to replacement cost charged directly to net income",
    optionD: "choose any value above historical cost for balance sheet presentation",
    correctOption: "A",
    explanation: "The IFRS revaluation model permits PP&E to be carried at fair value; revaluation increases (surpluses) bypass net income and are recorded in other comprehensive income (revaluation surplus).",
    orderIndex: 7
  }
];
