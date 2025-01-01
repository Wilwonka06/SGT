const express = require('express');
const connectDB = require('./config/database');
const login = require('./router/LoginRouter')
const user = require('./router/UserRouter')
const task = require('./router/TaskRouter')

const app = express();
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>¡Bienvenido(a) al Sistema de Gestión de Tareas!</h1>')
});

app.use('/api/users', user);
app.use('/api/auth', login);
app.use('/api/tasks', task);


module.exports = app;