console.log('tamagotchi file is loaded');

//your class declaration here

class Tamagotchi {
  constructor(name, creatureType) {
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }
  cry(){
    // this.foodInTummy -= 1;
    // console.log('Current food in tummy: ' + this.foodInTummy);
    console.log(this.name);
    console.log('WAHH!!');
  }
}


//create new Tamagotchis

let tim = new Tamagotchi('Tim', 'floof');
let tam = new Tamagotchi('Tam', 'sprite');


//test out your Tamagotchies below via console.logs

// console.log(tim);
tim.cry();

// console.log(tam);
tam.cry();



