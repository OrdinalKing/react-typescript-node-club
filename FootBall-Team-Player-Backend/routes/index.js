const express = require('express');
const authRouter = require('./auth');
const competitionRouter = require('./competition');
const teamRouter = require('./team');
const playerRouter = require('./player');

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
router.use('/team', teamRouter);
router.use('/player', playerRouter);

module.exports = router;
