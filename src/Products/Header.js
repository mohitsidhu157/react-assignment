import React from 'react';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
export default (props) =>{
    return (
      <AppBar position="static" style={{textTransform : 'capitalize', fontSize : 16}}>
        <Toolbar>
          <Typography variant="overline" color="inherit" style={{flex : 1,  textTransform : 'capitalize', fontSize : 14}}>
            Product manager
          </Typography>
        <Button style={{color : 'white' , textTransform : 'capitalize', fontSize : 16}}>
            <ExitToAppOutlinedIcon/>
            <Link to="/" exact><span style={{color : 'white'}}>Logout</span></Link>
        </Button>
        </Toolbar>
      </AppBar>
 
    )
}