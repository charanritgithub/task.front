import { Link } from 'react-router-dom';

const TaskItem = ({ task, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="task-card">
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta">
          <span className={`status ${task.status}`}>
            {task.status.replace('_', ' ')}
          </span>
          <span className="due-date">{formatDate(task.dueDate)}</span>
        </div>
      </div>
      <div className="task-actions">
        <Link to={`/edit/${task._id}`} className="btn">Edit</Link>
        <button onClick={() => onDelete(task._id)} className="btn delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;