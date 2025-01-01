const Task = require('../models/Task');

const createTask = async (taskData) => {
    return await Task.create(taskData);
}

const getAllTasks = async () => {
    return await Task.find().populate('developerId', 'name email');
}

const getTaskById = async (id) => {
    return await Task.findById(id).populate('developerId', 'name email');
}

const updateTask = async (id, taskData) => {
    return await Task.findByIdAndUpdate(id, taskData, { new: true });
}

const getTasksByDeveloper = async (developerId) => {
    return await Task.find({ developerId }).populate('developerId', 'name email');
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    getTasksByDeveloper
}