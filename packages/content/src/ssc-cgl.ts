import { defineBundle } from "./builder";

export const sscCgl = defineBundle({
  exam: {
    id: "ssc-cgl",
    slug: "ssc-cgl",
    name: "SSC CGL",
    tagline: "Quant · Reasoning · English · General Awareness",
    orderIndex: 3
  },
  subjects: [
    { id: "ssc-cgl-quant", examId: "ssc-cgl", name: "Quantitative Aptitude", slug: "quant", orderIndex: 0 },
    { id: "ssc-cgl-reasoning", examId: "ssc-cgl", name: "Reasoning", slug: "reasoning", orderIndex: 1 },
    { id: "ssc-cgl-english", examId: "ssc-cgl", name: "English", slug: "english", orderIndex: 2 },
    { id: "ssc-cgl-general-awareness", examId: "ssc-cgl", name: "General Awareness", slug: "general-awareness", orderIndex: 3 }
  ],
  topics: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss",
      subjectId: "ssc-cgl-quant",
      name: "Percentages & Profit-Loss",
      slug: "percentages-profit-loss",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance",
      subjectId: "ssc-cgl-quant",
      name: "Time, Speed & Distance",
      slug: "time-speed-distance",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series",
      subjectId: "ssc-cgl-reasoning",
      name: "Coding-Decoding & Series",
      slug: "coding-decoding-series",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word",
      subjectId: "ssc-cgl-english",
      name: "Idioms & One-Word Substitution",
      slug: "idioms-one-word",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts",
      subjectId: "ssc-cgl-general-awareness",
      name: "Indian Polity Quick Facts",
      slug: "indian-polity-facts",
      orderIndex: 0
    }
  ],
  materials: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss-m01",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      title: "Percentages, Profit & Loss",
      content: `**Percentage** means "per hundred". Mastering fraction equivalents turns slow calculations into mental math.

## Must-Know Fraction Equivalents
| Fraction | Percent |
| --- | --- |
| 1/2 | 50% |
| 1/4 | 25% |
| 1/5 | 20% |
| 1/8 | 12.5% |
| 1/3 | 33.33% |

## Successive Percentage Change
For two successive changes of **a%** and **b%**, the net change is:

\`\`\`
Net% = a + b + (a*b)/100
\`\`\`

For example, a 10% rise then a 10% fall gives 10 − 10 − 100/100 = **−1%** (a net loss).

## Profit & Loss
- **Profit% = (Profit / CP) × 100**, always on the **Cost Price**.
- **SP = CP × (100 + Profit%) / 100**.
- **Discount** is calculated on the **Marked Price**, not the cost.

| Quantity | Formula |
| --- | --- |
| Profit | SP − CP |
| Loss | CP − SP |
| Profit% | (SP − CP)/CP × 100 |

### Shortcuts
- If an article is sold at **x% profit** and **y% loss** gives the same SP, the relation links both cost prices.
- Selling two items at the same SP, one at **+x%** and one at **−x%**, always gives a **net loss of (x/10)²%**.
- **Marked price → discount → SP**: SP = MP × (100 − discount%)/100.

### Population/Growth
- A quantity changing by r% per year for n years becomes **P(1 + r/100)ⁿ**, the compound-growth form.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-m01",
      topicId: "ssc-cgl-quant-time-speed-distance",
      title: "Time, Speed & Distance",
      content: `**Speed = Distance / Time.** Almost every TSD problem is a rearrangement of this single relation.

## Core Formulae
\`\`\`
Distance = Speed * Time
Speed    = Distance / Time
1 km/h   = 5/18 m/s
1 m/s    = 18/5 km/h
\`\`\`

## Average Speed
- For equal **distances** at speeds u and v, average speed = **2uv / (u + v)** (the harmonic mean).
- For equal **times**, average speed is the simple mean (u + v)/2.

## Relative Speed
| Case | Relative speed |
| --- | --- |
| Same direction | difference of speeds |
| Opposite direction | sum of speeds |

## Trains
- Time to cross a **pole** = (train length) / speed.
- Time to cross a **platform** = (train length + platform length) / speed.

### Boats & Streams
- **Downstream speed** = boat speed + stream speed.
- **Upstream speed** = boat speed − stream speed.
- Boat speed = (down + up)/2; stream speed = (down − up)/2.

### Key Tips
- If speed and time are **inversely proportional** for a fixed distance, then doubling speed halves the time.
- A common trap: average speed is **never** the simple average of two speeds over equal distances — use the harmonic mean.
- Convert units first: to find time in seconds, keep speed in m/s and distance in metres.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-m01",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      title: "Coding-Decoding & Series",
      content: `**Coding-Decoding** tests pattern recognition by substituting letters or numbers using a hidden rule.

