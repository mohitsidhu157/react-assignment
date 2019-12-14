import React from 'react';
import {AppBar, Toolbar, Typography, TextField } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputAdornment from '@material-ui/core/InputAdornment';
import ProductRating from './ProductRating';
import Button from '@material-ui/core/Button';
class ProductDetail extends React.Component {
    state = {
        product : {
            name : '',
            price : 0,
            rating : 0
        }       
    }
   
    static getDerivedStateFromProps(props, state) {
        if (props.product !== state.product) {
            console.log('inside getDerivedStateFromProps')
          return {
            product: props.product
          };
        }
        // Return null to indicate no change to state.
        return null;
      }
    updateName = (e) => {
        const product = this.state.product;
        product.name = e.target.value;
        this.setState({product : product}, ()=>console.log("name : "+ this.state.product.name))
    }
    updatePrice = (e) => {
        const product = this.state.product;
        product.price = +e.target.value;
        this.setState({product : product}, ()=>console.log("name : "+ this.state.product.price))
    }
    updateRating = (e) => {
        const product = this.state.product;
        product.rating = e.target.value;
        this.setState({product : product}, ()=>console.log("name : "+ this.state.product.rating))
    }
    // checkCurrentProduct = () => {
        
    // }
    deleteCurrentProduct = () =>{
        this.setState({
            product : {
                name : '',
                price : 0,
                rating : 0
            }  
        })
        this.props.deleteProduct();
    }
    cancelCurrentProduct = () =>{
        this.setState({
            product : {
                name : '',
                price : 0,
                rating : 0
            } 
        })
        this.props.cancelProduct();
    }
    addTheProduct = () => {
        
        const product = this.state.product;

        this.setState({
            product : {
                name : '',
                price : 0,
                rating : 0
            }   
        },()=>this.props.addProduct(product))
    } 
    render() {
        return (
           <div style={{marginTop : 10}} >
               <AppBar position="static" style={{ borderRadius : 2}}>
                    <Toolbar>
                        <Typography variant="overline" color="inherit" style={{flex : 1, textTransform : 'capitalize', fontSize : 14}}>
                            Product Details
                        </Typography>
                        <Typography variant="overline" color="inherit" style={{ textTransform : 'capitalize', fontSize : 14}}>
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
                    <TextField 
                        id="name" 
                        label="Name" 
                        value={this.state.product.name} 
                        onChange={(e)=>this.updateName(e)}
                        fullWidth
                    />
                    <br/> <br/>
                    <TextField
                        fullWidth
                        id="Price"
                        value={this.state.product.price} 
                        label="Price"
                        onChange={(e)=>this.updatePrice(e)}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachMoneyIcon />
                            </InputAdornment>
                        ),
                        }}
                    />
                     <br/><br/>
                    <ProductRating rating={this.state.product.rating} updateRating = {this.updateRating}/>
                    <br/> <br/>
                    <div style={{float : 'Right', padding : 10, margin : 10}}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={()=>this.addTheProduct()}
                        >
                            Add
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{marginLeft : 10, backgroundColor : '#38ff87'}}
                            onClick={()=>this.props.saveProduct(this.state.product)}
                            
                        >
                            Save
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{marginLeft : 10}}
                            onClick={()=>this.deleteCurrentProduct()}
                        >
                            Delete
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            style={{marginLeft : 10, backgroundColor : '#fcc37e'}}
                            onClick={()=>this.cancelCurrentProduct()}
                        >
                            Cancel
                        </Button>
                    </div>            
                </form>
           </div>
        );
    }
}

export default (ProductDetail);