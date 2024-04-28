const Task = require('./collection');
const slugify = require('slugify');

const taskService = {
    async createTask (title) {
        try {
            const slug = slugify(title, { lower: true });
            const newTask = new Task({ title, slug, completed: false });
            return await newTask.save();
        } catch (error) {
            console.error('Erro ao criar a tarefa:', error);
            throw error;
        }
    },

    async updateTask (task) {
        try {
            return await Task.findByIdAndUpdate(
                task._id,
                { completed: task.completed },
                { new: true }
            );
        } catch (error) {
            console.error('Erro ao atualizar a tarefa:', error);
            throw error;
        }
    },

    async deleteTask (taskId) {
        try {
            await Task.findByIdAndDelete(taskId);
        } catch (error) {
            console.error('Erro ao excluir a tarefa:', error);
            throw error;
        }
    },

    async getAllTasks () {
        try {
            return await Task.find();
        } catch (error) {
            console.error('Erro ao buscar as tarefas:', error);
            throw error;
        }
    }
};

module.exports = taskService;
