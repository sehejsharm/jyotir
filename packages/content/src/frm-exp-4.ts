export const expansionTopics = [
  // SUBJECT 1: Operational & Integrated Risk
  {
    id: "frm-operational-risk-loss-distribution",
    subjectId: "frm-operational-risk",
    name: "Loss Distribution Approach",
    slug: "loss-distribution",
    orderIndex: 1
  },
  {
    id: "frm-operational-risk-key-risk-indicators",
    subjectId: "frm-operational-risk",
    name: "Key Risk Indicators & RCSA",
    slug: "key-risk-indicators",
    orderIndex: 2
  },
  {
    id: "frm-operational-risk-cyber-technology-risk",
    subjectId: "frm-operational-risk",
    name: "Cyber & Technology Risk",
    slug: "cyber-technology-risk",
    orderIndex: 3
  },
  {
    id: "frm-operational-risk-business-continuity",
    subjectId: "frm-operational-risk",
    name: "Business Continuity & Resilience",
    slug: "business-continuity",
    orderIndex: 4
  },
  // SUBJECT 2: Liquidity & Treasury Risk
  {
    id: "frm-liquidity-risk-funding-liquidity",
    subjectId: "frm-liquidity-risk",
    name: "Funding Liquidity Risk & Metrics",
    slug: "funding-liquidity",
    orderIndex: 1
  },
  {
    id: "frm-liquidity-risk-market-liquidity",
    subjectId: "frm-liquidity-risk",
    name: "Market (Asset) Liquidity Risk",
    slug: "market-liquidity",
    orderIndex: 2
  },
  {
    id: "frm-liquidity-risk-stress-testing",
    subjectId: "frm-liquidity-risk",
    name: "Liquidity Stress Testing",
    slug: "stress-testing",
    orderIndex: 3
  },
  {
    id: "frm-liquidity-risk-alm",
    subjectId: "frm-liquidity-risk",
    name: "Asset-Liability Management",
    slug: "alm",
    orderIndex: 4
  }
];

