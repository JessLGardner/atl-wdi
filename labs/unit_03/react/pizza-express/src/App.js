import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import SplashImage from './Components/SplashImage';
import Description from './Components/Description';

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




      </div>
    );
  }
}

export default App;
