import React, { FC, useState } from 'react'
import AddTask from './AddTask.tsx'
import TaskList from './TaskList.tsx';

interface TodoItem {
    id: number;
    taskInput: string;
    isCompleted: boolean;
}

const TodoApplicationPage: FC<TodoItem> = () => {
    const [taskList, setTaskList] = useState<TodoItem[]>([]);
    let isTaskPresent: Boolean = false;
    const handleAddTask = (e, taskInput, setTaskInput) => {
        e.preventDefault();
        if (!taskInput.length) {
            alert("Please add task value!");
            return;
        }
        taskList.map((list) => {
            if (list.taskInput === taskInput) {
                alert("Task already present!");
                isTaskPresent = true;
                return;
            }
        })
        if (!isTaskPresent) {
            setTaskList([...taskList, { "id": Math.random(), taskInput, "isCompleted": false }]);
        }

        setTaskInput("");
    }

    const handleChangeTaskStatus = (id) => {
        let tasks = taskList.map((task, index) => {
            if (id === index) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        })
        setTaskList(tasks)
    }
    return (
        <div className='todo-appln'>
            <h1>Task Application</h1>
            <AddTask handleAddTask={handleAddTask} />
            <TaskList taskList={taskList} handleChangeTaskStatus={handleChangeTaskStatus} />
        </div>
    )
}

export default TodoApplicationPage
