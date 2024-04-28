import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from "../buttons/Button";
import "./css/TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    return (
        <>
            <div className="tasks-details-container">
                <h2>{params.taskTitle}</h2>
                <div className="task-detail-container">
                    <p>texto bla bla bla</p>
                </div>
            </div>
            <div className="back-button-container">
                <Button onClick={handleBack}>Voltar</Button>
            </div>
        </>
    );
}

export default TaskDetails;
