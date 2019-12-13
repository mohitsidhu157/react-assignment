import React from 'react';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
export default (props) =>{
    return (
      <AppBar position="static" style={{textTransform : 'capitalize', fontSize : 16}}>
        <Toolbar>
          <Typography variant="overline" color="inherit" style={{flex : 1}}>
            Product manager
          </Typography>
        <Button style={{color : 'white' , textTransform : 'capitalize', fontSize : 16}}>
            <ExitToAppOutlinedIcon/>
            Logout
        </Button>
        </Toolbar>
      </AppBar>
 
    )
}