export const expansionMaterials = [
  {
    id: "frm-operational-risk-loss-distribution-m01",
    topicId: "frm-operational-risk-loss-distribution",
    title: "Loss Distribution Approach",
    content: `The **Loss Distribution Approach (LDA)** is the primary statistical method for quantifying operational risk capital under the **Advanced Measurement Approach (AMA)** of Basel II. It models the aggregate annual loss by combining two separate distributions.

## Frequency Distribution
The number of loss events in a period is typically modelled with a **Poisson distribution**, characterised by a single parameter lambda (the expected event count). When variance exceeds the mean, a **negative binomial** distribution is used instead.

## Severity Distribution
The size of each individual loss is modelled independently, most commonly with a **lognormal** or **Pareto** distribution. The lognormal is preferred for its positive support and heavy right tail, which captures the rare but catastrophic losses that dominate operational risk capital.

## Convolution
The aggregate loss distribution is obtained by **convolving** the frequency and severity distributions, usually via **Monte Carlo simulation**:
1. Draw a random event count N from the frequency distribution.
2. Draw N independent loss amounts from the severity distribution.
3. Sum to get aggregate loss; repeat thousands of times.

The result is the full **aggregate loss distribution**, from which the **99.9th percentile** is taken as the regulatory capital charge.

## Data Requirements

| Source | Purpose |
| --- | --- |
| Internal loss data | Calibrate severity for own business lines |
| External loss data | Fill tail with industry events |
| Scenario analysis | Capture low-frequency, high-impact events |
| Business environment factors | Adjust for current risk profile |

## AMA Under Basel

Under the **AMA**, banks could use LDA provided the model captured at least four data elements per event. Basel III/IV replaced the AMA with the **Standardised Measurement Approach (SMA)**, reducing model flexibility but improving comparability. Understanding LDA remains central to FRM because it underpins internal stress models.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-key-risk-indicators-m01",
    topicId: "frm-operational-risk-key-risk-indicators",
    title: "Key Risk Indicators & RCSA",
    content: `**Key Risk Indicators (KRIs)** are quantitative metrics that provide early warning of rising operational risk exposure. They complement loss data by capturing the environment before losses materialise.

## Risk Control Self-Assessment (RCSA)
**RCSA** is a structured process in which business units identify their risks, evaluate the effectiveness of existing controls, and rate residual risk. The typical RCSA cycle involves:
1. **Risk identification** workshops with front-line staff.
2. **Inherent risk** scoring (likelihood x impact before controls).
3. **Control effectiveness** assessment.
4. **Residual risk** scoring and action planning.

## Designing Effective KRIs
A good KRI is **measurable, timely, predictive**, and directly linked to a specific risk. Examples include:
- Number of system downtime minutes per month (IT failure risk).
- Staff turnover rate in key control functions (people risk).
- Number of failed trades or settlement breaks (process risk).

## Thresholds and Escalation
KRIs are assigned **green / amber / red** thresholds. When a metric breaches amber, management is notified; red triggers escalation to senior risk committees. Thresholds must be calibrated to historical data and updated periodically.

## Heat Maps

| Likelihood | Low Impact | Medium Impact | High Impact |
| --- | --- | --- | --- |
| High | Amber | Red | Red |
| Medium | Green | Amber | Red |
| Low | Green | Green | Amber |

**Risk heat maps** visualise the residual risk landscape from RCSA, allowing prioritisation of mitigation resources. When KRI trends and RCSA outcomes are integrated, risk managers gain a forward-looking view that pure loss-history analysis cannot provide.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-m01",
    topicId: "frm-operational-risk-cyber-technology-risk",
    title: "Cyber & Technology Risk",
    content: `**Cyber risk** is the potential for financial loss, reputational damage, or regulatory penalty arising from the failure, misuse, or deliberate compromise of information technology systems. It is a subcategory of operational risk and one of the fastest-growing concerns for financial institutions.

## Types of Cyber Attacks
- **Phishing / spear-phishing**: Deceptive communications that trick employees into revealing credentials.
- **Ransomware**: Malware that encrypts data and demands payment for decryption keys.
- **Distributed Denial of Service (DDoS)**: Floods systems with traffic to cause outages.
- **Insider threats**: Malicious or negligent acts by employees or contractors.
- **Supply chain attacks**: Compromise of third-party software or vendors to reach the target.

## NIST Cybersecurity Framework
The **NIST CSF** organises cyber risk management into five functions: **Identify, Protect, Detect, Respond, Recover**. Regulators including the Basel Committee endorse this framework for financial institutions.

## Quantification
Cyber risk is difficult to quantify because loss data are sparse and events are correlated. Common approaches include **scenario analysis**, **factor-based models**, and **cyber insurance pricing benchmarks**. The **FAIR (Factor Analysis of Information Risk)** model provides a probabilistic framework.

## Third-Party Risk
Banks rely heavily on cloud providers, payment processors, and software vendors. **Third-party cyber risk** requires due diligence assessments, contractual security requirements, and ongoing monitoring. A breach at a vendor can cascade to the bank even if internal systems are secure.

## Regulatory Expectations
Regulators require boards to oversee cyber risk, institutions to maintain cyber incident response plans, and material incidents to be reported within defined timeframes. Capital allocations for cyber risk increasingly draw on operational risk AMA or scenario-based stress tests.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-business-continuity-m01",
    topicId: "frm-operational-risk-business-continuity",
    title: "Business Continuity & Resilience",
    content: `**Business Continuity Planning (BCP)** is the proactive process of ensuring critical business functions can continue during and after a disruption. It is distinct from but closely related to **Disaster Recovery Planning (DRP)**, which focuses specifically on restoring IT systems and data.

## BCP vs DRP

| Dimension | BCP | DRP |
| --- | --- | --- |
| Scope | All critical business functions | IT systems and data recovery |
| Goal | Sustain operations | Restore technology |
| Ownership | Business units + risk | IT department |

## Key Metrics
- **Recovery Time Objective (RTO)**: The maximum acceptable downtime before a function must be restored.
- **Recovery Point Objective (RPO)**: The maximum tolerable data loss, measured in time (e.g., backups must be no older than 4 hours).

## Crisis Management
An effective crisis management framework includes a **Crisis Management Team (CMT)** with defined roles, pre-approved communication templates, and escalation triggers. The CMT coordinates between business, IT, legal, communications, and regulators during an event.

## Operational Resilience
Regulators now emphasise **operational resilience** over traditional BCP: the ability to prevent, adapt to, respond to, recover from, and learn from disruptions. Key steps include identifying **important business services**, setting **impact tolerances**, and mapping end-to-end dependencies including third parties.

## Testing
BCP and DRP must be tested regularly through:
- **Tabletop exercises**: Discussion-based walkthroughs.
- **Simulation exercises**: Functional rehearsals of response procedures.
- **Full failover tests**: Live switching to backup systems.

Test results must feed back into plan improvements, and lessons learned must be documented and acted upon.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-m01",
    topicId: "frm-liquidity-risk-funding-liquidity",
    title: "Funding Liquidity Risk & Metrics",
    content: `**Funding liquidity risk** is the risk that a firm cannot meet its cash flow obligations as they fall due without incurring unacceptable cost. Basel III introduced two binding quantitative standards to address the structural and short-term dimensions of this risk.

## Liquidity Coverage Ratio (LCR)
The **LCR** ensures banks hold enough high-quality liquid assets (HQLA) to survive a 30-day stress scenario:

\`\`\`
LCR = HQLA / Net Cash Outflows (30-day stress) >= 100%
\`\`\`

**HQLA** are split into Level 1 (cash, central bank reserves, sovereign bonds - no haircut) and Level 2 (corporate bonds, covered bonds - haircuts apply). Net cash outflows apply prescribed run-off rates to deposits and funding lines.

## Net Stable Funding Ratio (NSFR)
The **NSFR** addresses structural funding mismatches over a one-year horizon:

\`\`\`
NSFR = Available Stable Funding / Required Stable Funding >= 100%
\`\`\`

Stable funding sources (equity, long-term debt, retail deposits) are weighted more favourably than short-term wholesale funding.

## Intraday Liquidity
Beyond overnight positions, banks must manage **intraday liquidity** - the cash needed to settle payment and securities obligations throughout the trading day. Central bank payment systems create peak demand that can differ substantially from end-of-day positions.

## Central Bank Facilities
In stress, banks access **central bank standing facilities** and **repo operations** as a backstop. The availability and cost of these facilities affect the practical LCR buffer needed. Collateral eligibility rules determine which assets can be pledged.

| Metric | Horizon | Purpose |
| --- | --- | --- |
| LCR | 30 days | Short-term stress survival |
| NSFR | 1 year | Structural funding stability |
| Intraday | Same day | Payment system settlement |`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-market-liquidity-m01",
    topicId: "frm-liquidity-risk-market-liquidity",
    title: "Market (Asset) Liquidity Risk",
    content: `**Market liquidity risk** (also called asset liquidity risk) is the risk that a position cannot be liquidated quickly at or near its fair value. Unlike funding liquidity, which concerns cash flows, market liquidity concerns transaction costs and price impact when trading.

## Bid-Ask Spread
The **bid-ask spread** is the simplest liquidity measure: the difference between the price at which a market-maker will buy (bid) and sell (ask). A wider spread signals lower liquidity. The half-spread represents the immediate cost of executing a trade.

## Market Depth and Price Impact
**Market depth** refers to the volume of orders at each price level. A deep market absorbs large trades with little price movement. The **price impact** (or market impact) of a trade measures how much the execution price deviates from the pre-trade mid price for a given order size.

## Liquidity-Adjusted VaR (LVaR)
Standard VaR assumes positions can be liquidated instantly at mid-market. **Liquidity-adjusted VaR** adds the cost of unwinding positions:

\`\`\`
LVaR = VaR + Liquidity Cost
Liquidity Cost = (1/2) * Spread * Position Value
\`\`\`

For large positions, the price impact must also be incorporated, scaling the cost with position size relative to average daily volume.

## Liquidity Risk Premium
Investors demand a **liquidity risk premium** for holding illiquid assets. This premium varies over time and spikes during stress, driving asset prices down and amplifying market dislocations. The **Amihud illiquidity ratio** (absolute return divided by dollar volume) quantifies this.

| Indicator | Measures |
| --- | --- |
| Bid-ask spread | Transaction cost per unit |
| Market depth | Order book resilience |
| Price impact | Cost of large trades |
| Amihud ratio | Return-to-volume illiquidity |`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-stress-testing-m01",
    topicId: "frm-liquidity-risk-stress-testing",
    title: "Liquidity Stress Testing",
    content: `**Liquidity stress testing** assesses a bank's ability to survive adverse scenarios that impair its ability to fund itself. It is a core component of the **Internal Liquidity Adequacy Assessment Process (ILAAP)** required by supervisors under Basel III Pillar 2.

## Survival Horizon
The **survival horizon** is the period over which the bank projects it can meet all obligations using available liquid assets, even if wholesale markets are closed and retail deposits run off at stressed rates. Regulators typically require a minimum horizon of 30 days (aligned with LCR) and often longer for ILAAP purposes.

## Stress Scenarios
Liquidity stress tests generally cover three scenario types:

| Scenario | Description |
| --- | --- |
| Idiosyncratic | Bank-specific crisis (rating downgrade, reputational event) |
| Market-wide | System-wide funding freeze (like 2008) |
| Combined | Both occurring simultaneously |

Each scenario applies stressed run-off rates to deposits and drawdown rates to committed credit lines.

## Cash Flow Stress Modelling
Under stress, the bank projects **contractual cash inflows** (loan repayments, securities maturities) versus **stressed cash outflows** (deposit withdrawals, collateral calls, derivatives margin). The **net cumulative outflow** profile reveals when the buffer is exhausted.

## Liquidity Buffer
The **liquidity buffer** (or contingency liquidity reserve) must exceed net stressed outflows throughout the survival horizon. It consists of unencumbered HQLA that can be monetised rapidly without significant haircut even in stressed markets.

## ILAAP and Supervisory Review
Banks submit ILAAP documents to supervisors, who challenge scenario severity and buffer adequacy. Supervisors may impose **Pillar 2 liquidity add-ons** if the internal stress test is deemed insufficient.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-alm-m01",
    topicId: "frm-liquidity-risk-alm",
    title: "Asset-Liability Management",
    content: `**Asset-Liability Management (ALM)** is the practice of managing a bank's balance sheet to control interest rate risk and liquidity risk arising from the mismatch between assets and liabilities. The **ALCO (Asset-Liability Committee)** oversees these decisions.

## Gap Analysis
**Gap analysis** compares the volume of assets and liabilities repricing within defined time buckets. A **positive gap** (more assets than liabilities repricing) benefits from rising rates; a **negative gap** benefits from falling rates.

\`\`\`
Repricing Gap = Rate-Sensitive Assets - Rate-Sensitive Liabilities
\`\`\`

## Duration Gap
**Duration gap** extends gap analysis to capture the present-value sensitivity of equity to interest rate changes:

\`\`\`
Duration Gap = Duration(Assets) - [Liabilities/Assets] * Duration(Liabilities)
\`\`\`

A positive duration gap means equity value falls when rates rise.

## NII vs EVE
Two complementary metrics dominate ALM:

| Metric | Focus | Horizon |
| --- | --- | --- |
| Net Interest Income (NII) | Earnings impact of rate shift | Short term (1-2 years) |
| Economic Value of Equity (EVE) | Present-value impact on equity | Long term (full balance sheet) |

Regulators under Basel IRRBB require banks to monitor both and disclose EVE sensitivity to a standard 200bp parallel shift.

## Immunisation Strategies
**Immunisation** aims to make portfolio value insensitive to interest rate changes. Techniques include:
- **Duration matching**: Matching asset and liability duration.
- **Cash flow matching**: Aligning cash flows in each period.
- **Interest rate swaps**: Exchanging fixed for floating payments to adjust repricing profiles.

These strategies require rebalancing as rates change and portfolio composition evolves.`,
    estimatedReadTime: 2,
    orderIndex: 0
  }
];

