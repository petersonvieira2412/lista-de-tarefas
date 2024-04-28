const express = require('express');
const router = express.Router();
const taskService = require('./service');

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/newTask', async (req, res) => {
    try {
        const { title } = req.body;
        const savedTask = await taskService.createTask(title);
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/taskUpdate', async (req, res) => {
    try {
        const task = req.body;
        const updatedTask = await taskService.updateTask(task);
        res.status(201).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/taskRemove/:taskId', async (req, res) => {
    try {
        const { taskId } = req.params;
        await taskService.deleteTask(taskId);
        res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir a tarefa:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
