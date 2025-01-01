const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    priority: { type: String, enum: ['alta', 'media', 'baja'], required: true },
    state: { type: String, enum: ['pendiente', 'progreso', 'completada'], default: 'pendiente' },
    developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});


module.exports = mongoose.model('Task', TaskSchema)