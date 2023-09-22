

import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import { Typography } from '@mui/material';
//import Typography from '@mui/material/Typography';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const loginHelper = ()=>{
    console.log(email," ",password, " ");
  }

  return (
   <>
   {/* <div>Login Form</div> */}
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="insta.png" alt="" height="80px" />
        <div>
          <Typography variant='body1'
          style={{color:'grey'}}
          >Signup to see photos and videos of your friend</Typography>
        <TextField id="outlined-basic"
         style={{maxWidth:'800px'}}
         label="email" 
         variant="outlined" 
         margin="normal" 
        //  fullWidth="true"
         value={email}
         onChange={(e) => {setEmail(e.target.value)}} />
         
        </div>
        <div>
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal" 
          // fullWidth="true"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        /></div>
        <div>
          <TextField
          id="outlined-basic"
          label="Full Name"
          type="text"
         
          autoComplete="current-password"
          margin="normal" 
          // fullWidth="true"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        /></div>
        <Button variant="contained" size="large"
        onClick={loginHelper}
        >
          <Typography variant="h6">
          Log in
          </Typography>
          </Button>
       
      </CardContent>
      
    </Card>
    <Card sx={{ minWidth: 275 ,
      }}>
      <CardContent>
       <Typography variant='p'>
        Dont have an account
        <Button variant='text'>
          <Typography>Sign Up</Typography>
        </Button>

       </Typography>
       
      </CardContent>
      
    </Card>
   </>
  )
}

export default Signup