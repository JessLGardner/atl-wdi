import React, {Component} from 'react';
import DescripImg from '../images/pizzaoven.jpg';


class Description extends Component {
    render(){
        return (
            <div className="description">
                <img className="description img" src={DescripImg} alt=""/>
                <p className="description p" >Andouille beef chicken chuck cow drumstick fatback filet ham hock kielbasa loin meatball meatloaf mignon pancetta pastrami pig prosciutto sirloin spare strip swine tenderloin turducken venison. Bresaola capicola chuck corned drumstick kielbasa leberkas loin meatloaf pancetta pork shank shoulder spare strip tenderloin tongue turducken. Bacon beef belly capicola chicken frankfurter ham kielbasa leberkas meatloaf mignon pancetta pastrami ribeye rump salami shank steak tongue turkey. Andouille beef biltong bresaola chicken chop drumstick fatback filet flank kielbasa loin round salami sausage shank sirloin strip t-bone tenderloin tongue tri-tip. Beef brisket drumstick fatback filet frankfurter hock jerky kielbasa pastrami ribs round shankle swine tail tongue turducken.</p>
            </div>
        );
    }
}

export default Description;

