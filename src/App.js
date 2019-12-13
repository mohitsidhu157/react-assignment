import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import Products from './Products/Products'; 
class App extends React.Component {
 
  render(){
    return (
      <MuiThemeProvider>
        <Products/>
      </MuiThemeProvider>
    );
  }
 
}

export default App;
