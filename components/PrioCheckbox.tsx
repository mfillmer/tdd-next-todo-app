import React from 'react'

const PrioCheckbox = ({
  checked,
  onCheck,
}: {
  checked: boolean
  onCheck: () => void
}) => {
  return (
    <label htmlFor='prio'>
      <span>Priority</span>
      <input
        checked={checked}
        onChange={onCheck}
        type='checkbox'
        name='prio'
        id='prio'
      />
    </label>
  )
}

export default PrioCheckbox
