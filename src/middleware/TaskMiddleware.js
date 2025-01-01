const { body, param } = require('express-validator');

const createTaskValidation = [
    body('title').isString().isLength({ min: 1 }).withMessage('El título debe ser un texto y tener al menos 1 caracter'),
    body('description').isString().isLength({ min: 1 }).withMessage('La descripción debe ser un texto y tener al menos 1 caracter'),
    body('date').isISO8601().withMessage('La fecha debe ser una fecha válida'),
    body('priority').isIn(['alta', 'media', 'baja']).withMessage('La prioridad debe ser alta, media o baja'),
    body('developerId').isMongoId().withMessage('El ID del desarrollador debe ser un ID de MongoDB válido')
];

const updateTaskStatusValidation = [
    param('id').isMongoId().withMessage('El ID de la tarea no es válido'),
    body('state').isIn(['pendiente', 'progreso', 'completada']).withMessage('El estado debe ser pendiente, progreso o completada')
];

const getTaskByDeveloperValidation = [
    param('id').isMongoId().withMessage('El ID del desarrollador no es válido')
];

module.exports = {
    createTaskValidation,
    updateTaskStatusValidation,
    getTaskByDeveloperValidation
};