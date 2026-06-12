import { defineBundle } from "./builder";

export const jee = defineBundle({
  exam: {
    id: "jee",
    slug: "jee",
    name: "JEE Main & Advanced",
    tagline: "Physics · Chemistry · Mathematics for the IITs",
    orderIndex: 1
  },
  subjects: [
    { id: "jee-physics", examId: "jee", name: "Physics", slug: "physics", orderIndex: 0 },
    { id: "jee-chemistry", examId: "jee", name: "Chemistry", slug: "chemistry", orderIndex: 1 },
    { id: "jee-mathematics", examId: "jee", name: "Mathematics", slug: "mathematics", orderIndex: 2 }
  ],
  topics: [
    {
      id: "jee-physics-kinematics-1d",
      subjectId: "jee-physics",
      name: "Kinematics (1D)",
      slug: "kinematics-1d",
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion",
      subjectId: "jee-physics",
      name: "Rotational Motion",
      slug: "rotational-motion",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-bonding",
      subjectId: "jee-chemistry",
      name: "Chemical Bonding",
      slug: "chemical-bonding",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations",
      subjectId: "jee-mathematics",
      name: "Quadratic Equations",
      slug: "quadratic-equations",
      orderIndex: 0
    }
  ],
  materials: [
    {
      id: "jee-physics-kinematics-1d-m01",
      topicId: "jee-physics-kinematics-1d",
      title: "Kinematics in One Dimension",
      content: `**Kinematics** describes motion without asking what causes it. In 1D, displacement, velocity and acceleration are signed scalars along a single axis.

## Core Definitions
- **Average velocity** = total displacement / total time.
- **Instantaneous velocity** v = dx/dt; **acceleration** a = dv/dt = d²x/dt².
- **Speed** is the magnitude of velocity; distance is always ≥ |displacement|.

## Equations of Motion (constant a)
For uniform acceleration:

\`\`\`
v = u + at
s = ut + (1/2)at^2
v^2 = u^2 + 2as
s_nth = u + (a/2)(2n - 1)
\`\`\`

where **u** is initial velocity, **v** final velocity, **s** displacement and **s_nth** the distance in the n-th second.

## Free Fall
- For a body dropped from rest, u = 0 and a = **g ≈ 9.8 m/s²** downward.
- Time to reach the top of a vertical throw equals the time to fall back; speed of return equals speed of launch.

| Graph | Slope gives | Area gives |
| --- | --- | --- |
| x–t | velocity | — |
| v–t | acceleration | displacement |
| a–t | — | change in velocity |

### Key Tips
- The **slope of a position–time graph** is velocity; the **area under a velocity–time graph** is displacement.
- A negative velocity with positive acceleration means the object is **slowing down**, not speeding up.
- For motion under gravity, taking **up as positive** keeps g = −9.8 m/s² consistent throughout the problem.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion-m01",
      topicId: "jee-physics-rotational-motion",
      title: "Rotational Motion Essentials",
      content: `**Rotational motion** mirrors translational motion, with torque replacing force and moment of inertia replacing mass.

## Angular Quantities
- Angular displacement **θ**, angular velocity **ω = dθ/dt**, angular acceleration **α = dω/dt**.
- Linear–angular links: **v = ωr**, **a = αr**.

## Moment of Inertia (I)
\`\`\`
I = Σ m_i r_i^2
Solid sphere:   I = (2/5)MR^2
Hollow sphere:  I = (2/3)MR^2
Solid cylinder: I = (1/2)MR^2
Thin rod (centre): I = (1/12)ML^2
\`\`\`

The **parallel axis theorem**: I = I_cm + Md².

## Dynamics
- **Torque** τ = Iα = r × F.
- **Angular momentum** L = Iω; it is **conserved** when net external torque is zero (a spinning skater pulling in her arms).
- **Rotational KE** = (1/2)Iω².

| Translational | Rotational |
| --- | --- |
| F = ma | τ = Iα |
| p = mv | L = Iω |
| KE = ½mv² | KE = ½Iω² |

### Rolling Without Slipping
- The condition is **v = ωR**; total KE = (1/2)Mv² + (1/2)Iω².
- For a body rolling down an incline, **acceleration = g·sinθ / (1 + I/MR²)** — a solid sphere beats a ring because it has the smaller I/MR².`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-bonding-m01",
      topicId: "jee-chemistry-chemical-bonding",
      title: "Chemical Bonding & VSEPR",
      content: `**Chemical bonding** explains how atoms attain stable noble-gas configurations by sharing or transferring electrons.

## Types of Bonds
- **Ionic bond** — electrostatic attraction after electron transfer (e.g. NaCl); favoured by low ionisation energy and high electron affinity.
- **Covalent bond** — shared electron pairs; described by **VSEPR** and **hybridisation**.
- **Coordinate (dative) bond** — both electrons come from one atom (e.g. NH₄⁺).

## VSEPR Geometry
| Hybridisation | Electron pairs | Shape | Angle |
| --- | --- | --- | --- |
| sp | 2 | Linear | 180° |
| sp² | 3 | Trigonal planar | 120° |
| sp³ | 4 | Tetrahedral | 109.5° |
| sp³d | 5 | Trigonal bipyramidal | 90°/120° |
| sp³d² | 6 | Octahedral | 90° |

**Lone pairs** compress bond angles: water (sp³) is bent at ~104.5° because two lone pairs repel more than bond pairs.

## Key Concepts
- **Bond order** = (bonding − antibonding electrons) / 2 in **Molecular Orbital Theory**; higher bond order means shorter, stronger bonds.
- **Dipole moment** μ = q × d; symmetric molecules like CO₂ have zero net dipole despite polar bonds.
- **Hydrogen bonding** (N, O, F) explains the anomalously high boiling point of water and the structure of ice.

### Fajans' Rules
- Covalent character rises with **small cation, large anion and high charge** — predicting why AlCl₃ is more covalent than NaCl.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations-m01",
      topicId: "jee-mathematics-quadratic-equations",
      title: "Quadratic Equations",
      content: `A **quadratic equation** ax² + bx + c = 0 (a ≠ 0) has at most two roots, given by the quadratic formula.

## The Formula & Discriminant
\`\`\`
x = (-b ± sqrt(D)) / (2a),  where D = b^2 - 4ac
\`\`\`

The **discriminant D** decides the nature of the roots:

| D | Nature of roots |
| --- | --- |
| D > 0 | Real and distinct |
| D = 0 | Real and equal |
| D < 0 | Complex conjugates |

If a, b, c are rational and D is a perfect square, the roots are **rational**.

## Sum and Product of Roots
For roots α and β:
- **Sum** α + β = −b/a.
- **Product** αβ = c/a.
- Equation from roots: **x² − (α + β)x + αβ = 0**.

## Useful Identities
- α² + β² = (α + β)² − 2αβ.
- |α − β| = sqrt(D) / |a|.

### Sign of the Quadratic
- If a > 0 the parabola opens **upward** (minimum); if a < 0 it opens **downward** (maximum).
- The vertex lies at **x = −b/(2a)**, giving the minimum/maximum value of the expression.
- For ax² + bx + c to be positive for all real x, we need **a > 0 and D < 0**.

### Common Roots
- If two quadratics share **both** roots, their coefficients are proportional: a₁/a₂ = b₁/b₂ = c₁/c₂.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "jee-physics-kinematics-1d-q01",
      topicId: "jee-physics-kinematics-1d",
      text: "A body starts from rest and accelerates at 2 m/s². How far does it travel in 5 s?",
      optionA: "10 m",
      optionB: "20 m",
      optionC: "50 m",
      optionD: "25 m",
      correctOption: "D",
      explanation: "s = ut + ½at² = 0 + ½(2)(25) = 25 m.",
      orderIndex: 0
    },
    {
      id: "jee-physics-kinematics-1d-q02",
      topicId: "jee-physics-kinematics-1d",
      text: "A stone is dropped from rest. Its velocity after 3 s (g = 10 m/s²) is:",
      optionA: "10 m/s",
      optionB: "30 m/s",
      optionC: "20 m/s",
      optionD: "45 m/s",
      correctOption: "B",
      explanation: "v = u + gt = 0 + 10 × 3 = 30 m/s.",
      orderIndex: 1
    },
    {
      id: "jee-physics-kinematics-1d-q03",
      topicId: "jee-physics-kinematics-1d",
      text: "The area under a velocity–time graph represents:",
      optionA: "Acceleration",
      optionB: "Jerk",
      optionC: "Displacement",
      optionD: "Average speed",
      correctOption: "C",
      explanation: "Integrating velocity over time gives displacement, which is the area under the v–t curve.",
      orderIndex: 2
    },
    {
      id: "jee-physics-kinematics-1d-q04",
      topicId: "jee-physics-kinematics-1d",
      text: "A car moving at 20 m/s decelerates uniformly and stops in 100 m. The deceleration is:",
      optionA: "1 m/s²",
      optionB: "10 m/s²",
      optionC: "4 m/s²",
      optionD: "2 m/s²",
      correctOption: "D",
      explanation: "Using v² = u² + 2as: 0 = 400 + 2a(100), so a = −2 m/s².",
      orderIndex: 3
    },
    {
      id: "jee-physics-kinematics-1d-q05",
      topicId: "jee-physics-kinematics-1d",
      text: "The distance covered in the n-th second by a body from rest with acceleration a is:",
      optionA: "(a/2)(2n − 1)",
      optionB: "an",
      optionC: "½an²",
      optionD: "a(n − 1)",
      correctOption: "A",
      explanation: "s_nth = u + (a/2)(2n − 1); with u = 0 it reduces to (a/2)(2n − 1).",
      orderIndex: 4
    },
    {
      id: "jee-physics-kinematics-1d-q06",
      topicId: "jee-physics-kinematics-1d",
      text: "A ball thrown vertically up with 20 m/s reaches a maximum height of (g = 10 m/s²):",
      optionA: "20 m",
      optionB: "10 m",
      optionC: "30 m",
      optionD: "40 m",
      correctOption: "A",
      explanation: "At the top v = 0, so h = u²/2g = 400/20 = 20 m.",
      orderIndex: 5
    },
    {
      id: "jee-physics-kinematics-1d-q07",
      topicId: "jee-physics-kinematics-1d",
      text: "If velocity is negative and acceleration is positive, the body is:",
      optionA: "Speeding up",
      optionB: "Slowing down",
      optionC: "At rest",
      optionD: "Moving at constant speed",
      correctOption: "B",
      explanation: "Opposite signs of v and a mean the speed (magnitude) is decreasing.",
      orderIndex: 6
    },
    {
      id: "jee-physics-kinematics-1d-q08",
      topicId: "jee-physics-kinematics-1d",
      text: "Two balls are dropped 1 s apart from the same height. As they fall, the gap between them:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "First increases then decreases",
      correctOption: "A",
      explanation: "The earlier ball is always faster, so the separation grows with time.",
      orderIndex: 7
    },
    {
      id: "jee-physics-rotational-motion-q01",
      topicId: "jee-physics-rotational-motion",
      text: "The moment of inertia of a solid sphere about a diameter is:",
      optionA: "MR²",
      optionB: "(2/3)MR²",
      optionC: "(1/2)MR²",
      optionD: "(2/5)MR²",
      correctOption: "D",
      explanation: "A uniform solid sphere has I = (2/5)MR² about any diameter.",
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion-q02",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational analogue of force is:",
      optionA: "Torque",
      optionB: "Momentum",
      optionC: "Impulse",
      optionD: "Power",
      correctOption: "A",
      explanation: "Torque τ = Iα plays the role of force F = ma in rotation.",
      orderIndex: 1
    },
    {
      id: "jee-physics-rotational-motion-q03",
      topicId: "jee-physics-rotational-motion",
      text: "A skater pulls in her arms while spinning. Her angular velocity:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays the same",
      optionD: "Becomes zero",
      correctOption: "A",
      explanation: "With torque zero, L = Iω is conserved; reducing I increases ω.",
      orderIndex: 2
    },
    {
      id: "jee-physics-rotational-motion-q04",
      topicId: "jee-physics-rotational-motion",
      text: "Which body reaches the bottom of an incline first while rolling without slipping?",
      optionA: "Hollow cylinder",
      optionB: "Solid sphere",
      optionC: "Ring",
      optionD: "Hollow sphere",
      correctOption: "B",
      explanation: "The solid sphere has the smallest I/MR² (2/5), giving the largest acceleration.",
      orderIndex: 3
    },
    {
      id: "jee-physics-rotational-motion-q05",
      topicId: "jee-physics-rotational-motion",
      text: "The parallel axis theorem states I = :",
      optionA: "I_cm + Md²",
      optionB: "I_cm − Md²",
      optionC: "I_cm + ½Md²",
      optionD: "2I_cm + Md²",
      correctOption: "A",
      explanation: "I about a parallel axis equals the centre-of-mass value plus Md².",
      orderIndex: 4
    },
    {
      id: "jee-physics-rotational-motion-q06",
      topicId: "jee-physics-rotational-motion",
      text: "For rolling without slipping, the velocity of the contact point with the ground is:",
      optionA: "v",
      optionB: "Zero",
      optionC: "2v",
      optionD: "v/2",
      correctOption: "B",
      explanation: "In pure rolling, the instantaneous velocity of the contact point is zero.",
      orderIndex: 5
    },
    {
      id: "jee-physics-rotational-motion-q07",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational kinetic energy of a body is:",
      optionA: "½Iω",
      optionB: "Iω²",
      optionC: "½Iω²",
      optionD: "½I²ω",
      correctOption: "C",
      explanation: "Rotational KE = ½Iω², analogous to ½mv² for translation.",
      orderIndex: 6
    },
    {
      id: "jee-physics-rotational-motion-q08",
      topicId: "jee-physics-rotational-motion",
      text: "A disc of moment of inertia 2 kg·m² spins at 3 rad/s. Its angular momentum is:",
      optionA: "3 kg·m²/s",
      optionB: "6 kg·m²/s",
      optionC: "5 kg·m²/s",
      optionD: "9 kg·m²/s",
      correctOption: "B",
      explanation: "L = Iω = 2 × 3 = 6 kg·m²/s.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-chemical-bonding-q01",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The shape of a molecule with sp³ hybridisation and no lone pairs is:",
      optionA: "Linear",
      optionB: "Trigonal planar",
      optionC: "Tetrahedral",
      optionD: "Octahedral",
      correctOption: "C",
      explanation: "Four equivalent sp³ orbitals point to the corners of a tetrahedron (109.5°).",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-bonding-q02",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond angle in a water molecule is approximately:",
      optionA: "90°",
      optionB: "109.5°",
      optionC: "104.5°",
      optionD: "120°",
      correctOption: "C",
      explanation: "Two lone pairs on the sp³ oxygen compress the H–O–H angle to about 104.5°.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-bonding-q03",
      topicId: "jee-chemistry-chemical-bonding",
      text: "Which molecule has a zero net dipole moment despite polar bonds?",
      optionA: "H₂O",
      optionB: "NH₃",
      optionC: "HCl",
      optionD: "CO₂",
      correctOption: "D",
      explanation: "CO₂ is linear and symmetric, so the two bond dipoles cancel exactly.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-chemical-bonding-q04",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond order of the oxygen molecule (O₂) from MO theory is:",
      optionA: "1",
      optionB: "2",
      optionC: "1.5",
      optionD: "3",
      correctOption: "B",
      explanation: "O₂ has a bond order of 2 and two unpaired electrons, making it paramagnetic.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-chemical-bonding-q05",
      topicId: "jee-chemistry-chemical-bonding",
      text: "According to Fajans' rules, covalent character increases with:",
      optionA: "Large cation, small anion",
      optionB: "Large anion, large cation",
      optionC: "Low cation charge",
      optionD: "Small cation, large anion",
      correctOption: "D",
      explanation: "A small, highly charged cation polarises a large anion, increasing covalent character.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-chemical-bonding-q06",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The hybridisation of carbon in ethyne (C₂H₂) is:",
      optionA: "sp³d",
      optionB: "sp²",
      optionC: "sp³",
      optionD: "sp",
      correctOption: "D",
      explanation: "The triple-bonded carbons in ethyne are sp hybridised, giving a linear molecule.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-chemical-bonding-q07",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The unusually high boiling point of water is mainly due to:",
      optionA: "Ionic bonding",
      optionB: "Van der Waals forces",
      optionC: "Hydrogen bonding",
      optionD: "Metallic bonding",
      correctOption: "C",
      explanation: "Extensive hydrogen bonding between water molecules requires extra energy to break.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-chemical-bonding-q08",
      topicId: "jee-chemistry-chemical-bonding",
      text: "In the ammonium ion (NH₄⁺), the fourth N–H bond is a:",
      optionA: "Ionic bond",
      optionB: "Coordinate bond",
      optionC: "Hydrogen bond",
      optionD: "Metallic bond",
      correctOption: "B",
      explanation: "The lone pair on nitrogen forms a coordinate (dative) bond with the proton.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-quadratic-equations-q01",
      topicId: "jee-mathematics-quadratic-equations",
      text: "For the equation x² − 5x + 6 = 0, the sum of the roots is:",
      optionA: "5",
      optionB: "−5",
      optionC: "6",
      optionD: "−6",
      correctOption: "A",
      explanation: "Sum of roots = −b/a = −(−5)/1 = 5 (roots are 2 and 3).",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations-q02",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The discriminant of 2x² + 3x + 5 = 0 is:",
      optionA: "31",
      optionB: "49",
      optionC: "−31",
      optionD: "−49",
      correctOption: "C",
      explanation: "D = b² − 4ac = 9 − 40 = −31, so the roots are complex.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-quadratic-equations-q03",
      topicId: "jee-mathematics-quadratic-equations",
      text: "If the roots of a quadratic are equal, the discriminant is:",
      optionA: "Positive",
      optionB: "Negative",
      optionC: "Irrational",
      optionD: "Zero",
      correctOption: "D",
      explanation: "Equal real roots occur exactly when D = b² − 4ac = 0.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-quadratic-equations-q04",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The quadratic equation whose roots are 3 and −2 is:",
      optionA: "x² − 5x + 6 = 0",
      optionB: "x² + x − 6 = 0",
      optionC: "x² − x − 6 = 0",
      optionD: "x² + 5x + 6 = 0",
      correctOption: "C",
      explanation: "Sum = 1, product = −6, so x² − (1)x + (−6) = x² − x − 6 = 0.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-quadratic-equations-q05",
      topicId: "jee-mathematics-quadratic-equations",
      text: "For ax² + bx + c > 0 to hold for all real x, we require:",
      optionA: "a > 0 and D > 0",
      optionB: "a < 0 and D > 0",
      optionC: "a < 0 and D < 0",
      optionD: "a > 0 and D < 0",
      correctOption: "D",
      explanation: "An upward parabola (a > 0) that never touches the x-axis (D < 0) is always positive.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-quadratic-equations-q06",
      topicId: "jee-mathematics-quadratic-equations",
      text: "If α and β are roots of x² − 6x + 8 = 0, then α² + β² equals:",
      optionA: "16",
      optionB: "20",
      optionC: "36",
      optionD: "52",
      correctOption: "B",
      explanation: "α² + β² = (α + β)² − 2αβ = 36 − 16 = 20.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-quadratic-equations-q07",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The vertex of the parabola y = x² − 4x + 7 lies at x =:",
      optionA: "2",
      optionB: "1",
      optionC: "4",
      optionD: "−2",
      correctOption: "A",
      explanation: "The vertex is at x = −b/(2a) = 4/2 = 2.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-quadratic-equations-q08",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The product of the roots of 3x² − 12x + 9 = 0 is:",
      optionA: "1",
      optionB: "4",
      optionC: "3",
      optionD: "9",
      correctOption: "C",
      explanation: "Product = c/a = 9/3 = 3.",
      orderIndex: 7
    }
  ]
});
