import React, { useState } from 'react';
import TaskList from './TaskList';
import styled from 'styled-components';

const TodoAppContainer = styled.div`
  max-width: 900px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
`;

const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  width: 150px;
`;

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim() === '') return;

        const newTask = {
            id: Math.random().toString(36).substr(2, 9),
            text: taskText,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setTaskText('');
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <TodoAppContainer>
            <h2>Todo List</h2>
            <InputContainer>
                <TaskInput
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Введите новую задачу..."
                />
                <AddButton onClick={handleAddTask}>Добавить</AddButton>
            </InputContainer>
            <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
        </TodoAppContainer>
    );
};

export default TodoApp;
