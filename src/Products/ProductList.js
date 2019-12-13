import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
export default (props) =>{
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="overline" color="inherit" style={{flex : 1}}>
                        Product List
                    </Typography>
            
                </Toolbar>
            </AppBar>
            <List component="nav" aria-label="main mailbox folders">
                {
                    props.products.map(product=>(
                            <ListItem button >
                                <ListItemText primary={product.name} />
                                <ListItemText primary={product.price} />

                            </ListItem>
                    ))
                }
            </List>
     </React.Fragment>
    )
}