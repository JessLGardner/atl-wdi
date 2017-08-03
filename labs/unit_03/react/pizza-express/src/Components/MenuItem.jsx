import React, {Component} from 'react';

class MenuItem extends Component{
    render(){
        return(
            <div className="menu-item">
                <img src={this.props.pizza.image} alt=""/>
                <div className="menu-description">
                    <p className="menu-item-name">{this.props.pizza.name}</p>
                    <p>{this.props.pizza.price}</p>
                    <p>{this.props.pizza.description}</p>
               </div>
            </div>
        );
    }
}


export default MenuItem;

