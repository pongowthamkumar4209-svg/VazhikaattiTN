export interface CareerPath {
  name: string;
  icon: string;
  description: string;
  duration: string;
  exams?: string[];
  colleges?: string[];
}

export interface Group {
  id: string;
  name: string;
  subjects: string[];
  icon: string;
  color: string;
  description: string;
  careers: CareerPath[];
}

export const groups: Group[] = [
  {
    id: 'biology',
    name: 'Biology Group',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    icon: '🔬',
    color: '#2ecc71',
    description:
      'The Biology group opens doors to medical, paramedical, and life sciences careers. It is one of the most sought-after streams in Tamil Nadu.',
    careers: [
      {
        name: 'MBBS (Bachelor of Medicine)',
        icon: '🩺',
        description:
          'Become a doctor by qualifying NEET. MBBS is the most prestigious medical degree in India.',
        duration: '5.5 years (including internship)',
        exams: ['NEET UG'],
        colleges: ['Madras Medical College', 'Stanley Medical College', 'Kilpauk Medical College'],
      },
      {
        name: 'BDS (Dentistry)',
        icon: '🦷',
        description:
          'Bachelor of Dental Surgery. Qualify NEET to get admission into dental colleges.',
        duration: '5 years (including internship)',
        exams: ['NEET UG'],
        colleges: ['Ragas Dental College', 'Meenakshi Ammal Dental College'],
      },
      {
        name: 'BAMS (Ayurveda)',
        icon: '🌿',
        description:
          'Bachelor of Ayurvedic Medicine and Surgery. Traditional medicine with modern practice.',
        duration: '5.5 years',
        exams: ['NEET UG'],
        colleges: ['Government Ayurveda Medical College, Chennai'],
      },
      {
        name: 'BSc Nursing',
        icon: '💉',
        description:
          'A highly respected healthcare career. Government hospitals offer assured employment.',
        duration: '4 years',
        exams: ['NEET (for some colleges)', 'Institution-level entrance'],
        colleges: ['Madras Medical College Nursing School', 'Sri Ramachandra University'],
      },
      {
        name: 'BSc Agriculture',
        icon: '🌾',
        description:
          'Agriculture offers stable government jobs and entrepreneurship in farming technology.',
        duration: '4 years',
        exams: ['TNAU TANCA', 'State Agriculture Entrance'],
        colleges: ['Tamil Nadu Agricultural University (TNAU), Coimbatore'],
      },
      {
        name: 'BVSc (Veterinary)',
        icon: '🐾',
        description:
          'Veterinary Science degree for those passionate about animal health.',
        duration: '5 years',
        exams: ['NEET UG', 'State Veterinary Entrance'],
        colleges: ['Madras Veterinary College', 'TANUVAS Colleges'],
      },
      {
        name: 'BSc Allied Health Sciences',
        icon: '🏥',
        description:
          'Physiotherapy, MLT, Radiology, Optometry — growing demand in healthcare.',
        duration: '3–4 years',
        exams: ['NEET (some)', 'TNEA Allied Health'],
        colleges: ['Sri Ramachandra University', 'Chettinad Health City'],
      },
    ],
  },
  {
    id: 'cs',
    name: 'Computer Science Group',
    subjects: ['Physics', 'Chemistry', 'Computer Science / Mathematics'],
    icon: '💻',
    color: '#3498db',
    description:
      'The CS group is ideal for students aspiring to become engineers and software professionals. Tamil Nadu has excellent engineering colleges.',
    careers: [
      {
        name: 'BE/BTech — NIT / IIT (JEE)',
        icon: '⚙️',
        description:
          'Premier engineering colleges through JEE Main and JEE Advanced.',
        duration: '4 years',
        exams: ['JEE Main', 'JEE Advanced'],
        colleges: ['IIT Madras', 'NIT Trichy', 'NIT Surathkal'],
      },
      {
        name: 'BE/BTech — TNEA (Tamil Nadu)',
        icon: '🏗️',
        description:
          'Admission to Tamil Nadu engineering colleges based on Class 12 marks.',
        duration: '4 years',
        exams: ['TNEA Counselling'],
        colleges: ['Anna University CEG', 'PSG College of Technology', 'SSN College'],
      },
      {
        name: 'BCA (Computer Applications)',
        icon: '📱',
        description:
          'Bachelor of Computer Applications — great foundation for software careers.',
        duration: '3 years',
        exams: ['Institution Entrance / Merit'],
        colleges: ['Loyola College', 'MCC Chennai', 'SRM University'],
      },
      {
        name: 'BSc Computer Science',
        icon: '🖥️',
        description:
          'Core CS knowledge with specialization options. Affordable with great job prospects.',
        duration: '3 years',
        exams: ['Institution Entrance / Merit'],
        colleges: ['Presidency College', 'Loyola College', 'MCC Chennai'],
      },
      {
        name: 'BSc Information Technology',
        icon: '🌐',
        description:
          'IT focused degree with application development and networking.',
        duration: '3 years',
        exams: ['Institution Entrance / Merit'],
        colleges: ['Multiple autonomous colleges in Tamil Nadu'],
      },
    ],
  },
  {
    id: 'commerce',
    name: 'Commerce Group',
    subjects: ['Accountancy', 'Commerce', 'Economics / Computer Science'],
    icon: '📊',
    color: '#e67e22',
    description:
      'Commerce opens the gateway to the world of finance, law, and business. Tamil Nadu\'s commerce students have excelled in CA and law entrance exams.',
    careers: [
      {
        name: 'CA (Chartered Accountancy)',
        icon: '🧾',
        description:
          'The most prestigious finance qualification in India. High earning potential.',
        duration: '4–5 years (Foundation → Intermediate → Final)',
        exams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
        colleges: ['ICAI — Self study + articleship'],
      },
      {
        name: 'CLAT (Law)',
        icon: '⚖️',
        description:
          'Common Law Admission Test for National Law Universities across India.',
        duration: '5 years (BA LLB / BBA LLB)',
        exams: ['CLAT', 'LSAT India'],
        colleges: ['Tamil Nadu National Law University, Trichy', 'SOEL Universities'],
      },
      {
        name: 'BBA (Business Administration)',
        icon: '💼',
        description:
          'Business management foundation leading to MBA and corporate careers.',
        duration: '3 years',
        exams: ['Institution Entrance / Merit'],
        colleges: ['MCC Chennai', 'Loyola College', 'PSG College of Arts'],
      },
      {
        name: 'BCom (Commerce)',
        icon: '📈',
        description:
          'Core commerce degree with accounting, finance, taxation specializations.',
        duration: '3 years',
        exams: ['Merit based'],
        colleges: ['Presidency College', 'Ethiraj College', 'MCC Chennai'],
      },
      {
        name: 'BMS / BHM',
        icon: '🏨',
        description:
          'Hotel Management and Bachelor of Management Studies.',
        duration: '3–4 years',
        exams: ['NCHMCT JEE', 'Institution Entrance'],
        colleges: ['IHM Chennai', 'Welcomgroup Graduate School'],
      },
    ],
  },
  {
    id: 'arts',
    name: 'Arts Group',
    subjects: ['History / Economics / Geography + Tamil / English'],
    icon: '🎨',
    color: '#9b59b6',
    description:
      'The Arts stream is the gateway to civil services, journalism, social work, and humanities careers. Many Tamil Nadu toppers in UPSC & TNPSC come from Arts background.',
    careers: [
      {
        name: 'BA — Humanities',
        icon: '📚',
        description:
          'Broad humanities education covering literature, history, political science, sociology.',
        duration: '3 years',
        exams: ['Merit based'],
        colleges: ['Presidency College', 'Women\'s Christian College', 'Loyola College'],
      },
      {
        name: 'UPSC Civil Services',
        icon: '🇮🇳',
        description:
          'After graduation, prepare for IAS/IPS/IFS — the highest government posts in India.',
        duration: '1–3 years preparation after graduation',
        exams: ['UPSC CSE Preliminary', 'UPSC CSE Mains', 'Interview'],
        colleges: ['Self-study + coaching in Chennai'],
      },
      {
        name: 'TNPSC',
        icon: '🏛️',
        description:
          'Tamil Nadu Public Service Commission exams for state government posts.',
        duration: '6 months – 2 years preparation',
        exams: ['TNPSC Group 1', 'TNPSC Group 2', 'TNPSC Group 4'],
        colleges: ['Self-study + coaching institutes'],
      },
      {
        name: 'LLB (Law)',
        icon: '⚖️',
        description:
          'After BA, pursue 3-year LLB for legal career. Or 5-year integrated program.',
        duration: '3 years (after UG)',
        exams: ['DU LLB Entrance', 'Tamil Nadu Law Entrance'],
        colleges: ['Tamil Nadu National Law University', 'Government Law College, Chennai'],
      },
      {
        name: 'Journalism & Mass Communication',
        icon: '📰',
        description:
          'Media, broadcasting, digital journalism — rapidly growing field.',
        duration: '3 years',
        exams: ['Institution Entrance'],
        colleges: ['Madras Christian College', 'SRM University', 'Anna University (MCJ)'],
      },
    ],
  },
  {
    id: 'vocational',
    name: 'Vocational Groups',
    subjects: ['Various vocational subjects'],
    icon: '🔧',
    color: '#1abc9c',
    description:
      'Vocational courses offer skill-based education with quick employment prospects. Tamil Nadu has excellent polytechnic and ITI infrastructure.',
    careers: [
      {
        name: 'Polytechnic Diploma',
        icon: '🏭',
        description:
          'Government Polytechnic colleges offer 3-year diploma programs. Direct entry into second year BE/BTech possible.',
        duration: '3 years',
        exams: ['TNEA Polytechnic Counselling'],
        colleges: ['Government Polytechnic College Chennai', 'GPT Coimbatore', 'GPT Madurai'],
      },
      {
        name: 'ITI (Industrial Training Institute)',
        icon: '⚡',
        description:
          'Trades like Electrician, Fitter, Welder, Mechanic. Quick employment in industries.',
        duration: '1–2 years',
        exams: ['Merit based admission'],
        colleges: ['Government ITI Chennai', 'ITI Coimbatore', 'ITI Madurai'],
      },
      {
        name: 'Diploma in Computer Engineering',
        icon: '💾',
        description:
          'Specialized diploma focused on computer hardware, software, and networking.',
        duration: '3 years',
        exams: ['TNEA Polytechnic'],
        colleges: ['Multiple Government Polytechnics across TN'],
      },
      {
        name: 'Paramedical Diploma',
        icon: '🏥',
        description:
          'Pharmacy, Medical Lab Technology, X-Ray Technology — essential healthcare support.',
        duration: '2–3 years',
        exams: ['NEET (Pharmacy B.Pharm)', 'Merit for diploma'],
        colleges: ['Government Medical College affiliated institutes'],
      },
    ],
  },
];
