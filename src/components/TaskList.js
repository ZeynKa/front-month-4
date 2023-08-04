import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    text={task.text}
                    completed={task.completed}
                    onDelete={() => onDelete(task.id)}
                    onToggle={() => onToggle(task.id)}
                />
            ))}
        </div>
    );
};

export default TaskList;
