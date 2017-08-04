import React, {Component} from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData.js';

class MenuList extends Component{
    render(){
        return(
            <div className="menu"><a name="menu"/>
                <h1>MENU:</h1>
                 <div className="menu-container">
                    {pizzaData.map((za, i)=>{
                        return <MenuItem key={i} pizza={za}/>
                    })}
                </div>
            </div>
        );
    }
}

export default MenuList;