## Letter Positions
Memorise these anchor positions to decode shifts quickly:

| Letter | Position |
| --- | --- |
| A | 1 |
| E | 5 |
| J | 10 |
| O | 15 |
| T | 20 |
| Z | 26 |

The **EJOTY** trick (E-5, J-10, O-15, T-20, Y-25) lets you locate any letter in seconds.

## Common Coding Types
- **Letter-shift coding** — each letter moves forward/backward by a fixed number (e.g. +1: CAT → DBU).
- **Reverse / opposite coding** — A↔Z, B↔Y... (the *position from the other end* is 27 − n).
- **Number coding** — letters replaced by their positional value.
- **Symbol/substitution coding** — words swapped wholesale.

## Number & Letter Series
- Look for differences (arithmetic), ratios (geometric), squares/cubes, or alternating patterns.
- **Example:** 2, 6, 12, 20, 30 → differences 4, 6, 8, 10 (i.e. n² + n).
- **Fibonacci-type:** each term is the sum of the previous two (1, 1, 2, 3, 5, 8...).

### Strategy
- First check the **difference between consecutive terms**; if not constant, check the difference of differences or a multiplicative rule.
- For mixed series, separate alternate terms into two sub-series.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word-m01",
      topicId: "ssc-cgl-english-idioms-one-word",
      title: "Idioms & One-Word Substitution",
      content: `**Idioms** carry a figurative meaning beyond their literal words, and **one-word substitutions** compress a phrase into a single precise term. Both are scoring areas in SSC English.

## High-Frequency Idioms
| Idiom | Meaning |
| --- | --- |
| To bite the dust | To be defeated / die |
| A blessing in disguise | A hidden benefit |
| To let the cat out of the bag | To reveal a secret |
| Once in a blue moon | Very rarely |
| To turn a blind eye | To deliberately ignore |
| To burn the midnight oil | To work late into the night |

## Common One-Word Substitutions
| Phrase | Word |
| --- | --- |
| One who eats everything | **Omnivore** |
| A person who hates mankind | **Misanthrope** |
| Words written on a tomb | **Epitaph** |
| One who walks on a rope | **Funambulist** |
| Study of birds | **Ornithology** |
| A government by the wealthy | **Plutocracy** |

### Quick Tips
- Watch the **root**: *-cide* (killing), *-phobia* (fear), *-cracy* (rule), *-vorous* (eating), *-logy* (study).
- For idioms, never read literally — pick the figurative option (e.g. "at the eleventh hour" means **at the last moment**, not 11 o'clock).
- A person who **cannot read or write** is *illiterate*; one **indifferent to pleasure or pain** is *stoic*.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-m01",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      title: "Indian Polity — Quick Facts",
      content: `**Indian Polity** is a guaranteed GA scorer. These crisp facts repeat year after year in SSC papers.

## The Constitution
- **Adopted:** 26 November 1949; **came into force:** 26 January 1950.
- **Drafting Committee Chairman:** Dr. **B.R. Ambedkar**.
- It originally had **395 Articles, 22 Parts and 8 Schedules**; now over 470 Articles and **12 Schedules**.
- Borrowed features: **Parliamentary system** (UK), **Fundamental Rights** (USA), **Directive Principles** (Ireland), **Emergency** (Germany).

## Key Office-Holders & Articles
| Office | Article |
| --- | --- |
| President | 52 |
| Vice-President | 63 |
| Prime Minister | 75 |
| Comptroller & Auditor General | 148 |
| Attorney General | 76 |

## Amendments & Schedules
- The **42nd Amendment (1976)** is the "Mini-Constitution"; it added the words **Socialist, Secular** and **Integrity** to the Preamble.
- **Fundamental Duties** (Article 51A) were added on the recommendation of the **Swaran Singh Committee**.
- The **Eighth Schedule** lists the **22 official languages**.

