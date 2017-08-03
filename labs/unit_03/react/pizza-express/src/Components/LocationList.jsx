import React, {Component} from 'react';
import locationData from '../locationData.js';
import Location from './Location';

class LocationList extends Component{
    render(){
        return(
            <div>
                {locationData.map((loc, i)=>{
                    return <Location key={i} location={loc}/>
                })};
            </div>
        );
    }
}

export default LocationList;