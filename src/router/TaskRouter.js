const express = require('express');
const { auth, isAdmin } = require('../middleware/LoginMiddleware');
const { createTask, getAllTasks, getTaskById, updateTaskStatus, getTasksByDeveloper } = require('../controller/TaskController');
const { createTaskValidation, updateTaskStatusValidation, getTaskByDeveloperValidation } = require('../middleware/TaskMiddleware');

const router = express.Router();

router.post('/', auth, createTaskValidation, createTask);
router.get('/', auth, isAdmin, getAllTasks);
router.get('/:id', auth, getTaskById);
router.patch('/:id/status', auth, updateTaskStatusValidation, updateTaskStatus);
router.get('/developer/:id', auth, isAdmin, getTaskByDeveloperValidation, getTasksByDeveloper);

module.exports = router;