### Elections & Bodies
- The **Election Commission** (Article 324) is a multi-member constitutional body.
- A **President** is elected by an electoral college using the **single transferable vote** and proportional representation.
- The **Finance Commission** (Article 280) is constituted every **five years** to recommend tax-revenue sharing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q01",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A price is increased by 20% and then decreased by 20%. The net change is:",
      optionA: "0%",
      optionB: "+4%",
      optionC: "−4%",
      optionD: "−2%",
      correctOption: "C",
      explanation: "Net% = 20 − 20 − (400/100) = −4%, a net decrease.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q02",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "An article bought for ₹400 is sold for ₹500. The profit percentage is:",
      optionA: "25%",
      optionB: "20%",
      optionC: "30%",
      optionD: "40%",
      correctOption: "A",
      explanation: "Profit% = (100/400) × 100 = 25%.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q03",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "What is 35% of 240?",
      optionA: "84",
      optionB: "80",
      optionC: "74",
      optionD: "96",
      correctOption: "A",
      explanation: "35% of 240 = 0.35 × 240 = 84.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q04",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "Two items are sold at the same price, one at 10% profit and one at 10% loss. The overall result is:",
      optionA: "No profit, no loss",
      optionB: "1% profit",
      optionC: "1% loss",
      optionD: "2% loss",
      correctOption: "C",
      explanation: "Selling at equal SP with ±x% gives a loss of (x/10)² = (10/10)² = 1%.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q05",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A shopkeeper marks an item at ₹800 and gives a 15% discount. The selling price is:",
      optionA: "₹640",
      optionB: "₹700",
      optionC: "₹680",
      optionD: "₹720",
      correctOption: "C",
      explanation: "SP = 800 × (85/100) = ₹680.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q06",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "If 60 is what percent of 150?",
      optionA: "40%",
      optionB: "25%",
      optionC: "45%",
      optionD: "50%",
      correctOption: "A",
      explanation: "(60/150) × 100 = 40%.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q07",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "By selling a pen for ₹54, a man loses 10%. The cost price was:",
      optionA: "₹58",
      optionB: "₹60",
      optionC: "₹62",
      optionD: "₹64",
      correctOption: "B",
      explanation: "CP = 54 / 0.90 = ₹60.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-percentages-profit-loss-q08",
      topicId: "ssc-cgl-quant-percentages-profit-loss",
      text: "A number increased by 25% becomes 250. The original number is:",
      optionA: "180",
      optionB: "200",
      optionC: "210",
      optionD: "225",
      correctOption: "B",
      explanation: "Original = 250 / 1.25 = 200.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q01",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A car covers 180 km in 3 hours. Its speed is:",
      optionA: "50 km/h",
      optionB: "70 km/h",
      optionC: "60 km/h",
      optionD: "90 km/h",
      correctOption: "C",
      explanation: "Speed = 180/3 = 60 km/h.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q02",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "Convert 72 km/h into m/s:",
      optionA: "20 m/s",
      optionB: "18 m/s",
      optionC: "15 m/s",
      optionD: "25 m/s",
      correctOption: "A",
      explanation: "72 × 5/18 = 20 m/s.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q03",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A man covers equal distances at 30 km/h and 60 km/h. His average speed is:",
      optionA: "48 km/h",
      optionB: "45 km/h",
      optionC: "40 km/h",
      optionD: "50 km/h",
      correctOption: "C",
      explanation: "Average = 2uv/(u+v) = 2(30)(60)/90 = 40 km/h.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q04",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "Two trains move towards each other at 40 km/h and 50 km/h. Their relative speed is:",
      optionA: "90 km/h",
      optionB: "45 km/h",
      optionC: "10 km/h",
      optionD: "100 km/h",
      correctOption: "A",
      explanation: "For opposite directions, relative speed is the sum: 40 + 50 = 90 km/h.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q05",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A 150 m long train running at 20 m/s crosses a pole in:",
      optionA: "5 s",
      optionB: "10 s",
      optionC: "7.5 s",
      optionD: "12 s",
      correctOption: "C",
      explanation: "Time = length/speed = 150/20 = 7.5 s.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q06",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A boat goes 12 km/h downstream and 8 km/h upstream. The speed of the stream is:",
      optionA: "2 km/h",
      optionB: "4 km/h",
      optionC: "6 km/h",
      optionD: "10 km/h",
      correctOption: "A",
      explanation: "Stream speed = (down − up)/2 = (12 − 8)/2 = 2 km/h.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q07",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "If a journey of 240 km takes 4 hours, how long will 360 km take at the same speed?",
      optionA: "6 hours",
      optionB: "5 hours",
      optionC: "7 hours",
      optionD: "8 hours",
      correctOption: "A",
      explanation: "Speed = 60 km/h, so 360/60 = 6 hours.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-quant-time-speed-distance-q08",
      topicId: "ssc-cgl-quant-time-speed-distance",
      text: "A 120 m train at 15 m/s crosses a 180 m platform in:",
      optionA: "15 s",
      optionB: "18 s",
      optionC: "24 s",
      optionD: "20 s",
      correctOption: "D",
      explanation: "Time = (120 + 180)/15 = 300/15 = 20 s.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q01",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "If CAT is coded as DBU, then DOG is coded as:",
      optionA: "FPH",
      optionB: "EPF",
      optionC: "EPH",
      optionD: "CPH",
      correctOption: "C",
      explanation: "Each letter shifts forward by one: D→E, O→P, G→H.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q02",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the next term: 2, 6, 12, 20, 30, ?",
      optionA: "42",
      optionB: "40",
      optionC: "44",
      optionD: "36",
      correctOption: "A",
      explanation: "Differences are 4, 6, 8, 10, then 12; 30 + 12 = 42.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q03",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "What is the position of the letter T in the English alphabet?",
      optionA: "20",
      optionB: "19",
      optionC: "18",
      optionD: "21",
      correctOption: "A",
      explanation: "Using EJOTY, T is the 20th letter.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q04",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Complete the series: 1, 1, 2, 3, 5, 8, ?",
      optionA: "11",
      optionB: "13",
      optionC: "12",
      optionD: "15",
      correctOption: "B",
      explanation: "Fibonacci: each term is the sum of the two before it; 5 + 8 = 13.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q05",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "In a code, A is written as Z, B as Y, C as X. How is D written?",
      optionA: "U",
      optionB: "V",
      optionC: "X",
      optionD: "W",
      correctOption: "D",
      explanation: "Opposite coding: each letter maps to 27 − n, so D (4) → 23 → W.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q06",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the missing term: 3, 9, 27, 81, ?",
      optionA: "162",
      optionB: "210",
      optionC: "243",
      optionD: "324",
      correctOption: "C",
      explanation: "Each term is multiplied by 3; 81 × 3 = 243.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q07",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "If 5 is coded as 36 and 6 as 49, then 7 is coded as:",
      optionA: "56",
      optionB: "63",
      optionC: "81",
      optionD: "64",
      correctOption: "D",
      explanation: "The code is (n + 1)²; (7 + 1)² = 64.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-reasoning-coding-decoding-series-q08",
      topicId: "ssc-cgl-reasoning-coding-decoding-series",
      text: "Find the odd one in the number series: 4, 9, 16, 25, 35, 49",
      optionA: "16",
      optionB: "25",
      optionC: "35",
      optionD: "49",
      correctOption: "C",
      explanation: "All are perfect squares except 35 (36 would fit the pattern).",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q01",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "The idiom 'to let the cat out of the bag' means:",
      optionA: "To buy a pet",
      optionB: "To take a risk",
      optionC: "To run away",
      optionD: "To reveal a secret",
      correctOption: "D",
      explanation: "It means to disclose a secret, usually by accident.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q02",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who studies birds' is:",
      optionA: "Botanist",
      optionB: "Ornithologist",
      optionC: "Zoologist",
      optionD: "Entomologist",
      correctOption: "B",
      explanation: "Ornithology is the study of birds, so the practitioner is an ornithologist.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q03",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "The idiom 'a blessing in disguise' means:",
      optionA: "A hidden danger",
      optionB: "An obvious gift",
      optionC: "A bad omen",
      optionD: "A good thing that seemed bad at first",
      correctOption: "D",
      explanation: "It refers to something that turns out beneficial despite seeming unfortunate initially.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q04",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'words inscribed on a tomb' is:",
      optionA: "Epithet",
      optionB: "Epigram",
      optionC: "Epilogue",
      optionD: "Epitaph",
      correctOption: "D",
      explanation: "An epitaph is the inscription on a gravestone or tomb.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q05",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "'Once in a blue moon' means an event that happens:",
      optionA: "Very often",
      optionB: "Every month",
      optionC: "At night only",
      optionD: "Very rarely",
      correctOption: "D",
      explanation: "The idiom denotes something happening extremely rarely.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q06",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who hates mankind' is:",
      optionA: "Philanthropist",
      optionB: "Egotist",
      optionC: "Misogynist",
      optionD: "Misanthrope",
      correctOption: "D",
      explanation: "A misanthrope dislikes or distrusts humankind; a philanthropist loves it.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q07",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "To 'burn the midnight oil' means to:",
      optionA: "Waste resources",
      optionB: "Work late into the night",
      optionC: "Start a fire",
      optionD: "Sleep early",
      correctOption: "B",
      explanation: "The idiom describes studying or working late into the night.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-english-idioms-one-word-q08",
      topicId: "ssc-cgl-english-idioms-one-word",
      text: "One word for 'a person who walks on a tightrope' is:",
      optionA: "Acrobat",
      optionB: "Equestrian",
      optionC: "Somnambulist",
      optionD: "Funambulist",
      correctOption: "D",
      explanation: "A funambulist is a tightrope walker; a somnambulist is a sleepwalker.",
      orderIndex: 7
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q01",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Indian Constitution came into force on:",
      optionA: "15 August 1947",
      optionB: "26 January 1950",
      optionC: "26 November 1949",
      optionD: "2 October 1950",
      correctOption: "B",
      explanation: "Though adopted on 26 November 1949, it came into force on 26 January 1950.",
      orderIndex: 0
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q02",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "Who was the Chairman of the Drafting Committee of the Constitution?",
      optionA: "Jawaharlal Nehru",
      optionB: "Rajendra Prasad",
      optionC: "Sardar Patel",
      optionD: "B.R. Ambedkar",
      correctOption: "D",
      explanation: "Dr. B.R. Ambedkar chaired the Drafting Committee of the Constituent Assembly.",
      orderIndex: 1
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q03",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Fundamental Duties were added to the Constitution by which amendment?",
      optionA: "44th Amendment",
      optionB: "42nd Amendment",
      optionC: "52nd Amendment",
      optionD: "73rd Amendment",
      correctOption: "B",
      explanation: "The 42nd Amendment (1976) added the Fundamental Duties under Article 51A.",
      orderIndex: 2
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q04",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "Which Article of the Constitution deals with the office of the President?",
      optionA: "Article 52",
      optionB: "Article 63",
      optionC: "Article 75",
      optionD: "Article 76",
      correctOption: "A",
      explanation: "Article 52 establishes the office of the President of India.",
      orderIndex: 3
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q05",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Eighth Schedule of the Constitution deals with:",
      optionA: "Anti-defection",
      optionB: "Official languages",
      optionC: "Union and State lists",
      optionD: "Panchayats",
      correctOption: "B",
      explanation: "The Eighth Schedule lists the recognised official languages, now 22 in number.",
      orderIndex: 4
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q06",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The concept of Directive Principles of State Policy was borrowed from:",
      optionA: "The USA",
      optionB: "Ireland",
      optionC: "The UK",
      optionD: "Canada",
      correctOption: "B",
      explanation: "India adopted the Directive Principles from the Irish Constitution.",
      orderIndex: 5
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q07",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The Finance Commission is constituted under which Article and at what interval?",
      optionA: "Article 324, every 6 years",
      optionB: "Article 280, every 5 years",
      optionC: "Article 148, annually",
      optionD: "Article 280, every 10 years",
      correctOption: "B",
      explanation: "Article 280 provides for a Finance Commission constituted every five years.",
      orderIndex: 6
    },
    {
      id: "ssc-cgl-general-awareness-indian-polity-facts-q08",
      topicId: "ssc-cgl-general-awareness-indian-polity-facts",
      text: "The 42nd Amendment (1976) added which words to the Preamble?",
      optionA: "Sovereign and Republic",
      optionB: "Democratic and Justice",
      optionC: "Socialist, Secular and Integrity",
      optionD: "Liberty and Equality",
      correctOption: "C",
      explanation: "The 42nd Amendment inserted 'Socialist', 'Secular' and 'Integrity' into the Preamble.",
      orderIndex: 7
    }
  ]
});
