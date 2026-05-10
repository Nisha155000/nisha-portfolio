const express = require('express');
const router = express.Router();
const { getPortfolio, updatePortfolio } = require('../controllers/portfolioController');

router.get('/', getPortfolio);
router.put('/', updatePortfolio);

module.exports = router;
