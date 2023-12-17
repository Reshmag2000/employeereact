import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';

const Employeeform = () => {
    const [form,setForm]=useState({        
        name:'',
        designation:'',
        location:'',
        salary:''
    })

    function capValue(){
        axios.post('https://jsonplaceholder.typicode.com/users/add',form).then((res)=>{
           alert(`The response from api is ${res.data.id}`);
        })

   }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          required
          id="outlined-required"
          placeholder='Name'
          label='Name'
          value={form.name}
          onChange={(e)=>{
            setForm({...form,name:e.target.value});
          }}
        />

        <TextField
          required
          id="outlined-required"
          placeholder='designation'
          label='designation'
          value={form.designation}
          onChange={(e)=>{
            setForm({...form,designation:e.target.value});
          }}
        />
        
        <TextField
          id="outlined-required"
          label="location"
          type="location"
          value={form.location}
          onChange={(e)=>{
            setForm({...form,location:e.target.value});
          }}
        />

        <TextField
          id="outlined-number"
          label="salary"
          type="number"
          value={form.salary}
          onChange={(e)=>{
            setForm({...form,salary:e.target.value});
          }}
        />

      </div>
      <Button variant="contained" onClick={capValue}>submit</Button>
      </Box>
    </div>
  )
}

export default Employeeform;