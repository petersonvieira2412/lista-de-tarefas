import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import TaskDetails from "./components/tasks/TaskDetails";

import { taskService } from "./services/taskService";
import './css/App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const tasksData = await taskService.fetchTasks();
                setTasks(tasksData);
            } catch (error) {
                console.error('Erro ao buscar as tasks:', error);
            }
        }

        fetchData();
    }, []);

    async function handleTaskUpdate (taskId) {
        try {
            const clickedTask = tasks.map((task) => {
                if (task._id === taskId) return { ...task, completed: !task.completed }
                return task;
            });
            await taskService.updateTask(clickedTask);

            setTasks(clickedTask);
        } catch (error) {
            console.error('Erro ao atualizar a task:', error);
        }
    }

    async function handleTaskRemove (taskId) {
        try {
            await taskService.removeTask(taskId);
            const updatedTasks = tasks.filter((task) => task._id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Erro ao remover a task:', error);
        }
    }

    async function handleTaskAddition (taskTitle) {
        try {
            const newTask = await taskService.createTask(taskTitle);
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Erro ao adicionar a task:', error);
        }
    }

    return (
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <AddTask
                                    handleTaskAddition={handleTaskAddition}
                                />
                                <Tasks
                                    tasks={tasks}
                                    handleTaskClick={handleTaskUpdate}
                                    handleTaskRemove={handleTaskRemove}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/:taskTitle"
                        element={<TaskDetails />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
