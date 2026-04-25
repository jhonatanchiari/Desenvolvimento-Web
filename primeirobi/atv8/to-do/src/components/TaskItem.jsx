function TaskItem({ task, onRemoveTask }) {
  return (
    <li className="task-item">
      <span className="task-text">{task.text}</span>
      <button
        type="button"
        className="remove-button"
        onClick={() => onRemoveTask(task.id)}
      >
        Remover
      </button>
    </li>
  )
}

export default TaskItem
