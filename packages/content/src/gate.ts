import { defineBundle } from "./builder";

export const gate = defineBundle({
  exam: {
    id: "gate",
    slug: "gate",
    name: "GATE",
    tagline: "Engineering Maths · Aptitude · Core CS",
    orderIndex: 4
  },
  subjects: [
    { id: "gate-engineering-mathematics", examId: "gate", name: "Engineering Mathematics", slug: "engineering-mathematics", orderIndex: 0 },
    { id: "gate-general-aptitude", examId: "gate", name: "General Aptitude", slug: "general-aptitude", orderIndex: 1 },
    { id: "gate-core-cs", examId: "gate", name: "Core CS", slug: "core-cs", orderIndex: 2 }
  ],
  topics: [
    {
      id: "gate-engineering-mathematics-linear-algebra",
      subjectId: "gate-engineering-mathematics",
      name: "Linear Algebra",
      slug: "linear-algebra",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability",
      subjectId: "gate-engineering-mathematics",
      name: "Probability",
      slug: "probability",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles",
      subjectId: "gate-general-aptitude",
      name: "Ratio & Logical Puzzles",
      slug: "ratio-logical-puzzles",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees",
      subjectId: "gate-core-cs",
      name: "Data Structures — Complexity & Trees",
      slug: "data-structures-complexity-trees",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus",
      subjectId: "gate-engineering-mathematics",
      name: "Calculus",
      slug: "calculus",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-differential-equations",
      subjectId: "gate-engineering-mathematics",
      name: "Differential Equations",
      slug: "differential-equations",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-sets-relations",
      subjectId: "gate-engineering-mathematics",
      name: "Discrete Mathematics: Sets & Relations",
      slug: "sets-relations",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-graph-theory",
      subjectId: "gate-engineering-mathematics",
      name: "Graph Theory",
      slug: "graph-theory",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-combinatorics",
      subjectId: "gate-engineering-mathematics",
      name: "Combinatorics",
      slug: "combinatorics",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-numerical-methods",
      subjectId: "gate-engineering-mathematics",
      name: "Numerical Methods",
      slug: "numerical-methods",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude",
      subjectId: "gate-general-aptitude",
      name: "Quantitative Aptitude",
      slug: "quantitative-aptitude",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-verbal-ability",
      subjectId: "gate-general-aptitude",
      name: "Verbal Ability",
      slug: "verbal-ability",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-data-interpretation",
      subjectId: "gate-general-aptitude",
      name: "Data Interpretation",
      slug: "data-interpretation",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series",
      subjectId: "gate-general-aptitude",
      name: "Logical Reasoning & Series",
      slug: "logical-reasoning-series",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity",
      subjectId: "gate-core-cs",
      name: "Algorithms: Sorting & Complexity",
      slug: "algorithms-sorting-complexity",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming",
      subjectId: "gate-core-cs",
      name: "Greedy & Dynamic Programming",
      slug: "greedy-dynamic-programming",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-operating-systems",
      subjectId: "gate-core-cs",
      name: "Operating Systems",
      slug: "operating-systems",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-dbms-sql",
      subjectId: "gate-core-cs",
      name: "DBMS & SQL",
      slug: "dbms-sql",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-networks",
      subjectId: "gate-core-cs",
      name: "Computer Networks",
      slug: "computer-networks",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-theory-of-computation",
      subjectId: "gate-core-cs",
      name: "Theory of Computation",
      slug: "theory-of-computation",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-compiler-design",
      subjectId: "gate-core-cs",
      name: "Compiler Design",
      slug: "compiler-design",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-organization-architecture",
      subjectId: "gate-core-cs",
      name: "Computer Organization & Architecture",
      slug: "computer-organization-architecture",
      orderIndex: 8
    },
    {
      id: "gate-core-cs-digital-logic",
      subjectId: "gate-core-cs",
      name: "Digital Logic",
      slug: "digital-logic",
      orderIndex: 9
    },
    {
      id: "gate-core-cs-programming-recursion-c",
      subjectId: "gate-core-cs",
      name: "Programming & Recursion in C",
      slug: "programming-recursion-c",
      orderIndex: 10
    }
  ],
  materials: [
    {
      id: "gate-engineering-mathematics-linear-algebra-m01",
      topicId: "gate-engineering-mathematics-linear-algebra",
      title: "Linear Algebra",
      content: `**Linear algebra** is the study of vectors, matrices and the linear maps between them — a guaranteed source of GATE marks across every branch.

## Determinant & Inverse
- A square matrix **A** is **invertible** iff **det(A) ≠ 0** (it is then non-singular).
- **A⁻¹ = adj(A) / det(A)**.
- det(AB) = det(A)·det(B); det(Aᵀ) = det(A).

## Rank & Systems
- **Rank** = number of linearly independent rows (or columns) = number of non-zero rows in row-echelon form.
- For **Ax = b**: a unique solution needs rank(A) = rank(A|b) = number of unknowns; if rank < n, infinite solutions; if rank(A) ≠ rank(A|b), no solution.

## Eigenvalues & Eigenvectors
For **Av = λv** (v ≠ 0):

\`\`\`
det(A - lambda*I) = 0   (characteristic equation)
\`\`\`

| Property | Result |
| --- | --- |
| Sum of eigenvalues | trace(A) |
| Product of eigenvalues | det(A) |
| Eigenvalues of A⁻¹ | 1/λ |
| Eigenvalues of Aᵏ | λᵏ |

### Special Matrices
- **Symmetric** (A = Aᵀ) matrices have **real eigenvalues**.
- A **triangular** matrix's eigenvalues are its diagonal entries.
- The **Cayley–Hamilton theorem** states every matrix satisfies its own characteristic equation, a fast way to find A⁻¹ or high powers.

### Tip
- Trace and determinant give two quick checks on computed eigenvalues — their sum must equal the trace and their product the determinant.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability-m01",
      topicId: "gate-engineering-mathematics-probability",
      title: "Probability",
      content: `**Probability** quantifies uncertainty on a scale from 0 (impossible) to 1 (certain). GATE tests both combinatorial and distribution-based questions.

## Axioms & Rules
- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- For **mutually exclusive** events, P(A ∩ B) = 0.
- **Conditional probability:** P(A|B) = P(A ∩ B) / P(B).
- **Independent events:** P(A ∩ B) = P(A)·P(B).

## Bayes' Theorem
\`\`\`
P(A|B) = P(B|A) * P(A) / P(B)
\`\`\`

## Key Distributions
| Distribution | Mean | Variance |
| --- | --- | --- |
| Binomial (n, p) | np | np(1−p) |
| Poisson (λ) | λ | λ |
| Uniform (a, b) | (a+b)/2 | (b−a)²/12 |
| Normal (μ, σ²) | μ | σ² |

## Expectation & Variance
- **E(X) = Σ x·P(x)** (the mean).
- **Var(X) = E(X²) − [E(X)]²**.
- Var(aX + b) = a²·Var(X); the constant b does not affect variance.

### Common Results
- For a fair die, E(X) = 3.5.
- The **Poisson** approximates the binomial when n is large and p is small (λ = np).
- The standard **normal distribution** is symmetric about its mean, with about 68% of values within one σ.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-m01",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      title: "Ratio, Proportion & Logical Puzzles",
      content: `**General Aptitude** carries 15% of GATE marks and is the highest return-on-effort section. Ratios and quick logic dominate.

## Ratio & Proportion
- A **ratio** a : b compares two quantities; a **proportion** equates two ratios, a : b = c : d, so **ad = bc**.
- To divide an amount in ratio a : b : c, each share = (part / sum) × total.
- **Mean proportional** between a and b is **√(ab)**.

## Mixtures & Alligation
The **rule of alligation** finds the ratio in which two ingredients at given prices are mixed to get a mean price:

\`\`\`
(Cheaper qty) / (Dearer qty) = (Dearer price - Mean) / (Mean - Cheaper price)
\`\`\`

## Logical Puzzle Tactics
| Puzzle type | Approach |
| --- | --- |
| Seating / arrangement | Draw a grid, fix one anchor |
| Blood relations | Use a family-tree diagram |
| Direction sense | Sketch N-E-S-W axes |
| Syllogisms | Use Venn diagrams |

### Worked Idea
- If A : B = 2 : 3 and B : C = 4 : 5, scale to a common B: A : B : C = 8 : 12 : 15.
- In **work problems**, if A does a job in x days, A's one-day work is **1/x**; combined rate adds the reciprocals.

### Tip
- Convert worded comparisons into a single chained ratio before computing — it removes most arithmetic slips.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-m01",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      title: "Data Structures — Complexity & Trees",
      content: `**Data structures** and their time complexities form the backbone of the GATE CS paper.

## Asymptotic Notation
- **Big-O** is the upper bound, **Ω** the lower bound, **Θ** the tight bound.
- Growth order: **O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)**.

## Operation Complexities
| Structure | Search | Insert | Delete |
| --- | --- | --- | --- |
| Array (unsorted) | O(n) | O(1) | O(n) |
| Sorted array | O(log n) | O(n) | O(n) |
| Hash table (avg) | O(1) | O(1) | O(1) |
| Balanced BST | O(log n) | O(log n) | O(log n) |
| Binary heap | O(n) | O(log n) | O(log n) |

## Trees
- A **binary tree** of height h has at most **2^(h+1) − 1** nodes.
- A **complete binary tree** with n nodes has height **⌊log₂ n⌋**.
- **BST property:** left subtree < node < right subtree; inorder traversal yields sorted order.
- **AVL** and **Red-Black** trees self-balance to keep operations at O(log n).

### Traversals
- **Inorder** (L, root, R), **Preorder** (root, L, R), **Postorder** (L, R, root).
- A **binary heap** is a complete tree stored in an array: for node i, children are at **2i+1** and **2i+2**.

### Tip
- A skewed (unbalanced) BST degrades to O(n) — this is exactly why balanced trees exist.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus-m01",
      topicId: "gate-engineering-mathematics-calculus",
      title: "Calculus",
      content: `**Calculus** studies change through limits, derivatives and integrals — a recurring GATE topic in every engineering branch.

## Limits & Continuity
- A function is **continuous** at x = a if the left limit, right limit and f(a) all coincide.
- **L'Hopital's rule** resolves 0/0 or infinity/infinity forms by differentiating numerator and denominator.

## Derivatives
- The derivative measures instantaneous rate of change: **f'(x) = lim (f(x+h) - f(x))/h**.
- **Maxima/minima:** set f'(x) = 0; if f''(x) > 0 it is a minimum, if f''(x) < 0 a maximum.

| Function | Derivative |
| --- | --- |
| xⁿ | n·xⁿ⁻¹ |
| sin x | cos x |
| eˣ | eˣ |
| ln x | 1/x |

## Integration
The **Fundamental Theorem of Calculus** links the two operations:

\`\`\`
integral from a to b of f'(x) dx = f(b) - f(a)
\`\`\`

- **Definite integrals** give net area; **indefinite integrals** add a constant C.

### Series & Mean Value
- The **Mean Value Theorem** guarantees a point where the tangent slope equals the average rate over [a, b].
- A **Taylor series** expands f about a point: f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...

### Tip
- Always test the second derivative or check endpoints before declaring a global extremum.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-differential-equations-m01",
      topicId: "gate-engineering-mathematics-differential-equations",
      title: "Differential Equations",
      content: `A **differential equation** relates a function to its derivatives. GATE focuses on first-order and linear constant-coefficient forms.

## Order & Degree
- **Order** is the highest derivative present; **degree** is the power of that highest derivative after clearing radicals.

## First-Order Methods
- **Separable:** rewrite as g(y) dy = h(x) dx and integrate both sides.
- **Linear:** for dy/dx + P(x)y = Q(x), use the **integrating factor**:

\`\`\`
IF = e^(integral of P(x) dx)
\`\`\`

- **Exact:** M dx + N dy = 0 is exact when dM/dy = dN/dx.

## Second-Order Linear (constant coefficients)
For ay'' + by' + cy = 0, solve the **auxiliary equation** am² + bm + c = 0:

| Roots | General solution |
| --- | --- |
| Real distinct m1, m2 | C1·e^(m1·x) + C2·e^(m2·x) |
| Real equal m | (C1 + C2·x)·e^(m·x) |
| Complex p ± qi | e^(p·x)(C1·cos qx + C2·sin qx) |

### Particular & General
- The full solution is **complementary function + particular integral**.
- Order n equations need n independent boundary or initial conditions.

### Tip
- Identify the equation type first; choosing the wrong method wastes the most time.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-sets-relations-m01",
      topicId: "gate-engineering-mathematics-sets-relations",
      title: "Discrete Mathematics: Sets & Relations",
      content: `**Sets and relations** underpin databases, logic and automata — a high-yield discrete mathematics area for GATE CS.

## Set Basics
- **Cardinality** |A| is the number of elements; the **power set** of an n-element set has **2ⁿ** subsets.
- **Inclusion-exclusion:** |A ∪ B| = |A| + |B| − |A ∩ B|.

## Relations
A **relation** R on set A is a subset of A × A. Key properties:

| Property | Definition |
| --- | --- |
| Reflexive | (a, a) in R for all a |
| Symmetric | (a, b) in R implies (b, a) in R |
| Transitive | (a, b) and (b, c) in R implies (a, c) in R |
| Antisymmetric | (a, b) and (b, a) in R implies a = b |

## Equivalence & Partial Order
- An **equivalence relation** is reflexive, symmetric and transitive; it partitions A into disjoint classes.
- A **partial order** is reflexive, antisymmetric and transitive (a poset).

## Functions
- A function is **injective** (one-to-one), **surjective** (onto) or **bijective** (both).
- The number of functions from an m-set to an n-set is **n^m**.

### Tip
- For a set with n elements, there are 2^(n²) possible relations — count carefully in property questions.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-graph-theory-m01",
      topicId: "gate-engineering-mathematics-graph-theory",
      title: "Graph Theory",
      content: `**Graph theory** models networks of vertices and edges, appearing in algorithms, networks and combinatorics on GATE.

## Fundamentals
- A graph G = (V, E) has vertices V and edges E.
- The **handshaking lemma:** the sum of all vertex degrees equals **2|E|**.
- A **simple graph** has no loops or multiple edges.

## Special Graphs
| Graph | Edges |
| --- | --- |
| Complete K_n | n(n−1)/2 |
| Tree (n vertices) | n − 1 |
| Bipartite K(m,n) | m·n |

## Connectivity & Trees
- A **tree** is a connected acyclic graph with exactly n − 1 edges.
- A graph is **connected** if a path exists between every pair of vertices.

## Special Walks
- An **Euler circuit** exists iff the graph is connected and every vertex has **even degree**.
- A **Hamiltonian cycle** visits every vertex exactly once (no simple characterization).

## Coloring & Planarity
- The **chromatic number** is the minimum colors for a proper vertex coloring.
- For a connected planar graph, **Euler's formula** holds:

\`\`\`
V - E + F = 2
\`\`\`

### Tip
- Check the even-degree condition first when a question mentions traversing every edge.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-combinatorics-m01",
      topicId: "gate-engineering-mathematics-combinatorics",
      title: "Combinatorics",
      content: `**Combinatorics** counts arrangements and selections, a fast-scoring GATE topic underpinning probability and algorithms.

## Permutations & Combinations
- **Permutations** (order matters): nPr = n! / (n − r)!.
- **Combinations** (order ignored): nCr = n! / (r!(n − r)!).

\`\`\`
nCr = nC(n-r)   and   nCr + nC(r-1) = (n+1)Cr
\`\`\`

## Counting Principles
| Principle | Idea |
| --- | --- |
| Sum rule | Either A or B: add the counts |
| Product rule | A then B: multiply the counts |
| Pigeonhole | n+1 items in n boxes force a repeat |

## Binomial Theorem
- (x + y)ⁿ = Σ nCk · xⁿ⁻ᵏ · yᵏ; the coefficients form **Pascal's triangle**.
- The sum of all binomial coefficients for exponent n is **2ⁿ**.

## Arrangements with Repetition
- Distinct arrangements of a word with repeated letters = n! / (p! q! ...).
- Circular permutations of n objects = **(n − 1)!**.

### Tip
- Decide first whether order matters; that single choice picks permutation versus combination.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-m01",
      topicId: "gate-engineering-mathematics-numerical-methods",
      title: "Numerical Methods",
      content: `**Numerical methods** approximate solutions to equations and integrals when closed forms are hard — a steady GATE scorer.

## Root-Finding
- **Bisection** halves a bracketing interval each step; it converges **linearly** but is guaranteed.
- **Newton-Raphson** uses the tangent for fast (quadratic) convergence:

\`\`\`
x_{n+1} = x_n - f(x_n)/f'(x_n)
\`\`\`

- **Secant** approximates the derivative with a difference quotient.

## Numerical Integration
| Rule | Error order |
| --- | --- |
| Trapezoidal | O(h²) |
| Simpson's 1/3 | O(h⁴) |

- **Simpson's 1/3 rule** needs an even number of subintervals.

## Interpolation
- **Lagrange** and **Newton's divided differences** fit a polynomial through given points.
- n+1 points determine a unique polynomial of degree at most n.

## Convergence Notes
- Newton-Raphson may diverge if f'(x) is near zero or the start point is poor.
- Smaller step size h generally lowers truncation error but raises round-off error.

### Tip
- Quote convergence order from memory: bisection linear, Newton-Raphson quadratic.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-m01",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      title: "Quantitative Aptitude",
      content: `**Quantitative aptitude** rewards speed on percentages, interest, speed-time and averages — reliable GATE aptitude marks.

## Percentages & Profit
- A change from old to new is **((new − old)/old) × 100** percent.
- **Profit% = (Profit / Cost Price) × 100**; selling above cost gives profit.

## Interest
\`\`\`
Simple Interest = P*R*T/100
Compound Amount  = P*(1 + R/100)^T
\`\`\`

## Speed, Time & Distance
| Quantity | Relation |
| --- | --- |
| Speed | Distance / Time |
| Average speed | Total distance / Total time |
| Relative speed (same dir) | difference of speeds |
| Relative speed (opposite) | sum of speeds |

## Averages
- **Average = sum of observations / number of observations**.
- Adding a value equal to the current average leaves the average unchanged.

### Worked Idea
- A 20% increase followed by a 20% decrease yields a net **4% decrease**, not zero, because the base changes.

### Tip
- Convert percentages to fractions (25% = 1/4) to cut arithmetic time under exam pressure.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-verbal-ability-m01",
      topicId: "gate-general-aptitude-verbal-ability",
      title: "Verbal Ability",
      content: `**Verbal ability** tests vocabulary, grammar and reading comprehension — easy marks for a careful reader on GATE.

## Vocabulary
- **Synonyms** share meaning; **antonyms** oppose it. Context decides the best fit.
- Watch for **homophones** (their/there) and commonly confused pairs (affect/effect).

## Grammar Essentials
| Concept | Rule |
| --- | --- |
| Subject-verb agreement | Singular subject takes a singular verb |
| Tense consistency | Keep one timeframe within a clause |
| Articles | Use 'a' before consonant sounds, 'an' before vowel sounds |
| Modifiers | Place modifiers next to the word they describe |

## Sentence Completion
- Read the full sentence for tone and logical connectors (however, therefore, although).
- A contrast word signals an opposite idea ahead.

## Reading Comprehension
- Identify the **main idea** before the details.
- Distinguish **stated facts** from the author's **inference or opinion**.

### Tip
- For analogies, state the relationship in a short sentence, then test each option against it.`,
      estimatedReadTime: 1,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-data-interpretation-m01",
      topicId: "gate-general-aptitude-data-interpretation",
      title: "Data Interpretation",
      content: `**Data interpretation** asks you to read tables, charts and graphs and compute quickly — a high-yield GATE aptitude skill.

## Chart Types
| Chart | Best for |
| --- | --- |
| Bar chart | Comparing discrete categories |
| Line graph | Trends over time |
| Pie chart | Parts of a whole (360 degrees) |
| Table | Exact values |

## Pie Chart Maths
- Each category's angle = **(category value / total) × 360** degrees.
- A category's percentage = (its angle / 360) × 100.

## Common Computations
\`\`\`
Percentage change = (New - Old) / Old * 100
Average = Sum of values / Count of values
\`\`\`

## Reading Tips
- Note the **units and scale** (thousands, lakhs, percent) before calculating.
- Watch whether a value is **absolute** or already a **percentage**.

### Worked Idea
- If a 90 degree sector represents 45 units, the whole pie is 4 × 45 = 180 units.

### Tip
- Approximate first to eliminate far-off options, then compute the exact value only if needed.`,
      estimatedReadTime: 1,
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-m01",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      title: "Logical Reasoning & Series",
      content: `**Logical reasoning and series** test pattern recognition and deduction — fast, formula-light GATE aptitude marks.

## Number Series
- Look for a consistent **difference**, **ratio**, or pattern of squares/cubes.
- Mixed series may alternate two rules across odd and even positions.

| Series | Rule |
| --- | --- |
| 2, 4, 8, 16 | Multiply by 2 |
| 1, 4, 9, 16 | Perfect squares |
| 2, 6, 12, 20 | n(n+1) |
| 1, 1, 2, 3, 5 | Fibonacci (add previous two) |

## Coding-Decoding
- Map letters to positions (A = 1, Z = 26) and look for a fixed shift.
- A common cipher shifts each letter forward or backward by a constant.

## Syllogisms & Statements
- Use **Venn diagrams** to test whether a conclusion necessarily follows.
- A conclusion is valid only if it holds in **every** possible diagram.

## Logical Deduction
\`\`\`
If P implies Q, and Q is false, then P is false (modus tollens)
\`\`\`

### Tip
- Check first differences, then ratios; most number series yield to one of these two quickly.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-m01",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      title: "Algorithms: Sorting & Complexity",
      content: `**Sorting algorithms** and their analysis are core GATE territory, blending recurrence solving with comparison counting.

## Comparison Sorts
| Algorithm | Best | Average | Worst | Space |
| --- | --- | --- | --- | --- |
| Quick sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Insertion sort | O(n) | O(n²) | O(n²) | O(1) |

- Any **comparison-based sort** has a lower bound of **Omega(n log n)**.

## Stability & In-Place
- A **stable** sort preserves the order of equal keys (merge, insertion are stable).
- **Quick sort** is in-place but not stable; **merge sort** is stable but needs O(n) extra space.

## Recurrences (Master Theorem)
\`\`\`
T(n) = a*T(n/b) + f(n)
\`\`\`

- Merge sort's T(n) = 2T(n/2) + O(n) solves to **O(n log n)**.

## Linear-Time Sorts
- **Counting, radix and bucket** sorts beat the n log n bound by avoiding comparisons, given bounded keys.

### Tip
- Quick sort's worst case O(n²) arises on already-sorted input with a poor pivot choice.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-m01",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      title: "Greedy & Dynamic Programming",
      content: `**Greedy** and **dynamic programming (DP)** are the two optimization paradigms most tested in GATE algorithm questions.

## Greedy Method
- Builds a solution by making the **locally optimal** choice at each step.
- Works only when the problem has the **greedy-choice property** and optimal substructure.

| Greedy algorithm | Problem |
| --- | --- |
| Kruskal / Prim | Minimum spanning tree |
| Dijkstra | Single-source shortest path (non-negative weights) |
| Huffman | Optimal prefix codes |

## Dynamic Programming
- Solves **overlapping subproblems** once and stores results (**memoization** or tabulation).
- Requires **optimal substructure**: an optimal solution is built from optimal subsolutions.

\`\`\`
Fib(n) = Fib(n-1) + Fib(n-2)   memoized in O(n)
\`\`\`

## Classic DP Problems
- **0/1 Knapsack**, **Longest Common Subsequence**, **Matrix Chain Multiplication**, **Floyd-Warshall**.
- 0/1 Knapsack runs in **O(nW)** pseudo-polynomial time.

## Greedy vs DP
- Greedy commits early and never reconsiders; DP explores all subproblem combinations.

### Tip
- If a greedy choice can be regretted later, the problem usually needs DP instead.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-operating-systems-m01",
      topicId: "gate-core-cs-operating-systems",
      title: "Operating Systems",
      content: `**Operating systems** manage processes, memory and I/O. GATE emphasizes scheduling, synchronization and memory management.

## Process Scheduling
| Algorithm | Property |
| --- | --- |
| FCFS | Simple, may cause convoy effect |
| SJF | Optimal average waiting time |
| Round Robin | Time-sliced, fair, preemptive |
| Priority | Risk of starvation |

- **Turnaround time = completion − arrival**; **waiting time = turnaround − burst**.

## Synchronization
- A **race condition** occurs when output depends on uncontrolled thread interleaving.
- **Mutual exclusion** in a critical section is enforced via **semaphores** or locks.
- **Deadlock** needs four conditions together: mutual exclusion, hold-and-wait, no preemption, circular wait.

## Memory Management
\`\`\`
Effective access time = (1 - p)*memory time + p*page-fault time
\`\`\`

- **Paging** removes external fragmentation; **segmentation** maps logical units.
- The **TLB** caches recent page-table entries to speed translation.

### Tip
- Breaking any one of the four deadlock conditions prevents deadlock entirely.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-dbms-sql-m01",
      topicId: "gate-core-cs-dbms-sql",
      title: "DBMS & SQL",
      content: `**Database management** covers the relational model, normalization and SQL — a dense, high-mark GATE CS topic.

## Relational Model & Keys
- A **candidate key** minimally identifies a tuple; one is chosen as the **primary key**.
- A **foreign key** references a primary key in another relation, enforcing referential integrity.

## Normalization
| Form | Removes |
| --- | --- |
| 1NF | Multi-valued / repeating groups |
| 2NF | Partial dependency on part of a key |
| 3NF | Transitive dependency on a key |
| BCNF | Every determinant is a candidate key |

- A **functional dependency** X to Y means X uniquely determines Y.

## SQL Essentials
\`\`\`
SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5;
\`\`\`

- **WHERE** filters rows before grouping; **HAVING** filters after aggregation.
- **JOIN** combines rows across tables on a matching condition.

## Transactions
- **ACID** properties: Atomicity, Consistency, Isolation, Durability.

### Tip
- HAVING works on aggregates, WHERE works on individual rows; confusing them is a classic error.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-networks-m01",
      topicId: "gate-core-cs-computer-networks",
      title: "Computer Networks",
      content: `**Computer networks** span layered protocols, addressing and routing — a broad and reliably tested GATE area.

## OSI & TCP/IP Layers
| OSI layer | Example unit / protocol |
| --- | --- |
| Application | HTTP, DNS |
| Transport | TCP, UDP (segments) |
| Network | IP (packets) |
| Data link | Ethernet (frames) |
| Physical | bits on the wire |

## Transport Layer
- **TCP** is connection-oriented and reliable; **UDP** is connectionless and faster.
- TCP uses sequence numbers, acknowledgements and a **sliding window** for flow control.

## IP Addressing
\`\`\`
Hosts per subnet = 2^(32 - prefix) - 2
\`\`\`

- A /24 network has 2^8 − 2 = **254** usable host addresses.
- **Subnetting** borrows host bits to create more networks.

## Key Protocols
- **ARP** maps IP to MAC; **DNS** resolves names to IP addresses.
- **CSMA/CD** handles collisions in classic Ethernet.

### Tip
- Subtract 2 from host counts for the network and broadcast addresses.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-theory-of-computation-m01",
      topicId: "gate-core-cs-theory-of-computation",
      title: "Theory of Computation",
      content: `**Theory of computation** classifies languages and machines — abstract but high-scoring once the hierarchy is clear.

## Chomsky Hierarchy
| Language class | Recognizer |
| --- | --- |
| Regular | Finite automaton (DFA/NFA) |
| Context-free | Pushdown automaton |
| Context-sensitive | Linear bounded automaton |
| Recursively enumerable | Turing machine |

## Regular Languages
- **DFA** and **NFA** accept exactly the same class; every NFA has an equivalent DFA.
- **Regular expressions** describe regular languages; the **pumping lemma** proves a language is not regular.

## Context-Free
- A **CFG** generates context-free languages; a **PDA** uses a stack to recognize them.
- The language a^n b^n is context-free but **not regular**.

## Decidability
\`\`\`
The Halting Problem is undecidable.
\`\`\`

- **Decidable** problems have an always-halting algorithm; some problems are only **semi-decidable**.

### Tip
- Whenever a language requires counting or matching (like a^n b^n), suspect it is non-regular.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-compiler-design-m01",
      topicId: "gate-core-cs-compiler-design",
      title: "Compiler Design",
      content: `**Compiler design** translates source code to machine code through well-defined phases — a structured GATE CS topic.

## Phases of a Compiler
| Phase | Output |
| --- | --- |
| Lexical analysis | Tokens |
| Syntax analysis | Parse tree |
| Semantic analysis | Annotated tree |
| Intermediate code | Three-address code |
| Code optimization | Improved IR |
| Code generation | Target code |

## Front-End Tools
- The **lexer** (scanner) uses regular expressions and finite automata to produce tokens.
- The **parser** uses a context-free grammar to check syntax.

## Parsing
\`\`\`
Top-down: LL(1)    Bottom-up: LR(0), SLR, LALR, CLR
\`\`\`

- **LL(1)** parsers read Left-to-right, Leftmost derivation, 1 lookahead, and need no left recursion.
- **LR parsers** are more powerful and handle a larger grammar class.

## Symbol Table & SDT
- The **symbol table** stores identifier attributes across phases.
- **Syntax-directed translation** attaches semantic rules to grammar productions.

### Tip
- Eliminate left recursion and left factor a grammar before attempting LL(1) parsing.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-organization-architecture-m01",
      topicId: "gate-core-cs-computer-organization-architecture",
      title: "Computer Organization & Architecture",
      content: `**Computer organization** covers how the CPU, memory and pipelines execute instructions — a calculation-heavy GATE topic.

## Memory Hierarchy
- Faster, smaller, costlier near the CPU: **registers < cache < main memory < disk**.
- **Cache hit ratio** drives effective access time.

\`\`\`
Avg access time = h*cache_time + (1 - h)*memory_time
\`\`\`

## Cache Mapping
| Mapping | Idea |
| --- | --- |
| Direct | Block maps to one fixed line |
| Fully associative | Block maps anywhere |
| Set associative | Block maps to one set, any line in it |

## Pipelining
- A k-stage pipeline ideally gives up to **k times** speedup.
- **Hazards** (data, control, structural) stall the pipeline and reduce throughput.

## Instruction Cycle
- Steps: **fetch, decode, execute, memory access, write-back**.
- **CPI** (cycles per instruction) and clock rate together set performance.

### Tip
- Speedup from pipelining is bounded by the number of stages and lost to hazard stalls.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-digital-logic-m01",
      topicId: "gate-core-cs-digital-logic",
      title: "Digital Logic",
      content: `**Digital logic** designs circuits from gates and Boolean algebra — a precise, formula-driven GATE foundation topic.

## Boolean Algebra
- **De Morgan's laws:** NOT(A AND B) = NOT A OR NOT B, and NOT(A OR B) = NOT A AND NOT B.
- Identities: A + 0 = A, A · 1 = A, A + A' = 1, A · A' = 0.

## Logic Gates
| Gate | Output is 1 when |
| --- | --- |
| AND | All inputs are 1 |
| OR | Any input is 1 |
| XOR | Inputs differ |
| NAND | Not all inputs are 1 |

- **NAND** and **NOR** are functionally complete (universal) gates.

## Number Systems
\`\`\`
2's complement of N = (1's complement) + 1
\`\`\`

- Two's complement represents signed integers and simplifies subtraction.

## Combinational & Sequential
- **Combinational** circuits (adders, multiplexers) depend only on current inputs.
- **Sequential** circuits (flip-flops, counters) also depend on stored state via a clock.

### Tip
- Minimize Boolean expressions with K-maps before building a circuit to cut gate count.`,
      estimatedReadTime: 2,
      orderIndex: 0
    },
    {
      id: "gate-core-cs-programming-recursion-c-m01",
      topicId: "gate-core-cs-programming-recursion-c",
      title: "Programming & Recursion in C",
      content: `**Programming in C** with pointers and recursion is heavily tested in GATE through code-tracing questions.

## Data Types & Operators
- **sizeof** returns bytes for a type; integer division truncates toward zero.
- Operator precedence: unary > multiplicative > additive > relational > logical.

## Pointers
- A **pointer** holds an address; **dereferencing** with * accesses the pointed value.
- Array name decays to a pointer to its first element; **a[i] equals *(a + i)**.

| Concept | Meaning |
| --- | --- |
| int *p | p points to an int |
| &x | address of x |
| *p | value at p |

## Recursion
- A recursive function calls itself with a smaller input and needs a **base case**.

\`\`\`
fact(n) = (n == 0) ? 1 : n * fact(n - 1)
\`\`\`

- Each call adds a **stack frame**; missing or wrong base cases cause stack overflow.

## Parameter Passing
- C passes arguments **by value**; to modify a caller's variable, pass its **address**.

### Tip
- Trace recursion by drawing the call stack; track each return value as the stack unwinds.`,
      estimatedReadTime: 2,
      orderIndex: 0
    }
  ],
  questions: [
    {
      id: "gate-engineering-mathematics-linear-algebra-q01",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A square matrix A is invertible if and only if:",
      optionA: "det(A) = 0",
      optionB: "trace(A) = 0",
      optionC: "det(A) ≠ 0",
      optionD: "A is symmetric",
      correctOption: "C",
      explanation: "A matrix is non-singular (invertible) exactly when its determinant is non-zero.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q02",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The sum of the eigenvalues of a matrix equals its:",
      optionA: "Trace",
      optionB: "Determinant",
      optionC: "Rank",
      optionD: "Norm",
      correctOption: "A",
      explanation: "The sum of eigenvalues equals the trace; their product equals the determinant.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q03",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "If the eigenvalues of A are 2 and 3, the eigenvalues of A⁻¹ are:",
      optionA: "1/2 and 1/3",
      optionB: "−2 and −3",
      optionC: "2 and 3",
      optionD: "4 and 9",
      correctOption: "A",
      explanation: "Eigenvalues of the inverse are the reciprocals of the original eigenvalues.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q04",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The eigenvalues of a triangular matrix are:",
      optionA: "Always complex",
      optionB: "Always zero",
      optionC: "Its off-diagonal entries",
      optionD: "Its diagonal entries",
      correctOption: "D",
      explanation: "For a triangular matrix, the eigenvalues are simply the diagonal elements.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q05",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A real symmetric matrix always has:",
      optionA: "Zero determinant",
      optionB: "Complex eigenvalues",
      optionC: "Real eigenvalues",
      optionD: "Equal eigenvalues",
      correctOption: "C",
      explanation: "Real symmetric matrices are guaranteed to have real eigenvalues.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q06",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "For the system Ax = b to have a unique solution, the rank must satisfy:",
      optionA: "rank(A) = rank(A|b) = n",
      optionB: "rank(A) < n",
      optionC: "rank(A) ≠ rank(A|b)",
      optionD: "rank(A) = 0",
      correctOption: "A",
      explanation: "A unique solution needs the coefficient and augmented ranks to equal the number of unknowns n.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q07",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The Cayley–Hamilton theorem states that every square matrix satisfies its own:",
      optionA: "Trace equation",
      optionB: "Determinant",
      optionC: "Characteristic equation",
      optionD: "Inverse",
      correctOption: "C",
      explanation: "Every matrix satisfies its characteristic equation, enabling quick computation of inverses and powers.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q08",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "If det(A) = 5 and det(B) = 2 for 3×3 matrices, then det(AB) is:",
      optionA: "7",
      optionB: "10",
      optionC: "25",
      optionD: "0",
      correctOption: "B",
      explanation: "det(AB) = det(A)·det(B) = 5 × 2 = 10.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-probability-q01",
      topicId: "gate-engineering-mathematics-probability",
      text: "Two events A and B are independent when:",
      optionA: "P(A ∩ B) = 0",
      optionB: "P(A) = P(B)",
      optionC: "P(A ∪ B) = 1",
      optionD: "P(A ∩ B) = P(A)·P(B)",
      correctOption: "D",
      explanation: "Independence means the joint probability equals the product of the individual probabilities.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-probability-q02",
      topicId: "gate-engineering-mathematics-probability",
      text: "The mean of a binomial distribution with parameters n and p is:",
      optionA: "np(1−p)",
      optionB: "np",
      optionC: "p/n",
      optionD: "n/p",
      correctOption: "B",
      explanation: "The binomial mean is np; its variance is np(1−p).",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-probability-q03",
      topicId: "gate-engineering-mathematics-probability",
      text: "For a Poisson distribution, the variance equals:",
      optionA: "λ²",
      optionB: "λ",
      optionC: "√λ",
      optionD: "1/λ",
      correctOption: "B",
      explanation: "A Poisson distribution has mean and variance both equal to λ.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-probability-q04",
      topicId: "gate-engineering-mathematics-probability",
      text: "The expected value when rolling a single fair six-sided die is:",
      optionA: "3",
      optionB: "3.5",
      optionC: "4",
      optionD: "6",
      correctOption: "B",
      explanation: "E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-probability-q05",
      topicId: "gate-engineering-mathematics-probability",
      text: "The variance of a random variable is given by:",
      optionA: "E(X) − E(X²)",
      optionB: "E(X²) − [E(X)]²",
      optionC: "[E(X)]² − E(X²)",
      optionD: "E(X²) + E(X)",
      correctOption: "B",
      explanation: "Var(X) = E(X²) − [E(X)]² by definition.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-probability-q06",
      topicId: "gate-engineering-mathematics-probability",
      text: "Two fair coins are tossed. The probability of getting exactly one head is:",
      optionA: "1/2",
      optionB: "1/3",
      optionC: "1/4",
      optionD: "3/4",
      correctOption: "A",
      explanation: "Outcomes HT and TH out of four equally likely give 2/4 = 1/2.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-probability-q07",
      topicId: "gate-engineering-mathematics-probability",
      text: "Conditional probability P(A|B) is defined as:",
      optionA: "P(A) · P(B)",
      optionB: "P(A ∩ B) / P(B)",
      optionC: "P(A ∪ B) / P(B)",
      optionD: "P(B) / P(A)",
      correctOption: "B",
      explanation: "P(A|B) = P(A ∩ B)/P(B), assuming P(B) > 0.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-probability-q08",
      topicId: "gate-engineering-mathematics-probability",
      text: "Adding a constant b to a random variable X changes its variance by:",
      optionA: "2b",
      optionB: "b²",
      optionC: "b",
      optionD: "No change",
      correctOption: "D",
      explanation: "Var(X + b) = Var(X); shifting by a constant does not affect variance.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q01",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "If A : B = 2 : 3 and B : C = 4 : 5, then A : C is:",
      optionA: "2 : 5",
      optionB: "8 : 15",
      optionC: "5 : 8",
      optionD: "3 : 4",
      correctOption: "B",
      explanation: "Scale to A : B : C = 8 : 12 : 15, so A : C = 8 : 15.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q02",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "₹1200 is divided between two people in the ratio 2 : 3. The larger share is:",
      optionA: "₹480",
      optionB: "₹600",
      optionC: "₹800",
      optionD: "₹720",
      correctOption: "D",
      explanation: "The larger share = (3/5) × 1200 = ₹720.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q03",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "The mean proportional between 4 and 16 is:",
      optionA: "12",
      optionB: "6",
      optionC: "10",
      optionD: "8",
      correctOption: "D",
      explanation: "Mean proportional = √(4 × 16) = √64 = 8.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q04",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "A does a job in 10 days and B in 15 days. Working together they finish in:",
      optionA: "5 days",
      optionB: "12 days",
      optionC: "8 days",
      optionD: "6 days",
      correctOption: "D",
      explanation: "Combined rate = 1/10 + 1/15 = 1/6, so they finish in 6 days.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q05",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "Pointing to a photo, a man says, 'She is my mother's only daughter.' The photo is of his:",
      optionA: "Wife",
      optionB: "Sister",
      optionC: "Mother",
      optionD: "Daughter",
      correctOption: "B",
      explanation: "His mother's only daughter is his sister.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q06",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "A man walks 5 km north, then 3 km east, then 5 km south. How far is he from the start?",
      optionA: "2 km",
      optionB: "5 km",
      optionC: "3 km",
      optionD: "8 km",
      correctOption: "C",
      explanation: "The north and south cancel, leaving 3 km east of the start.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q07",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "In what ratio must rice at ₹30/kg be mixed with rice at ₹40/kg to get a mixture at ₹36/kg?",
      optionA: "3 : 2",
      optionB: "4 : 6",
      optionC: "2 : 3",
      optionD: "6 : 4",
      correctOption: "C",
      explanation: "By alligation, ratio = (40−36) : (36−30) = 4 : 6 = 2 : 3.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q08",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "If 3 men can build a wall in 8 days, how many days will 4 men take (same rate)?",
      optionA: "6 days",
      optionB: "4 days",
      optionC: "8 days",
      optionD: "10 days",
      correctOption: "A",
      explanation: "Work is constant: 3 × 8 = 4 × d, so d = 24/4 = 6 days.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q01",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The average-case time complexity of search in a balanced binary search tree is:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "B",
      explanation: "A balanced BST keeps height at log n, giving O(log n) search.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q02",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The maximum number of nodes in a binary tree of height h is:",
      optionA: "2^h − 1",
      optionB: "2^h",
      optionC: "2^(h+1) − 1",
      optionD: "h²",
      correctOption: "C",
      explanation: "A full binary tree of height h holds 2^(h+1) − 1 nodes.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q03",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which traversal of a binary search tree visits nodes in sorted order?",
      optionA: "Inorder",
      optionB: "Level-order",
      optionC: "Postorder",
      optionD: "Preorder",
      correctOption: "A",
      explanation: "Inorder traversal (L, root, R) of a BST yields keys in ascending order.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q04",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The average-case time to search in a hash table is:",
      optionA: "O(n²)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(1)",
      correctOption: "D",
      explanation: "With good hashing and few collisions, hash-table search is O(1) on average.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q05",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "In a binary heap stored in an array, the children of node at index i are at:",
      optionA: "i−1 and i+1",
      optionB: "2i and 2i+1 (0-indexed)",
      optionC: "2i+1 and 2i+2 (0-indexed)",
      optionD: "i/2 and 2i",
      correctOption: "C",
      explanation: "For a 0-indexed array heap, node i has children at 2i+1 and 2i+2.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q06",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which notation describes the tight asymptotic bound of an algorithm?",
      optionA: "Big-Ω",
      optionB: "Big-Θ",
      optionC: "Big-O",
      optionD: "Little-o",
      correctOption: "B",
      explanation: "Big-Θ gives a tight bound, sandwiching the function between O and Ω.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q07",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Searching an unsorted array of n elements has worst-case complexity:",
      optionA: "O(n)",
      optionB: "O(log n)",
      optionC: "O(1)",
      optionD: "O(n²)",
      correctOption: "A",
      explanation: "A linear scan may inspect all n elements, giving O(n).",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q08",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "A binary search tree degrades to O(n) operations when it is:",
      optionA: "Perfectly balanced",
      optionB: "Empty",
      optionC: "Completely skewed",
      optionD: "Complete",
      correctOption: "C",
      explanation: "A fully skewed BST behaves like a linked list, making operations O(n).",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-calculus-q01",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The derivative of x raised to the power n with respect to x is:",
      optionA: "x raised to (n plus 1) over (n plus 1)",
      optionB: "n times x raised to (n minus 1)",
      optionC: "n times x raised to n",
      optionD: "x raised to (n minus 1)",
      correctOption: "B",
      explanation: "By the power rule, d/dx of x^n equals n times x^(n-1).",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-calculus-q02",
      topicId: "gate-engineering-mathematics-calculus",
      text: "At a local minimum of a twice-differentiable function, the second derivative is:",
      optionA: "Zero",
      optionB: "Negative",
      optionC: "Positive",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "A positive second derivative at a stationary point indicates a local minimum.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-calculus-q03",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The value of the integral of cos x with respect to x is:",
      optionA: "sin x plus C",
      optionB: "Negative sin x plus C",
      optionC: "tan x plus C",
      optionD: "Negative cos x plus C",
      correctOption: "A",
      explanation: "The antiderivative of cos x is sin x plus a constant.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-calculus-q04",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The limit of (sin x)/x as x approaches 0 is:",
      optionA: "1",
      optionB: "Infinity",
      optionC: "0",
      optionD: "Undefined",
      correctOption: "A",
      explanation: "This standard limit equals 1, often confirmed via L'Hopital's rule.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-calculus-q05",
      topicId: "gate-engineering-mathematics-calculus",
      text: "L'Hopital's rule applies directly to limits of the indeterminate form:",
      optionA: "0 over 0",
      optionB: "1 over 0",
      optionC: "0 times 1",
      optionD: "1 plus 1",
      correctOption: "A",
      explanation: "L'Hopital's rule resolves 0/0 and infinity/infinity indeterminate forms.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-calculus-q06",
      topicId: "gate-engineering-mathematics-calculus",
      text: "A function is continuous at a point when its left limit, right limit, and function value are:",
      optionA: "Strictly increasing",
      optionB: "All zero",
      optionC: "All equal",
      optionD: "Undefined",
      correctOption: "C",
      explanation: "Continuity requires the two one-sided limits and the function value to coincide.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-calculus-q07",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The definite integral of 2x from 0 to 3 evaluates to:",
      optionA: "9",
      optionB: "3",
      optionC: "6",
      optionD: "12",
      correctOption: "A",
      explanation: "The integral of 2x is x squared; evaluated from 0 to 3 gives 9 minus 0.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-calculus-q08",
      topicId: "gate-engineering-mathematics-calculus",
      text: "The Mean Value Theorem guarantees a point where the tangent slope equals the:",
      optionA: "Maximum value",
      optionB: "Second derivative",
      optionC: "Average rate of change over the interval",
      optionD: "Area under the curve",
      correctOption: "C",
      explanation: "The MVT gives a point whose instantaneous slope equals the interval's average rate.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q01",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The order of a differential equation is determined by its:",
      optionA: "Highest power of the function",
      optionB: "Number of terms",
      optionC: "Degree of the lowest derivative",
      optionD: "Highest derivative present",
      correctOption: "D",
      explanation: "Order is the highest derivative appearing in the equation.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q02",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "For the linear equation dy/dx plus P(x)y equals Q(x), the integrating factor is:",
      optionA: "e raised to the integral of Q(x) dx",
      optionB: "e raised to the integral of P(x) dx",
      optionC: "the integral of P(x) dx",
      optionD: "P(x) times Q(x)",
      correctOption: "B",
      explanation: "The integrating factor is e raised to the integral of P(x) with respect to x.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q03",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The auxiliary equation of y double-prime minus 5y prime plus 6y equals 0 has roots:",
      optionA: "1 and 6",
      optionB: "2 and 3",
      optionC: "Negative 2 and negative 3",
      optionD: "5 and 6",
      correctOption: "B",
      explanation: "Solving m squared minus 5m plus 6 equals 0 gives m equal to 2 and 3.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q04",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "When the auxiliary equation has a repeated real root m, the general solution form is:",
      optionA: "C1 plus C2 times x",
      optionB: "(C1 plus C2 x) times e raised to m x",
      optionC: "A sine and cosine combination",
      optionD: "Two distinct exponentials",
      correctOption: "B",
      explanation: "A repeated root m gives the solution (C1 plus C2 x) times e^(m x).",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q05",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A first-order equation M dx plus N dy equals 0 is exact when:",
      optionA: "partial M over partial y equals partial N over partial x",
      optionB: "M equals N",
      optionC: "M times N equals 0",
      optionD: "partial M over partial x equals partial N over partial y",
      correctOption: "A",
      explanation: "Exactness requires the partial of M w.r.t. y to equal the partial of N w.r.t. x.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q06",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "The complete solution of a linear differential equation is the sum of the complementary function and the:",
      optionA: "Integrating factor",
      optionB: "Particular integral",
      optionC: "Auxiliary equation",
      optionD: "Boundary value",
      correctOption: "B",
      explanation: "General solution equals complementary function plus particular integral.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q07",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A complex root pair p plus or minus qi of the auxiliary equation yields solutions involving:",
      optionA: "Polynomials only",
      optionB: "Logarithms",
      optionC: "Hyperbolic functions",
      optionD: "Sine and cosine of qx",
      correctOption: "D",
      explanation: "Complex roots give e^(p x) times a combination of cos qx and sin qx.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-differential-equations-q08",
      topicId: "gate-engineering-mathematics-differential-equations",
      text: "A second-order differential equation requires how many independent conditions to fix constants?",
      optionA: "One",
      optionB: "Two",
      optionC: "Three",
      optionD: "Zero",
      correctOption: "B",
      explanation: "An order-n equation needs n independent initial or boundary conditions.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q01",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "The number of subsets of a set with 4 elements is:",
      optionA: "8",
      optionB: "16",
      optionC: "4",
      optionD: "32",
      correctOption: "B",
      explanation: "A set of n elements has 2 raised to n subsets; 2 to the 4th is 16.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q02",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A relation that is reflexive, symmetric, and transitive is called:",
      optionA: "A partial order",
      optionB: "A function",
      optionC: "A bijection",
      optionD: "An equivalence relation",
      correctOption: "D",
      explanation: "These three properties together define an equivalence relation.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q03",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "If set A has m elements and set B has n elements, the number of functions from A to B is:",
      optionA: "n raised to m",
      optionB: "m raised to n",
      optionC: "m times n",
      optionD: "n factorial",
      correctOption: "A",
      explanation: "Each of the m elements maps to any of n images, giving n raised to m.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q04",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A relation is antisymmetric when (a, b) and (b, a) both in R imply:",
      optionA: "a equals b",
      optionB: "a is not equal to b",
      optionC: "R is empty",
      optionD: "R is reflexive",
      correctOption: "A",
      explanation: "Antisymmetry forces a to equal b whenever both ordered pairs are present.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q05",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "By inclusion-exclusion, the cardinality of A union B equals:",
      optionA: "Cardinality of A plus cardinality of B",
      optionB: "Cardinality of A times cardinality of B",
      optionC: "Cardinality of the intersection only",
      optionD: "Cardinality of A plus B minus their intersection",
      correctOption: "D",
      explanation: "The size of A union B is the sum of sizes minus the size of the intersection.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q06",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A function that is both injective and surjective is called:",
      optionA: "Constant",
      optionB: "Partial",
      optionC: "Bijective",
      optionD: "Reflexive",
      correctOption: "C",
      explanation: "A one-to-one and onto function is a bijection.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q07",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "The total number of binary relations on a set with 3 elements is:",
      optionA: "8",
      optionB: "64",
      optionC: "512",
      optionD: "27",
      correctOption: "C",
      explanation: "Relations on an n-set number 2 raised to n squared; for n equal 3 that is 2 to the 9, or 512.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-sets-relations-q08",
      topicId: "gate-engineering-mathematics-sets-relations",
      text: "A partial order relation is reflexive, transitive, and:",
      optionA: "Symmetric",
      optionB: "Irreflexive",
      optionC: "Surjective",
      optionD: "Antisymmetric",
      correctOption: "D",
      explanation: "A partial order is reflexive, antisymmetric, and transitive.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q01",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "By the handshaking lemma, the sum of all vertex degrees in a graph equals:",
      optionA: "The number of vertices",
      optionB: "Twice the number of edges",
      optionC: "The number of edges",
      optionD: "Half the number of edges",
      correctOption: "B",
      explanation: "Each edge contributes 2 to the total degree, so the sum is twice the edge count.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q02",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The number of edges in a complete graph on n vertices is:",
      optionA: "n minus 1",
      optionB: "n times (n minus 1) over 2",
      optionC: "n squared",
      optionD: "2 times n",
      correctOption: "B",
      explanation: "A complete graph K_n has n(n-1)/2 edges, one between every vertex pair.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q03",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A tree with n vertices has exactly how many edges?",
      optionA: "n",
      optionB: "n minus 1",
      optionC: "n plus 1",
      optionD: "2n minus 1",
      correctOption: "B",
      explanation: "A tree is connected and acyclic, which forces exactly n minus 1 edges.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q04",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A connected graph has an Euler circuit if and only if every vertex has:",
      optionA: "Even degree",
      optionB: "Odd degree",
      optionC: "Degree 1",
      optionD: "Degree 0",
      correctOption: "A",
      explanation: "An Euler circuit exists when the graph is connected and all degrees are even.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q05",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "For a connected planar graph, Euler's formula V minus E plus F equals:",
      optionA: "0",
      optionB: "2",
      optionC: "1",
      optionD: "The number of vertices",
      correctOption: "B",
      explanation: "Euler's formula for a connected planar graph states V minus E plus F equals 2.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q06",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The number of edges in the complete bipartite graph K(3,4) is:",
      optionA: "7",
      optionB: "9",
      optionC: "12",
      optionD: "16",
      correctOption: "C",
      explanation: "K(m,n) has m times n edges, so K(3,4) has 3 times 4, which is 12.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q07",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "A cycle that visits every vertex exactly once is called a:",
      optionA: "Euler circuit",
      optionB: "Spanning tree",
      optionC: "Bipartite path",
      optionD: "Hamiltonian cycle",
      correctOption: "D",
      explanation: "A Hamiltonian cycle passes through every vertex exactly once.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-graph-theory-q08",
      topicId: "gate-engineering-mathematics-graph-theory",
      text: "The minimum number of colors needed for a proper vertex coloring is the graph's:",
      optionA: "Degree",
      optionB: "Chromatic number",
      optionC: "Order",
      optionD: "Girth",
      correctOption: "B",
      explanation: "The chromatic number is the least number of colors for a proper coloring.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q01",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of ways to choose 2 items from 5 distinct items (order ignored) is:",
      optionA: "20",
      optionB: "10",
      optionC: "25",
      optionD: "120",
      correctOption: "B",
      explanation: "5 choose 2 equals 5 factorial over (2 factorial times 3 factorial), which is 10.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q02",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of distinct arrangements of all letters of the word LEVEL is:",
      optionA: "120",
      optionB: "60",
      optionC: "24",
      optionD: "30",
      correctOption: "D",
      explanation: "LEVEL has 5 letters with L and E repeated twice; 5 factorial over (2 times 2) is 30.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q03",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The sum of all binomial coefficients in the expansion of (x plus y) raised to n is:",
      optionA: "n squared",
      optionB: "n factorial",
      optionC: "2 raised to n",
      optionD: "2n",
      correctOption: "C",
      explanation: "Setting x equal y equal 1 shows the coefficients sum to 2 raised to n.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q04",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of circular permutations of 5 distinct objects is:",
      optionA: "120",
      optionB: "24",
      optionC: "20",
      optionD: "60",
      correctOption: "B",
      explanation: "Circular permutations of n objects number (n minus 1) factorial, so 4 factorial is 24.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q05",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The pigeonhole principle guarantees that placing 10 items into 9 boxes forces:",
      optionA: "One empty box",
      optionB: "Equal distribution",
      optionC: "No box with more than one item",
      optionD: "At least one box with two items",
      correctOption: "D",
      explanation: "With more items than boxes, at least one box must hold two or more items.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q06",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The number of ways to arrange 3 distinct books on a shelf is:",
      optionA: "3",
      optionB: "9",
      optionC: "12",
      optionD: "6",
      correctOption: "D",
      explanation: "Arrangements of 3 distinct items equal 3 factorial, which is 6.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q07",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "The identity n choose r equals n choose (n minus r) reflects:",
      optionA: "Symmetry of combinations",
      optionB: "The product rule",
      optionC: "Circular permutation",
      optionD: "The pigeonhole principle",
      correctOption: "A",
      explanation: "Choosing r to include is the same as choosing n minus r to exclude.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-combinatorics-q08",
      topicId: "gate-engineering-mathematics-combinatorics",
      text: "How many distinct 3-digit numbers can be formed using digits 1 to 5 without repetition?",
      optionA: "125",
      optionB: "15",
      optionC: "20",
      optionD: "60",
      correctOption: "D",
      explanation: "This is 5 permute 3, equal to 5 times 4 times 3, which is 60.",
      orderIndex: 7
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q01",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The Newton-Raphson method has which order of convergence near a simple root?",
      optionA: "Linear",
      optionB: "Logarithmic",
      optionC: "Cubic",
      optionD: "Quadratic",
      correctOption: "D",
      explanation: "Newton-Raphson converges quadratically near a simple root.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q02",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The bisection method is guaranteed to converge provided the function:",
      optionA: "Is differentiable everywhere",
      optionB: "Changes sign over the bracketing interval",
      optionC: "Has a zero derivative",
      optionD: "Is a polynomial",
      correctOption: "B",
      explanation: "Bisection needs a sign change across the interval to bracket a root.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q03",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "Simpson's one-third rule requires the number of subintervals to be:",
      optionA: "Odd",
      optionB: "Prime",
      optionC: "A power of two",
      optionD: "Even",
      correctOption: "D",
      explanation: "Simpson's one-third rule needs an even number of subintervals.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q04",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The trapezoidal rule has a truncation error of order:",
      optionA: "h squared",
      optionB: "h",
      optionC: "h to the fourth",
      optionD: "h cubed",
      correctOption: "A",
      explanation: "The trapezoidal rule has error of order h squared.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q05",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The Newton-Raphson iteration may fail when the derivative at the current point is:",
      optionA: "Close to zero",
      optionB: "Negative",
      optionC: "Large",
      optionD: "Constant",
      correctOption: "A",
      explanation: "A near-zero derivative makes the tangent step blow up, causing divergence.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q06",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "A unique interpolating polynomial through n plus 1 distinct points has degree at most:",
      optionA: "n plus 1",
      optionB: "2n",
      optionC: "n minus 1",
      optionD: "n",
      correctOption: "D",
      explanation: "n plus 1 points determine a unique polynomial of degree at most n.",
      orderIndex: 5
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q07",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "The secant method differs from Newton-Raphson by:",
      optionA: "Requiring the exact derivative",
      optionB: "Always halving the interval",
      optionC: "Approximating the derivative with a difference quotient",
      optionD: "Using a fixed step size",
      correctOption: "C",
      explanation: "The secant method replaces the derivative with a finite difference of two points.",
      orderIndex: 6
    },
    {
      id: "gate-engineering-mathematics-numerical-methods-q08",
      topicId: "gate-engineering-mathematics-numerical-methods",
      text: "Reducing the step size h in numerical integration generally lowers truncation error but raises:",
      optionA: "The order of the method",
      optionB: "Round-off error",
      optionC: "The number of roots",
      optionD: "The polynomial degree",
      correctOption: "B",
      explanation: "Smaller h cuts truncation error but accumulates more round-off error.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q01",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "A 20 percent increase followed by a 20 percent decrease results in a net:",
      optionA: "4 percent decrease",
      optionB: "4 percent increase",
      optionC: "No change",
      optionD: "20 percent decrease",
      correctOption: "A",
      explanation: "Net factor is 1.2 times 0.8, equal 0.96, which is a 4 percent decrease.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q02",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "The simple interest on 1000 rupees at 5 percent per year for 2 years is:",
      optionA: "100 rupees",
      optionB: "50 rupees",
      optionC: "150 rupees",
      optionD: "200 rupees",
      correctOption: "A",
      explanation: "Simple interest is principal times rate times time over 100, giving 100 rupees.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q03",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "An item bought for 80 rupees and sold for 100 rupees gives a profit percentage of:",
      optionA: "20 percent",
      optionB: "15 percent",
      optionC: "30 percent",
      optionD: "25 percent",
      correctOption: "D",
      explanation: "Profit is 20 on a cost of 80, so profit percent is 20 over 80, which is 25.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q04",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "A train travels 120 km in 2 hours. Its average speed is:",
      optionA: "40 km per hour",
      optionB: "60 km per hour",
      optionC: "50 km per hour",
      optionD: "80 km per hour",
      correctOption: "B",
      explanation: "Average speed is distance over time, 120 divided by 2, equal 60 km per hour.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q05",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "The average of 10, 20, and 30 is:",
      optionA: "15",
      optionB: "25",
      optionC: "20",
      optionD: "30",
      correctOption: "C",
      explanation: "The average is the sum 60 divided by 3, which is 20.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q06",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "Two trains move toward each other at 40 and 60 km per hour. Their relative speed is:",
      optionA: "20 km per hour",
      optionB: "50 km per hour",
      optionC: "100 km per hour",
      optionD: "10 km per hour",
      correctOption: "C",
      explanation: "For opposite directions, relative speed is the sum, 40 plus 60, which is 100.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q07",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "If the compound interest rate is 10 percent per year, 100 rupees grows in 2 years to:",
      optionA: "110 rupees",
      optionB: "120 rupees",
      optionC: "125 rupees",
      optionD: "121 rupees",
      correctOption: "D",
      explanation: "Amount is 100 times 1.1 squared, equal 121 rupees.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-quantitative-aptitude-q08",
      topicId: "gate-general-aptitude-quantitative-aptitude",
      text: "What is 15 percent of 200?",
      optionA: "30",
      optionB: "15",
      optionC: "45",
      optionD: "20",
      correctOption: "A",
      explanation: "15 percent of 200 is 0.15 times 200, which equals 30.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-verbal-ability-q01",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose the word most nearly opposite in meaning to ABUNDANT:",
      optionA: "Plentiful",
      optionB: "Numerous",
      optionC: "Ample",
      optionD: "Scarce",
      correctOption: "D",
      explanation: "Abundant means plentiful, so its antonym is scarce.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-verbal-ability-q02",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Select the correct sentence:",
      optionA: "She do not like coffee.",
      optionB: "She does not likes coffee.",
      optionC: "She does not like coffee.",
      optionD: "She not like coffee.",
      correctOption: "C",
      explanation: "The auxiliary does pairs with the base verb like in the negative present tense.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-verbal-ability-q03",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose a synonym for METICULOUS:",
      optionA: "Careful",
      optionB: "Hasty",
      optionC: "Vague",
      optionD: "Careless",
      correctOption: "A",
      explanation: "Meticulous means showing great care and attention, so careful is a synonym.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-verbal-ability-q04",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "The article that correctly fills the blank in the phrase a blank hour of waiting is:",
      optionA: "an, because hour begins with a vowel sound",
      optionB: "a, because hour begins with a consonant letter",
      optionC: "the, in all cases",
      optionD: "no article is needed",
      correctOption: "A",
      explanation: "Hour starts with a silent h and a vowel sound, so an is correct.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-verbal-ability-q05",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Complete the analogy: PEN is to WRITE as KNIFE is to:",
      optionA: "Sharp",
      optionB: "Kitchen",
      optionC: "Metal",
      optionD: "Cut",
      correctOption: "D",
      explanation: "A pen is used to write, as a knife is used to cut.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-verbal-ability-q06",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Choose the correctly spelled word:",
      optionA: "Definately",
      optionB: "Definitly",
      optionC: "Defenitely",
      optionD: "Definitely",
      correctOption: "D",
      explanation: "The correct spelling is definitely.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-verbal-ability-q07",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "Select the word that correctly fills the blank: The decision will blank the outcome of the project.",
      optionA: "effect",
      optionB: "affective",
      optionC: "affect",
      optionD: "effecting",
      correctOption: "C",
      explanation: "Affect is the verb meaning to influence; effect is usually a noun here.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-verbal-ability-q08",
      topicId: "gate-general-aptitude-verbal-ability",
      text: "In reading comprehension, an inference is best described as:",
      optionA: "A directly stated fact",
      optionB: "A quoted sentence",
      optionC: "The title of the passage",
      optionD: "A conclusion drawn from given information",
      correctOption: "D",
      explanation: "An inference is a logical conclusion derived from, but not directly stated in, the text.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-data-interpretation-q01",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "In a pie chart, a category representing 25 percent of the total spans how many degrees?",
      optionA: "25 degrees",
      optionB: "45 degrees",
      optionC: "120 degrees",
      optionD: "90 degrees",
      correctOption: "D",
      explanation: "25 percent of 360 degrees is 90 degrees.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-data-interpretation-q02",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Which chart type is best suited for showing a trend over time?",
      optionA: "Pie chart",
      optionB: "Scatter of unrelated points",
      optionC: "Venn diagram",
      optionD: "Line graph",
      correctOption: "D",
      explanation: "A line graph clearly displays how a value changes over time.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-data-interpretation-q03",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "A value rises from 200 to 250. The percentage increase is:",
      optionA: "20 percent",
      optionB: "10 percent",
      optionC: "50 percent",
      optionD: "25 percent",
      correctOption: "D",
      explanation: "Increase is 50 over 200, which equals 25 percent.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-data-interpretation-q04",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "If a 90 degree sector of a pie chart represents 45 units, the whole pie represents:",
      optionA: "90 units",
      optionB: "135 units",
      optionC: "180 units",
      optionD: "360 units",
      correctOption: "C",
      explanation: "90 degrees is a quarter of the pie, so the total is 4 times 45, which is 180.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-data-interpretation-q05",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "The average of the values 40, 60, and 80 shown in a bar chart is:",
      optionA: "50",
      optionB: "60",
      optionC: "70",
      optionD: "80",
      correctOption: "B",
      explanation: "The average is the sum 180 divided by 3, which is 60.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-data-interpretation-q06",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Before computing from a chart, the first thing to confirm is the:",
      optionA: "Color of the bars",
      optionB: "Number of categories only",
      optionC: "Font of the labels",
      optionD: "Units and scale of the data",
      correctOption: "D",
      explanation: "Misreading units or scale, such as thousands versus units, is a common error.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-data-interpretation-q07",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Two categories occupy 120 and 60 degrees of a pie chart. Their value ratio is:",
      optionA: "1 to 1",
      optionB: "3 to 1",
      optionC: "2 to 1",
      optionD: "1 to 2",
      correctOption: "C",
      explanation: "Angles are proportional to values, so 120 to 60 simplifies to 2 to 1.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-data-interpretation-q08",
      topicId: "gate-general-aptitude-data-interpretation",
      text: "Sales were 300 in year one and 240 in year two. The percentage decrease is:",
      optionA: "25 percent",
      optionB: "20 percent",
      optionC: "30 percent",
      optionD: "60 percent",
      correctOption: "B",
      explanation: "Decrease is 60 over 300, which equals 20 percent.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q01",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 2, 4, 8, 16, ?",
      optionA: "20",
      optionB: "32",
      optionC: "24",
      optionD: "30",
      correctOption: "B",
      explanation: "Each term doubles the previous one, so 16 times 2 is 32.",
      orderIndex: 0
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q02",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 1, 4, 9, 16, ?",
      optionA: "20",
      optionB: "24",
      optionC: "25",
      optionD: "36",
      correctOption: "C",
      explanation: "These are perfect squares, so the next is 5 squared, which is 25.",
      orderIndex: 1
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q03",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "In a code, CAT is written as DBU. How is DOG written?",
      optionA: "CPF",
      optionB: "EPH",
      optionC: "EPI",
      optionD: "DPH",
      correctOption: "B",
      explanation: "Each letter shifts forward by one, so DOG becomes EPH.",
      orderIndex: 2
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q04",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term in the Fibonacci-like series: 1, 1, 2, 3, 5, ?",
      optionA: "6",
      optionB: "8",
      optionC: "7",
      optionD: "10",
      correctOption: "B",
      explanation: "Each term is the sum of the previous two, so 3 plus 5 is 8.",
      orderIndex: 3
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q05",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the next term: 2, 6, 12, 20, ?",
      optionA: "24",
      optionB: "28",
      optionC: "32",
      optionD: "30",
      correctOption: "D",
      explanation: "Terms follow n times (n plus 1); for n equal 5 that is 30.",
      orderIndex: 4
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q06",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "If all roses are flowers and some flowers fade quickly, which conclusion is valid?",
      optionA: "Some roses may fade quickly",
      optionB: "No rose is a flower",
      optionC: "All roses fade quickly",
      optionD: "All flowers are roses",
      correctOption: "A",
      explanation: "Only a possibility follows; no definite conclusion about all roses can be drawn.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q07",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "By modus tollens, if P implies Q and Q is false, then:",
      optionA: "P is true",
      optionB: "Q is true",
      optionC: "P is false",
      optionD: "Nothing follows",
      correctOption: "C",
      explanation: "If P implies Q and Q is false, then P must be false.",
      orderIndex: 6
    },
    {
      id: "gate-general-aptitude-logical-reasoning-series-q08",
      topicId: "gate-general-aptitude-logical-reasoning-series",
      text: "Find the missing term: 3, 6, 11, 18, ?",
      optionA: "25",
      optionB: "24",
      optionC: "29",
      optionD: "27",
      correctOption: "D",
      explanation: "Differences grow as 3, 5, 7, 9, so 18 plus 9 is 27.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q01",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The worst-case time complexity of quick sort is:",
      optionA: "O(n log n)",
      optionB: "O(n squared)",
      optionC: "O(n)",
      optionD: "O(log n)",
      correctOption: "B",
      explanation: "A poor pivot, such as on sorted input, gives quick sort O(n squared) worst case.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q02",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Which sorting algorithm guarantees O(n log n) time in the worst case and is stable?",
      optionA: "Quick sort",
      optionB: "Selection sort",
      optionC: "Heap sort",
      optionD: "Merge sort",
      correctOption: "D",
      explanation: "Merge sort is stable and runs in O(n log n) even in the worst case.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q03",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The lower bound for any comparison-based sorting algorithm is:",
      optionA: "Omega(n)",
      optionB: "Omega(log n)",
      optionC: "Omega(n log n)",
      optionD: "Omega(n squared)",
      correctOption: "C",
      explanation: "Comparison sorts cannot beat Omega(n log n) in the worst case.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q04",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "The recurrence T(n) equals 2 T(n over 2) plus O(n) solves to:",
      optionA: "O(n)",
      optionB: "O(n squared)",
      optionC: "O(n log n)",
      optionD: "O(log n)",
      correctOption: "C",
      explanation: "By the master theorem this merge-sort recurrence is O(n log n).",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q05",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Insertion sort runs in O(n) time when the input array is:",
      optionA: "Reverse sorted",
      optionB: "Already sorted",
      optionC: "Randomly shuffled",
      optionD: "All equal except one",
      correctOption: "B",
      explanation: "On already-sorted input, insertion sort makes one comparison per element, O(n).",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q06",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Which sort runs in linear time for bounded integer keys by avoiding comparisons?",
      optionA: "Counting sort",
      optionB: "Merge sort",
      optionC: "Quick sort",
      optionD: "Heap sort",
      correctOption: "A",
      explanation: "Counting sort uses key values as indices, achieving linear time for bounded keys.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q07",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "Heap sort has an auxiliary space complexity of:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n log n)",
      correctOption: "A",
      explanation: "Heap sort sorts in place, using only O(1) extra space.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-algorithms-sorting-complexity-q08",
      topicId: "gate-core-cs-algorithms-sorting-complexity",
      text: "A sorting algorithm is stable if it:",
      optionA: "Always runs in O(n log n)",
      optionB: "Preserves the relative order of equal keys",
      optionC: "Uses no extra memory",
      optionD: "Never recurses",
      correctOption: "B",
      explanation: "Stability means equal keys keep their original relative order after sorting.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q01",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Dijkstra's shortest-path algorithm is an example of which paradigm?",
      optionA: "Greedy",
      optionB: "Divide and conquer",
      optionC: "Backtracking",
      optionD: "Brute force",
      correctOption: "A",
      explanation: "Dijkstra greedily selects the nearest unvisited vertex at each step.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q02",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Dynamic programming is preferred over plain recursion mainly because it:",
      optionA: "Avoids all recursion",
      optionB: "Uses less code",
      optionC: "Requires no base case",
      optionD: "Stores results of overlapping subproblems",
      correctOption: "D",
      explanation: "DP memoizes overlapping subproblems so each is solved only once.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q03",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The 0/1 knapsack problem with n items and capacity W is solved by DP in time:",
      optionA: "O(n)",
      optionB: "O(2 raised to n)",
      optionC: "O(n log W)",
      optionD: "O(n W)",
      correctOption: "D",
      explanation: "Standard DP fills an n by W table, giving O(n W) pseudo-polynomial time.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q04",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Huffman coding builds optimal prefix codes using which strategy?",
      optionA: "Dynamic programming",
      optionB: "Greedy",
      optionC: "Linear programming",
      optionD: "Exhaustive search",
      correctOption: "B",
      explanation: "Huffman greedily merges the two lowest-frequency nodes at each step.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q05",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Both greedy and dynamic programming require the problem to have:",
      optionA: "A cyclic structure",
      optionB: "Negative weights",
      optionC: "Optimal substructure",
      optionD: "A unique solution",
      correctOption: "C",
      explanation: "Optimal substructure, where optimal solutions build from optimal subsolutions, is shared.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q06",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The Floyd-Warshall algorithm computes all-pairs shortest paths using:",
      optionA: "A greedy heap",
      optionB: "Dynamic programming",
      optionC: "Depth-first search",
      optionD: "A union-find structure",
      correctOption: "B",
      explanation: "Floyd-Warshall is a DP that relaxes paths through each intermediate vertex.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q07",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "Which problem is typically solved with dynamic programming rather than a greedy method?",
      optionA: "Minimum spanning tree",
      optionB: "Longest common subsequence",
      optionC: "Single-source shortest path with non-negative weights",
      optionD: "Optimal prefix coding",
      correctOption: "B",
      explanation: "Longest common subsequence needs DP over overlapping subproblems.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-greedy-dynamic-programming-q08",
      topicId: "gate-core-cs-greedy-dynamic-programming",
      text: "The key difference of a greedy method from dynamic programming is that greedy:",
      optionA: "Commits to local choices without reconsidering",
      optionB: "Always uses a table",
      optionC: "Explores all subproblem combinations",
      optionD: "Cannot find optimal solutions ever",
      correctOption: "A",
      explanation: "Greedy makes an irrevocable locally optimal choice at each step.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-operating-systems-q01",
      topicId: "gate-core-cs-operating-systems",
      text: "Which CPU scheduling algorithm gives the minimum average waiting time?",
      optionA: "First Come First Served",
      optionB: "Round Robin",
      optionC: "Priority with aging",
      optionD: "Shortest Job First",
      correctOption: "D",
      explanation: "Shortest Job First is provably optimal for minimizing average waiting time.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-operating-systems-q02",
      topicId: "gate-core-cs-operating-systems",
      text: "Which is NOT one of the four necessary conditions for deadlock?",
      optionA: "Mutual exclusion",
      optionB: "Preemption allowed",
      optionC: "Hold and wait",
      optionD: "Circular wait",
      correctOption: "B",
      explanation: "Deadlock requires no preemption; allowing preemption breaks a condition.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-operating-systems-q03",
      topicId: "gate-core-cs-operating-systems",
      text: "A race condition arises when:",
      optionA: "The output depends on uncontrolled thread interleaving",
      optionB: "A process runs alone",
      optionC: "Memory is fully paged",
      optionD: "The CPU is idle",
      correctOption: "A",
      explanation: "A race condition occurs when the result depends on the timing of concurrent accesses.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-operating-systems-q04",
      topicId: "gate-core-cs-operating-systems",
      text: "Paging primarily eliminates which problem?",
      optionA: "Internal fragmentation",
      optionB: "External fragmentation",
      optionC: "Deadlock",
      optionD: "Race conditions",
      correctOption: "B",
      explanation: "Fixed-size pages remove external fragmentation, though some internal may remain.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-operating-systems-q05",
      topicId: "gate-core-cs-operating-systems",
      text: "The Round Robin scheduling algorithm is best described as:",
      optionA: "Non-preemptive and priority based",
      optionB: "Based on remaining burst time",
      optionC: "Optimal for average waiting time",
      optionD: "Preemptive with fixed time slices",
      correctOption: "D",
      explanation: "Round Robin preempts each process after a fixed time quantum, ensuring fairness.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-operating-systems-q06",
      topicId: "gate-core-cs-operating-systems",
      text: "The turnaround time of a process is computed as:",
      optionA: "Burst time minus waiting time",
      optionB: "Arrival time minus burst time",
      optionC: "Completion time minus arrival time",
      optionD: "Waiting time plus arrival time",
      correctOption: "C",
      explanation: "Turnaround time equals completion time minus arrival time.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-operating-systems-q07",
      topicId: "gate-core-cs-operating-systems",
      text: "The TLB is used to speed up:",
      optionA: "Disk scheduling",
      optionB: "Process creation",
      optionC: "Virtual-to-physical address translation",
      optionD: "Interrupt handling",
      correctOption: "C",
      explanation: "The Translation Lookaside Buffer caches recent page-table entries for fast translation.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-operating-systems-q08",
      topicId: "gate-core-cs-operating-systems",
      text: "A semaphore is primarily used to enforce:",
      optionA: "Mutual exclusion and synchronization",
      optionB: "Memory allocation",
      optionC: "Page replacement",
      optionD: "Disk caching",
      correctOption: "A",
      explanation: "Semaphores coordinate access to critical sections, enforcing mutual exclusion.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-dbms-sql-q01",
      topicId: "gate-core-cs-dbms-sql",
      text: "Which normal form removes transitive dependency on the primary key?",
      optionA: "First normal form",
      optionB: "Second normal form",
      optionC: "Zero normal form",
      optionD: "Third normal form",
      correctOption: "D",
      explanation: "Third normal form eliminates transitive dependencies on the key.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-dbms-sql-q02",
      topicId: "gate-core-cs-dbms-sql",
      text: "In SQL, which clause filters rows after aggregation by GROUP BY?",
      optionA: "WHERE",
      optionB: "ORDER BY",
      optionC: "HAVING",
      optionD: "SELECT",
      correctOption: "C",
      explanation: "HAVING filters grouped results, whereas WHERE filters rows before grouping.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-dbms-sql-q03",
      topicId: "gate-core-cs-dbms-sql",
      text: "A foreign key in a relation is used to:",
      optionA: "Uniquely identify each row by itself",
      optionB: "Store aggregate values",
      optionC: "Reference a primary key in another relation",
      optionD: "Index the table physically",
      correctOption: "C",
      explanation: "A foreign key references another relation's primary key to enforce integrity.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-dbms-sql-q04",
      topicId: "gate-core-cs-dbms-sql",
      text: "The ACID property ensuring a transaction fully completes or has no effect is:",
      optionA: "Atomicity",
      optionB: "Isolation",
      optionC: "Durability",
      optionD: "Consistency",
      correctOption: "A",
      explanation: "Atomicity guarantees all-or-nothing execution of a transaction.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-dbms-sql-q05",
      topicId: "gate-core-cs-dbms-sql",
      text: "A relation is in BCNF when, for every functional dependency, the determinant is:",
      optionA: "A candidate key",
      optionB: "A foreign key",
      optionC: "A non-prime attribute",
      optionD: "An aggregate",
      correctOption: "A",
      explanation: "In BCNF every determinant must be a candidate key.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-dbms-sql-q06",
      topicId: "gate-core-cs-dbms-sql",
      text: "Which SQL operation combines rows from two tables on a matching condition?",
      optionA: "JOIN",
      optionB: "GROUP BY",
      optionC: "DISTINCT",
      optionD: "UNION",
      correctOption: "A",
      explanation: "A JOIN merges rows from tables that satisfy the join condition.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-dbms-sql-q07",
      topicId: "gate-core-cs-dbms-sql",
      text: "A functional dependency X to Y means:",
      optionA: "X uniquely determines Y",
      optionB: "Y uniquely determines X",
      optionC: "X and Y are independent",
      optionD: "X equals Y",
      correctOption: "A",
      explanation: "X to Y means each value of X determines exactly one value of Y.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-dbms-sql-q08",
      topicId: "gate-core-cs-dbms-sql",
      text: "A minimal attribute set that uniquely identifies a tuple is a:",
      optionA: "Foreign key",
      optionB: "Secondary index",
      optionC: "Composite value",
      optionD: "Candidate key",
      correctOption: "D",
      explanation: "A candidate key minimally and uniquely identifies each tuple.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-networks-q01",
      topicId: "gate-core-cs-computer-networks",
      text: "Which transport-layer protocol is connection-oriented and reliable?",
      optionA: "TCP",
      optionB: "IP",
      optionC: "UDP",
      optionD: "ARP",
      correctOption: "A",
      explanation: "TCP provides connection-oriented, reliable, ordered delivery.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-networks-q02",
      topicId: "gate-core-cs-computer-networks",
      text: "The number of usable host addresses in a /24 IPv4 network is:",
      optionA: "254",
      optionB: "256",
      optionC: "255",
      optionD: "128",
      correctOption: "A",
      explanation: "A /24 has 2 to the 8 addresses minus 2 reserved, giving 254 usable hosts.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-computer-networks-q03",
      topicId: "gate-core-cs-computer-networks",
      text: "Which protocol maps an IP address to a MAC address?",
      optionA: "ARP",
      optionB: "DNS",
      optionC: "HTTP",
      optionD: "ICMP",
      correctOption: "A",
      explanation: "ARP resolves an IP address to its corresponding MAC address.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-computer-networks-q04",
      topicId: "gate-core-cs-computer-networks",
      text: "At which OSI layer does the IP protocol operate?",
      optionA: "Transport",
      optionB: "Network",
      optionC: "Data link",
      optionD: "Application",
      correctOption: "B",
      explanation: "IP operates at the network layer, handling routing of packets.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-computer-networks-q05",
      topicId: "gate-core-cs-computer-networks",
      text: "The data unit at the data link layer is called a:",
      optionA: "Segment",
      optionB: "Packet",
      optionC: "Frame",
      optionD: "Bit",
      correctOption: "C",
      explanation: "The data link layer encapsulates data into frames.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-networks-q06",
      topicId: "gate-core-cs-computer-networks",
      text: "Which protocol resolves human-readable domain names to IP addresses?",
      optionA: "TCP",
      optionB: "DNS",
      optionC: "ARP",
      optionD: "FTP",
      correctOption: "B",
      explanation: "DNS translates domain names into IP addresses.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-computer-networks-q07",
      topicId: "gate-core-cs-computer-networks",
      text: "TCP achieves flow control primarily through:",
      optionA: "Subnet masks",
      optionB: "Broadcast storms",
      optionC: "A sliding window",
      optionD: "MAC filtering",
      correctOption: "C",
      explanation: "TCP uses a sliding window to control how much unacknowledged data is in flight.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-computer-networks-q08",
      topicId: "gate-core-cs-computer-networks",
      text: "Compared to TCP, UDP is:",
      optionA: "Connection-oriented and reliable",
      optionB: "A network-layer protocol",
      optionC: "Always encrypted",
      optionD: "Connectionless and faster",
      correctOption: "D",
      explanation: "UDP is connectionless with low overhead, trading reliability for speed.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-theory-of-computation-q01",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Which machine recognizes exactly the class of regular languages?",
      optionA: "Finite automaton",
      optionB: "Turing machine",
      optionC: "Pushdown automaton",
      optionD: "Linear bounded automaton",
      correctOption: "A",
      explanation: "Finite automata, both DFA and NFA, recognize exactly the regular languages.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-theory-of-computation-q02",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The language a raised to n followed by b raised to n is:",
      optionA: "Regular",
      optionB: "Finite",
      optionC: "Context-free but not regular",
      optionD: "Not a language",
      correctOption: "C",
      explanation: "Matching counts of a and b is context-free, but the pumping lemma shows it is not regular.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-theory-of-computation-q03",
      topicId: "gate-core-cs-theory-of-computation",
      text: "A pushdown automaton differs from a finite automaton by having a:",
      optionA: "Queue",
      optionB: "Two-way tape",
      optionC: "Stack",
      optionD: "Random-access memory",
      correctOption: "C",
      explanation: "A PDA augments a finite automaton with a stack to recognize context-free languages.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-theory-of-computation-q04",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The pumping lemma is most commonly used to prove that a language is:",
      optionA: "Not regular",
      optionB: "Decidable",
      optionC: "Context-free",
      optionD: "Finite",
      correctOption: "A",
      explanation: "The pumping lemma provides a contradiction tool to show non-regularity.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-theory-of-computation-q05",
      topicId: "gate-core-cs-theory-of-computation",
      text: "A deterministic finite automaton and a nondeterministic finite automaton:",
      optionA: "Recognize different language classes",
      optionB: "Both require a stack",
      optionC: "Recognize the same class of languages",
      optionD: "Cannot be converted to each other",
      correctOption: "C",
      explanation: "Every NFA has an equivalent DFA, so both accept exactly the regular languages.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-theory-of-computation-q06",
      topicId: "gate-core-cs-theory-of-computation",
      text: "The Halting Problem is an example of a problem that is:",
      optionA: "Decidable",
      optionB: "Regular",
      optionC: "Undecidable",
      optionD: "Context-free",
      correctOption: "C",
      explanation: "The Halting Problem is undecidable; no algorithm decides it for all inputs.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-theory-of-computation-q07",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Recursively enumerable languages are recognized by a:",
      optionA: "Turing machine",
      optionB: "Pushdown automaton",
      optionC: "Finite automaton",
      optionD: "Regular expression",
      correctOption: "A",
      explanation: "Turing machines recognize the recursively enumerable languages.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-theory-of-computation-q08",
      topicId: "gate-core-cs-theory-of-computation",
      text: "Context-free languages are generated by a:",
      optionA: "Context-free grammar",
      optionB: "Regular expression",
      optionC: "Finite automaton",
      optionD: "Truth table",
      correctOption: "A",
      explanation: "A context-free grammar generates exactly the context-free languages.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-compiler-design-q01",
      topicId: "gate-core-cs-compiler-design",
      text: "Which compiler phase produces tokens from the source program?",
      optionA: "Syntax analysis",
      optionB: "Code generation",
      optionC: "Lexical analysis",
      optionD: "Semantic analysis",
      correctOption: "C",
      explanation: "Lexical analysis scans characters and emits tokens.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-compiler-design-q02",
      topicId: "gate-core-cs-compiler-design",
      text: "An LL(1) parser performs which type of parsing?",
      optionA: "Bottom-up",
      optionB: "Right-to-left",
      optionC: "Random",
      optionD: "Top-down with one lookahead",
      correctOption: "D",
      explanation: "LL(1) is top-down, reading left-to-right with one symbol of lookahead.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-compiler-design-q03",
      topicId: "gate-core-cs-compiler-design",
      text: "The output of the syntax analysis phase is typically a:",
      optionA: "Parse tree",
      optionB: "Symbol table only",
      optionC: "Token stream",
      optionD: "Machine code",
      correctOption: "A",
      explanation: "Syntax analysis builds a parse tree reflecting the grammar structure.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-compiler-design-q04",
      topicId: "gate-core-cs-compiler-design",
      text: "Before LL(1) parsing, a grammar must typically be free of:",
      optionA: "Terminals",
      optionB: "Start symbols",
      optionC: "Left recursion",
      optionD: "Productions",
      correctOption: "C",
      explanation: "LL(1) parsing requires removing left recursion, often with left factoring too.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-compiler-design-q05",
      topicId: "gate-core-cs-compiler-design",
      text: "Which structure stores identifier attributes across compiler phases?",
      optionA: "Parse tree",
      optionB: "Register file",
      optionC: "Symbol table",
      optionD: "Activation record",
      correctOption: "C",
      explanation: "The symbol table records identifier names, types and scope across phases.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-compiler-design-q06",
      topicId: "gate-core-cs-compiler-design",
      text: "Three-address code is an example of:",
      optionA: "Intermediate code",
      optionB: "Source code",
      optionC: "Target machine code",
      optionD: "A token",
      correctOption: "A",
      explanation: "Three-address code is a common intermediate representation.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-compiler-design-q07",
      topicId: "gate-core-cs-compiler-design",
      text: "Compared with LL parsers, LR parsers generally handle:",
      optionA: "A smaller class of grammars",
      optionB: "Only regular grammars",
      optionC: "No grammars at all",
      optionD: "A larger class of grammars",
      correctOption: "D",
      explanation: "Bottom-up LR parsers accept a broader class of grammars than LL parsers.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-compiler-design-q08",
      topicId: "gate-core-cs-compiler-design",
      text: "Syntax-directed translation attaches semantic rules to:",
      optionA: "Tokens",
      optionB: "Grammar productions",
      optionC: "Registers",
      optionD: "Machine instructions",
      correctOption: "B",
      explanation: "Syntax-directed translation associates semantic actions with grammar productions.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q01",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which memory is the fastest in the typical hierarchy?",
      optionA: "Registers",
      optionB: "Main memory",
      optionC: "Hard disk",
      optionD: "Cache",
      correctOption: "A",
      explanation: "Registers sit closest to the CPU and are the fastest storage.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q02",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "An ideal k-stage instruction pipeline offers a maximum speedup of about:",
      optionA: "2 times",
      optionB: "log k times",
      optionC: "k squared times",
      optionD: "k times",
      correctOption: "D",
      explanation: "An ideal k-stage pipeline can approach a k-fold speedup.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q03",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "In direct-mapped cache, a memory block maps to:",
      optionA: "Any cache line",
      optionB: "Exactly one fixed cache line",
      optionC: "Any line within one set",
      optionD: "Two specific lines",
      correctOption: "B",
      explanation: "Direct mapping sends each block to one predetermined cache line.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q04",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which is a type of pipeline hazard?",
      optionA: "Cache hazard",
      optionB: "Data hazard",
      optionC: "Register hazard",
      optionD: "Address hazard",
      correctOption: "B",
      explanation: "Data, control, and structural hazards are the three pipeline hazard types.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q05",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "If the cache hit ratio is 0.9 with cache time 10 ns and memory time 100 ns, average access time is:",
      optionA: "19 ns",
      optionB: "10 ns",
      optionC: "100 ns",
      optionD: "90 ns",
      correctOption: "A",
      explanation: "Average is 0.9 times 10 plus 0.1 times 100, equal 9 plus 10, which is 19 ns.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q06",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "The metric CPI stands for:",
      optionA: "Cache per instruction",
      optionB: "Cycles per instruction",
      optionC: "Calls per interrupt",
      optionD: "Clocks per input",
      correctOption: "B",
      explanation: "CPI is cycles per instruction, a key performance measure.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q07",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Which is the correct order of basic instruction-cycle steps?",
      optionA: "Execute, fetch, decode, write-back",
      optionB: "Write-back, execute, decode, fetch",
      optionC: "Decode, fetch, write-back, execute",
      optionD: "Fetch, decode, execute, write-back",
      correctOption: "D",
      explanation: "The cycle proceeds fetch, decode, execute, then write-back.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-computer-organization-architecture-q08",
      topicId: "gate-core-cs-computer-organization-architecture",
      text: "Fully associative cache mapping allows a block to be placed in:",
      optionA: "Exactly one line",
      optionB: "Only the first line",
      optionC: "Only even-numbered lines",
      optionD: "Any cache line",
      correctOption: "D",
      explanation: "Fully associative mapping permits a block in any cache line.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-digital-logic-q01",
      topicId: "gate-core-cs-digital-logic",
      text: "Which gates are functionally complete (universal)?",
      optionA: "AND and OR",
      optionB: "XOR only",
      optionC: "NAND and NOR",
      optionD: "Buffer only",
      correctOption: "C",
      explanation: "NAND and NOR are universal; any circuit can be built from either alone.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-digital-logic-q02",
      topicId: "gate-core-cs-digital-logic",
      text: "By De Morgan's law, NOT (A AND B) equals:",
      optionA: "NOT A AND NOT B",
      optionB: "A OR B",
      optionC: "NOT A OR NOT B",
      optionD: "A AND B",
      correctOption: "C",
      explanation: "De Morgan's law gives NOT (A AND B) equals NOT A OR NOT B.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-digital-logic-q03",
      topicId: "gate-core-cs-digital-logic",
      text: "The two's complement of a binary number is obtained by:",
      optionA: "Adding 1 to the number",
      optionB: "Reversing the bit order",
      optionC: "Taking the one's complement and adding 1",
      optionD: "Subtracting 1 from the number",
      correctOption: "C",
      explanation: "Two's complement is the one's complement plus one.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-digital-logic-q04",
      topicId: "gate-core-cs-digital-logic",
      text: "An XOR gate outputs 1 when its inputs are:",
      optionA: "Both 1",
      optionB: "Both 0",
      optionC: "Equal",
      optionD: "Different",
      correctOption: "D",
      explanation: "XOR outputs 1 exactly when the two inputs differ.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-digital-logic-q05",
      topicId: "gate-core-cs-digital-logic",
      text: "Which circuit type depends on stored state and a clock?",
      optionA: "Combinational",
      optionB: "A multiplexer",
      optionC: "A single AND gate",
      optionD: "Sequential",
      correctOption: "D",
      explanation: "Sequential circuits depend on current inputs and stored state via a clock.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-digital-logic-q06",
      topicId: "gate-core-cs-digital-logic",
      text: "The Boolean expression A plus A prime simplifies to:",
      optionA: "1",
      optionB: "0",
      optionC: "A",
      optionD: "A prime",
      correctOption: "A",
      explanation: "A variable OR its complement always equals 1.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-digital-logic-q07",
      topicId: "gate-core-cs-digital-logic",
      text: "A device that selects one of several inputs based on select lines is a:",
      optionA: "Decoder",
      optionB: "Multiplexer",
      optionC: "Flip-flop",
      optionD: "Counter",
      correctOption: "B",
      explanation: "A multiplexer routes one selected input to the output based on select lines.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-digital-logic-q08",
      topicId: "gate-core-cs-digital-logic",
      text: "Karnaugh maps are used primarily to:",
      optionA: "Increase the number of gates",
      optionB: "Store sequential state",
      optionC: "Generate random logic",
      optionD: "Minimize Boolean expressions",
      correctOption: "D",
      explanation: "K-maps simplify Boolean functions to reduce gate count.",
      orderIndex: 7
    },
    {
      id: "gate-core-cs-programming-recursion-c-q01",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "In C, the expression a[i] is equivalent to:",
      optionA: "a plus i",
      optionB: "i plus a[0]",
      optionC: "value at the address a plus i",
      optionD: "the address of a",
      correctOption: "C",
      explanation: "a[i] is defined as the value at the address a plus i, that is the dereference of (a plus i).",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-programming-recursion-c-q02",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "Every correct recursive function must include a:",
      optionA: "Global variable",
      optionB: "Loop",
      optionC: "Base case",
      optionD: "Pointer argument",
      correctOption: "C",
      explanation: "A base case stops recursion; without it the calls never terminate.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-programming-recursion-c-q03",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "By default, C passes function arguments:",
      optionA: "By reference",
      optionB: "By name",
      optionC: "By value",
      optionD: "By pointer automatically",
      correctOption: "C",
      explanation: "C uses call by value; to modify a caller's variable you pass its address.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-programming-recursion-c-q04",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "The recursive function fact with fact(0) equal 1 returns, for fact(4):",
      optionA: "24",
      optionB: "16",
      optionC: "12",
      optionD: "10",
      correctOption: "A",
      explanation: "fact(4) is 4 times 3 times 2 times 1, which equals 24.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-programming-recursion-c-q05",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "The C operator sizeof returns:",
      optionA: "The value stored in a variable",
      optionB: "The number of bytes a type or variable occupies",
      optionC: "The address of a variable",
      optionD: "The number of array elements always",
      correctOption: "B",
      explanation: "sizeof yields the size in bytes of its operand type or variable.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-programming-recursion-c-q06",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "A missing or incorrect base case in recursion most commonly causes:",
      optionA: "A compile error",
      optionB: "A syntax warning",
      optionC: "Stack overflow",
      optionD: "Faster execution",
      correctOption: "C",
      explanation: "Without a reachable base case, recursion grows the stack until it overflows.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-programming-recursion-c-q07",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "In C, the unary operator that gives the address of a variable x is:",
      optionA: "Star x",
      optionB: "Hash x",
      optionC: "Ampersand x",
      optionD: "Percent x",
      correctOption: "C",
      explanation: "The ampersand operator yields the address of its operand.",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-programming-recursion-c-q08",
      topicId: "gate-core-cs-programming-recursion-c",
      text: "Integer division of 7 by 2 in C evaluates to:",
      optionA: "3",
      optionB: "4",
      optionC: "3.5",
      optionD: "2",
      correctOption: "A",
      explanation: "Integer division truncates toward zero, so 7 divided by 2 is 3.",
      orderIndex: 7
    }
  ]
});
