import React, {Component} from 'react';
import locationData from '../locationData.js';
import Location from './Location';

class LocationList extends Component{
    render(){
        return(
            <div id="locations"><a name="location"/>
                <h1 >LOCATIONS:</h1>
                    <div className="locations">
                    {locationData.map((loc, i)=>{
                        return <Location key={i} location={loc}/>
                    })}
                    </div>
            </div>
        );
    }
}

export default LocationList;