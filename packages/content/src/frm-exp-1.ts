export const expansionTopics = [
  {
    id: "frm-foundations-risk-types-taxonomy",
    subjectId: "frm-foundations",
    name: "Risk Types & Enterprise Risk Taxonomy",
    slug: "risk-types-taxonomy",
    orderIndex: 1,
    materialId: "frm-foundations-risk-types-taxonomy-m01",
    questionIds: [
      "frm-foundations-risk-types-taxonomy-q01",
      "frm-foundations-risk-types-taxonomy-q02",
      "frm-foundations-risk-types-taxonomy-q03",
      "frm-foundations-risk-types-taxonomy-q04",
      "frm-foundations-risk-types-taxonomy-q05",
      "frm-foundations-risk-types-taxonomy-q06",
      "frm-foundations-risk-types-taxonomy-q07",
      "frm-foundations-risk-types-taxonomy-q08",
    ],
  },
  {
    id: "frm-foundations-corporate-governance",
    subjectId: "frm-foundations",
    name: "Corporate Governance & Risk Culture",
    slug: "corporate-governance",
    orderIndex: 2,
    materialId: "frm-foundations-corporate-governance-m01",
    questionIds: [
      "frm-foundations-corporate-governance-q01",
      "frm-foundations-corporate-governance-q02",
      "frm-foundations-corporate-governance-q03",
      "frm-foundations-corporate-governance-q04",
      "frm-foundations-corporate-governance-q05",
      "frm-foundations-corporate-governance-q06",
      "frm-foundations-corporate-governance-q07",
      "frm-foundations-corporate-governance-q08",
    ],
  },
  {
    id: "frm-foundations-erp-risk-appetite",
    subjectId: "frm-foundations",
    name: "Enterprise Risk Programme & Risk Appetite",
    slug: "erp-risk-appetite",
    orderIndex: 3,
    materialId: "frm-foundations-erp-risk-appetite-m01",
    questionIds: [
      "frm-foundations-erp-risk-appetite-q01",
      "frm-foundations-erp-risk-appetite-q02",
      "frm-foundations-erp-risk-appetite-q03",
      "frm-foundations-erp-risk-appetite-q04",
      "frm-foundations-erp-risk-appetite-q05",
      "frm-foundations-erp-risk-appetite-q06",
      "frm-foundations-erp-risk-appetite-q07",
      "frm-foundations-erp-risk-appetite-q08",
    ],
  },
  {
    id: "frm-foundations-financial-disasters",
    subjectId: "frm-foundations",
    name: "Financial Disasters & Risk Lessons",
    slug: "financial-disasters",
    orderIndex: 4,
    materialId: "frm-foundations-financial-disasters-m01",
    questionIds: [
      "frm-foundations-financial-disasters-q01",
      "frm-foundations-financial-disasters-q02",
      "frm-foundations-financial-disasters-q03",
      "frm-foundations-financial-disasters-q04",
      "frm-foundations-financial-disasters-q05",
      "frm-foundations-financial-disasters-q06",
      "frm-foundations-financial-disasters-q07",
      "frm-foundations-financial-disasters-q08",
    ],
  },
  {
    id: "frm-quantitative-analysis-probability-distributions",
    subjectId: "frm-quantitative-analysis",
    name: "Probability Distributions in Risk",
    slug: "probability-distributions",
    orderIndex: 1,
    materialId: "frm-quantitative-analysis-probability-distributions-m01",
    questionIds: [
      "frm-quantitative-analysis-probability-distributions-q01",
      "frm-quantitative-analysis-probability-distributions-q02",
      "frm-quantitative-analysis-probability-distributions-q03",
      "frm-quantitative-analysis-probability-distributions-q04",
      "frm-quantitative-analysis-probability-distributions-q05",
      "frm-quantitative-analysis-probability-distributions-q06",
      "frm-quantitative-analysis-probability-distributions-q07",
      "frm-quantitative-analysis-probability-distributions-q08",
    ],
  },
  {
    id: "frm-quantitative-analysis-statistical-inference",
    subjectId: "frm-quantitative-analysis",
    name: "Statistical Inference & Estimation",
    slug: "statistical-inference",
    orderIndex: 2,
    materialId: "frm-quantitative-analysis-statistical-inference-m01",
    questionIds: [
      "frm-quantitative-analysis-statistical-inference-q01",
      "frm-quantitative-analysis-statistical-inference-q02",
      "frm-quantitative-analysis-statistical-inference-q03",
      "frm-quantitative-analysis-statistical-inference-q04",
      "frm-quantitative-analysis-statistical-inference-q05",
      "frm-quantitative-analysis-statistical-inference-q06",
      "frm-quantitative-analysis-statistical-inference-q07",
      "frm-quantitative-analysis-statistical-inference-q08",
    ],
  },
  {
    id: "frm-quantitative-analysis-regression",
    subjectId: "frm-quantitative-analysis",
    name: "Linear & Non-Linear Regression",
    slug: "regression",
    orderIndex: 3,
    materialId: "frm-quantitative-analysis-regression-m01",
    questionIds: [
      "frm-quantitative-analysis-regression-q01",
      "frm-quantitative-analysis-regression-q02",
      "frm-quantitative-analysis-regression-q03",
      "frm-quantitative-analysis-regression-q04",
      "frm-quantitative-analysis-regression-q05",
      "frm-quantitative-analysis-regression-q06",
      "frm-quantitative-analysis-regression-q07",
      "frm-quantitative-analysis-regression-q08",
    ],
  },
  {
    id: "frm-quantitative-analysis-monte-carlo",
    subjectId: "frm-quantitative-analysis",
    name: "Monte Carlo Simulation & Copulas",
    slug: "monte-carlo",
    orderIndex: 4,
    materialId: "frm-quantitative-analysis-monte-carlo-m01",
    questionIds: [
      "frm-quantitative-analysis-monte-carlo-q01",
      "frm-quantitative-analysis-monte-carlo-q02",
      "frm-quantitative-analysis-monte-carlo-q03",
      "frm-quantitative-analysis-monte-carlo-q04",
      "frm-quantitative-analysis-monte-carlo-q05",
      "frm-quantitative-analysis-monte-carlo-q06",
      "frm-quantitative-analysis-monte-carlo-q07",
      "frm-quantitative-analysis-monte-carlo-q08",
    ],
  },
];

