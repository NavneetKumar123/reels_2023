//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

function Formlogin() {
  return (
   <>
   <div>Login Form</div>
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src="insta.png" alt="" height="50px" />
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" margin="normal" />
        </div>
        <div>
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal" 
        /></div>
        <Button variant="contained" size="large">Contained</Button>
       
      </CardContent>
      
    </Card>
   </>
  )
}

export default Formlogin
