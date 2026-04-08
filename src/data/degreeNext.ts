export interface NextStep {
  name: string;
  icon: string;
  description: string;
  timeline: string;
  eligibility: string;
  outcome: string;
}

export interface DegreeTrack {
  id: string;
  degree: string;
  icon: string;
  description: string;
  nextSteps: NextStep[];
}

export const degreeTracks: DegreeTrack[] = [
  {
    id: 'bsc-be',
    degree: 'After BSc / BE / BTech',
    icon: '🎓',
    description:
      'Science and Engineering graduates have a rich variety of options — from prestigious government exams to global education.',
    nextSteps: [
      {
        name: 'GATE (Graduate Aptitude Test in Engineering)',
        icon: '⚙️',
        description:
          'GATE score enables admission to M.Tech in IITs/NITs and PSU jobs (BHEL, ONGC, DRDO etc.) with pay scales of ₹50,000–₹1,00,000+.',
        timeline: 'Exam in February — prepare 1 year in advance',
        eligibility: 'BE/BTech/BSc (final year students can also apply)',
        outcome: 'M.Tech at IIT/NIT or PSU Job',
      },
      {
        name: 'CAT (Common Admission Test)',
        icon: '📊',
        description:
          'The gateway to IIMs and top MBA colleges. Opens doors to management roles in top companies.',
        timeline: 'Exam in November — prepare 6–12 months',
        eligibility: 'Any degree with 50% marks. Final year students can apply.',
        outcome: 'MBA at IIM or top B-schools',
      },
      {
        name: 'GRE (Graduate Record Examination)',
        icon: '🌎',
        description:
          'GRE is required for MS programs in the USA, Canada, UK, Germany, and Australia. Accepted by 1,300+ universities.',
        timeline: 'Year-round computer-based exam — prepare 3–6 months',
        eligibility: 'Any degree. No age limit.',
        outcome: 'MS/PhD abroad (USA, Germany, Canada, Australia)',
      },
      {
        name: 'GMAT (Graduate Management Admission Test)',
        icon: '💼',
        description:
          'GMAT is the preferred test for MBA abroad — Harvard, Wharton, INSEAD, ISB Hyderabad.',
        timeline: 'Year-round exam — prepare 3–6 months',
        eligibility: 'Any degree. Recommended 2+ years work experience.',
        outcome: 'MBA at global B-schools',
      },
      {
        name: 'UPSC CSE',
        icon: '🇮🇳',
        description:
          'Civil Services — IAS, IPS, IFS. The most prestigious career in India. Science graduates are strong candidates with optional subjects like Physics, Chemistry, Botany.',
        timeline: 'Prelims in June — prepare 2–3 years after graduation',
        eligibility: 'Any degree. Age 21–32.',
        outcome: 'IAS / IPS / IFS and other Group A, B services',
      },
      {
        name: 'TNPSC (Group 1 / Group 2)',
        icon: '🏛️',
        description:
          'Tamil Nadu state government positions. Group 1 gives Deputy Collector, DSP roles. Science graduates have advantage in GS sections.',
        timeline: 'Prepare 6–18 months after graduation',
        eligibility: 'Any degree. Age 21–32.',
        outcome: 'Deputy Collector, Revenue Officer, DSP, etc.',
      },
      {
        name: 'CSIR NET / UGC NET',
        icon: '🔬',
        description:
          'National Eligibility Test for JRF (Junior Research Fellowship) and Lectureship. MSc preferred but BSc final year can attempt.',
        timeline: 'Twice a year (June & December)',
        eligibility: 'BSc/MSc in relevant subject. 55% marks.',
        outcome: 'JRF fellowship + PhD funding, or Assistant Professor post',
      },
      {
        name: 'Defence Services (CDS / AFCAT)',
        icon: '🎖️',
        description:
          'Combined Defence Services exam for Army, Navy, Air Force officer roles.',
        timeline: 'CDS twice a year (Feb & Nov)',
        eligibility: 'BE/BTech for all three services. Age 19–25.',
        outcome: 'Lieutenant in Indian Army/Navy/Air Force',
      },
    ],
  },
  {
    id: 'ba-bcom',
    degree: 'After BA / BCom / BBA',
    icon: '📜',
    description:
      'Arts and Commerce graduates have the widest range of options — civil services, law, management, and teaching.',
    nextSteps: [
      {
        name: 'UPSC CSE',
        icon: '🇮🇳',
        description:
          'The ultimate goal for many Arts graduates. History, Political Science, Public Administration, Sociology are popular optional subjects.',
        timeline: 'Prelims in June — prepare 2–3 years after graduation',
        eligibility: 'Any degree. Age 21–32. 6 attempts (General).',
        outcome: 'IAS / IPS / IFS — highest level government services',
      },
      {
        name: 'TNPSC (All Groups)',
        icon: '🏛️',
        description:
          'Tamil Nadu state services. Arts graduates can choose Tamil Literature, History, or Political Science as optional subjects.',
        timeline: 'Group 1: 12–18 months prep. Group 4: 3–6 months.',
        eligibility: 'Group 1 & 2: Any degree. Group 4: 10th/12th.',
        outcome: 'District-level government positions across Tamil Nadu',
      },
      {
        name: 'MBA (CAT / XAT / MAT)',
        icon: '💼',
        description:
          'Management education — opens corporate leadership, HR, Finance, Marketing careers. CAT for IIMs, XAT for XLRI, MAT for other B-schools.',
        timeline: 'CAT in November — prepare 6–12 months',
        eligibility: 'Any degree with 50% marks.',
        outcome: 'MBA — corporate management career (₹6L–₹25L+ starting)',
      },
      {
        name: 'LLB (Law Degree)',
        icon: '⚖️',
        description:
          '3-year LLB after any UG degree. Leads to litigation, corporate law, judicial services, and law teaching.',
        timeline: '3 years (BCI regulated)',
        eligibility: 'Any degree. Admission via merit or entrance.',
        outcome: 'Advocate, Corporate Lawyer, Judicial Services, Law Officer',
      },
      {
        name: 'MA / MCom (Post-Graduation)',
        icon: '📚',
        description:
          'Subject-specific postgraduate study. MA History, Economics, Political Science — leads to academia, research, and teaching careers.',
        timeline: '2 years',
        eligibility: 'Relevant UG degree. 50% marks.',
        outcome: 'Lecturer (after NET), Researcher, Government expert roles',
      },
      {
        name: 'CA (Chartered Accountancy)',
        icon: '🧾',
        description:
          'BCom graduates can directly appear for CA Intermediate. Fastest route — complete CA in 3 years after BCom.',
        timeline: 'CA Intermediate → Articleship (3 years) → CA Final',
        eligibility: 'BCom / BBA / Any degree (Foundation exempted for Commerce graduates with 55%)',
        outcome: 'Chartered Accountant — ₹8L–₹25L+ starting salary',
      },
      {
        name: 'Bank PO / SSC CGL',
        icon: '🏦',
        description:
          'Government jobs with stable income. IBPS PO, SBI PO, SSC CGL are highly competitive but achievable with 6–12 months of focused preparation.',
        timeline: 'Prepare 6–12 months. Exams held annually.',
        eligibility: 'Any degree. Age 20–32.',
        outcome: 'Probationary Officer, Bank Clerk, Inspector, Auditor roles',
      },
      {
        name: 'UGC NET (Teaching)',
        icon: '🎓',
        description:
          'National Eligibility Test for Assistant Professor posts in degree colleges and for Junior Research Fellowships.',
        timeline: 'Twice a year (June & December)',
        eligibility: 'MA/MCom with 55% marks.',
        outcome: 'Assistant Professor in college, or JRF (₹31,000/month fellowship)',
      },
    ],
  },
  {
    id: 'bpharm-diploma',
    degree: 'After B.Pharm / Diploma / Polytechnic',
    icon: '🏭',
    description:
      'Technical and pharmacy graduates have focused career pathways with strong industry demand.',
    nextSteps: [
      {
        name: 'M.Pharm / Pharm D',
        icon: '💊',
        description:
          'Higher pharmacy education for research, clinical pharmacy, and hospital pharmacy specialization.',
        timeline: '2 years (M.Pharm) | 3 years post-B.Pharm (Pharm D bridge)',
        eligibility: 'B.Pharm with 55%',
        outcome: 'Hospital Pharmacist, Research Scientist, Drug Inspector',
      },
      {
        name: 'GPAT (Government Pharmacy Aptitude Test)',
        icon: '🔬',
        description:
          'GPAT enables admission to M.Pharm in NITs, BITS, and other top institutions. Also needed for PSU pharmacy jobs.',
        timeline: 'January — prepare 6–12 months',
        eligibility: 'B.Pharm graduates and final year students',
        outcome: 'M.Pharm at NIT, BITS Pilani, or PSU Pharmaceutical jobs',
      },
      {
        name: 'AMIE (Associate Membership of Institution of Engineers)',
        icon: '⚙️',
        description:
          'Diploma holders can get a degree equivalent to BE/BTech through AMIE — recognized by UPSC and all government departments.',
        timeline: '2.5–5 years (Part time, flexible)',
        eligibility: 'Diploma in relevant engineering branch',
        outcome: 'BE equivalent — eligible for GATE, government engineering posts',
      },
      {
        name: 'Lateral Entry BE/BTech',
        icon: '🏗️',
        description:
          'Diploma holders can join 2nd year of BE/BTech through TNEA Lateral Entry — saves 1 year, same final degree.',
        timeline: '3 years (via lateral entry)',
        eligibility: 'Polytechnic diploma in relevant branch. 60% marks.',
        outcome: 'BE/BTech degree — opens GATE, PSU, IT company opportunities',
      },
      {
        name: 'SSC JE / RRB JE',
        icon: '🔧',
        description:
          'Junior Engineer posts in SSC and Railways — great government job for diploma/B.Tech holders in Civil, Mechanical, Electrical.',
        timeline: 'Exam held annually — prepare 6–12 months',
        eligibility: 'Diploma or Degree in Civil/Mechanical/Electrical',
        outcome: 'Junior Engineer in Central Government / Railways',
      },
    ],
  },
];

