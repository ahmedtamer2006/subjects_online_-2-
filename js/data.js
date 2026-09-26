/* ===================================================
   SUBJECTS ONLINE — Shared Data (2nd Year — Common Curriculum)
   Faculty of Commerce — 2nd Year
   =================================================== */

const MATERIALS = [
    {
        id: 's1',
        title: 'Intermediate Accounting (1)',
        icon: '🧮',
        color: '#dbeafe',
        accent: '#2563eb',
        desc: 'Comprehensive study of accounting for assets, liabilities, revenue recognition, and financial statements preparation.',
        doctor: 'Dr. Mahmoud Zatout & Dr. Saeed Abu El-Reesh',
        content: {
            chapters: [
                {
                    num: 1, title: "Intermediate Accounting — Framework & Foundations", time: "2h 30m",
                    weeks: [
                        { num: 1, title: "Week 1: Accounting Environment & Standards", lectures: [] },
                        { num: 2, title: "Week 2: Balance Sheet & Income Statement", lectures: [] },
                        { num: 3, title: "Week 3: Revenue Recognition", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Intermediate Accounting — Assets & Valuation", time: "3h 00m",
                    weeks: [
                        { num: 1, title: "Week 4: Inventories & Valuation Models", lectures: [] },
                        { num: 2, title: "Week 5: Property, Plant & Equipment", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Accounting Practice Sets", time: "45m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: Basic Accounting Principles", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Financial Reporting Cases", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Accounting Sections", time: "1h 30m",
                    weeks: [
                        { num: 1, title: "Section 1: Practical Exercises & Journal Entries", lectures: [] },
                        { num: 2, title: "Section 2: Ledger Accounts & Balance Sheets", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — Core Accounting Essentials", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Summary 1: Accounting Cycle & Key Standards", lectures: [] },
                        { num: 2, title: "Summary 2: Valuation Principles", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — Accounting Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Concept Explanations & MCQs", lectures: [] },
                        { num: 2, title: "Q&A 2: Comprehensive Problem Solutions", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive Accounting Review", time: "2h 30m",
                    weeks: [
                        { num: 1, title: "Mock Exam & Final Problem Walkthroughs", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's2',
        title: 'Descriptive Statistics',
        icon: '📊',
        color: '#ede9fe',
        accent: '#7c3aed',
        desc: 'Data presentation, frequency distributions, central tendency, dispersion, probability concepts, and statistical analysis.',
        doctor: 'Prof. Dr. Mona El-Baily & Dr. Hany Khedr',
        content: {
            chapters: [
                {
                    num: 1, title: "Descriptive Statistics — Data Collection & Tables", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Week 1: Introduction to Statistical Variables", lectures: [] },
                        { num: 2, title: "Week 2: Frequency Distributions & Graphical Charts", lectures: [] },
                        { num: 3, title: "Week 3: Central Tendency Measures", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Descriptive Statistics — Dispersion & Probability", time: "2h 45m",
                    weeks: [
                        { num: 1, title: "Week 4: Dispersion, Variance & Standard Deviation", lectures: [] },
                        { num: 2, title: "Week 5: Correlation & Regression Basics", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Statistics Practice Sets", time: "40m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: Central Tendency Calculations", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Measures of Dispersion", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Statistics Sections", time: "1h 30m",
                    weeks: [
                        { num: 1, title: "Section 1: Data Calculation Worksheets", lectures: [] },
                        { num: 2, title: "Section 2: Applied Statistical Problems", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — Statistical Laws & Formulas", time: "45m",
                    weeks: [
                        { num: 1, title: "Summary 1: Key Formulas & Laws", lectures: [] },
                        { num: 2, title: "Summary 2: Interpretations & Examples", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — Statistics Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Concept MCQs & Problem Sets", lectures: [] },
                        { num: 2, title: "Q&A 2: Solved Midterm & Term Questions", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive Statistics Review", time: "2h 30m",
                    weeks: [
                        { num: 1, title: "Complete Course Revision & Model Exam", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's3',
        title: 'Public Finance (1)',
        icon: '💰',
        color: '#fef9c3',
        accent: '#ca8a04',
        desc: 'Principles of public expenditures, government revenue sources, state budgeting, and fiscal economic policy.',
        doctor: 'Dr. Samir Marie & Dr. Ahmed Saeed',
        content: {
            chapters: [
                {
                    num: 1, title: "Public Finance — Role of Government & Expenditures", time: "2h 20m",
                    weeks: [
                        { num: 1, title: "Week 1: Foundations of Public Finance", lectures: [] },
                        { num: 2, title: "Week 2: Public Expenditure Categories & Growth", lectures: [] },
                        { num: 3, title: "Week 3: Economic Effects of Public Spending", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Public Finance — Public Revenues & Budget", time: "2h 45m",
                    weeks: [
                        { num: 1, title: "Week 4: Taxes, Fees & Sovereign Revenues", lectures: [] },
                        { num: 2, title: "Week 5: General State Budget & Fiscal Balance", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Public Finance Sets", time: "40m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: Public Spending & Budgeting", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Tax Systems & Sovereign Revenues", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Public Finance Sections", time: "1h 15m",
                    weeks: [
                        { num: 1, title: "Section 1: Budget Structure Case Studies", lectures: [] },
                        { num: 2, title: "Section 2: Tax & Spending Analyses", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — Fiscal Policy & Public Finance", time: "50m",
                    weeks: [
                        { num: 1, title: "Summary 1: Core Principles of Public Expenditures", lectures: [] },
                        { num: 2, title: "Summary 2: Revenue Systems & Budget Rules", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — Public Finance Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Theoretical Concepts & Analysis", lectures: [] },
                        { num: 2, title: "Q&A 2: Essay & Objective Questions", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive Public Finance Review", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Final Exam Preparation & Comprehensive Revision", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's4',
        title: 'Production Management',
        icon: '🏭',
        color: '#dcfce7',
        accent: '#16a34a',
        desc: 'Operations design, production planning, capacity management, quality control, and manufacturing systems.',
        doctor: 'Dr. Heba Mostafa & Dr. Aya Rabie',
        content: {
            chapters: [
                {
                    num: 1, title: "Production Management — Operations & Plant Layout", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Week 1: Nature of Operations & Production", lectures: [] },
                        { num: 2, title: "Week 2: Product Design & Process Selection", lectures: [] },
                        { num: 3, title: "Week 3: Facility Location & Layout Planning", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Production Management — Planning & Quality Control", time: "2h 50m",
                    weeks: [
                        { num: 1, title: "Week 4: Aggregate Planning & Scheduling", lectures: [] },
                        { num: 2, title: "Week 5: Total Quality Management & Inventory", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Production & Operations", time: "40m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: Facility Design & Layout", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Production Scheduling & Quality", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Operations Sections", time: "1h 20m",
                    weeks: [
                        { num: 1, title: "Section 1: Capacity & Location Calculations", lectures: [] },
                        { num: 2, title: "Section 2: Inventory & Control Models", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — Operations & Production Essentials", time: "45m",
                    weeks: [
                        { num: 1, title: "Summary 1: Process Types & Facility Layout", lectures: [] },
                        { num: 2, title: "Summary 2: Quality & Supply Control", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — Operations Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Concept MCQs & Practical Exercises", lectures: [] },
                        { num: 2, title: "Q&A 2: Production Case Scenarios", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive Production Review", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Final Exam Preparation & Problem Worksheets", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's5',
        title: 'Macroeconomic Theory',
        icon: '📈',
        color: '#fee2e2',
        accent: '#dc2626',
        desc: 'National income accounts, aggregate demand & supply, monetary economics, inflation, unemployment, and macroeconomic policies.',
        doctor: 'Dr. El-Sayeda Kamal & Dr. Hanan Abdel-Khaleq',
        content: {
            chapters: [
                {
                    num: 1, title: "Macroeconomic Theory — National Income & Aggregates", time: "2h 30m",
                    weeks: [
                        { num: 1, title: "Week 1: Introduction to Macroeconomic Aggregates", lectures: [] },
                        { num: 2, title: "Week 2: Measuring Gross Domestic Product (GDP)", lectures: [] },
                        { num: 3, title: "Week 3: Consumption, Savings & Investment", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Macroeconomic Theory — Equilibrium & Policies", time: "3h 00m",
                    weeks: [
                        { num: 1, title: "Week 4: Equilibrium National Income & Multipliers", lectures: [] },
                        { num: 2, title: "Week 5: Inflation, Unemployment & Economic Policy", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Macroeconomics Sets", time: "45m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: GDP & National Income Accounts", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Equilibrium & Multiplier Analysis", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Macroeconomics Sections", time: "1h 30m",
                    weeks: [
                        { num: 1, title: "Section 1: GDP Measurement Problems", lectures: [] },
                        { num: 2, title: "Section 2: Equilibrium & Policy Models", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — Macroeconomic Framework", time: "50m",
                    weeks: [
                        { num: 1, title: "Summary 1: National Accounts & Aggregates", lectures: [] },
                        { num: 2, title: "Summary 2: Policy Instruments & Equilibrium", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — Macroeconomics Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Conceptual Explanations & MCQs", lectures: [] },
                        { num: 2, title: "Q&A 2: Economic Modeling & Solved Exercises", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive Macroeconomics Review", time: "2h 30m",
                    weeks: [
                        { num: 1, title: "Final Revision Deck & Exam Simulation", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's6',
        title: 'English Language (2)',
        icon: '🌐',
        color: '#cffafe',
        accent: '#0891b2',
        desc: 'Advanced business English terminology, professional reading comprehension, technical translation, and correspondence.',
        doctor: 'Dr. Samir Marie, Dr. Mohamed Zaeer & Dr. Walaa Nabil',
        content: {
            chapters: [
                {
                    num: 1, title: "Business English — Terminology & Reading Comprehension", time: "2h 00m",
                    weeks: [
                        { num: 1, title: "Week 1: Core Commerce & Financial Terminology", lectures: [] },
                        { num: 2, title: "Week 2: Business Texts & Reading Skills", lectures: [] },
                        { num: 3, title: "Week 3: Management Vocabulary & Context", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "Business English — Translation & Communication", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Week 4: Economic Translation Techniques", lectures: [] },
                        { num: 2, title: "Week 5: Business Correspondence & Reports", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — Business English Sets", time: "35m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: Commerce Vocabulary & Terms", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Translation & Grammar Exercises", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical Language Sections", time: "1h 15m",
                    weeks: [
                        { num: 1, title: "Section 1: Vocabulary Exercises & Practice", lectures: [] },
                        { num: 2, title: "Section 2: Paragraph Translation Drills", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — English Glossary & Key Terms", time: "45m",
                    weeks: [
                        { num: 1, title: "Summary 1: Essential Business Glossary", lectures: [] },
                        { num: 2, title: "Summary 2: Grammar & Writing Guides", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — English Bank", time: "50m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Vocabulary MCQs & Synonyms", lectures: [] },
                        { num: 2, title: "Q&A 2: Translation Passages & Answers", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive English Review", time: "2h 00m",
                    weeks: [
                        { num: 1, title: "Final Exam Preparation & Complete Revision", lectures: [] }
                    ]
                }
            ]
        }
    },
    {
        id: 's7',
        title: 'Management Information Systems',
        icon: '💻',
        color: '#fce7f3',
        accent: '#db2777',
        desc: 'Information technology in organizations, database systems, e-business architecture, and managerial decision support.',
        doctor: 'Dr. Heba Mostafa & Dr. Samar El-Tanbouly',
        content: {
            chapters: [
                {
                    num: 1, title: "MIS — Foundations & Enterprise Systems", time: "2h 20m",
                    weeks: [
                        { num: 1, title: "Week 1: Information Systems in Global Business", lectures: [] },
                        { num: 2, title: "Week 2: Strategic Information Systems & Competitive Advantage", lectures: [] },
                        { num: 3, title: "Week 3: IT Infrastructure & Database Management", lectures: [] }
                    ]
                },
                {
                    num: 2, title: "MIS — E-Business & Decision Support", time: "2h 45m",
                    weeks: [
                        { num: 1, title: "Week 4: Enterprise Applications & E-Commerce", lectures: [] },
                        { num: 2, title: "Week 5: Decision Support Systems & Business Intelligence", lectures: [] }
                    ]
                }
            ],
            quizzes: [
                {
                    num: 1, title: "Quizzes — MIS Practice Sets", time: "40m",
                    weeks: [
                        { num: 1, title: "Quiz Set 1: IT Infrastructure & Concepts", lectures: [] },
                        { num: 2, title: "Quiz Set 2: Enterprise Systems & Decision Models", lectures: [] }
                    ]
                }
            ],
            sections: [
                {
                    num: 1, title: "Practical MIS Sections", time: "1h 15m",
                    weeks: [
                        { num: 1, title: "Section 1: System Flowcharts & Database Cases", lectures: [] },
                        { num: 2, title: "Section 2: Enterprise Systems Applied Scenarios", lectures: [] }
                    ]
                }
            ],
            summaries: [
                {
                    num: 1, title: "Summaries — MIS Key Concepts", time: "45m",
                    weeks: [
                        { num: 1, title: "Summary 1: Systems Architecture & Types", lectures: [] },
                        { num: 2, title: "Summary 2: Digital Strategy & Security", lectures: [] }
                    ]
                }
            ],
            qa: [
                {
                    num: 1, title: "Questions & Answers — MIS Bank", time: "1h 00m",
                    weeks: [
                        { num: 1, title: "Q&A 1: Concept MCQs & True/False Sets", lectures: [] },
                        { num: 2, title: "Q&A 2: System Architecture Case Questions", lectures: [] }
                    ]
                }
            ],
            finalReview: [
                {
                    num: 1, title: "Final Comprehensive MIS Review", time: "2h 15m",
                    weeks: [
                        { num: 1, title: "Final Exam Preparation & Comprehensive Revision", lectures: [] }
                    ]
                }
            ]
        }
    }
];

// Backward-compatibility aliases so older code accessing MATERIALS[dept] continues to work seamlessly
MATERIALS.accounting = MATERIALS;
MATERIALS.business   = MATERIALS;
MATERIALS.economics  = MATERIALS;
MATERIALS.statistics = MATERIALS;
MATERIALS.customs    = MATERIALS;
MATERIALS.general    = MATERIALS;

const ESSAYS = [
    // { id: 'es1', title: 'The Impact of Digital Transformation on Commerce Education', doctor: 'Dr. Mohamed Hassan', tag: 'Technology', tagColor: '#dbeafe', tagText: '#1d4ed8', desc: 'An in-depth analysis of how digital tools are reshaping the future of business and commerce education in Egypt and globally.', readTime: '8 min read', date: 'June 2025' },
    // { id: 'es2', title: 'Behavioral Economics: Why Students Make Irrational Financial Decisions', doctor: 'Dr. Sara Khalil', tag: 'Economics', tagColor: '#dcfce7', tagText: '#15803d', desc: 'Exploring psychological biases that affect students and young adults in their everyday financial choices.', readTime: '6 min read', date: 'May 2025' },
    // { id: 'es3', title: 'ESG Reporting: The New Frontier of Companies Accountability', doctor: 'Dr. Ahmed Nour', tag: 'Accounting', tagColor: '#ede9fe', tagText: '#6d28d9', desc: 'How environmental, social and governance disclosures are reshaping audit practices and investor relations worldwide.', readTime: '10 min read', date: 'April 2025' },
    // { id: 'es4', title: 'Big Data Analytics: Opportunities for Statistics Students', doctor: 'Dr. Laila Mansour', tag: 'Statistics', tagColor: '#fef9c3', tagText: '#a16207', desc: 'A guide to how statistics students can leverage modern big data tools to enter the highest-paying data science roles.', readTime: '7 min read', date: 'March 2025' },
];

// Shared helpers
function getDeptKey(deptText) {
    return 'general';
}

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('soFavorites') || '[]');
    } catch {
        return [];
    }
}

function saveFavorites(favs) {
    try {
        localStorage.setItem('soFavorites', JSON.stringify(favs));
        window.dispatchEvent(new CustomEvent('so-fav-changed', { detail: favs }));
    } catch (e) {
        console.warn('Failed to save favorites:', e);
    }
}

function toggleFav(id, btnEl) {
    let favs = getFavorites();
    const idx = favs.indexOf(id);
    const svg = btnEl ? btnEl.querySelector('svg') : null;

    if (idx === -1) {
        favs.push(id);
        if (btnEl) {
            btnEl.classList.add('active');
            btnEl.style.color = '#f43f5e';
            btnEl.style.background = 'rgba(244, 63, 94, 0.12)';
            btnEl.style.borderColor = 'rgba(244, 63, 94, 0.3)';
            if (svg) svg.setAttribute('fill', 'currentColor');
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(btnEl, { scale: 1.6 }, { scale: 1, duration: 0.5, ease: 'back.out(2)' });
            }
        }
    } else {
        favs.splice(idx, 1);
        if (btnEl) {
            btnEl.classList.remove('active');
            btnEl.style.color = '#94a3b8';
            btnEl.style.background = 'rgba(255, 255, 255, 0.7)';
            btnEl.style.borderColor = 'rgba(255, 255, 255, 0.9)';
            if (svg) svg.setAttribute('fill', 'none');
        }
    }
    saveFavorites(favs);
}

// Map each study section to its respective completion store
const SECTION_STORE_MAP = {
    chapters: 'soCompletedLectures',
    quizzes: 'soCompletedQuizzes',
    sections: 'soCompletedSections',
    summaries: 'soCompletedSummaries',
    qa: 'soCompletedQA',
    finalReview: 'soCompletedFinalReview'
};

// Default section data shown when a subject has no custom content for that section
const DEFAULT_SECTION_DATA = {
    chapters: [
        {
            num: 1, title: "Introduction & Basic Concepts", time: "2h 15m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 101, title: "Overview", type: "pdf", url: "" },
                        // { id: 102, title: "First Principles", type: "pdf", url: "" }
                    ]
                }
            ]
        },
        {
            num: 2, title: "The Core Framework", time: "3h 40m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 201, title: "Lec 3: Deep Dive into Core", type: "video", url: "materials/dummy.mp4" },
                        // { id: 202, title: "Lec 4: Review Questions", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ],
    quizzes: [
        {
            num: 1, title: "Quiz Set 1", time: "2h 15m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 1001, title: "Overview", type: "pdf", url: "" },
                        // { id: 1002, title: "Quiz 2: First Principles", type: "pdf", url: "" }
                    ]
                }
            ]
        },
        {
            num: 2, title: "Quiz Set 2", time: "3h 40m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 1003, title: "Quiz 3: Deep Dive into Core", type: "video", url: "materials/dummy.mp4" },
                        // { id: 1004, title: "Quiz 4: Review Questions", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ],
    sections: [
        {
            num: 1, title: "Section Set 1", time: "2h 15m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 2001, title: "Overview", type: "pdf", url: "" },
                        // { id: 2002, title: "Section 2: First Principles", type: "pdf", url: "" }
                    ]
                }
            ]
        },
        {
            num: 2, title: "Section Set 2", time: "3h 40m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 2003, title: "Section 3: Deep Dive into Core", type: "video", url: "materials/dummy.mp4" },
                        // { id: 2004, title: "Section 4: Review Questions", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ],
    summaries: [
        {
            num: 1, title: "Summaries - Part One", time: "30m",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 3001, title: "Summary 1: Basics", type: "pdf", url: "" },
                        // { id: 3002, title: "Summary 2: Core Concepts", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ],
    qa: [
        {
            num: 1, title: "Q&A - Part One", time: "",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 4001, title: "Q&A 1: Basics", type: "pdf", url: "" },
                        // { id: 4002, title: "Q&A 2: Core Concepts", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ],
    finalReview: [
        {
            num: 1, title: "Final Review", time: "",
            weeks: [
                {
                    num: 1,
                    title: "",
                    lectures: [
                        // { id: 5001, title: "Review 1", type: "pdf", url: "" }
                    ]
                }
            ]
        }
    ]
};

// Fallback alias for backward compatibility
const DEFAULT_CHAPTERS = DEFAULT_SECTION_DATA.chapters;

// =========================================================
// WEEKS SUPPORT: Normalize chapter data to ensure weeks structure
// =========================================================
function normalizeChapterData(ch) {
    if (!ch) return ch;
    const cloned = { ...ch };
    if (!Array.isArray(cloned.weeks) || cloned.weeks.length === 0) {
        if (Array.isArray(cloned.lectures)) {
            cloned.weeks = [
                {
                    num: 1,
                    title: "",
                    lectures: cloned.lectures
                }
            ];
        } else {
            cloned.weeks = [];
        }
    } else {
        cloned.weeks = cloned.weeks.map((w, idx) => ({
            ...w,
            num: w.num !== undefined ? w.num : (idx + 1),
            title: w.title || "",
            lectures: Array.isArray(w.lectures) ? w.lectures : []
        }));
    }
    // Flatten lectures onto chapter for backward compatibility
    cloned.lectures = cloned.weeks.flatMap(w => w.lectures || []);
    return cloned;
}

function getSubjectSectionData(subject, sectionKey) {
    let raw = [];
    if (subject && subject.content && subject.content[sectionKey] && subject.content[sectionKey].length > 0) {
        raw = subject.content[sectionKey];
    } else {
        raw = DEFAULT_SECTION_DATA[sectionKey] || [];
    }
    return raw.map(normalizeChapterData);
}

function getSubjectProgress(item) {
    if (!item) return 0;

    let totalLectures = 0;
    let doneLectures = 0;
    const sid = item.id;

    const countLectures = (ch, completedStore, sec) => {
        const norm = normalizeChapterData(ch);
        norm.lectures.forEach(lec => {
            totalLectures++;
            const key = sid + '_' + lec.id;
            if (completedStore[key]) {
                doneLectures++;
            } else if (sec === 'summaries' && completedStore[sid + '_101'] && lec.id === 3001) {
                doneLectures++;
            } else if (sec === 'qa' && completedStore[sid + '_101'] && lec.id === 4001) {
                doneLectures++;
            }
        });
    };

    if (item.content) {
        const sections = ['chapters', 'quizzes', 'sections', 'summaries', 'qa', 'finalReview'];
        sections.forEach(sec => {
            if (!item.content[sec]) return;
            const storeKey = SECTION_STORE_MAP[sec] || 'soCompletedLectures';
            const completedStore = JSON.parse(localStorage.getItem(storeKey) || '{}');

            item.content[sec].forEach(ch => {
                countLectures(ch, completedStore, sec);
            });
        });
    } else {
        const completedStore = JSON.parse(localStorage.getItem('soCompletedLectures') || '{}');
        DEFAULT_CHAPTERS.forEach(ch => {
            countLectures(ch, completedStore, 'chapters');
        });
    }

    if (totalLectures === 0) return 0;
    return Math.round((doneLectures / totalLectures) * 100);
}

function getSubjectModulesCount(item) {
    if (!item) return 0;
    if (item.content) {
        const sections = ['chapters', 'quizzes', 'sections', 'summaries', 'qa', 'finalReview'];
        let total = 0;
        sections.forEach(sec => {
            if (item.content[sec]) total += item.content[sec].length;
        });
        return total > 0 ? total : DEFAULT_CHAPTERS.length;
    }
    return DEFAULT_CHAPTERS.length;
}

function materialCardHTML(item, isFav, isPinned = false) {
    const progress = getSubjectProgress(item);
    const modulesFromContent = getSubjectModulesCount(item);
    const chaptersCount = modulesFromContent;

    return `
    <a href="subject.html?id=${item.id}" class="material-card group" style="text-decoration: none; position: relative; display: flex; flex-direction: column; overflow: hidden; background: #ffffff; border-radius: 24px; padding: 28px; box-shadow: 0 10px 40px -10px ${item.accent}15; border: 1px solid rgba(0,0,0,0.03); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); isolation: isolate; outline: none; margin-bottom: 24px;">

        <!-- Background glowing orbs -->
        <div style="position: absolute; top: -20%; right: -20%; width: 250px; height: 250px; background: radial-gradient(circle, ${item.accent}40 0%, transparent 70%); z-index: -1; transition: all 0.6s ease; opacity: 0.6; filter: blur(20px);" class="glow-orb"></div>
        <div style="position: absolute; bottom: -10%; left: -10%; width: 150px; height: 150px; background: radial-gradient(circle, ${item.color} 0%, transparent 70%); z-index: -1; filter: blur(20px);"></div>

        <!-- Action Buttons (floating top-right) -->
        <div style="position: absolute; top: 20px; right: 20px; display: flex; gap: 8px; z-index: 10;">
            <button class="action-btn pin-btn ${isPinned ? 'active' : ''}" data-id="${item.id}" title="${isPinned ? 'Unpin' : 'Pin to Top'}"
                style="width: 34px; height: 34px; border-radius: 12px; background: ${isPinned ? item.color : 'rgba(255,255,255,0.7)'}; backdrop-filter: blur(8px); border: 1px solid ${isPinned ? item.accent + '30' : 'rgba(255,255,255,0.9)'}; color: ${isPinned ? item.accent : '#94a3b8'}; display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <svg class="w-4 h-4" fill="${isPinned ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
            </button>
            <button class="action-btn fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Save to Favorites"
                style="position: relative; width: 34px; height: 34px; border-radius: 12px; background: ${isFav ? 'rgba(244,63,94,0.12)' : 'rgba(255,255,255,0.7)'}; backdrop-filter: blur(8px); border: 1px solid ${isFav ? 'rgba(244,63,94,0.3)' : 'rgba(255,255,255,0.9)'}; color: ${isFav ? '#f43f5e' : '#94a3b8'}; display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            </button>
        </div>

        <!-- Premium Icon -->
        <div class="card-icon-container" style="position: relative; width: 64px; height: 64px; margin-bottom: 24px; align-self: center;">
            <!-- Ambient glow aura -->
            <div class="icon-glow" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px; height: 90px; background: radial-gradient(circle, ${item.accent}35 0%, ${item.accent}10 50%, transparent 70%); filter: blur(10px); pointer-events: none; transition: all 0.5s ease;"></div>
            <!-- Gradient border ring -->
            <div style="position: absolute; inset: -2px; border-radius: 22px; background: linear-gradient(135deg, ${item.accent}70, ${item.color}, ${item.accent}35); transition: all 0.4s;"></div>
            <!-- Glossy inner face -->
            <div class="card-icon" style="position: relative; width: 100%; height: 100%; border-radius: 20px; background: linear-gradient(145deg, rgba(255,255,255,0.97), ${item.color}bb); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: inset 0 2px 6px rgba(255,255,255,1), inset 0 -1px 3px ${item.accent}08, 0 4px 16px rgba(0,0,0,0.05); transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);">
                <span style="filter: drop-shadow(0 3px 6px ${item.accent}40); transition: filter 0.3s;">${item.icon}</span>
            </div>
        </div>

        <!-- Content -->
        <h3 class="card-title" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.4rem; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 8px; letter-spacing: -0.01em; transition: color 0.3s; text-align: center;">${item.title}</h3>
        <p style="font-size: 0.8rem; color: #64748b; line-height: 1.5; margin-bottom: 20px; text-align: center;">${item.doctor}</p>

        <!-- Bottom Footer (Stats & Progress) -->
        <div style="margin-top: auto;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; margin-bottom: 12px;">
                <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8;">Progress</span>
                <span style="font-size: 1rem; font-weight: 800; color: ${item.accent}; line-height: 1;">${progress}%</span>
            </div>

            <!-- Sleek Progress Bar -->
            <div style="width: 100%; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; position: relative; border: 1px solid rgba(0,0,0,0.02);">
                <div style="position: absolute; top: 0; left: 0; height: 100%; width: ${progress}%; background: linear-gradient(90deg, ${item.accent}cc, ${item.accent}); border-radius: 10px; transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);"></div>
            </div>
        </div>
    </a>`;
}

function essayCardHTML(e, isFav) {
    return `
    <div class="essay-card group">
        <div class="card-accent" style="background: linear-gradient(90deg, ${e.tagText}, ${e.tagColor});"></div>
        <div class="card-glow" style="background: radial-gradient(circle, ${e.tagColor} 0%, transparent 70%);"></div>

        <div class="card-inner">
            <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${e.id}" title="Save to Favorites"
                style="position: absolute; top: 16px; right: 16px; width: 34px; height: 34px; border-radius: 12px; background: ${isFav ? 'rgba(244,63,94,0.12)' : 'rgba(255,255,255,0.7)'}; backdrop-filter: blur(8px); border: 1px solid ${isFav ? 'rgba(244,63,94,0.3)' : 'rgba(255,255,255,0.9)'}; color: ${isFav ? '#f43f5e' : '#94a3b8'}; display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <svg class="w-4 h-4" fill="${isFav ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            </button>

            <div class="tag" style="background: ${e.tagColor}30; color: ${e.tagText}; border-color: ${e.tagColor};">${e.tag}</div>

            <h3 class="card-title pr-8">${e.title}</h3>
            <p class="card-desc mb-6">${e.desc}</p>

            <div class="essay-meta">
                <div>
                    <p class="meta-author">${e.doctor}</p>
                    <p class="meta-date">${e.date}</p>
                </div>
                <span class="meta-badge" style="color: ${e.tagText}; background: ${e.tagColor}40; border-color: ${e.tagColor};">${e.readTime}</span>
            </div>
        </div>
    </div>`;
}

function bindActionButtons(container) {
    container.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleFav(btn.dataset.id, btn);
        });
    });

    container.querySelectorAll('.pin-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            togglePin(btn.dataset.id, btn);
        });
    });
}

function getPinned() {
    try {
        return JSON.parse(localStorage.getItem('soPinned') || '[]');
    } catch {
        return [];
    }
}

function savePinned(pinned) {
    try {
        localStorage.setItem('soPinned', JSON.stringify(pinned));
        window.dispatchEvent(new CustomEvent('so-pin-changed', { detail: pinned }));
    } catch (e) {
        console.warn('Failed to save pinned:', e);
    }
}

function togglePin(id, btnEl) {
    let pinned = getPinned();
    const idx = pinned.indexOf(id);

    // Find the item color data to restyle the button
    let itemAccent = '#0EA5E9', itemColor = '#F0F9FF';
    const catalog = Array.isArray(MATERIALS) ? MATERIALS : Object.values(MATERIALS).flat();
    const found = catalog.find(g => g && g.id === id);
    if (found) {
        itemAccent = found.accent || '#0EA5E9';
        itemColor = found.color || '#F0F9FF';
    }

    if (idx === -1) {
        pinned.push(id);
        if (btnEl) {
            btnEl.classList.add('active');
            btnEl.title = "Unpin";
            btnEl.style.color = itemAccent;
            btnEl.style.background = itemColor;
            btnEl.style.borderColor = itemAccent + '40';
            if (typeof gsap !== 'undefined') gsap.fromTo(btnEl, { scale: 1.6 }, { scale: 1, duration: 0.5, ease: 'back.out(2)' });
        }
    } else {
        pinned.splice(idx, 1);
        if (btnEl) {
            btnEl.classList.remove('active');
            btnEl.title = "Pin to Top";
            btnEl.style.color = '';
            btnEl.style.background = '';
            btnEl.style.borderColor = '';
        }
    }
    savePinned(pinned);
}

// ── Global Helper: Toggle PDF in Offline Library ─────────────
window.togglePdfLibrary = async function (event, btn, rawTitle, rawUrl, subjectId, lecId) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    const title = decodeURIComponent(rawTitle || 'Document');
    const url = decodeURIComponent(rawUrl || '');
    const sid = subjectId || '';
    const lid = lecId ? String(lecId) : '';

    try {
        let library = JSON.parse(localStorage.getItem('so_offline_library') || '[]');

        // Find existing by subject+lec ID OR by unique title/url match
        const existingIndex = library.findIndex(item =>
            (sid && lid && item.subjectId === sid && String(item.lecId) === lid) ||
            (url && item.url === url) ||
            (title && item.title === title) ||
            (item.id === `${sid}_${lid}`)
        );

        const isCurrentlyInLib = existingIndex !== -1;

        if (!isCurrentlyInLib) {
            // ── ADD TO LIBRARY ─────────────────────────────
            library.push({
                id: `${sid}_${lid}_${Date.now()}`,
                subjectId: sid,
                lecId: lid,
                title: title,
                type: 'pdf',
                url: url,
                dateAdded: new Date().toISOString(),
                isRead: false
            });
            localStorage.setItem('so_offline_library', JSON.stringify(library));
            window.dispatchEvent(new CustomEvent('so-lib-changed', { detail: library }));

            // Cache offline if supported
            if ('caches' in window && url) {
                try {
                    const cache = await caches.open('offline-materials');
                    await cache.add(url);
                } catch (e) {
                    console.log('Offline cache skipped:', e);
                }
            }

            // 1. Show Green Checkmark for exactly 1 second (1000ms)
            if (btn) {
                btn.classList.remove('in-library', 'in-lib');
                btn.classList.add('saved-success', 'lib-saved-flash');
                btn.title = "Added to Library";

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(btn, { scale: 0.9 }, { scale: 1.15, duration: 0.25, ease: 'back.out(2)' });
                }

                setTimeout(() => {
                    btn.classList.remove('saved-success', 'lib-saved-flash');
                    btn.classList.add('in-library', 'in-lib');
                    btn.title = "Remove from Library";
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(btn, { scale: 1.1 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
                    }
                }, 1000);
            }

        } else {
            // ── REMOVE FROM LIBRARY ────────────────────────
            const removedItem = library.splice(existingIndex, 1)[0];
            localStorage.setItem('so_offline_library', JSON.stringify(library));
            window.dispatchEvent(new CustomEvent('so-lib-changed', { detail: library }));

            if ('caches' in window && removedItem && removedItem.url) {
                try {
                    const cache = await caches.open('offline-materials');
                    await cache.delete(removedItem.url);
                } catch (e) {}
            }

            // Transform back to Plus (+) state
            if (btn) {
                btn.classList.remove('saved-success', 'in-library', 'in-lib', 'lib-saved-flash');
                btn.title = "Add to Library";

                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(btn, { scale: 0.9 }, { scale: 1.15, duration: 0.25, ease: 'back.out(2)' });
                }
            }
        }

    } catch (err) {
        console.error('Error toggling library:', err);
    }
};

window.addPdfToLibrary = window.togglePdfLibrary;
