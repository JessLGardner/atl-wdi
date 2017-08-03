import React, {Component} from 'react';

class Location extends Component{
    render(){
        return(
            <div className="location">
                <h3>{this.props.location.name}</h3>
                <h3>{this.props.location.address}</h3>
                <h3>{this.props.location.phone}</h3>
            </div>
        );
    }
}


export default Location;

