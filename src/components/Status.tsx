import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { useState } from 'react';

function Status({ handleStatus, status }: any) {
  const [newStatus, setNewStatus] = useState("")

  const handleNewStatu = (event: any) => {
    setNewStatus(event.currentTarget.value)
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
      <Button onClick={handleOpen}>EDIT STATUS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            EDIT STATUS
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <TextField onChange={handleNewStatu} sx={{ m: 1, width: '20ch' }} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button onClick={() => { handleStatus(newStatus) }} sx={{ m: 1, width: '20ch' }} variant="contained">Add Status</Button>

            <ul>
              {status.map((item: any) => <li>{item.title}
                <Button variant="contained">EDIT STATUS</Button> <Button variant="contained">X</Button>
              </li>
              )}

            </ul>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Status