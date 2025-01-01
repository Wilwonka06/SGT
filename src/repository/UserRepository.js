const User = require('../models/User');

const createUser = async (userData) => {
    return await User.create(userData);
}

const getUserById = async (userId) => {
    return await User.findByuserId(id);
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
}

const getAllUsers = async ()=>{
    return await User.find()
}

const findUserByDocument = async (document) => {
    return await User.findOne({ document });
}

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    getAllUsers,
    findUserByDocument,
    findUserByEmail
}