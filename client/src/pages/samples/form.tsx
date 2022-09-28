import React from 'react'
import axios from 'axios'
import {TextField, Box, Button} from '@mui/material'


const form = () => {
    const [form, setForm] = React.useState({email: '', password: ''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name] : e.target.value })
    }

    React.useEffect(()=>{
        axios.get('/api/auth/local/me').then(({data})=> console.log('ME', data))
    },[])

  return (
    <Box sx={{p: 4, display: 'flex', flexDirection: 'column'}}>
    <TextField
      id="email"
      label="email"
      name="email"
      value={form.email}
      onChange={handleChange}
    />
    <TextField
    id="password"
    name="password"
    label="password"
    value={form.password}
    onChange={handleChange}
  />
  <Button type="submit" onClick={()=> axios.post('http://localhost:8080/api/auth/local', form).then(({data: {data}})=> console.log('LOGIN', data) )}>Enviar</Button>
  </Box>
  )
}

export default form