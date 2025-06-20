
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add a new task to get started!</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task._id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;