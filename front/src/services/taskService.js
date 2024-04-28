import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const taskService = {
    async createTask(title) {
        try {
            const response = await axios.post(`${baseURL}/newTask`, {title});
            return response.data;
        } catch (error) {
            console.error('Erro ao adicionar a task:', error);
            throw error;
        }
    },

    async fetchTasks() {
        try {
            const response = await axios.get(`${baseURL}/tasks`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar as tasks:', error);
            throw error;
        }
    },

    async updateTask(task) {
        try {
            const response = await axios.post(`${baseURL}/taskUpdate`, task);
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar a task:', error);
            throw error;
        }
    },

    async removeTask(taskId) {
        try {
            const response = await axios.get(`${baseURL}/taskRemove/${taskId}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao deletar a task:', error);
            throw error;
        }
    }
}
export { taskService };
