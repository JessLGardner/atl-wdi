import React, {Component} from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData.js';

class MenuList extends Component{
    render(){
        return(
            <div>
                {pizzaData.map((za, i)=>{
                    return <MenuItem key={i} pizza={za}/>
                })};
            </div>
        );
    }
}

export default MenuList;