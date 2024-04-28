import React, {useState} from 'react';

import "./css/AddTask.css";
import Button from "../buttons/Button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e)=>{
        const task = e.target.value;
        setInputData(task);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTaskClick();
        }
    }

    return (
        <div className="add-task-container">
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="add-task-input"
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;