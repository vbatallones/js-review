let name = "Levin Batallones";
let age = 25;
let isCool = true;
const bike = ['Yamaha', 'Honda', 'Kawasaki', 'Harley', 'Triump'];

const tesla = {
    industry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubol', 'Martin Eberard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Model S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function() {
        console.log(this.ceo + " is the CEO of Tesla");
    }
}

tesla.stockPrice = 1643.00;
tesla.stockPrice
console.log(name);
console.log(age);
console.log(isCool);
console.log(bike);
console.log(tesla)
console.log(tesla.vehicles.vehicleThree)

tesla.print();


function printBike (array) {
    // array.forEach(myBike => {
    //     console.log(myBike)
    // });
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
    // }
}
printBike(bike);
printBike(tesla.foundingMembers)