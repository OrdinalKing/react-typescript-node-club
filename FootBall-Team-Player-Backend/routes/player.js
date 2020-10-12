const express = require('express');

const playerController = require('../controllers/player');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.post('/list', requireAuth, playerController.getPlayers);

module.exports = router;
