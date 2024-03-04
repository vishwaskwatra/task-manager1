import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskTable tasks={tasks} onDelete={deleteTask} onUpdateStatus={updateStatus} />
    </div>
  );
};

export default TaskManager;
