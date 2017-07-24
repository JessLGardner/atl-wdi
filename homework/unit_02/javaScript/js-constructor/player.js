console.log('player file is loaded');

class Tamagotchi {
  constructor() {
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }
  cry(){
    this.foodInTummy -= 1;
    console.log('Current food in tummy: ' + this.foodInTummy);
    console.log('WAHH!!');
  }
}

let tim = new Tamagotchi();
let tam = new Tamagotchi();

console.log(tim);
tim.cry();

console.log(tam);
tam.cry();



var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player
