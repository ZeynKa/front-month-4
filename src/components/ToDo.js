import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <div>
            <h2>Список задач</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={handleChange}
                    placeholder="Введите новую задачу..."
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default TodoApp;
