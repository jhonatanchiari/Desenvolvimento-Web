import TaskItem from './TaskItem'

function TaskList({ tasks, onRemoveTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">Nenhuma tarefa cadastrada.</p>
  }

  return (
    <ul className="task-list" aria-live="polite">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
      ))}
    </ul>
  )
}

export default TaskList
