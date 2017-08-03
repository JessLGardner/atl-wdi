import React, { Component } from 'react';
import SplashImage from './Components/SplashImage';
import Description from './Components/Description';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
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
