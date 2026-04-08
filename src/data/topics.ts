export interface Topic {
  name: string;
  subtopics: string[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  topics: Topic[];
}

export const subjects: Subject[] = [
  {
    id: 'aptitude',
    name: 'Quantitative Aptitude',
    icon: '🔢',
    category: 'Competitive Exams',
    description: 'Core aptitude topics tested in SSC, Bank, TNPSC, and all competitive exams.',
    topics: [
      {
        name: 'Number System',
        subtopics: [
          'Natural, Whole, Integer, Rational, Irrational numbers',
          'HCF and LCM — methods and applications',
          'Divisibility rules (2, 3, 4, 5, 6, 7, 8, 9, 11)',
          'Unit digit and last two digits',
          'Remainders — Wilson\'s theorem, Fermat\'s theorem',
          'Number of zeros in n!',
          'Finding factors and co-primes',
        ],
      },
      {
        name: 'Percentage',
        subtopics: [
          'Basic percentage calculations',
          'Percentage increase / decrease',
          'Successive percentage change',
          'Population growth formula',
          'Profit/Loss expressed as percentage',
          'Percentage comparison problems',
        ],
      },
      {
        name: 'Profit & Loss',
        subtopics: [
          'Cost Price, Selling Price, Marked Price',
          'Discount and successive discounts',
          'Profit % and Loss %',
          'Dishonest shopkeeper problems (false weights)',
          'Partnership profit distribution',
          'Equivalent single discount',
        ],
      },
      {
        name: 'Time & Work',
        subtopics: [
          'Basic work problems (1/n formula)',
          'Two or more persons working together',
          'Work and wages',
          'Pipes and Cisterns (filling and draining)',
          'Efficiency-based problems',
          'Work done in parts',
        ],
      },
      {
        name: 'Time, Speed & Distance',
        subtopics: [
          'Basic speed-distance-time formula',
          'Average speed problems',
          'Relative speed — same/opposite direction',
          'Trains — crossing poles, platforms, each other',
          'Boats and streams (upstream/downstream)',
          'Circular track problems',
        ],
      },
      {
        name: 'Ratio & Proportion',
        subtopics: [
          'Basic ratio and proportion',
          'Compounded ratio',
          'Dividing in a given ratio',
          'Direct and inverse proportion',
          'Mixtures and Alligation',
          'Mean proportional',
        ],
      },
      {
        name: 'Averages',
        subtopics: [
          'Simple average formula',
          'Weighted average',
          'Average of consecutive numbers',
          'Effect of adding/removing a number',
          'Speed average problems',
        ],
      },
      {
        name: 'Simple & Compound Interest',
        subtopics: [
          'SI formula: P×R×T/100',
          'CI formula and difference between SI and CI',
          'Half-yearly and quarterly compounding',
          'Finding rate, time, or principal from SI/CI',
          'Instalments (equal EMI problems)',
        ],
      },
      {
        name: 'Permutation & Combination',
        subtopics: [
          'Fundamental counting principle',
          'Permutations — nPr formula',
          'Combinations — nCr formula',
          'Arrangements with repetition',
          'Circular permutations',
          'Selections with conditions',
        ],
      },
      {
        name: 'Probability',
        subtopics: [
          'Basic probability definition',
          'Sample space and events',
          'Addition and multiplication theorems',
          'Conditional probability',
          'Coin, dice, card problems',
          'Complementary events',
        ],
      },
      {
        name: 'Data Interpretation',
        subtopics: [
          'Bar graphs (simple and compound)',
          'Line graphs',
          'Pie charts (with angle and percentage)',
          'Tables and caselets',
          'Mixed DI sets',
          'Missing data problems',
        ],
      },
    ],
  },
  {
    id: 'reasoning',
    name: 'Logical Reasoning',
    icon: '🧠',
    category: 'Competitive Exams',
    description: 'Reasoning ability tested in all government and competitive exams.',
    topics: [
      {
        name: 'Number & Letter Series',
        subtopics: [
          'Missing number in a series',
          'Wrong number in a series',
          'Alpha-numeric series',
          'Mixed series patterns',
          'Difference series, ratio series, square/cube series',
        ],
      },
      {
        name: 'Coding-Decoding',
        subtopics: [
          'Letter shifting (forward/backward)',
          'Number-based coding',
          'Symbol coding',
          'Coding in a fictitious language',
          'Mixed coding patterns',
        ],
      },
      {
        name: 'Blood Relations',
        subtopics: [
          'Family tree drawing technique',
          'Single person blood relation',
          'Mixed blood relation puzzles',
          'Coded blood relations',
          'Pointing/photo-based questions',
        ],
      },
      {
        name: 'Direction & Distance',
        subtopics: [
          'Basic direction sense (N, S, E, W)',
          'Shadow-based directions',
          'Net displacement calculation',
          'Person-turning problems',
          'Map-based direction problems',
        ],
      },
      {
        name: 'Syllogism',
        subtopics: [
          'All, No, Some, Some not — statements',
          'Venn diagram method',
          'Drawing valid conclusions',
          'Possibility cases (can be true/false)',
          'Either-or conclusions',
        ],
      },
      {
        name: 'Puzzles',
        subtopics: [
          'Floor-based puzzles',
          'Box stacking puzzles',
          'Category-based assignments',
          'Age-based puzzles',
          'Scheduling puzzles',
        ],
      },
      {
        name: 'Seating Arrangement',
        subtopics: [
          'Linear arrangement — single row',
          'Linear arrangement — two rows facing',
          'Circular arrangement (same direction)',
          'Square/Rectangle arrangement',
          'Complex mixed seating',
        ],
      },
      {
        name: 'Inequalities & Input-Output',
        subtopics: [
          'Mathematical inequalities (>, <, ≥, ≤)',
          'Coded inequalities (symbol substitution)',
          'Machine input-output patterns',
          'Shift and swap operations',
        ],
      },
    ],
  },
  {
    id: 'english',
    name: 'English Language',
    icon: '📖',
    category: 'Competitive Exams',
    description: 'English skills tested in SSC, Bank PO, CLAT, and other competitive exams.',
    topics: [
      {
        name: 'Grammar Fundamentals',
        subtopics: [
          'Parts of Speech — Noun, Pronoun, Verb, Adjective, Adverb',
          'Tenses — 12 tenses with usage',
          'Active and Passive Voice',
          'Direct and Indirect Speech',
          'Prepositions — common usage rules',
          'Articles — a, an, the',
          'Subject-Verb Agreement',
        ],
      },
      {
        name: 'Reading Comprehension',
        subtopics: [
          'Skimming and scanning techniques',
          'Inference-based questions',
          'Tone and attitude of the author',
          'Title / main idea questions',
          'Vocabulary in context',
          'Para-based RC (CLAT style)',
        ],
      },
      {
        name: 'Vocabulary',
        subtopics: [
          'Synonyms and Antonyms',
          'One-word substitutions',
          'Idioms and Phrases',
          'Phrasal verbs',
          'Word Power — Word Power Made Easy (Norman Lewis)',
          'Root words and prefixes/suffixes',
        ],
      },
      {
        name: 'Error Spotting',
        subtopics: [
          'Subject-verb agreement errors',
          'Pronoun reference errors',
          'Tense inconsistency',
          'Preposition and article errors',
          'Redundancy and wrong word usage',
        ],
      },
      {
        name: 'Fill in the Blanks',
        subtopics: [
          'Single blank (grammar-based)',
          'Double blank (pair selection)',
          'Cloze test (paragraph with blanks)',
          'Context-based word choice',
        ],
      },
      {
        name: 'Para Jumbles & Sentence Ordering',
        subtopics: [
          'Logical flow identification',
          'Introductory and concluding sentence',
          'Pronoun-reference technique',
          'Chronological and contrast connectors',
        ],
      },
    ],
  },
  {
    id: 'gk',
    name: 'General Knowledge',
    icon: '🌍',
    category: 'Government Exams',
    description: 'GK for TNPSC, UPSC, SSC, and Bank exams — with Tamil Nadu focus.',
    topics: [
      {
        name: 'Indian History',
        subtopics: [
          'Ancient India — Indus Valley, Vedic Age, Maurya, Gupta',
          'Medieval India — Delhi Sultanate, Mughal Empire',
          'Modern India — British Rule, Freedom Struggle',
          'Important Acts and Proclamations',
          'Freedom fighters and their contributions',
          'Tamil Nadu History — Sangam Period, Chola, Pandya, Chera dynasties',
        ],
      },
      {
        name: 'Indian Geography',
        subtopics: [
          'Physical features — Mountains, Rivers, Plateaus, Plains',
          'Climate zones of India',
          'National Parks and Wildlife Sanctuaries',
          'Important rivers and their tributaries',
          'Agriculture — crops and producing states',
          'Tamil Nadu Geography — districts, rivers, forests',
        ],
      },
      {
        name: 'Indian Polity',
        subtopics: [
          'Indian Constitution — Preamble, Parts, Schedules',
          'Fundamental Rights and Duties',
          'Directive Principles of State Policy',
          'Parliament — Lok Sabha, Rajya Sabha',
          'President and Governor — powers and functions',
          'Judiciary — Supreme Court, High Court',
          'Local Government — Panchayati Raj',
          'Important Amendments (42nd, 44th, 73rd, 74th)',
        ],
      },
      {
        name: 'Indian Economy',
        subtopics: [
          'Five Year Plans and NITI Aayog',
          'GDP, GNP, NNP concepts',
          'Union Budget — key terms',
          'RBI — functions and monetary policy',
          'Banking system in India',
          'Important Government Schemes (PM Awas, Jan Dhan, etc.)',
          'Agriculture and Green Revolution',
        ],
      },
      {
        name: 'General Science',
        subtopics: [
          'Physics — Light, Sound, Electricity, Magnetism',
          'Chemistry — Elements, Acids-Bases, Carbon compounds',
          'Biology — Cell, Human body systems, Diseases',
          'Scientific inventions and discoveries',
          'Space science — ISRO missions',
          'Environment — Greenhouse effect, Ozone depletion',
        ],
      },
      {
        name: 'Current Affairs',
        subtopics: [
          'Monthly current affairs (last 12 months)',
          'Awards — National, International, Nobel Prizes',
          'Summits and Conferences',
          'Important appointments — Governors, CJI, etc.',
          'Sports — championships and records',
          'Tamil Nadu government schemes and news',
        ],
      },
    ],
  },
  {
    id: 'maths-jee',
    name: 'Mathematics (JEE Level)',
    icon: '📐',
    category: 'JEE / Engineering',
    description: 'Advanced Mathematics for JEE Main and Advanced preparation.',
    topics: [
      {
        name: 'Algebra',
        subtopics: [
          'Complex Numbers — Argument, Modulus, De Moivre\'s theorem',
          'Quadratic Equations — Discriminant, nature of roots',
          'Progressions — AP, GP, HP, AGP',
          'Binomial Theorem — General term, middle term',
          'Matrices and Determinants — Properties, Cramer\'s rule',
          'Permutation & Combination (advanced)',
          'Mathematical Induction',
        ],
      },
      {
        name: 'Calculus',
        subtopics: [
          'Limits — L\'Hôpital\'s rule, standard limits',
          'Continuity and Differentiability',
          'Differentiation — Chain rule, product, quotient rules',
          'Application of Derivatives — Tangents, Maxima/Minima',
          'Integration — Standard forms, substitution, by parts',
          'Definite Integration — Properties',
          'Area under curves',
          'Differential Equations — Variable separable, homogeneous',
        ],
      },
      {
        name: 'Coordinate Geometry',
        subtopics: [
          'Straight Lines — Slope, distance, angle bisectors',
          'Circle — Standard equations, tangent, normal',
          'Parabola — Focus, directrix, standard forms',
          'Ellipse — Eccentricity, axes, tangent conditions',
          'Hyperbola — Asymptotes, conjugate hyperbola',
        ],
      },
      {
        name: 'Trigonometry',
        subtopics: [
          'Trigonometric ratios and identities',
          'Compound angle formulas',
          'Multiple angle formulas (sin2A, cos3A)',
          'Inverse trigonometric functions',
          'General solution of trigonometric equations',
          'Properties of triangles — sine rule, cosine rule',
        ],
      },
      {
        name: 'Vectors & 3D Geometry',
        subtopics: [
          'Vector addition, subtraction, scalar multiplication',
          'Dot product and Cross product',
          'Scalar and Vector triple products',
          'Direction cosines and ratios',
          'Equation of line and plane in 3D',
          'Distance formulas in 3D',
        ],
      },
      {
        name: 'Probability (Advanced)',
        subtopics: [
          'Classical probability',
          'Conditional probability and Bayes\' theorem',
          'Binomial distribution',
          'Random variables — expectation and variance',
        ],
      },
    ],
  },
  {
    id: 'physics-neet',
    name: 'Physics (NEET Level)',
    icon: '⚡',
    category: 'NEET / Medical',
    description: 'Physics chapters for NEET preparation — Class 11 & 12 NCERT based.',
    topics: [
      {
        name: 'Class 11 — Mechanics & Waves',
        subtopics: [
          'Physical World, Units & Measurements',
          'Motion in a Straight Line',
          'Motion in a Plane (projectile, circular)',
          'Laws of Motion (Newton\'s laws, friction)',
          'Work, Energy and Power',
          'System of Particles and Rotational Motion',
          'Gravitation',
          'Mechanical Properties of Solids & Fluids',
          'Thermal Properties of Matter',
          'Thermodynamics',
          'Kinetic Theory of Gases',
          'Oscillations (SHM)',
          'Waves (Sound, superposition, Doppler)',
        ],
      },
      {
        name: 'Class 12 — Electromagnetism & Modern Physics',
        subtopics: [
          'Electric Charges and Fields',
          'Electrostatic Potential and Capacitance',
          'Current Electricity (Ohm\'s law, Kirchhoff\'s laws)',
          'Moving Charges and Magnetism',
          'Magnetism and Matter',
          'Electromagnetic Induction',
          'Alternating Current (AC circuits)',
          'Electromagnetic Waves',
          'Ray Optics and Optical Instruments',
          'Wave Optics (interference, diffraction)',
          'Dual Nature of Radiation',
          'Atoms and Nuclei',
          'Semiconductor Electronics',
        ],
      },
    ],
  },
  {
    id: 'chemistry-neet',
    name: 'Chemistry (NEET Level)',
    icon: '🧪',
    category: 'NEET / Medical',
    description: 'Chemistry chapters for NEET — Physical, Organic, and Inorganic.',
    topics: [
      {
        name: 'Physical Chemistry',
        subtopics: [
          'Some Basic Concepts of Chemistry (mole concept)',
          'Structure of Atom (Bohr model, quantum numbers)',
          'Chemical Bonding and Molecular Structure',
          'States of Matter',
          'Thermodynamics (Hess\'s law, Gibbs energy)',
          'Equilibrium (Kc, Kp, Le Chatelier)',
          'Redox Reactions',
          'Electrochemistry',
          'Chemical Kinetics (rate laws, Arrhenius equation)',
          'Solutions (colligative properties)',
        ],
      },
      {
        name: 'Inorganic Chemistry',
        subtopics: [
          'Periodic Table — Periodic trends',
          's-Block Elements (alkali & alkaline earth metals)',
          'p-Block Elements (Groups 13–18)',
          'd & f Block Elements (transition metals)',
          'Coordination Compounds (IUPAC naming, isomerism)',
          'Metallurgy',
          'Environmental Chemistry',
        ],
      },
      {
        name: 'Organic Chemistry',
        subtopics: [
          'Basic Principles of Organic Chemistry (IUPAC)',
          'Hydrocarbons (Alkane, Alkene, Alkyne, Benzene)',
          'Haloalkanes and Haloarenes',
          'Alcohols, Phenols and Ethers',
          'Aldehydes, Ketones and Carboxylic Acids',
          'Amines',
          'Biomolecules (Carbohydrates, Proteins, DNA)',
          'Polymers',
          'Chemistry in Everyday Life',
        ],
      },
    ],
  },
  {
    id: 'biology-neet',
    name: 'Biology (NEET Level)',
    icon: '🌱',
    category: 'NEET / Medical',
    description: 'Biology — the most important subject for NEET (360 out of 720 marks).',
    topics: [
      {
        name: 'Botany — Class 11',
        subtopics: [
          'The Living World (taxonomy, classification)',
          'Biological Classification (Five kingdoms)',
          'Plant Kingdom (Algae to Angiosperms)',
          'Morphology of Flowering Plants',
          'Anatomy of Flowering Plants',
          'Cell: The Unit of Life',
          'Cell Cycle and Cell Division',
          'Transport in Plants',
          'Mineral Nutrition',
          'Photosynthesis in Higher Plants',
          'Respiration in Plants',
          'Plant Growth and Development',
        ],
      },
      {
        name: 'Botany — Class 12',
        subtopics: [
          'Sexual Reproduction in Flowering Plants',
          'Principles of Inheritance and Variation (Mendelism)',
          'Molecular Basis of Inheritance (DNA, RNA)',
          'Evolution',
          'Strategies for Enhancement in Food Production',
          'Microbes in Human Welfare',
          'Biotechnology — Principles and Applications',
          'Organisms and Populations',
          'Ecosystem',
          'Biodiversity and Conservation',
          'Environmental Issues',
        ],
      },
      {
        name: 'Zoology — Class 11',
        subtopics: [
          'Animal Kingdom (classification, phyla)',
          'Structural Organisation in Animals (cockroach, earthworm, frog)',
          'Biomolecules (Enzyme, Carbohydrate, Protein, Lipid)',
          'Digestion and Absorption',
          'Breathing and Exchange of Gases',
          'Body Fluids and Circulation',
          'Excretory Products and their Elimination',
          'Locomotion and Movement',
          'Neural Control and Coordination',
          'Chemical Coordination and Integration',
        ],
      },
      {
        name: 'Zoology — Class 12',
        subtopics: [
          'Human Reproduction',
          'Reproductive Health',
          'Human Health and Disease (Immunity, AIDS, Cancer)',
          'Animal Husbandry',
        ],
      },
    ],
  },
];
