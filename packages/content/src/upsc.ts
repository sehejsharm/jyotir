import { defineBundle } from "./builder";

export const upsc = defineBundle({
  exam: {
    id: "upsc",
    slug: "upsc",
    name: "UPSC Civil Services",
    tagline: "Polity · History · Geography · Economy · Current Affairs",
    orderIndex: 0
  },
  subjects: [
    { id: "upsc-polity", examId: "upsc", name: "Polity", slug: "polity", orderIndex: 0 },
    { id: "upsc-modern-history", examId: "upsc", name: "Modern History", slug: "modern-history", orderIndex: 1 },
    { id: "upsc-geography", examId: "upsc", name: "Geography", slug: "geography", orderIndex: 2 },
    { id: "upsc-economy", examId: "upsc", name: "Economy", slug: "economy", orderIndex: 3 },
    { id: "upsc-current-affairs", examId: "upsc", name: "Current Affairs", slug: "current-affairs", orderIndex: 4 }
  ],
  topics: [
    {
      id: "upsc-polity-fundamental-rights",
      subjectId: "upsc-polity",
      name: "Fundamental Rights",
      slug: "fundamental-rights",
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures",
      subjectId: "upsc-polity",
      name: "Parliament & State Legislatures",
      slug: "parliament-state-legislatures",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-revolt-of-1857",
      subjectId: "upsc-modern-history",
      name: "Revolt of 1857",
      slug: "revolt-of-1857",
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate",
      subjectId: "upsc-geography",
      name: "Monsoon & Climate of India",
      slug: "monsoon-and-climate",
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy",
      subjectId: "upsc-economy",
      name: "Inflation & Monetary Policy",
      slug: "inflation-and-monetary-policy",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes",
      subjectId: "upsc-current-affairs",
      name: "Flagship Government Schemes",
      slug: "government-schemes",
      orderIndex: 0
    }
  ],
  materials: [
    {
      id: "upsc-polity-fundamental-rights-m01",
      topicId: "upsc-polity-fundamental-rights",
      title: "Fundamental Rights — Articles 12–35",
      content: `**Fundamental Rights** are enshrined in **Part III (Articles 12–35)** of the Constitution and are largely borrowed from the **US Bill of Rights**. They are justiciable — enforceable directly in courts under **Article 32**, which Dr. Ambedkar called the "**heart and soul**" of the Constitution.

## The Six Rights
Originally seven; the **Right to Property** was removed by the **44th Amendment (1978)** and made a legal right under **Article 300A**.

| Right | Articles |
| --- | --- |
| Right to Equality | 14–18 |
| Right to Freedom | 19–22 |
| Right against Exploitation | 23–24 |
| Right to Freedom of Religion | 25–28 |
| Cultural & Educational Rights | 29–30 |
| Right to Constitutional Remedies | 32 |

## Key Points
- **Article 14** — equality before law and equal protection of laws.
- **Article 19** guarantees **six freedoms** (speech, assembly, association, movement, residence, profession) — reasonable restrictions apply.
- **Article 21** — protection of life and personal liberty; the **Maneka Gandhi (1978)** case expanded it to include due process.
- **Article 21A** — Right to Education (6–14 years), added by the **86th Amendment (2002)**.
- **Article 32** offers five writs: *Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto*.

### Available against whom
Most FRs are available only against the **State**, but **Articles 15(2), 17, 23 and 24** are enforceable against **private individuals** too. During a national emergency, **Articles 20 and 21 can never be suspended** (44th Amendment).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures-m01",
      topicId: "upsc-polity-parliament-state-legislatures",
      title: "Parliament & State Legislatures",
      content: `**Parliament** consists of the **President**, the **Lok Sabha** (House of the People) and the **Rajya Sabha** (Council of States). Though the President is not a member of either House, no bill becomes law without assent.

## Composition
| House | Max Strength | Term |
| --- | --- | --- |
| Lok Sabha | 552 | 5 years |
| Rajya Sabha | 250 | Permanent, 1/3 retire every 2 years |

- **Lok Sabha** members are directly elected; a member must be **at least 25 years** old.
- **Rajya Sabha** members are elected by state legislatures via **single transferable vote**; minimum age **30 years**.
- **Money Bills (Article 110)** can originate **only in the Lok Sabha**; the Rajya Sabha can delay them by a maximum of **14 days**.

## Key Provisions
- A **Joint Sitting (Article 108)** resolves a deadlock on ordinary bills and is presided over by the **Speaker of the Lok Sabha**.
- **Quorum** for either House is **one-tenth** of total members.
- The **Vice-President** is the ex-officio Chairman of the Rajya Sabha.

### State Legislatures
- A state may have a **bicameral** legislature (Vidhan Sabha + Vidhan Parishad) or be **unicameral**.
- The **Legislative Council (Vidhan Parishad)** can be created or abolished by Parliament under **Article 169** on a state resolution passed by special majority.
- **Anti-defection** is governed by the **Tenth Schedule**, added by the **52nd Amendment (1985)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-revolt-of-1857-m01",
      topicId: "upsc-modern-history-revolt-of-1857",
      title: "The Revolt of 1857",
      content: `**The Revolt of 1857** — also called the **First War of Independence** (V.D. Savarkar) or the **Sepoy Mutiny** — began at **Meerut on 10 May 1857** and is the great watershed of modern Indian history.

## Immediate & Underlying Causes
- The immediate trigger was the **greased cartridges** of the new **Enfield rifle**, rumoured to be coated with **cow and pig fat**.
- **Political:** Dalhousie's **Doctrine of Lapse** annexed Satara, Jhansi and Nagpur; Awadh was annexed in 1856 on grounds of misgovernment.
- **Economic:** ruin of artisans, heavy land revenue, drain of wealth.
- **Military:** the **General Service Enlistment Act (1856)** and discrimination against Indian sepoys.

## Centres and Leaders
| Centre | Leader |
| --- | --- |
| Delhi | Bahadur Shah Zafar / Bakht Khan |
| Kanpur | Nana Saheb / Tantia Tope |
| Lucknow | Begum Hazrat Mahal |
| Jhansi | Rani Lakshmibai |
| Bihar (Jagdishpur) | Kunwar Singh |

## Consequences
- **Mangal Pandey** fired the first shot at Barrackpore (29 March 1857).
- The revolt ended Company rule: the **Government of India Act, 1858** transferred power to the **British Crown**.
- **Queen Victoria's Proclamation (1858)** promised non-interference in religion and the end of expansion.

### Why It Failed
- No unified leadership, limited geographic spread, and many princely states (Hyderabad, Scindia) stayed loyal to the British.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate-m01",
      topicId: "upsc-geography-monsoon-and-climate",
      title: "Indian Monsoon & Climate",
      content: `**The Indian monsoon** is a seasonal reversal of wind that gives the subcontinent a **tropical monsoon (Köppen "Am/Aw")** climate. The word derives from the Arabic *mausim*, meaning season.

## Mechanism
- In summer, intense heating creates a **low-pressure trough** over northwest India, drawing in moisture-laden **South-West Monsoon** winds from the **Indian Ocean**.
- The **Inter-Tropical Convergence Zone (ITCZ)** shifts north, and the **Tropical Easterly Jet** and a strong **El Niño** weaken the monsoon, while **La Niña** strengthens it.
- The **branch** split: the **Arabian Sea branch** and the **Bay of Bengal branch** converge over the Ganga plain.

## Seasons (IMD)
| Season | Months |
| --- | --- |
| Cold Weather | Dec–Feb |
| Hot Weather | Mar–May |
| South-West Monsoon (Advancing) | Jun–Sep |
| Retreating Monsoon | Oct–Nov |

## Key Facts
- The monsoon usually **bursts over Kerala around 1 June**.
- **Mawsynram (Meghalaya)** is the wettest place on Earth; the Shillong plateau funnels the Bay of Bengal branch.
- **Western disturbances** bring winter rain to Punjab and Haryana, vital for the **rabi** crop.
- **October heat ("October Heat")** is the humid, oppressive weather during the retreating monsoon.

### Phenomena
- **Mango showers** (pre-monsoon rain in Kerala/Karnataka) and **Kal Baisakhi / Norwesters** in Bengal aid tea, coffee and jute.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-m01",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      title: "Inflation & Monetary Policy",
      content: `**Inflation** is a sustained rise in the general price level, eroding the purchasing power of money. In India it is measured chiefly by two indices.

## Measuring Inflation
| Index | Base Year | Released By |
| --- | --- | --- |
| CPI (Combined) | 2012 | NSO / MoSPI |
| WPI | 2011-12 | Office of Economic Adviser |

- **CPI** is the headline measure for the inflation target; **WPI** excludes services.
- **Core inflation** strips out volatile **food and fuel** prices.

## Monetary Policy Framework
- Under the amended **RBI Act, the Monetary Policy Committee (MPC)** — 6 members — sets the **repo rate**.
- The flexible inflation target is **4% ± 2%** (i.e. 2%–6%), reviewed every five years.
- Tools: **Repo rate, Reverse repo, CRR, SLR, MSF** and **Open Market Operations (OMO)**.

### Repo vs Reverse Repo
- **Repo rate** — rate at which RBI lends to banks (raising it fights inflation).
- **Reverse repo** — rate at which RBI borrows from banks.

## Types of Inflation
- **Demand-pull** — too much money chasing too few goods.
- **Cost-push** — rising input costs (e.g. crude oil).
- **Stagflation** — high inflation with stagnant growth and high unemployment.

A **moderate, predictable** inflation (creeping inflation) is considered healthy as it encourages investment, while **deflation** can deepen a recession.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes-m01",
      topicId: "upsc-current-affairs-government-schemes",
      title: "Flagship Government Schemes",
      content: `**Government schemes** are a high-yield, recurring theme. Know the **ministry, year and objective** of each flagship programme.

## Financial Inclusion & Welfare
- **PM Jan Dhan Yojana (2014)** — universal, no-frills bank accounts with **RuPay** debit cards and overdraft.
- **Ayushman Bharat — PM-JAY (2018)** — health cover of **₹5 lakh** per family per year, the world's largest health assurance scheme.
- **PM-KISAN (2019)** — income support of **₹6,000/year** in three instalments to farmer families.

## Housing, Sanitation & Energy
| Scheme | Aim |
| --- | --- |
| PM Awas Yojana | Housing for all |
| Swachh Bharat Mission | Open-defecation-free India |
| Ujjwala Yojana | Free LPG connections to BPL women |
| Saubhagya | Universal household electrification |

## Skilling & Employment
- **MGNREGA (2005)** guarantees **100 days** of wage employment to rural households.
- **Skill India / PMKVY** offers short-term skill training.
- **Make in India** and **PLI (Production-Linked Incentive)** schemes boost domestic manufacturing.

### Direct Benefit Transfer
- **DBT** uses the **JAM trinity** — *Jan Dhan, Aadhaar, Mobile* — to plug leakages by transferring subsidies straight to bank accounts.

When revising, link each scheme to the relevant **ministry** and the **target beneficiary group**, as questions often pair a scheme with its wrong ministry as a distractor.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "upsc-polity-fundamental-rights-q01",
      topicId: "upsc-polity-fundamental-rights",
      text: "In which Part of the Constitution are the Fundamental Rights enshrined?",
      optionA: "Part II (Articles 5–11)",
      optionB: "Part IV (Articles 36–51)",
      optionC: "Part III (Articles 12–35)",
      optionD: "Part IVA (Article 51A)",
      correctOption: "C",
      explanation: "Fundamental Rights occupy Part III; Part IV holds the Directive Principles and Part IVA the Fundamental Duties.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-fundamental-rights-q02",
      topicId: "upsc-polity-fundamental-rights",
      text: "Consider the following statements about the Right to Property:\n1. It was originally a Fundamental Right.\n2. The 44th Amendment made it a legal right under Article 300A.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The 44th Amendment (1978) removed property from Part III and re-cast it as a legal right under Article 300A.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-fundamental-rights-q03",
      topicId: "upsc-polity-fundamental-rights",
      text: "Which Article did Dr. B.R. Ambedkar call the 'heart and soul' of the Constitution?",
      optionA: "Article 14",
      optionB: "Article 19",
      optionC: "Article 32",
      optionD: "Article 21",
      correctOption: "C",
      explanation: "Article 32 guarantees the right to constitutional remedies, making the other rights enforceable.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-fundamental-rights-q04",
      topicId: "upsc-polity-fundamental-rights",
      text: "How many freedoms are guaranteed to citizens under Article 19?",
      optionA: "Four",
      optionB: "Five",
      optionC: "Six",
      optionD: "Seven",
      correctOption: "C",
      explanation: "After the 44th Amendment removed the right to property, Article 19 now lists six freedoms.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-fundamental-rights-q05",
      topicId: "upsc-polity-fundamental-rights",
      text: "Consider the following statements:\n1. Articles 20 and 21 cannot be suspended even during a national emergency.\n2. The writ of Habeas Corpus can be issued against private individuals.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The 44th Amendment protects Articles 20 and 21; Habeas Corpus lies against both the State and private persons.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-fundamental-rights-q06",
      topicId: "upsc-polity-fundamental-rights",
      text: "The Right to Education under Article 21A was inserted by which Constitutional Amendment?",
      optionA: "86th Amendment",
      optionB: "44th Amendment",
      optionC: "42nd Amendment",
      optionD: "73rd Amendment",
      correctOption: "A",
      explanation: "The 86th Amendment (2002) added Article 21A guaranteeing free education to children aged 6 to 14.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-fundamental-rights-q07",
      topicId: "upsc-polity-fundamental-rights",
      text: "Which writ is issued to quash an order already passed by a lower court or tribunal?",
      optionA: "Mandamus",
      optionB: "Quo-Warranto",
      optionC: "Certiorari",
      optionD: "Prohibition",
      correctOption: "C",
      explanation: "Certiorari quashes a decision already made; Prohibition stops proceedings still in progress.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-fundamental-rights-q08",
      topicId: "upsc-polity-fundamental-rights",
      text: "From which country's constitution did India borrow the concept of Fundamental Rights?",
      optionA: "United Kingdom",
      optionB: "Canada",
      optionC: "Ireland",
      optionD: "United States",
      correctOption: "D",
      explanation: "Fundamental Rights were inspired by the US Bill of Rights; the Directive Principles came from Ireland.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q01",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "A Money Bill can be introduced only in which House of Parliament?",
      optionA: "Lok Sabha",
      optionB: "Rajya Sabha",
      optionC: "Either House",
      optionD: "A joint sitting",
      correctOption: "A",
      explanation: "Under Article 110, a Money Bill originates only in the Lok Sabha; the Rajya Sabha may delay it 14 days.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q02",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Consider the following statements:\n1. The Rajya Sabha is a permanent House not subject to dissolution.\n2. One-third of its members retire every two years.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Rajya Sabha is permanent and one-third of its members retire biennially, giving each a six-year term.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q03",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Who presides over a joint sitting of both Houses of Parliament?",
      optionA: "The Speaker of the Lok Sabha",
      optionB: "The Vice-President",
      optionC: "The President",
      optionD: "The senior-most member",
      correctOption: "A",
      explanation: "Under Article 108, the Speaker of the Lok Sabha presides over a joint sitting.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q04",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "What is the minimum age to become a member of the Rajya Sabha?",
      optionA: "21 years",
      optionB: "25 years",
      optionC: "35 years",
      optionD: "30 years",
      correctOption: "D",
      explanation: "A Rajya Sabha member must be at least 30 years old, against 25 for the Lok Sabha.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q05",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "The quorum to constitute a sitting of either House is what fraction of its total membership?",
      optionA: "One-half",
      optionB: "One-fifth",
      optionC: "One-fourth",
      optionD: "One-tenth",
      correctOption: "D",
      explanation: "Article 100 fixes the quorum for either House at one-tenth of the total number of members.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q06",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "The anti-defection law is contained in which Schedule of the Constitution?",
      optionA: "Tenth Schedule",
      optionB: "Ninth Schedule",
      optionC: "Eighth Schedule",
      optionD: "Twelfth Schedule",
      correctOption: "A",
      explanation: "The 52nd Amendment (1985) added the Tenth Schedule dealing with disqualification on grounds of defection.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q07",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Under which Article can Parliament create or abolish a State Legislative Council?",
      optionA: "Article 200",
      optionB: "Article 169",
      optionC: "Article 249",
      optionD: "Article 312",
      correctOption: "B",
      explanation: "Article 169 lets Parliament create or abolish a Vidhan Parishad on a special-majority resolution of the state assembly.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q08",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Who is the ex-officio Chairman of the Rajya Sabha?",
      optionA: "The President",
      optionB: "The Prime Minister",
      optionC: "The Vice-President",
      optionD: "The Speaker",
      correctOption: "C",
      explanation: "The Vice-President of India serves as the ex-officio Chairman of the Rajya Sabha.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q01",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "The Revolt of 1857 began at which cantonment?",
      optionA: "Meerut",
      optionB: "Barrackpore",
      optionC: "Kanpur",
      optionD: "Lucknow",
      correctOption: "A",
      explanation: "The mutiny erupted at Meerut on 10 May 1857 before spreading to Delhi.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q02",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who led the revolt at Lucknow?",
      optionA: "Begum Hazrat Mahal",
      optionB: "Nana Saheb",
      optionC: "Rani Lakshmibai",
      optionD: "Kunwar Singh",
      correctOption: "A",
      explanation: "Begum Hazrat Mahal led the uprising in Lucknow on behalf of her son Birjis Qadr.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q03",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Consider the following statements:\n1. The Doctrine of Lapse was a political cause of the revolt.\n2. The Government of India Act, 1858 ended Company rule.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Dalhousie's annexations bred resentment, and the 1858 Act transferred power to the British Crown.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q04",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who fired the first shot of the revolt at Barrackpore?",
      optionA: "Tantia Tope",
      optionB: "Bakht Khan",
      optionC: "Mangal Pandey",
      optionD: "Bahadur Shah Zafar",
      correctOption: "C",
      explanation: "Sepoy Mangal Pandey of the 34th Native Infantry fired on his officers at Barrackpore in March 1857.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q05",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "The immediate cause of the revolt was the rumour about which item?",
      optionA: "A new salt tax",
      optionB: "Abolition of sati",
      optionC: "Forced religious conversion",
      optionD: "Greased Enfield cartridges",
      correctOption: "D",
      explanation: "Cartridges greased with cow and pig fat offended Hindu and Muslim sepoys, triggering the mutiny.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q06",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Which Mughal ruler was proclaimed the symbolic leader of the revolt at Delhi?",
      optionA: "Akbar II",
      optionB: "Shah Alam II",
      optionC: "Bahadur Shah Zafar",
      optionD: "Aurangzeb",
      correctOption: "C",
      explanation: "The rebels rallied around Bahadur Shah Zafar II, the last Mughal emperor, at Delhi.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q07",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Who described the 1857 revolt as the 'First War of Independence'?",
      optionA: "R.C. Majumdar",
      optionB: "V.D. Savarkar",
      optionC: "S.N. Sen",
      optionD: "Benjamin Disraeli",
      correctOption: "B",
      explanation: "V.D. Savarkar called it the First War of Independence in his 1909 work on the subject.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-revolt-of-1857-q08",
      topicId: "upsc-modern-history-revolt-of-1857",
      text: "Which leader defended Jhansi and later joined the rebels at Gwalior?",
      optionA: "Begum Hazrat Mahal",
      optionB: "Kunwar Singh",
      optionC: "Rani Lakshmibai",
      optionD: "Nana Saheb",
      correctOption: "C",
      explanation: "Rani Lakshmibai of Jhansi fought British forces and died in battle near Gwalior in 1858.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-monsoon-and-climate-q01",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The South-West Monsoon normally bursts over which state first?",
      optionA: "Kerala",
      optionB: "Tamil Nadu",
      optionC: "West Bengal",
      optionD: "Gujarat",
      correctOption: "A",
      explanation: "The monsoon onset usually occurs over Kerala around 1 June.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate-q02",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Consider the following statements:\n1. El Niño conditions tend to weaken the Indian monsoon.\n2. La Niña conditions tend to strengthen it.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "El Niño typically suppresses monsoon rainfall while La Niña enhances it.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-monsoon-and-climate-q03",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Which is recorded as one of the wettest places on Earth?",
      optionA: "Leh",
      optionB: "Pune",
      optionC: "Jaisalmer",
      optionD: "Mawsynram",
      correctOption: "D",
      explanation: "Mawsynram in Meghalaya receives the highest average annual rainfall in the world.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-monsoon-and-climate-q04",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "'Mango showers' are pre-monsoon rains associated mainly with which region?",
      optionA: "Punjab and Haryana",
      optionB: "Assam",
      optionC: "Rajasthan",
      optionD: "Kerala and Karnataka",
      correctOption: "D",
      explanation: "Pre-monsoon showers in Kerala and coastal Karnataka help ripen mangoes, hence the name.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-monsoon-and-climate-q05",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Winter rainfall in north-west India is caused mainly by:",
      optionA: "Retreating monsoon",
      optionB: "Norwesters",
      optionC: "Western disturbances",
      optionD: "Trade winds",
      correctOption: "C",
      explanation: "Western disturbances originating in the Mediterranean bring vital winter rain for the rabi crop.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-monsoon-and-climate-q06",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The two branches into which the South-West Monsoon splits are the:",
      optionA: "Coromandel and Malabar branches",
      optionB: "Arabian Sea and Bay of Bengal branches",
      optionC: "Himalayan and Peninsular branches",
      optionD: "Polar and Tropical branches",
      correctOption: "B",
      explanation: "The monsoon divides into the Arabian Sea branch and the Bay of Bengal branch.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-monsoon-and-climate-q07",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The seasonal reversal of winds that defines the monsoon is linked to the migration of the:",
      optionA: "Jet stream only",
      optionB: "Equatorial low alone",
      optionC: "Tropic of Cancer",
      optionD: "Inter-Tropical Convergence Zone (ITCZ)",
      correctOption: "D",
      explanation: "The northward shift of the ITCZ in summer pulls moisture-laden winds onto the subcontinent.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-monsoon-and-climate-q08",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "'Kal Baisakhi' or Norwesters are violent thunderstorms that mainly affect:",
      optionA: "Gujarat",
      optionB: "West Bengal and Assam",
      optionC: "Tamil Nadu",
      optionD: "Kashmir",
      correctOption: "B",
      explanation: "These pre-monsoon evening storms strike Bengal and Assam, aiding tea and jute cultivation.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q01",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "Which body sets the policy repo rate in India?",
      optionA: "The Finance Ministry",
      optionB: "The Cabinet Committee on Economic Affairs",
      optionC: "The NITI Aayog",
      optionD: "The Monetary Policy Committee",
      correctOption: "D",
      explanation: "The six-member Monetary Policy Committee fixes the repo rate under the amended RBI Act.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q02",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "India's flexible inflation target is set at:",
      optionA: "2% ± 2%",
      optionB: "4% ± 2%",
      optionC: "5% ± 1%",
      optionD: "6% ± 2%",
      correctOption: "B",
      explanation: "The CPI inflation target is 4% with a tolerance band of plus or minus two percentage points.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q03",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "Consider the following statements:\n1. Core inflation excludes food and fuel prices.\n2. WPI includes the prices of services.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Core inflation strips out volatile food and fuel, while the WPI covers only goods, not services.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q04",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "The repo rate is the rate at which:",
      optionA: "Banks lend to the public",
      optionB: "RBI borrows from banks",
      optionC: "RBI lends to commercial banks",
      optionD: "Banks lend to one another",
      correctOption: "C",
      explanation: "Repo is the rate at which the RBI lends short-term funds to commercial banks against securities.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q05",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "A situation of high inflation combined with stagnant growth and high unemployment is called:",
      optionA: "Stagflation",
      optionB: "Disinflation",
      optionC: "Deflation",
      optionD: "Reflation",
      correctOption: "A",
      explanation: "Stagflation pairs rising prices with economic stagnation and high joblessness.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q06",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "To control high inflation, the RBI would typically:",
      optionA: "Reduce the repo rate",
      optionB: "Raise the repo rate",
      optionC: "Lower the CRR",
      optionD: "Conduct OMO purchases",
      correctOption: "B",
      explanation: "Raising the repo rate makes credit costlier, curbing demand and cooling inflation.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q07",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "The headline Consumer Price Index in India is released by:",
      optionA: "The Reserve Bank of India",
      optionB: "The SEBI",
      optionC: "The Office of the Economic Adviser",
      optionD: "The NSO under MoSPI",
      correctOption: "D",
      explanation: "The National Statistical Office under MoSPI compiles and releases the CPI.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q08",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "'Too much money chasing too few goods' best describes which type of inflation?",
      optionA: "Cost-push inflation",
      optionB: "Demand-pull inflation",
      optionC: "Structural inflation",
      optionD: "Imported inflation",
      correctOption: "B",
      explanation: "Demand-pull inflation arises when aggregate demand outstrips the available supply of goods.",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-government-schemes-q01",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Ayushman Bharat (PM-JAY) provides annual health cover of what amount per family?",
      optionA: "₹5 lakh",
      optionB: "₹3 lakh",
      optionC: "₹2 lakh",
      optionD: "₹10 lakh",
      correctOption: "A",
      explanation: "PM-JAY gives a health cover of ₹5 lakh per family per year for secondary and tertiary care.",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes-q02",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The 'JAM' trinity used for Direct Benefit Transfer stands for:",
      optionA: "Jan Dhan, Awas, MGNREGA",
      optionB: "Jobs, Agriculture, Manufacturing",
      optionC: "Jan Dhan, Aadhaar, Mobile",
      optionD: "Justice, Aadhaar, Money",
      correctOption: "C",
      explanation: "JAM links Jan Dhan accounts, Aadhaar identity and Mobile numbers to deliver subsidies directly.",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-government-schemes-q03",
      topicId: "upsc-current-affairs-government-schemes",
      text: "PM-KISAN provides income support of how much per year to eligible farmer families?",
      optionA: "₹4,000",
      optionB: "₹12,000",
      optionC: "₹8,000",
      optionD: "₹6,000",
      correctOption: "D",
      explanation: "PM-KISAN transfers ₹6,000 a year in three equal instalments of ₹2,000.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-government-schemes-q04",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Ujjwala Yojana is associated with the distribution of:",
      optionA: "Solar panels",
      optionB: "Free LPG connections",
      optionC: "Bank accounts",
      optionD: "Free housing",
      correctOption: "B",
      explanation: "PM Ujjwala Yojana provides free LPG connections to women from below-poverty-line households.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-government-schemes-q05",
      topicId: "upsc-current-affairs-government-schemes",
      text: "MGNREGA guarantees how many days of wage employment per rural household per year?",
      optionA: "100 days",
      optionB: "50 days",
      optionC: "150 days",
      optionD: "200 days",
      correctOption: "A",
      explanation: "The Act guarantees 100 days of unskilled manual wage employment to each rural household.",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-government-schemes-q06",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Consider the following statements:\n1. PM Jan Dhan Yojana provides RuPay debit cards.\n2. The Saubhagya scheme aims at universal household electrification.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Jan Dhan accounts come with RuPay cards, while Saubhagya targets electricity for all households.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-government-schemes-q07",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Production-Linked Incentive (PLI) scheme is designed primarily to boost:",
      optionA: "Agricultural exports",
      optionB: "Tourism",
      optionC: "Rural employment",
      optionD: "Domestic manufacturing",
      correctOption: "D",
      explanation: "PLI offers incentives on incremental sales to expand domestic manufacturing under Make in India.",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-government-schemes-q08",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Swachh Bharat Mission is chiefly aimed at achieving:",
      optionA: "Universal banking",
      optionB: "An open-defecation-free India",
      optionC: "Free education",
      optionD: "Affordable housing",
      correctOption: "B",
      explanation: "The mission focuses on sanitation and making India open-defecation-free through toilet construction.",
      orderIndex: 7
    }
  ]
});
