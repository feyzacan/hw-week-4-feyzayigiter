import { useState } from 'react';
import Category from './Category';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Content() {

  interface Todos {
    title: string
    categoryId: number
    statusId: number
  }

  interface Categories {
    title: string
    categoryId: number
  }

  interface Status {
    statusId: number
    title: string
    categoryId: number
    color: string
  }

  const [todos, setTodos] = useState<Todos[]>([])
  const [categories, setCategories] = useState<Categories[]>([])
  const [status, setStatus] = useState<Status[]>([])
  
  const handleTodos = (newTodo: any, selectedCategory: any, selectedStatus: any) => {
    setTodos((prev: any) => ([...prev, { title: newTodo, categoryId: selectedCategory, statusId: selectedStatus }]))
  }

  let categoryId: number = 0
  const handleCategories = (newCategory: any) => {
    categoryId++
    setCategories((prev: any) => ([...prev, { title: newCategory, categoryId: categoryId }]))
  }

  let statusId: number = 0
  const handleStatus = (newStatus: any) => {
    statusId++
    setStatus((prev: any) => ([...prev, { title: newStatus, statusId: statusId, categoryId: 1, color: 'red' }]))
  }

  return (
    <div>
      <AddTodo handleTodos={handleTodos} categories={categories} />
      <TodoList todos={todos} />
      <Category handleCategories={handleCategories} handleStatus={handleStatus} categories={categories} status={status} />
    </div>
  )
}

export default Content