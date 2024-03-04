import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, status });
    setName('');
    setDescription('');
    setStatus('Not Started');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
