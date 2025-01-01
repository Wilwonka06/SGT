const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new Error('Token no proporcionado');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        req.user = user;
        req.token = token; 
        next();
    } catch (error) {
        console.error('Error en el middleware auth:', error.message);
        res.status(401).json({ error: 'Por favor autentícate' });
    }
};

module.exports = auth;



const isAdmin = (req, res, next) => {
    try {
        if (!req.user || !req.user.role) {
            return res.status(403).json({ error: 'Acceso denegado: rol no definido' });
        }

        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Acceso denegado: no eres administrador' });
        }

        next();
    } catch (error) {
        console.error('Error en el middleware isAdmin:', error.message);
        res.status(500).json({ error: 'Error al verificar permisos' });
    }
};

module.exports = isAdmin;


module.exports = { auth, isAdmin };