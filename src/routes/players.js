const express = require('express');
const router = express.Router();
const playerControllers = require('../controllers/players');

router.get('/players',playerControllers.getAllPlayers);
router.get('/players-name',playerControllers.getPlayerbyName);
router.post('/create-player',playerControllers.createPlayer);

module.exports = router;