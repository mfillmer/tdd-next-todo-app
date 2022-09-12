import React from 'react'

const TaskList = ({
  tasks,
  removeTask,
}: {
  tasks: string[]
  removeTask: (i: number) => void
}) => {
  return (
    <ol className='my-2'>
      {!tasks.length ? (
        <li className='w-full text-center my-20 text-xl text-gray-400'>
          No entries yet
        </li>
      ) : (
        tasks.map((t, i) => (
          <li
            className='py-2 space-x-1 flex items-center'
            onClick={() => removeTask(i)}
            key={i}>
            <span className='before:content-["×"] before:pr-4 flex-1 max-w-full '>
              {t}
            </span>
          </li>
        ))
      )}
    </ol>
  )
}

export default TaskList
