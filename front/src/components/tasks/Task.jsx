import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './css/Task.css'

const Task = ({ task,  handleTaskClick, handleTaskRemove }) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return (
        <div className="tasks-container" style={task.completed ? {border: '6px solid chartreuse'} : {}}>
            <div onClick={() => handleTaskClick(task.id)} className="task-title">
                <h5>{task.title}</h5>
            </div>
            <div className="buttons-container">
                <button onClick={ handleTaskDetailsClick } className="details-task-button">
                    <CgInfo/>
                </button>
                <button onClick={ ()=> handleTaskRemove(task.id) } className="remove-task-button">
                    <CgClose/>
                </button>
            </div>
        </div>
    );
};

export default Task;