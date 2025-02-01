import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleComplete = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span>{task.title}</span>
          <div>
            <button onClick={() => handleComplete(task._id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;