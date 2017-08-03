import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import SplashImage from './Components/SplashImage';
import Description from './Components/Description';
import MenuList from './Components/MenuList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> 
          <Navbar/>
        </div>
        <div> 
          <SplashImage/>
        </div>
        <div>
          <Description/>
        </div>
        <div>
          <MenuList/>
        </div>





      </div>
    );
  }
}

export default App;
