//import React from 'react';
import Crousel from './Crousel'
import Formlogin from './Formlogin'
import Grid from '@mui/material/Unstable_Grid2';

function index() {
  return (
    <>
    {/* <h2>Login Page</h2> */}
    <Grid container
    >
      <Grid xs={12} sm={8}>
        <Crousel ></Crousel>
      </Grid>
      <Grid xs={12} sm={3}>

    <Formlogin></Formlogin>
      </Grid>

    </Grid>

    </>
  )
}

export default index
