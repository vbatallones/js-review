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

function isInside(array, ele) {
    
   for (let i = 0; i < array.length; i++) {
       if(array[i] === ele) {
           return true;
       } else {
           return false;
       }
   }

}
// console.log(isInside(['pete', 'adam', 'taylor'], 'pete'))

//## reverseStr
// Write a function reverseStr(str) that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// console.log(reverseStr('General Assembly')); //=> 'ylbmessA lareneG'

function reverseStr(str) {
    let reverseOne = str.split('');
    let reverseTwo = reverseOne.reverse();
    let join = reverseTwo.join('');
    
    return join;
  }
//### luckySevensjs
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(num) {

    let numb = [];
    
    for (var i = 1; i < num; i++){
      if (i % 7 === 0) {
      numb.push(i)
      }
    }
    return numb;
    } 
    //copyMachine
 // Write a function copyMachine(element, num) that takes in an element and a number
// it should return an array of length num that is filled with element.
//
// Examples:
//
 //console.log(copyMachine('candy', 0)); // => []
 //copyMachine('candy', 2); // => [ 'candy', 'candy' ]
 //copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {

    let numB = [];
    
    for (var i = 0; i < num; i++) {
    
      numB.push(element);
    }
    return numB;
}

    //everyOtherWord
    // Write a function everyOtherWord(sentence) that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
 //console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
function everyOtherWord(sentence) {
    let result = [];
    let split = sentence.split(' ')
    for (let i = 0; i < split.length; i+=2) {
      let word = split[i]
        result.push(word)
    }
    return result;
  }
  // Write a function wordYeller(sentence) that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
let words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words)) // "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
function wordYeller (sentence) {
 let split = sentence.split(" ");
  let result = [];
  split.forEach(function (word) {
    let length = word.length - 1;
    let lastIndex = word[length];
    if (lastIndex === "!" || lastIndex === "," || lastIndex === "." || lastIndex === "?" || lastIndex === ":" || lastIndex === ";") {
      result.push(word);
    } else {
      let last = word + "!";
      result.push(last);
    }
  });
  let newResult = result.join(" ");
  return newResult;
}

// Write a function arraySubstring(words, str) that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
 //console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));
//=> [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]
function arraySubstring(words, str) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let subStr = words[i].substring(0,3)
    if (subStr === str) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result
}

//Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// console.log(evenCaps("Tom got a small piece of pie"))
// => "ToM GoT A SmAlL PiEcE Of pIe"
//evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"
 function evenCaps(sentence) {
   let str1 = "";
   let str2 = sentence.toLowerCase();

   for (let i = 0; i < str2.length; i++) {
     let word = str2[i];

     if(i === 0) {
       str1 += word.toUpperCase();
     } else if (i % 2 === 0) {
       str1 += word.toUpperCase();
     } else {
       str1 += word.toLowerCase();
     }
   }
   return str1
 }