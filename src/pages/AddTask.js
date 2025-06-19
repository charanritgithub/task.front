import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    dueDate: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', task);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <TaskForm 
        task={task} 
        setTask={setTask} 
        onSubmit={handleSubmit} 
        buttonText="Add Task" 
      />
    </div>
  );
};

export default AddTask;