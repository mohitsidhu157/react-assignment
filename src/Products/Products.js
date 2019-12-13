import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductStock from './ProductStock';
import { Grid, Paper , Typography, List, ListItem, ListItemText} from '@material-ui/core';
import ProductDetail from './ProductDetail';
const styles = {
    st : {padding : 20, margin : 10, height : 500, overflow : 'auto'}
}
export default class Products extends Component{
    state = {
        products : [
          {
            id : 1,
            name : 'Nokia lumia',
            price : 20,
            rating : 8,
            stock : 8
          },
          {
            id : 2,
            name : 'Sony Experia',
            price : 300.00,
            rating : 8,
            stock : 8
          },
          {
            id : 3,
            name : 'Apple iphone',
            price : 1000.00,
            rating : 8,
            stock : 8
          },
          {
            id : 4,
            name : 'Samsung galaxy',
            price : 600.00,
            rating : 8,
            stock : 8
          },
          {
            id : 5,
            name : 'Black Pearl',
            price : 700.00,
            rating : 8,
            stock : 8
          },
          {
            id : 6,
            name : 'Huawei P10',
            price : 200.00,
            rating : 8,
            stock : 8
          },
          {
            id : 7,
            name : 'LG G40',
            price : 600.00,
            rating : 8,
            stock : 8
          },
          {
            id : 8,
            name : 'One Plus 6T',
            price : 300.00,
            rating : 8,
            stock : 8
          }
        ], 
        product : {
            id : 0,
            name : '',
            price : 0,
            rating : 0,
            stock : 0
        }
      }
      selectProduct = product => {
          this.setState({product : product}, ()=>console.log(this.state.product))
      }
    render(){
        return (
            <React.Fragment style={ {fontSize : 13, textTransform : 'capitalize'}}>
                <Header/>
                <Grid container>
                    <Grid item sm={4}>
                        <Paper style={styles.st}>
                            <ProductList products={this.state.products} selectProduct={this.selectProduct}/>
                        </Paper>
                    </Grid>
                    <Grid item sm={8} >
                        <Paper style={styles.st}>
                            <ProductStock stock={this.state.product.stock}/>
                            <ProductDetail product={this.state.product}/>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}