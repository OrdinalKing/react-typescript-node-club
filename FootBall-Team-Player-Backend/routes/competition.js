const express = require('express');

const competitionController = require('../controllers/competition');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.get('/list', requireAuth, competitionController.getCompetitons);

router.post('/import', requireAuth, competitionController.fetchCompetitions);

module.exports = router;
