import React, {Component} from 'react';
import SplashPizza from '../images/splashpizza.jpg';

class SplashImage extends Component {
    render(){
        return(
            <div className="splash-image">
                <img src={SplashPizza} alt=""/>
            </div>
        );
    }
}

export default SplashImage;