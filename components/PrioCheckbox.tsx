import React from 'react'

const PrioCheckbox = ({
  checked,
  onCheck,
}: {
  checked: boolean
  onCheck: () => void
}) => {
  return (
    <div className='form-control'>
      <label htmlFor='prio' className='label cursor-pointer space-x-1'>
        <span>Priority</span>
        <input
          className='toggle'
          checked={checked}
          onChange={onCheck}
          type='checkbox'
          name='prio'
          id='prio'
        />
      </label>
    </div>
  )
}

export default PrioCheckbox
