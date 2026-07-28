const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('API de Tareas - Tarea 3 Git Flow');
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: nextId++,
    title,
    description,
    completed: false,
    createdAt: new Date().toString()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;