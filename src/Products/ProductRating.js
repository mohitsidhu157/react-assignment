import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
class ProductRating extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{borderRadius : 2}}>
                    <Toolbar>
                        <Typography variant="overline" color="inherit" style={{flex : 1,  textTransform : 'capitalize', fontSize : 14}}>
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
                        value={this.props.rating}  
                        onChange = {(e)=>this.props.updateRating(e)}
                    >
                    {
                        [0,1,2,3,4,5,6,7,8,9,10].map(i=>{
                            if(i === 0)
                            return <MenuItem value={0} key={i}>None</MenuItem>

                            return <MenuItem value={i} key={i}>{i}</MenuItem>
                        })
                    }
                    
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default (ProductRating);