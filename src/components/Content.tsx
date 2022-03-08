import { useEffect, useState } from 'react';
import Category from './Category';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import axios from 'axios';

const url = "http://localhost:80";

function Content({token}:any) {

  const [todos, setTodos] = useState<Todos[]>([])
  const [categories, setCategories] = useState<Categories[]>([])
  const [status, setStatus] = useState<Status[]>([])

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    console.log(token)
    getCategories(); //test için (500 error)
    //getTodos();
  }, []);

  const getCategories = () => {
    axios
      .get(`${url}/category`, config)
      .then((response) => setCategories(response.data),
      ).catch((error) => { //hata mesajını eklemek için ekledim https://stackoverflow.com/questions/50950011/axios-post-request-fails-with-error-status-code-500-internal-server-error
          console.error(error.response);     // NOTE - use "error.response.data` (not "error")
      })
  };

  const addCategory = (data:any) => {
    const body = { title: data };
    axios
      .post(`${url}/category`, body, config)
      .then((response) => setCategories([...categories, response.data])
      );
      
  };

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

/*
  // useEffect(() => { //cookie içerisinden token alma
  //   const cookie = getCookie('token')
  //   setToken(cookie)
    
  // }, []) */
  
  const handleTodos = (newTodo: any, selectedCategory: any, selectedStatus: any) => {
    setTodos((prev: any) => ([...prev, { title: newTodo, categoryId: selectedCategory, statusId: selectedStatus }]))
  }

  let categoryId: number = 0
  const handleCategories = (newCategory: any) => {
    categoryId++
    setCategories((prev: any) => ([...prev, { title: newCategory, categoryId: categoryId }]))
  }

  function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts?.pop()?.split(';')?.shift();
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
      <Category
      addCategory={addCategory} 
      handleCategories={handleCategories} 
      setCategories = {setCategories} 
      handleStatus={handleStatus} 
      categories={categories} 
      status={status} />
    </div>
  )
}

export default Content