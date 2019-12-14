import React from 'react';
import {AppBar, Typography} from '@material-ui/core';

export default (props) =>{
    return (
      <AppBar position="static" style={{background : '#e8e8e8', color : 'black'}}>
        <Typography 
            variant="overline" 
            color="inherit" 
            style={{padding : 15, margin : 'auto', textTransform : 'capitalize', fontSize : 13}}
        >
            Product count :  {props.stock}
        </Typography> 
       
      </AppBar>
 
    )
}