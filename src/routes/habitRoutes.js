const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

router.route('/')
  .post(habitController.createHabit)
  .get(habitController.getHabits);

router.route('/:id')
  .put(habitController.updateHabit)
  .delete(habitController.deleteHabit);

module.exports = router;
