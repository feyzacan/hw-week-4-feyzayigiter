import { useState } from 'react'
import '../App.css'
import { Box, TextField } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import axios from 'axios'

function Auth({ setIsLogged }: any) {
  const [value, setValue] = useState<string>('0')
  const [registerFormData, setRegisterFormData] = useState<any>({})
  const [loginFormData, setLoginFormData] = useState<any>({})
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue)
  }

  const handleRegisterFieldChange = (event: any) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setRegisterFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleLoginFieldChange = (event: any) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setLoginFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleRegister = () => {
    axios.post('http://localhost:80/auth/register', registerFormData)
      .then((response) => {
        document.cookie = `token=${response.data.token}`
        setIsLogged(true)
      })
  }

  const handleLogin = () => {
    axios.post('http://localhost:80/auth/login', loginFormData)
      .then((response) => {
        document.cookie = `token=${response.data.token}`
        setIsLogged(true)
      })
  }

  return (
    <div>
      <Box
        sx={{
          width: '500px',
          marginX: 'auto',
          bgcolor: 'white',
          marginTop: 10,
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: 0 }}>
            <Tabs
              centered
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" value="0" />
              <Tab label="Register" value="1" />
            </Tabs>
          </Box>

          <TabPanel value="0">
            <TextField
              name="username"
              onChange={handleLoginFieldChange}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ marginY: 1 }}
            />
            <TextField
              name="password"
              onChange={handleLoginFieldChange}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ marginY: 1 }}
            />
            <Button onClick={handleLogin} fullWidth sx={{ marginY: 1 }} variant="contained">
              Login
            </Button>

          </TabPanel>
          <TabPanel value="1">
            <TextField
              name="username"
              onChange={handleRegisterFieldChange}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              sx={{ marginY: 1 }}
            />
            <TextField
              name="password"
              onChange={handleRegisterFieldChange}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ marginY: 1 }}
            />
            <TextField
              name="passwordConfirm"
              onChange={handleRegisterFieldChange}
              id="outlined-basic"
              label="Password Confirm"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ marginY: 1 }}
            />
            <Button onClick={handleRegister} fullWidth sx={{ marginY: 1 }} variant="contained">
              Register
            </Button>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default Auth