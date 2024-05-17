import React from 'react'

const TaskList = ({ taskList, handleChangeTaskStatus }) => {
    return (
        <ul>
            {
                taskList?.map((task, id) => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" name="checkbox" id={id} autoFocus
                                value={task.isCompleted}
                                onChange={() => handleChangeTaskStatus(id)} />
                            <span className={task.isCompleted ? "strike-task" : ""}>{task.taskInput}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TaskList
