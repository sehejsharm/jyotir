export const expansionTopics = [
  {
    id: "frm-financial-markets-options-pricing",
    subjectId: "frm-financial-markets",
    name: "Options & Black-Scholes Pricing",
    slug: "options-pricing",
    orderIndex: 1
  },
  {
    id: "frm-financial-markets-swaps",
    subjectId: "frm-financial-markets",
    name: "Swaps & Interest Rate Products",
    slug: "swaps",
    orderIndex: 2
  },
  {
    id: "frm-financial-markets-fixed-income-products",
    subjectId: "frm-financial-markets",
    name: "Fixed Income & Bond Markets",
    slug: "fixed-income-products",
    orderIndex: 3
  },
  {
    id: "frm-financial-markets-credit-products",
    subjectId: "frm-financial-markets",
    name: "Credit Derivatives & Structured Products",
    slug: "credit-products",
    orderIndex: 4
  },
  {
    id: "frm-valuation-risk-models-bond-valuation",
    subjectId: "frm-valuation-risk-models",
    name: "Bond Valuation & Duration",
    slug: "bond-valuation",
    orderIndex: 1
  },
  {
    id: "frm-valuation-risk-models-option-valuation",
    subjectId: "frm-valuation-risk-models",
    name: "Option Valuation & Greeks",
    slug: "option-valuation",
    orderIndex: 2
  },
  {
    id: "frm-valuation-risk-models-stress-testing",
    subjectId: "frm-valuation-risk-models",
    name: "Stress Testing & Scenario Analysis",
    slug: "stress-testing",
    orderIndex: 3
  },
  {
    id: "frm-valuation-risk-models-model-risk",
    subjectId: "frm-valuation-risk-models",
    name: "Model Risk & Validation",
    slug: "model-risk",
    orderIndex: 4
  }
];

