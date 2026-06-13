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
    { id: "upsc-current-affairs", examId: "upsc", name: "Current Affairs", slug: "current-affairs", orderIndex: 4 },
    { id: "upsc-ancient-history", examId: "upsc", name: "Ancient History", slug: "ancient-history", orderIndex: 5 },
    { id: "upsc-medieval-history", examId: "upsc", name: "Medieval History", slug: "medieval-history", orderIndex: 6 },
    { id: "upsc-art-and-culture", examId: "upsc", name: "Art & Culture", slug: "art-and-culture", orderIndex: 7 },
    { id: "upsc-environment", examId: "upsc", name: "Environment & Ecology", slug: "environment", orderIndex: 8 },
    { id: "upsc-science-technology", examId: "upsc", name: "Science & Technology", slug: "science-technology", orderIndex: 9 },
    { id: "upsc-international-relations", examId: "upsc", name: "International Relations", slug: "international-relations", orderIndex: 10 }
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
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties",
      subjectId: "upsc-polity",
      name: "DPSP & Fundamental Duties",
      slug: "dpsp-and-fundamental-duties",
      orderIndex: 2
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review",
      subjectId: "upsc-polity",
      name: "Judiciary & Judicial Review",
      slug: "judiciary-and-judicial-review",
      orderIndex: 3
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies",
      subjectId: "upsc-polity",
      name: "Constitutional & Statutory Bodies",
      slug: "constitutional-and-statutory-bodies",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-moderates-and-extremists",
      subjectId: "upsc-modern-history",
      name: "Moderates & Extremists",
      slug: "moderates-and-extremists",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements",
      subjectId: "upsc-modern-history",
      name: "Gandhian Mass Movements",
      slug: "gandhian-mass-movements",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements",
      subjectId: "upsc-modern-history",
      name: "Socio-Religious Reform Movements",
      slug: "socio-religious-reform-movements",
      orderIndex: 3
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers",
      subjectId: "upsc-geography",
      name: "Indian Physiography & Rivers",
      slug: "indian-physiography-and-rivers",
      orderIndex: 1
    },
    {
      id: "upsc-geography-soils-and-agriculture",
      subjectId: "upsc-geography",
      name: "Soils & Agriculture",
      slug: "soils-and-agriculture",
      orderIndex: 2
    },
    {
      id: "upsc-geography-world-geography-landforms",
      subjectId: "upsc-geography",
      name: "World Geography: Landforms",
      slug: "world-geography-landforms",
      orderIndex: 3
    },
    {
      id: "upsc-economy-national-income-and-gdp",
      subjectId: "upsc-economy",
      name: "National Income & GDP",
      slug: "national-income-and-gdp",
      orderIndex: 1
    },
    {
      id: "upsc-economy-banking-system-and-rbi",
      subjectId: "upsc-economy",
      name: "Banking System & RBI",
      slug: "banking-system-and-rbi",
      orderIndex: 2
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy",
      subjectId: "upsc-economy",
      name: "Union Budget & Fiscal Policy",
      slug: "union-budget-and-fiscal-policy",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices",
      subjectId: "upsc-current-affairs",
      name: "Key Institutions & Indices",
      slug: "key-institutions-and-indices",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news",
      subjectId: "upsc-current-affairs",
      name: "Polity & Economy in the News",
      slug: "polity-and-economy-in-the-news",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation",
      subjectId: "upsc-ancient-history",
      name: "Indus Valley Civilisation",
      slug: "indus-valley-civilisation",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire",
      subjectId: "upsc-ancient-history",
      name: "Mauryan Empire",
      slug: "mauryan-empire",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-gupta-age",
      subjectId: "upsc-ancient-history",
      name: "Gupta Age",
      slug: "gupta-age",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism",
      subjectId: "upsc-ancient-history",
      name: "Buddhism & Jainism",
      slug: "buddhism-and-jainism",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-delhi-sultanate",
      subjectId: "upsc-medieval-history",
      name: "Delhi Sultanate",
      slug: "delhi-sultanate",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire",
      subjectId: "upsc-medieval-history",
      name: "Mughal Empire",
      slug: "mughal-empire",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements",
      subjectId: "upsc-medieval-history",
      name: "Bhakti & Sufi Movements",
      slug: "bhakti-and-sufi-movements",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-temple-architecture",
      subjectId: "upsc-art-and-culture",
      name: "Temple Architecture",
      slug: "temple-architecture",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms",
      subjectId: "upsc-art-and-culture",
      name: "Classical Dance Forms",
      slug: "classical-dance-forms",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools",
      subjectId: "upsc-art-and-culture",
      name: "Indian Painting Schools",
      slug: "indian-painting-schools",
      orderIndex: 2
    },
    {
      id: "upsc-environment-biodiversity-and-conservation",
      subjectId: "upsc-environment",
      name: "Biodiversity & Conservation",
      slug: "biodiversity-and-conservation",
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements",
      subjectId: "upsc-environment",
      name: "Climate Change & Global Agreements",
      slug: "climate-change-and-global-agreements",
      orderIndex: 1
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains",
      subjectId: "upsc-environment",
      name: "Ecosystems & Food Chains",
      slug: "ecosystems-and-food-chains",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-space-technology-isro",
      subjectId: "upsc-science-technology",
      name: "Space Technology (ISRO)",
      slug: "space-technology-isro",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics",
      subjectId: "upsc-science-technology",
      name: "Biotechnology Basics",
      slug: "biotechnology-basics",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-defence-technology",
      subjectId: "upsc-science-technology",
      name: "Defence Technology",
      slug: "defence-technology",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours",
      subjectId: "upsc-international-relations",
      name: "India & Its Neighbours",
      slug: "india-and-its-neighbours",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings",
      subjectId: "upsc-international-relations",
      name: "Major Global Groupings",
      slug: "major-global-groupings",
      orderIndex: 1
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
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-m01",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      title: "DPSP & Fundamental Duties",
      content: `**Directive Principles of State Policy (DPSP)** are listed in **Part IV (Articles 36–51)** and were borrowed from the **Irish Constitution**. Unlike Fundamental Rights, they are **non-justiciable** but **fundamental in the governance** of the country.

## Classification
| Type | Example Article |
| --- | --- |
| Socialistic | Article 39 (equal pay, resources) |
| Gandhian | Article 40 (panchayats), 43 (cottage industry) |
| Liberal-Intellectual | Article 44 (Uniform Civil Code), 48 |

- **Article 39A** — equal justice and free legal aid (added by 42nd Amendment).
- **Article 45** — early childhood care below 6 years.
- **Article 50** — separation of judiciary from executive.

## Fundamental Duties
- Added by the **42nd Amendment (1976)** on the recommendation of the **Swaran Singh Committee**, inspired by the **USSR Constitution**.
- Originally **ten**; the **86th Amendment (2002)** added the **eleventh** — a parent's duty to provide education to a child aged 6–14.
- They are listed in **Part IVA, Article 51A** and are **non-justiciable**.

### Conflict Resolution
- In **Minerva Mills (1980)**, the Supreme Court held that **balance** between Fundamental Rights and DPSP is part of the **basic structure**.
- The **Kesavananda Bharati (1973)** case established the **Basic Structure doctrine** limiting Parliament's amending power.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-m01",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      title: "Judiciary & Judicial Review",
      content: `India has an **integrated and independent judiciary** with the **Supreme Court** at the apex, followed by **High Courts** and subordinate courts.

## Supreme Court
- Established under **Article 124**; the **CJI plus up to 33 other judges** (sanctioned strength 34).
- A judge holds office until **65 years** of age and can be removed only through **impeachment** under Article 124(4) for proved misbehaviour or incapacity.
- **Article 137** allows the court to **review its own judgments**.

## Jurisdiction
| Type | Article |
| --- | --- |
| Original | 131 |
| Writ | 32 |
| Appellate | 132–136 |
| Advisory | 143 |

## Judicial Review
- **Judicial review** is the power to examine the constitutionality of laws and executive orders; it is part of the **basic structure**.
- The **Collegium System** for appointments evolved from the **Second** and **Third Judges Cases**.
- The **99th Amendment** creating the **NJAC** was struck down in 2015.

### Public Interest Litigation
- **PIL** was pioneered by Justices **P.N. Bhagwati** and **V.R. Krishna Iyer**, relaxing the rule of **locus standi**.
- A **High Court** issues writs under **Article 226**, which is **wider** than Article 32 as it covers legal rights too.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-m01",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      title: "Constitutional & Statutory Bodies",
      content: `A **constitutional body** derives its powers directly from the **Constitution**, whereas a **statutory body** is created by an **Act of Parliament**.

## Constitutional Bodies
| Body | Article |
| --- | --- |
| Election Commission | 324 |
| UPSC | 315 |
| Comptroller & Auditor General (CAG) | 148 |
| Finance Commission | 280 |
| Attorney General | 76 |

- The **CAG** is the guardian of the public purse and audits government accounts.
- The **Finance Commission** is constituted every **five years** to recommend tax devolution between Centre and States.

## Statutory Bodies
- The **National Human Rights Commission (NHRC)** was set up under the **Protection of Human Rights Act, 1993**.
- The **Central Information Commission (CIC)** functions under the **RTI Act, 2005**.
- The **Lokpal** was created under the **Lokpal and Lokayuktas Act, 2013**.

### Recently Elevated
- The **National Commission for Backward Classes (NCBC)** became a **constitutional body** under **Article 338B** via the **102nd Amendment (2018)**.

Distinguish carefully: questions frequently test whether a body is constitutional, statutory, executive, or quasi-judicial in nature.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-m01",
      topicId: "upsc-modern-history-moderates-and-extremists",
      title: "Moderates & Extremists",
      content: `The **Indian National Congress** was founded in **1885** by **A.O. Hume**, with **W.C. Bonnerjee** as its first president. Its early phase (1885–1905) was dominated by the **Moderates**.

## Moderates (1885–1905)
- Leaders: **Dadabhai Naoroji** (Drain Theory), **Gopal Krishna Gokhale**, **Pherozeshah Mehta**, **Surendranath Banerjee**.
- Methods: the **"3 Ps"** — *Petitions, Prayers, Protests* — and constitutional agitation.
- Believed in the **British sense of justice**.

## Extremists (Lal-Bal-Pal)
| Leader | Region |
| --- | --- |
| Lala Lajpat Rai | Punjab |
| Bal Gangadhar Tilak | Maharashtra |
| Bipin Chandra Pal | Bengal |

- Tilak's slogan: **"Swaraj is my birthright and I shall have it."**
- Triggered by the **Partition of Bengal (1905)** and the **Swadeshi Movement**.

## Surat Split (1907)
- The Congress split into Moderates and Extremists at the **Surat session (1907)**.
- They reunited at the **Lucknow Session (1916)**, which also saw the **Lucknow Pact** with the Muslim League.

### Significance
- The Extremists shifted goals from **administrative reform** to **complete Swaraj**, deepening mass participation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-m01",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      title: "Gandhian Mass Movements",
      content: `**Mahatma Gandhi** returned to India in **1915** and transformed the freedom struggle into a **mass movement** based on **Satyagraha** (truth-force) and **non-violence**.

## Early Satyagrahas
- **Champaran (1917)** — against the **tinkathia** system imposed on indigo cultivators in Bihar.
- **Kheda (1918)** — for remission of land revenue in Gujarat during crop failure.
- **Ahmedabad Mill Strike (1918)** — Gandhi's first **hunger strike**.

## Major Movements
| Movement | Year | Trigger |
| --- | --- | --- |
| Non-Cooperation | 1920–22 | Jallianwala Bagh, Khilafat |
| Civil Disobedience | 1930 | Dandi Salt March |
| Quit India | 1942 | Failure of Cripps Mission |

- The **Non-Cooperation Movement** was withdrawn after the **Chauri Chaura** incident (1922).
- The **Dandi March (12 March–6 April 1930)** broke the salt law, covering about **385 km**.
- The **Quit India Movement** raised the slogan **"Do or Die."**

### Outcomes
- The **Gandhi-Irwin Pact (1931)** led to Congress participation in the **Second Round Table Conference**.
- These movements made the freedom struggle a truly **pan-Indian** phenomenon.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-m01",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      title: "Socio-Religious Reform Movements",
      content: `The **19th century** saw a wave of **socio-religious reform** aimed at eradicating social evils and reviving rational thought, often called the **Indian Renaissance**.

## Key Reformers and Bodies
| Reformer | Organisation | Year |
| --- | --- | --- |
| Raja Ram Mohan Roy | Brahmo Samaj | 1828 |
| Dayananda Saraswati | Arya Samaj | 1875 |
| Swami Vivekananda | Ramakrishna Mission | 1897 |
| Jyotiba Phule | Satyashodhak Samaj | 1873 |

- **Raja Ram Mohan Roy**, the **"Father of Indian Renaissance,"** campaigned against **Sati**, abolished by **Lord William Bentinck** in **1829**.
- **Dayananda Saraswati** gave the slogan **"Back to the Vedas"** and started the **Shuddhi** movement.

## Other Reforms
- **Ishwar Chandra Vidyasagar** championed **widow remarriage** (Act of 1856).
- **Theosophical Society** was founded by **Madame Blavatsky** and **Colonel Olcott** (1875).
- **Aligarh Movement** by **Sir Syed Ahmed Khan** promoted modern education among Muslims.

### Significance
- These movements attacked **caste, untouchability, child marriage** and **purdah**, laying the social base for nationalism.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-m01",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      title: "Indian Physiography & Rivers",
      content: `India's physiography divides into the **Himalayas**, the **Northern Plains**, the **Peninsular Plateau**, the **Coastal Plains**, the **Desert** and the **Islands**.

## The Himalayas
- Three parallel ranges: **Himadri (Greater)**, **Himachal (Lesser)** and **Shiwaliks (Outer)**.
- The **Himadri** holds the highest peaks; **K2 (Godwin Austen)** is the highest in India.
- Longitudinally divided into Punjab, Kumaon, Nepal and Assam Himalayas.

## River Systems
| System | Type | Example |
| --- | --- | --- |
| Himalayan | Perennial | Ganga, Indus, Brahmaputra |
| Peninsular | Seasonal | Godavari, Krishna, Kaveri |

- The **Indus** and **Brahmaputra** are **antecedent** rivers, older than the Himalayas.
- The **Godavari** is the largest peninsular river, called the **"Dakshin Ganga."**
- The **Narmada** and **Tapi** flow **westward** through rift valleys into the Arabian Sea.

### Key Facts
- The **Peninsular Plateau** is the oldest landmass, made of **Gondwana** rocks.
- The **Western Ghats (Sahyadris)** are continuous and higher than the broken **Eastern Ghats**.
- **Anamudi** in the Western Ghats is the highest peak of peninsular India.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-soils-and-agriculture-m01",
      topicId: "upsc-geography-soils-and-agriculture",
      title: "Soils & Agriculture",
      content: `India has a great diversity of **soils**, classified by the **ICAR** into several major groups that determine cropping patterns.

## Major Soil Types
| Soil | Feature | Crops |
| --- | --- | --- |
| Alluvial | Most fertile, plains | Wheat, rice, sugarcane |
| Black (Regur) | Retains moisture, Deccan trap | Cotton |
| Red | Iron-rich, less fertile | Millets, pulses |
| Laterite | Leached, acidic | Tea, coffee, cashew |

- **Alluvial soil** covers about **40%** of land; *khadar* is new alluvium, *bhangar* is old.
- **Black soil** is also called **"black cotton soil"** or **regur**.

## Cropping Seasons
- **Kharif** — sown June–July, harvested Sept–Oct (rice, cotton, maize).
- **Rabi** — sown Oct–Dec, harvested Apr (wheat, gram, mustard).
- **Zaid** — short summer season (watermelon, cucumber).

### Revolutions
- **Green Revolution** — foodgrains (led by **M.S. Swaminathan**, **Norman Borlaug**).
- **White Revolution** — milk (**Operation Flood**, **Verghese Kurien**).
- **Blue Revolution** — fisheries; **Yellow Revolution** — oilseeds.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-geography-world-geography-landforms-m01",
      topicId: "upsc-geography-world-geography-landforms",
      title: "World Geography: Landforms",
      content: `**Landforms** are natural features of the Earth's surface shaped by **endogenic** (internal) and **exogenic** (external) forces acting on the **lithosphere**.

## Earth's Structure
- The **crust**, **mantle** and **core**; the **lithosphere** is broken into **tectonic plates**.
- **Plate tectonics** (Alfred Wegener's **Continental Drift**) explains the movement of plates.

## Plate Boundaries
| Boundary | Result |
| --- | --- |
| Convergent | Mountains, trenches, volcanoes |
| Divergent | Mid-ocean ridges, rift valleys |
| Transform | Earthquakes (e.g. San Andreas Fault) |

- The **Himalayas** formed by the convergence of the **Indian** and **Eurasian** plates.
- The **Pacific Ring of Fire** hosts about **two-thirds** of the world's active volcanoes.

## Volcanoes
- **Active, dormant** and **extinct** types; **lava, ash** and **pyroclasts** are ejected.
- **Mt. Kilimanjaro** (Africa) and **Mauna Loa** (Hawaii) are notable examples.

### Other Landforms
- **Fold mountains** (Himalayas, Andes), **block mountains** (horst and graben), and **plateaus** like the **Tibetan Plateau**, the highest in the world.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-national-income-and-gdp-m01",
      topicId: "upsc-economy-national-income-and-gdp",
      title: "National Income & GDP",
      content: `**National income** measures the total value of goods and services produced by a country in a year. The key aggregate is **Gross Domestic Product (GDP)**.

## Core Concepts
- **GDP** — value of all final goods and services produced **within** a country's borders.
- **GNP** = GDP + net factor income from abroad.
- **NNP** = GNP minus depreciation; **NNP at factor cost** is the **National Income**.

## Key Formulae
| Aggregate | Relation |
| --- | --- |
| GNP | GDP + NFIA |
| NDP | GDP - Depreciation |
| NNP | GNP - Depreciation |

- **Nominal GDP** uses current prices; **Real GDP** uses **constant (base-year) prices**.
- The **GDP deflator** = (Nominal GDP / Real GDP) x 100.

## Measurement in India
- The base year for GDP is **2011-12**, with figures released by the **NSO (MoSPI)**.
- GDP is estimated at **market prices** since 2015, replacing factor cost as headline.
- **Per capita income** = National Income / Population.

### Methods
- Three approaches: **Production (value-added)**, **Income**, and **Expenditure** methods, all yielding the same total in theory.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-banking-system-and-rbi-m01",
      topicId: "upsc-economy-banking-system-and-rbi",
      title: "Banking System & RBI",
      content: `The **Reserve Bank of India (RBI)**, established in **1935** and nationalised in **1949**, is India's **central bank** and the apex monetary authority.

## Functions of RBI
- **Issuer of currency** (except the one-rupee note and coins, issued by the **Finance Ministry**).
- **Banker to the government** and **lender of last resort** to banks.
- **Custodian of foreign exchange reserves**.

## Quantitative Tools
| Tool | Meaning |
| --- | --- |
| CRR | Cash kept with RBI as a ratio of deposits |
| SLR | Liquid assets banks must hold |
| Repo | Rate RBI lends to banks |
| MSF | Emergency overnight borrowing |

- **CRR** has no floor or ceiling since 2006; **SLR** is capped at 40%.

## Bank Types
- **Scheduled Commercial Banks** are listed in the **Second Schedule** of the RBI Act.
- **Public Sector, Private, Foreign, Regional Rural** and **Cooperative** banks form the system.
- **Payments Banks** (e.g. for small deposits) cannot lend or issue credit cards.

### NPAs and Reform
- An asset is a **Non-Performing Asset (NPA)** if interest or principal is overdue for **90 days**.
- The **Insolvency and Bankruptcy Code (IBC), 2016** speeds up resolution of bad loans.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-m01",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      title: "Union Budget & Fiscal Policy",
      content: `The **Union Budget**, or **Annual Financial Statement** under **Article 112**, is the government's statement of estimated receipts and expenditure for a financial year.

## Budget Structure
- Divided into the **Revenue Budget** and the **Capital Budget**.
- **Revenue receipts** are non-debt creating (taxes, dividends); **capital receipts** create liabilities or reduce assets.

## Key Deficits
| Deficit | Formula |
| --- | --- |
| Fiscal Deficit | Total Expenditure - Total Receipts (excl. borrowings) |
| Revenue Deficit | Revenue Expenditure - Revenue Receipts |
| Primary Deficit | Fiscal Deficit - Interest Payments |

- The **Fiscal Deficit** indicates total borrowing needs of the government.

## Fiscal Policy
- **Fiscal policy** uses **taxation** and **public spending** to influence the economy.
- The **FRBM Act, 2003** mandates fiscal discipline and deficit targets.
- **Direct taxes** (income, corporate) are progressive; **indirect taxes** (GST) are regressive.

### GST
- The **Goods and Services Tax**, launched **1 July 2017**, is a destination-based tax governed by the **GST Council (Article 279A)**.
- The **Consolidated Fund (Article 266)** holds all government revenues; withdrawals need parliamentary approval.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-m01",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      title: "Key Institutions & Indices",
      content: `Global **indices** and the **institutions** that publish them are a recurring exam theme. Linking each index to its **releasing body** prevents common errors.

## Major Indices
| Index | Released By |
| --- | --- |
| Human Development Index | UNDP |
| Global Hunger Index | Concern Worldwide / Welthungerhilfe |
| World Happiness Report | SDSN (UN) |
| Ease of Doing Business | World Bank (discontinued) |
| Global Innovation Index | WIPO |

- The **HDI** combines **life expectancy, education** and **per capita income (GNI)**.
- The **Multidimensional Poverty Index (MPI)** is published jointly by **UNDP** and **OPHI**.

## Key Institutions
- **NITI Aayog** (2015) replaced the **Planning Commission** as a policy think-tank.
- The **IMF** publishes the **World Economic Outlook**; the **World Bank** the **World Development Report**.
- The **WEF** (Davos) releases the **Global Gender Gap Report** and **Global Competitiveness Report**.

### Environment Indices
- The **Environmental Performance Index (EPI)** is released by **Yale and Columbia universities**.
- The **WTO** governs global trade rules; the **WHO** is the UN's health body.

Pair each index with the **correct parent organisation**, as wrong pairings are classic distractors.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-m01",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      title: "Polity & Economy in the News",
      content: `Recurring **polity and economy** themes in the news demand a firm grasp of the **constitutional and institutional basis** behind a headline.

## Polity in Focus
- **Anti-defection** disqualifications are decided by the **Presiding Officer** under the **Tenth Schedule**.
- **Money Bill** classification (Article 110) is certified by the **Speaker**, whose decision is final.
- **Governor's discretion** on bills under **Article 200** (assent, withhold, reserve) is a frequent flashpoint.

## Economy in Focus
| Theme | Key Body |
| --- | --- |
| Inflation targeting | RBI / MPC |
| GST rates | GST Council |
| Fiscal transfers | Finance Commission |
| Capital markets | SEBI |

- **SEBI**, set up in **1992**, regulates securities markets and protects investors.
- **Disinvestment** is managed by the **DIPAM** under the Finance Ministry.

## Institutions in News
- The **Election Commission** conducts polls under **Article 324**.
- The **CAG** audits and reports to Parliament under **Article 148**.

### Approach
- For any news item, identify the **constitutional article, statute** or **regulator** that anchors it; that linkage is what the exam tests.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-m01",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      title: "Indus Valley Civilisation",
      content: `The **Indus Valley Civilisation (IVC)**, or **Harappan Civilisation**, flourished around **2600–1900 BCE** in the **Bronze Age** and is the earliest urban culture of the subcontinent.

## Major Sites
| Site | River | Discovered |
| --- | --- | --- |
| Harappa | Ravi | 1921 (Daya Ram Sahni) |
| Mohenjo-daro | Indus | 1922 (R.D. Banerji) |
| Dholavira | Gujarat | 1967-68 |
| Lothal | Gujarat | Dockyard |

- **Mohenjo-daro** means **"Mound of the Dead"** and housed the **Great Bath**.
- **Lothal** had an artificial **dockyard**, evidence of maritime trade.

## Features
- **Town planning** on a **grid pattern** with a **citadel** and **lower town**.
- Advanced **drainage system** and standardised **burnt bricks**.
- The script remains **undeciphered** and was **pictographic**, written **boustrophedon**.

## Economy and Religion
- Trade with **Mesopotamia** (called **Meluhha**); used standardised **weights and measures**.
- Worship of the **Mother Goddess** and a **Pashupati** (proto-Shiva) seal.

### Decline
- Theories include **Aryan invasion, floods, climate change** and the drying of the **Saraswati**. No clear single cause is established.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire-m01",
      topicId: "upsc-ancient-history-mauryan-empire",
      title: "Mauryan Empire",
      content: `The **Mauryan Empire (322–185 BCE)** was the first **pan-Indian empire**, founded by **Chandragupta Maurya** with the guidance of **Chanakya (Kautilya)**.

## Key Rulers
| Ruler | Note |
| --- | --- |
| Chandragupta | Founder; defeated Seleucus |
| Bindusara | Called "Amitraghata" |
| Ashoka | Kalinga War, spread Buddhism |

- **Chandragupta** later embraced **Jainism** and went to **Shravanabelagola**.
- **Megasthenes**, the Greek envoy, wrote **"Indica"** at Chandragupta's court.

## Ashoka the Great
- The **Kalinga War (261 BCE)** transformed Ashoka, who then propagated **Dhamma**.
- His **edicts** are inscribed in **Brahmi, Kharosthi, Greek** and **Aramaic** scripts.
- The **Lion Capital of Sarnath** is India's **national emblem**.

## Administration
- **Kautilya's Arthashastra** details statecraft, espionage and economy.
- The empire was divided into **provinces** under princes (**Kumaras**).
- A vast **bureaucracy** and **spy network** ensured central control.

### Decline
- Weak successors, financial strain and the assassination of **Brihadratha** by **Pushyamitra Shunga** (185 BCE) ended the dynasty.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-gupta-age-m01",
      topicId: "upsc-ancient-history-gupta-age",
      title: "Gupta Age",
      content: `The **Gupta Age (c. 320–550 CE)** is often called the **"Golden Age of India"** for its achievements in science, art, literature and administration.

## Rulers
| Ruler | Achievement |
| --- | --- |
| Chandragupta I | Founder, married Kumaradevi |
| Samudragupta | "Napoleon of India" (V.A. Smith) |
| Chandragupta II | Vikramaditya; defeated Shakas |

- **Samudragupta's** conquests are recorded in the **Allahabad Pillar (Prayag Prashasti)** by **Harisena**.
- **Fa-Hien**, the Chinese pilgrim, visited during **Chandragupta II's** reign.

## Science and Literature
- **Aryabhata** wrote the **Aryabhatiya**, proposing Earth's rotation and the concept of **zero**.
- **Varahamihira** authored the **Brihat Samhita**; **Kalidasa** wrote **Abhijnanashakuntalam**.
- The **decimal system** and advances in **metallurgy** (Mehrauli **Iron Pillar**) flourished.

## Art and Architecture
- The **Ajanta cave paintings** and **Nalanda University** reached their peak.
- Temple architecture in the **Nagara style** began to develop.

### Decline
- Invasions by the **Hunas** (led by **Toramana** and **Mihirakula**) and weak successors caused collapse by the mid-6th century.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-m01",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      title: "Buddhism & Jainism",
      content: `Around the **6th century BCE**, **Buddhism** and **Jainism** emerged as **heterodox (nastika)** movements protesting against Brahmanical ritualism.

## Buddhism
- Founded by **Gautama Buddha** (Siddhartha), born at **Lumbini** (c. 563 BCE); attained enlightenment at **Bodh Gaya**.
- The **Four Noble Truths** and the **Eightfold Path** form its core; it follows the **Middle Path**.
- First sermon (**Dharmachakra Pravartana**) was at **Sarnath**.

## Jainism
| Tirthankara | Symbol |
| --- | --- |
| Rishabhanatha | First, the bull |
| Parshvanatha | 23rd |
| Mahavira | 24th, the lion |

- **Mahavira** preached the **Three Jewels (Triratna)**: right faith, right knowledge, right conduct.
- The core principle is **Ahimsa** (non-violence); sects are **Digambara** and **Svetambara**.

## Councils
- The **Third Buddhist Council** was held under **Ashoka** at **Pataliputra**.
- The **Fourth Council** under **Kanishka** split Buddhism into **Hinayana** and **Mahayana**.

### Spread
- **Pali** was the language of early Buddhist texts (**Tripitaka**); Jain texts used **Prakrit (Agamas)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-m01",
      topicId: "upsc-medieval-history-delhi-sultanate",
      title: "Delhi Sultanate",
      content: `The **Delhi Sultanate (1206–1526)** was a series of five dynasties of **Turkish and Afghan** origin that ruled north India from Delhi.

## The Five Dynasties
| Dynasty | Founder | Period |
| --- | --- | --- |
| Slave (Mamluk) | Qutb-ud-din Aibak | 1206 |
| Khalji | Jalal-ud-din | 1290 |
| Tughlaq | Ghiyasuddin | 1320 |
| Sayyid | Khizr Khan | 1414 |
| Lodi | Bahlol Lodi | 1451 |

- **Qutb-ud-din Aibak** began the **Qutub Minar**, completed by **Iltutmish**.
- **Razia Sultana** was the only woman to rule the Sultanate.

## Notable Rulers
- **Alauddin Khalji** introduced **market (price) control** reforms and repelled the **Mongols**.
- **Muhammad bin Tughlaq** is famed for the **transfer of capital** to Daulatabad and **token currency**.
- **Firoz Shah Tughlaq** levied the **jizya** and built canals.

## Administration
- The **iqta system** assigned land revenue to officials in lieu of salary.
- Persian was the **court language**; the **Sultan** held supreme authority.

### End
- The Sultanate fell when **Babur** defeated **Ibrahim Lodi** at the **First Battle of Panipat (1526)**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire-m01",
      topicId: "upsc-medieval-history-mughal-empire",
      title: "Mughal Empire",
      content: `The **Mughal Empire (1526–1857)** was founded by **Babur** after the **First Battle of Panipat (1526)** and became one of the great Islamic empires.

## Great Mughals
| Ruler | Key Event |
| --- | --- |
| Babur | Panipat 1526 |
| Humayun | Lost to Sher Shah Suri |
| Akbar | Din-i-Ilahi, Mansabdari |
| Jahangir | Patron of painting |
| Shah Jahan | Built the Taj Mahal |
| Aurangzeb | Greatest extent; re-imposed jizya |

- **Akbar** abolished the **jizya**, started **Din-i-Ilahi (1582)** and the **Mansabdari** system.
- **Sher Shah Suri** introduced the **rupiya** and built the **Grand Trunk Road**.

## Administration
- The **Mansabdari** system graded officials by **zat** and **sawar** ranks.
- The **Zabti / Dahsala** revenue system was developed by **Raja Todar Mal**.

## Art and Architecture
- The **Taj Mahal** (Shah Jahan) and **Fatehpur Sikri** (Akbar) are iconic.
- Mughal painting blended **Persian** and **Indian** styles, peaking under **Jahangir**.

### Decline
- **Aurangzeb's** Deccan wars, religious policy and weak successors after **1707** led to fragmentation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-m01",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      title: "Bhakti & Sufi Movements",
      content: `The **Bhakti** and **Sufi** movements were parallel currents of **devotional reform** in medieval India that stressed **love and devotion** over ritual.

## Bhakti Movement
- Emphasised **devotion (bhakti)** to a personal god and rejected **caste** and ritualism.
- **Nirguna** (formless god) saints included **Kabir** and **Guru Nanak**; **Saguna** saints worshipped a god with form.

| Saint | Region |
| --- | --- |
| Ramananda | North India |
| Kabir | Varanasi |
| Mirabai | Rajasthan |
| Tulsidas | Awadh |
| Chaitanya | Bengal |

- **Guru Nanak** founded **Sikhism**; **Mirabai** was devoted to **Krishna**.

## Sufi Movement
- Sufism is the **mystical** dimension of Islam, organised into **silsilas** (orders).
- The **Chishti** order (**Khwaja Moinuddin Chishti** of Ajmer) and the **Suhrawardi** order were prominent.
- **Khanqahs** were Sufi hospices; **Sama** (devotional music) was central to the Chishtis.

### Significance
- Both movements promoted **communal harmony**, used **vernacular languages**, and shaped a composite culture, including **Nizamuddin Auliya** and **Amir Khusro**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-temple-architecture-m01",
      topicId: "upsc-art-and-culture-temple-architecture",
      title: "Temple Architecture",
      content: `Indian **temple architecture** evolved from the **Gupta period** into three principal styles defined by the shape of the tower (**shikhara**) and plan.

## Three Styles
| Style | Region | Tower |
| --- | --- | --- |
| Nagara | North India | Curvilinear shikhara |
| Dravida | South India | Pyramidal vimana |
| Vesara | Deccan | Hybrid |

- The **Nagara** style has no boundary walls or gateways and a curvilinear **shikhara**.
- The **Dravida** temple is enclosed by walls with a **gopuram** (gateway tower).

## Key Features
- The **garbhagriha** (sanctum) houses the deity; the **mandapa** is the assembly hall.
- The **amalaka** and **kalasha** crown the Nagara shikhara.

## Famous Examples
- **Nagara:** Kandariya Mahadeva (**Khajuraho**), Sun Temple (**Konark**).
- **Dravida:** Brihadeshwara Temple (**Thanjavur**, Cholas), Meenakshi Temple (**Madurai**).
- **Vesara:** temples of the **Chalukyas** and **Hoysalas** (e.g. Belur, Halebid).

### Rock-Cut and Cave
- The **Kailasa Temple at Ellora** is monolithic, carved top-down by the **Rashtrakutas**.
- The **Mahabalipuram (Pallava)** shore temple and **rathas** are UNESCO sites.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-m01",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      title: "Classical Dance Forms",
      content: `India recognises **eight classical dance forms**, each rooted in **Bharata's Natya Shastra**, the foundational treatise on performing arts.

## The Eight Forms
| Dance | State |
| --- | --- |
| Bharatanatyam | Tamil Nadu |
| Kathak | Uttar Pradesh / North India |
| Kathakali | Kerala |
| Kuchipudi | Andhra Pradesh |
| Odissi | Odisha |
| Manipuri | Manipur |
| Mohiniyattam | Kerala |
| Sattriya | Assam |

- **Bharatanatyam** is the oldest, originating in temples (the **devadasi** tradition).
- **Kathak** is the only major classical form with strong **Persian / Mughal** influence.

## Distinctive Features
- **Kathakali** uses elaborate **make-up** and masks, depicting epics.
- **Sattriya** was founded by the Vaishnavite saint **Sankaradeva**.
- **Manipuri** is known for its gentle, devotional movements linked to **Raslila**.

### Tandava and Lasya
- **Tandava** is the vigorous, masculine aspect; **Lasya** is the graceful, feminine aspect of dance.
- **Mohiniyattam** is a solo female dance embodying **Lasya** grace.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-m01",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      title: "Indian Painting Schools",
      content: `Indian **painting** spans ancient **murals** to medieval **miniatures**, evolving through distinct regional schools.

## Ancient and Mural
- The **Ajanta caves** (Maharashtra) hold the finest **Buddhist murals**, painted in the **tempera** technique.
- **Bagh** and **Sittanavasal** are other notable mural sites.

## Miniature Schools
| School | Patron / Region |
| --- | --- |
| Mughal | Akbar to Shah Jahan |
| Rajput / Rajasthani | Mewar, Bundi, Kishangarh |
| Pahari | Kangra, Basohli |
| Deccan | Bijapur, Golconda |

- **Mughal painting** blended **Persian** technique with Indian themes; it peaked under **Jahangir**.
- The **Kishangarh** school is famous for the **"Bani Thani"** portrait.

## Folk Traditions
- **Madhubani (Mithila)** painting from Bihar uses natural dyes and geometric motifs.
- **Warli** painting (Maharashtra) uses simple white figures on a mud background.
- **Pattachitra** is a cloth-based scroll painting from Odisha and Bengal.

### Modern
- The **Bengal School** (led by **Abanindranath Tagore**) revived Indian themes against Western academic art during the nationalist era.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-m01",
      topicId: "upsc-environment-biodiversity-and-conservation",
      title: "Biodiversity & Conservation",
      content: `**Biodiversity** is the variety of life at three levels: **genetic, species** and **ecosystem**. India is one of **17 megadiverse** countries.

## Biodiversity Hotspots
- India has **four hotspots**: the **Himalayas, Western Ghats, Indo-Burma** and **Sundaland (Nicobar Islands)**.
- A hotspot must have high **endemism** and have lost **70%** of its original habitat.

## Conservation Approaches
| Type | Example |
| --- | --- |
| In-situ | National parks, sanctuaries, biosphere reserves |
| Ex-situ | Zoos, botanical gardens, seed banks |

- **National Parks** allow no human activity; **Sanctuaries** permit some regulated activity.
- **Biosphere Reserves** have core, buffer and transition zones.

## Legal and Institutional
- The **Wildlife (Protection) Act, 1972** lists protected species in schedules.
- **Project Tiger (1973)** and **Project Elephant (1992)** are flagship programmes.

## IUCN Red List
- Categories range from **Least Concern** to **Critically Endangered** and **Extinct**.

### Conventions
- The **Convention on Biological Diversity (CBD)** was adopted at the **Rio Summit (1992)**; **CITES** regulates trade in endangered species.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-m01",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      title: "Climate Change & Global Agreements",
      content: `**Climate change** is driven by rising **greenhouse gases (GHGs)** that trap heat and warm the planet, a process called the **greenhouse effect**.

## Key Greenhouse Gases
| Gas | Main Source |
| --- | --- |
| Carbon dioxide | Fossil fuels |
| Methane | Livestock, paddy, landfills |
| Nitrous oxide | Fertilisers |
| F-gases | Refrigeration |

- **Methane** has a far higher **warming potential** than CO2 over a short horizon.

## Global Architecture
- The **IPCC** (set up 1988 by **WMO** and **UNEP**) assesses the science.
- The **UNFCCC (1992)** is the parent treaty; parties meet annually at the **COP**.

## Major Agreements
- The **Kyoto Protocol (1997)** set binding targets for developed nations.
- The **Paris Agreement (2015)** aims to limit warming to **well below 2 degrees C**, pursuing **1.5 degrees C**, via **NDCs**.
- The **Montreal Protocol (1987)** phased out **ozone-depleting** substances; its **Kigali Amendment** targets HFCs.

### India's Stand
- India follows **Common But Differentiated Responsibilities (CBDR)** and targets **net zero by 2070**, with missions under the **NAPCC**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-m01",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      title: "Ecosystems & Food Chains",
      content: `An **ecosystem** is a community of living organisms interacting with their **non-living (abiotic)** environment, linked by flows of **energy** and **nutrients**.

## Components
- **Abiotic:** sunlight, water, soil, temperature.
- **Biotic:** producers, consumers and decomposers.

## Trophic Levels
| Level | Role |
| --- | --- |
| Producers | Plants (autotrophs) |
| Primary consumers | Herbivores |
| Secondary consumers | Carnivores |
| Decomposers | Bacteria, fungi |

- A **food chain** is linear; a **food web** is an interconnected network of chains.

## Energy Flow
- Energy flow is **unidirectional**; only about **10%** transfers to the next level (**Lindeman's 10% law**).
- **Ecological pyramids** of number, biomass and energy depict this; the energy pyramid is always **upright**.

## Biogeochemical Cycles
- The **carbon, nitrogen** and **water cycles** recycle nutrients through the biosphere.

### Productivity
- **Gross Primary Productivity (GPP)** is total energy fixed; **Net Primary Productivity (NPP)** is GPP minus respiration, available to consumers.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-space-technology-isro-m01",
      topicId: "upsc-science-technology-space-technology-isro",
      title: "Space Technology (ISRO)",
      content: `The **Indian Space Research Organisation (ISRO)**, founded in **1969** under **Vikram Sarabhai**, is India's national space agency, headquartered at **Bengaluru**.

## Launch Vehicles
| Vehicle | Use |
| --- | --- |
| PSLV | Polar / Sun-synchronous orbits |
| GSLV | Geostationary satellites |
| LVM3 (GSLV Mk III) | Heavy payloads, crewed missions |

- The **PSLV** is the reliable **"workhorse"** of ISRO.
- The **GSLV** uses an indigenous **cryogenic** upper stage.

## Landmark Missions
- **Aryabhata (1975)** was India's first satellite.
- **Chandrayaan-1 (2008)** discovered **water molecules** on the Moon.
- **Mangalyaan (2013)** made India the first nation to reach **Mars** orbit on its first attempt.
- **Chandrayaan-3 (2023)** soft-landed near the lunar **south pole**.

## Applications
- **Navigation:** the **NavIC (IRNSS)** regional system.
- **Communication and remote sensing** satellites (INSAT, IRS series).

### Future
- **Gaganyaan** aims for India's first **crewed** spaceflight, and **Aditya-L1** studies the **Sun** from the L1 point.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics-m01",
      topicId: "upsc-science-technology-biotechnology-basics",
      title: "Biotechnology Basics",
      content: `**Biotechnology** is the use of living systems and organisms to develop products, spanning **agriculture, medicine** and **industry**.

## Core Concepts
- **DNA** carries genetic information; **genes** code for proteins.
- **Genetic engineering** inserts, deletes or modifies genes using **recombinant DNA** technology.

## Key Tools
| Tool | Function |
| --- | --- |
| Restriction enzymes | Cut DNA at specific sites |
| PCR | Amplify DNA copies |
| CRISPR-Cas9 | Precise gene editing |
| Vectors (plasmids) | Carry genes into cells |

- **CRISPR-Cas9** is a revolutionary **gene-editing** tool.

## Applications
- **GM crops:** **Bt cotton** (India's only approved GM crop) resists bollworm pests.
- **Golden Rice** is engineered to be rich in **Vitamin A**.
- **Vaccines, insulin** and **monoclonal antibodies** are produced via biotech.

## Regulation in India
- The **Genetic Engineering Appraisal Committee (GEAC)** under the **MoEFCC** approves GM organisms.

### Ethics
- Concerns include **biosafety, biopiracy** and gene-editing ethics; **stem cells** and **gene therapy** are emerging frontiers.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-defence-technology-m01",
      topicId: "upsc-science-technology-defence-technology",
      title: "Defence Technology",
      content: `India's **defence technology** is driven by the **Defence Research and Development Organisation (DRDO)**, established in **1958**, to make the armed forces self-reliant.

## Missile Programme
- The **Integrated Guided Missile Development Programme (IGMDP)** was led by **Dr. A.P.J. Abdul Kalam**.

| Missile | Type |
| --- | --- |
| Agni | Surface-to-surface ballistic |
| Prithvi | Short-range ballistic |
| Akash | Surface-to-air |
| Nag | Anti-tank |
| BrahMos | Supersonic cruise (India-Russia) |

- **BrahMos** is a joint venture and one of the fastest **cruise missiles**.

## Other Systems
- **Tejas** is India's indigenous **Light Combat Aircraft (LCA)**.
- The **Arjun** main battle tank and **INS Vikrant**, India's first indigenous aircraft carrier, are key platforms.

## Nuclear and Strategic
- The **nuclear triad** delivers weapons by land, air and sea; **INS Arihant** is India's nuclear submarine.
- India follows a **No First Use (NFU)** nuclear doctrine.

### Self-Reliance
- **Atmanirbhar Bharat** in defence promotes domestic production and **defence exports** through positive indigenisation lists.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-m01",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      title: "India & Its Neighbours",
      content: `India's foreign policy toward its neighbours follows the **"Neighbourhood First"** policy, managing relations with seven land and maritime neighbours.

## Land Borders
| Neighbour | Border Line / Issue |
| --- | --- |
| China | Line of Actual Control (LAC) |
| Pakistan | Line of Control (LoC), Radcliffe Line |
| Afghanistan | Durand Line (with Pakistan) |
| Bangladesh | Land Boundary Agreement 2015 |
| Nepal | Open border, Kalapani dispute |

- India shares its **longest border** with **Bangladesh**.
- The **McMahon Line** demarcates the India-China boundary in the eastern sector.

## Key Relations
- **Nepal** and **Bhutan** are tied to India by **friendship treaties** (1950 with Nepal; 2007 revised with Bhutan).
- **Sri Lanka** and the **Maldives** are key **maritime** neighbours in the Indian Ocean.

## Connectivity
- Projects like the **Chabahar Port** (Iran) bypass Pakistan to reach **Afghanistan** and Central Asia.

### Doctrines
- **Gujral Doctrine** emphasised non-reciprocal accommodation of smaller neighbours; **SAGAR** ("Security and Growth for All in the Region") guides maritime policy.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings-m01",
      topicId: "upsc-international-relations-major-global-groupings",
      title: "Major Global Groupings",
      content: `India is a member of numerous **multilateral groupings** that shape global governance, trade and security.

## Key Groupings
| Grouping | Note |
| --- | --- |
| United Nations | India a founding member (1945) |
| G20 | India hosted the 2023 summit |
| BRICS | Brazil, Russia, India, China, S. Africa |
| SCO | Shanghai Cooperation Organisation |
| QUAD | India, US, Japan, Australia |

- India is **not** a permanent member of the **UN Security Council** but seeks reform.
- **BRICS** runs the **New Development Bank (NDB)**, headquartered in **Shanghai**.

## Regional Bodies
- **SAARC** (1985, HQ Kathmandu) and **BIMSTEC** link South Asia and the Bay of Bengal.
- **ASEAN** is central to India's **"Act East"** policy.

## Economic and Strategic
- The **QUAD** is a strategic dialogue in the **Indo-Pacific**.
- **I2U2** groups India, Israel, the UAE and the USA.

### Nuclear Regimes
- India is a member of the **MTCR, Wassenaar Arrangement** and **Australia Group**, but **not** the **Nuclear Suppliers Group (NSG)** or the **NPT**.`,
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
      optionB: "Part III (Articles 12–35)",
      optionC: "Part IV (Articles 36–51)",
      optionD: "Part IVA (Article 51A)",
      correctOption: "B",
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
      optionA: "Article 32",
      optionB: "Article 19",
      optionC: "Article 14",
      optionD: "Article 21",
      correctOption: "A",
      explanation: "Article 32 guarantees the right to constitutional remedies, making the other rights enforceable.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-fundamental-rights-q04",
      topicId: "upsc-polity-fundamental-rights",
      text: "How many freedoms are guaranteed to citizens under Article 19?",
      optionA: "Six",
      optionB: "Five",
      optionC: "Four",
      optionD: "Seven",
      correctOption: "A",
      explanation: "After the 44th Amendment removed the right to property, Article 19 now lists six freedoms.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-fundamental-rights-q05",
      topicId: "upsc-polity-fundamental-rights",
      text: "Consider the following statements:\n1. Articles 20 and 21 cannot be suspended even during a national emergency.\n2. The writ of Habeas Corpus can be issued against private individuals.\nWhich is/are correct?",
      optionA: "2 only",
      optionB: "Both 1 and 2",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The 44th Amendment protects Articles 20 and 21; Habeas Corpus lies against both the State and private persons.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-fundamental-rights-q06",
      topicId: "upsc-polity-fundamental-rights",
      text: "The Right to Education under Article 21A was inserted by which Constitutional Amendment?",
      optionA: "44th Amendment",
      optionB: "86th Amendment",
      optionC: "42nd Amendment",
      optionD: "73rd Amendment",
      correctOption: "B",
      explanation: "The 86th Amendment (2002) added Article 21A guaranteeing free education to children aged 6 to 14.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-fundamental-rights-q07",
      topicId: "upsc-polity-fundamental-rights",
      text: "Which writ is issued to quash an order already passed by a lower court or tribunal?",
      optionA: "Certiorari",
      optionB: "Quo-Warranto",
      optionC: "Mandamus",
      optionD: "Prohibition",
      correctOption: "A",
      explanation: "Certiorari quashes a decision already made; Prohibition stops proceedings still in progress.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-fundamental-rights-q08",
      topicId: "upsc-polity-fundamental-rights",
      text: "From which country's constitution did India borrow the concept of Fundamental Rights?",
      optionA: "United Kingdom",
      optionB: "United States",
      optionC: "Ireland",
      optionD: "Canada",
      correctOption: "B",
      explanation: "Fundamental Rights were inspired by the US Bill of Rights; the Directive Principles came from Ireland.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q01",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "A Money Bill can be introduced only in which House of Parliament?",
      optionA: "A joint sitting",
      optionB: "Rajya Sabha",
      optionC: "Either House",
      optionD: "Lok Sabha",
      correctOption: "D",
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
      optionA: "The Vice-President",
      optionB: "The Speaker of the Lok Sabha",
      optionC: "The President",
      optionD: "The senior-most member",
      correctOption: "B",
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
      optionC: "One-tenth",
      optionD: "One-fourth",
      correctOption: "C",
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
      optionB: "Article 249",
      optionC: "Article 169",
      optionD: "Article 312",
      correctOption: "C",
      explanation: "Article 169 lets Parliament create or abolish a Vidhan Parishad on a special-majority resolution of the state assembly.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-parliament-state-legislatures-q08",
      topicId: "upsc-polity-parliament-state-legislatures",
      text: "Who is the ex-officio Chairman of the Rajya Sabha?",
      optionA: "The President",
      optionB: "The Prime Minister",
      optionC: "The Speaker",
      optionD: "The Vice-President",
      correctOption: "D",
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
      optionB: "Neither 1 nor 2",
      optionC: "2 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
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
      optionB: "S.N. Sen",
      optionC: "V.D. Savarkar",
      optionD: "Benjamin Disraeli",
      correctOption: "C",
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
      optionA: "West Bengal",
      optionB: "Tamil Nadu",
      optionC: "Kerala",
      optionD: "Gujarat",
      correctOption: "C",
      explanation: "The monsoon onset usually occurs over Kerala around 1 June.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-monsoon-and-climate-q02",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Consider the following statements:\n1. El Niño conditions tend to weaken the Indian monsoon.\n2. La Niña conditions tend to strengthen it.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "El Niño typically suppresses monsoon rainfall while La Niña enhances it.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-monsoon-and-climate-q03",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "Which is recorded as one of the wettest places on Earth?",
      optionA: "Mawsynram",
      optionB: "Pune",
      optionC: "Jaisalmer",
      optionD: "Leh",
      correctOption: "A",
      explanation: "Mawsynram in Meghalaya receives the highest average annual rainfall in the world.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-monsoon-and-climate-q04",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "'Mango showers' are pre-monsoon rains associated mainly with which region?",
      optionA: "Punjab and Haryana",
      optionB: "Assam",
      optionC: "Kerala and Karnataka",
      optionD: "Rajasthan",
      correctOption: "C",
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
      optionB: "Polar and Tropical branches",
      optionC: "Himalayan and Peninsular branches",
      optionD: "Arabian Sea and Bay of Bengal branches",
      correctOption: "D",
      explanation: "The monsoon divides into the Arabian Sea branch and the Bay of Bengal branch.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-monsoon-and-climate-q07",
      topicId: "upsc-geography-monsoon-and-climate",
      text: "The seasonal reversal of winds that defines the monsoon is linked to the migration of the:",
      optionA: "Jet stream only",
      optionB: "Inter-Tropical Convergence Zone (ITCZ)",
      optionC: "Tropic of Cancer",
      optionD: "Equatorial low alone",
      correctOption: "B",
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
      optionB: "The Monetary Policy Committee",
      optionC: "The NITI Aayog",
      optionD: "The Cabinet Committee on Economic Affairs",
      correctOption: "B",
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
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Core inflation strips out volatile food and fuel, while the WPI covers only goods, not services.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q04",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "The repo rate is the rate at which:",
      optionA: "Banks lend to the public",
      optionB: "RBI lends to commercial banks",
      optionC: "RBI borrows from banks",
      optionD: "Banks lend to one another",
      correctOption: "B",
      explanation: "Repo is the rate at which the RBI lends short-term funds to commercial banks against securities.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q05",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "A situation of high inflation combined with stagnant growth and high unemployment is called:",
      optionA: "Deflation",
      optionB: "Disinflation",
      optionC: "Stagflation",
      optionD: "Reflation",
      correctOption: "C",
      explanation: "Stagflation pairs rising prices with economic stagnation and high joblessness.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-inflation-and-monetary-policy-q06",
      topicId: "upsc-economy-inflation-and-monetary-policy",
      text: "To control high inflation, the RBI would typically:",
      optionA: "Reduce the repo rate",
      optionB: "Conduct OMO purchases",
      optionC: "Lower the CRR",
      optionD: "Raise the repo rate",
      correctOption: "D",
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
      optionA: "Demand-pull inflation",
      optionB: "Cost-push inflation",
      optionC: "Structural inflation",
      optionD: "Imported inflation",
      correctOption: "A",
      explanation: "Demand-pull inflation arises when aggregate demand outstrips the available supply of goods.",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-government-schemes-q01",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Ayushman Bharat (PM-JAY) provides annual health cover of what amount per family?",
      optionA: "₹2 lakh",
      optionB: "₹3 lakh",
      optionC: "₹5 lakh",
      optionD: "₹10 lakh",
      correctOption: "C",
      explanation: "PM-JAY gives a health cover of ₹5 lakh per family per year for secondary and tertiary care.",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-government-schemes-q02",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The 'JAM' trinity used for Direct Benefit Transfer stands for:",
      optionA: "Jan Dhan, Awas, MGNREGA",
      optionB: "Jobs, Agriculture, Manufacturing",
      optionC: "Justice, Aadhaar, Money",
      optionD: "Jan Dhan, Aadhaar, Mobile",
      correctOption: "D",
      explanation: "JAM links Jan Dhan accounts, Aadhaar identity and Mobile numbers to deliver subsidies directly.",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-government-schemes-q03",
      topicId: "upsc-current-affairs-government-schemes",
      text: "PM-KISAN provides income support of how much per year to eligible farmer families?",
      optionA: "₹6,000",
      optionB: "₹12,000",
      optionC: "₹8,000",
      optionD: "₹4,000",
      correctOption: "A",
      explanation: "PM-KISAN transfers ₹6,000 a year in three equal instalments of ₹2,000.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-government-schemes-q04",
      topicId: "upsc-current-affairs-government-schemes",
      text: "The Ujjwala Yojana is associated with the distribution of:",
      optionA: "Solar panels",
      optionB: "Bank accounts",
      optionC: "Free LPG connections",
      optionD: "Free housing",
      correctOption: "C",
      explanation: "PM Ujjwala Yojana provides free LPG connections to women from below-poverty-line households.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-government-schemes-q05",
      topicId: "upsc-current-affairs-government-schemes",
      text: "MGNREGA guarantees how many days of wage employment per rural household per year?",
      optionA: "50 days",
      optionB: "100 days",
      optionC: "150 days",
      optionD: "200 days",
      correctOption: "B",
      explanation: "The Act guarantees 100 days of unskilled manual wage employment to each rural household.",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-government-schemes-q06",
      topicId: "upsc-current-affairs-government-schemes",
      text: "Consider the following statements:\n1. PM Jan Dhan Yojana provides RuPay debit cards.\n2. The Saubhagya scheme aims at universal household electrification.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
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
      optionB: "Free education",
      optionC: "An open-defecation-free India",
      optionD: "Affordable housing",
      correctOption: "C",
      explanation: "The mission focuses on sanitation and making India open-defecation-free through toilet construction.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q01",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "In which Part of the Constitution are the Directive Principles of State Policy contained?",
      optionA: "Part IV (Articles 36-51)",
      optionB: "Part III (Articles 12-35)",
      optionC: "Part IVA (Article 51A)",
      optionD: "Part II (Articles 5-11)",
      correctOption: "A",
      explanation: "DPSP are contained in Part IV, Articles 36-51, and are borrowed from the Irish Constitution.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q02",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Fundamental Duties were added to the Constitution by which amendment?",
      optionA: "42nd Amendment, 1976",
      optionB: "86th Amendment, 2002",
      optionC: "44th Amendment, 1978",
      optionD: "73rd Amendment, 1992",
      correctOption: "A",
      explanation: "The 42nd Amendment (1976) added Fundamental Duties on the recommendation of the Swaran Singh Committee.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q03",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Consider the following statements about DPSP:\n1. They are justiciable and enforceable in courts.\n2. They were borrowed from the Irish Constitution.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "1 only",
      optionC: "Both 1 and 2",
      optionD: "2 only",
      correctOption: "D",
      explanation: "DPSP are non-justiciable but fundamental in governance; they were borrowed from the Irish Constitution.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q04",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Which Article of the Constitution provides for a Uniform Civil Code?",
      optionA: "Article 40",
      optionB: "Article 44",
      optionC: "Article 39A",
      optionD: "Article 50",
      correctOption: "B",
      explanation: "Article 44 directs the State to secure a Uniform Civil Code; it is a liberal-intellectual directive.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q05",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "The Eleventh Fundamental Duty, added by the 86th Amendment (2002), relates to:",
      optionA: "A parent's duty to provide education to a child aged 6-14",
      optionB: "Protecting the environment",
      optionC: "Safeguarding public property",
      optionD: "Promoting scientific temper",
      correctOption: "A",
      explanation: "The 86th Amendment added the duty of a parent to provide education opportunities to a child aged 6-14.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q06",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Consider the following statements:\n1. Article 50 calls for separation of the judiciary from the executive.\n2. Fundamental Duties are enshrined in Part IVA under Article 51A.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Article 50 mandates judiciary-executive separation; Fundamental Duties sit in Part IVA, Article 51A.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q07",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Which case held that balance between Fundamental Rights and DPSP is part of the basic structure?",
      optionA: "Maneka Gandhi case (1978)",
      optionB: "Minerva Mills case (1980)",
      optionC: "Golaknath case (1967)",
      optionD: "Gopalan case (1950)",
      correctOption: "B",
      explanation: "In Minerva Mills (1980), the Supreme Court held the balance between FRs and DPSP is part of the basic structure.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-dpsp-and-fundamental-duties-q08",
      topicId: "upsc-polity-dpsp-and-fundamental-duties",
      text: "Article 39A, providing for free legal aid and equal justice, was added by which amendment?",
      optionA: "42nd Amendment",
      optionB: "44th Amendment",
      optionC: "86th Amendment",
      optionD: "1st Amendment",
      correctOption: "A",
      explanation: "Article 39A on equal justice and free legal aid was inserted by the 42nd Amendment of 1976.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q01",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Under which Article is the Supreme Court of India established?",
      optionA: "Article 32",
      optionB: "Article 124",
      optionC: "Article 137",
      optionD: "Article 143",
      correctOption: "B",
      explanation: "Article 124 establishes the Supreme Court of India and provides for its composition.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q02",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "What is the present sanctioned strength of judges in the Supreme Court (including the CJI)?",
      optionA: "31",
      optionB: "26",
      optionC: "30",
      optionD: "34",
      correctOption: "D",
      explanation: "The sanctioned strength is 34: the Chief Justice of India plus up to 33 other judges.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q03",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Consider the following statements:\n1. A Supreme Court judge holds office until 65 years of age.\n2. Article 137 empowers the court to review its own judgments.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "SC judges retire at 65; Article 137 grants the power to review the court's own judgments.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q04",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The advisory jurisdiction of the Supreme Court is provided under which Article?",
      optionA: "Article 131",
      optionB: "Article 132",
      optionC: "Article 136",
      optionD: "Article 143",
      correctOption: "D",
      explanation: "Article 143 allows the President to seek the advisory opinion of the Supreme Court.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q05",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The 99th Amendment that created the NJAC was struck down by the Supreme Court in which year?",
      optionA: "2010",
      optionB: "2013",
      optionC: "2018",
      optionD: "2015",
      correctOption: "D",
      explanation: "The Supreme Court struck down the NJAC (99th Amendment) in 2015, restoring the collegium system.",
      orderIndex: 4
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q06",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Consider the following statements about writ jurisdiction:\n1. A High Court issues writs under Article 226.\n2. Article 226 is wider than Article 32 as it covers legal rights too.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "High Courts issue writs under Article 226, which is wider than Article 32 since it covers legal rights too.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q07",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "Public Interest Litigation (PIL) in India was pioneered chiefly by which judges?",
      optionA: "H.J. Kania and M. Patanjali Sastri",
      optionB: "M. Hidayatullah and S.M. Sikri",
      optionC: "A.N. Ray and Y.V. Chandrachud",
      optionD: "P.N. Bhagwati and V.R. Krishna Iyer",
      correctOption: "D",
      explanation: "Justices P.N. Bhagwati and V.R. Krishna Iyer pioneered PIL by relaxing the rule of locus standi.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-judiciary-and-judicial-review-q08",
      topicId: "upsc-polity-judiciary-and-judicial-review",
      text: "The collegium system for the appointment of judges evolved from which cases?",
      optionA: "The First and Second Judges Cases",
      optionB: "The Second and Third Judges Cases",
      optionC: "The Kesavananda and Minerva cases",
      optionD: "The Golaknath and Maneka Gandhi cases",
      correctOption: "B",
      explanation: "The collegium system evolved primarily from the Second (1993) and Third (1998) Judges Cases.",
      orderIndex: 7
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q01",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Which one of the following is a constitutional body?",
      optionA: "NITI Aayog",
      optionB: "National Human Rights Commission",
      optionC: "Election Commission of India",
      optionD: "Central Information Commission",
      correctOption: "C",
      explanation: "The Election Commission is a constitutional body under Article 324; the others are non-constitutional or statutory.",
      orderIndex: 0
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q02",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Comptroller and Auditor General of India is provided for under which Article?",
      optionA: "Article 280",
      optionB: "Article 148",
      optionC: "Article 315",
      optionD: "Article 324",
      correctOption: "B",
      explanation: "Article 148 provides for the CAG, the guardian of the public purse who audits government accounts.",
      orderIndex: 1
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q03",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Consider the following statements:\n1. The Finance Commission is constituted under Article 280.\n2. It is set up every five years to recommend tax devolution.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Finance Commission, under Article 280, is constituted every five years for Centre-State tax devolution.",
      orderIndex: 2
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q04",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The National Human Rights Commission (NHRC) was established under which law?",
      optionA: "Protection of Human Rights Act, 1993",
      optionB: "Lokpal and Lokayuktas Act, 2013",
      optionC: "RTI Act, 2005",
      optionD: "Right to Education Act, 2009",
      correctOption: "A",
      explanation: "The NHRC is a statutory body set up under the Protection of Human Rights Act, 1993.",
      orderIndex: 3
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q05",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The National Commission for Backward Classes became a constitutional body under which Article?",
      optionA: "Article 280",
      optionB: "Article 338",
      optionC: "Article 338B",
      optionD: "Article 324",
      correctOption: "C",
      explanation: "The NCBC gained constitutional status under Article 338B via the 102nd Amendment (2018).",
      orderIndex: 4
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q06",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "Consider the following statements:\n1. The UPSC is a constitutional body under Article 315.\n2. The Lokpal is a statutory body created in 2013.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Neither 1 nor 2",
      optionC: "2 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The UPSC is constitutional under Article 315; the Lokpal is statutory under the 2013 Act.",
      orderIndex: 5
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q07",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Central Information Commission functions under which Act?",
      optionA: "Protection of Human Rights Act, 1993",
      optionB: "Right to Information Act, 2005",
      optionC: "Companies Act, 2013",
      optionD: "Lokpal and Lokayuktas Act, 2013",
      correctOption: "B",
      explanation: "The CIC is a statutory body that functions under the Right to Information Act, 2005.",
      orderIndex: 6
    },
    {
      id: "upsc-polity-constitutional-and-statutory-bodies-q08",
      topicId: "upsc-polity-constitutional-and-statutory-bodies",
      text: "The Attorney General of India is provided for under which Article?",
      optionA: "Article 315",
      optionB: "Article 148",
      optionC: "Article 280",
      optionD: "Article 76",
      correctOption: "D",
      explanation: "Article 76 provides for the Attorney General, the highest law officer of the Union.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q01",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Who was the first president of the Indian National Congress?",
      optionA: "A.O. Hume",
      optionB: "Dadabhai Naoroji",
      optionC: "W.C. Bonnerjee",
      optionD: "Surendranath Banerjee",
      correctOption: "C",
      explanation: "W.C. Bonnerjee presided over the first Congress session in 1885; A.O. Hume founded the party.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q02",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The 'Drain Theory' explaining the economic exploitation of India was propounded by:",
      optionA: "Gopal Krishna Gokhale",
      optionB: "Dadabhai Naoroji",
      optionC: "Bal Gangadhar Tilak",
      optionD: "Bipin Chandra Pal",
      correctOption: "B",
      explanation: "Dadabhai Naoroji propounded the Drain Theory in his work Poverty and Un-British Rule in India.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q03",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Consider the following statements:\n1. The Congress split into Moderates and Extremists at the Surat session of 1907.\n2. They reunited at the Lucknow session of 1916.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Surat Split occurred in 1907 and the two factions reunited at Lucknow in 1916.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q04",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Which trio is collectively known as 'Lal-Bal-Pal'?",
      optionA: "Lajpat Rai, Tilak, Bipin Chandra Pal",
      optionB: "Lajpat Rai, Bonnerjee, Pherozeshah Mehta",
      optionC: "Lala Hardayal, Tilak, B.G. Pal",
      optionD: "Lajpat Rai, Gokhale, Naoroji",
      correctOption: "A",
      explanation: "Lal-Bal-Pal were the extremist leaders Lala Lajpat Rai, Bal Gangadhar Tilak and Bipin Chandra Pal.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q05",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The slogan 'Swaraj is my birthright and I shall have it' was given by:",
      optionA: "Lala Lajpat Rai",
      optionB: "Bal Gangadhar Tilak",
      optionC: "Bipin Chandra Pal",
      optionD: "Aurobindo Ghosh",
      correctOption: "B",
      explanation: "Bal Gangadhar Tilak gave the famous slogan asserting Swaraj as a birthright.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q06",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "Consider the following statements:\n1. The Moderates relied on petitions, prayers and protests.\n2. The Swadeshi Movement was triggered by the Partition of Bengal in 1905.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Moderates used the 3 Ps; the 1905 Partition of Bengal triggered the Swadeshi Movement.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q07",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The Indian National Congress was founded in which year?",
      optionA: "1857",
      optionB: "1905",
      optionC: "1916",
      optionD: "1885",
      correctOption: "D",
      explanation: "The Indian National Congress was founded in 1885 by A.O. Hume.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-moderates-and-extremists-q08",
      topicId: "upsc-modern-history-moderates-and-extremists",
      text: "The Lucknow session of 1916 is notable because:",
      optionA: "It marked the founding of the Congress",
      optionB: "It launched the Quit India Movement",
      optionC: "It saw the Lucknow Pact with the Muslim League",
      optionD: "It abolished the Drain Theory",
      correctOption: "C",
      explanation: "The 1916 Lucknow session reunited Congress factions and produced the Lucknow Pact with the Muslim League.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q01",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Gandhi's first Satyagraha in India, in 1917, was launched at:",
      optionA: "Kheda",
      optionB: "Champaran",
      optionC: "Ahmedabad",
      optionD: "Dandi",
      correctOption: "B",
      explanation: "The Champaran Satyagraha of 1917 opposed the tinkathia system imposed on indigo cultivators in Bihar.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q02",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The Non-Cooperation Movement was withdrawn following which incident?",
      optionA: "Jallianwala Bagh massacre",
      optionB: "Partition of Bengal",
      optionC: "Failure of the Cripps Mission",
      optionD: "Chauri Chaura incident",
      correctOption: "D",
      explanation: "Gandhi withdrew the Non-Cooperation Movement in 1922 after the violent Chauri Chaura incident.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q03",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Consider the following statements:\n1. The Dandi March began on 12 March 1930.\n2. The Civil Disobedience Movement broke the salt law.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Dandi March started on 12 March 1930 and launched Civil Disobedience by breaking the salt law.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q04",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The slogan 'Do or Die' is associated with which movement?",
      optionA: "Non-Cooperation Movement",
      optionB: "Quit India Movement",
      optionC: "Swadeshi Movement",
      optionD: "Civil Disobedience Movement",
      correctOption: "B",
      explanation: "Gandhi gave the 'Do or Die' call during the Quit India Movement of 1942.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q05",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "The Kheda Satyagraha of 1918 was launched for:",
      optionA: "Repeal of the salt tax",
      optionB: "Abolition of the tinkathia system",
      optionC: "Higher wages for mill workers",
      optionD: "Remission of land revenue during crop failure",
      correctOption: "D",
      explanation: "The Kheda Satyagraha in Gujarat demanded remission of land revenue after crop failure.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q06",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Consider the following statements:\n1. The Quit India Movement was triggered by the failure of the Cripps Mission.\n2. The Gandhi-Irwin Pact led to Congress joining the Second Round Table Conference.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Quit India followed the Cripps Mission failure; the 1931 Gandhi-Irwin Pact preceded the Second Round Table Conference.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q07",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "In which year did Mahatma Gandhi return to India from South Africa?",
      optionA: "1909",
      optionB: "1915",
      optionC: "1920",
      optionD: "1919",
      correctOption: "B",
      explanation: "Gandhi returned to India in 1915 and transformed the freedom struggle into a mass movement.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-gandhian-mass-movements-q08",
      topicId: "upsc-modern-history-gandhian-mass-movements",
      text: "Gandhi's first hunger strike in India was undertaken during which event?",
      optionA: "Champaran Satyagraha",
      optionB: "Kheda Satyagraha",
      optionC: "Ahmedabad Mill Strike",
      optionD: "Dandi March",
      correctOption: "C",
      explanation: "Gandhi undertook his first hunger strike during the 1918 Ahmedabad Mill Strike.",
      orderIndex: 7
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q01",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Brahmo Samaj was founded in 1828 by:",
      optionA: "Raja Ram Mohan Roy",
      optionB: "Dayananda Saraswati",
      optionC: "Swami Vivekananda",
      optionD: "Ishwar Chandra Vidyasagar",
      correctOption: "A",
      explanation: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 and is called the Father of Indian Renaissance.",
      orderIndex: 0
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q02",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The slogan 'Back to the Vedas' was given by:",
      optionA: "Raja Ram Mohan Roy",
      optionB: "Dayananda Saraswati",
      optionC: "Jyotiba Phule",
      optionD: "Sir Syed Ahmed Khan",
      correctOption: "B",
      explanation: "Dayananda Saraswati, founder of the Arya Samaj (1875), gave the slogan 'Back to the Vedas'.",
      orderIndex: 1
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q03",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Consider the following statements:\n1. Sati was abolished by Lord William Bentinck in 1829.\n2. Raja Ram Mohan Roy campaigned against Sati.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Lord William Bentinck abolished Sati in 1829, supported by Raja Ram Mohan Roy's campaign.",
      orderIndex: 2
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q04",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Satyashodhak Samaj (1873) was founded by:",
      optionA: "Swami Vivekananda",
      optionB: "Colonel Olcott",
      optionC: "Dayananda Saraswati",
      optionD: "Jyotiba Phule",
      correctOption: "D",
      explanation: "Jyotiba Phule founded the Satyashodhak Samaj in 1873 to fight caste oppression.",
      orderIndex: 3
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q05",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Who championed the cause of widow remarriage, leading to the Act of 1856?",
      optionA: "Sir Syed Ahmed Khan",
      optionB: "Madame Blavatsky",
      optionC: "Swami Vivekananda",
      optionD: "Ishwar Chandra Vidyasagar",
      correctOption: "D",
      explanation: "Ishwar Chandra Vidyasagar championed widow remarriage, which led to the Widow Remarriage Act of 1856.",
      orderIndex: 4
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q06",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "Consider the following statements:\n1. The Ramakrishna Mission was founded by Swami Vivekananda in 1897.\n2. The Aligarh Movement was led by Sir Syed Ahmed Khan.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Vivekananda founded the Ramakrishna Mission in 1897; Sir Syed Ahmed Khan led the Aligarh Movement.",
      orderIndex: 5
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q07",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Shuddhi movement, aimed at reconversion, was started by which organisation?",
      optionA: "Arya Samaj",
      optionB: "Brahmo Samaj",
      optionC: "Ramakrishna Mission",
      optionD: "Theosophical Society",
      correctOption: "A",
      explanation: "The Arya Samaj, founded by Dayananda Saraswati, started the Shuddhi reconversion movement.",
      orderIndex: 6
    },
    {
      id: "upsc-modern-history-socio-religious-reform-movements-q08",
      topicId: "upsc-modern-history-socio-religious-reform-movements",
      text: "The Theosophical Society was founded in 1875 by:",
      optionA: "Annie Besant alone",
      optionB: "Sir Syed Ahmed Khan",
      optionC: "Raja Ram Mohan Roy",
      optionD: "Madame Blavatsky and Colonel Olcott",
      correctOption: "D",
      explanation: "The Theosophical Society was founded in 1875 by Madame Blavatsky and Colonel Olcott.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q01",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Mohenjo-daro is situated on the banks of which river?",
      optionA: "Indus",
      optionB: "Ravi",
      optionC: "Ghaggar",
      optionD: "Sutlej",
      correctOption: "A",
      explanation: "Mohenjo-daro, meaning Mound of the Dead, is located on the Indus river and housed the Great Bath.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q02",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The site of Lothal is best known for its:",
      optionA: "Artificial dockyard",
      optionB: "Citadel",
      optionC: "Great Bath",
      optionD: "Pillared hall",
      correctOption: "A",
      explanation: "Lothal in Gujarat had an artificial dockyard, evidence of Harappan maritime trade.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q03",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Consider the following statements:\n1. Harappa was discovered in 1921 by Daya Ram Sahni.\n2. Mohenjo-daro was discovered in 1922 by R.D. Banerji.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Harappa was found in 1921 by Daya Ram Sahni and Mohenjo-daro in 1922 by R.D. Banerji.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q04",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The Harappans traded with Mesopotamia, where their land was referred to as:",
      optionA: "Dilmun",
      optionB: "Magan",
      optionC: "Meluhha",
      optionD: "Punt",
      correctOption: "C",
      explanation: "Mesopotamian records refer to the Indus region as Meluhha.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q05",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "The Indus Valley Civilisation belonged to which technological age?",
      optionA: "Iron Age",
      optionB: "Copper Age only",
      optionC: "Stone Age",
      optionD: "Bronze Age",
      correctOption: "D",
      explanation: "The IVC was a Bronze Age civilisation flourishing roughly 2600-1900 BCE.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q06",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Consider the following statements:\n1. The Harappan script is pictographic and remains undeciphered.\n2. The Pashupati seal is regarded as a proto-Shiva representation.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The pictographic Harappan script is undeciphered, and the Pashupati seal is seen as proto-Shiva.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q07",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Harappan towns were typically laid out on which pattern?",
      optionA: "Radial pattern",
      optionB: "Grid pattern",
      optionC: "Concentric circles",
      optionD: "Random clusters",
      correctOption: "B",
      explanation: "Harappan towns followed a grid pattern with a citadel and a lower town, plus advanced drainage.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-indus-valley-civilisation-q08",
      topicId: "upsc-ancient-history-indus-valley-civilisation",
      text: "Which deity was widely worshipped in the Indus Valley Civilisation?",
      optionA: "The Mother Goddess",
      optionB: "Indra",
      optionC: "Vishnu",
      optionD: "Surya",
      correctOption: "A",
      explanation: "The Harappans worshipped the Mother Goddess and a proto-Shiva Pashupati figure.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q01",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Who was the founder of the Mauryan Empire?",
      optionA: "Chandragupta Maurya",
      optionB: "Bindusara",
      optionC: "Ashoka",
      optionD: "Pushyamitra Shunga",
      correctOption: "A",
      explanation: "Chandragupta Maurya founded the empire in 322 BCE with the guidance of Chanakya (Kautilya).",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q02",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Greek envoy who wrote 'Indica' at the Mauryan court was:",
      optionA: "Seleucus",
      optionB: "Megasthenes",
      optionC: "Fa-Hien",
      optionD: "Hiuen Tsang",
      correctOption: "B",
      explanation: "Megasthenes, the Greek envoy of Seleucus, wrote Indica at Chandragupta Maurya's court.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q03",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Consider the following statements:\n1. The Kalinga War was fought in 261 BCE.\n2. After the war Ashoka propagated his policy of Dhamma.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Kalinga War of 261 BCE transformed Ashoka, who then propagated Dhamma.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q04",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Arthashastra, a treatise on statecraft, was authored by:",
      optionA: "Megasthenes",
      optionB: "Varahamihira",
      optionC: "Harisena",
      optionD: "Kautilya (Chanakya)",
      correctOption: "D",
      explanation: "Kautilya, also known as Chanakya, authored the Arthashastra on statecraft, economy and espionage.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q05",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "The Lion Capital of Sarnath, India's national emblem, was erected by:",
      optionA: "Chandragupta Maurya",
      optionB: "Bindusara",
      optionC: "Ashoka",
      optionD: "Samudragupta",
      correctOption: "C",
      explanation: "Ashoka's Lion Capital of Sarnath was adopted as India's national emblem.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q06",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Consider the following statements:\n1. Ashoka's edicts were inscribed in scripts including Brahmi and Kharosthi.\n2. The Mauryan dynasty ended with the assassination of Brihadratha by Pushyamitra Shunga.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Ashoka's edicts used Brahmi, Kharosthi, Greek and Aramaic; Pushyamitra Shunga killed Brihadratha in 185 BCE.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q07",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Which Mauryan ruler was known by the title 'Amitraghata'?",
      optionA: "Bindusara",
      optionB: "Chandragupta Maurya",
      optionC: "Ashoka",
      optionD: "Dasharatha",
      correctOption: "A",
      explanation: "Bindusara, son of Chandragupta, was known as Amitraghata, the slayer of foes.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-mauryan-empire-q08",
      topicId: "upsc-ancient-history-mauryan-empire",
      text: "Mauryan provinces were administered by princes who held which title?",
      optionA: "Mahamatras",
      optionB: "Rajukas",
      optionC: "Amatyas",
      optionD: "Kumaras",
      correctOption: "D",
      explanation: "Mauryan provinces were governed by princes known as Kumaras.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-gupta-age-q01",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Which Gupta ruler is described as the 'Napoleon of India' by historian V.A. Smith?",
      optionA: "Chandragupta I",
      optionB: "Skandagupta",
      optionC: "Chandragupta II",
      optionD: "Samudragupta",
      correctOption: "D",
      explanation: "Samudragupta's extensive conquests earned him the title 'Napoleon of India' from V.A. Smith.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-gupta-age-q02",
      topicId: "upsc-ancient-history-gupta-age",
      text: "The Allahabad Pillar inscription (Prayag Prashasti) was composed by:",
      optionA: "Harisena",
      optionB: "Kalidasa",
      optionC: "Aryabhata",
      optionD: "Varahamihira",
      correctOption: "A",
      explanation: "Harisena composed the Allahabad Pillar inscription recording Samudragupta's conquests.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-gupta-age-q03",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Consider the following statements:\n1. Aryabhata wrote the Aryabhatiya and proposed Earth's rotation.\n2. Fa-Hien visited India during Chandragupta II's reign.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Aryabhata wrote the Aryabhatiya; the Chinese pilgrim Fa-Hien visited during Chandragupta II's reign.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-gupta-age-q04",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Chandragupta II earned fame by defeating which foreign rulers?",
      optionA: "The Hunas",
      optionB: "The Kushanas",
      optionC: "The Shakas",
      optionD: "The Greeks",
      correctOption: "C",
      explanation: "Chandragupta II Vikramaditya defeated the Shakas, extending Gupta power to western India.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-gupta-age-q05",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Kalidasa, the celebrated Gupta-era poet, authored which work?",
      optionA: "Abhijnanashakuntalam",
      optionB: "Aryabhatiya",
      optionC: "Brihat Samhita",
      optionD: "Indica",
      correctOption: "A",
      explanation: "Kalidasa wrote Abhijnanashakuntalam; the Brihat Samhita was by Varahamihira.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-gupta-age-q06",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Consider the following statements:\n1. The Gupta age is called the Golden Age of India.\n2. The decline of the Guptas was hastened by Huna invasions under Toramana and Mihirakula.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The Gupta age is the Golden Age; Huna invasions led by Toramana and Mihirakula hastened its decline.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-gupta-age-q07",
      topicId: "upsc-ancient-history-gupta-age",
      text: "Who founded the Gupta dynasty and married Kumaradevi of the Licchavis?",
      optionA: "Samudragupta",
      optionB: "Chandragupta I",
      optionC: "Chandragupta II",
      optionD: "Sri Gupta",
      correctOption: "B",
      explanation: "Chandragupta I founded the imperial Gupta line and strengthened it by marrying Licchavi princess Kumaradevi.",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-gupta-age-q08",
      topicId: "upsc-ancient-history-gupta-age",
      text: "The Mehrauli Iron Pillar is a notable example of Gupta-era advances in:",
      optionA: "Painting",
      optionB: "Metallurgy",
      optionC: "Astronomy",
      optionD: "Town planning",
      correctOption: "B",
      explanation: "The rust-resistant Mehrauli Iron Pillar demonstrates the high metallurgical skill of the Gupta period.",
      orderIndex: 7
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q01",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Gautama Buddha attained enlightenment at which place?",
      optionA: "Lumbini",
      optionB: "Sarnath",
      optionC: "Kushinagar",
      optionD: "Bodh Gaya",
      correctOption: "D",
      explanation: "Buddha attained enlightenment at Bodh Gaya; he was born at Lumbini and gave his first sermon at Sarnath.",
      orderIndex: 0
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q02",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Who was the 24th and last Tirthankara of Jainism?",
      optionA: "Mahavira",
      optionB: "Parshvanatha",
      optionC: "Neminatha",
      optionD: "Rishabhanatha",
      correctOption: "A",
      explanation: "Mahavira was the 24th Tirthankara; Rishabhanatha was the first and Parshvanatha the 23rd.",
      orderIndex: 1
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q03",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Consider the following statements:\n1. Buddha's first sermon at Sarnath is called Dharmachakra Pravartana.\n2. Buddhism follows the Middle Path.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The first sermon at Sarnath is the Dharmachakra Pravartana; Buddhism advocates the Middle Path.",
      orderIndex: 2
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q04",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The Fourth Buddhist Council, which split Buddhism into Hinayana and Mahayana, was held under:",
      optionA: "Ashoka",
      optionB: "Bindusara",
      optionC: "Ajatashatru",
      optionD: "Kanishka",
      correctOption: "D",
      explanation: "The Fourth Buddhist Council was held under Kanishka and led to the Hinayana-Mahayana split.",
      orderIndex: 3
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q05",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The Three Jewels (Triratna) of Jainism are right faith, right knowledge and:",
      optionA: "Right conduct",
      optionB: "Right livelihood",
      optionC: "Right speech",
      optionD: "Right mindfulness",
      correctOption: "A",
      explanation: "The Jain Triratna comprises right faith, right knowledge and right conduct.",
      orderIndex: 4
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q06",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "Consider the following statements:\n1. The Third Buddhist Council was held under Ashoka at Pataliputra.\n2. Early Buddhist texts (Tripitaka) were written in Pali.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "The Third Council met under Ashoka at Pataliputra; the Tripitaka was composed in Pali.",
      orderIndex: 5
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q07",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The two principal sects of Jainism are:",
      optionA: "Hinayana and Mahayana",
      optionB: "Digambara and Svetambara",
      optionC: "Theravada and Vajrayana",
      optionD: "Saguna and Nirguna",
      correctOption: "B",
      explanation: "Jainism's two principal sects are the Digambara (sky-clad) and Svetambara (white-clad).",
      orderIndex: 6
    },
    {
      id: "upsc-ancient-history-buddhism-and-jainism-q08",
      topicId: "upsc-ancient-history-buddhism-and-jainism",
      text: "The core ethical principle emphasised by Jainism is:",
      optionA: "Idol worship",
      optionB: "Moksha through ritual",
      optionC: "Animal sacrifice",
      optionD: "Ahimsa (non-violence)",
      correctOption: "D",
      explanation: "Ahimsa, or non-violence, is the central ethical principle of Jainism.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q01",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Who founded the Slave (Mamluk) dynasty of the Delhi Sultanate in 1206?",
      optionA: "Iltutmish",
      optionB: "Qutb-ud-din Aibak",
      optionC: "Balban",
      optionD: "Jalal-ud-din Khalji",
      correctOption: "B",
      explanation: "Qutb-ud-din Aibak founded the Slave dynasty in 1206 and began the Qutub Minar.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q02",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "The only woman to rule the Delhi Sultanate was:",
      optionA: "Chand Bibi",
      optionB: "Nur Jahan",
      optionC: "Razia Sultana",
      optionD: "Rani Durgavati",
      correctOption: "C",
      explanation: "Razia Sultana, daughter of Iltutmish, was the only woman to rule the Delhi Sultanate.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q03",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Consider the following statements:\n1. Alauddin Khalji introduced market price control reforms.\n2. He repelled repeated Mongol invasions.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Alauddin Khalji introduced market control reforms and successfully repelled Mongol invasions.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q04",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "The transfer of capital to Daulatabad and the issue of token currency are associated with:",
      optionA: "Firoz Shah Tughlaq",
      optionB: "Ghiyasuddin Tughlaq",
      optionC: "Muhammad bin Tughlaq",
      optionD: "Bahlol Lodi",
      correctOption: "C",
      explanation: "Muhammad bin Tughlaq shifted the capital to Daulatabad and introduced token currency.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q05",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Under the iqta system of the Delhi Sultanate, an iqta referred to:",
      optionA: "A unit of currency",
      optionB: "A military rank",
      optionC: "An assignment of land revenue in lieu of salary",
      optionD: "A religious tax",
      correctOption: "C",
      explanation: "The iqta system assigned land revenue to officials in place of a cash salary.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q06",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Consider the following statements:\n1. The Qutub Minar was begun by Qutb-ud-din Aibak and completed by Iltutmish.\n2. The Delhi Sultanate ended with the First Battle of Panipat in 1526.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Aibak began and Iltutmish completed the Qutub Minar; Babur ended the Sultanate at Panipat in 1526.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q07",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Which ruler founded the Lodi dynasty, the last of the Delhi Sultanate?",
      optionA: "Khizr Khan",
      optionB: "Ibrahim Lodi",
      optionC: "Sikandar Lodi",
      optionD: "Bahlol Lodi",
      correctOption: "D",
      explanation: "Bahlol Lodi founded the Lodi dynasty in 1451; Ibrahim Lodi was the last Sultan.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-delhi-sultanate-q08",
      topicId: "upsc-medieval-history-delhi-sultanate",
      text: "Firoz Shah Tughlaq is particularly remembered for:",
      optionA: "Introducing token currency",
      optionB: "Defeating Babur at Panipat",
      optionC: "Transferring the capital to Daulatabad",
      optionD: "Levying jizya and building canals",
      correctOption: "D",
      explanation: "Firoz Shah Tughlaq levied the jizya tax and built irrigation canals.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-mughal-empire-q01",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "The Mughal Empire was founded after the First Battle of Panipat (1526) by:",
      optionA: "Humayun",
      optionB: "Akbar",
      optionC: "Sher Shah Suri",
      optionD: "Babur",
      correctOption: "D",
      explanation: "Babur founded the Mughal Empire after defeating Ibrahim Lodi at the First Battle of Panipat in 1526.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-mughal-empire-q02",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Who introduced the silver coin 'rupiya' and built the Grand Trunk Road?",
      optionA: "Sher Shah Suri",
      optionB: "Akbar",
      optionC: "Babur",
      optionD: "Aurangzeb",
      correctOption: "A",
      explanation: "Sher Shah Suri introduced the rupiya and developed the Grand Trunk Road.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-mughal-empire-q03",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Consider the following statements:\n1. Akbar abolished the jizya tax.\n2. Akbar started the Din-i-Ilahi in 1582.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Akbar abolished the jizya and founded the syncretic Din-i-Ilahi in 1582.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-mughal-empire-q04",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "The Zabti or Dahsala revenue system was developed under Akbar by:",
      optionA: "Birbal",
      optionB: "Abul Fazl",
      optionC: "Raja Todar Mal",
      optionD: "Man Singh",
      correctOption: "C",
      explanation: "Raja Todar Mal developed the Zabti (Dahsala) land revenue system under Akbar.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-mughal-empire-q05",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "In the Mansabdari system, the ranks 'zat' and 'sawar' indicated respectively:",
      optionA: "Tax rate and revenue share",
      optionB: "Land grant and salary",
      optionC: "Religious rank and military rank",
      optionD: "Personal status and cavalry obligation",
      correctOption: "D",
      explanation: "Zat denoted personal status and pay, while sawar indicated the number of cavalry to be maintained.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-mughal-empire-q06",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Consider the following statements:\n1. Shah Jahan built the Taj Mahal.\n2. Mughal painting peaked under Jahangir.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Shah Jahan built the Taj Mahal and Mughal painting reached its zenith under Jahangir.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-mughal-empire-q07",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Which Mughal emperor re-imposed the jizya and expanded the empire to its greatest extent?",
      optionA: "Akbar",
      optionB: "Jahangir",
      optionC: "Aurangzeb",
      optionD: "Shah Jahan",
      correctOption: "C",
      explanation: "Aurangzeb re-imposed the jizya and took the empire to its greatest territorial extent.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-mughal-empire-q08",
      topicId: "upsc-medieval-history-mughal-empire",
      text: "Mughal emperor Humayun is best known for:",
      optionA: "Building Fatehpur Sikri",
      optionB: "Starting the Din-i-Ilahi",
      optionC: "Losing his throne to Sher Shah Suri",
      optionD: "Building the Taj Mahal",
      correctOption: "C",
      explanation: "Humayun temporarily lost the throne to Sher Shah Suri before regaining it in 1555.",
      orderIndex: 7
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q01",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Which saint founded Sikhism?",
      optionA: "Guru Nanak",
      optionB: "Ramananda",
      optionC: "Kabir",
      optionD: "Chaitanya",
      correctOption: "A",
      explanation: "Guru Nanak founded Sikhism; he was a Nirguna saint who rejected ritualism and caste.",
      orderIndex: 0
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q02",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Bhakti saint Mirabai was devoted to:",
      optionA: "Krishna",
      optionB: "Shiva",
      optionC: "Rama",
      optionD: "Vishnu as Vithoba",
      correctOption: "A",
      explanation: "Mirabai of Rajasthan was a devotee of Krishna and a celebrated Bhakti poet.",
      orderIndex: 1
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q03",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Consider the following statements:\n1. Kabir and Guru Nanak were Nirguna saints.\n2. Saguna saints worshipped a god with form.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Kabir and Guru Nanak belonged to the Nirguna (formless) school; Saguna saints worshipped a god with form.",
      orderIndex: 2
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q04",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Chishti Sufi order in India is most closely associated with which saint of Ajmer?",
      optionA: "Nizamuddin Auliya",
      optionB: "Sheikh Bahauddin Zakariya",
      optionC: "Baba Farid",
      optionD: "Khwaja Moinuddin Chishti",
      correctOption: "D",
      explanation: "Khwaja Moinuddin Chishti of Ajmer founded the influential Chishti order in India.",
      orderIndex: 3
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q05",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "In Sufi tradition, a 'khanqah' refers to:",
      optionA: "A Sufi hospice",
      optionB: "A devotional song",
      optionC: "A mystical order",
      optionD: "A holy relic",
      correctOption: "A",
      explanation: "A khanqah was a Sufi hospice where the saint lived and disciples gathered.",
      orderIndex: 4
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q06",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "Consider the following statements:\n1. Sufi orders were organised into silsilas.\n2. Sama, or devotional music, was central to the Chishti order.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Sufism was organised into silsilas (orders), and Sama (devotional music) was central to the Chishtis.",
      orderIndex: 5
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q07",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The Bhakti saint Chaitanya is chiefly associated with which region?",
      optionA: "Rajasthan",
      optionB: "Awadh",
      optionC: "Bengal",
      optionD: "Maharashtra",
      correctOption: "C",
      explanation: "Chaitanya Mahaprabhu spread Krishna devotion in Bengal and Odisha.",
      orderIndex: 6
    },
    {
      id: "upsc-medieval-history-bhakti-and-sufi-movements-q08",
      topicId: "upsc-medieval-history-bhakti-and-sufi-movements",
      text: "The poet and musician closely associated with Nizamuddin Auliya was:",
      optionA: "Tulsidas",
      optionB: "Kabir",
      optionC: "Amir Khusro",
      optionD: "Surdas",
      correctOption: "C",
      explanation: "Amir Khusro, a disciple of Nizamuddin Auliya, contributed greatly to a composite Indo-Islamic culture.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q01",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The curvilinear shikhara is the defining feature of which temple style?",
      optionA: "Dravida",
      optionB: "Nagara",
      optionC: "Vesara",
      optionD: "Kalinga only",
      correctOption: "B",
      explanation: "The Nagara style of north India is marked by a curvilinear shikhara and lacks boundary walls.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q02",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The gopuram, a towering gateway, is a characteristic feature of which style?",
      optionA: "Nagara",
      optionB: "Bengal terracotta",
      optionC: "Vesara",
      optionD: "Dravida",
      correctOption: "D",
      explanation: "The Dravida temple of south India is enclosed by walls with a gopuram gateway tower.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q03",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "Consider the following statements:\n1. The Brihadeshwara Temple at Thanjavur was built by the Cholas.\n2. The Kandariya Mahadeva at Khajuraho is a Nagara temple.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The Chola Brihadeshwara Temple is Dravida; Khajuraho's Kandariya Mahadeva is a Nagara temple.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q04",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "In temple architecture, the 'garbhagriha' is the:",
      optionA: "Assembly hall",
      optionB: "Circumambulatory path",
      optionC: "Gateway tower",
      optionD: "Sanctum housing the deity",
      correctOption: "D",
      explanation: "The garbhagriha is the sanctum sanctorum that houses the main deity; the mandapa is the assembly hall.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q05",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The monolithic Kailasa Temple at Ellora was carved by which dynasty?",
      optionA: "Cholas",
      optionB: "Rashtrakutas",
      optionC: "Pallavas",
      optionD: "Hoysalas",
      correctOption: "B",
      explanation: "The Rashtrakutas carved the monolithic Kailasa Temple at Ellora from top to bottom.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q06",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "Consider the following statements:\n1. The Vesara style is a hybrid associated with the Chalukyas and Hoysalas.\n2. The shore temple and rathas at Mahabalipuram were built by the Pallavas.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Vesara is a hybrid style of the Chalukyas and Hoysalas; Mahabalipuram's monuments are Pallava works.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q07",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The Sun Temple at Konark is an example of which architectural style?",
      optionA: "Dravida",
      optionB: "Vesara",
      optionC: "Nagara",
      optionD: "Indo-Saracenic",
      correctOption: "C",
      explanation: "The Sun Temple at Konark is a famous Nagara-style temple in Odisha.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-temple-architecture-q08",
      topicId: "upsc-art-and-culture-temple-architecture",
      text: "The amalaka and kalasha typically crown the tower of which temple style?",
      optionA: "Nagara",
      optionB: "Dravida",
      optionC: "Vesara",
      optionD: "Cave temples",
      correctOption: "A",
      explanation: "The amalaka and kalasha crown the shikhara of a Nagara-style temple.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q01",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "How many dance forms are officially recognised as classical in India?",
      optionA: "Six",
      optionB: "Seven",
      optionC: "Nine",
      optionD: "Eight",
      correctOption: "D",
      explanation: "India recognises eight classical dance forms, each rooted in Bharata's Natya Shastra.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q02",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Which classical dance form originates from Kerala and uses elaborate make-up and masks?",
      optionA: "Kuchipudi",
      optionB: "Manipuri",
      optionC: "Odissi",
      optionD: "Kathakali",
      correctOption: "D",
      explanation: "Kathakali of Kerala uses elaborate make-up and masks to depict episodes from the epics.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q03",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Consider the following statements:\n1. Bharatanatyam is the oldest classical dance and originated in temples.\n2. Kathak shows strong Persian and Mughal influence.\nWhich is/are correct?",
      optionA: "Neither 1 nor 2",
      optionB: "1 only",
      optionC: "2 only",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Bharatanatyam is the oldest temple dance, and Kathak carries strong Persian and Mughal influence.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q04",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Sattriya, a classical dance form, originated in which state?",
      optionA: "Odisha",
      optionB: "Manipur",
      optionC: "Tamil Nadu",
      optionD: "Assam",
      correctOption: "D",
      explanation: "Sattriya originated in Assam and was founded by the Vaishnavite saint Sankaradeva.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q05",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Mohiniyattam, a solo female dance embodying Lasya grace, belongs to:",
      optionA: "Kerala",
      optionB: "Andhra Pradesh",
      optionC: "Odisha",
      optionD: "Karnataka",
      correctOption: "A",
      explanation: "Mohiniyattam is a graceful solo female dance form from Kerala embodying the Lasya aspect.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q06",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Consider the following statements:\n1. Tandava is the vigorous, masculine aspect of dance.\n2. Lasya is the graceful, feminine aspect of dance.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Tandava is the vigorous masculine aspect and Lasya the graceful feminine aspect of dance.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q07",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "The foundational treatise on Indian performing arts is the:",
      optionA: "Abhinaya Darpana only",
      optionB: "Arthashastra",
      optionC: "Natya Shastra",
      optionD: "Sangeet Ratnakara",
      correctOption: "C",
      explanation: "Bharata's Natya Shastra is the foundational treatise underpinning India's classical dance forms.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-classical-dance-forms-q08",
      topicId: "upsc-art-and-culture-classical-dance-forms",
      text: "Manipuri dance is best known for its gentle devotional movements linked to:",
      optionA: "Raslila",
      optionB: "Tandava",
      optionC: "The devadasi tradition",
      optionD: "Mughal courts",
      correctOption: "A",
      explanation: "Manipuri dance is known for its gentle, devotional movements linked to the Raslila of Krishna.",
      orderIndex: 7
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q01",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The Ajanta cave murals were executed primarily in which technique?",
      optionA: "Fresco buono",
      optionB: "Watercolour wash",
      optionC: "Oil painting",
      optionD: "Tempera",
      correctOption: "D",
      explanation: "The Buddhist murals of Ajanta were painted in the tempera technique.",
      orderIndex: 0
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q02",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The famous 'Bani Thani' portrait belongs to which school of painting?",
      optionA: "Pahari (Kangra)",
      optionB: "Mughal",
      optionC: "Deccan",
      optionD: "Kishangarh",
      correctOption: "D",
      explanation: "The Bani Thani portrait is the signature work of the Kishangarh school of Rajasthani painting.",
      orderIndex: 1
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q03",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Consider the following statements:\n1. Madhubani painting originates from Bihar.\n2. Warli painting uses white figures on a mud background.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "Madhubani (Mithila) painting is from Bihar; Warli painting uses white figures on a mud background.",
      orderIndex: 2
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q04",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Mughal painting reached its zenith under which emperor?",
      optionA: "Akbar",
      optionB: "Jahangir",
      optionC: "Shah Jahan",
      optionD: "Humayun",
      correctOption: "B",
      explanation: "Mughal painting, blending Persian technique with Indian themes, peaked under Jahangir.",
      orderIndex: 3
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q05",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Pattachitra, a cloth-based scroll painting, is traditionally associated with:",
      optionA: "Maharashtra",
      optionB: "Bihar",
      optionC: "Odisha and Bengal",
      optionD: "Rajasthan",
      correctOption: "C",
      explanation: "Pattachitra is a cloth-based scroll painting tradition of Odisha and Bengal.",
      orderIndex: 4
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q06",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Consider the following statements:\n1. The Bengal School was led by Abanindranath Tagore.\n2. It revived Indian themes against Western academic art.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Abanindranath Tagore led the Bengal School, which revived Indian themes against Western academic art.",
      orderIndex: 5
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q07",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "Which of the following is a Pahari school of miniature painting?",
      optionA: "Bundi",
      optionB: "Bijapur",
      optionC: "Kangra",
      optionD: "Mewar",
      correctOption: "C",
      explanation: "Kangra and Basohli are Pahari schools; Bundi and Mewar are Rajasthani and Bijapur is Deccan.",
      orderIndex: 6
    },
    {
      id: "upsc-art-and-culture-indian-painting-schools-q08",
      topicId: "upsc-art-and-culture-indian-painting-schools",
      text: "The Deccan school of miniature painting flourished at which centres?",
      optionA: "Kangra and Basohli",
      optionB: "Mewar and Bundi",
      optionC: "Bijapur and Golconda",
      optionD: "Mithila and Tanjore",
      correctOption: "C",
      explanation: "The Deccan school flourished at Bijapur and Golconda.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q01",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The largest peninsular river of India, called the 'Dakshin Ganga', is the:",
      optionA: "Godavari",
      optionB: "Kaveri",
      optionC: "Krishna",
      optionD: "Mahanadi",
      correctOption: "A",
      explanation: "The Godavari is the largest peninsular river and is known as the Dakshin Ganga.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q02",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Which two rivers flow westward through rift valleys into the Arabian Sea?",
      optionA: "Godavari and Krishna",
      optionB: "Narmada and Tapi",
      optionC: "Ganga and Yamuna",
      optionD: "Mahanadi and Kaveri",
      correctOption: "B",
      explanation: "The Narmada and Tapi flow westward through rift valleys into the Arabian Sea.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q03",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Consider the following statements:\n1. The Indus and Brahmaputra are antecedent rivers.\n2. They are older than the Himalayas.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Indus and Brahmaputra are antecedent rivers older than the Himalayas through which they cut.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q04",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The highest peak of peninsular India is:",
      optionA: "K2 (Godwin Austen)",
      optionB: "Doda Betta",
      optionC: "Anamudi",
      optionD: "Mahendragiri",
      correctOption: "C",
      explanation: "Anamudi, in the Western Ghats, is the highest peak of peninsular India.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q05",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The three parallel ranges of the Himalayas from north to south are:",
      optionA: "Shiwaliks, Himachal, Himadri",
      optionB: "Himadri, Himachal, Shiwaliks",
      optionC: "Himachal, Himadri, Shiwaliks",
      optionD: "Himadri, Shiwaliks, Himachal",
      correctOption: "B",
      explanation: "From north to south the ranges are the Himadri (Greater), Himachal (Lesser) and Shiwaliks (Outer).",
      orderIndex: 4
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q06",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Consider the following statements:\n1. The Peninsular Plateau is the oldest landmass made of Gondwana rocks.\n2. The Western Ghats are continuous and higher than the Eastern Ghats.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "The Peninsular Plateau is the oldest Gondwana landmass, and the Western Ghats are continuous and higher.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q07",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "The highest peak located within India is:",
      optionA: "Mount Everest",
      optionB: "K2 (Godwin Austen)",
      optionC: "Kanchenjunga",
      optionD: "Nanda Devi",
      correctOption: "B",
      explanation: "K2, also called Godwin Austen, is the highest peak in India (in the Karakoram range).",
      orderIndex: 6
    },
    {
      id: "upsc-geography-indian-physiography-and-rivers-q08",
      topicId: "upsc-geography-indian-physiography-and-rivers",
      text: "Himalayan rivers are generally described as perennial because they are fed by:",
      optionA: "Only the monsoon",
      optionB: "Both glaciers and rainfall",
      optionC: "Only groundwater",
      optionD: "Only lakes",
      correctOption: "B",
      explanation: "Himalayan rivers are perennial because they receive water from both melting glaciers and rainfall.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-soils-and-agriculture-q01",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Black soil (regur) is especially suited to the cultivation of:",
      optionA: "Tea",
      optionB: "Cotton",
      optionC: "Rice",
      optionD: "Coffee",
      correctOption: "B",
      explanation: "Black soil, or regur, retains moisture well and is ideal for cotton, hence 'black cotton soil'.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-soils-and-agriculture-q02",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "In the alluvial soils of India, the older alluvium is known as:",
      optionA: "Khadar",
      optionB: "Laterite",
      optionC: "Regur",
      optionD: "Bhangar",
      correctOption: "D",
      explanation: "Bhangar is old alluvium while khadar is the newer, more fertile alluvium.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-soils-and-agriculture-q03",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Consider the following statements:\n1. Kharif crops are sown in June-July.\n2. Rabi crops include wheat and gram.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Kharif crops are sown in June-July; rabi crops such as wheat and gram are sown in winter.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-soils-and-agriculture-q04",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "The White Revolution in India is associated with:",
      optionA: "Foodgrains",
      optionB: "Oilseeds",
      optionC: "Fisheries",
      optionD: "Milk production",
      correctOption: "D",
      explanation: "The White Revolution (Operation Flood) under Verghese Kurien boosted milk production.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-soils-and-agriculture-q05",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Laterite soil, formed by leaching, is best suited to which crops?",
      optionA: "Wheat and sugarcane",
      optionB: "Cotton and gram",
      optionC: "Mustard and pulses",
      optionD: "Tea, coffee and cashew",
      correctOption: "D",
      explanation: "Leached, acidic laterite soil suits plantation crops like tea, coffee and cashew.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-soils-and-agriculture-q06",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Consider the following statements:\n1. The Green Revolution was associated with M.S. Swaminathan and Norman Borlaug.\n2. Alluvial soil covers about 40% of India's land.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Swaminathan and Borlaug led the Green Revolution; alluvial soil covers roughly 40% of India's land.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-soils-and-agriculture-q07",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "Which cropping season corresponds to the short summer period?",
      optionA: "Kharif",
      optionB: "Zaid",
      optionC: "Rabi",
      optionD: "Bhangar",
      correctOption: "B",
      explanation: "The Zaid season is the short summer cropping period for crops like watermelon and cucumber.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-soils-and-agriculture-q08",
      topicId: "upsc-geography-soils-and-agriculture",
      text: "The Blue Revolution in India refers to development in:",
      optionA: "Oilseeds",
      optionB: "Milk",
      optionC: "Fisheries",
      optionD: "Foodgrains",
      correctOption: "C",
      explanation: "The Blue Revolution refers to the development of fisheries and aquaculture.",
      orderIndex: 7
    },
    {
      id: "upsc-geography-world-geography-landforms-q01",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The theory of Continental Drift was proposed by:",
      optionA: "Alfred Wegener",
      optionB: "Charles Lyell",
      optionC: "James Hutton",
      optionD: "Harry Hess",
      correctOption: "A",
      explanation: "Alfred Wegener proposed the Continental Drift theory, a precursor to plate tectonics.",
      orderIndex: 0
    },
    {
      id: "upsc-geography-world-geography-landforms-q02",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Mid-ocean ridges and rift valleys are typically formed at which plate boundary?",
      optionA: "Convergent",
      optionB: "Divergent",
      optionC: "Transform",
      optionD: "Subduction",
      correctOption: "B",
      explanation: "Divergent boundaries, where plates move apart, create mid-ocean ridges and rift valleys.",
      orderIndex: 1
    },
    {
      id: "upsc-geography-world-geography-landforms-q03",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Consider the following statements:\n1. The Himalayas formed by the convergence of the Indian and Eurasian plates.\n2. The Pacific Ring of Fire hosts about two-thirds of the world's active volcanoes.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The Himalayas arose from Indian-Eurasian convergence; the Ring of Fire holds about two-thirds of active volcanoes.",
      orderIndex: 2
    },
    {
      id: "upsc-geography-world-geography-landforms-q04",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The San Andreas Fault is a classic example of which type of plate boundary?",
      optionA: "Transform",
      optionB: "Divergent",
      optionC: "Convergent",
      optionD: "Continental",
      correctOption: "A",
      explanation: "The San Andreas Fault is a transform boundary where plates slide past one another, causing earthquakes.",
      orderIndex: 3
    },
    {
      id: "upsc-geography-world-geography-landforms-q05",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The highest plateau in the world is the:",
      optionA: "Tibetan Plateau",
      optionB: "Deccan Plateau",
      optionC: "Colorado Plateau",
      optionD: "Ethiopian Plateau",
      correctOption: "A",
      explanation: "The Tibetan Plateau is the highest plateau in the world.",
      orderIndex: 4
    },
    {
      id: "upsc-geography-world-geography-landforms-q06",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Consider the following statements:\n1. Block mountains are formed by horst and graben structures.\n2. The Himalayas and Andes are examples of fold mountains.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "Block mountains arise from horst-and-graben faulting; the Himalayas and Andes are fold mountains.",
      orderIndex: 5
    },
    {
      id: "upsc-geography-world-geography-landforms-q07",
      topicId: "upsc-geography-world-geography-landforms",
      text: "Forces originating from within the Earth that shape landforms are called:",
      optionA: "Exogenic forces",
      optionB: "Aeolian forces",
      optionC: "Gradational forces",
      optionD: "Endogenic forces",
      correctOption: "D",
      explanation: "Endogenic (internal) forces such as tectonics build landforms; exogenic forces wear them down.",
      orderIndex: 6
    },
    {
      id: "upsc-geography-world-geography-landforms-q08",
      topicId: "upsc-geography-world-geography-landforms",
      text: "The outermost layer of the Earth, broken into tectonic plates, is the:",
      optionA: "Mantle",
      optionB: "Lithosphere",
      optionC: "Outer core",
      optionD: "Asthenosphere",
      correctOption: "B",
      explanation: "The lithosphere is the rigid outer layer of the Earth that is broken into tectonic plates.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-national-income-and-gdp-q01",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Gross Domestic Product (GDP) measures the value of final goods and services produced:",
      optionA: "By a country's nationals worldwide",
      optionB: "Only in the manufacturing sector",
      optionC: "Within a country's borders",
      optionD: "After deducting depreciation",
      correctOption: "C",
      explanation: "GDP is the value of all final goods and services produced within a country's borders in a year.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-national-income-and-gdp-q02",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Gross National Product (GNP) is equal to:",
      optionA: "GDP plus net factor income from abroad",
      optionB: "GDP minus depreciation",
      optionC: "GDP plus depreciation",
      optionD: "NNP plus taxes",
      correctOption: "A",
      explanation: "GNP equals GDP plus net factor income from abroad (NFIA).",
      orderIndex: 1
    },
    {
      id: "upsc-economy-national-income-and-gdp-q03",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Consider the following statements:\n1. Nominal GDP is calculated at current prices.\n2. Real GDP is calculated at constant base-year prices.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "Nominal GDP uses current prices, while real GDP uses constant base-year prices.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-national-income-and-gdp-q04",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "The current base year for India's GDP estimates is:",
      optionA: "2004-05",
      optionB: "2015-16",
      optionC: "2011-12",
      optionD: "2020-21",
      correctOption: "C",
      explanation: "India's GDP series uses 2011-12 as the base year, with figures released by the NSO under MoSPI.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-national-income-and-gdp-q05",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "The GDP deflator is calculated as:",
      optionA: "(Real GDP / Nominal GDP) x 100",
      optionB: "Nominal GDP minus Real GDP",
      optionC: "(Nominal GDP / Real GDP) x 100",
      optionD: "GDP minus depreciation",
      correctOption: "C",
      explanation: "The GDP deflator equals Nominal GDP divided by Real GDP, multiplied by 100.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-national-income-and-gdp-q06",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Consider the following statements:\n1. NNP at factor cost is termed the National Income.\n2. Per capita income equals National Income divided by population.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "NNP at factor cost is the National Income, and per capita income is National Income divided by population.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-national-income-and-gdp-q07",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Net Domestic Product (NDP) is obtained by:",
      optionA: "Adding NFIA to GDP",
      optionB: "Subtracting taxes from GNP",
      optionC: "Adding depreciation to GDP",
      optionD: "Subtracting depreciation from GDP",
      correctOption: "D",
      explanation: "NDP equals GDP minus depreciation.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-national-income-and-gdp-q08",
      topicId: "upsc-economy-national-income-and-gdp",
      text: "Which of the following is NOT one of the three methods of measuring national income?",
      optionA: "Production (value-added) method",
      optionB: "Income method",
      optionC: "Depreciation method",
      optionD: "Expenditure method",
      correctOption: "C",
      explanation: "National income is measured by the production, income and expenditure methods, not a 'depreciation method'.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q01",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "In which year was the Reserve Bank of India nationalised?",
      optionA: "1935",
      optionB: "1947",
      optionC: "1969",
      optionD: "1949",
      correctOption: "D",
      explanation: "The RBI was established in 1935 and nationalised in 1949.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q02",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The 'repo rate' is the rate at which:",
      optionA: "Banks lend to the RBI",
      optionB: "The RBI lends to commercial banks",
      optionC: "Banks lend to each other",
      optionD: "The government borrows from the public",
      correctOption: "B",
      explanation: "The repo rate is the rate at which the RBI lends short-term funds to commercial banks.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q03",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Consider the following statements:\n1. The RBI is the sole issuer of currency except the one-rupee note and coins.\n2. The RBI is the lender of last resort to banks.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The RBI issues currency except the one-rupee note and coins, and acts as lender of last resort.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q04",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "An asset is classified as a Non-Performing Asset (NPA) if interest or principal is overdue for:",
      optionA: "30 days",
      optionB: "60 days",
      optionC: "90 days",
      optionD: "180 days",
      correctOption: "C",
      explanation: "A loan becomes an NPA when interest or principal remains overdue for 90 days.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q05",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The one-rupee note and coins in India are issued by:",
      optionA: "The Reserve Bank of India",
      optionB: "The Ministry of Finance",
      optionC: "The State Bank of India",
      optionD: "NABARD",
      correctOption: "B",
      explanation: "The one-rupee note and coins are issued by the Ministry of Finance, not the RBI.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q06",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Consider the following statements:\n1. The SLR is capped at 40%.\n2. Scheduled commercial banks are listed in the Second Schedule of the RBI Act.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "SLR is capped at 40% and scheduled commercial banks are listed in the Second Schedule of the RBI Act.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q07",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "Which of the following is true of Payments Banks in India?",
      optionA: "They can issue credit cards",
      optionB: "They can give long-term loans",
      optionC: "They cannot lend or issue credit cards",
      optionD: "They function only in rural areas",
      correctOption: "C",
      explanation: "Payments Banks accept small deposits but cannot lend or issue credit cards.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-banking-system-and-rbi-q08",
      topicId: "upsc-economy-banking-system-and-rbi",
      text: "The Insolvency and Bankruptcy Code (IBC) was enacted in which year?",
      optionA: "2013",
      optionB: "2016",
      optionC: "2014",
      optionD: "2018",
      correctOption: "B",
      explanation: "The Insolvency and Bankruptcy Code was enacted in 2016 to speed up resolution of bad loans.",
      orderIndex: 7
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q01",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Union Budget is presented as the 'Annual Financial Statement' under which Article?",
      optionA: "Article 112",
      optionB: "Article 110",
      optionC: "Article 266",
      optionD: "Article 280",
      correctOption: "A",
      explanation: "Article 112 provides for the Annual Financial Statement, that is, the Union Budget.",
      orderIndex: 0
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q02",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Fiscal Deficit is best defined as:",
      optionA: "Revenue Expenditure minus Revenue Receipts",
      optionB: "Total Expenditure minus Total Receipts excluding borrowings",
      optionC: "Fiscal Deficit minus Interest Payments",
      optionD: "Capital Receipts minus Capital Expenditure",
      correctOption: "B",
      explanation: "The Fiscal Deficit equals total expenditure minus total receipts excluding borrowings, indicating borrowing needs.",
      orderIndex: 1
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q03",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Consider the following statements:\n1. The Primary Deficit equals the Fiscal Deficit minus interest payments.\n2. The FRBM Act was enacted in 2003.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The Primary Deficit is the Fiscal Deficit minus interest payments; the FRBM Act was passed in 2003.",
      orderIndex: 2
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q04",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The Goods and Services Tax (GST) was launched in India on:",
      optionA: "1 April 2016",
      optionB: "26 January 2017",
      optionC: "1 January 2018",
      optionD: "1 July 2017",
      correctOption: "D",
      explanation: "GST, a destination-based tax, was launched on 1 July 2017 and is governed by the GST Council.",
      orderIndex: 3
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q05",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "The GST Council is a constitutional body created under which Article?",
      optionA: "Article 112",
      optionB: "Article 110",
      optionC: "Article 279A",
      optionD: "Article 266",
      correctOption: "C",
      explanation: "The GST Council is established under Article 279A of the Constitution.",
      orderIndex: 4
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q06",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Consider the following statements:\n1. Direct taxes are progressive.\n2. Indirect taxes such as GST are regressive.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Direct taxes like income tax are progressive, while indirect taxes such as GST are regressive.",
      orderIndex: 5
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q07",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "All revenues received by the Government of India are credited to the:",
      optionA: "Contingency Fund",
      optionB: "Public Account",
      optionC: "Capital Account",
      optionD: "Consolidated Fund of India",
      correctOption: "D",
      explanation: "The Consolidated Fund of India (Article 266) holds all government revenues; withdrawals need parliamentary approval.",
      orderIndex: 6
    },
    {
      id: "upsc-economy-union-budget-and-fiscal-policy-q08",
      topicId: "upsc-economy-union-budget-and-fiscal-policy",
      text: "Which of the following is a revenue receipt of the government?",
      optionA: "Tax revenue",
      optionB: "Disinvestment proceeds",
      optionC: "Borrowings",
      optionD: "Recovery of loans",
      correctOption: "A",
      explanation: "Tax revenue is a non-debt-creating revenue receipt; borrowings and disinvestment are capital receipts.",
      orderIndex: 7
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q01",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "How many biodiversity hotspots are located in India?",
      optionA: "Two",
      optionB: "Four",
      optionC: "Three",
      optionD: "Six",
      correctOption: "B",
      explanation: "India has four biodiversity hotspots: the Himalayas, Western Ghats, Indo-Burma and Sundaland.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q02",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Conservation of species within their natural habitat is known as:",
      optionA: "In-situ conservation",
      optionB: "Ex-situ conservation",
      optionC: "Cryopreservation",
      optionD: "Captive breeding",
      correctOption: "A",
      explanation: "In-situ conservation protects species in their natural habitat, such as national parks and sanctuaries.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q03",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Consider the following statements:\n1. National Parks allow no human activity.\n2. Wildlife Sanctuaries permit some regulated activity.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "National Parks prohibit human activity while Sanctuaries permit certain regulated activities.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q04",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Project Tiger was launched in which year?",
      optionA: "1972",
      optionB: "1992",
      optionC: "1985",
      optionD: "1973",
      correctOption: "D",
      explanation: "Project Tiger was launched in 1973; Project Elephant followed in 1992.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q05",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "The Convention on Biological Diversity (CBD) was adopted at which summit?",
      optionA: "Stockholm Conference 1972",
      optionB: "Johannesburg Summit 2002",
      optionC: "Rio Earth Summit 1992",
      optionD: "Paris Summit 2015",
      correctOption: "C",
      explanation: "The CBD was adopted at the Rio Earth Summit in 1992.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q06",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Consider the following statements:\n1. India is one of 17 megadiverse countries.\n2. Biosphere Reserves have core, buffer and transition zones.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "India is among 17 megadiverse nations, and Biosphere Reserves comprise core, buffer and transition zones.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q07",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Protected species in India are listed in the schedules of which Act?",
      optionA: "Wildlife (Protection) Act, 1972",
      optionB: "Environment Protection Act, 1986",
      optionC: "Forest Conservation Act, 1980",
      optionD: "Biological Diversity Act, 2002",
      correctOption: "A",
      explanation: "The Wildlife (Protection) Act, 1972 lists protected species in its schedules.",
      orderIndex: 6
    },
    {
      id: "upsc-environment-biodiversity-and-conservation-q08",
      topicId: "upsc-environment-biodiversity-and-conservation",
      text: "Which international convention regulates trade in endangered species?",
      optionA: "CBD",
      optionB: "Ramsar Convention",
      optionC: "CITES",
      optionD: "UNFCCC",
      correctOption: "C",
      explanation: "CITES regulates international trade in endangered species of wild fauna and flora.",
      orderIndex: 7
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q01",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Paris Agreement (2015) aims to limit the rise in global average temperature to:",
      optionA: "Below 3 degrees C",
      optionB: "Well below 2 degrees C, pursuing 1.5 degrees C",
      optionC: "Exactly 2.5 degrees C",
      optionD: "Below 4 degrees C",
      correctOption: "B",
      explanation: "The Paris Agreement seeks to keep warming well below 2 degrees C while pursuing 1.5 degrees C.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q02",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Montreal Protocol (1987) was aimed at phasing out:",
      optionA: "Greenhouse gases",
      optionB: "Fossil fuel subsidies",
      optionC: "Ozone-depleting substances",
      optionD: "Plastic waste",
      correctOption: "C",
      explanation: "The Montreal Protocol phased out ozone-depleting substances; its Kigali Amendment targets HFCs.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q03",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Consider the following statements:\n1. The IPCC was set up in 1988 by WMO and UNEP.\n2. The UNFCCC of 1992 is the parent climate treaty.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "The IPCC was set up in 1988 by WMO and UNEP, and the 1992 UNFCCC is the parent climate treaty.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q04",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "India has set a target of achieving net zero emissions by:",
      optionA: "2050",
      optionB: "2060",
      optionC: "2070",
      optionD: "2047",
      correctOption: "C",
      explanation: "India targets net zero emissions by 2070, following the principle of CBDR.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q05",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "The Kyoto Protocol of 1997 set binding emission targets primarily for:",
      optionA: "Developing nations",
      optionB: "Only island nations",
      optionC: "All UN members equally",
      optionD: "Developed nations",
      correctOption: "D",
      explanation: "The Kyoto Protocol set binding greenhouse gas targets for developed nations.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q06",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Consider the following statements:\n1. Methane is mainly emitted by livestock, paddy and landfills.\n2. The Paris Agreement operates through Nationally Determined Contributions.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Methane comes from livestock, paddy and landfills; the Paris Agreement works through NDCs.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q07",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "Parties to the UNFCCC meet annually at the:",
      optionA: "Conference of the Parties (COP)",
      optionB: "General Assembly",
      optionC: "Security Council",
      optionD: "G20 Summit",
      correctOption: "A",
      explanation: "Parties to the UNFCCC meet annually at the Conference of the Parties (COP).",
      orderIndex: 6
    },
    {
      id: "upsc-environment-climate-change-and-global-agreements-q08",
      topicId: "upsc-environment-climate-change-and-global-agreements",
      text: "India's climate missions are coordinated under which national framework?",
      optionA: "FRBM",
      optionB: "NITI Aayog",
      optionC: "NAPCC",
      optionD: "NDB",
      correctOption: "C",
      explanation: "India's climate missions operate under the National Action Plan on Climate Change (NAPCC).",
      orderIndex: 7
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q01",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "In an ecosystem, green plants are classified as:",
      optionA: "Primary consumers",
      optionB: "Decomposers",
      optionC: "Producers",
      optionD: "Secondary consumers",
      correctOption: "C",
      explanation: "Green plants are autotrophic producers that fix energy at the base of the food chain.",
      orderIndex: 0
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q02",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "According to Lindeman's 10% law, the energy transferred to the next trophic level is about:",
      optionA: "1%",
      optionB: "10%",
      optionC: "50%",
      optionD: "90%",
      correctOption: "B",
      explanation: "Lindeman's 10% law states that only about 10% of energy is transferred to the next trophic level.",
      orderIndex: 1
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q03",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Consider the following statements:\n1. Energy flow in an ecosystem is unidirectional.\n2. The pyramid of energy is always upright.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "Energy flow is unidirectional and the energy pyramid is always upright.",
      orderIndex: 2
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q04",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Which of the following are decomposers in an ecosystem?",
      optionA: "Bacteria and fungi",
      optionB: "Carnivores",
      optionC: "Herbivores",
      optionD: "Green plants",
      correctOption: "A",
      explanation: "Bacteria and fungi act as decomposers, breaking down dead organic matter.",
      orderIndex: 3
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q05",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "An interconnected network of food chains is called a:",
      optionA: "Ecological niche",
      optionB: "Trophic level",
      optionC: "Biome",
      optionD: "Food web",
      correctOption: "D",
      explanation: "A food web is an interconnected network of multiple food chains.",
      orderIndex: 4
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q06",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Consider the following statements:\n1. Net Primary Productivity equals GPP minus respiration.\n2. NPP is the energy available to consumers.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "NPP equals GPP minus respiration and represents the energy available to consumers.",
      orderIndex: 5
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q07",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Which of the following is an abiotic component of an ecosystem?",
      optionA: "Herbivores",
      optionB: "Decomposers",
      optionC: "Producers",
      optionD: "Sunlight",
      correctOption: "D",
      explanation: "Sunlight, water, soil and temperature are abiotic (non-living) components of an ecosystem.",
      orderIndex: 6
    },
    {
      id: "upsc-environment-ecosystems-and-food-chains-q08",
      topicId: "upsc-environment-ecosystems-and-food-chains",
      text: "Herbivores in a food chain occupy the trophic level of:",
      optionA: "Primary consumers",
      optionB: "Producers",
      optionC: "Secondary consumers",
      optionD: "Decomposers",
      correctOption: "A",
      explanation: "Herbivores feed on producers and so occupy the primary consumer trophic level.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-space-technology-isro-q01",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Who is regarded as the father of the Indian space programme?",
      optionA: "A.P.J. Abdul Kalam",
      optionB: "Satish Dhawan",
      optionC: "Vikram Sarabhai",
      optionD: "Homi Bhabha",
      correctOption: "C",
      explanation: "Vikram Sarabhai, under whom ISRO was founded in 1969, is the father of the Indian space programme.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-space-technology-isro-q02",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "India's first satellite, launched in 1975, was named:",
      optionA: "Bhaskara",
      optionB: "Rohini",
      optionC: "Aryabhata",
      optionD: "INSAT-1A",
      correctOption: "C",
      explanation: "Aryabhata, launched in 1975, was India's first satellite.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-space-technology-isro-q03",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Consider the following statements:\n1. The PSLV is known as the workhorse of ISRO.\n2. The GSLV uses an indigenous cryogenic upper stage.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "The PSLV is ISRO's workhorse, and the GSLV uses an indigenous cryogenic upper stage.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-space-technology-isro-q04",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Which Indian mission made India the first nation to reach Mars orbit on its first attempt?",
      optionA: "Mangalyaan (Mars Orbiter Mission)",
      optionB: "Chandrayaan-1",
      optionC: "Aditya-L1",
      optionD: "Gaganyaan",
      correctOption: "A",
      explanation: "Mangalyaan (2013) made India the first nation to reach Mars orbit on its first attempt.",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-space-technology-isro-q05",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Chandrayaan-3 (2023) is notable for soft-landing near the Moon's:",
      optionA: "North pole",
      optionB: "Equator",
      optionC: "South pole",
      optionD: "Far side centre",
      correctOption: "C",
      explanation: "Chandrayaan-3 soft-landed near the lunar south pole in 2023.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-space-technology-isro-q06",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Consider the following statements:\n1. Chandrayaan-1 discovered water molecules on the Moon.\n2. NavIC is India's regional satellite navigation system.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Chandrayaan-1 found water molecules on the Moon, and NavIC (IRNSS) is India's regional navigation system.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-space-technology-isro-q07",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "The Aditya-L1 mission is designed to study the:",
      optionA: "Sun",
      optionB: "Mars",
      optionC: "Moon",
      optionD: "Venus",
      correctOption: "A",
      explanation: "Aditya-L1 studies the Sun from the L1 Lagrange point.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-space-technology-isro-q08",
      topicId: "upsc-science-technology-space-technology-isro",
      text: "Gaganyaan is India's planned mission for:",
      optionA: "Its first crewed spaceflight",
      optionB: "A Mars rover",
      optionC: "A lunar sample return",
      optionD: "An asteroid mission",
      correctOption: "A",
      explanation: "Gaganyaan aims to achieve India's first crewed spaceflight.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q01",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which enzymes are used to cut DNA at specific recognition sites?",
      optionA: "Restriction enzymes",
      optionB: "DNA ligases",
      optionC: "Polymerases",
      optionD: "Helicases",
      correctOption: "A",
      explanation: "Restriction enzymes cut DNA at specific sequences, a key tool in genetic engineering.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q02",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The technique used to amplify copies of a DNA segment is:",
      optionA: "Electrophoresis",
      optionB: "Chromatography",
      optionC: "PCR (Polymerase Chain Reaction)",
      optionD: "Centrifugation",
      correctOption: "C",
      explanation: "PCR (Polymerase Chain Reaction) amplifies copies of a specific DNA segment.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q03",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Consider the following statements:\n1. Bt cotton is India's only approved GM crop for commercial cultivation.\n2. Golden Rice is engineered to be rich in Vitamin A.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "Bt cotton is India's only approved commercial GM crop, and Golden Rice is engineered for Vitamin A.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q04",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which body in India approves the release of genetically modified organisms?",
      optionA: "ICMR",
      optionB: "DBT",
      optionC: "GEAC",
      optionD: "CSIR",
      correctOption: "C",
      explanation: "The Genetic Engineering Appraisal Committee (GEAC) under the MoEFCC approves GM organisms.",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q05",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The revolutionary precise gene-editing tool widely used in biotechnology is:",
      optionA: "PCR",
      optionB: "CRISPR-Cas9",
      optionC: "Gel electrophoresis",
      optionD: "Plasmid cloning",
      correctOption: "B",
      explanation: "CRISPR-Cas9 is a revolutionary tool for precise gene editing.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q06",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Consider the following statements:\n1. Plasmids are used as vectors to carry genes into cells.\n2. Bt cotton resists bollworm pests.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "Plasmids serve as vectors carrying genes into cells, and Bt cotton resists bollworm pests.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q07",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "The insertion, deletion or modification of genes using recombinant DNA is called:",
      optionA: "Tissue culture",
      optionB: "Genetic engineering",
      optionC: "Fermentation",
      optionD: "Hybridisation",
      correctOption: "B",
      explanation: "Genetic engineering modifies genes using recombinant DNA technology.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-biotechnology-basics-q08",
      topicId: "upsc-science-technology-biotechnology-basics",
      text: "Which of the following is commonly produced using biotechnology?",
      optionA: "Steel",
      optionB: "Cement",
      optionC: "Petroleum",
      optionD: "Insulin",
      correctOption: "D",
      explanation: "Insulin, vaccines and monoclonal antibodies are produced using biotechnology.",
      orderIndex: 7
    },
    {
      id: "upsc-science-technology-defence-technology-q01",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Defence Research and Development Organisation (DRDO) was established in:",
      optionA: "1947",
      optionB: "1958",
      optionC: "1969",
      optionD: "1974",
      correctOption: "B",
      explanation: "DRDO was established in 1958 to make India's armed forces self-reliant in technology.",
      orderIndex: 0
    },
    {
      id: "upsc-science-technology-defence-technology-q02",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Integrated Guided Missile Development Programme (IGMDP) was led by:",
      optionA: "A.P.J. Abdul Kalam",
      optionB: "Homi Bhabha",
      optionC: "Vikram Sarabhai",
      optionD: "Satish Dhawan",
      correctOption: "A",
      explanation: "Dr. A.P.J. Abdul Kalam led the IGMDP, earning the title 'Missile Man of India'.",
      orderIndex: 1
    },
    {
      id: "upsc-science-technology-defence-technology-q03",
      topicId: "upsc-science-technology-defence-technology",
      text: "Consider the following statements:\n1. BrahMos is an India-Russia joint venture cruise missile.\n2. Akash is a surface-to-air missile.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "BrahMos is an India-Russia supersonic cruise missile and Akash is a surface-to-air missile.",
      orderIndex: 2
    },
    {
      id: "upsc-science-technology-defence-technology-q04",
      topicId: "upsc-science-technology-defence-technology",
      text: "Tejas is India's indigenous:",
      optionA: "Main battle tank",
      optionB: "Light Combat Aircraft",
      optionC: "Nuclear submarine",
      optionD: "Aircraft carrier",
      correctOption: "B",
      explanation: "Tejas is India's indigenous Light Combat Aircraft (LCA).",
      orderIndex: 3
    },
    {
      id: "upsc-science-technology-defence-technology-q05",
      topicId: "upsc-science-technology-defence-technology",
      text: "INS Arihant is significant as India's:",
      optionA: "First aircraft carrier",
      optionB: "Largest destroyer",
      optionC: "First nuclear-powered submarine",
      optionD: "First frigate",
      correctOption: "C",
      explanation: "INS Arihant is India's first indigenous nuclear-powered ballistic missile submarine, completing the nuclear triad.",
      orderIndex: 4
    },
    {
      id: "upsc-science-technology-defence-technology-q06",
      topicId: "upsc-science-technology-defence-technology",
      text: "Consider the following statements:\n1. India follows a No First Use nuclear doctrine.\n2. INS Vikrant is India's first indigenous aircraft carrier.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "Neither 1 nor 2",
      optionD: "2 only",
      correctOption: "B",
      explanation: "India follows a No First Use doctrine, and INS Vikrant is its first indigenous aircraft carrier.",
      orderIndex: 5
    },
    {
      id: "upsc-science-technology-defence-technology-q07",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Agni series of missiles are classified as:",
      optionA: "Surface-to-air missiles",
      optionB: "Anti-tank missiles",
      optionC: "Surface-to-surface ballistic missiles",
      optionD: "Cruise missiles",
      correctOption: "C",
      explanation: "Agni missiles are surface-to-surface ballistic missiles.",
      orderIndex: 6
    },
    {
      id: "upsc-science-technology-defence-technology-q08",
      topicId: "upsc-science-technology-defence-technology",
      text: "The Nag missile developed by DRDO is a:",
      optionA: "Surface-to-air missile",
      optionB: "Cruise missile",
      optionC: "Intercontinental ballistic missile",
      optionD: "Anti-tank guided missile",
      correctOption: "D",
      explanation: "The Nag is an anti-tank guided missile developed under the IGMDP.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q01",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "With which country does India share its longest land border?",
      optionA: "China",
      optionB: "Pakistan",
      optionC: "Nepal",
      optionD: "Bangladesh",
      correctOption: "D",
      explanation: "India shares its longest land border with Bangladesh.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q02",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The boundary line between India and China in the eastern sector is the:",
      optionA: "Radcliffe Line",
      optionB: "McMahon Line",
      optionC: "Durand Line",
      optionD: "Line of Control",
      correctOption: "B",
      explanation: "The McMahon Line demarcates the India-China boundary in the eastern sector.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q03",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "Consider the following statements:\n1. The Chabahar Port is located in Iran.\n2. It helps India reach Afghanistan and Central Asia bypassing Pakistan.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "Both 1 and 2",
      optionC: "2 only",
      optionD: "Neither 1 nor 2",
      correctOption: "B",
      explanation: "The Chabahar Port in Iran lets India reach Afghanistan and Central Asia while bypassing Pakistan.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q04",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The 'SAGAR' doctrine relates to India's policy in which domain?",
      optionA: "Cyber security",
      optionB: "Maritime security and growth",
      optionC: "Space cooperation",
      optionD: "Trade tariffs",
      correctOption: "B",
      explanation: "SAGAR (Security and Growth for All in the Region) guides India's maritime policy in the Indian Ocean.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q05",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The Kalapani territorial dispute is between India and:",
      optionA: "China",
      optionB: "Bhutan",
      optionC: "Myanmar",
      optionD: "Nepal",
      correctOption: "D",
      explanation: "The Kalapani dispute is a boundary issue between India and Nepal.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q06",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "Consider the following statements:\n1. The Land Boundary Agreement with Bangladesh was implemented in 2015.\n2. India and China are separated by the Line of Actual Control.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The India-Bangladesh Land Boundary Agreement took effect in 2015; India and China are divided by the LAC.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q07",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "The Gujral Doctrine emphasised:",
      optionA: "Non-reciprocal accommodation of smaller neighbours",
      optionB: "Strict reciprocity with all neighbours",
      optionC: "Military alliances in South Asia",
      optionD: "Economic sanctions on rivals",
      correctOption: "A",
      explanation: "The Gujral Doctrine emphasised non-reciprocal accommodation of India's smaller neighbours.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-india-and-its-neighbours-q08",
      topicId: "upsc-international-relations-india-and-its-neighbours",
      text: "India's broad approach toward its immediate neighbours is captured by which policy?",
      optionA: "Look East Policy",
      optionB: "Indo-Pacific Strategy",
      optionC: "Connect Central Asia Policy",
      optionD: "Neighbourhood First Policy",
      correctOption: "D",
      explanation: "India's approach to its immediate neighbours is guided by the 'Neighbourhood First' policy.",
      orderIndex: 7
    },
    {
      id: "upsc-international-relations-major-global-groupings-q01",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Which countries make up the QUAD grouping?",
      optionA: "India, US, UK, France",
      optionB: "India, China, Russia, Brazil",
      optionC: "India, US, Japan, Australia",
      optionD: "India, Japan, Israel, UAE",
      correctOption: "C",
      explanation: "The QUAD comprises India, the United States, Japan and Australia.",
      orderIndex: 0
    },
    {
      id: "upsc-international-relations-major-global-groupings-q02",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The New Development Bank (NDB) of BRICS is headquartered in:",
      optionA: "Shanghai",
      optionB: "New Delhi",
      optionC: "Moscow",
      optionD: "Johannesburg",
      correctOption: "A",
      explanation: "The BRICS New Development Bank is headquartered in Shanghai.",
      orderIndex: 1
    },
    {
      id: "upsc-international-relations-major-global-groupings-q03",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements:\n1. SAARC was established in 1985 with its secretariat at Kathmandu.\n2. ASEAN is central to India's Act East policy.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "SAARC was set up in 1985 with its secretariat in Kathmandu; ASEAN anchors India's Act East policy.",
      orderIndex: 2
    },
    {
      id: "upsc-international-relations-major-global-groupings-q04",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The I2U2 grouping comprises India, Israel, the USA and:",
      optionA: "Saudi Arabia",
      optionB: "Qatar",
      optionC: "Egypt",
      optionD: "The United Arab Emirates",
      correctOption: "D",
      explanation: "I2U2 groups India, Israel, the United Arab Emirates and the United States.",
      orderIndex: 3
    },
    {
      id: "upsc-international-relations-major-global-groupings-q05",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "India hosted the G20 summit in which year?",
      optionA: "2021",
      optionB: "2023",
      optionC: "2022",
      optionD: "2024",
      correctOption: "B",
      explanation: "India hosted the G20 summit in 2023.",
      orderIndex: 4
    },
    {
      id: "upsc-international-relations-major-global-groupings-q06",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements:\n1. India is a member of the MTCR.\n2. India is a member of the Nuclear Suppliers Group (NSG).\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "C",
      explanation: "India is a member of the MTCR but is not yet a member of the Nuclear Suppliers Group.",
      orderIndex: 5
    },
    {
      id: "upsc-international-relations-major-global-groupings-q07",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "The grouping linking the countries around the Bay of Bengal is:",
      optionA: "SAARC",
      optionB: "BIMSTEC",
      optionC: "ASEAN",
      optionD: "SCO",
      correctOption: "B",
      explanation: "BIMSTEC links South Asian and Southeast Asian nations around the Bay of Bengal.",
      orderIndex: 6
    },
    {
      id: "upsc-international-relations-major-global-groupings-q08",
      topicId: "upsc-international-relations-major-global-groupings",
      text: "Consider the following statements about India's global standing:\n1. India is a founding member of the United Nations (1945).\n2. India is a permanent member of the UN Security Council.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Both 1 and 2",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "India is a founding UN member of 1945 but is not a permanent member of the Security Council.",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q01",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Human Development Index (HDI) is published by which organisation?",
      optionA: "World Bank",
      optionB: "IMF",
      optionC: "WEF",
      optionD: "UNDP",
      correctOption: "D",
      explanation: "The HDI is published annually by the United Nations Development Programme (UNDP).",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q02",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Global Innovation Index is released by:",
      optionA: "UNESCO",
      optionB: "WTO",
      optionC: "WHO",
      optionD: "WIPO",
      correctOption: "D",
      explanation: "The Global Innovation Index is released by the World Intellectual Property Organization (WIPO).",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q03",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "Consider the following statements:\n1. NITI Aayog replaced the Planning Commission in 2015.\n2. The HDI combines life expectancy, education and per capita income.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "1 only",
      optionD: "Neither 1 nor 2",
      correctOption: "A",
      explanation: "NITI Aayog replaced the Planning Commission in 2015; the HDI combines longevity, education and income.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q04",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The 'World Economic Outlook' is published by which institution?",
      optionA: "World Bank",
      optionB: "OECD",
      optionC: "WEF",
      optionD: "IMF",
      correctOption: "D",
      explanation: "The International Monetary Fund (IMF) publishes the World Economic Outlook.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q05",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The Global Gender Gap Report is released by the:",
      optionA: "World Economic Forum",
      optionB: "World Bank",
      optionC: "UNDP",
      optionD: "WHO",
      correctOption: "A",
      explanation: "The World Economic Forum (WEF) releases the Global Gender Gap Report.",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q06",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "Consider the following statements:\n1. The Multidimensional Poverty Index is published jointly by UNDP and OPHI.\n2. The Environmental Performance Index is released by Yale and Columbia universities.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The MPI is published by UNDP and OPHI; the EPI is released by Yale and Columbia universities.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q07",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The World Development Report is published by:",
      optionA: "The IMF",
      optionB: "The UNDP",
      optionC: "The WTO",
      optionD: "The World Bank",
      correctOption: "D",
      explanation: "The World Bank publishes the World Development Report.",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-key-institutions-and-indices-q08",
      topicId: "upsc-current-affairs-key-institutions-and-indices",
      text: "The World Happiness Report is published under the auspices of the:",
      optionA: "WHO",
      optionB: "World Bank",
      optionC: "Sustainable Development Solutions Network (SDSN)",
      optionD: "OECD",
      correctOption: "C",
      explanation: "The World Happiness Report is released by the UN's Sustainable Development Solutions Network (SDSN).",
      orderIndex: 7
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q01",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Anti-defection disqualifications are decided by whom under the Tenth Schedule?",
      optionA: "The President",
      optionB: "The Presiding Officer of the House",
      optionC: "The Supreme Court",
      optionD: "The Election Commission",
      correctOption: "B",
      explanation: "Under the Tenth Schedule, the Presiding Officer of the House decides anti-defection disqualifications.",
      orderIndex: 0
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q02",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "The Securities and Exchange Board of India (SEBI) was established in:",
      optionA: "1988",
      optionB: "1991",
      optionC: "1992",
      optionD: "2000",
      correctOption: "C",
      explanation: "SEBI was given statutory status in 1992 to regulate securities markets and protect investors.",
      orderIndex: 1
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q03",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Consider the following statements:\n1. The classification of a Money Bill is certified by the Speaker.\n2. The Speaker's decision on a Money Bill is final.\nWhich is/are correct?",
      optionA: "1 only",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "Both 1 and 2",
      correctOption: "D",
      explanation: "The Speaker certifies a bill as a Money Bill under Article 110, and that decision is final.",
      orderIndex: 2
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q04",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "A Governor's options on a bill under Article 200 include assent, withholding assent and:",
      optionA: "Dissolving the assembly",
      optionB: "Amending it directly",
      optionC: "Reserving it for the President",
      optionD: "Issuing an ordinance",
      correctOption: "C",
      explanation: "Under Article 200 a Governor may assent, withhold assent, or reserve a bill for the President's consideration.",
      orderIndex: 3
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q05",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Disinvestment of public sector undertakings is managed by which body?",
      optionA: "DIPAM",
      optionB: "RBI",
      optionC: "SEBI",
      optionD: "NITI Aayog",
      correctOption: "A",
      explanation: "Disinvestment is managed by DIPAM (Department of Investment and Public Asset Management).",
      orderIndex: 4
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q06",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Consider the following statements:\n1. The Election Commission conducts elections under Article 324.\n2. The CAG audits and reports to Parliament under Article 148.\nWhich is/are correct?",
      optionA: "Both 1 and 2",
      optionB: "2 only",
      optionC: "Neither 1 nor 2",
      optionD: "1 only",
      correctOption: "A",
      explanation: "The Election Commission acts under Article 324 and the CAG audits and reports under Article 148.",
      orderIndex: 5
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q07",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Inflation targeting in India is carried out by which body?",
      optionA: "The Finance Commission",
      optionB: "The Monetary Policy Committee of the RBI",
      optionC: "The GST Council",
      optionD: "SEBI",
      correctOption: "B",
      explanation: "Inflation targeting is handled by the RBI's Monetary Policy Committee (MPC).",
      orderIndex: 6
    },
    {
      id: "upsc-current-affairs-polity-and-economy-in-the-news-q08",
      topicId: "upsc-current-affairs-polity-and-economy-in-the-news",
      text: "Fiscal transfers between the Centre and the States are recommended by the:",
      optionA: "GST Council",
      optionB: "Finance Commission",
      optionC: "NITI Aayog",
      optionD: "RBI",
      correctOption: "B",
      explanation: "The Finance Commission recommends fiscal transfers and tax devolution between the Centre and the States.",
      orderIndex: 7
    }
  ]
});