export const expansionQuestions = [
  // Topic 1: Loss Distribution Approach (q01-q08)
  {
    id: "frm-operational-risk-loss-distribution-q01",
    topicId: "frm-operational-risk-loss-distribution",
    text: "In the Loss Distribution Approach, which distribution is most commonly used to model the frequency of operational loss events?",
    optionA: "Normal distribution",
    optionB: "Exponential distribution",
    optionC: "Poisson distribution",
    optionD: "Beta distribution",
    correctOption: "C",
    explanation: "The Poisson distribution is the standard choice for event frequency in LDA because it models count data with a single parameter (lambda) representing the expected number of events per period.",
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-loss-distribution-q02",
    topicId: "frm-operational-risk-loss-distribution",
    text: "Which severity distribution is preferred in LDA primarily because it accommodates a heavy right tail and is defined only for positive values?",
    optionA: "Normal distribution",
    optionB: "Uniform distribution",
    optionC: "Student-t distribution",
    optionD: "Lognormal distribution",
    correctOption: "D",
    explanation: "The lognormal distribution is favoured for operational loss severities because it has positive support and its heavy right tail captures the rare catastrophic losses that dominate capital requirements.",
    orderIndex: 1
  },
  {
    id: "frm-operational-risk-loss-distribution-q03",
    topicId: "frm-operational-risk-loss-distribution",
    text: "The process of combining a frequency distribution and a severity distribution to derive the aggregate loss distribution is known as:",
    optionA: "Calibration",
    optionB: "Convolution",
    optionC: "Bootstrapping",
    optionD: "Deconvolution",
    correctOption: "B",
    explanation: "Convolution (typically implemented via Monte Carlo simulation) combines the frequency and severity distributions to produce the aggregate annual loss distribution from which capital is measured.",
    orderIndex: 2
  },
  {
    id: "frm-operational-risk-loss-distribution-q04",
    topicId: "frm-operational-risk-loss-distribution",
    text: "Under the Basel II Advanced Measurement Approach, the regulatory operational risk capital charge is set at which percentile of the aggregate loss distribution?",
    optionA: "95th percentile",
    optionB: "97.5th percentile",
    optionC: "99th percentile",
    optionD: "99.9th percentile",
    correctOption: "D",
    explanation: "The AMA requires banks to hold capital equal to the 99.9th percentile (one-year) aggregate loss, consistent with the Basel II target solvency standard for operational risk.",
    orderIndex: 3
  },
  {
    id: "frm-operational-risk-loss-distribution-q05",
    topicId: "frm-operational-risk-loss-distribution",
    text: "A bank finds that the variance of its annual loss event count exceeds the mean. Which frequency distribution is more appropriate than the Poisson?",
    optionA: "Negative binomial distribution",
    optionB: "Binomial distribution",
    optionC: "Geometric distribution",
    optionD: "Hypergeometric distribution",
    correctOption: "A",
    explanation: "The negative binomial distribution relaxes the Poisson assumption of equal mean and variance, accommodating overdispersion (variance greater than mean) seen in many operational loss datasets.",
    orderIndex: 4
  },
  {
    id: "frm-operational-risk-loss-distribution-q06",
    topicId: "frm-operational-risk-loss-distribution",
    text: "Under LDA data requirements, scenario analysis is used primarily to:",
    optionA: "Capture low-frequency, high-impact tail events",
    optionB: "Estimate expected loss for routine events",
    optionC: "Replace internal loss data entirely",
    optionD: "Determine the frequency parameter for the Poisson model",
    correctOption: "A",
    explanation: "Scenario analysis supplements internal data by providing expert judgment on extreme but plausible events that rarely appear in historical records, ensuring the tail of the severity distribution is adequately calibrated.",
    orderIndex: 5
  },
  {
    id: "frm-operational-risk-loss-distribution-q07",
    topicId: "frm-operational-risk-loss-distribution",
    text: "Basel III/IV replaced the Advanced Measurement Approach with which standardised method for operational risk capital?",
    optionA: "Basic Indicator Approach",
    optionB: "Standardised Approach (SA)",
    optionC: "Standardised Measurement Approach (SMA)",
    optionD: "Internal Ratings-Based Approach",
    correctOption: "C",
    explanation: "The Standardised Measurement Approach (SMA) replaced all earlier operational risk approaches under Basel IV, combining a business indicator component with a bank's own loss history in a prescribed formula.",
    orderIndex: 6
  },
  {
    id: "frm-operational-risk-loss-distribution-q08",
    topicId: "frm-operational-risk-loss-distribution",
    text: "External loss data is incorporated into LDA mainly to:",
    optionA: "Reduce the need for internal data collection",
    optionB: "Enrich the tail of the severity distribution with industry events",
    optionC: "Satisfy regulatory disclosure requirements",
    optionD: "Determine the mean of the frequency distribution",
    correctOption: "B",
    explanation: "External loss data from industry consortia (e.g., ORX) provide observations of large-scale losses that are too rare to appear in a single bank's own history, improving tail calibration.",
    orderIndex: 7
  },

  // Topic 2: Key Risk Indicators & RCSA (q01-q08)
  {
    id: "frm-operational-risk-key-risk-indicators-q01",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "Which of the following best describes a Risk Control Self-Assessment (RCSA)?",
    optionA: "A process where business units identify risks and evaluate control effectiveness",
    optionB: "A statistical model that forecasts future losses from historical data",
    optionC: "A regulatory capital calculation method replacing internal models",
    optionD: "An audit of financial statements for compliance purposes",
    correctOption: "A",
    explanation: "RCSA is a forward-looking process in which business lines systematically identify their risks, rate their controls, and determine residual exposure, feeding into the broader operational risk framework.",
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q02",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "A KRI that measures the number of failed trade settlements per month is most directly linked to which risk category?",
    optionA: "People risk",
    optionB: "Process risk",
    optionC: "Legal risk",
    optionD: "Strategic risk",
    correctOption: "B",
    explanation: "Failed settlements typically result from breakdowns in operational processes such as trade capture, matching, or instruction transmission, making this a process risk indicator.",
    orderIndex: 1
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q03",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "In an RCSA heat map, which cell combination would typically be assigned a Red rating?",
    optionA: "Low likelihood, low impact",
    optionB: "Low likelihood, medium impact",
    optionC: "High likelihood, low impact",
    optionD: "High likelihood, high impact",
    correctOption: "D",
    explanation: "A heat map assigns the highest risk rating (Red) to scenarios with both high likelihood and high impact, indicating an unacceptable residual risk that demands immediate mitigation.",
    orderIndex: 2
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q04",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "Which of the following is NOT a characteristic of a well-designed KRI?",
    optionA: "Backward-looking, based only on past losses",
    optionB: "Predictive of future risk events",
    optionC: "Measurable and quantifiable",
    optionD: "Timely and reported at an appropriate frequency",
    correctOption: "A",
    explanation: "Effective KRIs are designed to be forward-looking and predictive; purely backward-looking loss measures are lagging indicators, not true key risk indicators.",
    orderIndex: 3
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q05",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "When a KRI breaches its amber threshold, the appropriate response is to:",
    optionA: "Immediately halt all related business activities",
    optionB: "No action is required until red threshold is breached",
    optionC: "Escalate directly to the board without management involvement",
    optionD: "Notify management and monitor the situation closely",
    correctOption: "D",
    explanation: "An amber breach signals elevated risk requiring management attention and closer monitoring; a red breach triggers escalation to senior risk committees, while amber allows time to investigate and respond before escalation.",
    orderIndex: 4
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q06",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "The RCSA process scores 'inherent risk' before considering controls. This represents:",
    optionA: "The risk remaining after all controls are applied",
    optionB: "The regulatory capital charge for operational risk",
    optionC: "The risk transferred to insurance or third parties",
    optionD: "The risk that exists in the absence of any mitigating controls",
    correctOption: "D",
    explanation: "Inherent risk is the gross risk level that would exist if no controls were in place; subtracting the effect of controls gives the residual risk that management must accept or further mitigate.",
    orderIndex: 5
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q07",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "High staff turnover in a key control function is an example of which type of operational risk KRI?",
    optionA: "System availability KRI",
    optionB: "People risk KRI",
    optionC: "External fraud KRI",
    optionD: "Legal and compliance KRI",
    correctOption: "B",
    explanation: "Staff turnover directly affects the quality of control execution and institutional knowledge, making it a leading indicator of people risk within operational risk management.",
    orderIndex: 6
  },
  {
    id: "frm-operational-risk-key-risk-indicators-q08",
    topicId: "frm-operational-risk-key-risk-indicators",
    text: "Which statement best explains why KRIs and RCSA complement loss data in an operational risk framework?",
    optionA: "They replace internal loss data when the AMA is used",
    optionB: "They are required only for Pillar 3 disclosure purposes",
    optionC: "They provide a forward-looking view, capturing risk before losses occur",
    optionD: "They measure market risk exposures that feed into op risk capital",
    correctOption: "C",
    explanation: "Loss data is inherently backward-looking; KRIs and RCSA add a prospective dimension by flagging deteriorating controls and rising risk environments before actual losses materialise.",
    orderIndex: 7
  },

  // Topic 3: Cyber & Technology Risk (q01-q08)
  {
    id: "frm-operational-risk-cyber-technology-risk-q01",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "Which type of cyber attack encrypts a victim's data and demands payment for the decryption key?",
    optionA: "Ransomware",
    optionB: "Phishing",
    optionC: "DDoS",
    optionD: "SQL injection",
    correctOption: "A",
    explanation: "Ransomware is malicious software that encrypts files or systems and extorts payment for restoration, posing severe operational and reputational risk to financial institutions.",
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q02",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "A Distributed Denial of Service (DDoS) attack primarily aims to:",
    optionA: "Steal sensitive customer data",
    optionB: "Install spyware on employee devices",
    optionC: "Overwhelm systems with traffic to cause service outages",
    optionD: "Intercept communications between counterparties",
    correctOption: "C",
    explanation: "DDoS attacks flood target systems with massive volumes of requests, exhausting capacity and making services unavailable to legitimate users, disrupting critical banking operations.",
    orderIndex: 1
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q03",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "The NIST Cybersecurity Framework organises cyber risk management into five functions. Which of the following is NOT one of them?",
    optionA: "Identify",
    optionB: "Protect",
    optionC: "Recover",
    optionD: "Transfer",
    correctOption: "D",
    explanation: "The five NIST CSF functions are Identify, Protect, Detect, Respond, and Recover. Transfer is a risk treatment option but not one of the framework's core functions.",
    orderIndex: 2
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q04",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "Which probabilistic framework is commonly used to quantify cyber risk in monetary terms?",
    optionA: "GARCH model",
    optionB: "Black-Scholes model",
    optionC: "FAIR (Factor Analysis of Information Risk)",
    optionD: "Vasicek credit model",
    correctOption: "C",
    explanation: "The FAIR model provides a structured, probabilistic method for estimating cyber loss exposure in monetary terms, enabling comparison with other operational risks and informing cyber insurance decisions.",
    orderIndex: 3
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q05",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "A supply chain cyber attack differs from a direct attack in that it:",
    optionA: "Exploits compromised third-party software or vendors to reach the target",
    optionB: "Targets the bank's trading systems exclusively",
    optionC: "Requires physical access to the target's data centre",
    optionD: "Only affects publicly listed companies",
    correctOption: "A",
    explanation: "Supply chain attacks compromise a trusted vendor or software provider as an entry point, allowing attackers to reach target organisations that may have strong direct defences but insufficient third-party controls.",
    orderIndex: 4
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q06",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "Spear-phishing differs from generic phishing primarily because it:",
    optionA: "Targets only external customers rather than employees",
    optionB: "Is highly personalised and targeted at specific individuals",
    optionC: "Uses malware rather than deceptive communications",
    optionD: "Requires the attacker to be physically present at the institution",
    correctOption: "B",
    explanation: "Spear-phishing uses personalised information about the target (name, role, colleagues) to make deceptive communications more convincing, significantly increasing success rates compared to mass phishing campaigns.",
    orderIndex: 5
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q07",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "A primary regulatory expectation regarding cyber risk at the board level is that boards should:",
    optionA: "Oversee cyber risk as part of the overall risk governance framework",
    optionB: "Outsource all cyber risk management to specialist firms",
    optionC: "Personally conduct penetration testing of systems",
    optionD: "Limit cyber disclosures to avoid market sensitivity",
    correctOption: "A",
    explanation: "Regulators require boards to provide oversight and governance of cyber risk, ensuring it is embedded in the risk management framework rather than treated solely as a technical IT matter.",
    orderIndex: 6
  },
  {
    id: "frm-operational-risk-cyber-technology-risk-q08",
    topicId: "frm-operational-risk-cyber-technology-risk",
    text: "Why is cyber risk particularly difficult to quantify using standard statistical methods?",
    optionA: "Cyber losses are always below reporting thresholds",
    optionB: "Loss data are sparse and cyber events tend to be correlated across institutions",
    optionC: "Regulators prohibit the use of statistical models for cyber risk",
    optionD: "Cyber risk only affects reputational value, which cannot be measured",
    correctOption: "B",
    explanation: "The scarcity of historical cyber loss data and the potential for simultaneous correlated losses across institutions (e.g., from a widespread infrastructure attack) make standard statistical calibration unreliable.",
    orderIndex: 7
  },

  // Topic 4: Business Continuity & Resilience (q01-q08)
  {
    id: "frm-operational-risk-business-continuity-q01",
    topicId: "frm-operational-risk-business-continuity",
    text: "What is the primary distinction between a Business Continuity Plan (BCP) and a Disaster Recovery Plan (DRP)?",
    optionA: "BCP focuses on sustaining critical business functions; DRP focuses on restoring IT systems",
    optionB: "BCP applies only to natural disasters, while DRP applies to cyber incidents",
    optionC: "DRP is a broader plan that encompasses all elements of BCP",
    optionD: "BCP is required by regulation, while DRP is voluntary",
    correctOption: "A",
    explanation: "BCP covers all critical business operations and their continuity during disruptions, while DRP is a subset focused specifically on recovering IT infrastructure and data.",
    orderIndex: 0
  },
  {
    id: "frm-operational-risk-business-continuity-q02",
    topicId: "frm-operational-risk-business-continuity",
    text: "A bank's payment processing system has an RTO of 4 hours. This means the system must be:",
    optionA: "Fully restored and operational within 4 hours of a disruption",
    optionB: "Backed up every 4 hours",
    optionC: "Tested for failures no more than 4 times per year",
    optionD: "Available 4 hours per day during a crisis",
    correctOption: "A",
    explanation: "The Recovery Time Objective (RTO) defines the maximum acceptable downtime; an RTO of 4 hours means business continuity plans must restore the system within that window.",
    orderIndex: 1
  },
  {
    id: "frm-operational-risk-business-continuity-q03",
    topicId: "frm-operational-risk-business-continuity",
    text: "Recovery Point Objective (RPO) measures:",
    optionA: "The maximum tolerable data loss expressed in time",
    optionB: "The time required to restore normal operations",
    optionC: "The cost of implementing backup systems",
    optionD: "The frequency of BCP testing exercises",
    correctOption: "A",
    explanation: "RPO defines how much data (in terms of time elapsed since the last backup) the organisation can afford to lose; a 2-hour RPO means backups must be taken at least every 2 hours.",
    orderIndex: 2
  },
  {
    id: "frm-operational-risk-business-continuity-q04",
    topicId: "frm-operational-risk-business-continuity",
    text: "Under the concept of operational resilience, regulators require institutions to define:",
    optionA: "The maximum profit target during a crisis period",
    optionB: "Impact tolerances for important business services",
    optionC: "Minimum capital buffers for technology failures",
    optionD: "Insurance coverage levels for operational losses",
    correctOption: "B",
    explanation: "Operational resilience regulation requires firms to identify their important business services and set impact tolerances - the maximum level of disruption they can accept before harm to customers or financial stability occurs.",
    orderIndex: 3
  },
  {
    id: "frm-operational-risk-business-continuity-q05",
    topicId: "frm-operational-risk-business-continuity",
    text: "Which type of BCP test involves a live switchover to backup systems without simulating a real event?",
    optionA: "Tabletop exercise",
    optionB: "Simulation exercise",
    optionC: "Full failover test",
    optionD: "Document review",
    correctOption: "C",
    explanation: "A full failover test actually switches production operations to backup systems, providing the most realistic validation that recovery capabilities work as planned under genuine operational conditions.",
    orderIndex: 4
  },
  {
    id: "frm-operational-risk-business-continuity-q06",
    topicId: "frm-operational-risk-business-continuity",
    text: "A Crisis Management Team (CMT) in a financial institution typically includes representatives from:",
    optionA: "Only the IT department and risk management",
    optionB: "Business, IT, legal, communications, and risk functions",
    optionC: "Regulators and external auditors",
    optionD: "Front-office trading desks exclusively",
    correctOption: "B",
    explanation: "Effective crisis management requires cross-functional representation, as a major operational disruption demands coordinated responses across business operations, technology recovery, legal obligations, regulatory communication, and public relations.",
    orderIndex: 5
  },
  {
    id: "frm-operational-risk-business-continuity-q07",
    topicId: "frm-operational-risk-business-continuity",
    text: "Tabletop exercises in BCP testing are best described as:",
    optionA: "Discussion-based walkthroughs of crisis scenarios with key personnel",
    optionB: "Physical rehearsals that simulate actual system failures",
    optionC: "Automated software tests of backup system recovery times",
    optionD: "Annual reviews of the written BCP document",
    correctOption: "A",
    explanation: "Tabletop exercises are structured discussions where participants talk through responses to hypothetical crisis scenarios, identifying gaps in plans without disrupting operations or switching to backup systems.",
    orderIndex: 6
  },
  {
    id: "frm-operational-risk-business-continuity-q08",
    topicId: "frm-operational-risk-business-continuity",
    text: "The operational resilience approach differs from traditional BCP primarily because it:",
    optionA: "Focuses only on technology recovery rather than business functions",
    optionB: "Is voluntary and not subject to regulatory oversight",
    optionC: "Replaces the need for disaster recovery planning",
    optionD: "Emphasises the ability to adapt and recover, including from events not specifically anticipated",
    correctOption: "D",
    explanation: "Operational resilience goes beyond traditional BCP by requiring firms to absorb and adapt to a wide range of disruptions - including unanticipated ones - rather than just executing predefined recovery scripts.",
    orderIndex: 7
  },

  // Topic 5: Funding Liquidity Risk & Metrics (q01-q08)
  {
    id: "frm-liquidity-risk-funding-liquidity-q01",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "The Liquidity Coverage Ratio (LCR) requires banks to hold sufficient HQLA to survive a stress scenario lasting how long?",
    optionA: "7 days",
    optionB: "14 days",
    optionC: "90 days",
    optionD: "30 days",
    correctOption: "D",
    explanation: "The LCR is calibrated to a 30-day stress scenario; banks must hold HQLA equal to or exceeding net cash outflows over that period, with a minimum ratio of 100%.",
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q02",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "Which of the following is classified as Level 1 HQLA under the LCR framework?",
    optionA: "Investment-grade corporate bonds with a 15% haircut",
    optionB: "Cash and central bank reserves",
    optionC: "Covered bonds rated AA or above",
    optionD: "Equities included in major indices",
    correctOption: "B",
    explanation: "Level 1 HQLA includes cash, central bank reserves, and sovereign bonds of zero risk-weight, all recognised at 100% of value with no haircut applied.",
    orderIndex: 1
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q03",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "The Net Stable Funding Ratio (NSFR) is designed to address which dimension of liquidity risk?",
    optionA: "Intraday settlement risk in payment systems",
    optionB: "Short-term market liquidity for trading positions",
    optionC: "Structural funding mismatches over a one-year horizon",
    optionD: "Credit risk in the loan book",
    correctOption: "C",
    explanation: "The NSFR addresses structural funding stability over a one-year horizon, requiring the amount of stable funding to meet or exceed required stable funding across all asset categories.",
    orderIndex: 2
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q04",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "In the NSFR formula, which funding source would typically receive the highest Available Stable Funding (ASF) weight?",
    optionA: "Overnight interbank borrowing",
    optionB: "Equity capital and long-term debt (maturity > 1 year)",
    optionC: "Retail deposits with maturities under 1 year",
    optionD: "Secured short-term borrowing backed by non-HQLA",
    correctOption: "B",
    explanation: "Equity and long-term debt (maturity exceeding one year) receive an ASF factor of 100%, reflecting their stability as permanent or long-dated funding sources that will not need refinancing within the stress horizon.",
    orderIndex: 3
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q05",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "Intraday liquidity refers to funds needed to:",
    optionA: "Fund the bank's overnight repo book",
    optionB: "Cover margin calls on derivative positions over 30 days",
    optionC: "Meet payment and securities settlement obligations during the business day",
    optionD: "Satisfy the NSFR requirement on a same-day basis",
    correctOption: "C",
    explanation: "Intraday liquidity is the cash required to settle payment obligations in real-time gross settlement systems throughout the trading day, and peaks can differ substantially from end-of-day positions.",
    orderIndex: 4
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q06",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "A bank's LCR is calculated as 85%. This means the bank:",
    optionA: "Holds 15% more HQLA than required",
    optionB: "Has met the NSFR minimum requirement",
    optionC: "Has a 15% surplus over net cash outflows",
    optionD: "Fails to meet the minimum 100% LCR requirement",
    correctOption: "D",
    explanation: "An LCR below 100% indicates the bank's HQLA is insufficient to cover projected net cash outflows over the 30-day stress period, representing a shortfall requiring corrective action.",
    orderIndex: 5
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q07",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "Central bank standing facilities serve which primary role in a bank's liquidity management?",
    optionA: "A primary source of day-to-day funding to minimise HQLA holdings",
    optionB: "A backstop source of liquidity when market funding is unavailable",
    optionC: "A mechanism to transfer liquidity risk to the public sector",
    optionD: "A tool for generating income from idle reserve balances",
    correctOption: "B",
    explanation: "Central bank facilities act as a lender-of-last-resort backstop; while available, regulators expect banks to maintain adequate liquidity buffers independently rather than relying on central bank access as a primary funding source.",
    orderIndex: 6
  },
  {
    id: "frm-liquidity-risk-funding-liquidity-q08",
    topicId: "frm-liquidity-risk-funding-liquidity",
    text: "Which statement about LCR net cash outflows is correct?",
    optionA: "Different deposit types are assigned different regulatory run-off rates",
    optionB: "Committed credit lines are excluded from outflow calculations",
    optionC: "All deposits are assumed to run off at 100% in the 30-day stress",
    optionD: "Inflows and outflows are measured at nominal value without any caps",
    correctOption: "A",
    explanation: "The LCR framework prescribes specific run-off rates by deposit type (e.g., stable retail deposits at 3%, less stable at 10%, unsecured wholesale at higher rates) reflecting their likelihood of withdrawal under stress.",
    orderIndex: 7
  },

  // Topic 6: Market (Asset) Liquidity Risk (q01-q08)
  {
    id: "frm-liquidity-risk-market-liquidity-q01",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "The bid-ask spread in a financial market represents:",
    optionA: "The annual fee charged by brokers for holding positions",
    optionB: "The minimum margin required to hold a leveraged position",
    optionC: "The difference between the highest buy price and lowest sell price offered by market-makers",
    optionD: "The difference between the opening and closing price of an asset",
    correctOption: "C",
    explanation: "The bid-ask spread is the gap between the market-maker's bid (buying price) and ask (selling price), representing the immediate round-trip transaction cost and a primary measure of market liquidity.",
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q02",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "Liquidity-Adjusted VaR (LVaR) differs from standard VaR because it:",
    optionA: "Uses a shorter confidence interval to be more conservative",
    optionB: "Replaces historical simulation with Monte Carlo methods",
    optionC: "Adds the estimated cost of unwinding positions to the standard VaR",
    optionD: "Measures funding liquidity risk rather than market risk",
    correctOption: "C",
    explanation: "LVaR augments standard VaR by incorporating the bid-ask spread cost (and price impact for large positions), reflecting that liquidating a portfolio in stress costs more than simply marking to mid-market prices.",
    orderIndex: 1
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q03",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "A deep market is characterised by:",
    optionA: "Large volume of orders at multiple price levels absorbing trades with minimal impact",
    optionB: "Thin order books with few resting orders at each price",
    optionC: "A wide bid-ask spread reflecting high transaction costs",
    optionD: "High short-term price volatility and frequent price gaps",
    correctOption: "A",
    explanation: "Market depth refers to the ability to absorb large orders without significant price movement; deep markets have substantial order volume at each price level, minimising the price impact of any individual trade.",
    orderIndex: 2
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q04",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "The Amihud illiquidity ratio is calculated as:",
    optionA: "Bid-ask spread divided by asset price",
    optionB: "Absolute daily return divided by daily dollar trading volume",
    optionC: "Daily volume divided by market capitalisation",
    optionD: "Price impact multiplied by position size",
    correctOption: "B",
    explanation: "The Amihud ratio equals the absolute return divided by dollar volume, capturing how much prices move per dollar of trading volume - a higher ratio signals greater illiquidity and price impact.",
    orderIndex: 3
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q05",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "During a market stress event, the liquidity risk premium typically:",
    optionA: "Narrows as investors seek safe assets",
    optionB: "Stays constant because it is calibrated over long periods",
    optionC: "Spikes, driving illiquid asset prices down and amplifying losses",
    optionD: "Becomes irrelevant as central banks provide unlimited liquidity",
    correctOption: "C",
    explanation: "In stress, investors demand much higher compensation for holding illiquid assets, causing their prices to fall sharply - a liquidity risk premium spike that amplifies losses beyond what fundamental value changes would imply.",
    orderIndex: 4
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q06",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "For a large position, the liquidity cost in LVaR must account for price impact because:",
    optionA: "Large positions always involve structured products requiring specialist valuation",
    optionB: "Regulators require a fixed price impact add-on for positions above a threshold",
    optionC: "Unwinding a large order moves the market against the seller, worsening execution prices",
    optionD: "Price impact only affects the bid but not the ask price",
    correctOption: "C",
    explanation: "Selling a large block of securities into the market absorbs available bids, pushing the price down before the full position is liquidated; this adverse price impact must be included in the liquidity cost estimate.",
    orderIndex: 5
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q07",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "Which asset would typically have the narrowest bid-ask spread?",
    optionA: "A small-cap emerging market equity",
    optionB: "A structured credit product with limited secondary market",
    optionC: "An on-the-run US Treasury bond",
    optionD: "A real estate investment with infrequent appraisals",
    correctOption: "C",
    explanation: "On-the-run US Treasury bonds are among the most actively traded and liquid securities in the world, with very narrow bid-ask spreads due to high volume, standardised structure, and broad market participation.",
    orderIndex: 6
  },
  {
    id: "frm-liquidity-risk-market-liquidity-q08",
    topicId: "frm-liquidity-risk-market-liquidity",
    text: "The standard VaR formula assumes positions can be liquidated at mid-market prices. This assumption is most problematic when:",
    optionA: "Markets are highly liquid and trading volumes are elevated",
    optionB: "Positions are small relative to average daily trading volume",
    optionC: "The holding period used in VaR exceeds 10 days",
    optionD: "Positions are large relative to market depth and markets are stressed",
    correctOption: "D",
    explanation: "The mid-market pricing assumption breaks down most severely when positions are large relative to available liquidity, particularly during stress when market depth shrinks; in such cases LVaR is essential.",
    orderIndex: 7
  },

  // Topic 7: Liquidity Stress Testing (q01-q08)
  {
    id: "frm-liquidity-risk-stress-testing-q01",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "The survival horizon in a liquidity stress test is defined as:",
    optionA: "The maximum holding period for HQLA before they must be sold",
    optionB: "The period over which the bank can meet all obligations using available liquid assets under stress",
    optionC: "The time required to restore normal funding conditions after a crisis",
    optionD: "The duration of the historical stress period used to calibrate the test",
    correctOption: "B",
    explanation: "The survival horizon is the forward-looking period during which the bank projects it can remain solvent and liquid using its buffer, even if wholesale funding markets are closed and deposits are running off at stressed rates.",
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-stress-testing-q02",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "A combined stress scenario in liquidity stress testing is designed to capture:",
    optionA: "Only market-wide funding freezes similar to the 2008 financial crisis",
    optionB: "Only bank-specific events such as rating downgrades",
    optionC: "Normal business conditions with a 10% haircut on all assets",
    optionD: "Both idiosyncratic and market-wide stresses occurring simultaneously",
    correctOption: "D",
    explanation: "The combined scenario - the most severe in liquidity stress testing - overlaps a bank-specific crisis with a market-wide funding disruption, testing whether the buffer is adequate when multiple stresses occur together.",
    orderIndex: 1
  },
  {
    id: "frm-liquidity-risk-stress-testing-q03",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "Which of the following would be a stressed cash outflow item in a liquidity stress test?",
    optionA: "Contractual loan repayments received from borrowers",
    optionB: "Maturing securities held in the HQLA portfolio",
    optionC: "Additional collateral required on derivative contracts due to a rating downgrade",
    optionD: "Dividend income from equity investments",
    correctOption: "C",
    explanation: "A rating downgrade triggers contractual collateral top-up clauses on derivative transactions, representing a contingent cash outflow that must be captured in the stressed outflow projection.",
    orderIndex: 2
  },
  {
    id: "frm-liquidity-risk-stress-testing-q04",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "The liquidity buffer in stress testing must consist of:",
    optionA: "Unencumbered HQLA that can be monetised rapidly without significant haircut in stress",
    optionB: "Any assets on the balance sheet including illiquid loans",
    optionC: "Committed credit lines from other financial institutions",
    optionD: "Regulatory capital in excess of minimum requirements",
    correctOption: "A",
    explanation: "The liquidity buffer must comprise unencumbered HQLA - assets that are free from legal or contractual restrictions and can be converted to cash quickly even under stressed market conditions.",
    orderIndex: 3
  },
  {
    id: "frm-liquidity-risk-stress-testing-q05",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "ILAAP stands for Internal Liquidity Adequacy Assessment Process and is part of which Basel pillar?",
    optionA: "Pillar 2 - Supervisory Review Process",
    optionB: "Pillar 1 - Minimum Capital Requirements",
    optionC: "Pillar 3 - Market Discipline",
    optionD: "Pillar 4 - Macroprudential Overlay",
    correctOption: "A",
    explanation: "ILAAP is a Pillar 2 requirement under Basel III; banks conduct their own internal assessment of liquidity adequacy, and supervisors review and challenge it, potentially imposing additional liquidity requirements.",
    orderIndex: 4
  },
  {
    id: "frm-liquidity-risk-stress-testing-q06",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "An idiosyncratic liquidity stress scenario would typically include which assumption?",
    optionA: "All banks simultaneously losing access to interbank markets",
    optionB: "Central bank withdrawal of emergency liquidity facilities",
    optionC: "A sovereign debt crisis affecting multiple country markets",
    optionD: "A bank-specific reputational event causing retail deposit withdrawals",
    correctOption: "D",
    explanation: "An idiosyncratic scenario models stresses unique to the individual institution - such as a rating downgrade, fraud announcement, or loss event - that damage its reputation and trigger deposit outflows or funding withdrawal.",
    orderIndex: 5
  },
  {
    id: "frm-liquidity-risk-stress-testing-q07",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "Net cumulative outflow profiling in a liquidity stress test helps management identify:",
    optionA: "The regulatory capital charge for operational risk",
    optionB: "The point in time when the liquidity buffer would be exhausted under stress",
    optionC: "The optimal mix of funding instruments for the balance sheet",
    optionD: "The credit rating sensitivity of wholesale funding costs",
    correctOption: "B",
    explanation: "By projecting cumulative net outflows over the survival horizon, management can identify when (and if) the buffer runs out, enabling targeted action to extend the survival horizon above the regulatory minimum.",
    orderIndex: 6
  },
  {
    id: "frm-liquidity-risk-stress-testing-q08",
    topicId: "frm-liquidity-risk-stress-testing",
    text: "If a supervisor finds a bank's internal stress scenarios insufficiently severe, what action can the supervisor take?",
    optionA: "Issue a public fine but cannot change the bank's internal model",
    optionB: "Require immediate closure of the bank",
    optionC: "Impose a Pillar 2 liquidity add-on to the minimum requirement",
    optionD: "Transfer the bank's HQLA to a ring-fenced fund",
    correctOption: "C",
    explanation: "Under the ILAAP Pillar 2 framework, supervisors can impose institution-specific liquidity add-ons if internal stress test scenarios or buffers are deemed inadequate relative to the bank's actual risk profile.",
    orderIndex: 7
  },

  // Topic 8: Asset-Liability Management (q01-q08)
  {
    id: "frm-liquidity-risk-alm-q01",
    topicId: "frm-liquidity-risk-alm",
    text: "In gap analysis, a positive repricing gap indicates that:",
    optionA: "More assets than liabilities reprice in a given time bucket, benefiting from rising rates",
    optionB: "Liabilities reprice faster than assets, benefiting from rising rates",
    optionC: "The bank's net interest margin is negative",
    optionD: "The bank has more fixed-rate liabilities than variable-rate assets",
    correctOption: "A",
    explanation: "A positive gap (rate-sensitive assets exceed rate-sensitive liabilities) means net interest income rises when interest rates increase, as more assets are re-priced upward than liabilities.",
    orderIndex: 0
  },
  {
    id: "frm-liquidity-risk-alm-q02",
    topicId: "frm-liquidity-risk-alm",
    text: "The duration gap is defined as:",
    optionA: "Duration of assets minus duration of liabilities",
    optionB: "Duration of liabilities minus duration of assets",
    optionC: "Duration of assets minus (Liabilities/Assets) multiplied by duration of liabilities",
    optionD: "The weighted average maturity of the asset portfolio",
    correctOption: "C",
    explanation: "Duration gap = Duration(A) - (L/A) x Duration(L), where the liabilities-to-assets ratio scales the liability duration to reflect the leverage of equity, capturing the net interest rate sensitivity of economic value.",
    orderIndex: 1
  },
  {
    id: "frm-liquidity-risk-alm-q03",
    topicId: "frm-liquidity-risk-alm",
    text: "A positive duration gap means that when interest rates rise, the economic value of equity will:",
    optionA: "Increase, because asset values rise faster than liability values",
    optionB: "Decrease, because asset values fall more than liability values",
    optionC: "Remain unchanged, because duration gap is immunised",
    optionD: "Increase, because liabilities reprice faster than assets",
    correctOption: "B",
    explanation: "With a positive duration gap, assets have longer duration than liabilities; rising rates reduce asset prices more than liability prices in present-value terms, causing the economic value of equity to fall.",
    orderIndex: 2
  },
  {
    id: "frm-liquidity-risk-alm-q04",
    topicId: "frm-liquidity-risk-alm",
    text: "Net Interest Income (NII) sensitivity analysis is considered a short-term ALM measure because:",
    optionA: "It is only relevant for banks with overnight deposit funding",
    optionB: "It only captures floating-rate instruments, ignoring fixed-rate positions",
    optionC: "Regulatory rules prohibit its use beyond a quarterly reporting period",
    optionD: "It measures the earnings impact over a 1-2 year horizon, missing long-term present-value effects",
    correctOption: "D",
    explanation: "NII sensitivity captures the near-term earnings impact of rate changes on currently repricing instruments, but it misses the long-term present-value effects on fixed-rate positions that EVE analysis captures.",
    orderIndex: 3
  },
  {
    id: "frm-liquidity-risk-alm-q05",
    topicId: "frm-liquidity-risk-alm",
    text: "Under Basel IRRBB standards, banks are required to disclose EVE sensitivity to a standard interest rate shock of:",
    optionA: "50 basis points parallel shift",
    optionB: "100 basis points parallel shift",
    optionC: "500 basis points parallel shift",
    optionD: "200 basis points parallel shift",
    correctOption: "D",
    explanation: "Basel IRRBB guidelines require disclosure of EVE change under a standard 200bp parallel interest rate shift, providing a consistent basis for supervisory comparison across institutions.",
    orderIndex: 4
  },
  {
    id: "frm-liquidity-risk-alm-q06",
    topicId: "frm-liquidity-risk-alm",
    text: "Duration matching as an immunisation strategy aims to:",
    optionA: "Maximise net interest income regardless of rate movements",
    optionB: "Make the present value of assets and liabilities equally sensitive to interest rate changes",
    optionC: "Eliminate all repricing gaps across every time bucket",
    optionD: "Ensure all assets and liabilities mature on the same date",
    correctOption: "B",
    explanation: "Duration matching sets the duration gap to zero, so that a change in interest rates has equal present-value effects on assets and liabilities, leaving equity value unchanged - the classic immunisation condition.",
    orderIndex: 5
  },
  {
    id: "frm-liquidity-risk-alm-q07",
    topicId: "frm-liquidity-risk-alm",
    text: "A bank with predominantly long-term fixed-rate mortgage assets funded by short-term deposits can use interest rate swaps to reduce duration gap by:",
    optionA: "Buying put options on interest rates to cap borrowing costs",
    optionB: "Paying fixed and receiving floating on a swap, further extending asset duration",
    optionC: "Entering a currency swap to convert foreign currency exposures",
    optionD: "Receiving fixed and paying floating on a swap, shortening the effective asset duration",
    correctOption: "D",
    explanation: "By receiving fixed on a swap, the bank synthetically converts its fixed-rate mortgage income into floating, reducing the effective duration of the asset side and narrowing the positive duration gap.",
    orderIndex: 6
  },
  {
    id: "frm-liquidity-risk-alm-q08",
    topicId: "frm-liquidity-risk-alm",
    text: "The Asset-Liability Committee (ALCO) is primarily responsible for:",
    optionA: "Setting individual credit limits for corporate loan customers",
    optionB: "Conducting internal audits of trading desk compliance",
    optionC: "Approving new financial products for retail customers",
    optionD: "Overseeing the management of interest rate risk and liquidity risk on the balance sheet",
    correctOption: "D",
    explanation: "ALCO oversees the structural interest rate risk and liquidity risk inherent in the balance sheet, setting policies, reviewing ALM metrics (NII, EVE, LCR, NSFR), and directing hedging or funding strategies.",
    orderIndex: 7
  }
];