export const expansionMaterials = [
  {
    id: "frm-financial-markets-options-pricing-m01",
    topicId: "frm-financial-markets-options-pricing",
    title: "Options & Black-Scholes Pricing",
    content: `**Options** give the buyer the right, but not the obligation, to buy or sell an asset at a fixed **strike price** before or at expiry. Understanding payoffs and the Black-Scholes model is essential for the FRM.

## Call and Put Payoffs
- **Call option** payoff at expiry: max(S - K, 0), where S is the asset price and K is the strike.
- **Put option** payoff at expiry: max(K - S, 0).
- The buyer pays a **premium** upfront; the seller collects it and bears unlimited (call) or large (put) downside.

## The Black-Scholes Model
Black-Scholes prices a European option using five inputs:

| Input | Symbol | Role |
| --- | --- | --- |
| Current asset price | S | Starting point of the stock |
| Strike price | K | Exercise threshold |
| Time to expiry | T | Remaining life in years |
| Risk-free rate | r | Discounting factor |
| Volatility | sigma | Standard deviation of log-returns |

The formula produces **d1** and **d2** and prices the call as S*N(d1) - K*e^(-rT)*N(d2), where N( ) is the cumulative normal distribution.

## Implied vs Historical Volatility
- **Historical volatility** is calculated from past price data.
- **Implied volatility** is the volatility backed out of the market option price; it reflects the market's forward-looking expectation.
- The **volatility smile** (or skew) shows that implied volatility varies across strikes, violating strict Black-Scholes assumptions.

## Greeks Overview
The **Greeks** measure option price sensitivity to each input. Delta, gamma, vega, theta, and rho are the primary risk measures used to manage option positions and are covered in depth in the Option Valuation topic.

### Tip
- Black-Scholes assumes continuous trading, constant volatility, and no dividends; real markets deviate from each assumption.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-swaps-m01",
    topicId: "frm-financial-markets-swaps",
    title: "Swaps & Interest Rate Products",
    content: `A **swap** is an agreement between two parties to exchange cash flows over time. Interest rate swaps are the most traded derivative in the world and a central topic for the FRM.

## Plain Vanilla Interest Rate Swap
In a **fixed-for-floating swap**, one party pays a fixed rate (the **swap rate**) and receives a floating reference rate, while the counterparty does the opposite. Only net cash flows are exchanged.

| Party | Pays | Receives |
| --- | --- | --- |
| Fixed payer | Fixed swap rate | Floating (SOFR/LIBOR) |
| Floating payer | Floating (SOFR/LIBOR) | Fixed swap rate |

## Swap Valuation
A swap can be valued as the difference between two bond positions: the fixed-rate bond (fixed leg) and a floating-rate bond (floating leg). At initiation, the swap rate is set so that the swap has **zero value**. As rates move, the swap gains or loses value to each party.

## OIS Discounting
After the 2008 crisis, market practice shifted to discounting swap cash flows using the **overnight indexed swap (OIS) rate** rather than LIBOR, because OIS better reflects the risk-free rate for collateralized transactions.

## LIBOR Transition to SOFR
The scandal-driven end of LIBOR prompted a global transition to alternative risk-free rates. In the United States, the **Secured Overnight Financing Rate (SOFR)** is the preferred replacement. SOFR is based on actual overnight repo transactions, making it more robust than LIBOR's panel submissions.

### Tip
- Remember that the fixed swap rate is chosen so that the present value of fixed cash flows equals the present value of expected floating cash flows at inception.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-fixed-income-products-m01",
    topicId: "frm-financial-markets-fixed-income-products",
    title: "Fixed Income & Bond Markets",
    content: `**Fixed income securities** promise defined cash flows and are exposed to interest rate, credit, and liquidity risks. The FRM requires understanding bond pricing, yield measures, and risk metrics.

## Bond Pricing
A bond's price is the present value of its coupon payments and face value discounted at the **yield to maturity (YTM)**:

\`\`\`
Price = sum of [C / (1+y)^t] + [F / (1+y)^n]
\`\`\`

where C is the coupon, F is the face value, y is the YTM per period, and n is the number of periods.

## Yield Measures
| Measure | Description |
| --- | --- |
| Coupon rate | Annual coupon divided by face value |
| Current yield | Annual coupon divided by market price |
| Yield to maturity | Discount rate equating price to cash flows |
| Yield to call | YTM assuming the bond is called at first call date |

- **YTM** is the single most important yield measure but assumes all coupons are reinvested at the same rate.

## Duration and Convexity in Risk Context
- **Macaulay duration** is the weighted average time to cash flows.
- **Modified duration** approximates the percentage price change per 1% change in yield: dP/P = -ModD * dy.
- **Convexity** corrects for the curvature in the price-yield relationship; bonds with higher convexity gain more when yields fall and lose less when yields rise.

## Repo Markets
In a **repurchase agreement (repo)**, a dealer sells securities and agrees to buy them back at a higher price. Repos are the primary short-term funding mechanism for fixed-income positions. The **haircut** is the discount applied to collateral value.

### Tip
- Duration measures linear price sensitivity; convexity is the second-order correction that improves accuracy for large yield moves.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-credit-products-m01",
    topicId: "frm-financial-markets-credit-products",
    title: "Credit Derivatives & Structured Products",
    content: `**Credit derivatives** transfer credit risk without transferring the underlying asset. The FRM tests the mechanics of **credit default swaps** and the structure of complex credit products.

## Credit Default Swap (CDS) Mechanics
A **CDS** is a contract in which the **protection buyer** pays a periodic spread (in basis points per year) to the **protection seller**. If a **reference entity** experiences a **credit event** (default, restructuring, etc.), the seller compensates the buyer for the loss.

| Party | Role |
| --- | --- |
| Protection buyer | Pays CDS spread; hedged against default |
| Protection seller | Receives spread; absorbs loss on credit event |

## CDS Pricing
The CDS **spread** is set so that the present value of premium payments equals the present value of expected loss payments. A wider spread reflects higher default risk or lower recovery rates.

## CDO Tranching
A **collateralized debt obligation (CDO)** pools loans or bonds and issues tranched securities:
- **Senior tranche** absorbs losses last; rated AAA; lowest yield.
- **Mezzanine tranche** takes losses after the equity tranche; intermediate yield.
- **Equity (first-loss) tranche** absorbs the first losses; highest yield; unrated.

## Synthetic CDO
A **synthetic CDO** gains credit exposure through CDS contracts rather than actual bond holdings, allowing investors to take on credit risk without purchasing the underlying assets. Correlation among reference entities determines how losses flow through the tranches.

### Tip
- Higher correlation between reference entities in a CDO hurts mezzanine holders and benefits equity holders, since defaults become more clustered.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-m01",
    topicId: "frm-valuation-risk-models-bond-valuation",
    title: "Bond Valuation & Duration",
    content: `In the risk context, bond valuation focuses on **interest rate sensitivity** rather than just pricing. The FRM tests DV01, key rate durations, spread risk, and option-adjusted spread.

## DV01 and PV01
- **DV01** (dollar value of a basis point) is the change in bond price for a 1-basis-point (0.01%) decrease in yield:

\`\`\`
DV01 = -dP / dy * 0.0001
\`\`\`

- **PV01** is often used interchangeably for the present value impact of a 1-bp shift in the discount curve.
- A portfolio's total DV01 is the sum of DV01 across all positions and is the primary tool for hedging interest rate risk.

## Key Rate Durations
**Key rate duration** (also called **partial duration**) measures price sensitivity to a shift in a specific maturity point on the yield curve, holding other rates constant. Key rate durations sum to total modified duration and allow hedging of **yield curve shape risk**.

## Spread Risk
- **Spread duration** measures sensitivity to changes in the **credit spread** rather than the risk-free rate.
- A widening spread lowers bond prices; spread duration and DV01 combine to give total sensitivity for credit-risky bonds.

## Option-Adjusted Spread
The **option-adjusted spread (OAS)** is the constant spread added to the risk-free curve that equates the model price to the market price after accounting for **embedded options** (calls, puts, prepayment). OAS strips out optionality, enabling comparison across bonds with different option features.

### Tip
- DV01 is the go-to tool for rate hedging; OAS is the go-to measure for comparing callable and bullet bonds on a like-for-like basis.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-option-valuation-m01",
    topicId: "frm-valuation-risk-models-option-valuation",
    title: "Option Valuation & Greeks",
    content: `The **Greeks** measure how an option's price changes with each input. Managing an options book requires understanding each Greek and the limitations of dynamic hedging.

## Delta
**Delta** is the rate of change of the option price with respect to the underlying asset price. A call has delta between 0 and 1; a put has delta between -1 and 0. **Delta hedging** involves holding an offsetting position in the underlying to make the portfolio insensitive to small price moves.

## Gamma
**Gamma** is the rate of change of delta with respect to the underlying price. It is highest for at-the-money options near expiry. A positive gamma position benefits from large moves; a negative gamma position (short options) suffers. **Gamma risk** makes delta hedges deteriorate quickly.

| Greek | Sensitivity to | Sign for long call |
| --- | --- | --- |
| Delta | Underlying price | Positive |
| Gamma | Delta (second-order price) | Positive |
| Vega | Volatility | Positive |
| Theta | Time (time decay) | Negative |
| Rho | Risk-free rate | Positive |

## Vega and Theta
- **Vega** measures sensitivity to implied volatility; long options have positive vega.
- **Theta** captures **time decay**, the loss of option value as expiry approaches; long options have negative theta.

## Dynamic Hedging Limitations
Delta hedging must be **rebalanced continuously** as the underlying moves. In practice, discrete rebalancing leaves residual gamma risk. Transaction costs, jumps in the underlying, and changing volatility all impair the effectiveness of dynamic hedging.

### Tip
- Long gamma and long vega always go together in standard options; they profit from high realized volatility but pay positive time decay.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-stress-testing-m01",
    topicId: "frm-valuation-risk-models-stress-testing",
    title: "Stress Testing & Scenario Analysis",
    content: `**Stress testing** examines how a portfolio or institution performs under severe but plausible scenarios that VaR may miss. It is a cornerstone of post-crisis risk management and regulation.

## Purpose
VaR captures typical losses but understates losses in extreme, correlated market dislocations. Stress tests evaluate **tail scenarios** that are too rare or too severe for statistical models to capture reliably.

## Regulatory Stress Tests
| Test | Jurisdiction | Key Feature |
| --- | --- | --- |
| DFAST | United States | Annual Dodd-Frank Act Stress Test for large banks |
| CCAR | United States | Comprehensive Capital Analysis and Review; includes capital planning |
| EBA stress test | European Union | Biennial test across major European banks |

- Both DFAST and CCAR require banks to project losses, revenues, and capital under **adverse** and **severely adverse** macroeconomic scenarios provided by regulators.

## Historical Scenarios
**Historical scenarios** replay the losses from past crises — the 1987 equity crash, the 1997 Asian crisis, the 2008 financial crisis — using current portfolio positions. They are concrete but limited to events that have already occurred.

## Narrative (Hypothetical) Scenarios
**Hypothetical scenarios** are forward-looking stories built around plausible but unprecedented shocks (e.g., a sudden sovereign debt crisis or a pandemic-driven shutdown). They are more flexible but require expert judgment.

## Reverse Stress Testing
**Reverse stress testing** works backward: it asks what scenario would cause the institution to fail or breach a capital threshold, then assesses how plausible that scenario is. It complements forward-looking stress tests by identifying hidden vulnerabilities.

### Tip
- Reverse stress testing is especially powerful because it forces management to confront scenarios that threaten viability, not just painful but survivable losses.`,
    estimatedReadTime: 2,
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-model-risk-m01",
    topicId: "frm-valuation-risk-models-model-risk",
    title: "Model Risk & Validation",
    content: `**Model risk** is the risk of adverse outcomes from errors in model development, implementation, or use. The FRM tests the regulatory framework and best practices for managing it.

## SR 11-7 Guidance
The Federal Reserve's **SR 11-7** (Supervisory Guidance on Model Risk Management) is the primary U.S. regulatory standard. It defines a model as having three components: an information input, a processing component, and a reporting output. Key requirements include:

- Independent **model validation** separate from model development.
- Clear documentation of model assumptions, limitations, and intended use.
- An **inventory** of all models in use, with tiering by materiality.

## Model Validation
**Validation** assesses whether a model is conceptually sound and performs as intended. Core activities include:

| Activity | Purpose |
| --- | --- |
| Conceptual review | Assess theory and methodology |
| Benchmarking | Compare to alternative models |
| Backtesting | Test performance against historical outcomes |
| Sensitivity analysis | Test behavior under varied inputs |

## Backtesting
**Backtesting** compares model predictions to realized outcomes. A VaR model is backtested by counting exceptions; a credit scoring model by comparing predicted default rates to actual defaults.

## Model Limitations
All models simplify reality. Common limitations include incorrect distributional assumptions, parameter instability, and use outside the intended range (**model misuse**).

## Challenger Models
A **challenger model** is an independently built alternative used to validate or benchmark the primary (champion) model. Running challenger models reduces dependence on a single approach and helps identify blind spots.

### Tip
- SR 11-7 requires validation to be independent of development; using the model builder to validate their own model is a governance failure.`,
    estimatedReadTime: 2,
    orderIndex: 0
  }
];

