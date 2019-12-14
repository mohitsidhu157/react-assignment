import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Products from './Products/Products';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './Login/Login';
const theme = createMuiTheme();
class App extends React.Component {

	render() {
		return (
			<Router>
				<MuiThemeProvider theme={theme}>
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>`
	          	<Route path="/products">
							<Products />
						</Route>
					</Switch>

				</MuiThemeProvider>
			</Router>
		);
	}

}

export default App;
