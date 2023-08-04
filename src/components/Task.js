import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const TaskText = styled.span`
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  width: 200px;
`;

const Task = ({ text, completed, onDelete, onToggle }) => {
    return (
        <TaskContainer completed={completed}>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            <TaskText>{text}</TaskText>
            <DeleteButton onClick={onDelete}>Удалить</DeleteButton>
        </TaskContainer>
    );
};

export default Task;
