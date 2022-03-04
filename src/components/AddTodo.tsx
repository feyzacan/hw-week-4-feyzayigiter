import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import CategoryOptions from './CategoryOptions';
import StatusOptions from './StatusOptions';

function AddTodo({ handleTodos, todos, categories, status }: any) {

  const [newTodo, setNewTodo] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")

  const handleNewTodo = (event: any) => {
    setNewTodo(event.currentTarget.value)
  }

  const handleSelectedCategory = (event: any) => {
    setSelectedCategory(event.target.value)
  }

  const handleSelectedStatus = (event: any) => {
    setSelectedStatus(event.target.value)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{ display: 'flex' }}>

      <TextField onChange={handleNewTodo} sx={{ m: 1, width: '20ch' }} id="outlined-basic" label="Todo" variant="outlined" />
      <CategoryOptions categories={categories} />
      <StatusOptions status={status} />
      <Button onClick={() => { handleTodos(newTodo, selectedCategory, selectedStatus) }} sx={{ m: 1, width: '20ch' }} variant="contained">Add Category</Button>

    </div>
  );
}

export default AddTodo