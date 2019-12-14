import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import Products from './Products/Products'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
class App extends React.Component {
 
  render(){
    return (
    	<Router>
	      <MuiThemeProvider>
		    <Switch>
	        	<Route exact path="/">
	            	<Login/>
	          	</Route>
	          	<Route path="/products">
	            	<Products/>
	          	</Route>
	          </Switch>
	        
	      </MuiThemeProvider>
      </Router>
    );
  }
 
}

export default App;