export const examTimelines = [
  {
    exam: 'GATE',
    months: [
      { month: 'Jun–Aug', activity: 'Subject-wise study (Core subjects)' },
      { month: 'Sep–Oct', activity: 'Complete syllabus + formula revision' },
      { month: 'Nov–Dec', activity: 'Mock tests + Previous year papers' },
      { month: 'Jan', activity: 'Final revision + Weak areas' },
      { month: 'Feb', activity: 'GATE Exam' },
    ],
  },
  {
    exam: 'CAT',
    months: [
      { month: 'Jan–Mar', activity: 'Build foundations (Aptitude, Verbal, DI)' },
      { month: 'Apr–Jun', activity: 'Advanced topics + Sectional mocks' },
      { month: 'Jul–Sep', activity: 'Full mock tests (2 per week)' },
      { month: 'Oct', activity: 'Analysis and targeted revision' },
      { month: 'Nov', activity: 'CAT Exam' },
    ],
  },
  {
    exam: 'UPSC CSE',
    months: [
      { month: 'Year 1', activity: 'NCERT foundation + Static GK + Optional subject basics' },
      { month: 'Year 1–2', activity: 'Standard books + Newspaper habit + Answer writing' },
      { month: 'Year 2', activity: 'Prelims mock tests + Current affairs consolidation' },
      { month: 'June (Year 2)', activity: 'Prelims Exam' },
      { month: 'Sep (Year 2)', activity: 'Mains Exam' },
      { month: 'Feb–Mar (Year 3)', activity: 'Interview' },
    ],
  },
];