export const expansionMaterials = [
  {
    id: "frm-foundations-risk-types-taxonomy-m01",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Enterprise Risk Taxonomy

A structured **risk taxonomy** classifies the full universe of risks a firm faces, enabling consistent identification, measurement, and reporting across business lines.

## Core Risk Categories

**Market risk** arises from adverse movements in prices — interest rates, equity prices, foreign exchange rates, and commodity prices. It is measured using tools such as Value-at-Risk (VaR) and Expected Shortfall (ES).

**Credit risk** is the potential loss from a counterparty's failure to meet its contractual obligations. It encompasses **default risk**, **migration risk** (credit quality deterioration), and **spread risk**.

**Liquidity risk** splits into two forms: **funding liquidity risk** (inability to meet cash obligations as they fall due) and **market liquidity risk** (inability to exit a position without materially moving the price).

**Operational risk** covers losses from inadequate or failed internal processes, people, systems, or external events. Regulatory capital under Basel III is explicitly required for operational risk.

**Legal and compliance risk** stems from unenforceable contracts, litigation, regulatory sanctions, or breaches of laws and rules. Closely linked is **reputational risk** — the threat of damage to the firm's standing that reduces future revenue.

**Strategic risk** reflects the impact of adverse business decisions, poor implementation of strategies, or failure to respond to industry changes.

## Risk Interactions

| Risk Type | Primary Driver | Key Metric |
|-----------|---------------|------------|
| Market | Price volatility | VaR / ES |
| Credit | Counterparty quality | PD, LGD, EAD |
| Liquidity | Cash-flow timing | LCR, NSFR |
| Operational | Process failures | Loss frequency / severity |

Risks are rarely independent. A credit event can trigger liquidity stress (2008 crisis), and operational failures can amplify market losses. An enterprise taxonomy ensures no category is overlooked and that **risk aggregation** across types is coherent.`,
  },
  {
    id: "frm-foundations-corporate-governance-m01",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Corporate Governance & Risk Culture

**Corporate governance** refers to the system by which a firm is directed and controlled. Effective governance aligns management actions with shareholder interests while protecting other stakeholders, including creditors and regulators.

## Board Oversight

The **board of directors** bears ultimate responsibility for setting risk strategy and approving the **risk appetite statement**. A dedicated **Board Risk Committee** (BRC) provides focused oversight, reviewing significant risk exposures and ensuring management's risk-taking remains within approved boundaries.

The **Chief Risk Officer (CRO)** leads the independent risk management function, reporting directly to the CEO and — critically — to the board. Independence from revenue-generating units is essential to avoid conflicts of interest.

## Three Lines of Defense

The **three lines of defense** model is the standard governance framework in financial institutions:

| Line | Role | Examples |
|------|------|---------|
| First | Business units own and manage risk | Trading desks, lending officers |
| Second | Risk and compliance functions provide oversight | Risk management, compliance, finance |
| Third | Internal audit provides independent assurance | Internal audit, inspection teams |

Regulators expect clear separation between the lines to prevent the second line from becoming captured by commercial pressures.

## Risk Culture

**Risk culture** encompasses the values, beliefs, and behaviours that determine how employees identify and respond to risk. A strong risk culture is characterised by **tone from the top**: senior leaders visibly endorse prudent risk-taking, and there is no tolerance for circumventing controls.

Key indicators of a weak risk culture include siloed reporting, suppression of bad news, excessive focus on short-term profit, and inadequate whistleblowing mechanisms. Regulators including the Basel Committee increasingly assess culture as a standalone governance dimension alongside formal structures.`,
  },
  {
    id: "frm-foundations-erp-risk-appetite-m01",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Enterprise Risk Programme & Risk Appetite

An **Enterprise Risk Programme (ERP)** — sometimes called Enterprise Risk Management (ERM) — provides a holistic, firm-wide framework for identifying, assessing, monitoring, and controlling all material risks. Unlike traditional **silo-based risk management**, which optimises individual risk categories in isolation, ERM recognises interdependencies and aggregates risk at the enterprise level.

## Risk Appetite Framework

The **risk appetite framework** translates strategic objectives into quantitative and qualitative risk boundaries:

- **Risk appetite**: the aggregate level and types of risk a firm is willing to accept in pursuit of its strategic objectives.
- **Risk tolerance**: the acceptable deviation around the risk appetite — a tighter band within which day-to-day operations are managed.
- **Risk limits**: specific quantitative thresholds (e.g., VaR limits by desk, single-name credit concentration limits) cascaded from the appetite statement.

## Key Tools

**Key Risk Indicators (KRIs)** are forward-looking metrics that signal when risk levels are approaching limits, allowing pre-emptive action before a limit breach.

The **risk register** is a centralised inventory cataloguing identified risks, their likelihood, potential impact, the responsible owner, and the current control environment. It is a living document, updated as risks evolve.

| Component | Purpose |
|-----------|---------|
| Risk appetite statement | Defines acceptable risk boundaries |
| Risk tolerance bands | Guides operational decision-making |
| KRIs | Early warning signals |
| Risk register | Comprehensive risk inventory |
| Stress testing | Validates resilience under adverse scenarios |

## ERM vs. Traditional Risk Management

Traditional risk management treats credit, market, and operational risk independently, often within separate departments. ERM integrates these streams, enabling **portfolio-level risk diversification** assessment and ensuring that risk limits remain coherent across the organisation.`,
  },
  {
    id: "frm-foundations-financial-disasters-m01",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Financial Disasters & Risk Lessons

Studying past financial failures provides some of the most durable lessons in risk management. Each major disaster reveals a recurring pattern of inadequate controls, governance failures, or model overconfidence.

## Key Case Studies

**Barings Bank (1995)**: Nick Leeson accumulated unauthorised speculative positions in Nikkei futures, concealing losses in a hidden error account (88888). Barings collapsed because the same individual controlled both trading and back-office settlement — a fundamental breach of **segregation of duties**. Lesson: operational controls and independent oversight are non-negotiable.

**Metallgesellschaft (1993)**: MG Refining used short-dated futures to hedge long-dated oil supply commitments, creating massive mark-to-market margin calls when oil prices fell. The strategy was theoretically sound but ignored **liquidity risk**. Lesson: hedges must account for funding liquidity as well as price exposure.

**Long-Term Capital Management (1998)**: LTCM used extreme leverage (over 25:1) and relied on models calibrated to historical correlations. The Russian debt default caused correlations to converge to 1 during the crisis, destroying the assumed diversification benefits. Lesson: **model risk** and tail dependencies invalidate normal-period correlations in stress.

**2008 Global Financial Crisis**: Systemic failures included over-reliance on ratings for structured products, flawed correlation assumptions in Gaussian copula models for CDOs, excessive leverage, and inadequate liquidity buffers. Lesson: systemic risk and **wrong-way risk** (correlation between counterparty default and exposure) must be explicitly modelled.

## Common Threads

| Disaster | Primary Failure | Key Lesson |
|----------|----------------|-----------|
| Barings | Operational / governance | Segregation of duties |
| Metallgesellschaft | Liquidity risk | Funding vs. price hedge mismatch |
| LTCM | Model risk / leverage | Tail correlations and stress testing |
| 2008 Crisis | Systemic / model risk | Wrong-way risk and concentration |

**Model risk** — the risk that a model is incorrectly specified or misused — is a cross-cutting lesson from every major disaster.`,
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-m01",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Probability Distributions in Risk

Selecting the appropriate probability distribution is foundational to quantitative risk modelling. The distribution chosen shapes every downstream risk metric, including VaR, Expected Shortfall, and scenario analysis outputs.

## Key Distributions

The **normal distribution** N(mu, sigma^2) is defined entirely by its mean and variance. Its symmetry and thin tails make it analytically convenient, but financial returns routinely exhibit **excess kurtosis** (fat tails) and negative skew, making the normal distribution a poor standalone model for extreme losses.

The **lognormal distribution** is used to model asset prices directly, since a lognormally distributed price cannot fall below zero. If log-returns are normally distributed, the underlying price follows a lognormal process — the foundation of the Black-Scholes model.

The **Student-t distribution** with nu degrees of freedom introduces fatter tails than the normal. As nu increases the t-distribution converges to normal. With nu between 4 and 8, it better captures the empirical tail behaviour of financial returns and is widely used in **VaR models** to avoid underestimating extreme losses.

The **binomial distribution** models the number of successes (e.g., defaults) in n independent Bernoulli trials with probability p. It underpins simple credit portfolio models.

The **Poisson distribution** models the number of rare events (e.g., operational loss events) in a fixed time interval with mean lambda. It is central to **Loss Distribution Approach (LDA)** modelling in operational risk.

## Application to VaR

| Distribution | Tail Behaviour | Common Use |
|-------------|---------------|-----------|
| Normal | Thin tails | Parametric VaR (baseline) |
| Student-t | Fat tails | Improved parametric VaR |
| Lognormal | Right-skewed | Option pricing, asset price models |
| Poisson | Discrete events | Operational loss frequency |

The choice between normal and fat-tailed distributions directly affects capital requirements: underestimating tail thickness leads to systematic **VaR underestimation**.`,
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-m01",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Statistical Inference & Estimation

Statistical inference allows risk managers to draw conclusions about population parameters from sample data — essential when fitting loss distributions, backtesting models, and calibrating risk metrics.

## Central Limit Theorem

The **Central Limit Theorem (CLT)** states that the sampling distribution of the sample mean converges to a normal distribution as sample size n grows, regardless of the underlying population distribution. In practice, n >= 30 is often cited as sufficient. The CLT justifies the use of normal-based confidence intervals for estimated means and is the theoretical foundation for many backtesting procedures.

## Confidence Intervals

A **(1-alpha) confidence interval** for a parameter theta is a random interval that contains the true parameter value with probability (1-alpha) in repeated sampling. For a population mean with known variance:

CI = x-bar +/- z_(alpha/2) * (sigma / sqrt(n))

Risk managers use confidence intervals to quantify estimation uncertainty around VaR estimates and to evaluate whether backtesting exception rates are statistically significant.

## Parameter Estimation

**Maximum Likelihood Estimation (MLE)** selects parameter values that maximise the likelihood of observing the sample data. MLE estimators are consistent and asymptotically efficient, making them the standard approach for fitting distributions such as the Student-t, GEV, or GPD to loss data.

**Method of Moments (MoM)** equates theoretical moments (mean, variance, skewness) to their sample equivalents and solves for parameters. MoM is simpler than MLE but can be less efficient, particularly in small samples.

| Method | Strengths | Limitations |
|--------|-----------|------------|
| MLE | Efficient, consistent | Computationally intensive |
| Method of Moments | Simple, closed-form | Less efficient in small samples |
| Bayesian estimation | Incorporates prior information | Requires prior specification |

**Hypothesis testing** complements estimation: backtesting VaR models involves testing whether the observed exception frequency matches the stated confidence level, using tests such as the Kupiec proportion-of-failures (POF) test.`,
  },
  {
    id: "frm-quantitative-analysis-regression-m01",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Linear & Non-Linear Regression

Regression analysis is the workhorse of quantitative finance, used to estimate factor exposures, forecast returns, and model the conditional mean and variance of financial time series.

## OLS and Its Assumptions

**Ordinary Least Squares (OLS)** minimises the sum of squared residuals to estimate coefficients in y = X*beta + epsilon. The **Gauss-Markov theorem** guarantees that OLS is the Best Linear Unbiased Estimator (BLUE) when the classical assumptions hold:

1. Linearity in parameters
2. No perfect multicollinearity
3. Zero conditional mean of errors: E(epsilon | X) = 0
4. **Homoskedasticity**: constant error variance Var(epsilon | X) = sigma^2
5. No autocorrelation: Cov(epsilon_i, epsilon_j) = 0 for i not equal to j

## Violations and Consequences

**Heteroskedasticity** occurs when error variance changes with X (common in financial data where volatility clusters). OLS remains unbiased but is no longer efficient, and standard errors are incorrect. Remedies include **White's heteroskedasticity-consistent standard errors** or WLS.

**Autocorrelation** means residuals are correlated across time. It inflates R-squared and distorts t-statistics. The **Durbin-Watson test** detects first-order autocorrelation; remedies include including lagged variables or using Newey-West standard errors.

**Multicollinearity** arises when regressors are highly correlated, inflating standard errors and making individual coefficient estimates unstable. The **Variance Inflation Factor (VIF)** quantifies its severity.

## GARCH Models

Standard OLS cannot capture **volatility clustering** — the empirical tendency of large return changes to cluster together. **GARCH(1,1)** models the conditional variance as:

sigma^2_t = omega + alpha * epsilon^2_(t-1) + beta * sigma^2_(t-1)

GARCH is the foundation for time-varying volatility estimates used in dynamic VaR calculation and options pricing.

| Issue | Test | Remedy |
|-------|------|--------|
| Heteroskedasticity | White / Breusch-Pagan | Robust SEs, WLS |
| Autocorrelation | Durbin-Watson | Newey-West SEs, GLS |
| Multicollinearity | VIF | Remove/combine regressors |`,
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-m01",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 0,
    estimatedReadTime: 2,
    content: `## Monte Carlo Simulation & Copulas

**Monte Carlo simulation** uses repeated random sampling to approximate the distribution of outcomes that cannot be derived analytically. It is the most flexible risk measurement technique, applicable to path-dependent derivatives, portfolio credit risk, and operational risk capital modelling.

## Simulation Steps

1. Specify the stochastic model (e.g., geometric Brownian motion for equity prices, or a jump-diffusion process).
2. Generate **pseudo-random numbers** from a uniform distribution using algorithms such as the Mersenne Twister.
3. Transform uniforms to the target distribution using the **inverse CDF (probability integral transform)** or Cholesky decomposition for correlated variables.
4. Simulate many paths (typically 10,000 to 1,000,000) and compute the portfolio value at each path's end.
5. Construct the empirical loss distribution and read off VaR and ES at the required confidence level.

## Variance Reduction Techniques

Naive Monte Carlo can require enormous sample sizes for accurate tail estimates. **Variance reduction** techniques improve efficiency:

- **Antithetic variates**: pair each random draw u with (1-u) to reduce variance.
- **Control variates**: use a correlated variable with a known analytical price to adjust simulated values.
- **Importance sampling**: oversample the tail region and reweight results, dramatically reducing the number of paths needed for accurate extreme quantile estimation.

## Copulas for Dependency Modelling

A **copula** is a multivariate distribution that links marginal distributions through a specified dependency structure, independent of the marginals themselves. Sklar's theorem guarantees that any joint distribution can be decomposed into its marginals and a copula.

| Copula | Tail Dependency | Use Case |
|--------|----------------|---------|
| Gaussian | None | Baseline portfolio models |
| Student-t | Symmetric tail dep. | Improved credit portfolio |
| Clayton | Lower tail dep. | Default clustering models |
| Gumbel | Upper tail dep. | Extreme value applications |

The **Gaussian copula** was central to CDO pricing pre-2008 and its failure to capture **tail dependency** — the tendency for defaults to cluster in stress — was a key contributor to systemic underestimation of portfolio credit risk.`,
  },
];

export const expansionQuestions = [
  // Topic 1: Risk Types & Enterprise Risk Taxonomy
  {
    id: "frm-foundations-risk-types-taxonomy-q01",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 0,
    question:
      "A bank cannot exit a large equity position without moving the market price significantly against itself. This is best described as:",
    optionA: "Funding liquidity risk",
    optionB: "Market liquidity risk",
    optionC: "Credit spread risk",
    optionD: "Operational risk",
    correctOption: "B",
    explanation:
      "Market liquidity risk is the inability to transact at or near the current market price due to insufficient market depth. Funding liquidity risk relates to meeting cash obligations, not position exit constraints.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q02",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 1,
    question:
      "Which risk category encompasses losses arising from failed internal processes, people, systems, or external events?",
    optionA: "Market risk",
    optionB: "Credit risk",
    optionC: "Operational risk",
    optionD: "Strategic risk",
    correctOption: "C",
    explanation:
      "Operational risk is explicitly defined in Basel III as losses from failed internal processes, people, systems, or external events. This is distinct from financial risks such as market or credit risk.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q03",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 2,
    question:
      "A sovereign debt downgrade causes an investment-grade bond to fall to sub-investment-grade status, resulting in forced selling and losses for a fund. Which risk type is most directly illustrated?",
    optionA: "Default risk",
    optionB: "Migration risk",
    optionC: "Market liquidity risk",
    optionD: "Reputational risk",
    correctOption: "B",
    explanation:
      "Migration risk is the loss from deterioration in credit quality (credit rating migration) rather than outright default. The downgrade itself, independent of default, creates the loss.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q04",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 3,
    question:
      "Under Basel III, which of the following risk categories explicitly requires regulatory capital allocation?",
    optionA: "Reputational risk",
    optionB: "Strategic risk",
    optionC: "Operational risk",
    optionD: "Legal risk",
    correctOption: "C",
    explanation:
      "Basel III's Pillar 1 requires explicit capital charges for market, credit, and operational risk. Reputational and strategic risk are Pillar 2 considerations assessed under the ICAAP rather than through standardised capital formulae.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q05",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 4,
    question:
      "An enterprise risk taxonomy is primarily designed to ensure which of the following?",
    optionA:
      "That individual business units manage risk independently without central oversight",
    optionB:
      "Consistent identification and classification of all material risks across the firm",
    optionC: "Elimination of all credit and market risks from the balance sheet",
    optionD: "Compliance with a single international regulatory standard",
    correctOption: "B",
    explanation:
      "A risk taxonomy provides a common language and classification framework that enables consistent identification, measurement, and reporting of risks across all business lines and functions.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q06",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 5,
    question:
      "A bank's decision to exit a profitable business line due to persistent adverse media coverage is driven primarily by which risk?",
    optionA: "Credit risk",
    optionB: "Operational risk",
    optionC: "Reputational risk",
    optionD: "Funding liquidity risk",
    correctOption: "C",
    explanation:
      "Reputational risk reflects the threat of damage to a firm's standing in the eyes of customers, counterparties, and the public — the adverse media coverage and resulting business exit is a classic reputational risk manifestation.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q07",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 6,
    question:
      "Which metric pair is most closely associated with measuring credit risk exposure?",
    optionA: "VaR and Expected Shortfall",
    optionB: "Probability of Default and Loss Given Default",
    optionC: "Liquidity Coverage Ratio and Net Stable Funding Ratio",
    optionD: "Duration and convexity",
    correctOption: "B",
    explanation:
      "Probability of Default (PD) and Loss Given Default (LGD) are the fundamental building blocks of credit risk measurement, used together with Exposure at Default (EAD) to calculate Expected Loss.",
  },
  {
    id: "frm-foundations-risk-types-taxonomy-q08",
    topicId: "frm-foundations-risk-types-taxonomy",
    orderIndex: 7,
    question:
      "When a credit event at one institution triggers a funding crisis at another due to interbank exposures, which risk interaction is most prominently illustrated?",
    optionA: "Market risk amplifying operational risk",
    optionB: "Credit risk triggering liquidity risk",
    optionC: "Strategic risk converting to reputational risk",
    optionD: "Legal risk creating market risk",
    correctOption: "B",
    explanation:
      "The 2008 financial crisis demonstrated how credit events (counterparty defaults) can immediately cascade into funding liquidity stress, illustrating that risk categories are interdependent rather than isolated.",
  },

  // Topic 2: Corporate Governance & Risk Culture
  {
    id: "frm-foundations-corporate-governance-q01",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 0,
    question:
      "Under the three lines of defense model, which line is responsible for providing independent assurance over risk management and controls?",
    optionA: "First line (business units)",
    optionB: "Second line (risk and compliance)",
    optionC: "Third line (internal audit)",
    optionD: "External audit",
    correctOption: "C",
    explanation:
      "Internal audit constitutes the third line of defense, providing independent assurance that the first and second lines are functioning effectively. External audit is separate from the three-lines model.",
  },
  {
    id: "frm-foundations-corporate-governance-q02",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 1,
    question:
      "A Chief Risk Officer (CRO) reports exclusively to the CEO with no direct access to the board. What governance weakness does this create?",
    optionA: "Excessive risk appetite",
    optionB: "Insufficient separation between the CRO and business lines",
    optionC:
      "Potential lack of independence, as commercial pressures could override risk assessments",
    optionD: "Inadequate quantitative risk modelling capability",
    correctOption: "C",
    explanation:
      "CRO independence requires direct reporting access to the board, not solely to the CEO. Without board access, the CRO's risk assessments may be filtered or overridden by commercial considerations.",
  },
  {
    id: "frm-foundations-corporate-governance-q03",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 2,
    question:
      "Which of the following is the BEST indicator of a strong risk culture within a financial institution?",
    optionA:
      "Employees consistently prioritise short-term revenue targets above limit compliance",
    optionB:
      "Senior leaders visibly endorse prudent risk behaviour and welcome escalation of concerns",
    optionC: "Risk limits are set conservatively and never reviewed",
    optionD:
      "Internal audit findings are addressed only when mandated by regulators",
    correctOption: "B",
    explanation:
      "Tone from the top — senior leaders visibly modelling and rewarding prudent risk behaviour — is the primary driver of a strong risk culture, creating an environment where staff escalate concerns without fear.",
  },
  {
    id: "frm-foundations-corporate-governance-q04",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 3,
    question:
      "The Board Risk Committee's primary responsibility is best described as:",
    optionA:
      "Executing day-to-day risk management decisions on behalf of the CEO",
    optionB:
      "Setting and approving the firm's risk appetite and overseeing major risk exposures",
    optionC: "Preparing regulatory filings and stress test submissions",
    optionD: "Conducting internal audits of the risk management function",
    correctOption: "B",
    explanation:
      "The Board Risk Committee's core mandate is to set risk appetite at a strategic level and provide oversight of whether management's risk-taking remains within approved boundaries — it does not execute operational decisions.",
  },
  {
    id: "frm-foundations-corporate-governance-q05",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 4,
    question:
      "A trading desk manager is responsible for both approving trades and reconciling back-office records. This arrangement violates which governance principle?",
    optionA: "Tone from the top",
    optionB: "Segregation of duties",
    optionC: "Risk appetite alignment",
    optionD: "The three lines of defense model",
    correctOption: "B",
    explanation:
      "Segregation of duties requires that no single individual controls multiple stages of a transaction (execution, approval, recording). Combining trading and back-office reconciliation creates unchecked opportunity for fraud, as demonstrated by the Barings Bank collapse.",
  },
  {
    id: "frm-foundations-corporate-governance-q06",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 5,
    question:
      "Which of the following is a characteristic of the SECOND line of defense?",
    optionA: "Directly generates revenue through customer transactions",
    optionB:
      "Provides independent assurance by auditing both the first and second lines",
    optionC:
      "Establishes risk policies, frameworks, and oversight without owning business risk",
    optionD: "Issues regulatory capital requirements to the firm",
    correctOption: "C",
    explanation:
      "The second line (risk management and compliance) creates the framework within which the first line operates, providing oversight and challenge without bearing primary responsibility for revenue generation or independent audit.",
  },
  {
    id: "frm-foundations-corporate-governance-q07",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 6,
    question:
      "Regulators increasingly assess risk culture as a standalone supervisory concern. Which observation would MOST likely trigger regulatory concern about a firm's risk culture?",
    optionA: "The CRO attends all board meetings",
    optionB: "Risk appetite is reviewed annually",
    optionC:
      "Staff who raise concerns about mis-selling practices face informal sanctions",
    optionD: "Internal audit reports are shared with external auditors",
    correctOption: "C",
    explanation:
      "Suppression of whistleblowing and retaliation against staff raising legitimate concerns are direct indicators of a dysfunctional risk culture where negative information does not flow to decision-makers.",
  },
  {
    id: "frm-foundations-corporate-governance-q08",
    topicId: "frm-foundations-corporate-governance",
    orderIndex: 7,
    question:
      "Which governance structure best ensures that the risk management function remains independent from commercial pressures?",
    optionA:
      "CRO reports to the head of the trading business to improve information flow",
    optionB:
      "Risk staff are rotated through business units to build commercial knowledge",
    optionC:
      "CRO has a direct reporting line to the board and independent authority to escalate risk concerns",
    optionD: "Risk limits are set by trading desks and submitted to the board for information",
    correctOption: "C",
    explanation:
      "CRO independence is preserved by direct board access and authority to escalate risk concerns without management filtering. Reporting into commercial units creates conflicts of interest that undermine the second line's effectiveness.",
  },

  // Topic 3: Enterprise Risk Programme & Risk Appetite
  {
    id: "frm-foundations-erp-risk-appetite-q01",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 0,
    question:
      "Which statement best distinguishes risk appetite from risk tolerance?",
    optionA:
      "Risk appetite is quantitative; risk tolerance is always qualitative",
    optionB:
      "Risk appetite defines the desired level of risk-taking; risk tolerance defines the acceptable deviation around that level",
    optionC:
      "Risk tolerance is set by regulators; risk appetite is set by the board",
    optionD:
      "Risk appetite applies to operational risk only; risk tolerance applies to market risk",
    correctOption: "B",
    explanation:
      "Risk appetite is the aggregate level of risk the firm is willing to accept in pursuit of strategy; risk tolerance is the allowable band of deviation around the appetite within which management operates day-to-day.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q02",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 1,
    question:
      "A bank observes that its derivative counterparty exposure is rising toward a pre-set threshold before a formal limit is breached. This threshold is best described as a:",
    optionA: "Risk register entry",
    optionB: "Key Risk Indicator (KRI)",
    optionC: "Stress test scenario",
    optionD: "Value-at-Risk estimate",
    correctOption: "B",
    explanation:
      "Key Risk Indicators (KRIs) are forward-looking metrics that provide early warning when risk levels are approaching limits, enabling preventive action before a formal breach occurs.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q03",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 2,
    question:
      "The primary advantage of Enterprise Risk Management (ERM) over traditional silo-based risk management is:",
    optionA:
      "ERM eliminates the need for quantitative risk models within business units",
    optionB:
      "ERM recognises risk interdependencies and enables portfolio-level aggregation across all risk types",
    optionC:
      "ERM transfers all risk management responsibility to the compliance department",
    optionD: "ERM reduces regulatory capital requirements to zero",
    correctOption: "B",
    explanation:
      "ERM's key advantage is an integrated, firm-wide view that captures how risks interact and aggregate, whereas silo-based management can miss concentrations and correlations that only become visible at the enterprise level.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q04",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 3,
    question:
      "A risk register should be updated:",
    optionA: "Only when a loss event occurs",
    optionB: "Annually, immediately before the regulatory inspection",
    optionC:
      "Continuously, as a living document reflecting the current risk environment",
    optionD: "Only when new products are launched",
    correctOption: "C",
    explanation:
      "A risk register is a living document that must be maintained continuously to reflect emerging risks, changes in the control environment, and resolved risk items — not treated as a static compliance exercise.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q05",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 4,
    question:
      "Which component of the risk appetite framework translates the broad appetite statement into actionable day-to-day constraints for business units?",
    optionA: "Risk register",
    optionB: "Stress test results",
    optionC: "Risk limits",
    optionD: "ICAAP document",
    correctOption: "C",
    explanation:
      "Risk limits (e.g., VaR limits by desk, concentration limits by counterparty) cascade the board-level appetite statement into specific, enforceable constraints that guide operational decision-making.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q06",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 5,
    question:
      "Stress testing within an ERM framework primarily serves to:",
    optionA: "Replace the need for day-to-day risk limit monitoring",
    optionB:
      "Validate whether the firm can withstand severe but plausible adverse scenarios",
    optionC: "Eliminate model risk from the risk measurement process",
    optionD: "Determine the probability of default for individual borrowers",
    correctOption: "B",
    explanation:
      "Stress testing assesses the firm's resilience under extreme but plausible scenarios, complementing probabilistic measures like VaR by revealing vulnerabilities that tail probabilities alone may not capture.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q07",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 6,
    question:
      "Which of the following best describes the relationship between risk appetite and strategic objectives?",
    optionA: "Risk appetite is set independently of strategy by the risk function",
    optionB:
      "Risk appetite translates strategic objectives into the level and type of risk the firm is willing to accept in pursuing them",
    optionC: "Strategic objectives are derived from the risk appetite statement",
    optionD: "Risk appetite applies only to financial risks, not strategic decisions",
    correctOption: "B",
    explanation:
      "The risk appetite framework operationalises strategy by defining what risks are acceptable in its pursuit — appetite cannot be set without reference to the firm's strategic goals and business model.",
  },
  {
    id: "frm-foundations-erp-risk-appetite-q08",
    topicId: "frm-foundations-erp-risk-appetite",
    orderIndex: 7,
    question:
      "Under traditional silo-based risk management, which of the following problems is most likely to emerge?",
    optionA: "Excessive regulatory capital requirements for market risk",
    optionB:
      "Concentration risks that span multiple categories are missed because no single function has the full picture",
    optionC: "KRIs are set too conservatively relative to risk appetite",
    optionD: "Internal audit becomes too independent from business operations",
    correctOption: "B",
    explanation:
      "Silo-based management optimises individual risk categories in isolation, creating blind spots for cross-category concentrations and correlated risks that only become visible when viewed at the enterprise level.",
  },

  // Topic 4: Financial Disasters & Risk Lessons
  {
    id: "frm-foundations-financial-disasters-q01",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 0,
    question:
      "The collapse of Barings Bank in 1995 is primarily attributed to which risk management failure?",
    optionA: "Excessive market risk from proprietary currency trading",
    optionB:
      "A single trader controlling both trading and back-office settlement, with no independent oversight",
    optionC: "Inadequate credit limits on sovereign bond exposures",
    optionD: "Model risk from mispriced equity derivatives",
    correctOption: "B",
    explanation:
      "Nick Leeson exploited the absence of segregation of duties by controlling both the trading function and the back-office account (88888) used to conceal losses, a fundamental operational control failure.",
  },
  {
    id: "frm-foundations-financial-disasters-q02",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 1,
    question:
      "Metallgesellschaft's 1993 losses were primarily caused by:",
    optionA: "Credit defaults on long-dated energy supply contracts",
    optionB:
      "Ignoring funding liquidity risk when using short-dated futures to hedge long-dated oil commitments",
    optionC: "A rogue trader accumulating speculative foreign exchange positions",
    optionD: "Overconcentration in a single equity position",
    correctOption: "B",
    explanation:
      "MG's hedging strategy was theoretically sound in terms of price risk, but the short-dated futures generated enormous mark-to-market margin calls when oil prices fell, creating a funding liquidity crisis that forced liquidation of the hedge.",
  },
  {
    id: "frm-foundations-financial-disasters-q03",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 2,
    question:
      "LTCM's failure in 1998 demonstrated that during a market crisis, correlations between assets tend to:",
    optionA: "Decrease, providing unexpected diversification benefits",
    optionB: "Remain stable as predicted by historical models",
    optionC: "Converge toward 1, eliminating assumed diversification benefits",
    optionD: "Become negative, amplifying portfolio gains",
    correctOption: "C",
    explanation:
      "The Russian debt default triggered a flight to quality in which assets that were historically uncorrelated moved together, causing correlations to converge toward 1 and destroying the diversification assumptions underlying LTCM's models.",
  },
  {
    id: "frm-foundations-financial-disasters-q04",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 3,
    question:
      "The Gaussian copula model used to price CDOs before the 2008 financial crisis failed primarily because it:",
    optionA: "Overestimated interest rate volatility",
    optionB:
      "Assumed no tail dependency between defaults, underestimating the probability of simultaneous defaults in stress",
    optionC: "Used an incorrect risk-free rate for discounting cash flows",
    optionD: "Applied fat-tailed distributions that overstated expected losses",
    correctOption: "B",
    explanation:
      "The Gaussian copula has zero tail dependency, meaning it severely underestimated the probability that many mortgages would default simultaneously in a stress scenario — the exact pattern observed in 2008.",
  },
  {
    id: "frm-foundations-financial-disasters-q05",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 4,
    question:
      "Which risk concept describes the situation where counterparty default risk is positively correlated with the size of the exposure to that counterparty?",
    optionA: "Credit migration risk",
    optionB: "Funding liquidity risk",
    optionC: "Wrong-way risk",
    optionD: "Basis risk",
    correctOption: "C",
    explanation:
      "Wrong-way risk exists when exposure to a counterparty increases at the same time as the counterparty's creditworthiness deteriorates, making the credit loss larger precisely when the counterparty is most likely to default.",
  },
  {
    id: "frm-foundations-financial-disasters-q06",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 5,
    question:
      "A common lesson from multiple financial disasters (Barings, LTCM, 2008 crisis) is that:",
    optionA: "Quantitative models are inherently unreliable and should be abandoned",
    optionB: "Leverage and model risk amplify losses beyond what intuitive risk assessment anticipates",
    optionC: "Regulatory capital requirements are always sufficient to absorb unexpected losses",
    optionD: "Operational risk is the dominant source of systemic financial crises",
    correctOption: "B",
    explanation:
      "Across all major financial disasters, excessive leverage magnified losses while model risk — the failure of models to capture real-world behaviour in stress — left institutions unprepared for the magnitude of actual losses.",
  },
  {
    id: "frm-foundations-financial-disasters-q07",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 6,
    question:
      "The 2008 financial crisis revealed a significant overreliance on which risk assessment tool for structured credit products?",
    optionA: "Historical simulation VaR",
    optionB: "Duration-based interest rate sensitivity",
    optionC: "External credit ratings from agencies",
    optionD: "Stress testing under regulatory scenarios",
    correctOption: "C",
    explanation:
      "Investors and institutions heavily relied on AAA ratings assigned by credit rating agencies to CDO tranches without independently assessing the underlying collateral quality or model assumptions, a key contributor to the crisis.",
  },
  {
    id: "frm-foundations-financial-disasters-q08",
    topicId: "frm-foundations-financial-disasters",
    orderIndex: 7,
    question:
      "Model risk is best defined as:",
    optionA: "The risk that a quantitative model produces outputs with insufficient decimal precision",
    optionB: "The risk that IT systems used to run models may fail unexpectedly",
    optionC:
      "The risk of adverse consequences from decisions based on incorrect or misused models",
    optionD: "The risk that model documentation is not shared with regulators",
    correctOption: "C",
    explanation:
      "Model risk encompasses both errors in model specification or calibration (a model that is wrong) and the misapplication of a correctly specified model to situations outside its intended scope.",
  },

  // Topic 5: Probability Distributions in Risk
  {
    id: "frm-quantitative-analysis-probability-distributions-q01",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 0,
    question:
      "A risk manager uses a normal distribution to estimate 99% VaR for a trading portfolio. Compared to using a Student-t distribution with 5 degrees of freedom, the normal distribution will likely:",
    optionA: "Produce a higher VaR estimate due to fatter tails",
    optionB: "Produce a lower VaR estimate due to thinner tails",
    optionC: "Produce the same VaR estimate since both are symmetric",
    optionD: "Produce a higher VaR estimate due to greater skewness",
    correctOption: "B",
    explanation:
      "The normal distribution has thinner tails than the Student-t, so at high confidence levels (99%) it assigns less probability mass to extreme losses and therefore produces a lower VaR estimate than the fat-tailed t-distribution.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q02",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 1,
    question:
      "The lognormal distribution is preferred over the normal distribution for modelling equity prices primarily because:",
    optionA: "It has fatter tails that better capture equity market crashes",
    optionB: "It ensures prices cannot fall below zero",
    optionC: "It is easier to estimate parameters than the normal distribution",
    optionD: "It is symmetric, matching observed equity return distributions",
    correctOption: "B",
    explanation:
      "If a stock price followed a normal distribution, it could theoretically become negative. The lognormal distribution constrains prices to positive values, which is consistent with limited liability for equity holders.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q03",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 2,
    question:
      "As the degrees of freedom parameter (nu) in a Student-t distribution increases toward infinity, the distribution:",
    optionA: "Becomes increasingly skewed to the right",
    optionB: "Develops progressively fatter tails",
    optionC: "Converges to the standard normal distribution",
    optionD: "Converges to a Poisson distribution",
    correctOption: "C",
    explanation:
      "The Student-t distribution converges to the standard normal as degrees of freedom approach infinity, because the additional uncertainty from estimating the variance (which drives the fat tails) disappears.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q04",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 3,
    question:
      "In operational risk modelling under the Loss Distribution Approach, the Poisson distribution is used to model:",
    optionA: "The severity of individual loss events",
    optionB: "The frequency of loss events in a given period",
    optionC: "The correlation between different loss event types",
    optionD: "The capital charge for market risk",
    correctOption: "B",
    explanation:
      "The LDA separates frequency and severity: frequency (the number of loss events per period) is typically modelled with a Poisson distribution, while severity (the size of each loss) uses a heavy-tailed distribution such as lognormal or GPD.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q05",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 4,
    question:
      "A credit portfolio model assumes each obligor defaults independently with a probability of 2%. The number of defaults in a pool of 100 obligors is best modelled using which distribution?",
    optionA: "Normal distribution",
    optionB: "Lognormal distribution",
    optionC: "Binomial distribution",
    optionD: "Student-t distribution",
    correctOption: "C",
    explanation:
      "With n independent Bernoulli trials (default/no-default) each with probability p, the total number of defaults follows a Binomial(n, p) distribution. The normal approximation may be used for large n, but the binomial is the exact model.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q06",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 5,
    question:
      "Which property of empirical financial return distributions does the normal distribution most significantly fail to capture?",
    optionA: "Positive mean returns over long horizons",
    optionB: "Excess kurtosis (fat tails) and negative skewness",
    optionC: "The continuous nature of returns",
    optionD: "Time-varying correlations between assets",
    correctOption: "B",
    explanation:
      "Empirical studies consistently show that financial returns exhibit excess kurtosis (more probability mass in the tails than normal) and negative skewness, both of which the normal distribution cannot accommodate.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q07",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 6,
    question:
      "Using a normal distribution to estimate VaR at high confidence levels (e.g., 99.9%) in the presence of fat-tailed returns will most likely result in:",
    optionA: "Overestimation of VaR, leading to excess capital held",
    optionB: "Accurate VaR estimates since the CLT applies",
    optionC: "Underestimation of VaR, leading to insufficient capital",
    optionD: "No impact, as VaR is insensitive to tail assumptions",
    correctOption: "C",
    explanation:
      "At very high confidence levels, the VaR is determined by the extreme tail of the distribution. If returns are fat-tailed but modelled as normal, the normal distribution assigns too little probability to large losses, systematically underestimating VaR.",
  },
  {
    id: "frm-quantitative-analysis-probability-distributions-q08",
    topicId: "frm-quantitative-analysis-probability-distributions",
    orderIndex: 7,
    question:
      "Which distribution is most appropriate for modelling the number of rare operational loss events (e.g., cyber incidents) occurring in a one-year period?",
    optionA: "Normal distribution",
    optionB: "Binomial distribution with large n",
    optionC: "Poisson distribution",
    optionD: "Student-t distribution",
    correctOption: "C",
    explanation:
      "The Poisson distribution is designed for modelling the count of rare, independent events occurring in a fixed time interval at a constant average rate — exactly the characterisation of infrequent operational loss events.",
  },

  // Topic 6: Statistical Inference & Estimation
  {
    id: "frm-quantitative-analysis-statistical-inference-q01",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 0,
    question:
      "The Central Limit Theorem (CLT) states that as sample size increases, the sampling distribution of the sample mean:",
    optionA:
      "Approaches the same distribution as the underlying population",
    optionB:
      "Converges to a normal distribution regardless of the population distribution",
    optionC: "Becomes more skewed to match the population's skewness",
    optionD: "Has a standard deviation equal to the population standard deviation",
    correctOption: "B",
    explanation:
      "The CLT guarantees convergence of the sample mean's distribution to normal as n grows, regardless of the underlying population distribution shape — this is why normal-based inference is so widely applicable.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q02",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 1,
    question:
      "A 95% confidence interval for a parameter theta means:",
    optionA:
      "There is a 95% probability that theta lies within this specific interval",
    optionB:
      "In repeated sampling, 95% of such constructed intervals would contain the true theta",
    optionC: "The parameter theta equals the midpoint of the interval with 95% certainty",
    optionD: "The sample estimate is within 5% of the true parameter value",
    correctOption: "B",
    explanation:
      "A confidence interval is a frequentist concept: it means that if the experiment were repeated many times, 95% of the resulting intervals would contain the true parameter. The true parameter is fixed; it is the interval that is random.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q03",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 2,
    question:
      "Maximum Likelihood Estimation (MLE) selects parameter values that:",
    optionA:
      "Minimise the sum of squared differences between observed and fitted values",
    optionB: "Match the theoretical moments to the sample moments",
    optionC: "Maximise the probability of observing the sample data given the parameters",
    optionD: "Minimise the variance of the parameter estimates",
    correctOption: "C",
    explanation:
      "MLE finds the parameter values under which the observed data are most likely — i.e., it maximises the likelihood function L(theta | data). This is distinct from OLS (minimises squared errors) and method of moments.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q04",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 3,
    question:
      "The Kupiec proportion-of-failures (POF) test is used in risk management to:",
    optionA: "Estimate the parameters of a GARCH model",
    optionB: "Backtest whether observed VaR exceptions are consistent with the stated confidence level",
    optionC: "Test for heteroskedasticity in regression residuals",
    optionD: "Determine whether credit ratings follow a Markov chain",
    correctOption: "B",
    explanation:
      "The Kupiec POF test is a hypothesis test for VaR backtesting: it tests whether the observed frequency of exceptions (losses exceeding VaR) is statistically consistent with the confidence level claimed by the model.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q05",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 4,
    question:
      "Compared to Maximum Likelihood Estimation, the Method of Moments estimator is generally:",
    optionA: "More computationally intensive and statistically efficient",
    optionB: "Less efficient but simpler to compute, especially with closed-form solutions",
    optionC: "More accurate in small samples due to lower bias",
    optionD: "Preferred for heavy-tailed distributions such as the Pareto",
    correctOption: "B",
    explanation:
      "Method of Moments is typically simpler than MLE (often yielding closed-form estimates) but is less statistically efficient, meaning it requires larger samples to achieve the same estimation precision as MLE.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q06",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 5,
    question:
      "A risk manager estimates a 99% VaR of $10 million with a 95% confidence interval of [$8 million, $12 million]. What does this confidence interval convey?",
    optionA: "The true VaR is definitely between $8 million and $12 million",
    optionB:
      "There is estimation uncertainty around the VaR point estimate; the interval quantifies the precision of the estimate",
    optionC: "The VaR will be exceeded between $8 million and $12 million times per year",
    optionD: "The 95% VaR is $10 million",
    correctOption: "B",
    explanation:
      "The confidence interval around a VaR estimate reflects sampling uncertainty — with a finite historical sample, the VaR itself is estimated with error, and the interval conveys the range within which the true VaR plausibly lies.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q07",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 6,
    question:
      "For which purpose is Bayesian estimation most advantageous relative to MLE?",
    optionA:
      "When computational resources are severely limited and closed-form estimates are required",
    optionB:
      "When prior knowledge or expert judgment about parameters can be formally incorporated into the estimation",
    optionC:
      "When the sample size is very large and asymptotic efficiency dominates",
    optionD: "When the distribution family is unknown and non-parametric methods are needed",
    correctOption: "B",
    explanation:
      "Bayesian estimation's distinguishing feature is the ability to incorporate prior information (expert judgment, historical data from related entities) through a prior distribution, making it especially useful when sample data are scarce.",
  },
  {
    id: "frm-quantitative-analysis-statistical-inference-q08",
    topicId: "frm-quantitative-analysis-statistical-inference",
    orderIndex: 7,
    question:
      "A risk model produces too many VaR exceptions over a backtesting period. A hypothesis test fails to reject the model at the 5% significance level. The risk manager should:",
    optionA:
      "Conclude the model is definitely correct and no action is needed",
    optionB:
      "Recognise that failing to reject does not prove the model is correct; consider additional diagnostic tests",
    optionC: "Increase the VaR confidence level to reduce the number of exceptions",
    optionD: "Replace the model immediately since any exceptions indicate failure",
    correctOption: "B",
    explanation:
      "Failing to reject a null hypothesis does not prove it is true — the test may have low power with limited data. Risk managers should use multiple backtesting tests and qualitative judgment rather than relying solely on a single hypothesis test result.",
  },

  // Topic 7: Linear & Non-Linear Regression
  {
    id: "frm-quantitative-analysis-regression-q01",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 0,
    question:
      "The Gauss-Markov theorem guarantees that OLS is the Best Linear Unbiased Estimator (BLUE) when:",
    optionA: "The dependent variable follows a normal distribution",
    optionB:
      "Errors are homoskedastic, uncorrelated, and have zero conditional mean",
    optionC: "The sample size exceeds 100 observations",
    optionD: "All regressors are uncorrelated with each other",
    correctOption: "B",
    explanation:
      "The Gauss-Markov theorem requires zero conditional mean of errors, homoskedasticity (constant error variance), and no autocorrelation. Normality of errors is not required for BLUE, though it is needed for exact inference in small samples.",
  },
  {
    id: "frm-quantitative-analysis-regression-q02",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 1,
    question:
      "A researcher regresses bond spreads on macroeconomic variables and finds that residual variance increases with the level of interest rates. This is a sign of:",
    optionA: "Autocorrelation",
    optionB: "Multicollinearity",
    optionC: "Heteroskedasticity",
    optionD: "Structural break",
    correctOption: "C",
    explanation:
      "Heteroskedasticity is present when the variance of regression residuals is not constant but varies systematically with a regressor (or the fitted values). Here, the error variance changes with interest rate levels, violating the OLS homoskedasticity assumption.",
  },
  {
    id: "frm-quantitative-analysis-regression-q03",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 2,
    question:
      "The Durbin-Watson (DW) statistic is used to test for:",
    optionA: "Heteroskedasticity in cross-sectional regression",
    optionB: "First-order autocorrelation in time-series regression residuals",
    optionC: "Multicollinearity among regressors",
    optionD: "Non-linearity in the regression functional form",
    correctOption: "B",
    explanation:
      "The Durbin-Watson test detects first-order serial correlation (autocorrelation) in OLS residuals. A DW value near 2 indicates no autocorrelation; values near 0 indicate positive autocorrelation and values near 4 indicate negative autocorrelation.",
  },
  {
    id: "frm-quantitative-analysis-regression-q04",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 3,
    question:
      "A Variance Inflation Factor (VIF) of 12 for a regressor indicates:",
    optionA: "The regressor has 12 times the explanatory power of the dependent variable",
    optionB:
      "The regressor is highly correlated with other regressors, inflating its standard error approximately 12-fold",
    optionC: "The regression model has 12% of its variance explained by this regressor",
    optionD: "The regressor should be multiplied by 12 before inclusion in the model",
    correctOption: "B",
    explanation:
      "VIF measures how much the variance of a coefficient estimate is inflated by multicollinearity. A VIF of 12 means the standard error is approximately sqrt(12) times larger than it would be if the regressor were uncorrelated with all others; VIF > 10 is typically cause for concern.",
  },
  {
    id: "frm-quantitative-analysis-regression-q05",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 4,
    question:
      "In the GARCH(1,1) model sigma^2_t = omega + alpha * epsilon^2_(t-1) + beta * sigma^2_(t-1), the term alpha * epsilon^2_(t-1) captures:",
    optionA: "The long-run average variance",
    optionB: "The persistence of the conditional variance from yesterday",
    optionC: "The impact of the most recent squared return shock on today's variance",
    optionD: "The correlation between return shocks and variance changes",
    correctOption: "C",
    explanation:
      "The alpha term in GARCH(1,1) governs the reaction of conditional variance to the most recent squared return shock (the ARCH effect). A large alpha means variance responds quickly and sharply to new information.",
  },
  {
    id: "frm-quantitative-analysis-regression-q06",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 5,
    question:
      "When OLS residuals exhibit positive autocorrelation, which of the following consequences is most likely?",
    optionA: "Coefficient estimates become biased and inconsistent",
    optionB:
      "Standard errors are underestimated, making t-statistics appear more significant than they are",
    optionC: "The R-squared statistic falls to zero",
    optionD: "Coefficient estimates become inconsistent but standard errors remain valid",
    correctOption: "B",
    explanation:
      "With positive autocorrelation, OLS standard errors are underestimated because the effective number of independent observations is overstated. This inflates t-statistics, causing spurious appearance of statistical significance. Coefficient estimates remain unbiased but are no longer efficient.",
  },
  {
    id: "frm-quantitative-analysis-regression-q07",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 6,
    question:
      "GARCH models are used in quantitative risk management primarily to:",
    optionA: "Estimate the unconditional mean of financial returns",
    optionB: "Model time-varying (conditional) volatility, capturing volatility clustering",
    optionC: "Reduce multicollinearity in factor models",
    optionD: "Correct for heteroskedasticity in cross-sectional equity regressions",
    correctOption: "B",
    explanation:
      "GARCH captures the empirical observation that volatility clusters — periods of high volatility tend to persist, and periods of low volatility tend to persist. This makes GARCH models the foundation for dynamic VaR and options pricing with time-varying volatility.",
  },
  {
    id: "frm-quantitative-analysis-regression-q08",
    topicId: "frm-quantitative-analysis-regression",
    orderIndex: 7,
    question:
      "When the OLS homoskedasticity assumption is violated, an appropriate remedy is to:",
    optionA: "Remove all regressors with VIF greater than 5",
    optionB: "Apply the Durbin-Watson correction to the coefficient estimates",
    optionC:
      "Use White's heteroskedasticity-consistent standard errors or Weighted Least Squares",
    optionD: "Increase the sample size until residual variance stabilises",
    correctOption: "C",
    explanation:
      "White's robust standard errors correct the inference problem caused by heteroskedasticity without changing the coefficient estimates. WLS re-weights observations to restore efficiency when the variance pattern is known. Both are standard remedies in financial econometrics.",
  },

  // Topic 8: Monte Carlo Simulation & Copulas
  {
    id: "frm-quantitative-analysis-monte-carlo-q01",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 0,
    question:
      "The first step in a Monte Carlo simulation of portfolio VaR is to:",
    optionA: "Calculate the empirical VaR from historical data",
    optionB:
      "Specify the stochastic model governing the dynamics of the underlying risk factors",
    optionC: "Select the copula for dependency modelling",
    optionD: "Generate pseudo-random numbers from a standard normal distribution",
    correctOption: "B",
    explanation:
      "Before generating random numbers, the risk manager must specify the model (e.g., GBM, jump-diffusion) that governs how risk factors evolve. Random number generation is a later step in the simulation procedure.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q02",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 1,
    question:
      "The antithetic variates variance reduction technique works by:",
    optionA:
      "Sampling more heavily from the tail region and reweighting results",
    optionB:
      "Pairing each random draw u with (1-u) so that deviations above and below the mean partially cancel",
    optionC: "Using a correlated variable with a known analytical price to adjust simulated values",
    optionD: "Stratifying the sample space into equal-probability intervals",
    correctOption: "B",
    explanation:
      "Antithetic variates pair each uniform draw u with its complement (1-u), creating negatively correlated simulation paths. This negative correlation causes overestimates on one path to be offset by underestimates on the paired path, reducing overall estimator variance.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q03",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 2,
    question:
      "Sklar's theorem, which underpins copula theory, states that:",
    optionA:
      "Any joint distribution can be decomposed into its marginal distributions and a copula capturing the dependency structure",
    optionB:
      "The sum of correlated normal random variables follows a normal distribution",
    optionC: "Copulas are only valid when the marginal distributions are normal",
    optionD: "Tail dependency is always zero for elliptical copulas",
    correctOption: "A",
    explanation:
      "Sklar's theorem is the mathematical foundation of copula theory: any multivariate joint distribution can be expressed as a function of its marginals and a copula. This allows marginal distributions and dependency structure to be modelled separately.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q04",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 3,
    question:
      "The Gaussian copula was widely criticised after the 2008 financial crisis because it:",
    optionA: "Is computationally too expensive for large credit portfolios",
    optionB:
      "Assumes zero tail dependency, meaning it underestimates the probability of simultaneous large losses",
    optionC: "Cannot accommodate asymmetric dependencies between assets",
    optionD: "Requires marginal distributions to be normal, which is rarely true",
    correctOption: "B",
    explanation:
      "The Gaussian copula has zero tail dependency — the probability of simultaneous extreme events converges to zero even as correlations increase. This caused systematic underestimation of joint default probabilities in CDO portfolios.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q05",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 4,
    question:
      "Importance sampling improves Monte Carlo efficiency for tail risk estimation by:",
    optionA:
      "Reducing the number of model parameters that need to be estimated",
    optionB:
      "Oversampling the tail region of the distribution and reweighting the results to remove bias",
    optionC: "Replacing random draws with deterministic low-discrepancy sequences",
    optionD: "Correlating simulation paths to reduce variance via negative covariance",
    correctOption: "B",
    explanation:
      "Importance sampling concentrates simulation effort in the tail region that matters for VaR and ES estimation, then uses likelihood-ratio weights to correct for the biased sampling. This dramatically reduces the number of paths needed for accurate tail estimates.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q06",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 5,
    question:
      "The Student-t copula, compared to the Gaussian copula, is better suited to credit portfolio modelling primarily because:",
    optionA: "It requires fewer parameters to estimate",
    optionB:
      "It exhibits symmetric tail dependency, capturing the tendency for defaults to cluster in stress scenarios",
    optionC: "It assumes independence between extreme events",
    optionD: "It is equivalent to the Gaussian copula for all practical purposes",
    correctOption: "B",
    explanation:
      "The Student-t copula has positive tail dependence (both upper and lower), meaning it assigns higher probability than the Gaussian copula to simultaneous extreme losses — making it more realistic for credit portfolio stress scenarios.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q07",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 6,
    question:
      "The probability integral transform is used in Monte Carlo simulation to:",
    optionA: "Convert normally distributed samples to uniform samples for variance reduction",
    optionB: "Transform uniform random draws into draws from any target distribution using the inverse CDF",
    optionC: "Correlate random draws across simulation paths using the Cholesky decomposition",
    optionD: "Construct antithetic pairs from pseudo-random uniform samples",
    correctOption: "B",
    explanation:
      "The probability integral transform states that if U ~ Uniform(0,1), then F^{-1}(U) follows the distribution with CDF F. This allows simulation from any distribution by applying its inverse CDF to uniform random numbers.",
  },
  {
    id: "frm-quantitative-analysis-monte-carlo-q08",
    topicId: "frm-quantitative-analysis-monte-carlo",
    orderIndex: 7,
    question:
      "For modelling the joint default risk of a credit portfolio where defaults are more likely to cluster in economic downturns (lower tail dependency), which copula is most appropriate?",
    optionA: "Gaussian copula",
    optionB: "Gumbel copula",
    optionC: "Clayton copula",
    optionD: "Frank copula",
    correctOption: "C",
    explanation:
      "The Clayton copula exhibits strong lower tail dependency and weak upper tail dependency, making it well-suited to credit default modelling where the key concern is clustering of defaults during economic stress (lower tail events).",
  },
];
