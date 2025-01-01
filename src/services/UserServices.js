
const userRepo = require('../repository/UserRepository');

const createUser = async (userData) => {
    return await userRepo.createUser(userData);
}

const getAllUsers = async (userData)=>{
    return await userRepo.getAllUsers(userData)
}

const getUserById = async (id) => {
    return await userRepo.getUserById(id);
}

const findUserByDocument = async (document)=>{
    return await userRepo.findUserByDocument(document)
}

const findUserByEmail = async (email)=>{
    return await userRepo.findUserByEmail(email)
}

const updateUser = async (id, userData) => {
    return await userRepo.updateUser(id, userData);
}
module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    findUserByDocument,
    findUserByEmail,
    updateUser
}