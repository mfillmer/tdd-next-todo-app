import '@testing-library/jest-dom'
import { getAllByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../pages/index'

describe('Home', () => {
  it('shows a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /todo app/i })
    expect(heading).toBeInTheDocument()
  })
  it('shows an input field', () => {
    render(<Home />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute(
      'placeholder',
      expect.stringMatching(/add a task/i)
    )
  })
  it('shows an empty list with an hint', () => {
    render(<Home />)
    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
    expect(list).toHaveTextContent(/no entries yet/i)
  })
  it('shows a button for adding tasks', () => {
    render(<Home />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/add/i)
  })
  it('shows a priority checkbox', () => {
    render(<Home />)

    const checkbox = screen.getByLabelText(/priority/i)

    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })
})

//as cypress does not run in gitpod, integration tests will be perfomed by jest
describe('User can add tasks', () => {
  test('add one task', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await user.type(input, 'task')
    await user.click(button)

    const list = screen.getByRole('list')
    expect(list).toHaveTextContent('task')
  })
  test('add multiple tasks', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await user.type(input, 'task')
    await user.click(button)
    await user.type(input, 'task 2')
    await user.click(button)

    const list = screen.getByRole('list')
    const items = getAllByRole(list, 'listitem')
    expect(items).toHaveLength(2)
    expect(items[0].textContent).toEqual('task')
    expect(items[1].textContent).toEqual('task 2')
  })
  test('add tasks and tasks with priority', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const priority = screen.getByRole('checkbox')

    await user.type(input, 'task')
    await user.click(button)
    await user.type(input, 'task 2')
    await user.click(button)
    await user.click(priority)
    await user.type(input, 'task 3')
    await user.click(button)
    await user.type(input, 'task 4')
    await user.click(button)

    const list = screen.getByRole('list')
    const items = getAllByRole(list, 'listitem')
    expect(items).toHaveLength(4)
    expect(items[0].textContent).toEqual('task 3')
    expect(items[1].textContent).toEqual('task')
    expect(items[2].textContent).toEqual('task 2')
    expect(items[3].textContent).toEqual('task 4')
  })
})

describe('User can delete tasks', () => {
  test('add tasks and delete them', async () => {
    const user = userEvent.setup()
    render(<Home />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const priority = screen.getByRole('checkbox')

    await user.type(input, 'task')
    await user.click(button)
    await user.type(input, 'task 2')
    await user.click(button)
    await user.type(input, 'task 3')
    await user.click(button)

    let list = screen.getByRole('list')
    let items = getAllByRole(list, 'listitem')

    await user.click(items[1])

    list = screen.getByRole('list')
    items = getAllByRole(list, 'listitem')

    expect(items).toHaveLength(2)
    expect(items[1].textContent).toEqual('task 3')

    await user.click(items[1])
    await user.click(items[0])

    list = screen.getByRole('list')

    expect(list).toHaveTextContent(/no entries yet/i)
  })
})
