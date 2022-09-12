import { useState } from 'react'
import AddTaskButton from '../components/AddTaskButton'
import Header from '../components/Header'
import PrioCheckbox from '../components/PrioCheckbox'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'

export default function Home() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  const [isPrio, setIsPrio] = useState(false)

  const addTask = () => {
    if (isPrio) setTasks([input, ...tasks])
    else setTasks([...tasks, input])

    setIsPrio(false)
    setInput('')
  }

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
  return (
    <main className='w-full max-w-[80ch] break-words mx-auto p-4'>
      <Header />
      <form
        className='form flex space-x-2 items-center'
        onSubmit={(e) => e.preventDefault()}>
        <TaskInput value={input} onChange={setInput} />
        <PrioCheckbox checked={isPrio} onCheck={() => setIsPrio(!isPrio)} />
        <AddTaskButton onClick={() => addTask()} />
      </form>
      <TaskList removeTask={removeTask} tasks={tasks} />
    </main>
  )
}
