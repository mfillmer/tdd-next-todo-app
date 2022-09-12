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
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
      type='text'
      placeholder='Add a task'
    />
  )
}

export default TaskInput
