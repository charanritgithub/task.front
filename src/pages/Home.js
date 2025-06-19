import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    try {
      let url = '/api/tasks';
      if (filter !== 'all') {
        url += `?status=${filter}`;
      }
      const res = await axios.get(url);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/add" className="btn">Add New Task</Link>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default Home;