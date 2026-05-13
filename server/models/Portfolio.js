const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  icon: String,
  name: String,
  detail: String,
});

const InternPointSchema = new mongoose.Schema({
  text: String,
});

const ProjectSchema = new mongoose.Schema({
  icon: String,
  title: String,
  year: String,
  description: String,
  tags: [String],
  isWinner: { type: Boolean, default: false },
});

const AchievementSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
});

const SkillSectionSchema = new mongoose.Schema(
  {
    title: String,
    items: String,
  },
  { _id: false }
);

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
    skillSections: [SkillSectionSchema],
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
