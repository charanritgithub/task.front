import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    dueDate: ''
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`/api/tasks/${id}`);
        setTask({
          title: res.data.title,
          description: res.data.description || '',
          status: res.data.status,
          dueDate: res.data.dueDate ? res.data.dueDate.split('T')[0] : ''
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        navigate('/');
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/tasks/${id}`, task);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm 
        task={task} 
        setTask={setTask} 
        onSubmit={handleSubmit} 
        buttonText="Update Task" 
      />
    </div>
  );
};

export default EditTask;