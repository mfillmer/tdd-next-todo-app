import React from 'react'

const AddTaskButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className='btn' onClick={onClick}>
      Add
    </button>
  )
}

export default AddTaskButton
