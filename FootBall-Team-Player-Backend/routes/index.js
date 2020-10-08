const express = require('express');
const authRouter = require('./auth');
const competitionRouter = require('./competition');
// const { requireAuth } = require('../middlewares/auth');

require('../config/passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'football-league-team-search app rest api',
  });
});

router.use('/auth', authRouter);
router.use('/competition', competitionRouter);

module.exports = router;
