import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductStock from './ProductStock';
import { Grid, Paper } from '@material-ui/core';
import ProductDetail from './ProductDetail';
const styles = {
	st: { padding: 20, margin: 10, height: 500, overflow: 'auto' }
}
const initialProductState = {
	id: 0,
	name: '',
	price: 0,
	rating: 0
}
export default class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					name: 'Nokia lumia',
					price: 20,
					rating: 8
				},
				{
					id: 2,
					name: 'Sony Experia',
					price: 300.00,
					rating: 8
				},
				{
					id: 3,
					name: 'Apple iphone',
					price: 1000.00,
					rating: 8
				},
				{
					id: 4,
					name: 'Samsung galaxy',
					price: 600.00,
					rating: 8
				},
				{
					id: 5,
					name: 'Black Pearl',
					price: 700.00,
					rating: 8
				},
				{
					id: 6,
					name: 'Huawei P10',
					price: 200.00,
					rating: 8
				},
				{
					id: 7,
					name: 'LG G40',
					price: 600.00,
					rating: 8
				},
				{
					id: 8,
					name: 'One Plus 6T',
					price: 300.00,
					rating: 8
				}
			],
			product: JSON.parse(JSON.stringify(initialProductState)),
			totalProducts: 8
		}
	}
	selectProduct = product => {
		this.setState({ product })
	}
	
	addProduct = (product) => {
        const newProduct = {
          ...product,
          id : this.state.totalProducts + 1,
		}        
		console.log(" initialProductState ", initialProductState)
        const newProductsArray =  [...this.state.products, newProduct]
        this.setState({
          products : newProductsArray,
          totalProducts : this.state.totalProducts + 1,
          product : initialProductState
        })
    }
	saveProduct = (newProduct) => {
		const currentProducts = this.state.products;
		currentProducts[this.state.product.id - 1] = newProduct;
		this.setState({ products: currentProducts, product: initialProductState })
	}
	deleteProduct = () => {
		const products = this.state.products;
		const newProducts = products.filter(product => product.id !== this.state.product.id)
		this.setState({
			products: newProducts,
			totalProducts: this.state.products - 1,
			product: initialProductState
		})
	}
	cancelProduct = () => {
		this.setState({
			product: initialProductState
		})
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<Grid container>
					<Grid item sm={4}>
						<Paper style={styles.st}>
							<ProductList products={this.state.products} selectProduct={this.selectProduct} />
						</Paper>
					</Grid>
					<Grid item sm={8} >
						<Paper style={styles.st}>
							<ProductStock stock={this.state.totalProducts} />
							<ProductDetail
								product={this.state.product}
								addProduct={this.addProduct}
								saveProduct={this.saveProduct}
								deleteProduct={this.deleteProduct}
								cancelProduct={this.cancelProduct}
							/>
						</Paper>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}