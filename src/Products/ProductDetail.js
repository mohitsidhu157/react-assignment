import React from 'react';
import {AppBar, Toolbar, Typography, TextField } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputAdornment from '@material-ui/core/InputAdornment';
import ProductRating from './ProductRating';
import Button from '@material-ui/core/Button';
class ProductDetail extends React.Component {
    state = {  }
    render() {
        return (
           <div style={{marginTop : 10}} >
               <AppBar position="static" style={{ borderRadius : 2}}>
                    <Toolbar>
                        <Typography variant="overline" color="inherit" style={{flex : 1}}>
                            Product Details
                        </Typography>
                        <Typography variant="overline" color="inherit">
                            {
                                this.props.product.id?
                                `${this.props.product.name}(Product ID - ${this.props.product.id})`
                                : "Product Name(Product ID)"
                                
                            }
                            
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <form>

                    <TextField id="name" label="Name" fullWidth/>
                    <br/> <br/>
                    <TextField
                        fullWidth
                        id="Price"
                        label="Price"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachMoneyIcon />
                            </InputAdornment>
                        ),
                        }}
                    />
                     <br/> <br/>
                    <ProductRating/>
                    <br/> <br/>
                    <div style={{float : 'Right', padding : 10, margin : 10}}>
                        <Button variant="contained" color="primary" >
                            Add
                        </Button>
                        <Button variant="contained" color="primary" style={{marginLeft : 10, backgroundColor : '#38ff87'}}>
                            Save
                        </Button>
                        <Button variant="contained" color="secondary" style={{marginLeft : 10}}>
                            Delete
                        </Button>
                        <Button variant="contained" color="primary" style={{marginLeft : 10, backgroundColor : '#fcc37e'}}>
                            Cancel
                        </Button>
                    </div>
                    
                </form>
           </div>
        );
    }
}

export default (ProductDetail);