import React from 'react';
import Task from "./Task";

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task title={task.title} completed={task.completed}/>
            ))}
        </>
    );
};

export default Tasks;