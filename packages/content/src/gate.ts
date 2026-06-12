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
    }
  ],
  questions: [
    {
      id: "gate-engineering-mathematics-linear-algebra-q01",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A square matrix A is invertible if and only if:",
      optionA: "det(A) = 0",
      optionB: "det(A) ≠ 0",
      optionC: "trace(A) = 0",
      optionD: "A is symmetric",
      correctOption: "B",
      explanation: "A matrix is non-singular (invertible) exactly when its determinant is non-zero.",
      orderIndex: 0
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q02",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The sum of the eigenvalues of a matrix equals its:",
      optionA: "Determinant",
      optionB: "Trace",
      optionC: "Rank",
      optionD: "Norm",
      correctOption: "B",
      explanation: "The sum of eigenvalues equals the trace; their product equals the determinant.",
      orderIndex: 1
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q03",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "If the eigenvalues of A are 2 and 3, the eigenvalues of A⁻¹ are:",
      optionA: "2 and 3",
      optionB: "−2 and −3",
      optionC: "1/2 and 1/3",
      optionD: "4 and 9",
      correctOption: "C",
      explanation: "Eigenvalues of the inverse are the reciprocals of the original eigenvalues.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q04",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "The eigenvalues of a triangular matrix are:",
      optionA: "Its diagonal entries",
      optionB: "Always zero",
      optionC: "Its off-diagonal entries",
      optionD: "Always complex",
      correctOption: "A",
      explanation: "For a triangular matrix, the eigenvalues are simply the diagonal elements.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-linear-algebra-q05",
      topicId: "gate-engineering-mathematics-linear-algebra",
      text: "A real symmetric matrix always has:",
      optionA: "Real eigenvalues",
      optionB: "Complex eigenvalues",
      optionC: "Zero determinant",
      optionD: "Equal eigenvalues",
      correctOption: "A",
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
      optionB: "25",
      optionC: "10",
      optionD: "0",
      correctOption: "C",
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
      optionB: "1/λ",
      optionC: "√λ",
      optionD: "λ",
      correctOption: "D",
      explanation: "A Poisson distribution has mean and variance both equal to λ.",
      orderIndex: 2
    },
    {
      id: "gate-engineering-mathematics-probability-q04",
      topicId: "gate-engineering-mathematics-probability",
      text: "The expected value when rolling a single fair six-sided die is:",
      optionA: "3",
      optionB: "4",
      optionC: "3.5",
      optionD: "6",
      correctOption: "C",
      explanation: "E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.",
      orderIndex: 3
    },
    {
      id: "gate-engineering-mathematics-probability-q05",
      topicId: "gate-engineering-mathematics-probability",
      text: "The variance of a random variable is given by:",
      optionA: "E(X) − E(X²)",
      optionB: "E(X²) + E(X)",
      optionC: "[E(X)]² − E(X²)",
      optionD: "E(X²) − [E(X)]²",
      correctOption: "D",
      explanation: "Var(X) = E(X²) − [E(X)]² by definition.",
      orderIndex: 4
    },
    {
      id: "gate-engineering-mathematics-probability-q06",
      topicId: "gate-engineering-mathematics-probability",
      text: "Two fair coins are tossed. The probability of getting exactly one head is:",
      optionA: "1/4",
      optionB: "1/3",
      optionC: "1/2",
      optionD: "3/4",
      correctOption: "C",
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
      optionA: "No change",
      optionB: "b²",
      optionC: "b",
      optionD: "2b",
      correctOption: "A",
      explanation: "Var(X + b) = Var(X); shifting by a constant does not affect variance.",
      orderIndex: 7
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q01",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "If A : B = 2 : 3 and B : C = 4 : 5, then A : C is:",
      optionA: "2 : 5",
      optionB: "5 : 8",
      optionC: "8 : 15",
      optionD: "3 : 4",
      correctOption: "C",
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
      optionA: "8",
      optionB: "6",
      optionC: "10",
      optionD: "12",
      correctOption: "A",
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
      optionB: "3 km",
      optionC: "5 km",
      optionD: "8 km",
      correctOption: "B",
      explanation: "The north and south cancel, leaving 3 km east of the start.",
      orderIndex: 5
    },
    {
      id: "gate-general-aptitude-ratio-logical-puzzles-q07",
      topicId: "gate-general-aptitude-ratio-logical-puzzles",
      text: "In what ratio must rice at ₹30/kg be mixed with rice at ₹40/kg to get a mixture at ₹36/kg?",
      optionA: "3 : 2",
      optionB: "2 : 3",
      optionC: "4 : 6",
      optionD: "6 : 4",
      correctOption: "B",
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
      optionB: "O(n)",
      optionC: "O(log n)",
      optionD: "O(n log n)",
      correctOption: "C",
      explanation: "A balanced BST keeps height at log n, giving O(log n) search.",
      orderIndex: 0
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q02",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The maximum number of nodes in a binary tree of height h is:",
      optionA: "2^h − 1",
      optionB: "2^(h+1) − 1",
      optionC: "2^h",
      optionD: "h²",
      correctOption: "B",
      explanation: "A full binary tree of height h holds 2^(h+1) − 1 nodes.",
      orderIndex: 1
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q03",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which traversal of a binary search tree visits nodes in sorted order?",
      optionA: "Preorder",
      optionB: "Level-order",
      optionC: "Postorder",
      optionD: "Inorder",
      correctOption: "D",
      explanation: "Inorder traversal (L, root, R) of a BST yields keys in ascending order.",
      orderIndex: 2
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q04",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "The average-case time to search in a hash table is:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n²)",
      correctOption: "A",
      explanation: "With good hashing and few collisions, hash-table search is O(1) on average.",
      orderIndex: 3
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q05",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "In a binary heap stored in an array, the children of node at index i are at:",
      optionA: "i−1 and i+1",
      optionB: "2i and 2i+1 (0-indexed)",
      optionC: "i/2 and 2i",
      optionD: "2i+1 and 2i+2 (0-indexed)",
      correctOption: "D",
      explanation: "For a 0-indexed array heap, node i has children at 2i+1 and 2i+2.",
      orderIndex: 4
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q06",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Which notation describes the tight asymptotic bound of an algorithm?",
      optionA: "Big-Θ",
      optionB: "Big-Ω",
      optionC: "Big-O",
      optionD: "Little-o",
      correctOption: "A",
      explanation: "Big-Θ gives a tight bound, sandwiching the function between O and Ω.",
      orderIndex: 5
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q07",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "Searching an unsorted array of n elements has worst-case complexity:",
      optionA: "O(1)",
      optionB: "O(log n)",
      optionC: "O(n)",
      optionD: "O(n²)",
      correctOption: "C",
      explanation: "A linear scan may inspect all n elements, giving O(n).",
      orderIndex: 6
    },
    {
      id: "gate-core-cs-data-structures-complexity-trees-q08",
      topicId: "gate-core-cs-data-structures-complexity-trees",
      text: "A binary search tree degrades to O(n) operations when it is:",
      optionA: "Perfectly balanced",
      optionB: "Empty",
      optionC: "Complete",
      optionD: "Completely skewed",
      correctOption: "D",
      explanation: "A fully skewed BST behaves like a linked list, making operations O(n).",
      orderIndex: 7
    }
  ]
});
