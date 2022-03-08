import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Status from './Status';
import CategoryList from './CategoryList';

function Category({ categories, status, handleStatus, addCategory}: any) {

  const [newCategory, setNewCategory] = useState("")


   const handleNewCategory = (event: any) => {
     setNewCategory(event.currentTarget.value)
   }

  const handleCategories = (event:any) => {
    event.preventDefault()
    if (newCategory) {
      
      addCategory(newCategory)
      setNewCategory("")
    }
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>EDIT CATEGORIES</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            EDIT CATEGORIES
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField onChange={handleNewCategory} sx={{ m: 1, width: '20ch' }} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button onClick={ handleCategories } sx={{ m: 1, width: '20ch' }} variant="contained">Add Category</Button>
            <CategoryList categories={categories} />
            <Status handleStatus={handleStatus} status={status} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Category