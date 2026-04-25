import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTaskInput] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const text = taskInput.trim()

    if (!text) {
      return
    }

    const newTask = {
      id: Date.now(),
      text,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
    setTaskInput('')
  }

  function handleRemoveTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <main className="app">
      <section className="card" aria-labelledby="titulo-principal">
        <Header
          eyebrow="ATIVIDADE AULA 8"
          title="To-Do List"
          subtitle="Adicione tarefas e remova cada item com o botão Remover."
        />

        <TaskForm
          taskInput={taskInput}
          onTaskInputChange={setTaskInput}
          onSubmit={handleSubmit}
        />

        <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
      </section>
    </main>
  )
}

export default App
