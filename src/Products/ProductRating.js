import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
class ProductRating extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <AppBar position="static" style={{borderRadius : 2}}>
                    <Toolbar>
                        <Typography variant="overline" color="inherit" style={{flex : 1}}>
                            Rating
                        </Typography>
                    </Toolbar>
                   
                </AppBar>
                <br/>
                <FormControl fullWidth>
                    <InputLabel>Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        
                       
                    >
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(i=>(
                            <MenuItem value={i}>{i}</MenuItem>
                        ))
                    }
                    
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default (ProductRating);