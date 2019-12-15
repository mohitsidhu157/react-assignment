import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
class Login extends Component {
	state = {
		emailError: "",
		passwordError: "",
		invalid: true
	}
	validateEmail = (e) => {
		if ((!e.target.value.includes('@')) || (!e.target.value.includes('.'))) {
			let emailError = "Invalid email";
			this.setState({ emailError, invalid : true})
		}
		else {
			this.setState({ emailError: "", email : e.target.value  },()=>this.validate())
		}
		
	}
	validatePassword = (e) => {
		if (e.target.value.length < 8) {
			let passwordError = "Password must be 8 characters long!"
			this.setState({ passwordError, invalid : true  })
		}
		else {
			this.setState({ passwordError: "", password : e.target.value }, ()=>this.validate())
		}
		
	}
	validate = () => {
		if (!(this.state.emailError || this.state.passwordError) && (this.state.email) && (this.state.password)) {
			this.setState({ invalid: false })
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push("/products")
	}
	render() {
		return (
			<React.Fragment>
				<Grid container direction="column" justify="center" alignItems="center">
					<Grid item sm={12} style={{ width: 500 }} >
						<Paper style={{ padding: 20, marginTop: '30%' }}>
							<AppBar
								position="static"
								style={{ borderRadius: 2, textTransform: 'capitalize', fontSize: 16, alignItems: 'center' }}
							>
								<Toolbar >
									<Typography variant="overline" color="inherit" style={{ flex: 1, textTransform: 'capitalize', fontSize: 14 }}>
										Product Manager
                    				</Typography>
								</Toolbar>
							</AppBar>
							<form onSubmit={this.handleSubmit}>
								<br />
								<TextField

									label="Email"
									type="email"
									fullWidth
									onChange={this.validateEmail}

								/>
								<Typography
									variant="subtitle1"
									style={{ color: 'red' }}>
									{this.state.emailError}
								</Typography>
								<br /> <br />
								<TextField

									label="Password"
									type="password"
									onChange={this.validatePassword}
									fullWidth

								/>
								<Typography
									variant="subtitle1"
									style={{ color: 'red' }}>
									{this.state.passwordError}
								</Typography>
								<br /> <br />
								<Button
									variant="contained"
									color="secondary"
									type="submit"
									fullWidth
									disabled={this.state.invalid}
								>
									Log In
								</Button>
							</form>

						</Paper>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}
export default withRouter(Login);