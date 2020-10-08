const express = require('express');

const competitionController = require('../controllers/competition');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.get('/competitions', requireAuth, competitionController.getCompetitons);

router.post(
  '/competitions',
  requireAuth,
  competitionController.fetchCompetitions
);

module.exports = router;
