import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {AppBar, Toolbar, Typography } from '@material-ui/core';

class Login extends Component{
    render(){
        return (
            <React.Fragment>
                <Grid container spacing={3} direction="column" alignItems="center">
			        <Grid item sm={12}  >
			          <Paper fullWidth>
			          	    <AppBar 
			          	    	position="static" 
			          	    	style={{borderRadius : 2, textTransform : 'capitalize', fontSize : 16}}
			          	    	
			          	    >
                				<Toolbar>
                    				<Typography variant="overline" color="inherit" style={{flex : 1, textTransform : 'capitalize', fontSize : 14}}>
                        				Product List
                    				</Typography>
           			            </Toolbar>
            				</AppBar>
			          </Paper>
			        </Grid>
			     </Grid>
            </React.Fragment>
        )
    }
}
export default Login;