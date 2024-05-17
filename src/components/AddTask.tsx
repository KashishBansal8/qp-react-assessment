import React, { useState } from 'react';

const AddTask = ({ handleAddTask }) => {
    const [taskInput, setTaskInput] = useState("");

    return (
        <div>
            <form className='add-task-form' action="#" onSubmit={(e) => handleAddTask(e, taskInput, setTaskInput)}>
                <input placeholder='Add Task' type="text" id="taskInput" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                <input className='add-task-btn' type="submit" value="Add Task" />
            </form>
        </div>
    )
}

export default AddTask
