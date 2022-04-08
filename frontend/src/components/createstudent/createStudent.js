import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student , setStudent]= useState({
      //regNo:0,
      studentName:'',
      email:'',
      phoneNumber:''

  });

  const createStudent = () => {
   axios.post('http://localhost:5000/students', student).then(()=> {
     window.location.reload(false);
   })
  }

  return (
  <>
      <h2>Create user</h2>
    <form className={classes.root} noValidate autoComplete="off">
     
    <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event)=>{
        setStudent({...student, studentName:event.target.value})
    }}/>
    <TextField id="outlined-basic" label="email" variant="outlined" value={student.grade} onChange={(event)=>{
        setStudent({...student, email:event.target.value})
     }}/>
    <TextField id="outlined-basic" label="phoneNo." variant="outlined"value={student.section} onChange={(event)=>{
        setStudent({...student, phoneNumber:event.target.value}) 
    }}/>

    <Button variant="contained" color="primary" onClick={createStudent}>
        Create
    </Button>
    </form>
   </>
  );
}
