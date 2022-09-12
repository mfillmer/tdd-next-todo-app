import React from 'react'

const TaskList = ({
  tasks,
  removeTask,
}: {
  tasks: string[]
  removeTask: (i: number) => void
}) => {
  return (
    <ol>
      {!tasks.length ? (
        <li>No entries yet</li>
      ) : (
        tasks.map((t, i) => (
          <li onClick={() => removeTask(i)} key={t}>
            {t}
          </li>
        ))
      )}
    </ol>
  )
}

export default TaskList
