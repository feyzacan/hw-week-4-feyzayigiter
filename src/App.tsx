import { useState, useEffect } from 'react'
import './App.css'
import Auth from './components/Auth'
import Content from './components/Content'

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(';')?.shift();
}

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  useEffect(() => {
    const token = getCookie("token")
    if (token) setIsLogged(true)
  }, [])

  return (
    <div className="App">

      {isLogged ? <Content /> : <Auth setIsLogged={setIsLogged} />}

    </div>)
}

export default App

