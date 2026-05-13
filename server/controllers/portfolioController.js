const Portfolio = require('../models/Portfolio');

// Seed / default data based on the latest portfolio resume.
const defaultData = {
  owner: 'Nisha G',
  tagline: 'MCA Graduate · MERN Stack Developer · AI & NLP Enthusiast · Hackathon Winner 🏆',
  email: 'nisha.mca.dev@gmail.com',
  phone: '+91-9353599628',
  linkedin: 'https://linkedin.com/in/nisha-g-425605274',
  github: 'https://github.com/nisha155000',
  about:
    'MCA graduate from GM University, Davanagere (CGPA 7.70) and BCA graduate from SBC First Grade College (CGPA 7.76). Passionate about MERN stack development, AI-powered automation, NLP, and building practical products that improve real-world workflows.',
  badges: ['🎓 MCA · CGPA 7.70', '🎓 BCA · CGPA 7.76', '💻 MERN Stack', '🤖 AI / NLP', '🏆 Hackathon Winner'],
  skills: [
    { icon: '⚛️', name: 'React.js', detail: 'Frontend UI / SPA' },
    { icon: '🟢', name: 'Node.js', detail: 'Backend Runtime' },
    { icon: '🚂', name: 'Express.js', detail: 'REST API Framework' },
    { icon: '🍃', name: 'MongoDB', detail: 'NoSQL Database' },
    { icon: '🌐', name: 'HTML5 / CSS3', detail: 'Responsive Web UI' },
    { icon: '🔗', name: 'REST APIs', detail: 'Integration & Testing' },
    { icon: '🐍', name: 'Python', detail: 'Automation & AI Development' },
    { icon: '☕', name: 'Java', detail: 'Programming Fundamentals' },
    { icon: '🤖', name: 'Artificial Intelligence', detail: 'Applied AI Concepts' },
    { icon: '🗣️', name: 'Natural Language Processing', detail: 'Intent & Entity Workflows' },
    { icon: '🎤', name: 'Voice Bot Development', detail: 'Conversational Systems' },
    { icon: '💬', name: 'Conversational AI', detail: 'Dialogue Flow Design' },
    { icon: '🧠', name: 'Intent Recognition', detail: 'Intent Classification' },
    { icon: '🧩', name: 'DSA & OOP', detail: 'Core Computer Science' },
    { icon: '🗄️', name: 'DBMS & OS', detail: 'System Fundamentals' },
  ],
  skillSections: [
    {
      title: 'Programming Languages',
      items: 'Python, Java',
    },
    {
      title: 'Web Development',
      items: 'MERN Stack (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, REST APIs',
    },
    {
      title: 'AI and Machine Learning',
      items: 'Artificial Intelligence, Natural Language Processing (NLP), Voice Bot Development, Conversational AI, Intent Recognition',
    },
    {
      title: 'Core Computer Science',
      items: 'Data Structures and Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems',
    },
  ],
  internship: {
    title: '🤖 AI Voice Bot Developer Intern',
    location: 'GM University, Davanagere, Karnataka',
    year: '2025',
    points: [
      {
        text: 'Designed and deployed an AI-powered Voice Bot using Python and NLP libraries to automate customer query handling, reducing manual response time by approximately 40%.',
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
        'Built a Python and NLP-powered voice bot with intent recognition and REST API integration, reducing manual response time by 40% across 500+ interactions.',
      tags: ['Python', 'NLP', 'REST API', 'Conversational AI'],
      isWinner: false,
    },
    {
      icon: '💰',
      title: 'Crypto-Pay – Blockchain Payment Application on Solana',
      year: '2025',
      description:
        'Built a QR-based crypto payment app on Solana with real-time transaction tracking, adopted by 50+ users; won Best of FinTech at Code4Change Hackathon 2025 among 100+ teams.',
      tags: ['Solana', 'Web3.js', 'JavaScript', 'React.js', '🏆 Best of FinTech 2025'],
      isWinner: true,
    },
    {
      icon: '🚦',
      title: 'Traffic Offence Tracker and Accident Management System',
      year: '2024',
      description:
        'Developed a web app for real-time accident reporting and traffic offence tracking with role-based dashboards and a normalized SQL database, cutting reporting time by 60%.',
      tags: ['Python', 'SQL', 'JavaScript', 'REST API'],
      isWinner: false,
    },
  ],
  achievements: [
    {
      icon: '🥇',
      title: 'Best of FinTech Award – Code4Change Hackathon 2025',
      description: 'Recognized among 100+ competing teams for the Crypto-Pay blockchain payment project built on Solana.',
    },
    {
      icon: '☁️',
      title: 'Google Cloud Agentic AI Day – 2025',
      description:
        'Participant at the event organized by Hack2Skill. Explored cutting-edge agentic AI solutions on Google Cloud.',
    },
    {
      icon: '💻',
      title: 'EKAIVA Hackathon – Agamya Tech Summit 2025',
      description: 'Participated and showcased innovative tech solutions at this hackathon event.',
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
    'Google Cloud Agentic AI Day – Participant, organized by Hack2Skill, 2025',
    'EKAIVA Hackathon – Participant, Agamya Tech Summit, 2025',
  ],
};

// GET /api/portfolio
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ owner: 'Nisha G' });

    if (!portfolio) {
      portfolio = await Portfolio.create(defaultData);
      return res.json(portfolio);
    }

    const portfolioObject = portfolio.toObject();
    res.json({
      ...defaultData,
      ...portfolioObject,
      skillSections: portfolioObject.skillSections?.length ? portfolioObject.skillSections : defaultData.skillSections,
      certifications: portfolioObject.certifications?.length ? portfolioObject.certifications : defaultData.certifications,
    });
  } catch (err) {
    // Fallback: return static data if DB unavailable
    res.json(defaultData);
  }
};

// PUT /api/portfolio
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
