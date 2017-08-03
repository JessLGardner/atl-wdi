import React, {Component} from 'react';

class MenuItem extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.pizza.name}</h3>
                <h3>{this.props.pizza.price}</h3>
                <h3>{this.props.pizza.description}</h3>
                <img src={this.props.pizza.image} alt=""/>
            </div>
        );
    }
}


export default MenuItem;

