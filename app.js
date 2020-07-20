let name = "Levin Batallones";
let age = 25;
let isCool = true;
const bike = ['Yamaha', 'Honda', 'Kawasaki', 'Harley', 'Triump'];

// const tesla = {
//     industry: 'Electric Cars',
//     ceo: 'Elon Musk',
//     yearFounded: 2003,
//     foundingMembers: ['Elon Musk', 'JB Straubol', 'Martin Eberard'],
//     stockTicker: 'TSLA',
//     vehicles: {
//         vehicleOne: 'Model S',
//         vehicleTwo: 'Model X',
//         vehicleThree: 'Model 3'
//     },
//     print: function() {
//         console.log(this.ceo + " is the CEO of Tesla");
//     }
// }

// tesla.stockPrice = 1643.00;
// tesla.stockPrice
// console.log(name);
// console.log(age);
// console.log(isCool);
// console.log(bike);
// console.log(tesla)
// console.log(tesla.vehicles.vehicleThree)

// tesla.print();


// function printBike (array) {
//     // array.forEach(myBike => {
//     //     console.log(myBike)
//     // });
//     // for (let i = 0; i < array.length; i++) {
//     //     console.log(array[i])
//     // }
// }
// printBike(bike);
// printBike(tesla.foundingMembers)

//-------------------------------DOM--------------------------

const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My first JS review'

container.appendChild(headerTwo)
//Two ways in adding class on the element
headerTwo.classList.add('subtitle', 'header-two');
//headerTwo.setAttribute('class', 'header-two');

headerTwo.classList.remove('header-two')
console.log(headerTwo)


headerTwo.addEventListener('click', function() {
    headerTwo.textContent = "Levin";
});

//make another element;

const headerThree = document.createElement('h2');
headerThree.textContent = "Friends";

container.appendChild(headerThree);
const list = document.createElement('ul');

 for (let i = 0; i < bike.length; i++) {
            let bikes = bike[i]
            
        //create a li
        const listItems = document.createElement('li');
        listItems.textContent = bikes

        list.appendChild(listItems)
    }
    console.log(list)

headerThree.addEventListener('click', function() {
    container.appendChild(list);
})
