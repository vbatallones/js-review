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

// const container = document.querySelector('.container');
// console.log(container);

// const headerTwo = document.createElement('h2');
// headerTwo.textContent = 'My first JS review'

// container.appendChild(headerTwo)
// //Two ways in adding class on the element
// headerTwo.classList.add('subtitle', 'header-two');
// //headerTwo.setAttribute('class', 'header-two');

// headerTwo.classList.remove('header-two')
// console.log(headerTwo)


// headerTwo.addEventListener('click', function() {
//     headerTwo.textContent = "Levin";
// });

// //make another element;

// const headerThree = document.createElement('h2');
// headerThree.textContent = "Friends";

// container.appendChild(headerThree);
// const list = document.createElement('ul');

//  for (let i = 0; i < bike.length; i++) {
//             let bikes = bike[i]
            
//         //create a li
//         const listItems = document.createElement('li');
//         listItems.textContent = bikes

//         list.appendChild(listItems)
//     }
//     console.log(list)

// headerThree.addEventListener('click', function() {
//     container.appendChild(list);
// })



//Problem Solving

//what do I start with
//what do I hope to end up with

//understand problem
//where the issue start

//break it down into more manageable problem

//fizzbuzz
//Write a function that does the following;
    //take in an array
    //check each number in array
    //if the number is divisible by 5 and 3 === fizzbuzz
    //if the number is divisible by 3 === Fizz
    //if the number is divisible by 5 === buzz

    // function fizzBuzz(array) {

    //     let result = [];
        
    //     for (let i = 0; i < array.length; i++) {
    //       let num = array[i]
    //         if(num % 3 === 0 && num % 5 === 0) {
    //           result.push('FizzBuzz');
    //         } else if (num % 5 === 0) {
    //           result.push('Buzz');
    //         } else if (num % 3 === 0) {
    //            result.push('Fizz')
    //         } else {
    //           result.push(num)
    //         }
    //     }
        
    //     return result;
    // }
    // const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // console.log(fizzBuzz(number));


    //### isInside
// ```js
// // Write a function `isInside(array, ele)` that returns true if `ele` is an element
// // inside of the `array`, false otherwise.
// //
// // HINT: use indexOf
// //
// // isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// // isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
// ```
// ['taylor', 'rome', 'adam'], 'rome'

// function isInside(array, ele) {
    
//    for (let i = 0; i < array.length; i++) {
//        if(array[i] === ele) {
//            return true;
//        } else {
//            return false;
//        }
//    }

// }
// console.log(isInside(['pete', 'adam', 'taylor'], 'pete'))


//### luckySevensjs
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
console.log(luckySevens(25)); // => [ 7, 14, 21 ]
console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(num) {

    let numb = [];
    
    for (var i = 1; i < num; i++){
      if (i % 7 === 0) {
      numb.push(i)
      }
    }
    return numb;
    } 