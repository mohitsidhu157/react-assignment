import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default (props) => {
    return (
        <>
            <AppBar position="static" style={{ borderRadius: 2, textTransform: 'capitalize', fontSize: 16 }}>
                <Toolbar>
                    <Typography variant="overline" color="inherit" style={{ flex: 1, textTransform: 'capitalize', fontSize: 14 }}>
                        Product List
                    </Typography>

                </Toolbar>
            </AppBar>
            <List component="ul" aria-label="main mailbox folders">
                {
                    props.products.map(product => (
                        <ListItem
                            button
                            key={product.id}
                            onClick={(e) => props.selectProduct(product)}
                            selected={product.id === props.selectedProductId}
                        >
                            <ListItemText primary={product.name} style={{ flex: 6 }} />
                            <ListItemText primary={`$${product.price.toFixed(2)}`} />
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}