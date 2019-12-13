import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CreateDialog from '../exercises/Dialogs/create';
export default (props) =>{
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="overline" color="inherit" style={{flex : 1}}>
            Exercise database
        </Typography>
        <CreateDialog muscles={props.muscles} onCreate={props.onCreate}/>
        </Toolbar>
      </AppBar>
 
    )
}