import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputAdornment from '@material-ui/core/InputAdornment';
import ProductRating from './ProductRating';
import Button from '@material-ui/core/Button';
const initialstate = {
                name: '',
                price: 0,
                rating: 0
            }
class ProductDetail extends React.Component {
    state = {
        product: initialstate,
        priceError: "",
        nameError: "",
        ratingError: ""
    }

    static getDerivedStateFromProps(props, state) {
        console.log("inside getDerivedStateFromProps")
        if (props.product !== state.product) {

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
        this.setState({ product })
    }
    updatePrice = (e) => {
        const product = this.state.product;
        if (isNaN(e.target.value)) {
            const priceError = "Please enter numbers only!";
            product.price = 0
            this.setState({ priceError, product })
        }
        else {
            product.price = +e.target.value;
            this.setState({ product })
        }
    }

    updateRating = (e) => {
        const product = this.state.product;
        product.rating = e.target.value;
        this.setState({ product })
    }
    deleteCurrentProduct = () => {
        this.setState({product:initialstate })
        this.props.deleteProduct();
    }
    cancelCurrentProduct = () => {
        this.setState({
            product : initialstate 
        })
        this.props.cancelProduct();
    }
    addTheProduct = () => {
        if (!this.state.product.name) {
            const nameError = "Name field can't be empty!";
            this.setState({ nameError })
            return;
        }
        else if (!this.state.product.rating) {
            const ratingError = "Please give some rating!";
            this.setState({ ratingError });
            return
        }
        else if (!this.state.product.price) {
            const priceError = "Please enter price of the product!";
            this.setState({ priceError });
            return
        }
        else {
            const product = this.state.product;
            this.setState({
                product: initialstate
            }
            ,()=>console.log("setState " + this.state.product.name))
            this.props.addProduct(product)
        }

    }
    render() {
        return (
            <div style={{ marginTop: 10 }} >
                <AppBar position="static" style={{ borderRadius: 2 }}>
                    <Toolbar>
                        <Typography variant="overline" color="inherit" style={{ flex: 1, textTransform: 'capitalize', fontSize: 14 }}>
                            Product Details
                        </Typography>
                        <Typography variant="overline" color="inherit" style={{ textTransform: 'capitalize', fontSize: 14 }}>
                            {
                                this.props.product.id ?
                                    `${this.props.product.name}(Product ID - ${this.props.product.id})`
                                    : "Product Name(Product ID)"
                            }
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <form>
                    <TextField
                        id="name"
                        label="Name"
                        value={this.state.product.name}
                        onChange={(e) => this.updateName(e)}
                        required
                        fullWidth
                    />
                    <Typography
                        variant="subtitle1"
                        style={{ color: 'red' }}>
                        {this.state.product.name ? "" : this.state.nameError}
                    </Typography>
                    <br /> <br />
                    <TextField
                        fullWidth
                        id="Price"
                        value={this.state.product.price}
                        label="Price"
                        required
                        onChange={(e) => this.updatePrice(e)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoneyIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        style={{ color: 'red' }}>
                        {this.state.priceError}
                    </Typography>
                    <br /><br />
                    <ProductRating rating={this.state.product.rating} updateRating={this.updateRating} />
                    <Typography
                        variant="subtitle1"
                        style={{ color: 'red' }}>
                        {this.state.ratingError}
                    </Typography>
                    <br /> <br />
                    <div style={{ float: 'Right', padding: 10, margin: 10 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled = {!(this.props.product.id === 0)}
                            onClick={() => this.addTheProduct()}
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled = {(this.props.product.id === 0)}
                            style={{ marginLeft: 10, backgroundColor: '#38ff87' }}
                            onClick={() => this.props.saveProduct(this.state.product)}

                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            disabled = {(this.props.product.id === 0)}
                            style={{ marginLeft: 10 }}
                            onClick={() => this.deleteCurrentProduct()}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled = {(this.props.product.id === 0)}
                            style={{ marginLeft: 10, backgroundColor: '#fcc37e' }}
                            onClick={() => this.cancelCurrentProduct()}
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