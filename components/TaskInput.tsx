import React from 'react'

const TaskInput = ({
  value,
  onChange,
}: {
  onChange: (v: string) => void
  value: string
}) => {
  return (
    <input
      className='input input-bordered flex-1'
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
      type='text'
      placeholder='Add a task'
    />
  )
}

export default TaskInput
