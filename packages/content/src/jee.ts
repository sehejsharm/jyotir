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
    },
    {
      id: "jee-physics-laws-of-motion",
      subjectId: "jee-physics",
      name: "Laws of Motion & Friction",
      slug: "laws-of-motion",
      orderIndex: 2
    },
    {
      id: "jee-physics-work-energy-power",
      subjectId: "jee-physics",
      name: "Work, Energy & Power",
      slug: "work-energy-power",
      orderIndex: 3
    },
    {
      id: "jee-physics-gravitation",
      subjectId: "jee-physics",
      name: "Gravitation",
      slug: "gravitation",
      orderIndex: 4
    },
    {
      id: "jee-physics-shm-waves",
      subjectId: "jee-physics",
      name: "SHM & Waves",
      slug: "shm-waves",
      orderIndex: 5
    },
    {
      id: "jee-physics-electrostatics",
      subjectId: "jee-physics",
      name: "Electrostatics",
      slug: "electrostatics",
      orderIndex: 6
    },
    {
      id: "jee-physics-current-electricity",
      subjectId: "jee-physics",
      name: "Current Electricity",
      slug: "current-electricity",
      orderIndex: 7
    },
    {
      id: "jee-physics-magnetism-emi",
      subjectId: "jee-physics",
      name: "Magnetism & EMI",
      slug: "magnetism-emi",
      orderIndex: 8
    },
    {
      id: "jee-physics-optics",
      subjectId: "jee-physics",
      name: "Ray & Wave Optics",
      slug: "optics",
      orderIndex: 9
    },
    {
      id: "jee-physics-modern-physics",
      subjectId: "jee-physics",
      name: "Modern Physics",
      slug: "modern-physics",
      orderIndex: 10
    },
    {
      id: "jee-physics-thermodynamics",
      subjectId: "jee-physics",
      name: "Thermodynamics",
      slug: "thermodynamics",
      orderIndex: 11
    },
    {
      id: "jee-chemistry-atomic-structure",
      subjectId: "jee-chemistry",
      name: "Atomic Structure",
      slug: "atomic-structure",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-periodicity",
      subjectId: "jee-chemistry",
      name: "Periodic Table & Periodicity",
      slug: "periodicity",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-mole-concept",
      subjectId: "jee-chemistry",
      name: "Mole Concept & Stoichiometry",
      slug: "mole-concept",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-equilibrium",
      subjectId: "jee-chemistry",
      name: "Chemical & Ionic Equilibrium",
      slug: "equilibrium",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-thermodynamics",
      subjectId: "jee-chemistry",
      name: "Thermodynamics (Chemistry)",
      slug: "thermodynamics",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-goc",
      subjectId: "jee-chemistry",
      name: "GOC: Basics of Organic Chemistry",
      slug: "goc",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-hydrocarbons",
      subjectId: "jee-chemistry",
      name: "Hydrocarbons",
      slug: "hydrocarbons",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-coordination-compounds",
      subjectId: "jee-chemistry",
      name: "Coordination Compounds",
      slug: "coordination-compounds",
      orderIndex: 8
    },
    {
      id: "jee-chemistry-electrochemistry",
      subjectId: "jee-chemistry",
      name: "Electrochemistry",
      slug: "electrochemistry",
      orderIndex: 9
    },
    {
      id: "jee-chemistry-states-of-matter",
      subjectId: "jee-chemistry",
      name: "States of Matter",
      slug: "states-of-matter",
      orderIndex: 10
    },
    {
      id: "jee-mathematics-complex-numbers",
      subjectId: "jee-mathematics",
      name: "Complex Numbers",
      slug: "complex-numbers",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-sequences-series",
      subjectId: "jee-mathematics",
      name: "Sequences & Series",
      slug: "sequences-series",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-permutations-combinations",
      subjectId: "jee-mathematics",
      name: "Permutations & Combinations",
      slug: "permutations-combinations",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-binomial-theorem",
      subjectId: "jee-mathematics",
      name: "Binomial Theorem",
      slug: "binomial-theorem",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-matrices-determinants",
      subjectId: "jee-mathematics",
      name: "Matrices & Determinants",
      slug: "matrices-determinants",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-straight-lines-circles",
      subjectId: "jee-mathematics",
      name: "Straight Lines & Circles",
      slug: "straight-lines-circles",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-limits-continuity",
      subjectId: "jee-mathematics",
      name: "Limits, Continuity & Differentiability",
      slug: "limits-continuity",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-integration",
      subjectId: "jee-mathematics",
      name: "Integration",
      slug: "integration",
      orderIndex: 8
    },
    {
      id: "jee-mathematics-vectors-3d",
      subjectId: "jee-mathematics",
      name: "Vectors & 3D Geometry",
      slug: "vectors-3d",
      orderIndex: 9
    },
    {
      id: "jee-mathematics-probability",
      subjectId: "jee-mathematics",
      name: "Probability",
      slug: "probability",
      orderIndex: 10
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
    },
    {
      id: "jee-physics-laws-of-motion-m01",
      topicId: "jee-physics-laws-of-motion",
      title: "Newton's Laws & Friction",
      content: `**Newton's laws** govern how forces change motion. They form the backbone of mechanics.

## The Three Laws
- **First law (inertia)**: a body stays at rest or in uniform motion unless a net external force acts.
- **Second law**: the heart of dynamics, written below.
- **Third law**: every action has an equal and opposite reaction; the pair acts on **different bodies**.

\`\`\`
F = ma           (net force)
F = dp/dt        (general form, p = mv)
Impulse J = F·t = Δp
\`\`\`

## Friction
- **Static friction** adjusts up to a maximum: f_s ≤ μ_s·N.
- **Kinetic friction** is constant once sliding: f_k = μ_k·N, with μ_k < μ_s.
- On an incline of angle θ, a block just slides when **tanθ = μ_s** (angle of repose).

| Quantity | Expression |
| --- | --- |
| Weight component along incline | mg·sinθ |
| Normal force on incline | mg·cosθ |
| Maximum static friction | μ_s·mg·cosθ |

## Key Applications
- **Tension** in a massless string is uniform throughout.
- For connected blocks pulled by force F, common **acceleration a = F / (m₁ + m₂)**.
- In a lift accelerating up, **apparent weight = m(g + a)**; in free fall it is zero (weightlessness).

### Pseudo Force
- In a **non-inertial frame** accelerating at a, add a pseudo force **−ma** on every body to apply Newton's laws.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-work-energy-power-m01",
      topicId: "jee-physics-work-energy-power",
      title: "Work, Energy & Power",
      content: `**Work** is energy transferred by a force acting through a displacement. Energy is the capacity to do work.

## Work and the Work-Energy Theorem
\`\`\`
W = F·s·cosθ        (constant force)
W = ∫ F dx          (variable force)
W_net = ΔKE = ½mv² - ½mu²
\`\`\`

The **work-energy theorem** says net work equals the change in kinetic energy.

## Energy Forms
- **Kinetic energy** KE = ½mv².
- **Gravitational PE** = mgh near the surface.
- **Spring PE** = ½kx² for a Hooke's-law spring.

## Conservation of Energy
For **conservative forces** (gravity, spring), mechanical energy is conserved:

| Force type | Path dependence | Energy stored? |
| --- | --- | --- |
| Conservative | Independent | Yes (PE defined) |
| Non-conservative (friction) | Dependent | No (dissipated) |

## Power
- **Average power** = W/t; **instantaneous power** P = F·v.
- 1 horsepower ≈ 746 W.

### Collisions
- In all collisions **momentum is conserved**.
- **Elastic**: KE also conserved; for equal masses, velocities are exchanged.
- **Coefficient of restitution e** = (relative velocity of separation)/(relative velocity of approach); e = 1 elastic, e = 0 perfectly inelastic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-gravitation-m01",
      topicId: "jee-physics-gravitation",
      title: "Gravitation & Orbits",
      content: `**Gravitation** is the universal attractive force between masses, described by Newton's law.

## Newton's Law of Gravitation
\`\`\`
F = G·m₁·m₂ / r²       G = 6.67 × 10⁻¹¹ N·m²/kg²
g = GM / R²            (surface gravity)
\`\`\`

- **g decreases with altitude**: g_h = g(1 − 2h/R) for h << R.
- **g decreases with depth**: g_d = g(1 − d/R).

## Gravitational Potential and PE
- Potential **V = −GM/r**; potential energy **U = −GMm/r**.
- Work to move a mass between points equals the change in U.

## Orbits and Escape
\`\`\`
Orbital velocity:  v_o = sqrt(GM/r)
Escape velocity:   v_e = sqrt(2GM/R) = sqrt(2)·v_o
\`\`\`

Earth's escape velocity is about **11.2 km/s**.

## Kepler's Laws
| Law | Statement |
| --- | --- |
| First | Orbits are ellipses with the Sun at a focus |
| Second | Equal areas swept in equal times |
| Third | T² ∝ r³ |

### Satellites
- A **geostationary satellite** has a period of 24 h and orbits ~36000 km above the equator.
- Total orbital energy **E = −GMm/2r**, exactly half the potential energy.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-shm-waves-m01",
      topicId: "jee-physics-shm-waves",
      title: "SHM & Waves",
      content: `**Simple harmonic motion (SHM)** is oscillation where the restoring force is proportional to displacement and oppositely directed.

## SHM Basics
\`\`\`
F = -kx
x = A·sin(ωt + φ)
ω = sqrt(k/m),   T = 2π·sqrt(m/k)
\`\`\`

- **Velocity** v = ω·sqrt(A² − x²); maximum at the mean position.
- **Acceleration** a = −ω²x; maximum at the extremes.
- **Total energy** = ½kA² = ½mω²A², constant throughout.

## Common Oscillators
| System | Time period |
| --- | --- |
| Spring-mass | 2π·sqrt(m/k) |
| Simple pendulum | 2π·sqrt(L/g) |

## Waves
- A travelling wave: **y = A·sin(ωt − kx)**, with **v = fλ = ω/k**.
- Speed on a string **v = sqrt(T/μ)**, where μ is linear mass density.

## Superposition and Resonance
- **Beats** occur when two close frequencies superpose; beat frequency = |f₁ − f₂|.
- **Standing waves** form on fixed strings; fundamental f = v/2L.

### Doppler Effect
- Observed frequency **f' = f(v ± v_o)/(v ∓ v_s)**; pitch rises as source and observer approach.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-electrostatics-m01",
      topicId: "jee-physics-electrostatics",
      title: "Electrostatics",
      content: `**Electrostatics** studies charges at rest and the fields they create.

## Coulomb's Law
\`\`\`
F = k·q₁·q₂ / r²       k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²
E = F/q = kq / r²      (field of a point charge)
\`\`\`

The **electric field** is force per unit positive test charge.

## Potential and Energy
- **Potential** V = kq/r; it is a scalar and adds algebraically.
- Relation: **E = −dV/dr**.
- PE of two charges **U = kq₁q₂/r**.

## Gauss's Law
\`\`\`
Φ = ∮ E·dA = q_enclosed / ε₀
\`\`\`

| Charge distribution | Field |
| --- | --- |
| Infinite line (λ) | E = λ/(2πε₀r) |
| Infinite sheet (σ) | E = σ/(2ε₀) |
| Conductor surface | E = σ/ε₀ |

## Capacitance
- Parallel plate: **C = ε₀A/d**; energy stored **U = ½CV²**.
- A **dielectric** of constant K raises capacitance to KC₀.

### Conductors
- The field inside a conductor in equilibrium is **zero**; charge resides on the surface.
- A **dipole** of moment p in a field E feels torque **τ = pE·sinθ**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-current-electricity-m01",
      topicId: "jee-physics-current-electricity",
      title: "Current Electricity",
      content: `**Current electricity** deals with charges in motion through conductors and circuits.

## Ohm's Law and Resistance
\`\`\`
V = IR
R = ρL / A           (ρ = resistivity)
I = nAv_d·e          (drift relation)
\`\`\`

- **Resistivity** ρ rises with temperature for metals: ρ_T = ρ₀(1 + αΔT).

## Combinations
| Arrangement | Equivalent |
| --- | --- |
| Series | R = R₁ + R₂ + ... |
| Parallel | 1/R = 1/R₁ + 1/R₂ + ... |

## Power
- **Power dissipated** P = VI = I²R = V²/R.
- Electrical energy in kWh = power(kW) × time(h).

## Kirchhoff's Laws
- **Junction rule (KCL)**: ΣI_in = ΣI_out (charge conservation).
- **Loop rule (KVL)**: ΣV = 0 around a closed loop (energy conservation).

## EMF and Internal Resistance
- Terminal voltage **V = ε − I·r**; maximum power transfer when external R = internal r.

### Measuring Instruments
- A **Wheatstone bridge** is balanced when P/Q = R/S, giving an unknown resistance with no galvanometer current.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-magnetism-emi-m01",
      topicId: "jee-physics-magnetism-emi",
      title: "Magnetism & Electromagnetic Induction",
      content: `**Magnetic effects of current** and **electromagnetic induction** link electricity and magnetism.

## Magnetic Force
\`\`\`
F = q·v × B          |F| = qvB·sinθ
F = I·L × B          (force on a wire)
\`\`\`

- A charge in a uniform field moves in a circle of radius **r = mv/(qB)**.

## Sources of Magnetic Field
- **Biot-Savart / Ampere's law** give B from currents.
- Long straight wire: **B = μ₀I/(2πr)**.
- Centre of a loop: **B = μ₀I/(2R)**; solenoid: **B = μ₀nI**.

## Electromagnetic Induction
\`\`\`
EMF = -dΦ/dt          (Faraday's law)
Φ = B·A·cosθ
\`\`\`

**Lenz's law** sets the sign: the induced current opposes the change that causes it.

| Quantity | Expression |
| --- | --- |
| Motional EMF | BLv |
| Self-inductance EMF | -L·dI/dt |
| Energy in inductor | ½LI² |

### AC Circuits
- In an AC circuit, **reactance** X_L = ωL and X_C = 1/(ωC); impedance Z combines them.
- **Resonance** occurs at ω = 1/sqrt(LC), where current is maximum.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-optics-m01",
      topicId: "jee-physics-optics",
      title: "Ray & Wave Optics",
      content: `**Optics** covers how light reflects, refracts and interferes.

## Reflection and Mirrors
\`\`\`
1/v + 1/u = 1/f        (mirror formula)
m = -v/u               (magnification)
\`\`\`

For mirrors, **f = R/2**. Sign conventions follow the Cartesian rule.

## Refraction and Lenses
- **Snell's law**: n₁·sinθ₁ = n₂·sinθ₂.
- **Lens formula**: 1/v − 1/u = 1/f.
- **Lensmaker**: 1/f = (n − 1)(1/R₁ − 1/R₂).

| Element | Power | Combination |
| --- | --- | --- |
| Lens | P = 1/f (dioptres) | P = P₁ + P₂ |

- **Total internal reflection** occurs beyond the critical angle: sinθ_c = 1/n.

## Wave Optics
- **Young's double slit**: fringe width **β = λD/d**.
- Bright fringes at path difference = nλ; dark fringes at (n + ½)λ.

### Diffraction and Polarisation
- Single-slit minima at **a·sinθ = nλ**.
- **Malus's law**: I = I₀·cos²θ for polarised light through an analyser.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-modern-physics-m01",
      topicId: "jee-physics-modern-physics",
      title: "Modern Physics",
      content: `**Modern physics** introduces quantisation, the photoelectric effect and the atom.

## Photoelectric Effect
\`\`\`
E = hf = hc/λ
KE_max = hf - φ        (Einstein's equation)
\`\`\`

- **φ** is the work function; emission needs **f ≥ f₀** (threshold), independent of intensity.
- The **stopping potential** V₀ satisfies eV₀ = KE_max.

## Bohr Model of Hydrogen
| Quantity | Expression |
| --- | --- |
| Energy of level n | E_n = -13.6/n² eV |
| Radius | r_n = 0.529·n² Å |

- Spectral lines: **1/λ = R(1/n₁² − 1/n₂²)**, R = Rydberg constant.

## Matter Waves
- **de Broglie wavelength** λ = h/p = h/(mv); shows the wave nature of particles.

## Nuclear Physics
\`\`\`
E = mc²                (mass-energy)
N = N₀·e^(-λt)         (radioactive decay)
\`\`\`

- **Half-life** t½ = ln2/λ; **binding energy** per nucleon peaks near iron.

### Decay Types
- **Alpha** emits a helium nucleus; **beta** converts a neutron to a proton; **gamma** is high-energy photon emission with no mass change.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-physics-thermodynamics-m01",
      topicId: "jee-physics-thermodynamics",
      title: "Thermodynamics & Kinetic Theory",
      content: `**Thermodynamics** relates heat, work and internal energy in systems.

## First Law
\`\`\`
ΔU = Q - W
W = ∫ P dV
\`\`\`

Internal energy **U** depends only on state; Q and W are path-dependent.

## Processes
| Process | Condition | Result |
| --- | --- | --- |
| Isothermal | T constant | ΔU = 0, Q = W |
| Adiabatic | Q = 0 | PV^γ constant |
| Isobaric | P constant | W = PΔV |
| Isochoric | V constant | W = 0 |

- For an ideal gas: **PV = nRT**.
- **γ = Cp/Cv**; Cp − Cv = R (Mayer's relation).

## Kinetic Theory
- Mean kinetic energy per molecule **= (3/2)kT**.
- **rms speed** v_rms = sqrt(3RT/M).

## Second Law and Engines
\`\`\`
Carnot efficiency: η = 1 - T_cold/T_hot
\`\`\`

### Entropy
- **Entropy** measures disorder; for any spontaneous process the total entropy of an isolated system increases.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-atomic-structure-m01",
      topicId: "jee-chemistry-atomic-structure",
      title: "Atomic Structure",
      content: `**Atomic structure** explains how electrons are arranged and how spectra arise.

## Quantum Numbers
| Symbol | Name | Meaning |
| --- | --- | --- |
| n | Principal | Shell, energy |
| l | Azimuthal | Subshell shape (0=s,1=p,2=d) |
| m | Magnetic | Orbital orientation |
| s | Spin | ±½ |

## Bohr Model and Spectra
\`\`\`
E_n = -13.6·Z²/n² eV
1/λ = R·Z²(1/n₁² - 1/n₂²)
\`\`\`

- Hydrogen's **Lyman, Balmer, Paschen** series correspond to transitions to n = 1, 2, 3.

## Filling Rules
- **Aufbau principle**: fill the lowest-energy orbitals first.
- **Pauli exclusion**: no two electrons share all four quantum numbers.
- **Hund's rule**: orbitals of a subshell fill singly before pairing.

## Dual Nature
\`\`\`
λ = h/(mv)              (de Broglie)
Δx·Δp ≥ h/(4π)          (Heisenberg uncertainty)
\`\`\`

### Key Facts
- The **(n + l) rule** orders subshell energies; for equal (n + l), lower n fills first.
- Half-filled and fully-filled subshells (e.g. **Cr: 3d⁵4s¹**) gain extra stability.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-periodicity-m01",
      topicId: "jee-chemistry-periodicity",
      title: "Periodic Table & Periodicity",
      content: `The **modern periodic law** arranges elements by increasing **atomic number**, giving recurring properties.

## Periodic Trends
| Property | Across a period | Down a group |
| --- | --- | --- |
| Atomic radius | Decreases | Increases |
| Ionisation energy | Increases | Decreases |
| Electron affinity | Increases (mostly) | Decreases |
| Electronegativity | Increases | Decreases |
| Metallic character | Decreases | Increases |

## Why the Trends
- **Effective nuclear charge (Z_eff)** rises across a period, pulling electrons closer.
- New shells dominate down a group, increasing size despite higher Z.

## Ionisation Energy
- **IE₂ > IE₁** always; large jumps reveal a noble-gas core.
- Exceptions: B < Be and O < N due to subshell stability.

## Classification
- **s-block**: groups 1-2; **p-block**: 13-18; **d-block**: transition metals; **f-block**: lanthanides and actinides.

### Anomalies
- The **lanthanide contraction** makes 4d and 5d elements of similar size (e.g. Zr and Hf).
- **Fluorine has a lower electron affinity** than chlorine due to its small, crowded 2p shell.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-mole-concept-m01",
      topicId: "jee-chemistry-mole-concept",
      title: "Mole Concept & Stoichiometry",
      content: `The **mole** is the chemist's counting unit, equal to **Avogadro's number** of particles.

## Core Relations
\`\`\`
N_A = 6.022 × 10²³
moles n = mass / molar mass = N / N_A
\`\`\`

- At **STP**, one mole of an ideal gas occupies **22.4 L**.

## Concentration Terms
| Term | Definition |
| --- | --- |
| Molarity (M) | moles solute / litre solution |
| Molality (m) | moles solute / kg solvent |
| Mole fraction | moles component / total moles |

## Stoichiometry
- Balance the equation, convert masses to moles, use **mole ratios**, then convert back.
- The **limiting reagent** is fully consumed and sets the maximum product.

## Composition
\`\`\`
% by mass = (mass of element / molar mass) × 100
Empirical formula → divide moles by smallest
Molecular formula = (empirical) × n
\`\`\`

### Concentration Tips
- **ppm** = mg solute per kg (or per litre) of solution.
- Dilution obeys **M₁V₁ = M₂V₂**; adding solvent lowers molarity but keeps moles constant.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-equilibrium-m01",
      topicId: "jee-chemistry-equilibrium",
      title: "Chemical & Ionic Equilibrium",
      content: `**Equilibrium** is the dynamic state where forward and reverse reaction rates are equal.

## Equilibrium Constant
\`\`\`
For aA + bB ⇌ cC + dD:
Kc = [C]^c[D]^d / ([A]^a[B]^b)
Kp = Kc·(RT)^Δn
\`\`\`

- A large **K** favours products; K is constant at fixed temperature.

## Le Chatelier's Principle
| Change | Shift |
| --- | --- |
| Increase reactant | Toward products |
| Increase pressure | Toward fewer gas moles |
| Increase temperature | Toward endothermic side |

## Ionic Equilibrium
- **pH = −log[H⁺]**; for water at 25°C, **K_w = [H⁺][OH⁻] = 10⁻¹⁴**.
- Weak acid: **K_a = [H⁺][A⁻]/[HA]**; pH ≈ ½(pK_a − log C).

## Buffers
\`\`\`
Henderson-Hasselbalch:  pH = pK_a + log([salt]/[acid])
\`\`\`

### Solubility
- **Solubility product K_sp** governs sparingly soluble salts; precipitation occurs when the ionic product exceeds K_sp.
- The **common-ion effect** suppresses solubility and ionisation.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-thermodynamics-m01",
      topicId: "jee-chemistry-thermodynamics",
      title: "Chemical Thermodynamics",
      content: `**Chemical thermodynamics** predicts whether a reaction is feasible and how much energy it exchanges.

## State Functions
\`\`\`
ΔU = q + w            (first law, w = -PΔV)
ΔH = ΔU + ΔnRT        (enthalpy)
\`\`\`

- **Enthalpy, entropy and Gibbs energy** are state functions; q and w are not.

## Enthalpy
| Type | Meaning |
| --- | --- |
| ΔH_f | Formation from elements |
| ΔH_c | Complete combustion |
| ΔH_neut | Acid-base neutralisation |

- **Hess's law**: ΔH of a reaction is path-independent; add step enthalpies.

## Spontaneity
\`\`\`
ΔG = ΔH - TΔS
\`\`\`

| ΔG | Process |
| --- | --- |
| < 0 | Spontaneous |
| = 0 | At equilibrium |
| > 0 | Non-spontaneous |

- Also **ΔG° = −RT·ln K**, linking thermodynamics to equilibrium.

### Entropy
- **Entropy increases** for gas-producing or disorder-increasing reactions.
- The **third law** sets the entropy of a perfect crystal at 0 K to zero.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-goc-m01",
      topicId: "jee-chemistry-goc",
      title: "GOC: Basics of Organic Chemistry",
      content: `**General Organic Chemistry (GOC)** provides the electronic principles behind organic reactivity.

## Electronic Effects
- **Inductive effect**: σ-bond polarisation; −I groups (NO₂, halogens) withdraw, +I groups (alkyl) donate.
- **Resonance (mesomeric) effect**: delocalisation of π electrons; +M donate, −M withdraw.
- **Hyperconjugation**: stabilisation by adjacent C–H σ bonds (no-bond resonance).

## Reaction Intermediates
| Intermediate | Stability order |
| --- | --- |
| Carbocation | 3° > 2° > 1° > methyl |
| Free radical | 3° > 2° > 1° > methyl |
| Carbanion | methyl > 1° > 2° > 3° |

## Acidity and Basicity
- Stronger acids give more **stable conjugate bases**; resonance and −I increase acidity.
- **Carboxylic acids > phenols > alcohols** in acidic strength.

## Isomerism
- **Structural** (chain, position, functional) versus **stereoisomerism** (geometrical, optical).
- A **chiral carbon** has four different groups and rotates plane-polarised light.

### Key Idea
- Reactive sites are classed as **electrophiles** (electron-poor) and **nucleophiles** (electron-rich); curly arrows track electron-pair movement.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-hydrocarbons-m01",
      topicId: "jee-chemistry-hydrocarbons",
      title: "Hydrocarbons",
      content: `**Hydrocarbons** contain only carbon and hydrogen and are the parent compounds of organic chemistry.

## Classes
| Class | Bonding | General formula |
| --- | --- | --- |
| Alkanes | Single | CₙH₂ₙ₊₂ |
| Alkenes | One double | CₙH₂ₙ |
| Alkynes | One triple | CₙH₂ₙ₋₂ |

## Alkanes
- Largely **unreactive**; undergo **free-radical substitution** with halogens in light.
- Combustion: CₙH₂ₙ₊₂ + O₂ gives CO₂ and H₂O.

## Alkenes and Alkynes
- Undergo **electrophilic addition** (HX, H₂O, Br₂).
- **Markovnikov's rule**: H adds to the carbon with more hydrogens; peroxides reverse it (anti-Markovnikov).

## Aromatic Hydrocarbons
- **Benzene** is planar, with delocalised π electrons obeying **Hückel's (4n + 2)** rule.
- It favours **electrophilic substitution** (nitration, halogenation, Friedel-Crafts) over addition.

### Directing Effects
- **Ortho/para directors** (−OH, −NH₂, alkyl) activate the ring; **meta directors** (−NO₂, −COOH) deactivate it.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-coordination-compounds-m01",
      topicId: "jee-chemistry-coordination-compounds",
      title: "Coordination Compounds",
      content: `**Coordination compounds** contain a central metal ion bonded to **ligands** by coordinate bonds.

## Werner's Terminology
- **Coordination number** is the number of ligand donor atoms attached to the metal.
- **Ligands** are mono-, bi- or polydentate; **chelating** ligands (en, EDTA) form rings.

## Nomenclature and Isomerism
| Isomerism | Basis |
| --- | --- |
| Ionisation | Counter-ion swaps with ligand |
| Linkage | Ambidentate ligand (NO₂/ONO) |
| Geometrical | cis / trans |
| Optical | Non-superimposable mirror images |

## Crystal Field Theory
- Ligands split the d orbitals into **t₂g and e_g** sets by an energy **Δ₀** (octahedral).
- **Strong-field ligands** (CN⁻, CO) give low-spin; **weak-field** (I⁻, Br⁻) give high-spin.

\`\`\`
CFSE depends on Δ₀ and the number of d electrons
\`\`\`

## Magnetic Behaviour
- **Spin-only moment** μ = sqrt(n(n + 2)) BM, where n is the number of unpaired electrons.

### Spectrochemical Series
- Approximate field strength: **I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO**.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-electrochemistry-m01",
      topicId: "jee-chemistry-electrochemistry",
      title: "Electrochemistry",
      content: `**Electrochemistry** connects chemical reactions with electrical energy through redox processes.

## Cells
- A **galvanic (voltaic) cell** converts chemical energy to electrical; **oxidation at the anode**, reduction at the cathode.
- An **electrolytic cell** uses electricity to drive a non-spontaneous reaction.

## Electrode Potential
\`\`\`
E°cell = E°cathode - E°anode
Nernst:  E = E° - (0.059/n)·log Q   (at 25°C)
\`\`\`

- A higher (more positive) **standard reduction potential** means a stronger oxidising agent.

## Thermodynamics Link
\`\`\`
ΔG° = -nFE°cell        F = 96500 C/mol
E°cell = (0.059/n)·log K
\`\`\`

## Conductance
| Quantity | Symbol |
| --- | --- |
| Conductivity | κ |
| Molar conductivity | Λ_m = κ × 1000 / C |

- **Kohlrausch's law**: Λ°_m is the sum of independent ionic contributions.

### Faraday's Laws of Electrolysis
- Mass deposited **m = (Z·I·t)** where Z is the electrochemical equivalent; **96500 C** deposits one gram-equivalent.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-chemistry-states-of-matter-m01",
      topicId: "jee-chemistry-states-of-matter",
      title: "States of Matter (Gases)",
      content: `The **gaseous state** is governed by simple laws relating pressure, volume and temperature.

## Gas Laws
| Law | Relation | Held constant |
| --- | --- | --- |
| Boyle | PV = const | T |
| Charles | V/T = const | P |
| Gay-Lussac | P/T = const | V |
| Avogadro | V ∝ n | P, T |

## Ideal Gas Equation
\`\`\`
PV = nRT
R = 0.0821 L·atm/(mol·K) = 8.314 J/(mol·K)
\`\`\`

- **Dalton's law**: total pressure = sum of partial pressures.

## Kinetic Molecular Theory
\`\`\`
v_rms = sqrt(3RT/M)
KE_avg = (3/2)kT per molecule
\`\`\`

- Three speeds rank as **v_mp < v_avg < v_rms**.

## Real Gases
- **van der Waals equation**: (P + an²/V²)(V − nb) = nRT corrects for attraction (a) and molecular volume (b).
- The **compressibility factor Z = PV/nRT**; Z = 1 for an ideal gas.

### Deviations
- Real gases behave most ideally at **high temperature and low pressure**, where intermolecular forces are negligible.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-complex-numbers-m01",
      topicId: "jee-mathematics-complex-numbers",
      title: "Complex Numbers",
      content: `A **complex number** z = x + iy combines a real and an imaginary part, where **i² = −1**.

## Modulus and Argument
\`\`\`
|z| = sqrt(x² + y²)
arg(z) = arctan(y/x)
z = r(cosθ + i·sinθ) = r·e^(iθ)
\`\`\`

- The **conjugate** is z̄ = x − iy, and **z·z̄ = |z|²**.

## Operations
| Operation | Result |
| --- | --- |
| Addition | Add real and imaginary parts |
| Multiplication | Multiply moduli, add arguments |
| Division | Divide moduli, subtract arguments |

## De Moivre's Theorem
\`\`\`
(cosθ + i·sinθ)^n = cos(nθ) + i·sin(nθ)
\`\`\`

- The **nth roots of unity** are equally spaced on the unit circle and sum to zero.

## Cube Roots of Unity
- They are **1, ω, ω²**, with **1 + ω + ω² = 0** and **ω³ = 1**.

### Geometry
- |z − z₀| = r is a **circle** of radius r centred at z₀.
- Multiplying by **e^(iθ)** rotates a point about the origin by angle θ.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sequences-series-m01",
      topicId: "jee-mathematics-sequences-series",
      title: "Sequences & Series",
      content: `A **sequence** is an ordered list; a **series** is the sum of its terms.

## Arithmetic Progression (AP)
\`\`\`
nth term:  a_n = a + (n - 1)d
Sum:       S_n = (n/2)[2a + (n - 1)d]
\`\`\`

- The **arithmetic mean** of a and b is (a + b)/2.

## Geometric Progression (GP)
\`\`\`
nth term:  a_n = a·r^(n-1)
Sum:       S_n = a(rⁿ - 1)/(r - 1)
Infinite:  S = a/(1 - r),  |r| < 1
\`\`\`

- The **geometric mean** of a and b is sqrt(ab).

## Means Inequality
| Means | Relation |
| --- | --- |
| AM, GM, HM | AM ≥ GM ≥ HM |

- Equality holds only when all terms are equal; also **GM² = AM × HM**.

## Special Sums
\`\`\`
Σn = n(n + 1)/2
Σn² = n(n + 1)(2n + 1)/6
Σn³ = [n(n + 1)/2]²
\`\`\`

### Harmonic Progression
- An **HP** is a sequence whose reciprocals form an AP; there is no simple closed sum formula.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-permutations-combinations-m01",
      topicId: "jee-mathematics-permutations-combinations",
      title: "Permutations & Combinations",
      content: `**Permutations and combinations** count arrangements and selections.

## Fundamental Principle
- **Multiplication rule**: if a task has m then n independent choices, total ways = m × n.
- **Addition rule** applies to mutually exclusive options.

## Formulas
\`\`\`
nPr = n! / (n - r)!        (order matters)
nCr = n! / (r!(n - r)!)    (order does not matter)
\`\`\`

| Identity | Statement |
| --- | --- |
| nCr = nC(n−r) | Symmetry |
| nCr + nC(r−1) = (n+1)Cr | Pascal's rule |
| Σ nCr | = 2ⁿ |

## Special Cases
- Arrangements of **n objects with repeats** p, q, ...: n! / (p!·q!...).
- **Circular permutations** of n objects = (n − 1)!.

## Selections
- Choosing **at least one** from n distinct items: 2ⁿ − 1.
- Distributing identical items into groups uses the **stars and bars** method.

### Tip
- Decide first whether **order matters** (permutation) or not (combination); fix forbidden or required positions before counting the rest.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-binomial-theorem-m01",
      topicId: "jee-mathematics-binomial-theorem",
      title: "Binomial Theorem",
      content: `The **binomial theorem** expands powers of a sum into a series of terms.

## The Expansion
\`\`\`
(a + b)ⁿ = Σ (from r=0 to n) nCr · a^(n-r) · b^r
\`\`\`

- There are **n + 1 terms**; coefficients are the binomial coefficients nCr.

## General Term
\`\`\`
T_(r+1) = nCr · a^(n-r) · b^r
\`\`\`

- This locates any specific term, such as the **term independent of x** (set the power of x to zero).

## Properties
| Property | Statement |
| --- | --- |
| Sum of coefficients | Put a = b = 1, gives 2ⁿ |
| Middle term | One term if n even, two if n odd |
| Symmetry | nCr = nC(n−r) |

## Greatest Term and Coefficient
- The **greatest binomial coefficient** is the middle one(s).

## Infinite Series
\`\`\`
(1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + ...   for |x| < 1
\`\`\`

### Use
- Valid for **any real index n** when |x| < 1; useful for approximations like (1 + x)ⁿ ≈ 1 + nx for small x.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-matrices-determinants-m01",
      topicId: "jee-mathematics-matrices-determinants",
      title: "Matrices & Determinants",
      content: `**Matrices** are rectangular arrays of numbers; **determinants** are scalars attached to square matrices.

## Matrix Basics
- Addition needs equal orders; **multiplication** requires inner dimensions to match and is generally **not commutative**.
- The **transpose** swaps rows and columns; (AB)ᵀ = BᵀAᵀ.

## Determinants
\`\`\`
2×2:  |A| = ad - bc
\`\`\`

| Property | Effect on |A| |
| --- | --- |
| Swap two rows | Sign changes |
| Multiply a row by k | Multiplies by k |
| Equal rows | Determinant is 0 |

## Inverse
\`\`\`
A⁻¹ = adj(A) / |A|,   exists only if |A| ≠ 0
\`\`\`

- A matrix is **singular** when |A| = 0 and has no inverse.

## Solving Systems
- **Cramer's rule**: x = Dₓ/D, provided D = |A| ≠ 0.
- For AX = B: a **unique solution** exists when |A| ≠ 0.

### Special Matrices
- **Symmetric**: Aᵀ = A; **skew-symmetric**: Aᵀ = −A (diagonal entries zero).
- For an n×n matrix, **|kA| = kⁿ|A|** and |AB| = |A|·|B|.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-straight-lines-circles-m01",
      topicId: "jee-mathematics-straight-lines-circles",
      title: "Straight Lines & Circles",
      content: `**Coordinate geometry** describes lines and circles by algebraic equations.

## Straight Lines
\`\`\`
Slope:        m = (y₂ - y₁)/(x₂ - x₁)
Point-slope:  y - y₁ = m(x - x₁)
Slope-intercept: y = mx + c
\`\`\`

| Relation | Condition |
| --- | --- |
| Parallel | m₁ = m₂ |
| Perpendicular | m₁·m₂ = −1 |

- **Distance from point to line** ax + by + c = 0: |ax₁ + by₁ + c| / sqrt(a² + b²).

## Circles
\`\`\`
Standard:  (x - h)² + (y - k)² = r²
General:   x² + y² + 2gx + 2fy + c = 0
\`\`\`

- Centre is **(−g, −f)** and radius **sqrt(g² + f² − c)**.

## Tangents
- A line is **tangent** to a circle when its distance from the centre equals the radius.
- Length of a tangent from an external point: **sqrt(S₁)**.

### Key Points
- The **angle between two lines**: tanθ = |(m₁ − m₂)/(1 + m₁m₂)|.
- Two circles **touch** when the distance between centres equals the sum (external) or difference (internal) of radii.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-limits-continuity-m01",
      topicId: "jee-mathematics-limits-continuity",
      title: "Limits, Continuity & Differentiability",
      content: `**Calculus** begins with limits, which underpin continuity and the derivative.

## Standard Limits
\`\`\`
lim (x→0) sin(x)/x = 1
lim (x→0) (e^x - 1)/x = 1
lim (x→0) (1 + x)^(1/x) = e
\`\`\`

- Indeterminate forms (0/0, ∞/∞) often yield to **L'Hopital's rule**.

## Continuity
A function is **continuous at x = a** when:

\`\`\`
lim (x→a) f(x) = f(a)
\`\`\`

| Discontinuity | Cause |
| --- | --- |
| Removable | Limit exists but ≠ f(a) |
| Jump | Left and right limits differ |
| Infinite | Limit is unbounded |

## Differentiability
- **f'(a) = lim (h→0) [f(a + h) − f(a)] / h**.
- Differentiability **implies continuity**, but not the reverse (e.g. |x| at 0).

## Rules
\`\`\`
Product:  (uv)' = u'v + uv'
Quotient: (u/v)' = (u'v - uv')/v²
Chain:    dy/dx = (dy/du)(du/dx)
\`\`\`

### Tip
- A function must be **continuous and have a unique tangent** to be differentiable; corners and cusps break differentiability.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-integration-m01",
      topicId: "jee-mathematics-integration",
      title: "Integration",
      content: `**Integration** reverses differentiation and measures accumulated quantities such as area.

## Standard Integrals
\`\`\`
∫ xⁿ dx = x^(n+1)/(n+1) + C   (n ≠ -1)
∫ (1/x) dx = ln|x| + C
∫ eˣ dx = eˣ + C
∫ sin(x) dx = -cos(x) + C
\`\`\`

## Techniques
| Method | When to use |
| --- | --- |
| Substitution | Composite functions |
| By parts | Product of unlike functions |
| Partial fractions | Rational functions |

- **Integration by parts**: ∫ u dv = uv − ∫ v du (choose u by the **ILATE** rule).

## Definite Integrals
\`\`\`
∫ (from a to b) f(x) dx = F(b) - F(a)
\`\`\`

- This is the **Fundamental Theorem of Calculus**, linking area to antiderivatives.

## Useful Properties
\`\`\`
∫ (a to b) f(x) dx = ∫ (a to b) f(a + b - x) dx
\`\`\`

### Symmetry
- For an **odd** function, ∫ (−a to a) f = 0; for an **even** function it equals 2∫ (0 to a) f.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-vectors-3d-m01",
      topicId: "jee-mathematics-vectors-3d",
      title: "Vectors & 3D Geometry",
      content: `**Vectors** carry magnitude and direction; 3D geometry locates points, lines and planes in space.

## Vector Products
\`\`\`
Dot:    a·b = |a||b|cosθ          (scalar)
Cross:  |a×b| = |a||b|sinθ        (vector, ⟂ to both)
\`\`\`

- **a·b = 0** means perpendicular; **a×b = 0** means parallel.

## Magnitude and Projection
- |a| = sqrt(a₁² + a₂² + a₃²).
- **Projection** of a on b = (a·b)/|b|.

## Triple Products
| Product | Meaning |
| --- | --- |
| Scalar triple a·(b×c) | Volume of parallelepiped |
| Coplanar vectors | Scalar triple product = 0 |

## 3D Geometry
\`\`\`
Line:   (x - x₁)/a = (y - y₁)/b = (z - z₁)/c
Plane:  ax + by + cz + d = 0
\`\`\`

- The **direction ratios** of the plane's normal are (a, b, c).

### Distances and Angles
- Distance of a point from a plane uses |ax₁ + by₁ + cz₁ + d| / sqrt(a² + b² + c²).
- The **angle between two planes** equals the angle between their normals.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "jee-mathematics-probability-m01",
      topicId: "jee-mathematics-probability",
      title: "Probability",
      content: `**Probability** measures the likelihood of events on a scale from 0 to 1.

## Basics
\`\`\`
P(E) = favourable outcomes / total outcomes
P(E) + P(E') = 1
\`\`\`

## Addition and Multiplication
| Rule | Statement |
| --- | --- |
| Addition | P(A∪B) = P(A) + P(B) − P(A∩B) |
| Mutually exclusive | P(A∩B) = 0 |
| Independent | P(A∩B) = P(A)·P(B) |

## Conditional Probability
\`\`\`
P(A|B) = P(A∩B) / P(B)
\`\`\`

- **Bayes' theorem** updates a prior using new evidence.

## Bayes' Theorem
\`\`\`
P(A|B) = P(B|A)·P(A) / P(B)
\`\`\`

## Distributions
- **Binomial**: P(X = r) = nCr·pʳ·q^(n−r), with mean **np** and variance **npq**.

### Tips
- Identify whether events are **independent or mutually exclusive** before combining them; these are different conditions and rarely both hold.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "jee-physics-kinematics-1d-q01",
      topicId: "jee-physics-kinematics-1d",
      text: "A body starts from rest and accelerates at 2 m/s². How far does it travel in 5 s?",
      optionA: "25 m",
      optionB: "20 m",
      optionC: "50 m",
      optionD: "10 m",
      correctOption: "A",
      explanation: "s = ut + ½at² = 0 + ½(2)(25) = 25 m.",
      orderIndex: 0
    },
    {
      id: "jee-physics-kinematics-1d-q02",
      topicId: "jee-physics-kinematics-1d",
      text: "A stone is dropped from rest. Its velocity after 3 s (g = 10 m/s²) is:",
      optionA: "30 m/s",
      optionB: "10 m/s",
      optionC: "20 m/s",
      optionD: "45 m/s",
      correctOption: "A",
      explanation: "v = u + gt = 0 + 10 × 3 = 30 m/s.",
      orderIndex: 1
    },
    {
      id: "jee-physics-kinematics-1d-q03",
      topicId: "jee-physics-kinematics-1d",
      text: "The area under a velocity–time graph represents:",
      optionA: "Acceleration",
      optionB: "Displacement",
      optionC: "Jerk",
      optionD: "Average speed",
      correctOption: "B",
      explanation: "Integrating velocity over time gives displacement, which is the area under the v–t curve.",
      orderIndex: 2
    },
    {
      id: "jee-physics-kinematics-1d-q04",
      topicId: "jee-physics-kinematics-1d",
      text: "A car moving at 20 m/s decelerates uniformly and stops in 100 m. The deceleration is:",
      optionA: "1 m/s²",
      optionB: "10 m/s²",
      optionC: "2 m/s²",
      optionD: "4 m/s²",
      correctOption: "C",
      explanation: "Using v² = u² + 2as: 0 = 400 + 2a(100), so a = −2 m/s².",
      orderIndex: 3
    },
    {
      id: "jee-physics-kinematics-1d-q05",
      topicId: "jee-physics-kinematics-1d",
      text: "The distance covered in the n-th second by a body from rest with acceleration a is:",
      optionA: "a(n − 1)",
      optionB: "an",
      optionC: "½an²",
      optionD: "(a/2)(2n − 1)",
      correctOption: "D",
      explanation: "s_nth = u + (a/2)(2n − 1); with u = 0 it reduces to (a/2)(2n − 1).",
      orderIndex: 4
    },
    {
      id: "jee-physics-kinematics-1d-q06",
      topicId: "jee-physics-kinematics-1d",
      text: "A ball thrown vertically up with 20 m/s reaches a maximum height of (g = 10 m/s²):",
      optionA: "30 m",
      optionB: "10 m",
      optionC: "20 m",
      optionD: "40 m",
      correctOption: "C",
      explanation: "At the top v = 0, so h = u²/2g = 400/20 = 20 m.",
      orderIndex: 5
    },
    {
      id: "jee-physics-kinematics-1d-q07",
      topicId: "jee-physics-kinematics-1d",
      text: "If velocity is negative and acceleration is positive, the body is:",
      optionA: "Slowing down",
      optionB: "Speeding up",
      optionC: "At rest",
      optionD: "Moving at constant speed",
      correctOption: "A",
      explanation: "Opposite signs of v and a mean the speed (magnitude) is decreasing.",
      orderIndex: 6
    },
    {
      id: "jee-physics-kinematics-1d-q08",
      topicId: "jee-physics-kinematics-1d",
      text: "Two balls are dropped 1 s apart from the same height. As they fall, the gap between them:",
      optionA: "Stays constant",
      optionB: "Decreases",
      optionC: "Increases",
      optionD: "First increases then decreases",
      correctOption: "C",
      explanation: "The earlier ball is always faster, so the separation grows with time.",
      orderIndex: 7
    },
    {
      id: "jee-physics-rotational-motion-q01",
      topicId: "jee-physics-rotational-motion",
      text: "The moment of inertia of a solid sphere about a diameter is:",
      optionA: "MR²",
      optionB: "(2/5)MR²",
      optionC: "(1/2)MR²",
      optionD: "(2/3)MR²",
      correctOption: "B",
      explanation: "A uniform solid sphere has I = (2/5)MR² about any diameter.",
      orderIndex: 0
    },
    {
      id: "jee-physics-rotational-motion-q02",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational analogue of force is:",
      optionA: "Momentum",
      optionB: "Torque",
      optionC: "Impulse",
      optionD: "Power",
      correctOption: "B",
      explanation: "Torque τ = Iα plays the role of force F = ma in rotation.",
      orderIndex: 1
    },
    {
      id: "jee-physics-rotational-motion-q03",
      topicId: "jee-physics-rotational-motion",
      text: "A skater pulls in her arms while spinning. Her angular velocity:",
      optionA: "Stays the same",
      optionB: "Decreases",
      optionC: "Increases",
      optionD: "Becomes zero",
      correctOption: "C",
      explanation: "With torque zero, L = Iω is conserved; reducing I increases ω.",
      orderIndex: 2
    },
    {
      id: "jee-physics-rotational-motion-q04",
      topicId: "jee-physics-rotational-motion",
      text: "Which body reaches the bottom of an incline first while rolling without slipping?",
      optionA: "Hollow cylinder",
      optionB: "Hollow sphere",
      optionC: "Ring",
      optionD: "Solid sphere",
      correctOption: "D",
      explanation: "The solid sphere has the smallest I/MR² (2/5), giving the largest acceleration.",
      orderIndex: 3
    },
    {
      id: "jee-physics-rotational-motion-q05",
      topicId: "jee-physics-rotational-motion",
      text: "The parallel axis theorem states I = :",
      optionA: "I_cm − Md²",
      optionB: "I_cm + Md²",
      optionC: "I_cm + ½Md²",
      optionD: "2I_cm + Md²",
      correctOption: "B",
      explanation: "I about a parallel axis equals the centre-of-mass value plus Md².",
      orderIndex: 4
    },
    {
      id: "jee-physics-rotational-motion-q06",
      topicId: "jee-physics-rotational-motion",
      text: "For rolling without slipping, the velocity of the contact point with the ground is:",
      optionA: "v",
      optionB: "v/2",
      optionC: "2v",
      optionD: "Zero",
      correctOption: "D",
      explanation: "In pure rolling, the instantaneous velocity of the contact point is zero.",
      orderIndex: 5
    },
    {
      id: "jee-physics-rotational-motion-q07",
      topicId: "jee-physics-rotational-motion",
      text: "The rotational kinetic energy of a body is:",
      optionA: "½Iω²",
      optionB: "Iω²",
      optionC: "½Iω",
      optionD: "½I²ω",
      correctOption: "A",
      explanation: "Rotational KE = ½Iω², analogous to ½mv² for translation.",
      orderIndex: 6
    },
    {
      id: "jee-physics-rotational-motion-q08",
      topicId: "jee-physics-rotational-motion",
      text: "A disc of moment of inertia 2 kg·m² spins at 3 rad/s. Its angular momentum is:",
      optionA: "3 kg·m²/s",
      optionB: "9 kg·m²/s",
      optionC: "5 kg·m²/s",
      optionD: "6 kg·m²/s",
      correctOption: "D",
      explanation: "L = Iω = 2 × 3 = 6 kg·m²/s.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-chemical-bonding-q01",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The shape of a molecule with sp³ hybridisation and no lone pairs is:",
      optionA: "Tetrahedral",
      optionB: "Trigonal planar",
      optionC: "Linear",
      optionD: "Octahedral",
      correctOption: "A",
      explanation: "Four equivalent sp³ orbitals point to the corners of a tetrahedron (109.5°).",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-chemical-bonding-q02",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond angle in a water molecule is approximately:",
      optionA: "90°",
      optionB: "104.5°",
      optionC: "109.5°",
      optionD: "120°",
      correctOption: "B",
      explanation: "Two lone pairs on the sp³ oxygen compress the H–O–H angle to about 104.5°.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-chemical-bonding-q03",
      topicId: "jee-chemistry-chemical-bonding",
      text: "Which molecule has a zero net dipole moment despite polar bonds?",
      optionA: "CO₂",
      optionB: "NH₃",
      optionC: "HCl",
      optionD: "H₂O",
      correctOption: "A",
      explanation: "CO₂ is linear and symmetric, so the two bond dipoles cancel exactly.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-chemical-bonding-q04",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The bond order of the oxygen molecule (O₂) from MO theory is:",
      optionA: "2",
      optionB: "1",
      optionC: "1.5",
      optionD: "3",
      correctOption: "A",
      explanation: "O₂ has a bond order of 2 and two unpaired electrons, making it paramagnetic.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-chemical-bonding-q05",
      topicId: "jee-chemistry-chemical-bonding",
      text: "According to Fajans' rules, covalent character increases with:",
      optionA: "Large cation, small anion",
      optionB: "Small cation, large anion",
      optionC: "Low cation charge",
      optionD: "Large anion, large cation",
      correctOption: "B",
      explanation: "A small, highly charged cation polarises a large anion, increasing covalent character.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-chemical-bonding-q06",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The hybridisation of carbon in ethyne (C₂H₂) is:",
      optionA: "sp",
      optionB: "sp²",
      optionC: "sp³",
      optionD: "sp³d",
      correctOption: "A",
      explanation: "The triple-bonded carbons in ethyne are sp hybridised, giving a linear molecule.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-chemical-bonding-q07",
      topicId: "jee-chemistry-chemical-bonding",
      text: "The unusually high boiling point of water is mainly due to:",
      optionA: "Ionic bonding",
      optionB: "Hydrogen bonding",
      optionC: "Van der Waals forces",
      optionD: "Metallic bonding",
      correctOption: "B",
      explanation: "Extensive hydrogen bonding between water molecules requires extra energy to break.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-chemical-bonding-q08",
      topicId: "jee-chemistry-chemical-bonding",
      text: "In the ammonium ion (NH₄⁺), the fourth N–H bond is a:",
      optionA: "Ionic bond",
      optionB: "Metallic bond",
      optionC: "Hydrogen bond",
      optionD: "Coordinate bond",
      correctOption: "D",
      explanation: "The lone pair on nitrogen forms a coordinate (dative) bond with the proton.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-quadratic-equations-q01",
      topicId: "jee-mathematics-quadratic-equations",
      text: "For the equation x² − 5x + 6 = 0, the sum of the roots is:",
      optionA: "6",
      optionB: "−5",
      optionC: "5",
      optionD: "−6",
      correctOption: "C",
      explanation: "Sum of roots = −b/a = −(−5)/1 = 5 (roots are 2 and 3).",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-quadratic-equations-q02",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The discriminant of 2x² + 3x + 5 = 0 is:",
      optionA: "31",
      optionB: "−31",
      optionC: "49",
      optionD: "−49",
      correctOption: "B",
      explanation: "D = b² − 4ac = 9 − 40 = −31, so the roots are complex.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-quadratic-equations-q03",
      topicId: "jee-mathematics-quadratic-equations",
      text: "If the roots of a quadratic are equal, the discriminant is:",
      optionA: "Zero",
      optionB: "Negative",
      optionC: "Irrational",
      optionD: "Positive",
      correctOption: "A",
      explanation: "Equal real roots occur exactly when D = b² − 4ac = 0.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-quadratic-equations-q04",
      topicId: "jee-mathematics-quadratic-equations",
      text: "The quadratic equation whose roots are 3 and −2 is:",
      optionA: "x² − x − 6 = 0",
      optionB: "x² + x − 6 = 0",
      optionC: "x² − 5x + 6 = 0",
      optionD: "x² + 5x + 6 = 0",
      correctOption: "A",
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
    },
    {
      id: "jee-physics-laws-of-motion-q01",
      topicId: "jee-physics-laws-of-motion",
      text: "A net force of 12 N acts on a 3 kg block. Its acceleration is:",
      optionA: "2 m/s²",
      optionB: "36 m/s²",
      optionC: "9 m/s²",
      optionD: "4 m/s²",
      correctOption: "D",
      explanation: "By Newton's second law a = F/m = 12/3 = 4 m/s².",
      orderIndex: 0
    },
    {
      id: "jee-physics-laws-of-motion-q02",
      topicId: "jee-physics-laws-of-motion",
      text: "Newton's third law force pairs always act on:",
      optionA: "The same body",
      optionB: "Massless objects only",
      optionC: "Two different bodies",
      optionD: "The Earth only",
      correctOption: "C",
      explanation: "Action and reaction are equal, opposite, and act on different bodies.",
      orderIndex: 1
    },
    {
      id: "jee-physics-laws-of-motion-q03",
      topicId: "jee-physics-laws-of-motion",
      text: "A block on a horizontal surface has mu_s = 0.5 and mass 4 kg (g = 10). Maximum static friction is:",
      optionA: "10 N",
      optionB: "40 N",
      optionC: "2 N",
      optionD: "20 N",
      correctOption: "D",
      explanation: "f_max = mu_s x N = 0.5 x 4 x 10 = 20 N.",
      orderIndex: 2
    },
    {
      id: "jee-physics-laws-of-motion-q04",
      topicId: "jee-physics-laws-of-motion",
      text: "The angle of repose theta for a surface with coefficient of friction mu satisfies:",
      optionA: "sin(theta) = mu",
      optionB: "cos(theta) = mu",
      optionC: "tan(theta) = mu",
      optionD: "theta = mu",
      correctOption: "C",
      explanation: "A block just slides when tan(theta) equals the coefficient of static friction.",
      orderIndex: 3
    },
    {
      id: "jee-physics-laws-of-motion-q05",
      topicId: "jee-physics-laws-of-motion",
      text: "A person of mass 50 kg stands in a lift accelerating up at 2 m/s² (g = 10). Apparent weight is:",
      optionA: "500 N",
      optionB: "400 N",
      optionC: "600 N",
      optionD: "100 N",
      correctOption: "C",
      explanation: "Apparent weight = m(g + a) = 50 x 12 = 600 N.",
      orderIndex: 4
    },
    {
      id: "jee-physics-laws-of-motion-q06",
      topicId: "jee-physics-laws-of-motion",
      text: "Impulse is equal to the change in:",
      optionA: "Kinetic energy",
      optionB: "Momentum",
      optionC: "Acceleration",
      optionD: "Power",
      correctOption: "B",
      explanation: "Impulse J = F x t equals the change in momentum, by the impulse-momentum theorem.",
      orderIndex: 5
    },
    {
      id: "jee-physics-laws-of-motion-q07",
      topicId: "jee-physics-laws-of-motion",
      text: "Two blocks of 2 kg and 3 kg connected by a string are pulled by 20 N on a frictionless floor. Acceleration is:",
      optionA: "10 m/s²",
      optionB: "6.7 m/s²",
      optionC: "4 m/s²",
      optionD: "2 m/s²",
      correctOption: "C",
      explanation: "a = F/(m1 + m2) = 20/5 = 4 m/s².",
      orderIndex: 6
    },
    {
      id: "jee-physics-laws-of-motion-q08",
      topicId: "jee-physics-laws-of-motion",
      text: "A body in equilibrium under three forces means the forces:",
      optionA: "Are all equal",
      optionB: "Are perpendicular",
      optionC: "Form a closed triangle",
      optionD: "Have zero magnitude",
      correctOption: "C",
      explanation: "Three concurrent forces in equilibrium add vectorially to zero, forming a closed triangle.",
      orderIndex: 7
    },
    {
      id: "jee-physics-work-energy-power-q01",
      topicId: "jee-physics-work-energy-power",
      text: "A force of 10 N moves a body 5 m in its own direction. Work done is:",
      optionA: "2 J",
      optionB: "15 J",
      optionC: "0 J",
      optionD: "50 J",
      correctOption: "D",
      explanation: "W = F x s x cos(0) = 10 x 5 = 50 J.",
      orderIndex: 0
    },
    {
      id: "jee-physics-work-energy-power-q02",
      topicId: "jee-physics-work-energy-power",
      text: "The kinetic energy of a 2 kg body moving at 3 m/s is:",
      optionA: "9 J",
      optionB: "6 J",
      optionC: "18 J",
      optionD: "3 J",
      correctOption: "A",
      explanation: "KE = 0.5 x m x v² = 0.5 x 2 x 9 = 9 J.",
      orderIndex: 1
    },
    {
      id: "jee-physics-work-energy-power-q03",
      topicId: "jee-physics-work-energy-power",
      text: "Work done by a force perpendicular to the displacement is:",
      optionA: "Maximum",
      optionB: "Equal to F x s",
      optionC: "Zero",
      optionD: "Negative",
      correctOption: "C",
      explanation: "W = Fs cos(90) = 0; a perpendicular force does no work.",
      orderIndex: 2
    },
    {
      id: "jee-physics-work-energy-power-q04",
      topicId: "jee-physics-work-energy-power",
      text: "A spring of constant 200 N/m is stretched 0.1 m. Potential energy stored is:",
      optionA: "1 J",
      optionB: "2 J",
      optionC: "20 J",
      optionD: "10 J",
      correctOption: "A",
      explanation: "PE = 0.5 x k x x² = 0.5 x 200 x 0.01 = 1 J.",
      orderIndex: 3
    },
    {
      id: "jee-physics-work-energy-power-q05",
      topicId: "jee-physics-work-energy-power",
      text: "In a perfectly inelastic collision, the conserved quantity is:",
      optionA: "Kinetic energy",
      optionB: "Neither",
      optionC: "Both KE and momentum",
      optionD: "Momentum",
      correctOption: "D",
      explanation: "Momentum is conserved in all collisions; kinetic energy is lost when inelastic.",
      orderIndex: 4
    },
    {
      id: "jee-physics-work-energy-power-q06",
      topicId: "jee-physics-work-energy-power",
      text: "A 1000 W motor lifting a load does how much work in 10 s?",
      optionA: "100 J",
      optionB: "1000 J",
      optionC: "100000 J",
      optionD: "10000 J",
      correctOption: "D",
      explanation: "W = P x t = 1000 x 10 = 10000 J.",
      orderIndex: 5
    },
    {
      id: "jee-physics-work-energy-power-q07",
      topicId: "jee-physics-work-energy-power",
      text: "For a perfectly elastic collision, the coefficient of restitution e equals:",
      optionA: "0",
      optionB: "0.5",
      optionC: "2",
      optionD: "1",
      correctOption: "D",
      explanation: "e = 1 for elastic collisions; e = 0 for perfectly inelastic ones.",
      orderIndex: 6
    },
    {
      id: "jee-physics-work-energy-power-q08",
      topicId: "jee-physics-work-energy-power",
      text: "The instantaneous power delivered by a force F to a body moving at velocity v is:",
      optionA: "F/v",
      optionB: "F + v",
      optionC: "F x v",
      optionD: "0.5 F v²",
      correctOption: "C",
      explanation: "Instantaneous power P equals the dot product F x v.",
      orderIndex: 7
    },
    {
      id: "jee-physics-gravitation-q01",
      topicId: "jee-physics-gravitation",
      text: "The escape velocity from Earth is approximately:",
      optionA: "11.2 km/s",
      optionB: "7.9 km/s",
      optionC: "3.0 km/s",
      optionD: "30 km/s",
      correctOption: "A",
      explanation: "Earth's escape velocity is about 11.2 km/s, equal to sqrt(2GM/R).",
      orderIndex: 0
    },
    {
      id: "jee-physics-gravitation-q02",
      topicId: "jee-physics-gravitation",
      text: "If the distance between two masses is doubled, the gravitational force becomes:",
      optionA: "Half",
      optionB: "Four times",
      optionC: "Double",
      optionD: "One-quarter",
      correctOption: "D",
      explanation: "Force varies as 1/r²; doubling r reduces it to one-quarter.",
      orderIndex: 1
    },
    {
      id: "jee-physics-gravitation-q03",
      topicId: "jee-physics-gravitation",
      text: "The value of g at a height equal to Earth's radius R above the surface is:",
      optionA: "g/4",
      optionB: "g/2",
      optionC: "g",
      optionD: "g/9",
      correctOption: "A",
      explanation: "At height R, distance from centre is 2R, so g' = g/(2)² = g/4.",
      orderIndex: 2
    },
    {
      id: "jee-physics-gravitation-q04",
      topicId: "jee-physics-gravitation",
      text: "Kepler's third law states that the square of the orbital period is proportional to:",
      optionA: "Orbital radius",
      optionB: "Square of the radius",
      optionC: "Cube of the radius",
      optionD: "Mass of the planet",
      correctOption: "C",
      explanation: "T² is proportional to r³, Kepler's law of periods.",
      orderIndex: 3
    },
    {
      id: "jee-physics-gravitation-q05",
      topicId: "jee-physics-gravitation",
      text: "The orbital velocity of a satellite close to Earth's surface relates to escape velocity by:",
      optionA: "v_e = sqrt(2) v_o",
      optionB: "v_e = 2 v_o",
      optionC: "v_e = v_o",
      optionD: "v_e = v_o/2",
      correctOption: "A",
      explanation: "Escape velocity is sqrt(2) times the orbital velocity.",
      orderIndex: 4
    },
    {
      id: "jee-physics-gravitation-q06",
      topicId: "jee-physics-gravitation",
      text: "The period of a geostationary satellite is:",
      optionA: "24 hours",
      optionB: "12 hours",
      optionC: "1 hour",
      optionD: "365 days",
      correctOption: "A",
      explanation: "A geostationary satellite matches Earth's rotation with a 24-hour period.",
      orderIndex: 5
    },
    {
      id: "jee-physics-gravitation-q07",
      topicId: "jee-physics-gravitation",
      text: "The gravitational potential energy of two masses separated by r is:",
      optionA: "-GMm/r",
      optionB: "+GMm/r",
      optionC: "-GMm/r²",
      optionD: "GMm/r²",
      correctOption: "A",
      explanation: "Gravitational PE is negative: U = -GMm/r, taken zero at infinity.",
      orderIndex: 6
    },
    {
      id: "jee-physics-gravitation-q08",
      topicId: "jee-physics-gravitation",
      text: "At the centre of the Earth, the acceleration due to gravity is:",
      optionA: "Maximum",
      optionB: "Equal to surface g",
      optionC: "Infinite",
      optionD: "Zero",
      correctOption: "D",
      explanation: "g decreases linearly with depth and is zero at the centre.",
      orderIndex: 7
    },
    {
      id: "jee-physics-shm-waves-q01",
      topicId: "jee-physics-shm-waves",
      text: "The time period of a simple pendulum of length L is:",
      optionA: "2*pi*sqrt(g/L)",
      optionB: "2*pi*sqrt(L/g)",
      optionC: "2*pi*sqrt(m/k)",
      optionD: "sqrt(L/g)",
      correctOption: "B",
      explanation: "The pendulum period is 2*pi*sqrt(L/g), independent of mass.",
      orderIndex: 0
    },
    {
      id: "jee-physics-shm-waves-q02",
      topicId: "jee-physics-shm-waves",
      text: "In SHM, the acceleration is maximum at:",
      optionA: "The mean position",
      optionB: "The extreme position",
      optionC: "Halfway",
      optionD: "Everywhere equal",
      correctOption: "B",
      explanation: "Acceleration a = -omega²x is maximum where displacement x is largest, at the extremes.",
      orderIndex: 1
    },
    {
      id: "jee-physics-shm-waves-q03",
      topicId: "jee-physics-shm-waves",
      text: "A spring-mass system has k = 100 N/m and m = 1 kg. Its angular frequency is:",
      optionA: "5 rad/s",
      optionB: "10 rad/s",
      optionC: "100 rad/s",
      optionD: "1 rad/s",
      correctOption: "B",
      explanation: "omega = sqrt(k/m) = sqrt(100) = 10 rad/s.",
      orderIndex: 2
    },
    {
      id: "jee-physics-shm-waves-q04",
      topicId: "jee-physics-shm-waves",
      text: "Two tuning forks of 256 Hz and 260 Hz produce beats at a frequency of:",
      optionA: "2 Hz",
      optionB: "4 Hz",
      optionC: "8 Hz",
      optionD: "516 Hz",
      correctOption: "B",
      explanation: "Beat frequency equals the difference, 260 - 256 = 4 Hz.",
      orderIndex: 3
    },
    {
      id: "jee-physics-shm-waves-q05",
      topicId: "jee-physics-shm-waves",
      text: "The velocity of a wave with frequency 50 Hz and wavelength 4 m is:",
      optionA: "12.5 m/s",
      optionB: "200 m/s",
      optionC: "54 m/s",
      optionD: "100 m/s",
      correctOption: "B",
      explanation: "v = f x lambda = 50 x 4 = 200 m/s.",
      orderIndex: 4
    },
    {
      id: "jee-physics-shm-waves-q06",
      topicId: "jee-physics-shm-waves",
      text: "The total energy of a particle in SHM is proportional to:",
      optionA: "Amplitude",
      optionB: "Frequency only",
      optionC: "Inverse of amplitude",
      optionD: "Square of amplitude",
      correctOption: "D",
      explanation: "Total energy E = 0.5 k A² is proportional to the square of the amplitude.",
      orderIndex: 5
    },
    {
      id: "jee-physics-shm-waves-q07",
      topicId: "jee-physics-shm-waves",
      text: "The speed of a transverse wave on a stretched string depends on tension T and linear density mu as:",
      optionA: "sqrt(T/mu)",
      optionB: "sqrt(mu/T)",
      optionC: "T x mu",
      optionD: "T/mu",
      correctOption: "A",
      explanation: "Wave speed on a string is v = sqrt(T/mu).",
      orderIndex: 6
    },
    {
      id: "jee-physics-shm-waves-q08",
      topicId: "jee-physics-shm-waves",
      text: "When a source of sound approaches a stationary observer, the observed frequency:",
      optionA: "Decreases",
      optionB: "Increases",
      optionC: "Stays the same",
      optionD: "Becomes zero",
      correctOption: "B",
      explanation: "By the Doppler effect, an approaching source raises the observed pitch.",
      orderIndex: 7
    },
    {
      id: "jee-physics-electrostatics-q01",
      topicId: "jee-physics-electrostatics",
      text: "The force between two charges is F. If each charge is doubled, the new force is:",
      optionA: "2F",
      optionB: "4F",
      optionC: "F/2",
      optionD: "F/4",
      correctOption: "B",
      explanation: "F is proportional to the product of charges; doubling both gives 4F.",
      orderIndex: 0
    },
    {
      id: "jee-physics-electrostatics-q02",
      topicId: "jee-physics-electrostatics",
      text: "The electric field inside a charged conductor in electrostatic equilibrium is:",
      optionA: "Zero",
      optionB: "Equal to the surface field",
      optionC: "Maximum",
      optionD: "Infinite",
      correctOption: "A",
      explanation: "Charges reside on the surface, leaving the field inside a conductor zero.",
      orderIndex: 1
    },
    {
      id: "jee-physics-electrostatics-q03",
      topicId: "jee-physics-electrostatics",
      text: "Electric potential is a:",
      optionA: "Vector quantity",
      optionB: "Always zero",
      optionC: "Tensor",
      optionD: "Scalar quantity",
      correctOption: "D",
      explanation: "Potential is a scalar; potentials from multiple charges add algebraically.",
      orderIndex: 2
    },
    {
      id: "jee-physics-electrostatics-q04",
      topicId: "jee-physics-electrostatics",
      text: "By Gauss's law, the total electric flux through a closed surface depends on:",
      optionA: "Surface area",
      optionB: "Charge enclosed",
      optionC: "Shape of the surface",
      optionD: "External charges",
      correctOption: "B",
      explanation: "Flux equals q_enclosed/epsilon0, independent of shape or external charges.",
      orderIndex: 3
    },
    {
      id: "jee-physics-electrostatics-q05",
      topicId: "jee-physics-electrostatics",
      text: "Inserting a dielectric of constant K between capacitor plates changes capacitance to:",
      optionA: "C/K",
      optionB: "C unchanged",
      optionC: "C + K",
      optionD: "K x C",
      correctOption: "D",
      explanation: "A dielectric raises capacitance by the factor K to K times C.",
      orderIndex: 4
    },
    {
      id: "jee-physics-electrostatics-q06",
      topicId: "jee-physics-electrostatics",
      text: "The energy stored in a capacitor of capacitance C charged to voltage V is:",
      optionA: "CV",
      optionB: "0.5 C V",
      optionC: "C V²",
      optionD: "0.5 C V²",
      correctOption: "D",
      explanation: "Stored energy is U = 0.5 x C x V².",
      orderIndex: 5
    },
    {
      id: "jee-physics-electrostatics-q07",
      topicId: "jee-physics-electrostatics",
      text: "The electric field due to an infinite charged sheet of surface density sigma is:",
      optionA: "sigma/(2 epsilon0)",
      optionB: "sigma/epsilon0",
      optionC: "Depends on distance",
      optionD: "Zero",
      correctOption: "A",
      explanation: "The field of an infinite sheet is sigma/(2 epsilon0), independent of distance.",
      orderIndex: 6
    },
    {
      id: "jee-physics-electrostatics-q08",
      topicId: "jee-physics-electrostatics",
      text: "The torque on an electric dipole of moment p in a field E at angle theta is:",
      optionA: "pE",
      optionB: "pE cos(theta)",
      optionC: "pE sin(theta)",
      optionD: "Zero always",
      correctOption: "C",
      explanation: "Torque on a dipole is pE sin(theta), maximum when the dipole is perpendicular to the field.",
      orderIndex: 7
    },
    {
      id: "jee-physics-current-electricity-q01",
      topicId: "jee-physics-current-electricity",
      text: "A 12 V battery drives 3 A through a resistor. The resistance is:",
      optionA: "0.25 ohm",
      optionB: "36 ohm",
      optionC: "15 ohm",
      optionD: "4 ohm",
      correctOption: "D",
      explanation: "By Ohm's law R = V/I = 12/3 = 4 ohm.",
      orderIndex: 0
    },
    {
      id: "jee-physics-current-electricity-q02",
      topicId: "jee-physics-current-electricity",
      text: "Two resistors of 6 ohm each in parallel give an equivalent of:",
      optionA: "3 ohm",
      optionB: "6 ohm",
      optionC: "12 ohm",
      optionD: "1.5 ohm",
      correctOption: "A",
      explanation: "Equal parallel resistors halve: 6/2 = 3 ohm.",
      orderIndex: 1
    },
    {
      id: "jee-physics-current-electricity-q03",
      topicId: "jee-physics-current-electricity",
      text: "Kirchhoff's junction rule is a statement of conservation of:",
      optionA: "Energy",
      optionB: "Charge",
      optionC: "Momentum",
      optionD: "Power",
      correctOption: "B",
      explanation: "The junction rule reflects conservation of charge: current in equals current out.",
      orderIndex: 2
    },
    {
      id: "jee-physics-current-electricity-q04",
      topicId: "jee-physics-current-electricity",
      text: "The power dissipated in a 5 ohm resistor carrying 2 A is:",
      optionA: "10 W",
      optionB: "2.5 W",
      optionC: "40 W",
      optionD: "20 W",
      correctOption: "D",
      explanation: "P = I²R = 4 x 5 = 20 W.",
      orderIndex: 3
    },
    {
      id: "jee-physics-current-electricity-q05",
      topicId: "jee-physics-current-electricity",
      text: "The resistance of a wire of length L and area A with resistivity rho is:",
      optionA: "rho L / A",
      optionB: "rho A / L",
      optionC: "L / (rho A)",
      optionD: "rho L A",
      correctOption: "A",
      explanation: "R = rho x L / A; resistance grows with length and falls with area.",
      orderIndex: 4
    },
    {
      id: "jee-physics-current-electricity-q06",
      topicId: "jee-physics-current-electricity",
      text: "A Wheatstone bridge is balanced when:",
      optionA: "All arms are equal",
      optionB: "Galvanometer reads maximum",
      optionC: "The cell is removed",
      optionD: "P/Q = R/S",
      correctOption: "D",
      explanation: "Balance occurs when P/Q = R/S, giving no galvanometer current.",
      orderIndex: 5
    },
    {
      id: "jee-physics-current-electricity-q07",
      topicId: "jee-physics-current-electricity",
      text: "Three 2 ohm resistors in series give a total resistance of:",
      optionA: "2 ohm",
      optionB: "0.67 ohm",
      optionC: "6 ohm",
      optionD: "8 ohm",
      correctOption: "C",
      explanation: "Series resistances add: 2 + 2 + 2 = 6 ohm.",
      orderIndex: 6
    },
    {
      id: "jee-physics-current-electricity-q08",
      topicId: "jee-physics-current-electricity",
      text: "The terminal voltage of a cell of emf E and internal resistance r carrying current I is:",
      optionA: "E - Ir",
      optionB: "E + Ir",
      optionC: "E x Ir",
      optionD: "Ir - E",
      correctOption: "A",
      explanation: "Terminal voltage V = E - Ir while the cell delivers current.",
      orderIndex: 7
    },
    {
      id: "jee-physics-magnetism-emi-q01",
      topicId: "jee-physics-magnetism-emi",
      text: "Faraday's law states that the induced emf equals the negative rate of change of:",
      optionA: "Current",
      optionB: "Charge",
      optionC: "Resistance",
      optionD: "Magnetic flux",
      correctOption: "D",
      explanation: "Induced emf = -dPhi/dt, the rate of change of magnetic flux.",
      orderIndex: 0
    },
    {
      id: "jee-physics-magnetism-emi-q02",
      topicId: "jee-physics-magnetism-emi",
      text: "The direction of an induced current is given by:",
      optionA: "Ohm's law",
      optionB: "Lenz's law",
      optionC: "Coulomb's law",
      optionD: "Gauss's law",
      correctOption: "B",
      explanation: "Lenz's law: the induced current opposes the change in flux that produces it.",
      orderIndex: 1
    },
    {
      id: "jee-physics-magnetism-emi-q03",
      topicId: "jee-physics-magnetism-emi",
      text: "A charge moving parallel to a magnetic field experiences a force of:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "qvB",
      optionD: "qE",
      correctOption: "A",
      explanation: "F = qvB sin(theta); when v is parallel to B, theta is zero so the force vanishes.",
      orderIndex: 2
    },
    {
      id: "jee-physics-magnetism-emi-q04",
      topicId: "jee-physics-magnetism-emi",
      text: "The magnetic field at distance r from a long straight wire carrying current I is:",
      optionA: "mu0 I / (2 pi r)",
      optionB: "mu0 I / (2 r)",
      optionC: "mu0 I r",
      optionD: "mu0 I / r²",
      correctOption: "A",
      explanation: "By Ampere's law, B = mu0 I / (2 pi r) around a long straight wire.",
      orderIndex: 3
    },
    {
      id: "jee-physics-magnetism-emi-q05",
      topicId: "jee-physics-magnetism-emi",
      text: "A rod of length L moves at speed v perpendicular to a field B. The motional emf is:",
      optionA: "BL/v",
      optionB: "BLv",
      optionC: "Bv/L",
      optionD: "BLv²",
      correctOption: "B",
      explanation: "Motional emf is B x L x v for a rod moving perpendicular to the field.",
      orderIndex: 4
    },
    {
      id: "jee-physics-magnetism-emi-q06",
      topicId: "jee-physics-magnetism-emi",
      text: "The energy stored in an inductor of inductance L carrying current I is:",
      optionA: "LI",
      optionB: "0.5 L I",
      optionC: "L I²",
      optionD: "0.5 L I²",
      correctOption: "D",
      explanation: "Energy stored in an inductor is U = 0.5 x L x I².",
      orderIndex: 5
    },
    {
      id: "jee-physics-magnetism-emi-q07",
      topicId: "jee-physics-magnetism-emi",
      text: "The inductive reactance of an inductor at angular frequency omega is:",
      optionA: "1/(omega L)",
      optionB: "L/omega",
      optionC: "omega/L",
      optionD: "omega L",
      correctOption: "D",
      explanation: "Inductive reactance X_L = omega x L and rises with frequency.",
      orderIndex: 6
    },
    {
      id: "jee-physics-magnetism-emi-q08",
      topicId: "jee-physics-magnetism-emi",
      text: "An LC circuit resonates at an angular frequency of:",
      optionA: "sqrt(LC)",
      optionB: "LC",
      optionC: "1/sqrt(LC)",
      optionD: "1/(LC)",
      correctOption: "C",
      explanation: "Resonance occurs at omega = 1/sqrt(LC).",
      orderIndex: 7
    },
    {
      id: "jee-physics-optics-q01",
      topicId: "jee-physics-optics",
      text: "The focal length of a concave mirror of radius of curvature 20 cm is:",
      optionA: "20 cm",
      optionB: "40 cm",
      optionC: "10 cm",
      optionD: "5 cm",
      correctOption: "C",
      explanation: "Focal length f = R/2 = 20/2 = 10 cm.",
      orderIndex: 0
    },
    {
      id: "jee-physics-optics-q02",
      topicId: "jee-physics-optics",
      text: "Total internal reflection occurs when light travels from a denser medium to a rarer one beyond the:",
      optionA: "Brewster angle",
      optionB: "Right angle",
      optionC: "Polarising angle",
      optionD: "Critical angle",
      correctOption: "D",
      explanation: "Beyond the critical angle, light is totally internally reflected.",
      orderIndex: 1
    },
    {
      id: "jee-physics-optics-q03",
      topicId: "jee-physics-optics",
      text: "The power of a lens of focal length 50 cm is:",
      optionA: "0.5 D",
      optionB: "2 D",
      optionC: "50 D",
      optionD: "5 D",
      correctOption: "B",
      explanation: "Power = 1/f(in metres) = 1/0.5 = 2 dioptres.",
      orderIndex: 2
    },
    {
      id: "jee-physics-optics-q04",
      topicId: "jee-physics-optics",
      text: "In Young's double-slit experiment, the fringe width is:",
      optionA: "lambda d / D",
      optionB: "D d / lambda",
      optionC: "lambda D / d",
      optionD: "lambda / (D d)",
      correctOption: "C",
      explanation: "Fringe width beta = lambda x D / d.",
      orderIndex: 3
    },
    {
      id: "jee-physics-optics-q05",
      topicId: "jee-physics-optics",
      text: "Snell's law relates the angles of incidence and refraction through:",
      optionA: "n1 cos(i) = n2 cos(r)",
      optionB: "n1 tan(i) = n2 tan(r)",
      optionC: "n1 sin(i) = n2 sin(r)",
      optionD: "n1 i = n2 r",
      correctOption: "C",
      explanation: "Snell's law: n1 sin(i) = n2 sin(r).",
      orderIndex: 4
    },
    {
      id: "jee-physics-optics-q06",
      topicId: "jee-physics-optics",
      text: "For constructive interference, the path difference must be:",
      optionA: "An odd multiple of lambda/2",
      optionB: "An integer multiple of lambda",
      optionC: "lambda/4",
      optionD: "Zero only",
      correctOption: "B",
      explanation: "Bright fringes appear where the path difference equals n times lambda.",
      orderIndex: 5
    },
    {
      id: "jee-physics-optics-q07",
      topicId: "jee-physics-optics",
      text: "When unpolarised light passes through two polarisers, Malus's law gives the transmitted intensity as:",
      optionA: "I0 cos²(theta)",
      optionB: "I0 cos(theta)",
      optionC: "I0 sin²(theta)",
      optionD: "I0",
      correctOption: "A",
      explanation: "Malus's law: I = I0 cos²(theta) for polarised light through an analyser.",
      orderIndex: 6
    },
    {
      id: "jee-physics-optics-q08",
      topicId: "jee-physics-optics",
      text: "A convex lens of focal length 10 cm forms an image of an object at 20 cm. The image distance is:",
      optionA: "20 cm",
      optionB: "10 cm",
      optionC: "5 cm",
      optionD: "40 cm",
      correctOption: "A",
      explanation: "1/v - 1/u = 1/f gives 1/v = 1/10 - 1/20, so v = 20 cm.",
      orderIndex: 7
    },
    {
      id: "jee-physics-modern-physics-q01",
      topicId: "jee-physics-modern-physics",
      text: "In the photoelectric effect, increasing the light intensity (frequency fixed) increases:",
      optionA: "Number of emitted electrons",
      optionB: "Maximum kinetic energy",
      optionC: "Threshold frequency",
      optionD: "Work function",
      correctOption: "A",
      explanation: "Higher intensity means more photons, hence more electrons, but the same maximum KE.",
      orderIndex: 0
    },
    {
      id: "jee-physics-modern-physics-q02",
      topicId: "jee-physics-modern-physics",
      text: "The energy of the ground state of the hydrogen atom is:",
      optionA: "-3.4 eV",
      optionB: "-1.51 eV",
      optionC: "-13.6 eV",
      optionD: "0 eV",
      correctOption: "C",
      explanation: "The n = 1 level of hydrogen has energy -13.6 eV.",
      orderIndex: 1
    },
    {
      id: "jee-physics-modern-physics-q03",
      topicId: "jee-physics-modern-physics",
      text: "The de Broglie wavelength of a particle of momentum p is:",
      optionA: "h p",
      optionB: "h / p²",
      optionC: "p / h",
      optionD: "h / p",
      correctOption: "D",
      explanation: "de Broglie wavelength lambda = h/p.",
      orderIndex: 2
    },
    {
      id: "jee-physics-modern-physics-q04",
      topicId: "jee-physics-modern-physics",
      text: "A radioactive sample has a half-life of 5 years. After 15 years the fraction remaining is:",
      optionA: "1/8",
      optionB: "1/4",
      optionC: "1/2",
      optionD: "1/16",
      correctOption: "A",
      explanation: "15 years is three half-lives, leaving (1/2)³ = 1/8 of the sample.",
      orderIndex: 3
    },
    {
      id: "jee-physics-modern-physics-q05",
      topicId: "jee-physics-modern-physics",
      text: "Einstein's photoelectric equation is KE_max =:",
      optionA: "hf + phi",
      optionB: "hf - phi",
      optionC: "phi - hf",
      optionD: "hf x phi",
      correctOption: "B",
      explanation: "KE_max = hf - phi, where phi is the work function.",
      orderIndex: 4
    },
    {
      id: "jee-physics-modern-physics-q06",
      topicId: "jee-physics-modern-physics",
      text: "Emission of an alpha particle reduces the mass number of a nucleus by:",
      optionA: "1",
      optionB: "4",
      optionC: "2",
      optionD: "0",
      correctOption: "B",
      explanation: "An alpha particle is a helium nucleus, so mass number drops by 4.",
      orderIndex: 5
    },
    {
      id: "jee-physics-modern-physics-q07",
      topicId: "jee-physics-modern-physics",
      text: "The relation between energy and mass defect is given by:",
      optionA: "E = mc²",
      optionB: "E = mc",
      optionC: "E = m/c²",
      optionD: "E = m²c",
      correctOption: "A",
      explanation: "Einstein's mass-energy relation E = mc² gives the released binding energy.",
      orderIndex: 6
    },
    {
      id: "jee-physics-modern-physics-q08",
      topicId: "jee-physics-modern-physics",
      text: "The radius of the n-th Bohr orbit varies with n as:",
      optionA: "n",
      optionB: "1/n²",
      optionC: "1/n",
      optionD: "n²",
      correctOption: "D",
      explanation: "The Bohr radius r_n is proportional to n².",
      orderIndex: 7
    },
    {
      id: "jee-physics-thermodynamics-q01",
      topicId: "jee-physics-thermodynamics",
      text: "The first law of thermodynamics is a statement of conservation of:",
      optionA: "Mass",
      optionB: "Energy",
      optionC: "Momentum",
      optionD: "Charge",
      correctOption: "B",
      explanation: "The first law, delta U = Q - W, expresses conservation of energy.",
      orderIndex: 0
    },
    {
      id: "jee-physics-thermodynamics-q02",
      topicId: "jee-physics-thermodynamics",
      text: "In an isothermal process for an ideal gas, the change in internal energy is:",
      optionA: "Zero",
      optionB: "Negative",
      optionC: "Positive",
      optionD: "Equal to the work done",
      correctOption: "A",
      explanation: "Internal energy depends on temperature only; at constant T, delta U = 0.",
      orderIndex: 1
    },
    {
      id: "jee-physics-thermodynamics-q03",
      topicId: "jee-physics-thermodynamics",
      text: "In an adiabatic process the quantity that stays constant is:",
      optionA: "Temperature",
      optionB: "Pressure",
      optionC: "Heat exchanged Q",
      optionD: "Volume",
      correctOption: "C",
      explanation: "An adiabatic process has Q = 0, with no heat exchanged.",
      orderIndex: 2
    },
    {
      id: "jee-physics-thermodynamics-q04",
      topicId: "jee-physics-thermodynamics",
      text: "The efficiency of a Carnot engine between 600 K and 300 K is:",
      optionA: "25 percent",
      optionB: "75 percent",
      optionC: "50 percent",
      optionD: "100 percent",
      correctOption: "C",
      explanation: "eta = 1 - T_cold/T_hot = 1 - 300/600 = 0.5, or 50 percent.",
      orderIndex: 3
    },
    {
      id: "jee-physics-thermodynamics-q05",
      topicId: "jee-physics-thermodynamics",
      text: "The work done in an isochoric (constant volume) process is:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "P delta V",
      optionD: "nRT",
      correctOption: "A",
      explanation: "With no volume change, W = P delta V = 0.",
      orderIndex: 4
    },
    {
      id: "jee-physics-thermodynamics-q06",
      topicId: "jee-physics-thermodynamics",
      text: "The average kinetic energy of a gas molecule is proportional to:",
      optionA: "Absolute temperature",
      optionB: "Volume",
      optionC: "Pressure",
      optionD: "Molar mass",
      correctOption: "A",
      explanation: "Average KE = (3/2)kT, proportional to absolute temperature.",
      orderIndex: 5
    },
    {
      id: "jee-physics-thermodynamics-q07",
      topicId: "jee-physics-thermodynamics",
      text: "Mayer's relation for an ideal gas is:",
      optionA: "Cp/Cv = R",
      optionB: "Cp + Cv = R",
      optionC: "Cp x Cv = R",
      optionD: "Cp - Cv = R",
      correctOption: "D",
      explanation: "For an ideal gas, Cp - Cv = R (Mayer's relation).",
      orderIndex: 6
    },
    {
      id: "jee-physics-thermodynamics-q08",
      topicId: "jee-physics-thermodynamics",
      text: "The rms speed of gas molecules is proportional to:",
      optionA: "T",
      optionB: "1/T",
      optionC: "sqrt(T)",
      optionD: "T²",
      correctOption: "C",
      explanation: "v_rms = sqrt(3RT/M) is proportional to the square root of temperature.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-atomic-structure-q01",
      topicId: "jee-chemistry-atomic-structure",
      text: "The maximum number of electrons in a shell with principal quantum number n is:",
      optionA: "n",
      optionB: "2n",
      optionC: "2n²",
      optionD: "n²",
      correctOption: "C",
      explanation: "A shell holds at most 2n² electrons.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-atomic-structure-q02",
      topicId: "jee-chemistry-atomic-structure",
      text: "The principle that no two electrons can have all four quantum numbers identical is:",
      optionA: "Aufbau principle",
      optionB: "Hund's rule",
      optionC: "Heisenberg principle",
      optionD: "Pauli exclusion principle",
      correctOption: "D",
      explanation: "The Pauli exclusion principle forbids identical sets of four quantum numbers.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-atomic-structure-q03",
      topicId: "jee-chemistry-atomic-structure",
      text: "The azimuthal quantum number l for a d subshell is:",
      optionA: "0",
      optionB: "1",
      optionC: "3",
      optionD: "2",
      correctOption: "D",
      explanation: "For d orbitals, l = 2 (s = 0, p = 1, d = 2, f = 3).",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-atomic-structure-q04",
      topicId: "jee-chemistry-atomic-structure",
      text: "The Balmer series of hydrogen corresponds to electron transitions ending at:",
      optionA: "n = 1",
      optionB: "n = 4",
      optionC: "n = 3",
      optionD: "n = 2",
      correctOption: "D",
      explanation: "Balmer lines arise from transitions down to n = 2 and lie in the visible region.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-atomic-structure-q05",
      topicId: "jee-chemistry-atomic-structure",
      text: "Hund's rule of maximum multiplicity states that electrons:",
      optionA: "Fill orbitals singly before pairing",
      optionB: "Pair up first",
      optionC: "Occupy the highest orbital",
      optionD: "Always pair with opposite spin",
      correctOption: "A",
      explanation: "Degenerate orbitals are singly filled before any pairing occurs.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-atomic-structure-q06",
      topicId: "jee-chemistry-atomic-structure",
      text: "The electronic configuration of chromium (Z = 24) is anomalous as:",
      optionA: "[Ar] 3d4 4s2",
      optionB: "[Ar] 3d5 4s1",
      optionC: "[Ar] 3d6 4s0",
      optionD: "[Ar] 3d3 4s3",
      correctOption: "B",
      explanation: "Chromium adopts 3d5 4s1 for the extra stability of a half-filled d subshell.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-atomic-structure-q07",
      topicId: "jee-chemistry-atomic-structure",
      text: "Heisenberg's uncertainty principle relates the uncertainties in:",
      optionA: "Position and momentum",
      optionB: "Charge and mass",
      optionC: "Energy and charge",
      optionD: "Spin and mass",
      correctOption: "A",
      explanation: "It states delta x times delta p is at least h/(4 pi).",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-atomic-structure-q08",
      topicId: "jee-chemistry-atomic-structure",
      text: "According to the (n + l) rule, which subshell fills first?",
      optionA: "3d",
      optionB: "4s",
      optionC: "4p",
      optionD: "4d",
      correctOption: "B",
      explanation: "4s (n + l = 4) fills before 3d (n + l = 5) under the Aufbau ordering.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-periodicity-q01",
      topicId: "jee-chemistry-periodicity",
      text: "Across a period from left to right, atomic radius generally:",
      optionA: "Increases",
      optionB: "First increases then decreases",
      optionC: "Stays constant",
      optionD: "Decreases",
      correctOption: "D",
      explanation: "Rising effective nuclear charge pulls electrons closer, shrinking the radius.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-periodicity-q02",
      topicId: "jee-chemistry-periodicity",
      text: "The modern periodic law arranges elements by increasing:",
      optionA: "Atomic number",
      optionB: "Atomic mass",
      optionC: "Density",
      optionD: "Valency",
      correctOption: "A",
      explanation: "Moseley's modern law orders elements by atomic number.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-periodicity-q03",
      topicId: "jee-chemistry-periodicity",
      text: "Down a group, ionisation energy generally:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "Becomes zero",
      correctOption: "B",
      explanation: "Added shells increase size, so electrons are easier to remove going down a group.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-periodicity-q04",
      topicId: "jee-chemistry-periodicity",
      text: "The most electronegative element in the periodic table is:",
      optionA: "Fluorine",
      optionB: "Chlorine",
      optionC: "Oxygen",
      optionD: "Nitrogen",
      correctOption: "A",
      explanation: "Fluorine has the highest electronegativity on the Pauling scale.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-periodicity-q05",
      topicId: "jee-chemistry-periodicity",
      text: "Elements of groups 1 and 2 belong to the:",
      optionA: "p-block",
      optionB: "s-block",
      optionC: "d-block",
      optionD: "f-block",
      correctOption: "B",
      explanation: "Groups 1 and 2 have their last electron in an s orbital, defining the s-block.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-periodicity-q06",
      topicId: "jee-chemistry-periodicity",
      text: "The second ionisation energy of an element compared with the first is always:",
      optionA: "Smaller",
      optionB: "Larger",
      optionC: "Equal",
      optionD: "Zero",
      correctOption: "B",
      explanation: "Removing an electron from a cation needs more energy, so IE2 is greater than IE1.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-periodicity-q07",
      topicId: "jee-chemistry-periodicity",
      text: "The lanthanide contraction causes the atomic sizes of which pair to be nearly equal?",
      optionA: "Zr and Hf",
      optionB: "Na and K",
      optionC: "Li and Be",
      optionD: "F and Cl",
      correctOption: "A",
      explanation: "The lanthanide contraction makes Zr and Hf almost the same size.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-periodicity-q08",
      topicId: "jee-chemistry-periodicity",
      text: "Down a group, metallic character generally:",
      optionA: "Increases",
      optionB: "Decreases",
      optionC: "Stays constant",
      optionD: "Disappears",
      correctOption: "A",
      explanation: "Easier electron loss down a group increases metallic character.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-mole-concept-q01",
      topicId: "jee-chemistry-mole-concept",
      text: "The number of molecules in 2 moles of a gas is:",
      optionA: "6.022 x 10^23",
      optionB: "12 x 10^24",
      optionC: "3.0 x 10^23",
      optionD: "1.2 x 10^24",
      correctOption: "D",
      explanation: "2 moles contain 2 x 6.022 x 10^23 = 1.2 x 10^24 molecules.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-mole-concept-q02",
      topicId: "jee-chemistry-mole-concept",
      text: "The molar volume of an ideal gas at STP is:",
      optionA: "11.2 L",
      optionB: "22.4 L",
      optionC: "24.4 L",
      optionD: "1 L",
      correctOption: "B",
      explanation: "One mole of ideal gas occupies 22.4 L at STP.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-mole-concept-q03",
      topicId: "jee-chemistry-mole-concept",
      text: "The number of moles in 36 g of water (molar mass 18) is:",
      optionA: "1",
      optionB: "2",
      optionC: "0.5",
      optionD: "18",
      correctOption: "B",
      explanation: "moles = mass/molar mass = 36/18 = 2.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-mole-concept-q04",
      topicId: "jee-chemistry-mole-concept",
      text: "Molarity is defined as moles of solute per:",
      optionA: "Kilogram of solvent",
      optionB: "Litre of solvent",
      optionC: "Litre of solution",
      optionD: "Mole of solution",
      correctOption: "C",
      explanation: "Molarity = moles of solute per litre of solution.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-mole-concept-q05",
      topicId: "jee-chemistry-mole-concept",
      text: "In a reaction, the reagent that is completely consumed is called the:",
      optionA: "Excess reagent",
      optionB: "Limiting reagent",
      optionC: "Catalyst",
      optionD: "Product",
      correctOption: "B",
      explanation: "The limiting reagent runs out first and caps the amount of product.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-mole-concept-q06",
      topicId: "jee-chemistry-mole-concept",
      text: "The mass of 0.5 mole of CO2 (molar mass 44) is:",
      optionA: "22 g",
      optionB: "11 g",
      optionC: "44 g",
      optionD: "88 g",
      correctOption: "A",
      explanation: "mass = moles x molar mass = 0.5 x 44 = 22 g.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-mole-concept-q07",
      topicId: "jee-chemistry-mole-concept",
      text: "On dilution of a solution, the number of moles of solute:",
      optionA: "Increases",
      optionB: "Stays the same",
      optionC: "Decreases",
      optionD: "Becomes zero",
      correctOption: "B",
      explanation: "Dilution adds only solvent, so moles of solute stay constant (M1V1 = M2V2).",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-mole-concept-q08",
      topicId: "jee-chemistry-mole-concept",
      text: "The empirical formula of a compound with 40 percent C, 6.7 percent H and 53.3 percent O (by mass) is:",
      optionA: "CHO",
      optionB: "CH2O",
      optionC: "C2H4O2",
      optionD: "CH4O",
      correctOption: "B",
      explanation: "Mole ratio C:H:O is about 1:2:1, giving the empirical formula CH2O.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-equilibrium-q01",
      topicId: "jee-chemistry-equilibrium",
      text: "At chemical equilibrium, the rates of the forward and reverse reactions are:",
      optionA: "Zero",
      optionB: "Maximum",
      optionC: "Equal",
      optionD: "Unrelated",
      correctOption: "C",
      explanation: "Equilibrium is dynamic: forward and reverse rates are equal.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-equilibrium-q02",
      topicId: "jee-chemistry-equilibrium",
      text: "The pH of a 0.01 M strong acid solution is:",
      optionA: "1",
      optionB: "2",
      optionC: "12",
      optionD: "0.01",
      correctOption: "B",
      explanation: "pH = -log(0.01) = 2.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-equilibrium-q03",
      topicId: "jee-chemistry-equilibrium",
      text: "Adding more reactant to a system at equilibrium shifts it, by Le Chatelier, toward the:",
      optionA: "Reactants",
      optionB: "Solid phase",
      optionC: "No change",
      optionD: "Products",
      correctOption: "D",
      explanation: "Increasing a reactant drives the equilibrium toward the products.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-equilibrium-q04",
      topicId: "jee-chemistry-equilibrium",
      text: "The ionic product of water Kw at 25 C is:",
      optionA: "10^-7",
      optionB: "10^-14",
      optionC: "10^-1",
      optionD: "1",
      correctOption: "B",
      explanation: "Kw = [H+][OH-] = 1.0 x 10^-14 at 25 C.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-equilibrium-q05",
      topicId: "jee-chemistry-equilibrium",
      text: "Increasing pressure on a gaseous equilibrium shifts it toward the side with:",
      optionA: "Fewer gas moles",
      optionB: "More gas moles",
      optionC: "Higher temperature",
      optionD: "More solid",
      correctOption: "A",
      explanation: "Higher pressure favours the side with fewer moles of gas.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-equilibrium-q06",
      topicId: "jee-chemistry-equilibrium",
      text: "A buffer solution is best described as one that resists changes in:",
      optionA: "Temperature",
      optionB: "Volume",
      optionC: "pH",
      optionD: "Colour",
      correctOption: "C",
      explanation: "A buffer resists pH change on adding small amounts of acid or base.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-equilibrium-q07",
      topicId: "jee-chemistry-equilibrium",
      text: "The relation between Kp and Kc is Kp =:",
      optionA: "Kc + RT",
      optionB: "Kc / RT",
      optionC: "Kc x RT",
      optionD: "Kc (RT)^delta-n",
      correctOption: "D",
      explanation: "Kp = Kc (RT) raised to the change in moles of gas, delta-n.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-equilibrium-q08",
      topicId: "jee-chemistry-equilibrium",
      text: "Adding a common ion to a weak electrolyte solution:",
      optionA: "Increases its ionisation",
      optionB: "Changes its identity",
      optionC: "Has no effect",
      optionD: "Suppresses its ionisation",
      correctOption: "D",
      explanation: "The common-ion effect shifts equilibrium back, suppressing ionisation.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-thermodynamics-q01",
      topicId: "jee-chemistry-thermodynamics",
      text: "A reaction is spontaneous when the Gibbs energy change is:",
      optionA: "Positive",
      optionB: "Infinite",
      optionC: "Zero",
      optionD: "Negative",
      correctOption: "D",
      explanation: "Spontaneity requires delta G to be negative.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-thermodynamics-q02",
      topicId: "jee-chemistry-thermodynamics",
      text: "Hess's law is based on the fact that enthalpy is a:",
      optionA: "Path function",
      optionB: "Random variable",
      optionC: "State function",
      optionD: "Constant for all reactions",
      correctOption: "C",
      explanation: "Enthalpy is a state function, so delta H is path-independent.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-thermodynamics-q03",
      topicId: "jee-chemistry-thermodynamics",
      text: "The Gibbs energy relation is delta G =:",
      optionA: "delta H + T delta S",
      optionB: "delta H - T delta S",
      optionC: "T delta S - delta H",
      optionD: "delta H x T delta S",
      correctOption: "B",
      explanation: "delta G = delta H - T delta S.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-thermodynamics-q04",
      topicId: "jee-chemistry-thermodynamics",
      text: "For an exothermic reaction, the enthalpy change delta H is:",
      optionA: "Positive",
      optionB: "Zero",
      optionC: "Negative",
      optionD: "Always one",
      correctOption: "C",
      explanation: "Exothermic reactions release heat, so delta H is negative.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-thermodynamics-q05",
      topicId: "jee-chemistry-thermodynamics",
      text: "The entropy of a perfect crystal at absolute zero is, by the third law:",
      optionA: "Maximum",
      optionB: "Zero",
      optionC: "Negative",
      optionD: "Undefined",
      correctOption: "B",
      explanation: "The third law sets the entropy of a perfect crystal at 0 K to zero.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-thermodynamics-q06",
      topicId: "jee-chemistry-thermodynamics",
      text: "At equilibrium, the Gibbs energy change of a reaction is:",
      optionA: "Maximum",
      optionB: "Minimum negative",
      optionC: "Zero",
      optionD: "Large positive",
      correctOption: "C",
      explanation: "At equilibrium delta G = 0.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-thermodynamics-q07",
      topicId: "jee-chemistry-thermodynamics",
      text: "The relation between standard Gibbs energy and equilibrium constant is delta G-standard =:",
      optionA: "RT ln K",
      optionB: "-RT ln K",
      optionC: "-R/T ln K",
      optionD: "RT/K",
      correctOption: "B",
      explanation: "delta G-standard = -RT ln K links thermodynamics to equilibrium.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-thermodynamics-q08",
      topicId: "jee-chemistry-thermodynamics",
      text: "Which reaction generally shows a positive entropy change?",
      optionA: "Solid to gas",
      optionB: "Liquid to solid",
      optionC: "Gas to liquid",
      optionD: "Two gases combining into one",
      correctOption: "A",
      explanation: "Sublimation increases disorder, giving a positive entropy change.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-goc-q01",
      topicId: "jee-chemistry-goc",
      text: "The stability order of carbocations is:",
      optionA: "methyl > 1 degree > 2 degree > 3 degree",
      optionB: "All equally stable",
      optionC: "1 degree > 2 degree > 3 degree",
      optionD: "3 degree > 2 degree > 1 degree > methyl",
      correctOption: "D",
      explanation: "Tertiary carbocations are most stable due to hyperconjugation and inductive donation.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-goc-q02",
      topicId: "jee-chemistry-goc",
      text: "An electron-deficient species that seeks electrons is a:",
      optionA: "Nucleophile",
      optionB: "Free radical",
      optionC: "Electrophile",
      optionD: "Carbanion",
      correctOption: "C",
      explanation: "Electrophiles are electron-poor and accept electron pairs.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-goc-q03",
      topicId: "jee-chemistry-goc",
      text: "The -NO2 group exerts which kind of inductive effect?",
      optionA: "Electron-donating (+I)",
      optionB: "Electron-withdrawing (-I)",
      optionC: "No effect",
      optionD: "Only resonance",
      correctOption: "B",
      explanation: "Nitro is strongly electron-withdrawing, showing a -I effect.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-goc-q04",
      topicId: "jee-chemistry-goc",
      text: "A carbon atom bonded to four different groups is called:",
      optionA: "Quaternary",
      optionB: "Primary",
      optionC: "Chiral",
      optionD: "Aromatic",
      correctOption: "C",
      explanation: "A chiral (asymmetric) carbon has four different substituents and is optically active.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-goc-q05",
      topicId: "jee-chemistry-goc",
      text: "Which is the strongest acid among the following?",
      optionA: "Ethanol",
      optionB: "Phenol",
      optionC: "Acetic acid",
      optionD: "Water",
      correctOption: "C",
      explanation: "Carboxylic acids are stronger than phenols and alcohols due to resonance-stabilised anions.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-goc-q06",
      topicId: "jee-chemistry-goc",
      text: "Hyperconjugation involves the delocalisation of electrons from:",
      optionA: "Lone pairs",
      optionB: "pi to pi bonds",
      optionC: "Adjacent C-H sigma bonds",
      optionD: "d orbitals",
      correctOption: "C",
      explanation: "Hyperconjugation delocalises electrons of neighbouring C-H sigma bonds into an empty or pi orbital.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-goc-q07",
      topicId: "jee-chemistry-goc",
      text: "Compounds with the same molecular formula but different structures are called:",
      optionA: "Isotopes",
      optionB: "Homologues",
      optionC: "Allotropes",
      optionD: "Isomers",
      correctOption: "D",
      explanation: "Isomers share a molecular formula but differ in structure or arrangement.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-goc-q08",
      topicId: "jee-chemistry-goc",
      text: "The resonance (+M) effect of -OH on benzene makes the ring:",
      optionA: "Deactivated",
      optionB: "Inert",
      optionC: "Activated toward electrophiles",
      optionD: "Meta-directing",
      correctOption: "C",
      explanation: "-OH donates electrons by resonance, activating the ring and directing ortho/para.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-hydrocarbons-q01",
      topicId: "jee-chemistry-hydrocarbons",
      text: "The general formula of an alkane is:",
      optionA: "CnH2n+2",
      optionB: "CnH2n",
      optionC: "CnH2n-2",
      optionD: "CnHn",
      correctOption: "A",
      explanation: "Saturated open-chain alkanes follow CnH2n+2.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-hydrocarbons-q02",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Alkanes typically undergo which kind of reaction with halogens in sunlight?",
      optionA: "Free-radical substitution",
      optionB: "Electrophilic addition",
      optionC: "Nucleophilic substitution",
      optionD: "Elimination",
      correctOption: "A",
      explanation: "Alkanes undergo free-radical substitution with halogens under UV light.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-hydrocarbons-q03",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Markovnikov's rule predicts the addition of HBr to propene gives mainly:",
      optionA: "2-bromopropane",
      optionB: "1-bromopropane",
      optionC: "Propane",
      optionD: "Propyne",
      correctOption: "A",
      explanation: "H adds to the carbon with more hydrogens, putting Br on C2 (2-bromopropane).",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-hydrocarbons-q04",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Benzene preferentially undergoes:",
      optionA: "Electrophilic substitution",
      optionB: "Addition reactions",
      optionC: "Nucleophilic addition",
      optionD: "Free-radical addition",
      correctOption: "A",
      explanation: "Aromatic stability makes benzene favour electrophilic substitution over addition.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-hydrocarbons-q05",
      topicId: "jee-chemistry-hydrocarbons",
      text: "The number of pi bonds in an alkyne triple bond is:",
      optionA: "0",
      optionB: "1",
      optionC: "3",
      optionD: "2",
      correctOption: "D",
      explanation: "A triple bond has one sigma and two pi bonds.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-hydrocarbons-q06",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Aromaticity by Huckel's rule requires the number of pi electrons to equal:",
      optionA: "4n",
      optionB: "2n",
      optionC: "4n + 2",
      optionD: "n + 1",
      correctOption: "C",
      explanation: "Huckel's rule: a planar cyclic system is aromatic with (4n + 2) pi electrons.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-hydrocarbons-q07",
      topicId: "jee-chemistry-hydrocarbons",
      text: "Addition of HBr to an alkene in the presence of peroxide gives anti-Markovnikov product via:",
      optionA: "Carbocation mechanism",
      optionB: "Ionic mechanism",
      optionC: "Free-radical mechanism",
      optionD: "No reaction",
      correctOption: "C",
      explanation: "The peroxide effect proceeds by a free-radical chain, reversing the regiochemistry.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-hydrocarbons-q08",
      topicId: "jee-chemistry-hydrocarbons",
      text: "A -NO2 substituent on benzene directs an incoming electrophile to the:",
      optionA: "Meta position",
      optionB: "Para position",
      optionC: "Ortho position",
      optionD: "Ipso position",
      correctOption: "A",
      explanation: "Nitro is a deactivating, meta-directing group.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-coordination-compounds-q01",
      topicId: "jee-chemistry-coordination-compounds",
      text: "The coordination number of the central metal in [Co(NH3)6]3+ is:",
      optionA: "3",
      optionB: "4",
      optionC: "6",
      optionD: "2",
      correctOption: "C",
      explanation: "Six ammonia ligands give a coordination number of 6.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-coordination-compounds-q02",
      topicId: "jee-chemistry-coordination-compounds",
      text: "A ligand that binds through two donor atoms is called:",
      optionA: "Monodentate",
      optionB: "Ambidentate",
      optionC: "Bidentate",
      optionD: "Neutral",
      correctOption: "C",
      explanation: "A bidentate ligand, such as ethylenediamine, donates through two atoms.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-coordination-compounds-q03",
      topicId: "jee-chemistry-coordination-compounds",
      text: "In crystal field theory, ligands split the d orbitals into:",
      optionA: "t2g and eg sets",
      optionB: "s and p sets",
      optionC: "Two equal halves",
      optionD: "Three triplets",
      correctOption: "A",
      explanation: "In an octahedral field, the d orbitals split into lower t2g and higher eg sets.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-coordination-compounds-q04",
      topicId: "jee-chemistry-coordination-compounds",
      text: "Which ligand is a strong-field ligand that favours low-spin complexes?",
      optionA: "I-",
      optionB: "Br-",
      optionC: "CN-",
      optionD: "Cl-",
      correctOption: "C",
      explanation: "Cyanide is a strong-field ligand causing large splitting and low-spin pairing.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-coordination-compounds-q05",
      topicId: "jee-chemistry-coordination-compounds",
      text: "The spin-only magnetic moment for a complex with 2 unpaired electrons is about:",
      optionA: "1.73 BM",
      optionB: "2.83 BM",
      optionC: "3.87 BM",
      optionD: "0 BM",
      correctOption: "B",
      explanation: "mu = sqrt(n(n+2)) = sqrt(8) = 2.83 BM for n = 2.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-coordination-compounds-q06",
      topicId: "jee-chemistry-coordination-compounds",
      text: "cis-trans isomerism in coordination compounds is a type of:",
      optionA: "Ionisation isomerism",
      optionB: "Optical isomerism",
      optionC: "Linkage isomerism",
      optionD: "Geometrical isomerism",
      correctOption: "D",
      explanation: "cis and trans arrangements of ligands are geometrical isomers.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-coordination-compounds-q07",
      topicId: "jee-chemistry-coordination-compounds",
      text: "A polydentate ligand forming a ring with the metal is said to produce a:",
      optionA: "Lattice",
      optionB: "Salt bridge",
      optionC: "Chelate",
      optionD: "Polymer",
      correctOption: "C",
      explanation: "Ring formation by a polydentate ligand is called chelation, giving a chelate.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-coordination-compounds-q08",
      topicId: "jee-chemistry-coordination-compounds",
      text: "In the spectrochemical series, which ligand causes the largest crystal-field splitting?",
      optionA: "H2O",
      optionB: "NH3",
      optionC: "CO",
      optionD: "Cl-",
      correctOption: "C",
      explanation: "CO lies highest in the spectrochemical series, producing the largest splitting.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-electrochemistry-q01",
      topicId: "jee-chemistry-electrochemistry",
      text: "In a galvanic cell, oxidation occurs at the:",
      optionA: "Cathode",
      optionB: "Salt bridge",
      optionC: "Anode",
      optionD: "Electrolyte",
      correctOption: "C",
      explanation: "Oxidation always occurs at the anode of any electrochemical cell.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-electrochemistry-q02",
      topicId: "jee-chemistry-electrochemistry",
      text: "The value of the Faraday constant is approximately:",
      optionA: "9650 C/mol",
      optionB: "96500 C/mol",
      optionC: "6.022 x 10^23 C/mol",
      optionD: "1.6 x 10^-19 C/mol",
      correctOption: "B",
      explanation: "One Faraday is about 96500 C, the charge of one mole of electrons.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-electrochemistry-q03",
      topicId: "jee-chemistry-electrochemistry",
      text: "The standard cell potential is given by E-cathode minus:",
      optionA: "Zero",
      optionB: "E-electrolyte",
      optionC: "E-anode",
      optionD: "Twice E-anode",
      correctOption: "C",
      explanation: "E-cell-standard = E-cathode-standard minus E-anode-standard.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-electrochemistry-q04",
      topicId: "jee-chemistry-electrochemistry",
      text: "The Nernst equation introduces a correction term proportional to:",
      optionA: "1/Q",
      optionB: "Q squared",
      optionC: "log Q",
      optionD: "exp(Q)",
      correctOption: "C",
      explanation: "The Nernst equation subtracts (0.059/n) log Q from the standard potential.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-electrochemistry-q05",
      topicId: "jee-chemistry-electrochemistry",
      text: "A positive standard reduction potential indicates a species that is a:",
      optionA: "Strong reducing agent",
      optionB: "Poor conductor",
      optionC: "Neutral species",
      optionD: "Strong oxidising agent",
      correctOption: "D",
      explanation: "More positive reduction potential means a stronger tendency to be reduced, a good oxidiser.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-electrochemistry-q06",
      topicId: "jee-chemistry-electrochemistry",
      text: "The relation between Gibbs energy and cell potential is delta G-standard =:",
      optionA: "nFE-standard",
      optionB: "nF / E-standard",
      optionC: "E-standard / nF",
      optionD: "-nFE-standard",
      correctOption: "D",
      explanation: "delta G-standard = -nFE-cell-standard.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-electrochemistry-q07",
      topicId: "jee-chemistry-electrochemistry",
      text: "Kohlrausch's law concerns the molar conductivity at:",
      optionA: "High concentration",
      optionB: "Freezing point",
      optionC: "Standard pressure",
      optionD: "Infinite dilution",
      correctOption: "D",
      explanation: "Kohlrausch's law gives molar conductivity at infinite dilution as a sum of ionic contributions.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-electrochemistry-q08",
      topicId: "jee-chemistry-electrochemistry",
      text: "Passing 96500 C through molten NaCl deposits how many gram-equivalents of sodium?",
      optionA: "0.5",
      optionB: "1",
      optionC: "2",
      optionD: "23",
      correctOption: "B",
      explanation: "By Faraday's law, 96500 C deposits one gram-equivalent of the element.",
      orderIndex: 7
    },
    {
      id: "jee-chemistry-states-of-matter-q01",
      topicId: "jee-chemistry-states-of-matter",
      text: "Boyle's law states that at constant temperature, pressure is:",
      optionA: "Inversely proportional to volume",
      optionB: "Proportional to volume",
      optionC: "Independent of volume",
      optionD: "Proportional to temperature",
      correctOption: "A",
      explanation: "At constant T, PV is constant, so P varies inversely with V.",
      orderIndex: 0
    },
    {
      id: "jee-chemistry-states-of-matter-q02",
      topicId: "jee-chemistry-states-of-matter",
      text: "The ideal gas constant R in SI units is approximately:",
      optionA: "0.0821 J/(mol K)",
      optionB: "96500 J/(mol K)",
      optionC: "22.4 J/(mol K)",
      optionD: "8.314 J/(mol K)",
      correctOption: "D",
      explanation: "R = 8.314 J/(mol K) in SI units.",
      orderIndex: 1
    },
    {
      id: "jee-chemistry-states-of-matter-q03",
      topicId: "jee-chemistry-states-of-matter",
      text: "Charles's law states that at constant pressure, volume is proportional to:",
      optionA: "Pressure",
      optionB: "1/Temperature",
      optionC: "Absolute temperature",
      optionD: "Number of collisions",
      correctOption: "C",
      explanation: "At constant pressure, V is directly proportional to absolute temperature.",
      orderIndex: 2
    },
    {
      id: "jee-chemistry-states-of-matter-q04",
      topicId: "jee-chemistry-states-of-matter",
      text: "Dalton's law of partial pressures states that the total pressure equals the:",
      optionA: "Product of partial pressures",
      optionB: "Largest partial pressure",
      optionC: "Average of partial pressures",
      optionD: "Sum of partial pressures",
      correctOption: "D",
      explanation: "Total pressure is the sum of the partial pressures of all gases present.",
      orderIndex: 3
    },
    {
      id: "jee-chemistry-states-of-matter-q05",
      topicId: "jee-chemistry-states-of-matter",
      text: "The compressibility factor Z for an ideal gas is:",
      optionA: "1",
      optionB: "0",
      optionC: "Greater than 1 always",
      optionD: "Less than 0",
      correctOption: "A",
      explanation: "For an ideal gas Z = PV/nRT = 1.",
      orderIndex: 4
    },
    {
      id: "jee-chemistry-states-of-matter-q06",
      topicId: "jee-chemistry-states-of-matter",
      text: "In the van der Waals equation, the constant b corrects for the:",
      optionA: "Intermolecular attraction",
      optionB: "Finite volume of molecules",
      optionC: "Temperature drift",
      optionD: "Number of moles",
      correctOption: "B",
      explanation: "The constant b accounts for the finite volume occupied by gas molecules.",
      orderIndex: 5
    },
    {
      id: "jee-chemistry-states-of-matter-q07",
      topicId: "jee-chemistry-states-of-matter",
      text: "Real gases behave most ideally at:",
      optionA: "High pressure, low temperature",
      optionB: "Low pressure, low temperature",
      optionC: "High pressure, high temperature",
      optionD: "Low pressure, high temperature",
      correctOption: "D",
      explanation: "At low pressure and high temperature intermolecular forces become negligible.",
      orderIndex: 6
    },
    {
      id: "jee-chemistry-states-of-matter-q08",
      topicId: "jee-chemistry-states-of-matter",
      text: "The rms speed of gas molecules increases with:",
      optionA: "Increasing temperature",
      optionB: "Increasing molar mass",
      optionC: "Decreasing temperature",
      optionD: "Increasing pressure only",
      correctOption: "A",
      explanation: "v_rms = sqrt(3RT/M) rises with temperature and falls with molar mass.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-complex-numbers-q01",
      topicId: "jee-mathematics-complex-numbers",
      text: "The modulus of the complex number 3 + 4i is:",
      optionA: "25",
      optionB: "7",
      optionC: "5",
      optionD: "1",
      correctOption: "C",
      explanation: "|z| = sqrt(3² + 4²) = sqrt(25) = 5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-complex-numbers-q02",
      topicId: "jee-mathematics-complex-numbers",
      text: "The value of i raised to the power 4 is:",
      optionA: "i",
      optionB: "-1",
      optionC: "1",
      optionD: "-i",
      correctOption: "C",
      explanation: "i² = -1, so i^4 = (i²)² = 1.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-complex-numbers-q03",
      topicId: "jee-mathematics-complex-numbers",
      text: "The sum of the three cube roots of unity is:",
      optionA: "0",
      optionB: "1",
      optionC: "-1",
      optionD: "3",
      correctOption: "A",
      explanation: "1 + omega + omega² = 0 for the cube roots of unity.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-complex-numbers-q04",
      topicId: "jee-mathematics-complex-numbers",
      text: "The conjugate of the complex number 2 - 5i is:",
      optionA: "-2 + 5i",
      optionB: "-2 - 5i",
      optionC: "2 + 5i",
      optionD: "5 - 2i",
      correctOption: "C",
      explanation: "The conjugate flips the sign of the imaginary part, giving 2 + 5i.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-complex-numbers-q05",
      topicId: "jee-mathematics-complex-numbers",
      text: "By De Moivre's theorem, (cos(theta) + i sin(theta)) raised to n equals:",
      optionA: "cos(n theta) + i sin(n theta)",
      optionB: "cos(n theta) - i sin(n theta)",
      optionC: "n cos(theta) + i n sin(theta)",
      optionD: "cos(theta/n) + i sin(theta/n)",
      correctOption: "A",
      explanation: "De Moivre's theorem gives cos(n theta) + i sin(n theta).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-complex-numbers-q06",
      topicId: "jee-mathematics-complex-numbers",
      text: "The product of a complex number z and its conjugate equals:",
      optionA: "z",
      optionB: "Modulus of z",
      optionC: "Square of the modulus of z",
      optionD: "Zero",
      correctOption: "C",
      explanation: "z times its conjugate equals |z|².",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-complex-numbers-q07",
      topicId: "jee-mathematics-complex-numbers",
      text: "Multiplying a complex number by i rotates its representation in the plane by:",
      optionA: "90 degrees",
      optionB: "45 degrees",
      optionC: "180 degrees",
      optionD: "270 degrees",
      correctOption: "A",
      explanation: "Multiplication by i is rotation by 90 degrees about the origin.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-complex-numbers-q08",
      topicId: "jee-mathematics-complex-numbers",
      text: "The equation |z - 2| = 3 represents in the complex plane a:",
      optionA: "Straight line",
      optionB: "Single point",
      optionC: "Parabola",
      optionD: "Circle of radius 3",
      correctOption: "D",
      explanation: "|z - z0| = r is a circle of radius r centred at z0, here radius 3 at 2.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-sequences-series-q01",
      topicId: "jee-mathematics-sequences-series",
      text: "The 10th term of the AP 2, 5, 8, ... is:",
      optionA: "29",
      optionB: "27",
      optionC: "30",
      optionD: "32",
      correctOption: "A",
      explanation: "a_n = a + (n-1)d = 2 + 9(3) = 29.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-sequences-series-q02",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of the first n natural numbers is:",
      optionA: "n(n+1)",
      optionB: "n(n+1)/2",
      optionC: "n²",
      optionD: "n(2n+1)/6",
      correctOption: "B",
      explanation: "Sum of first n naturals is n(n+1)/2.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-sequences-series-q03",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of an infinite GP with first term 1 and ratio 1/2 is:",
      optionA: "2",
      optionB: "1",
      optionC: "1.5",
      optionD: "Infinite",
      correctOption: "A",
      explanation: "S = a/(1 - r) = 1/(1 - 0.5) = 2.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-sequences-series-q04",
      topicId: "jee-mathematics-sequences-series",
      text: "The geometric mean of 4 and 9 is:",
      optionA: "6",
      optionB: "6.5",
      optionC: "13",
      optionD: "36",
      correctOption: "A",
      explanation: "GM = sqrt(4 x 9) = sqrt(36) = 6.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-sequences-series-q05",
      topicId: "jee-mathematics-sequences-series",
      text: "For positive numbers, the relation among the three means is:",
      optionA: "AM = GM = HM",
      optionB: "AM is at least GM is at least HM",
      optionC: "HM is at least GM is at least AM",
      optionD: "GM is the largest",
      correctOption: "B",
      explanation: "AM is greater than or equal to GM, which is greater than or equal to HM.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-sequences-series-q06",
      topicId: "jee-mathematics-sequences-series",
      text: "The 5th term of the GP 3, 6, 12, ... is:",
      optionA: "24",
      optionB: "96",
      optionC: "48",
      optionD: "36",
      correctOption: "C",
      explanation: "a_n = a r^(n-1) = 3 x 2^4 = 48.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-sequences-series-q07",
      topicId: "jee-mathematics-sequences-series",
      text: "The sum of squares of the first n natural numbers is:",
      optionA: "n(n+1)/2",
      optionB: "[n(n+1)/2]²",
      optionC: "n(n+1)(2n+1)/6",
      optionD: "n²",
      correctOption: "C",
      explanation: "Sum of squares is n(n+1)(2n+1)/6.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-sequences-series-q08",
      topicId: "jee-mathematics-sequences-series",
      text: "A sequence whose reciprocals form an AP is called a:",
      optionA: "Geometric progression",
      optionB: "Fibonacci sequence",
      optionC: "Arithmetic progression",
      optionD: "Harmonic progression",
      correctOption: "D",
      explanation: "If reciprocals are in AP, the original sequence is a harmonic progression.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-permutations-combinations-q01",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The value of 5! (5 factorial) is:",
      optionA: "25",
      optionB: "120",
      optionC: "60",
      optionD: "720",
      correctOption: "B",
      explanation: "5! = 5 x 4 x 3 x 2 x 1 = 120.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-permutations-combinations-q02",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to choose 2 items from 5 distinct items is:",
      optionA: "5",
      optionB: "25",
      optionC: "20",
      optionD: "10",
      correctOption: "D",
      explanation: "5C2 = 10.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-permutations-combinations-q03",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of arrangements (permutations) of 3 items chosen from 5 is:",
      optionA: "60",
      optionB: "15",
      optionC: "120",
      optionD: "10",
      correctOption: "A",
      explanation: "5P3 = 5!/(2!) = 60.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-permutations-combinations-q04",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of circular permutations of 5 distinct objects is:",
      optionA: "24",
      optionB: "120",
      optionC: "5",
      optionD: "60",
      correctOption: "A",
      explanation: "Circular permutations of n objects equal (n-1)! = 4! = 24.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-permutations-combinations-q05",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The sum of all binomial coefficients nC0 + nC1 + ... + nCn equals:",
      optionA: "n",
      optionB: "n squared",
      optionC: "n!",
      optionD: "2 raised to n",
      correctOption: "D",
      explanation: "Setting a = b = 1 in (a+b)^n gives the sum 2 raised to n.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-permutations-combinations-q06",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to arrange the letters of the word LEVEL is:",
      optionA: "30",
      optionB: "60",
      optionC: "120",
      optionD: "20",
      correctOption: "A",
      explanation: "LEVEL has 5 letters with L and E repeated twice: 5!/(2! 2!) = 30.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-permutations-combinations-q07",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The identity nCr equals:",
      optionA: "nC(n+r)",
      optionB: "nCr-1",
      optionC: "nC(n-r)",
      optionD: "n!/r!",
      correctOption: "C",
      explanation: "By symmetry, nCr = nC(n-r).",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-permutations-combinations-q08",
      topicId: "jee-mathematics-permutations-combinations",
      text: "The number of ways to select at least one item from 4 distinct items is:",
      optionA: "4",
      optionB: "8",
      optionC: "15",
      optionD: "16",
      correctOption: "C",
      explanation: "Total subsets minus the empty set: 2^4 - 1 = 15.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-binomial-theorem-q01",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The number of terms in the expansion of (a + b) raised to 7 is:",
      optionA: "7",
      optionB: "8",
      optionC: "9",
      optionD: "14",
      correctOption: "B",
      explanation: "The expansion of (a + b)^n has n + 1 terms, here 8.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-binomial-theorem-q02",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The general term of (a + b) raised to n is:",
      optionA: "nCr a^r b^(n-r)",
      optionB: "nCr a^(n-r) b^r",
      optionC: "nPr a^(n-r) b^r",
      optionD: "a^(n-r) b^r",
      correctOption: "B",
      explanation: "The (r+1)th term is nCr times a^(n-r) times b^r.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-binomial-theorem-q03",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The coefficient of x² in the expansion of (1 + x) raised to 4 is:",
      optionA: "6",
      optionB: "4",
      optionC: "8",
      optionD: "12",
      correctOption: "A",
      explanation: "The coefficient is 4C2 = 6.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-binomial-theorem-q04",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The middle term in the expansion of (a + b) raised to 6 is the term number:",
      optionA: "3rd",
      optionB: "4th",
      optionC: "5th",
      optionD: "6th",
      correctOption: "B",
      explanation: "For n = 6 (even), the single middle term is the (n/2 + 1) = 4th term.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-binomial-theorem-q05",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The sum of the binomial coefficients in (1 + x) raised to 5 is:",
      optionA: "16",
      optionB: "10",
      optionC: "32",
      optionD: "25",
      correctOption: "C",
      explanation: "Putting x = 1 gives 2^5 = 32.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-binomial-theorem-q06",
      topicId: "jee-mathematics-binomial-theorem",
      text: "For small x, the approximation (1 + x) raised to n is approximately:",
      optionA: "1 + x raised to n",
      optionB: "1 - nx",
      optionC: "nx",
      optionD: "1 + nx",
      correctOption: "D",
      explanation: "For small x, (1 + x)^n is about 1 + nx.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-binomial-theorem-q07",
      topicId: "jee-mathematics-binomial-theorem",
      text: "The number of middle terms in the expansion of (a + b) raised to 9 is:",
      optionA: "1",
      optionB: "0",
      optionC: "3",
      optionD: "2",
      correctOption: "D",
      explanation: "When n is odd there are two middle terms.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-binomial-theorem-q08",
      topicId: "jee-mathematics-binomial-theorem",
      text: "Pascal's rule states nCr + nC(r-1) equals:",
      optionA: "nC(r+1)",
      optionB: "(n+1)Cr",
      optionC: "(n-1)Cr",
      optionD: "2 nCr",
      correctOption: "B",
      explanation: "Pascal's rule: nCr + nC(r-1) = (n+1)Cr.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-matrices-determinants-q01",
      topicId: "jee-mathematics-matrices-determinants",
      text: "The determinant of the 2x2 matrix with rows (2, 3) and (1, 4) is:",
      optionA: "8",
      optionB: "5",
      optionC: "11",
      optionD: "-5",
      correctOption: "B",
      explanation: "Determinant = (2)(4) - (3)(1) = 8 - 3 = 5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-matrices-determinants-q02",
      topicId: "jee-mathematics-matrices-determinants",
      text: "A square matrix is invertible only if its determinant is:",
      optionA: "Non-zero",
      optionB: "Zero",
      optionC: "Positive",
      optionD: "An integer",
      correctOption: "A",
      explanation: "An inverse exists only when the determinant is non-zero.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-matrices-determinants-q03",
      topicId: "jee-mathematics-matrices-determinants",
      text: "Matrix multiplication is in general:",
      optionA: "Commutative",
      optionB: "Equal to addition",
      optionC: "Always undefined",
      optionD: "Not commutative",
      correctOption: "D",
      explanation: "In general AB is not equal to BA, so matrix multiplication is not commutative.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-matrices-determinants-q04",
      topicId: "jee-mathematics-matrices-determinants",
      text: "If two rows of a determinant are identical, its value is:",
      optionA: "1",
      optionB: "Doubled",
      optionC: "Negative",
      optionD: "Zero",
      correctOption: "D",
      explanation: "A determinant with two equal rows is zero.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-matrices-determinants-q05",
      topicId: "jee-mathematics-matrices-determinants",
      text: "For a 3x3 matrix A, the determinant of kA equals:",
      optionA: "k det(A)",
      optionB: "k² det(A)",
      optionC: "det(A)",
      optionD: "k³ det(A)",
      correctOption: "D",
      explanation: "For an n x n matrix, det(kA) = k^n det(A); here k³ det(A).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-matrices-determinants-q06",
      topicId: "jee-mathematics-matrices-determinants",
      text: "A matrix that equals its own transpose is called:",
      optionA: "Skew-symmetric",
      optionB: "Symmetric",
      optionC: "Singular",
      optionD: "Orthogonal",
      correctOption: "B",
      explanation: "A matrix with transpose equal to itself is symmetric.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-matrices-determinants-q07",
      topicId: "jee-mathematics-matrices-determinants",
      text: "Cramer's rule can be used to solve a linear system only when the coefficient determinant is:",
      optionA: "Zero",
      optionB: "Non-zero",
      optionC: "Negative",
      optionD: "Even",
      correctOption: "B",
      explanation: "Cramer's rule requires a non-zero coefficient determinant for a unique solution.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-matrices-determinants-q08",
      topicId: "jee-mathematics-matrices-determinants",
      text: "The diagonal elements of a skew-symmetric matrix are all:",
      optionA: "Zero",
      optionB: "One",
      optionC: "Equal",
      optionD: "Negative",
      correctOption: "A",
      explanation: "A skew-symmetric matrix has all diagonal entries zero.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-straight-lines-circles-q01",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The slope of the line passing through (1, 2) and (3, 6) is:",
      optionA: "1",
      optionB: "3",
      optionC: "2",
      optionD: "4",
      correctOption: "C",
      explanation: "Slope = (6 - 2)/(3 - 1) = 4/2 = 2.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-straight-lines-circles-q02",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "Two lines are perpendicular when the product of their slopes is:",
      optionA: "0",
      optionB: "1",
      optionC: "Infinite",
      optionD: "-1",
      correctOption: "D",
      explanation: "Perpendicular lines satisfy m1 times m2 = -1.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-straight-lines-circles-q03",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The radius of the circle x² + y² = 49 is:",
      optionA: "14",
      optionB: "49",
      optionC: "7",
      optionD: "24.5",
      correctOption: "C",
      explanation: "Comparing with x² + y² = r² gives r = sqrt(49) = 7.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-straight-lines-circles-q04",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The centre of the circle x² + y² + 2gx + 2fy + c = 0 is:",
      optionA: "(-g, -f)",
      optionB: "(g, f)",
      optionC: "(2g, 2f)",
      optionD: "(-2g, -2f)",
      correctOption: "A",
      explanation: "The centre of the general circle is (-g, -f).",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-straight-lines-circles-q05",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "Two parallel lines have slopes that are:",
      optionA: "Negative reciprocals",
      optionB: "Equal",
      optionC: "Zero",
      optionD: "Opposite in sign",
      correctOption: "B",
      explanation: "Parallel lines have equal slopes.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-straight-lines-circles-q06",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The distance of the point (0, 0) from the line 3x + 4y - 10 = 0 is:",
      optionA: "1",
      optionB: "2",
      optionC: "10",
      optionD: "5",
      correctOption: "B",
      explanation: "Distance = |0 + 0 - 10|/sqrt(9 + 16) = 10/5 = 2.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-straight-lines-circles-q07",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "A line is tangent to a circle when its distance from the centre equals the:",
      optionA: "Diameter",
      optionB: "Circumference",
      optionC: "Radius",
      optionD: "Zero",
      correctOption: "C",
      explanation: "Tangency requires the centre-to-line distance to equal the radius.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-straight-lines-circles-q08",
      topicId: "jee-mathematics-straight-lines-circles",
      text: "The equation of a line with slope 2 and y-intercept 3 is:",
      optionA: "y = 3x + 2",
      optionB: "y = 2x + 3",
      optionC: "y = 2x - 3",
      optionD: "x = 2y + 3",
      correctOption: "B",
      explanation: "Using y = mx + c with m = 2 and c = 3 gives y = 2x + 3.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-limits-continuity-q01",
      topicId: "jee-mathematics-limits-continuity",
      text: "The limit as x approaches 0 of sin(x)/x is:",
      optionA: "0",
      optionB: "1",
      optionC: "Infinite",
      optionD: "Undefined",
      correctOption: "B",
      explanation: "This is a standard limit equal to 1.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-limits-continuity-q02",
      topicId: "jee-mathematics-limits-continuity",
      text: "A function f is continuous at x = a if the limit of f as x approaches a equals:",
      optionA: "0",
      optionB: "Infinity",
      optionC: "f(a)",
      optionD: "f prime of a",
      correctOption: "C",
      explanation: "Continuity at a requires the limit to equal the function value f(a).",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-limits-continuity-q03",
      topicId: "jee-mathematics-limits-continuity",
      text: "The function |x| at x = 0 is:",
      optionA: "Differentiable",
      optionB: "Undefined",
      optionC: "Discontinuous",
      optionD: "Continuous but not differentiable",
      correctOption: "D",
      explanation: "|x| is continuous everywhere but has a corner at 0, so it is not differentiable there.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-limits-continuity-q04",
      topicId: "jee-mathematics-limits-continuity",
      text: "The derivative of x³ with respect to x is:",
      optionA: "x²",
      optionB: "3x²",
      optionC: "3x",
      optionD: "x³/3",
      correctOption: "B",
      explanation: "By the power rule, d/dx of x³ is 3x².",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-limits-continuity-q05",
      topicId: "jee-mathematics-limits-continuity",
      text: "The limit as x approaches 0 of (e^x - 1)/x is:",
      optionA: "0",
      optionB: "e",
      optionC: "1",
      optionD: "Infinite",
      correctOption: "C",
      explanation: "This standard limit equals 1.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-limits-continuity-q06",
      topicId: "jee-mathematics-limits-continuity",
      text: "Differentiability of a function at a point implies that it is:",
      optionA: "Discontinuous there",
      optionB: "Unbounded",
      optionC: "Constant",
      optionD: "Continuous there",
      correctOption: "D",
      explanation: "Differentiability implies continuity, though the converse is false.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-limits-continuity-q07",
      topicId: "jee-mathematics-limits-continuity",
      text: "The derivative of the product uv is:",
      optionA: "u prime v + u v prime",
      optionB: "u prime v prime",
      optionC: "u prime v - u v prime",
      optionD: "u v",
      correctOption: "A",
      explanation: "The product rule gives (uv) prime = u prime v + u v prime.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-limits-continuity-q08",
      topicId: "jee-mathematics-limits-continuity",
      text: "A limit of the indeterminate form 0/0 can often be evaluated using:",
      optionA: "The power rule",
      optionB: "Integration",
      optionC: "L'Hopital's rule",
      optionD: "The product rule",
      correctOption: "C",
      explanation: "L'Hopital's rule resolves 0/0 and infinity/infinity forms by differentiating top and bottom.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-integration-q01",
      topicId: "jee-mathematics-integration",
      text: "The integral of x² with respect to x is:",
      optionA: "2x + C",
      optionB: "x³ + C",
      optionC: "x³/3 + C",
      optionD: "3x² + C",
      correctOption: "C",
      explanation: "By the power rule, the integral of x² is x³/3 + C.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-integration-q02",
      topicId: "jee-mathematics-integration",
      text: "The integral of 1/x with respect to x is:",
      optionA: "-1/x² + C",
      optionB: "ln|x| + C",
      optionC: "x + C",
      optionD: "1 + C",
      correctOption: "B",
      explanation: "The integral of 1/x is the natural logarithm ln|x| + C.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-integration-q03",
      topicId: "jee-mathematics-integration",
      text: "The integration by parts formula is the integral of u dv equals:",
      optionA: "uv minus the integral of v du",
      optionB: "uv plus the integral of v du",
      optionC: "uv times the integral of du",
      optionD: "the integral of u times the integral of dv",
      correctOption: "A",
      explanation: "Integration by parts: integral of u dv = uv minus the integral of v du.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-integration-q04",
      topicId: "jee-mathematics-integration",
      text: "The definite integral of 2x from 0 to 3 is:",
      optionA: "6",
      optionB: "18",
      optionC: "9",
      optionD: "3",
      correctOption: "C",
      explanation: "The antiderivative is x², so the value is 9 - 0 = 9.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-integration-q05",
      topicId: "jee-mathematics-integration",
      text: "The integral over a symmetric interval (-a to a) of an odd function is:",
      optionA: "2 times the integral from 0 to a",
      optionB: "Infinite",
      optionC: "a²",
      optionD: "Zero",
      correctOption: "D",
      explanation: "An odd function integrates to zero over a symmetric interval.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-integration-q06",
      topicId: "jee-mathematics-integration",
      text: "The integral of e^x with respect to x is:",
      optionA: "x e^x + C",
      optionB: "ln(x) + C",
      optionC: "e^x / x + C",
      optionD: "e^x + C",
      correctOption: "D",
      explanation: "The integral of e^x is itself, e^x + C.",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-integration-q07",
      topicId: "jee-mathematics-integration",
      text: "The Fundamental Theorem of Calculus links integration to:",
      optionA: "Multiplication",
      optionB: "Factoring",
      optionC: "Differentiation",
      optionD: "Series summation",
      correctOption: "C",
      explanation: "It states the definite integral equals the change in an antiderivative, linking it to differentiation.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-integration-q08",
      topicId: "jee-mathematics-integration",
      text: "The recommended order for choosing u in integration by parts is given by:",
      optionA: "ILATE",
      optionB: "FOIL",
      optionC: "PEMDAS",
      optionD: "SOHCAHTOA",
      correctOption: "A",
      explanation: "ILATE orders functions (inverse, log, algebraic, trig, exponential) for choosing u.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-vectors-3d-q01",
      topicId: "jee-mathematics-vectors-3d",
      text: "The dot product of two perpendicular vectors is:",
      optionA: "Maximum",
      optionB: "Negative",
      optionC: "Their product of magnitudes",
      optionD: "Zero",
      correctOption: "D",
      explanation: "a dot b = |a||b|cos(90) = 0 for perpendicular vectors.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-vectors-3d-q02",
      topicId: "jee-mathematics-vectors-3d",
      text: "The cross product of two parallel vectors is:",
      optionA: "Maximum",
      optionB: "The zero vector",
      optionC: "A scalar",
      optionD: "Their sum",
      correctOption: "B",
      explanation: "a cross b = |a||b|sin(0) = 0 for parallel vectors.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-vectors-3d-q03",
      topicId: "jee-mathematics-vectors-3d",
      text: "The magnitude of the vector (3, 0, 4) is:",
      optionA: "7",
      optionB: "5",
      optionC: "12",
      optionD: "25",
      correctOption: "B",
      explanation: "Magnitude = sqrt(9 + 0 + 16) = sqrt(25) = 5.",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-vectors-3d-q04",
      topicId: "jee-mathematics-vectors-3d",
      text: "The scalar triple product of three vectors gives the volume of a:",
      optionA: "Sphere",
      optionB: "Cylinder",
      optionC: "Parallelepiped",
      optionD: "Cone",
      correctOption: "C",
      explanation: "The scalar triple product a dot (b cross c) equals the parallelepiped volume.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-vectors-3d-q05",
      topicId: "jee-mathematics-vectors-3d",
      text: "Three vectors are coplanar when their scalar triple product is:",
      optionA: "Positive",
      optionB: "Zero",
      optionC: "Negative",
      optionD: "One",
      correctOption: "B",
      explanation: "Coplanarity makes the scalar triple product (the volume) zero.",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-vectors-3d-q06",
      topicId: "jee-mathematics-vectors-3d",
      text: "The direction ratios of the normal to the plane 2x + 3y - z + 5 = 0 are:",
      optionA: "(1, 1, 1)",
      optionB: "(2, 3, 5)",
      optionC: "(5, 3, -1)",
      optionD: "(2, 3, -1)",
      correctOption: "D",
      explanation: "The coefficients of x, y, z give the normal's direction ratios (2, 3, -1).",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-vectors-3d-q07",
      topicId: "jee-mathematics-vectors-3d",
      text: "The cross product of two vectors yields a vector that is:",
      optionA: "Parallel to both",
      optionB: "Perpendicular to both",
      optionC: "In the same plane",
      optionD: "Always zero",
      correctOption: "B",
      explanation: "The cross product is perpendicular to both original vectors.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-vectors-3d-q08",
      topicId: "jee-mathematics-vectors-3d",
      text: "The angle between two planes equals the angle between their:",
      optionA: "Areas",
      optionB: "Normals",
      optionC: "Intercepts",
      optionD: "Centroids",
      correctOption: "B",
      explanation: "The angle between two planes is the angle between their normal vectors.",
      orderIndex: 7
    },
    {
      id: "jee-mathematics-probability-q01",
      topicId: "jee-mathematics-probability",
      text: "The probability of getting a head in a single toss of a fair coin is:",
      optionA: "0",
      optionB: "0.25",
      optionC: "1",
      optionD: "0.5",
      correctOption: "D",
      explanation: "A fair coin has two equally likely outcomes, so P(head) = 0.5.",
      orderIndex: 0
    },
    {
      id: "jee-mathematics-probability-q02",
      topicId: "jee-mathematics-probability",
      text: "The probability of rolling a number greater than 4 on a fair die is:",
      optionA: "1/6",
      optionB: "2/3",
      optionC: "1/2",
      optionD: "1/3",
      correctOption: "D",
      explanation: "Favourable outcomes are 5 and 6, so probability = 2/6 = 1/3.",
      orderIndex: 1
    },
    {
      id: "jee-mathematics-probability-q03",
      topicId: "jee-mathematics-probability",
      text: "For two independent events, P(A and B) equals:",
      optionA: "P(A) + P(B)",
      optionB: "P(A)/P(B)",
      optionC: "P(A) - P(B)",
      optionD: "P(A) times P(B)",
      correctOption: "D",
      explanation: "Independent events satisfy P(A and B) = P(A) times P(B).",
      orderIndex: 2
    },
    {
      id: "jee-mathematics-probability-q04",
      topicId: "jee-mathematics-probability",
      text: "The sum of the probabilities of an event and its complement is:",
      optionA: "0",
      optionB: "0.5",
      optionC: "1",
      optionD: "2",
      correctOption: "C",
      explanation: "P(E) + P(E complement) = 1.",
      orderIndex: 3
    },
    {
      id: "jee-mathematics-probability-q05",
      topicId: "jee-mathematics-probability",
      text: "For mutually exclusive events A and B, P(A or B) equals:",
      optionA: "P(A) times P(B)",
      optionB: "P(A) + P(B) - P(A and B)",
      optionC: "P(A) + P(B)",
      optionD: "1",
      correctOption: "C",
      explanation: "Mutually exclusive events cannot both occur, so P(A or B) = P(A) + P(B).",
      orderIndex: 4
    },
    {
      id: "jee-mathematics-probability-q06",
      topicId: "jee-mathematics-probability",
      text: "The conditional probability P(A given B) is defined as:",
      optionA: "P(B)/P(A)",
      optionB: "P(A)/P(B)",
      optionC: "P(A and B) times P(B)",
      optionD: "P(A and B)/P(B)",
      correctOption: "D",
      explanation: "P(A given B) = P(A and B)/P(B).",
      orderIndex: 5
    },
    {
      id: "jee-mathematics-probability-q07",
      topicId: "jee-mathematics-probability",
      text: "The mean of a binomial distribution with parameters n and p is:",
      optionA: "n/p",
      optionB: "npq",
      optionC: "p/n",
      optionD: "np",
      correctOption: "D",
      explanation: "The mean of a binomial distribution is np.",
      orderIndex: 6
    },
    {
      id: "jee-mathematics-probability-q08",
      topicId: "jee-mathematics-probability",
      text: "Drawing two aces in succession from a deck without replacement involves events that are:",
      optionA: "Independent",
      optionB: "Dependent",
      optionC: "Mutually exclusive",
      optionD: "Impossible",
      correctOption: "B",
      explanation: "Without replacement, the first draw changes the second's probability, so events are dependent.",
      orderIndex: 7
    }
  ]
});
