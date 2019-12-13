import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import { Grid, Paper , Typography, List, ListItem, ListItemText} from '@material-ui/core';
const styles = {
    st : {padding : 20, margin : 10, height : 500, overflow : 'auto'}
}
export default class Products extends Component{
    state = {
        products : [
          {
            id : 1,
            name : 'Nokia lumia',
            pricee : 20,
            rating : 8
          },
          {
            id : 1,
            name : 'Nokia lumia',
            pricee : 20,
            rating : 8
          },{
            id : 1,
            name : 'Nokia lumia',
            pricee : 20,
            rating : 8
          },{
            id : 1,
            name : 'Nokia lumia',
            pricee : 20,
            rating : 8
          },
        ]
      }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Grid container>
                    <Grid item sm={4}>
                        <Paper style={styles.st}>
                            <ProductList products={this.state.products}/>
                        </Paper>
                    </Grid>
                    <Grid item sm={8} >
                        <Paper style={styles.st}>
                    
                        </Paper>
                
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}