export const expansionQuestions = [
  // Topic 1: Options & Black-Scholes Pricing
  {
    id: "frm-financial-markets-options-pricing-q01",
    topicId: "frm-financial-markets-options-pricing",
    text: "The payoff of a European call option at expiry is:",
    optionA: "max(S - K, 0)",
    optionB: "max(K - S, 0)",
    optionC: "S minus the premium paid",
    optionD: "K times the risk-free rate",
    correctOption: "A",
    explanation: "A call pays the excess of the asset price S over the strike K if positive, and zero otherwise.",
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-options-pricing-q02",
    topicId: "frm-financial-markets-options-pricing",
    text: "Which of the following is NOT an input to the Black-Scholes option pricing model?",
    optionA: "Current asset price",
    optionB: "Historical dividend growth rate",
    optionC: "Volatility of the underlying asset",
    optionD: "Risk-free interest rate",
    correctOption: "B",
    explanation: "Black-Scholes requires the current price, strike, time, risk-free rate, and volatility; historical dividend growth is not an input.",
    orderIndex: 1
  },
  {
    id: "frm-financial-markets-options-pricing-q03",
    topicId: "frm-financial-markets-options-pricing",
    text: "Implied volatility is best described as:",
    optionA: "The historical standard deviation of past returns",
    optionB: "The GARCH forecast of future volatility",
    optionC: "The realized volatility over the option's life",
    optionD: "The volatility backed out of a market option price using the pricing model",
    correctOption: "D",
    explanation: "Implied volatility is derived from the current market price of an option by inverting the pricing model.",
    orderIndex: 2
  },
  {
    id: "frm-financial-markets-options-pricing-q04",
    topicId: "frm-financial-markets-options-pricing",
    text: "A volatility smile in options markets indicates that:",
    optionA: "Implied volatility is identical across all strikes",
    optionB: "Historical and implied volatilities always match",
    optionC: "Options are priced using the CAPM",
    optionD: "Implied volatility varies with the strike price, violating strict Black-Scholes assumptions",
    correctOption: "D",
    explanation: "The volatility smile shows that implied volatility changes across strikes, a pattern inconsistent with constant-volatility Black-Scholes.",
    orderIndex: 3
  },
  {
    id: "frm-financial-markets-options-pricing-q05",
    topicId: "frm-financial-markets-options-pricing",
    text: "The buyer of a call option has:",
    optionA: "An obligation to buy the asset at the strike price",
    optionB: "The right to sell the asset at the strike price",
    optionC: "The right to buy the asset at the strike price",
    optionD: "Unlimited liability if the asset price falls",
    correctOption: "C",
    explanation: "A call option gives the holder the right, not the obligation, to purchase the underlying at the strike price.",
    orderIndex: 4
  },
  {
    id: "frm-financial-markets-options-pricing-q06",
    topicId: "frm-financial-markets-options-pricing",
    text: "Black-Scholes assumes which of the following about the underlying asset's returns?",
    optionA: "Returns follow a lognormal distribution with constant volatility",
    optionB: "Returns follow a uniform distribution",
    optionC: "Returns are mean-reverting with GARCH volatility",
    optionD: "Returns are always positive",
    correctOption: "A",
    explanation: "Black-Scholes assumes log-returns are normally distributed, implying prices are lognormal, with constant volatility throughout.",
    orderIndex: 5
  },
  {
    id: "frm-financial-markets-options-pricing-q07",
    topicId: "frm-financial-markets-options-pricing",
    text: "The maximum loss for the buyer of a put option is:",
    optionA: "Unlimited, because the asset price can rise indefinitely",
    optionB: "Equal to the strike price",
    optionC: "The premium paid for the option",
    optionD: "Zero, because puts always expire worthless",
    correctOption: "C",
    explanation: "The put buyer's maximum loss is limited to the premium paid; the option simply expires worthless if unexercised.",
    orderIndex: 6
  },
  {
    id: "frm-financial-markets-options-pricing-q08",
    topicId: "frm-financial-markets-options-pricing",
    text: "All else equal, increasing the time to expiry of an option will generally:",
    optionA: "Decrease both call and put values",
    optionB: "Increase both call and put values",
    optionC: "Increase calls but decrease puts",
    optionD: "Have no effect on option value",
    correctOption: "B",
    explanation: "Longer time to expiry gives the option more opportunity to move in-the-money, raising the value of both calls and puts.",
    orderIndex: 7
  },

  // Topic 2: Swaps & Interest Rate Products
  {
    id: "frm-financial-markets-swaps-q01",
    topicId: "frm-financial-markets-swaps",
    text: "In a plain vanilla interest rate swap, the fixed-rate payer:",
    optionA: "Pays floating and receives fixed",
    optionB: "Receives fixed and pays no floating",
    optionC: "Pays both fixed and floating rates",
    optionD: "Pays fixed and receives floating",
    correctOption: "D",
    explanation: "The fixed-rate payer in a vanilla swap pays the fixed swap rate and receives the floating reference rate.",
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-swaps-q02",
    topicId: "frm-financial-markets-swaps",
    text: "At initiation, the swap rate in a plain vanilla interest rate swap is set so that the swap has:",
    optionA: "A positive net present value to the fixed payer",
    optionB: "A negative net present value",
    optionC: "Zero value to both counterparties",
    optionD: "A value equal to the notional principal",
    correctOption: "C",
    explanation: "The swap rate is chosen so that the present value of fixed payments equals the present value of expected floating payments, giving zero initial value.",
    orderIndex: 1
  },
  {
    id: "frm-financial-markets-swaps-q03",
    topicId: "frm-financial-markets-swaps",
    text: "Following the 2008 financial crisis, the standard for discounting collateralized swap cash flows shifted to:",
    optionA: "LIBOR flat",
    optionB: "The overnight indexed swap (OIS) rate",
    optionC: "The repo rate plus a spread",
    optionD: "The federal funds target rate",
    correctOption: "B",
    explanation: "Post-crisis best practice is to discount collateralized swaps using the OIS rate, which better reflects the risk-free rate.",
    orderIndex: 2
  },
  {
    id: "frm-financial-markets-swaps-q04",
    topicId: "frm-financial-markets-swaps",
    text: "SOFR (Secured Overnight Financing Rate) replaced LIBOR primarily because:",
    optionA: "SOFR includes a credit-risk premium like LIBOR",
    optionB: "SOFR is a forward-looking term rate like LIBOR",
    optionC: "SOFR is published by commercial banks, not central banks",
    optionD: "SOFR is based on actual overnight repo transactions, making it more robust",
    correctOption: "D",
    explanation: "SOFR is grounded in real overnight repo transactions, eliminating the manipulation risk associated with LIBOR panel submissions.",
    orderIndex: 3
  },
  {
    id: "frm-financial-markets-swaps-q05",
    topicId: "frm-financial-markets-swaps",
    text: "A swap can be valued by treating it as the difference between:",
    optionA: "Two equity positions",
    optionB: "A forward contract and a futures contract",
    optionC: "A fixed-rate bond and a floating-rate bond",
    optionD: "Two options on interest rates",
    correctOption: "C",
    explanation: "A swap is equivalent to a long position in one bond (fixed or floating) and a short position in the other, enabling bond-based valuation.",
    orderIndex: 4
  },
  {
    id: "frm-financial-markets-swaps-q06",
    topicId: "frm-financial-markets-swaps",
    text: "In an interest rate swap, which party benefits if floating rates rise significantly above the fixed swap rate?",
    optionA: "Both parties equally",
    optionB: "The fixed-rate payer",
    optionC: "The floating-rate payer",
    optionD: "The clearinghouse",
    correctOption: "B",
    explanation: "When floating rates exceed the fixed rate, the fixed-rate payer receives more than it pays, gaining from the rate rise.",
    orderIndex: 5
  },
  {
    id: "frm-financial-markets-swaps-q07",
    topicId: "frm-financial-markets-swaps",
    text: "In a plain vanilla swap, only net cash flows are exchanged because:",
    optionA: "Notional principal is always delivered at maturity",
    optionB: "Both legs are denominated in the same currency and netting reduces credit exposure",
    optionC: "The floating rate is fixed at initiation",
    optionD: "Regulators require full gross settlement",
    correctOption: "B",
    explanation: "Netting same-currency payment obligations reduces settlement risk and operational complexity.",
    orderIndex: 6
  },
  {
    id: "frm-financial-markets-swaps-q08",
    topicId: "frm-financial-markets-swaps",
    text: "A currency swap differs from an interest rate swap in that a currency swap:",
    optionA: "Never involves any principal exchange",
    optionB: "Cannot be used to hedge foreign exchange risk",
    optionC: "Always uses the same reference rate on both legs",
    optionD: "Involves exchange of principal in different currencies at maturity",
    correctOption: "D",
    explanation: "Currency swaps typically involve exchanging notional principal in different currencies at inception and re-exchange at maturity.",
    orderIndex: 7
  },

  // Topic 3: Fixed Income & Bond Markets
  {
    id: "frm-financial-markets-fixed-income-products-q01",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "A bond's yield to maturity is best described as the discount rate that:",
    optionA: "Equals the coupon rate in all cases",
    optionB: "Is always equal to the risk-free rate",
    optionC: "Measures only the credit spread over the risk-free rate",
    optionD: "Equates the bond's price to the present value of its future cash flows",
    correctOption: "D",
    explanation: "YTM is the internal rate of return that sets the sum of discounted cash flows equal to the current bond price.",
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-fixed-income-products-q02",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "When market interest rates rise, the price of a fixed-coupon bond will:",
    optionA: "Also rise proportionally",
    optionB: "Fall",
    optionC: "Remain unchanged",
    optionD: "Equal the coupon rate",
    correctOption: "B",
    explanation: "Bond prices and yields move inversely; when market rates rise, the present value of fixed cash flows falls.",
    orderIndex: 1
  },
  {
    id: "frm-financial-markets-fixed-income-products-q03",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "Modified duration approximates the:",
    optionA: "Percentage change in bond price per 1% change in yield",
    optionB: "Dollar change in bond price for a 1% change in yield",
    optionC: "Change in coupon payment when rates move",
    optionD: "Credit spread of the bond",
    correctOption: "A",
    explanation: "Modified duration gives the approximate percentage price change for a 100-basis-point shift in yield.",
    orderIndex: 2
  },
  {
    id: "frm-financial-markets-fixed-income-products-q04",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "Convexity improves the duration approximation by capturing:",
    optionA: "The credit risk component of yield",
    optionB: "The linear sensitivity to rate moves",
    optionC: "The curvature in the price-yield relationship",
    optionD: "The time value of coupon payments",
    correctOption: "C",
    explanation: "Convexity is the second-order term that corrects for the nonlinear (curved) price response to yield changes.",
    orderIndex: 3
  },
  {
    id: "frm-financial-markets-fixed-income-products-q05",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "In a repurchase agreement (repo), the haircut represents:",
    optionA: "The interest rate charged on the repo",
    optionB: "The duration of the collateral",
    optionC: "The coupon rate of the collateral bond",
    optionD: "The discount applied to collateral value to protect the cash lender",
    correctOption: "D",
    explanation: "The haircut is the difference between the market value of collateral and the cash lent, protecting the lender against collateral price falls.",
    orderIndex: 4
  },
  {
    id: "frm-financial-markets-fixed-income-products-q06",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "Which yield measure assumes all coupon payments are reinvested at the same rate as the YTM?",
    optionA: "Current yield",
    optionB: "Coupon rate",
    optionC: "Spot rate",
    optionD: "Yield to maturity",
    correctOption: "D",
    explanation: "YTM implicitly assumes coupon reinvestment at the YTM rate, which is a key limitation of the measure.",
    orderIndex: 5
  },
  {
    id: "frm-financial-markets-fixed-income-products-q07",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "A bond with higher convexity, compared to a lower-convexity bond with the same duration, will:",
    optionA: "Lose more value when yields fall",
    optionB: "Gain less value when yields fall and lose more when yields rise",
    optionC: "Gain more value when yields fall and lose less when yields rise",
    optionD: "Have identical price behavior to the lower-convexity bond",
    correctOption: "C",
    explanation: "Higher convexity means the price-yield curve is more curved, so the bond outperforms in both yield-up and yield-down scenarios.",
    orderIndex: 6
  },
  {
    id: "frm-financial-markets-fixed-income-products-q08",
    topicId: "frm-financial-markets-fixed-income-products",
    text: "Repos are primarily used by fixed-income dealers to:",
    optionA: "Issue new equity capital",
    optionB: "Hedge equity market risk",
    optionC: "Fund their bond holdings with short-term borrowing",
    optionD: "Calculate yield to maturity",
    correctOption: "C",
    explanation: "Dealers use the repo market to finance bond inventories by temporarily selling securities and agreeing to repurchase them.",
    orderIndex: 7
  },

  // Topic 4: Credit Derivatives & Structured Products
  {
    id: "frm-financial-markets-credit-products-q01",
    topicId: "frm-financial-markets-credit-products",
    text: "In a credit default swap, the protection buyer:",
    optionA: "Pays a periodic spread and receives compensation on a credit event",
    optionB: "Receives a periodic spread and pays on a credit event",
    optionC: "Holds the reference bonds directly",
    optionD: "Receives no payment if the reference entity defaults",
    correctOption: "A",
    explanation: "The protection buyer pays the CDS spread and receives a loss payment from the seller if a credit event occurs.",
    orderIndex: 0
  },
  {
    id: "frm-financial-markets-credit-products-q02",
    topicId: "frm-financial-markets-credit-products",
    text: "A wider CDS spread for a reference entity generally reflects:",
    optionA: "Higher perceived default risk or lower recovery expectations",
    optionB: "A higher recovery rate",
    optionC: "Lower perceived default risk",
    optionD: "A stronger credit rating",
    correctOption: "A",
    explanation: "CDS spreads widen when markets perceive higher default probability or lower expected recovery, as the protection seller bears greater expected loss.",
    orderIndex: 1
  },
  {
    id: "frm-financial-markets-credit-products-q03",
    topicId: "frm-financial-markets-credit-products",
    text: "In a CDO, which tranche absorbs the first losses from the collateral pool?",
    optionA: "Senior tranche",
    optionB: "Equity (first-loss) tranche",
    optionC: "Mezzanine tranche",
    optionD: "Super-senior tranche",
    correctOption: "B",
    explanation: "The equity tranche absorbs losses first, protecting the mezzanine and senior tranches.",
    orderIndex: 2
  },
  {
    id: "frm-financial-markets-credit-products-q04",
    topicId: "frm-financial-markets-credit-products",
    text: "A synthetic CDO differs from a cash CDO primarily because a synthetic CDO:",
    optionA: "Gains credit exposure through CDS rather than actual bond holdings",
    optionB: "Always holds physical bonds as collateral",
    optionC: "Is always rated AAA",
    optionD: "Cannot be tranched into senior and junior notes",
    correctOption: "A",
    explanation: "Synthetic CDOs use CDS contracts to obtain credit exposure without purchasing the underlying bonds.",
    orderIndex: 3
  },
  {
    id: "frm-financial-markets-credit-products-q05",
    topicId: "frm-financial-markets-credit-products",
    text: "In a CDO structure, the senior tranche offers the lowest yield because it:",
    optionA: "Absorbs the first losses",
    optionB: "Has the highest priority claim and the lowest default risk",
    optionC: "Has the highest correlation risk",
    optionD: "Is always unrated",
    correctOption: "B",
    explanation: "Senior tranches bear losses only after all subordinate tranches are wiped out, so they carry the lowest risk and yield.",
    orderIndex: 4
  },
  {
    id: "frm-financial-markets-credit-products-q06",
    topicId: "frm-financial-markets-credit-products",
    text: "A CDS credit event that triggers a payment from the protection seller includes:",
    optionA: "A rise in interest rates",
    optionB: "An equity market decline",
    optionC: "A decline in commodity prices",
    optionD: "Default or restructuring of the reference entity",
    correctOption: "D",
    explanation: "CDS credit events are defined in the contract and typically include bankruptcy, failure to pay, and restructuring of the reference entity.",
    orderIndex: 5
  },
  {
    id: "frm-financial-markets-credit-products-q07",
    topicId: "frm-financial-markets-credit-products",
    text: "Higher default correlation among CDO reference entities benefits which tranche the most?",
    optionA: "Senior tranche",
    optionB: "Equity tranche",
    optionC: "Mezzanine tranche",
    optionD: "All tranches equally",
    correctOption: "B",
    explanation: "Higher correlation makes defaults cluster, increasing the chance of total portfolio loss but also increasing the chance of no losses at all, which benefits equity holders.",
    orderIndex: 6
  },
  {
    id: "frm-financial-markets-credit-products-q08",
    topicId: "frm-financial-markets-credit-products",
    text: "The CDS spread at inception is set so that:",
    optionA: "The present value of premium payments equals the present value of expected loss payments",
    optionB: "The protection buyer pays more than the expected loss",
    optionC: "The swap always has positive value for the protection seller",
    optionD: "The spread equals the risk-free rate",
    correctOption: "A",
    explanation: "Like any swap, the CDS spread is set at initiation so that the instrument has zero net present value to both parties.",
    orderIndex: 7
  },

  // Topic 5: Bond Valuation & Duration
  {
    id: "frm-valuation-risk-models-bond-valuation-q01",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "DV01 measures the change in bond price for a:",
    optionA: "1% change in yield",
    optionB: "1-basis-point (0.01%) decrease in yield",
    optionC: "1% change in the credit spread",
    optionD: "1-day change in time to maturity",
    correctOption: "B",
    explanation: "DV01 (dollar value of a basis point) is the price change for a 1-basis-point downward shift in yield.",
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q02",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "Key rate durations are most useful for hedging:",
    optionA: "Parallel shifts in the yield curve only",
    optionB: "Currency risk in foreign bonds",
    optionC: "Credit spread movements",
    optionD: "Yield curve shape risk arising from non-parallel shifts",
    correctOption: "D",
    explanation: "Key rate durations isolate sensitivity at each maturity point, enabling hedges against twists and steepening of the yield curve.",
    orderIndex: 1
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q03",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "Spread duration measures a bond's price sensitivity to changes in its:",
    optionA: "Coupon rate",
    optionB: "Time to maturity",
    optionC: "Credit spread",
    optionD: "Recovery rate",
    correctOption: "C",
    explanation: "Spread duration captures how much the bond price changes when its credit spread over the risk-free rate widens or narrows.",
    orderIndex: 2
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q04",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "The option-adjusted spread (OAS) of a callable bond strips out the option effect in order to:",
    optionA: "Enable fair comparison with bullet bonds",
    optionB: "Increase the bond's yield above its YTM",
    optionC: "Remove credit risk from the spread",
    optionD: "Calculate the bond's modified duration",
    correctOption: "A",
    explanation: "OAS removes the value of the embedded option, allowing like-for-like yield comparison between callable and non-callable bonds.",
    orderIndex: 3
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q05",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "A portfolio's total DV01 is computed as:",
    optionA: "The sum of DV01 across all positions",
    optionB: "The average DV01 across all positions",
    optionC: "The DV01 of the largest position only",
    optionD: "The DV01 of the longest-maturity bond",
    correctOption: "A",
    explanation: "DV01 is linear and additive, so portfolio DV01 is the sum of individual position DV01s.",
    orderIndex: 4
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q06",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "For a callable bond, a lower OAS relative to a similar non-callable bond reflects:",
    optionA: "Greater credit risk",
    optionB: "A steeper yield curve",
    optionC: "Higher liquidity of the callable bond",
    optionD: "The cost of the call option embedded in the bond",
    correctOption: "D",
    explanation: "The callable bond's OAS is lower than its nominal spread because part of the spread compensates for the call option value retained by the issuer.",
    orderIndex: 5
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q07",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "Which statement about key rate durations is correct?",
    optionA: "Key rate durations across all maturities sum to zero",
    optionB: "Key rate durations are independent of position size",
    optionC: "Key rate durations sum to the total modified duration",
    optionD: "Key rate durations measure only credit spread risk",
    correctOption: "C",
    explanation: "The sum of all key rate durations equals the bond's total modified duration, as they decompose the same overall interest rate sensitivity.",
    orderIndex: 6
  },
  {
    id: "frm-valuation-risk-models-bond-valuation-q08",
    topicId: "frm-valuation-risk-models-bond-valuation",
    text: "A widening of credit spreads will cause the price of a credit-risky bond to:",
    optionA: "Rise, because the bond becomes cheaper to issue",
    optionB: "Remain unchanged if duration is constant",
    optionC: "Rise proportionally to the spread widening",
    optionD: "Fall, because the discount rate applied to the bond's cash flows increases",
    correctOption: "D",
    explanation: "A wider credit spread raises the total yield used to discount cash flows, lowering the present value and hence the bond price.",
    orderIndex: 7
  },

  // Topic 6: Option Valuation & Greeks
  {
    id: "frm-valuation-risk-models-option-valuation-q01",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "Delta for a long call option is:",
    optionA: "Between 0 and 1",
    optionB: "Always negative",
    optionC: "Between -1 and 0",
    optionD: "Always greater than 1",
    correctOption: "A",
    explanation: "Call delta is positive and bounded between 0 (deep out-of-the-money) and 1 (deep in-the-money).",
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q02",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "Gamma is highest for options that are:",
    optionA: "Deep in-the-money with long time to expiry",
    optionB: "Deep out-of-the-money with any time to expiry",
    optionC: "In-the-money with long time to expiry",
    optionD: "At-the-money and near expiry",
    correctOption: "D",
    explanation: "Gamma peaks for at-the-money options close to expiry, because small price changes can shift the option from in- to out-of-the-money.",
    orderIndex: 1
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q03",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "Vega measures the sensitivity of an option's price to:",
    optionA: "The risk-free interest rate",
    optionB: "The passage of time",
    optionC: "Changes in implied volatility",
    optionD: "Changes in the underlying asset price",
    correctOption: "C",
    explanation: "Vega is the partial derivative of the option price with respect to implied volatility; long options have positive vega.",
    orderIndex: 2
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q04",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "Theta for a long option position is generally:",
    optionA: "Positive, because the option gains value over time",
    optionB: "Negative, reflecting time decay as expiry approaches",
    optionC: "Zero for all options",
    optionD: "Positive only for deep in-the-money options",
    correctOption: "B",
    explanation: "Long option positions suffer time decay (theta is negative), losing value as expiry approaches with all else constant.",
    orderIndex: 3
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q05",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "A delta-neutral portfolio must be rebalanced frequently because:",
    optionA: "Delta changes as the underlying price moves, driven by gamma",
    optionB: "Vega increases as options approach expiry",
    optionC: "Rho changes with the risk-free rate daily",
    optionD: "Theta becomes positive after hedging",
    correctOption: "A",
    explanation: "Gamma causes delta to change as the underlying moves, so a delta-neutral hedge drifts and must be rebalanced continuously.",
    orderIndex: 4
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q06",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "A trader who is long gamma benefits from:",
    optionA: "Large moves in the underlying asset in either direction",
    optionB: "Low realized volatility and stable markets",
    optionC: "Declining implied volatility",
    optionD: "Slow passage of time",
    correctOption: "A",
    explanation: "Long gamma positions profit from large price swings because gains accelerate in either direction while losses from rebalancing are limited.",
    orderIndex: 5
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q07",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "Rho for a long call option is:",
    optionA: "Negative, because higher rates reduce call value",
    optionB: "Zero for all standard options",
    optionC: "Positive, because higher rates increase call value",
    optionD: "Equal to delta",
    correctOption: "C",
    explanation: "A higher risk-free rate lowers the present value of the strike price paid at expiry, increasing the call option's value.",
    orderIndex: 6
  },
  {
    id: "frm-valuation-risk-models-option-valuation-q08",
    topicId: "frm-valuation-risk-models-option-valuation",
    text: "A key limitation of dynamic delta hedging in practice is that:",
    optionA: "It requires no monitoring after establishment",
    optionB: "It eliminates all gamma and vega risk simultaneously",
    optionC: "Discrete rebalancing, transaction costs, and price jumps leave residual risk",
    optionD: "It can only be applied to at-the-money options",
    correctOption: "C",
    explanation: "Continuous rebalancing is impossible in practice; gaps between trades, transaction costs, and sudden jumps all create imperfect hedges.",
    orderIndex: 7
  },

  // Topic 7: Stress Testing & Scenario Analysis
  {
    id: "frm-valuation-risk-models-stress-testing-q01",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "The primary purpose of stress testing is to:",
    optionA: "Replace VaR as the sole risk measure",
    optionB: "Set individual trader position limits",
    optionC: "Calculate expected losses under average market conditions",
    optionD: "Examine portfolio performance under severe scenarios that statistical models may miss",
    correctOption: "D",
    explanation: "Stress testing evaluates tail scenarios — typically severe, correlated dislocations — that VaR underestimates or excludes.",
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q02",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "DFAST stands for:",
    optionA: "Dodd-Frank Act Stress Test",
    optionB: "Diversified Fixed-Asset Stress Test",
    optionC: "Dynamic Funding and Stability Test",
    optionD: "Default Frequency Assessment and Stress Test",
    correctOption: "A",
    explanation: "DFAST is the Dodd-Frank Act Stress Test, an annual U.S. regulatory requirement for large bank holding companies.",
    orderIndex: 1
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q03",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "Reverse stress testing differs from conventional stress testing in that it:",
    optionA: "Uses only historical scenarios",
    optionB: "Works backward from a failure outcome to identify what scenarios could cause it",
    optionC: "Applies only to market risk, not credit or liquidity risk",
    optionD: "Is voluntary and not required by any regulator",
    correctOption: "B",
    explanation: "Reverse stress testing starts with the outcome (failure or capital breach) and works backward to identify plausible triggering scenarios.",
    orderIndex: 2
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q04",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "A historical scenario stress test using the 2008 financial crisis as a template is limited because it:",
    optionA: "Only captures risks that materialized in the past, missing novel scenarios",
    optionB: "Requires Monte Carlo simulation",
    optionC: "Cannot project capital adequacy",
    optionD: "Is too expensive to implement",
    correctOption: "A",
    explanation: "Historical scenarios are anchored to past events and cannot anticipate entirely new risk drivers or unprecedented market structures.",
    orderIndex: 3
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q05",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "CCAR (Comprehensive Capital Analysis and Review) is primarily used by U.S. regulators to assess banks':",
    optionA: "Capital planning processes and capital adequacy under stress",
    optionB: "Market liquidity of trading books",
    optionC: "Operational risk event counts",
    optionD: "Counterparty credit exposure only",
    correctOption: "A",
    explanation: "CCAR evaluates whether large bank holding companies have sufficient capital and sound capital planning processes under adverse scenarios.",
    orderIndex: 4
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q06",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "A hypothetical (narrative) stress scenario differs from a historical scenario in that it:",
    optionA: "Uses only quantitative data without expert judgment",
    optionB: "Replays observed market moves directly",
    optionC: "Is forward-looking and can incorporate unprecedented shocks",
    optionD: "Cannot be used for regulatory reporting",
    correctOption: "C",
    explanation: "Hypothetical scenarios are constructed around plausible but previously unseen events, allowing assessment of novel systemic risks.",
    orderIndex: 5
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q07",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "The severely adverse scenario in a DFAST stress test is designed to represent:",
    optionA: "Expected base-case economic conditions",
    optionB: "A mild recession with moderate unemployment",
    optionC: "A severe global recession with sharp asset price declines",
    optionD: "Only interest rate risk, not credit or market risk",
    correctOption: "C",
    explanation: "The severely adverse scenario represents a deep recession, typically with large unemployment increases and significant asset price falls.",
    orderIndex: 6
  },
  {
    id: "frm-valuation-risk-models-stress-testing-q08",
    topicId: "frm-valuation-risk-models-stress-testing",
    text: "Stress testing is best viewed as a complement to VaR rather than a replacement because:",
    optionA: "Stress tests are always more conservative than VaR",
    optionB: "Stress tests explore specific extreme scenarios while VaR summarizes typical loss distributions",
    optionC: "VaR captures tail severity while stress testing captures frequency",
    optionD: "Regulators prohibit using stress tests and VaR together",
    correctOption: "B",
    explanation: "VaR characterizes the loss distribution statistically; stress tests explore particular severe scenarios, together giving a fuller risk picture.",
    orderIndex: 7
  },

  // Topic 8: Model Risk & Validation
  {
    id: "frm-valuation-risk-models-model-risk-q01",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "The Federal Reserve's primary supervisory guidance on model risk management is:",
    optionA: "SR 11-7",
    optionB: "Basel III Pillar 2",
    optionC: "Dodd-Frank Section 165",
    optionD: "FRTB Article 325",
    correctOption: "A",
    explanation: "SR 11-7 is the Fed's Supervisory Guidance on Model Risk Management, setting out the framework for model development, validation, and governance.",
    orderIndex: 0
  },
  {
    id: "frm-valuation-risk-models-model-risk-q02",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "Under SR 11-7, which of the following is required of the model validation function?",
    optionA: "Validation must be performed by the model's own developers",
    optionB: "Validation need not assess model conceptual soundness",
    optionC: "Validation is only required for market risk models",
    optionD: "Validation must be independent of model development",
    correctOption: "D",
    explanation: "SR 11-7 requires that validation be conducted independently of the teams that build and use models to ensure objectivity.",
    orderIndex: 1
  },
  {
    id: "frm-valuation-risk-models-model-risk-q03",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "Backtesting a VaR model involves:",
    optionA: "Simulating future scenarios and comparing them to theoretical values",
    optionB: "Comparing model-predicted VaR breaches to actual realized losses",
    optionC: "Rerunning the model with different random seeds",
    optionD: "Replacing the model with a challenger model",
    correctOption: "B",
    explanation: "Backtesting counts how often actual losses exceed the VaR estimate, testing whether the model's predictions match realized outcomes.",
    orderIndex: 2
  },
  {
    id: "frm-valuation-risk-models-model-risk-q04",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "A challenger model in the context of model validation is:",
    optionA: "A model that is always inferior to the primary model",
    optionB: "An independently built alternative used to benchmark or validate the primary model",
    optionC: "A regulatory-prescribed model mandated by SR 11-7",
    optionD: "A model used exclusively for stress testing",
    correctOption: "B",
    explanation: "Challenger models are independent alternatives that help validate the primary model and reduce reliance on a single approach.",
    orderIndex: 3
  },
  {
    id: "frm-valuation-risk-models-model-risk-q05",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "Model misuse occurs when a model is:",
    optionA: "Used within its intended range and assumptions",
    optionB: "Subjected to sensitivity analysis",
    optionC: "Applied outside the scope or conditions it was designed for",
    optionD: "Validated by an independent team",
    correctOption: "C",
    explanation: "Model misuse is applying a model beyond its intended use case or assumptions, which can produce materially misleading outputs.",
    orderIndex: 4
  },
  {
    id: "frm-valuation-risk-models-model-risk-q06",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "Sensitivity analysis in model validation is used to:",
    optionA: "Replace backtesting entirely",
    optionB: "Test how model outputs change under varied input assumptions",
    optionC: "Determine the model's historical loss record",
    optionD: "Set the model's capital charge directly",
    correctOption: "B",
    explanation: "Sensitivity analysis probes the stability of model outputs by varying key assumptions, revealing dependence on uncertain inputs.",
    orderIndex: 5
  },
  {
    id: "frm-valuation-risk-models-model-risk-q07",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "According to SR 11-7, a model consists of three components: an information input, a processing component, and:",
    optionA: "A regulatory approval step",
    optionB: "A stress testing module",
    optionC: "A reporting (output) component",
    optionD: "A benchmarking database",
    correctOption: "C",
    explanation: "SR 11-7 defines a model as having an input component, a processing component, and a reporting or output component.",
    orderIndex: 6
  },
  {
    id: "frm-valuation-risk-models-model-risk-q08",
    topicId: "frm-valuation-risk-models-model-risk",
    text: "Benchmarking during model validation involves:",
    optionA: "Setting minimum capital requirements for the model",
    optionB: "Documenting the model's assumptions for regulators",
    optionC: "Counting VaR exceptions over a historical period",
    optionD: "Comparing the model's output to those of alternative or industry-standard models",
    correctOption: "D",
    explanation: "Benchmarking assesses a model by comparing its results to those produced by independent or industry-accepted alternative models.",
    orderIndex: 7
  }
];
