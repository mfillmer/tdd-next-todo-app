import React from 'react'

const AddTaskButton = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Add</button>
}

export default AddTaskButton
