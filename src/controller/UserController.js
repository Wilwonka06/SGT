
const userServices = require('../services/UserServices');

const createUser = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userServices.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Esta mal, Esta mal, En algo' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllUsers = async (req, res) =>{
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUserByDocument = async (req, res) =>{
    try{
        const user = await userServices.getUserByDocument(req.params.document);
        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'})
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getUserByEmail = async (req, res) =>{
    try{
        const user = await userServices.getUserByEmail(req.params.document);
        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'})
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await userServices.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    getUserByDocument,
    getUserByEmail,
    updateUser
}