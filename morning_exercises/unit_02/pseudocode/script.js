//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
<<<<<<< HEAD
  var smallBarrelCost = 60;
  var largeBarrelCost = (total - (small * smallBarrelCost)) / large;

return largeBarrelCost;
=======
>>>>>>> 1adf54b31b00325091a1e29b9748ceb6834df5ee
};
barrels(2, 5, 825);










//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here


// 24,901


// - Find the distance of the earth circumference in miles
  var earthCircum = 24901;
// - Calculate the # of gallons used to travel around the earth
//   - circumference / MPG (miles per gallon)
    var numGal = earthCircum / milesPerGallon;
// - Calculate the cost:
//   - total gallons used * cost of fuel
    var total = numGal * fuelPrice;

 return total;
};
shipFuelCost(3, 12);

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(galCCJuice, perFruitCC, galKLJuice, perFruitKL){


// - Find the total amount of pure fruit juice (gal)

//   - Total of Costco pure fruit juice:
//     - percentage pure fruit juice * number of gallons
    var totalCostco = perFruitCC * galCCJuice;
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
    var totalKirk = perFruitKL * galKLJuice;
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
  var perFruitTotal = totalCostco + totalKirk;

// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice
  var galTotal = galCCJuice + galKLJuice;

// - Calculate (total pure fruit juice) / (total juice)
  var total = perFruitTotal / galTotal;

  return total;



};


calcFruitJuice(3, .20, 2, .55);



//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
