function TaskForm({ taskInput, onTaskInputChange, onSubmit }) {
  return (
    <form className="task-form" autoComplete="off" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="task-input">
        Digite uma tarefa
      </label>
      <input
        id="task-input"
        name="task"
        type="text"
        placeholder="Digite uma tarefa"
        maxLength="80"
        value={taskInput}
        onChange={(event) => onTaskInputChange(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskForm
