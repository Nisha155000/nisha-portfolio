# Nisha G — Portfolio (MERN Stack)

A fully structured MERN (MongoDB, Express, React, Node.js) version of Nisha's portfolio, split from a single `index.html` into a maintainable project.

## 📁 Project Structure

```
nisha-portfolio/
├── package.json              ← root (run scripts for both)
│
├── server/                   ← Node.js + Express backend
│   ├── index.js              ← server entry point
│   ├── package.json
│   ├── .env.example          ← copy to .env and fill in values
│   ├── models/
│   │   └── Portfolio.js      ← Mongoose schema
│   ├── controllers/
│   │   └── portfolioController.js  ← business logic + seed data
│   └── routes/
│       └── portfolio.js      ← API routes
│
└── client/                   ← React frontend
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js           ← React entry
        ├── index.css          ← all global styles
        ├── App.js             ← root component, fetches data
        └── components/
            ├── Clouds.js
            ├── Sun.js
            ├── NavBar.js
            ├── DoraemonWalk.js
            ├── HomePanel.js
            ├── SkillsPanel.js
            ├── InternshipPanel.js
            ├── ProjectsPanel.js
            ├── AchievementsPanel.js
            └── ResumePanel.js
```

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm run install:all
```

### 2. Configure environment
```bash
cd server
cp .env.example .env
# Edit .env and set your MONGO_URI
```

### 3. Run both server & client together
```bash
npm run dev
```

- **Backend API**: http://localhost:5000
- **Frontend**:   http://localhost:3000

> **Note:** MongoDB is optional for development. The server automatically falls back to built-in seed data if no database is connected.

## 🌐 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/portfolio   | Fetch portfolio data     |
| PUT    | /api/portfolio   | Update portfolio data    |

## ✏️ Updating Content

All portfolio content lives in **`server/controllers/portfolioController.js`** inside the `defaultData` object. On first run it seeds this data into MongoDB automatically. After that, update via the PUT API or directly in MongoDB.
