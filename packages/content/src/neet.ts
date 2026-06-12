import { defineBundle } from "./builder";

export const neet = defineBundle({
  exam: {
    id: "neet",
    slug: "neet",
    name: "NEET UG",
    tagline: "Biology · Chemistry · Physics for medical aspirants",
    orderIndex: 2
  },
  subjects: [
    { id: "neet-biology", examId: "neet", name: "Biology", slug: "biology", orderIndex: 0 },
    { id: "neet-chemistry", examId: "neet", name: "Chemistry", slug: "chemistry", orderIndex: 1 },
    { id: "neet-physics", examId: "neet", name: "Physics", slug: "physics", orderIndex: 2 }
  ],
  topics: [
    {
      id: "neet-biology-cell-structure-function",
      subjectId: "neet-biology",
      name: "Cell: Structure & Function",
      slug: "cell-structure-function",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion",
      subjectId: "neet-biology",
      name: "Human Physiology — Digestion",
      slug: "human-physiology-digestion",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-organic-chemistry-basics",
      subjectId: "neet-chemistry",
      name: "Organic Chemistry Basics (GOC)",
      slug: "organic-chemistry-basics",
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics",
      subjectId: "neet-physics",
      name: "Ray Optics",
      slug: "ray-optics",
      orderIndex: 0
    }
  ],
  materials: [
    {
      id: "neet-biology-cell-structure-function-m01",
      topicId: "neet-biology-cell-structure-function",
      title: "The Cell — Structure & Function",
      content: `**The cell** is the basic structural and functional unit of life. The **Cell Theory** (Schleiden, Schwann; extended by Virchow's *Omnis cellula e cellula*) states all living things are made of cells and all cells arise from pre-existing cells.

## Prokaryotic vs Eukaryotic
| Feature | Prokaryote | Eukaryote |
| --- | --- | --- |
| Nucleus | Absent (nucleoid) | True, membrane-bound |
| Ribosome | 70S | 80S (cytoplasm) |
| Membrane organelles | Absent | Present |
| Example | Bacteria | Plant, animal cells |

## Key Organelles
- **Mitochondrion** — the "**powerhouse**"; site of aerobic respiration and ATP synthesis; has its own circular DNA.
- **Chloroplast** — site of photosynthesis in plants; contains **chlorophyll** and thylakoids.
- **Endoplasmic reticulum** — RER (with ribosomes) makes proteins; SER makes lipids.
- **Golgi apparatus** — packaging and secretion.
- **Lysosomes** — the "**suicide bags**", rich in hydrolytic enzymes.
- **Ribosomes** — site of protein synthesis; the **70S** type also occurs in mitochondria and chloroplasts.

### The Nucleus
- Bounded by a double **nuclear envelope** with pores; contains **chromatin** and the **nucleolus** (rRNA synthesis).

### Plant vs Animal Cell
- Plant cells uniquely have a **cellulose cell wall**, large central **vacuole** and **chloroplasts**.
- Animal cells have **centrioles** (forming the spindle) and lysosomes are more prominent.

**Fluid-mosaic model** (Singer and Nicolson) describes the plasma membrane as a lipid bilayer with embedded mobile proteins.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion-m01",
      topicId: "neet-biology-human-physiology-digestion",
      title: "Human Digestion",
      content: `**Digestion** breaks complex food into absorbable molecules along the **alimentary canal**: mouth → oesophagus → stomach → small intestine → large intestine.

## Enzymes & Their Action
| Enzyme | Source | Substrate → Product |
| --- | --- | --- |
| Salivary amylase (ptyalin) | Saliva | Starch → maltose |
| Pepsin | Stomach (gastric) | Proteins → peptides |
| Trypsin | Pancreas | Proteins → peptides |
| Lipase | Pancreas | Fats → fatty acids + glycerol |

- **Pepsin** is secreted as inactive **pepsinogen**, activated by **HCl** at a low pH (~1.8).
- **Bile** from the liver (stored in the gall bladder) **emulsifies fats** but contains no enzymes.

## Absorption
- The bulk of absorption occurs in the **small intestine**, whose surface is amplified by **villi** and **microvilli**.
- The **large intestine** mainly absorbs **water** and electrolytes; it secretes no digestive enzymes.

### Key Facts
- The **liver** is the largest gland in the body; it produces bile and stores glycogen.
- **Intrinsic factor** secreted by the stomach is essential for the absorption of **vitamin B₁₂**.
- Hormones **gastrin** (stomach) and **secretin/CCK** (duodenum) regulate secretion.

### Dental Formula
- The adult human dental formula is **2123/2123**, giving a total of **32 teeth**.
- Teeth are **thecodont** (set in sockets), **diphyodont** (two sets) and **heterodont** (four types).`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-m01",
      topicId: "neet-chemistry-organic-chemistry-basics",
      title: "General Organic Chemistry (GOC)",
      content: `**GOC** provides the electronic logic behind organic reactions: how electrons move, why intermediates form, and which products dominate.

## Electronic Effects
- **Inductive effect (−I/+I)** — permanent σ-bond polarisation; **−I** groups (−NO₂, −CN, halogens) withdraw electrons.
- **Resonance/mesomeric effect (±M)** — delocalisation through π-systems; **−M** groups (−NO₂, −C=O) withdraw, **+M** groups (−OH, −NH₂) donate.
- **Hyperconjugation** — delocalisation of σ(C–H) electrons; stabilises carbocations and alkenes (the more α-hydrogens, the more stable).

## Reaction Intermediates
| Intermediate | Hybridisation | Stability order |
| --- | --- | --- |
| Carbocation | sp² | 3° > 2° > 1° > methyl |
| Carbanion | sp³ | methyl > 1° > 2° > 3° |
| Free radical | sp² | 3° > 2° > 1° |

## Acidity & Basicity
- **Carboxylic acids** are more acidic than phenols, which are more acidic than alcohols.
- **Electron-withdrawing groups increase acidity** (stabilise the conjugate base); electron-donating groups decrease it.

### Reaction Types
- **Substitution, Addition, Elimination** and **Rearrangement** are the four basic patterns.
- **Electrophiles** are electron-poor (accept pairs); **nucleophiles** are electron-rich (donate pairs).

### Isomerism
- **Structural** (chain, position, functional) and **stereoisomerism** (geometrical cis–trans, optical R/S) — a chiral centre has four different groups.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics-m01",
      topicId: "neet-physics-ray-optics",
      title: "Ray Optics",
      content: `**Ray optics** treats light as straight-line rays and explains reflection, refraction, mirrors and lenses.

## Mirror & Lens Formula
\`\`\`
1/v + 1/u = 1/f        (mirrors, sign convention)
1/v - 1/u = 1/f        (lenses)
Magnification m = v/u  (mirror),  m = v/u (lens)
\`\`\`

- Use the **Cartesian sign convention**: distances measured against the incident light are negative.
- **Focal length** f = R/2 for a spherical mirror.

## Refraction
- **Snell's law**: n₁ sin i = n₂ sin r, where **refractive index** n = c/v.
- **Total internal reflection** occurs when light goes from a denser to a rarer medium beyond the **critical angle** θ_c, with sin θ_c = 1/n. This underlies **optical fibres** and mirages.

| Element | Nature | f sign |
| --- | --- | --- |
| Concave mirror | Converging | negative |
| Convex mirror | Diverging | positive |
| Convex lens | Converging | positive |
| Concave lens | Diverging | negative |

## Lens Power & Combinations
- **Power** P = 1/f (in metres), measured in **dioptres (D)**.
- For thin lenses in contact: **P = P₁ + P₂**.

### Lensmaker's Formula
\`\`\`
1/f = (n - 1)(1/R1 - 1/R2)
\`\`\`

### Dispersion
- A prism splits white light because **refractive index depends on wavelength** — violet bends most, red least.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "neet-biology-cell-structure-function-q01",
      topicId: "neet-biology-cell-structure-function",
      text: "Which organelle is known as the 'powerhouse of the cell'?",
      optionA: "Ribosome",
      optionB: "Mitochondrion",
      optionC: "Golgi apparatus",
      optionD: "Lysosome",
      correctOption: "B",
      explanation: "Mitochondria generate most cellular ATP through aerobic respiration.",
      orderIndex: 0
    },
    {
      id: "neet-biology-cell-structure-function-q02",
      topicId: "neet-biology-cell-structure-function",
      text: "Ribosomes found in the cytoplasm of eukaryotic cells are of the type:",
      optionA: "80S",
      optionB: "70S",
      optionC: "50S",
      optionD: "30S",
      correctOption: "A",
      explanation: "Eukaryotic cytoplasmic ribosomes are 80S; the 70S type occurs in mitochondria and chloroplasts.",
      orderIndex: 1
    },
    {
      id: "neet-biology-cell-structure-function-q03",
      topicId: "neet-biology-cell-structure-function",
      text: "Which structure is present in plant cells but absent in animal cells?",
      optionA: "Mitochondrion",
      optionB: "Nucleus",
      optionC: "Cellulose cell wall",
      optionD: "Ribosome",
      correctOption: "C",
      explanation: "A rigid cellulose cell wall surrounds plant cells but is absent in animal cells.",
      orderIndex: 2
    },
    {
      id: "neet-biology-cell-structure-function-q04",
      topicId: "neet-biology-cell-structure-function",
      text: "Lysosomes are often called the 'suicide bags' because they contain:",
      optionA: "Photosynthetic pigments",
      optionB: "DNA",
      optionC: "Hydrolytic enzymes",
      optionD: "Ribosomes",
      correctOption: "C",
      explanation: "Lysosomes are packed with hydrolytic enzymes that can digest the cell's own components.",
      orderIndex: 3
    },
    {
      id: "neet-biology-cell-structure-function-q05",
      topicId: "neet-biology-cell-structure-function",
      text: "The fluid-mosaic model of the plasma membrane was proposed by:",
      optionA: "Schleiden and Schwann",
      optionB: "Robert Hooke",
      optionC: "Watson and Crick",
      optionD: "Singer and Nicolson",
      correctOption: "D",
      explanation: "Singer and Nicolson (1972) described the membrane as a lipid bilayer with mobile proteins.",
      orderIndex: 4
    },
    {
      id: "neet-biology-cell-structure-function-q06",
      topicId: "neet-biology-cell-structure-function",
      text: "Which feature distinguishes a prokaryotic from a eukaryotic cell?",
      optionA: "Absence of a membrane-bound nucleus",
      optionB: "Presence of a plasma membrane",
      optionC: "Presence of ribosomes",
      optionD: "Presence of cytoplasm",
      correctOption: "A",
      explanation: "Prokaryotes lack a true membrane-bound nucleus; their DNA lies in a nucleoid region.",
      orderIndex: 5
    },
    {
      id: "neet-biology-cell-structure-function-q07",
      topicId: "neet-biology-cell-structure-function",
      text: "The nucleolus is the site of synthesis of:",
      optionA: "DNA",
      optionB: "Lipids",
      optionC: "rRNA",
      optionD: "ATP",
      correctOption: "C",
      explanation: "The nucleolus is the centre of ribosomal RNA synthesis and ribosome assembly.",
      orderIndex: 6
    },
    {
      id: "neet-biology-cell-structure-function-q08",
      topicId: "neet-biology-cell-structure-function",
      text: "'Omnis cellula e cellula', meaning new cells arise from existing cells, was stated by:",
      optionA: "Robert Hooke",
      optionB: "Theodor Schwann",
      optionC: "Rudolf Virchow",
      optionD: "Anton van Leeuwenhoek",
      correctOption: "C",
      explanation: "Virchow extended the cell theory with the principle that every cell comes from a pre-existing cell.",
      orderIndex: 7
    },
    {
      id: "neet-biology-human-physiology-digestion-q01",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Salivary amylase (ptyalin) acts on:",
      optionA: "Starch",
      optionB: "Fats",
      optionC: "Proteins",
      optionD: "Nucleic acids",
      correctOption: "A",
      explanation: "Ptyalin begins starch digestion in the mouth, converting it to maltose.",
      orderIndex: 0
    },
    {
      id: "neet-biology-human-physiology-digestion-q02",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Pepsin is secreted in an inactive form called:",
      optionA: "Trypsinogen",
      optionB: "Prorennin",
      optionC: "Pepsinogen",
      optionD: "Chymotrypsinogen",
      correctOption: "C",
      explanation: "Inactive pepsinogen is activated to pepsin by the HCl of gastric juice.",
      orderIndex: 1
    },
    {
      id: "neet-biology-human-physiology-digestion-q03",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Bile, secreted by the liver, helps digestion by:",
      optionA: "Breaking proteins",
      optionB: "Emulsifying fats",
      optionC: "Hydrolysing starch",
      optionD: "Absorbing water",
      correctOption: "B",
      explanation: "Bile salts emulsify large fat globules into smaller droplets for lipase to act on.",
      orderIndex: 2
    },
    {
      id: "neet-biology-human-physiology-digestion-q04",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Most absorption of digested food occurs in the:",
      optionA: "Stomach",
      optionB: "Oesophagus",
      optionC: "Large intestine",
      optionD: "Small intestine",
      correctOption: "D",
      explanation: "Villi and microvilli of the small intestine provide a huge surface for absorption.",
      orderIndex: 3
    },
    {
      id: "neet-biology-human-physiology-digestion-q05",
      topicId: "neet-biology-human-physiology-digestion",
      text: "The adult human dental formula 2123/2123 corresponds to how many teeth?",
      optionA: "20",
      optionB: "28",
      optionC: "32",
      optionD: "36",
      correctOption: "C",
      explanation: "Each half-jaw has 2 incisors, 1 canine, 2 premolars, 3 molars; total 32 teeth.",
      orderIndex: 4
    },
    {
      id: "neet-biology-human-physiology-digestion-q06",
      topicId: "neet-biology-human-physiology-digestion",
      text: "The largest gland in the human body is the:",
      optionA: "Pancreas",
      optionB: "Liver",
      optionC: "Salivary gland",
      optionD: "Thyroid",
      correctOption: "B",
      explanation: "The liver is the largest gland; it produces bile and stores glycogen.",
      orderIndex: 5
    },
    {
      id: "neet-biology-human-physiology-digestion-q07",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Intrinsic factor secreted by the stomach is essential for the absorption of:",
      optionA: "Vitamin C",
      optionB: "Calcium",
      optionC: "Iron",
      optionD: "Vitamin B₁₂",
      correctOption: "D",
      explanation: "Intrinsic factor binds vitamin B₁₂, enabling its absorption in the ileum.",
      orderIndex: 6
    },
    {
      id: "neet-biology-human-physiology-digestion-q08",
      topicId: "neet-biology-human-physiology-digestion",
      text: "Which enzyme from the pancreas digests fats?",
      optionA: "Lipase",
      optionB: "Amylase",
      optionC: "Trypsin",
      optionD: "Pepsin",
      correctOption: "A",
      explanation: "Pancreatic lipase breaks fats into fatty acids and glycerol.",
      orderIndex: 7
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q01",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "The correct order of stability of carbocations is:",
      optionA: "Methyl > 1° > 2° > 3°",
      optionB: "2° > 3° > 1° > methyl",
      optionC: "1° > 2° > 3° > methyl",
      optionD: "3° > 2° > 1° > methyl",
      correctOption: "D",
      explanation: "Hyperconjugation and the +I effect make tertiary carbocations the most stable.",
      orderIndex: 0
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q02",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "An electrophile is a species that is:",
      optionA: "Electron-rich",
      optionB: "A free radical",
      optionC: "Always negatively charged",
      optionD: "Electron-deficient",
      correctOption: "D",
      explanation: "Electrophiles are electron-poor and accept an electron pair from a nucleophile.",
      orderIndex: 1
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q03",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Which group shows a +M (electron-donating resonance) effect?",
      optionA: "−NO₂",
      optionB: "−C≡N",
      optionC: "−NH₂",
      optionD: "−COOH",
      correctOption: "C",
      explanation: "The lone pair on −NH₂ is donated into the ring, a +M effect.",
      orderIndex: 2
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q04",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "The hybridisation of the positively charged carbon in a carbocation is:",
      optionA: "sp²",
      optionB: "sp",
      optionC: "sp³",
      optionD: "sp³d",
      correctOption: "A",
      explanation: "A carbocation carbon is sp² hybridised with an empty p-orbital, giving planar geometry.",
      orderIndex: 3
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q05",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Which of the following is the most acidic?",
      optionA: "Ethanol",
      optionB: "Acetic acid",
      optionC: "Phenol",
      optionD: "Water",
      correctOption: "B",
      explanation: "Carboxylic acids are more acidic than phenols, alcohols and water due to resonance-stabilised anions.",
      orderIndex: 4
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q06",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Hyperconjugation involves the delocalisation of electrons from:",
      optionA: "A σ (C–H) bond",
      optionB: "A π bond only",
      optionC: "A lone pair",
      optionD: "A d orbital",
      correctOption: "A",
      explanation: "Hyperconjugation delocalises σ(C–H) bond electrons into an adjacent empty or π orbital.",
      orderIndex: 5
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q07",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "A chiral carbon atom must be bonded to:",
      optionA: "Four different groups",
      optionB: "Two identical groups",
      optionC: "A double bond",
      optionD: "A hydrogen only",
      correctOption: "A",
      explanation: "Optical activity requires a carbon attached to four different groups (a stereocentre).",
      orderIndex: 6
    },
    {
      id: "neet-chemistry-organic-chemistry-basics-q08",
      topicId: "neet-chemistry-organic-chemistry-basics",
      text: "Electron-withdrawing groups attached to an acid generally:",
      optionA: "Decrease acidity",
      optionB: "Increase acidity",
      optionC: "Have no effect",
      optionD: "Make it basic",
      correctOption: "B",
      explanation: "They stabilise the conjugate base by dispersing negative charge, increasing acidity.",
      orderIndex: 7
    },
    {
      id: "neet-physics-ray-optics-q01",
      topicId: "neet-physics-ray-optics",
      text: "The focal length of a spherical mirror is related to its radius of curvature by:",
      optionA: "f = R",
      optionB: "f = 2R",
      optionC: "f = R/4",
      optionD: "f = R/2",
      correctOption: "D",
      explanation: "For a spherical mirror the focal length is half the radius of curvature, f = R/2.",
      orderIndex: 0
    },
    {
      id: "neet-physics-ray-optics-q02",
      topicId: "neet-physics-ray-optics",
      text: "Total internal reflection occurs when light travels from a:",
      optionA: "Rarer to a denser medium",
      optionB: "Denser to a rarer medium at normal incidence",
      optionC: "Medium to vacuum at any angle",
      optionD: "Denser to a rarer medium beyond the critical angle",
      correctOption: "D",
      explanation: "TIR needs a denser-to-rarer transition with the incidence angle exceeding the critical angle.",
      orderIndex: 1
    },
    {
      id: "neet-physics-ray-optics-q03",
      topicId: "neet-physics-ray-optics",
      text: "The power of a lens of focal length 50 cm is:",
      optionA: "0.5 D",
      optionB: "5 D",
      optionC: "2 D",
      optionD: "50 D",
      correctOption: "C",
      explanation: "P = 1/f(m) = 1/0.5 = 2 dioptres.",
      orderIndex: 2
    },
    {
      id: "neet-physics-ray-optics-q04",
      topicId: "neet-physics-ray-optics",
      text: "A convex lens always forms which type of image of a distant object?",
      optionA: "Virtual and erect",
      optionB: "Real and erect",
      optionC: "Virtual and inverted",
      optionD: "Real and inverted",
      correctOption: "D",
      explanation: "A converging lens forms a real, inverted image of a distant real object on the far side.",
      orderIndex: 3
    },
    {
      id: "neet-physics-ray-optics-q05",
      topicId: "neet-physics-ray-optics",
      text: "Snell's law relates the angles of incidence and refraction through:",
      optionA: "n₁ cos i = n₂ cos r",
      optionB: "n₁ sin i = n₂ sin r",
      optionC: "n₁ tan i = n₂ tan r",
      optionD: "n₁ i = n₂ r",
      correctOption: "B",
      explanation: "Snell's law states n₁ sin i = n₂ sin r at a refracting boundary.",
      orderIndex: 4
    },
    {
      id: "neet-physics-ray-optics-q06",
      topicId: "neet-physics-ray-optics",
      text: "Two thin lenses of power +3 D and +2 D placed in contact have a combined power of:",
      optionA: "5 D",
      optionB: "1 D",
      optionC: "6 D",
      optionD: "1.2 D",
      correctOption: "A",
      explanation: "Powers add for lenses in contact: P = 3 + 2 = 5 D.",
      orderIndex: 5
    },
    {
      id: "neet-physics-ray-optics-q07",
      topicId: "neet-physics-ray-optics",
      text: "A prism produces a spectrum of white light because the refractive index:",
      optionA: "Is constant for all colours",
      optionB: "Depends on wavelength",
      optionC: "Depends on the prism mass",
      optionD: "Is zero for violet light",
      correctOption: "B",
      explanation: "Refractive index varies with wavelength, so violet bends most and red least (dispersion).",
      orderIndex: 6
    },
    {
      id: "neet-physics-ray-optics-q08",
      topicId: "neet-physics-ray-optics",
      text: "A convex mirror always forms an image that is:",
      optionA: "Real and inverted",
      optionB: "Virtual, erect and diminished",
      optionC: "Real and magnified",
      optionD: "Virtual and magnified",
      correctOption: "B",
      explanation: "A convex (diverging) mirror always gives a virtual, erect, diminished image, useful as a rear-view mirror.",
      orderIndex: 7
    }
  ]
});
