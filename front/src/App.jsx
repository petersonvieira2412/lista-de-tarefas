import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import TaskDetails from "./components/tasks/TaskDetails";

import './css/App.css';

const App = () => {
    const [tasks, setTasks] = useState([{
        id: 1, title: 'Estudar Programação', completed: false
    }, {
        id: 2, title: 'Ler Livros', completed: true
    }]);

    const handleTaskClick = (taskId) => {
        const clickedTask = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed }
            return task;
        });

        setTasks(clickedTask);
    }

    const handleTaskRemove = (taskId) => {
        const removeTask = tasks.filter((task) => task.id !== taskId);

        setTasks(removeTask);
    }

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            title: taskTitle, id: uuidv4(), completed: false
        }]

        setTasks(newTask);
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
                                    handleTaskClick={handleTaskClick}
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
