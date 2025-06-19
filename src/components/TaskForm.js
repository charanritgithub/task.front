const TaskForm = ({ task, setTask, onSubmit, buttonText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="task-form">
      <div className="form-group">
        <label>Title *</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          rows="3"
        />
      </div>
      
      <div className="form-group">
        <label>Status</label>
        <div className="status-options">
          {['todo', 'in_progress', 'done'].map(status => (
            <label key={status}>
              <input
                type="radio"
                name="status"
                value={status}
                checked={task.status === status}
                onChange={handleChange}
              />
              {status.replace('_', ' ')}
            </label>
          ))}
        </div>
      </div>
      
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="btn primary">{buttonText}</button>
      </div>
    </form>
  );
};

export default TaskForm;