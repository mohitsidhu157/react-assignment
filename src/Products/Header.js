import React from 'react';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
export default (props) =>{
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="overline" color="inherit" style={{flex : 1}}>
           Product manager
        </Typography>
        <Button style={{color : 'white'}}>
            <ExitToAppOutlinedIcon/>
            Logout
        </Button>
        </Toolbar>
      </AppBar>
 
    )
}