const Portfolio = require('../models/Portfolio');

// Seed / default data (mirrors the original HTML content)
const defaultData = {
  owner: 'Nisha G',
  tagline: 'MCA Graduate · MERN Stack · AI Developer · Hackathon Winner 🏆',
  email: 'nisha.mca.dev@gmail.com',
  phone: '+91-9353599628',
  linkedin: 'https://linkedin.com/in/nisha-g-425605274',
  github: 'https://github.com/nisha155000',
  about:
    'MCA Graduate from GM University, Davanagere (CGPA 7.70). Passionate MERN Stack Developer & AI enthusiast with real-world internship experience in Voice Bot development, Blockchain payments, and NLP-powered automation.',
  badges: ['🎓 MCA · CGPA 7.70', '💻 MERN Stack', '🤖 AI / NLP', '⛓️ Web3 / Solana', '🏆 Hackathon Winner'],
  skills: [
    { icon: '⚛️', name: 'React.js', detail: 'Frontend UI / SPA' },
    { icon: '🟢', name: 'Node.js', detail: 'Backend Server' },
    { icon: '🚂', name: 'Express.js', detail: 'REST API Framework' },
    { icon: '🍃', name: 'MongoDB', detail: 'NoSQL Database' },
    { icon: '🐍', name: 'Python', detail: 'Scripting & AI Dev' },
    { icon: '☕', name: 'Java', detail: 'OOP & DSA' },
    { icon: '🤖', name: 'NLP / AI', detail: 'Voice Bot, Intent' },
    { icon: '🗣️', name: 'Conv. AI', detail: 'Dialogue Flows' },
    { icon: '🗄️', name: 'SQL / DBMS', detail: 'Relational DB' },
    { icon: '🌐', name: 'HTML5 / CSS3', detail: 'Web Design' },
    { icon: '☁️', name: 'Google Cloud', detail: 'GCP Platform' },
    { icon: '⛓️', name: 'Web3 / Solana', detail: 'Blockchain Dev' },
    { icon: '🔗', name: 'REST APIs', detail: 'Integration & Testing' },
    { icon: '🧩', name: 'DSA / OOP', detail: 'Core CS' },
  ],
  internship: {
    title: '🤖 AI Voice Bot Developer Intern',
    location: 'GM University, Davanagere, Karnataka',
    year: '2025',
    points: [
      {
        text: 'Designed and deployed an AI-powered Voice Bot using Python and NLP libraries to automate customer query handling — reducing manual response time by approximately 40%.',
      },
      {
        text: 'Built end-to-end conversational workflows with intent recognition, entity extraction, and backend API integration for real-time voice-based interactions.',
      },
      {
        text: 'Optimized dialogue flow and automation logic, improving bot response accuracy and user engagement across 500+ test interactions.',
      },
      {
        text: 'Integrated the voice bot with RESTful backend services and validated system performance through iterative testing and debugging cycles.',
      },
    ],
    tags: ['Python', 'NLP', 'REST API', 'Conversational AI', 'Intent Recognition', 'Voice Bot'],
  },
  projects: [
    {
      icon: '🤖',
      title: 'AI Voice Bot',
      year: '2025',
      description:
        'Python & NLP-powered voice bot with intent recognition and REST API integration. Automated customer query handling and reduced manual response time by 40% across 500+ interactions. Features entity extraction and real-time voice-based dialogue flows.',
      tags: ['Python', 'NLP', 'REST API', 'Conversational AI'],
      isWinner: false,
    },
    {
      icon: '💰',
      title: 'Crypto-Pay — Blockchain on Solana',
      year: '2025',
      description:
        'QR-based crypto payment application built on the Solana blockchain with real-time transaction tracking. Adopted by 50+ users. Won Best FinTech Award at Code4Change Hackathon 2025 among 100+ competing teams.',
      tags: ['Solana', 'Web3.js', 'React.js', 'JavaScript', '🏆 Best FinTech 2025'],
      isWinner: true,
    },
    {
      icon: '🚦',
      title: 'Traffic Offence & Accident Tracker',
      year: '2024',
      description:
        'Web app for real-time accident reporting and traffic offence tracking with role-based dashboards and a normalized SQL database. Cut reporting time by 60% through automated workflows and streamlined data entry.',
      tags: ['Python', 'SQL', 'JavaScript', 'REST API'],
      isWinner: false,
    },
  ],
  achievements: [
    {
      icon: '🥇',
      title: 'Best FinTech Award — Code4Change Hackathon 2025',
      description: 'Won among 100+ competing teams for the Crypto-Pay blockchain payment project built on Solana.',
    },
    {
      icon: '☁️',
      title: 'Google Cloud Agentic AI Day — 2025',
      description:
        'Participant at the event organized by Hack2Skill. Explored cutting-edge agentic AI solutions on Google Cloud.',
    },
    {
      icon: '💻',
      title: 'EKAIVA Hackathon — Agamya Tech Summit 2025',
      description: 'Participated and showcased innovative tech solutions at this prestigious hackathon event.',
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning Certification',
      description:
        'Completed training in Artificial Intelligence, Machine Learning Fundamentals, and Google Cloud Platform (GCP).',
    },
  ],
  education: [
    {
      degree: 'MCA',
      institute: 'GM University, Davanagere, Karnataka',
      year: '2023–2025',
      cgpa: '7.70 / 10.00',
    },
    {
      degree: 'BCA',
      institute: 'SBC First Grade College, Davanagere, Karnataka',
      year: '2020–2023',
      cgpa: '7.76 / 10.00',
    },
  ],
  certifications: [
    'Artificial Intelligence',
    'Machine Learning Fundamentals',
    'Google Cloud Platform (GCP)',
    'Google Cloud Agentic AI Day (Hack2Skill, 2025)',
    'EKAIVA Hackathon — Agamya Tech Summit (2025)',
  ],
};

// GET /api/portfolio
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ owner: 'Nisha G' });
    if (!portfolio) {
      // Auto-seed on first request
      portfolio = await Portfolio.create(defaultData);
    }
    res.json(portfolio);
  } catch (err) {
    // Fallback: return static data if DB unavailable
    res.json(defaultData);
  }
};

// PUT /api/portfolio  (update)
const updatePortfolio = async (req, res) => {
  try {
    const updated = await Portfolio.findOneAndUpdate({ owner: 'Nisha G' }, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPortfolio, updatePortfolio };
