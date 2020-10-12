const express = require('express');

const teamController = require('../controllers/team');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.post('/list', requireAuth, teamController.getTeams);

module.exports = router;
