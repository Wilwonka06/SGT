const taskRepo = require('../repository/TaskRepository');

const createTask = async (taskData) => {
    return await taskRepo.createTask(taskData);
}

const getAllTasks = async () => {
    return await taskRepo.getAllTasks();
}

const getTaskById = async (id) => {
    return await taskRepo.getTaskById(id);
}

const updateTask = async (id, taskData) => {
    return await taskRepo.updateTask(id, taskData);
}

const getTasksByDeveloper = async (developerId) => {
    return await taskRepo.getTasksByDeveloper(developerId);
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    getTasksByDeveloper
}