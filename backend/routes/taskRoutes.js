const express = require('express');
const router = express.Router();
const { getTasks, addTask, completeTask, deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', completeTask);
router.delete('/:id', deleteTask);

module.exports = router;