const mongoose = require('mongoose');

// Skill sub-schema
const SkillSchema = new mongoose.Schema({
  icon: String,
  name: String,
  detail: String,
});

// Internship point sub-schema
const InternPointSchema = new mongoose.Schema({
  text: String,
});

// Project sub-schema
const ProjectSchema = new mongoose.Schema({
  icon: String,
  title: String,
  year: String,
  description: String,
  tags: [String],
  isWinner: { type: Boolean, default: false },
});

// Achievement sub-schema
const AchievementSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
});

// Main Portfolio schema
const PortfolioSchema = new mongoose.Schema(
  {
    owner: { type: String, default: 'Nisha G' },
    tagline: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    about: String,
    badges: [String],
    skills: [SkillSchema],
    internship: {
      title: String,
      location: String,
      year: String,
      points: [InternPointSchema],
      tags: [String],
    },
    projects: [ProjectSchema],
    achievements: [AchievementSchema],
    education: [
      {
        degree: String,
        institute: String,
        year: String,
        cgpa: String,
      },
    ],
    certifications: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', PortfolioSchema);
