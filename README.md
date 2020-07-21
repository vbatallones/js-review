# JavaScript Review
This is my review of JavaScript.

## Example of Data types
``` JavaScript
    let name = "Levin Batallones";
    let age = 25;
    let isCool = true;
    const bike = ['Yamaha', 'Honda', 'Kawasaki', 'Harley', 'Triump'];

    const nba = {
        Warriors: 'Steph Curry',
        blazers: 'Damian Lillard',
        chicagoBulls: ['Jordan', 'Pippen', 'Rodman', 'Kerr'],
        bullsChampionship: 6,
        lakers: {
            legendOne: 'Kobe',
            legendTwo: 'Magic',
            legendThree: "O'Neal",
        },
        print function () {
            console.log(this.blazers + " sent PG back to OKC")
        }

    }
```

## Example of functions
```Javascript

    function combineName(name1, name2) {
        return name1 + " " + name2
    }

    const addNumber = function(num1, num2) {
        return num1 + num2;
    }

    const joinArray = (array1, array2) => {
        return array1.concat(array2);
    }
```

## DOM Manipulation
```js
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

```

## More DOM Manipulation
```JS
//Create an element
const headerThree = document.createElement('h2');
headerThree.textContent = "Friends";
//Append header to the container
container.appendChild(headerThree);
//Create a new element Unordered list
const list = document.createElement('ul');
//iterate over the array of bikes
 for (let i = 0; i < bike.length; i++) {
            let bikes = bike[i]
            
        //create a li for our ul.
        const listItems = document.createElement('li');
        //assgin the bike that we iterate too, into our li's
        listItems.textContent = bikes
        //append the li's to our ul
        list.appendChild(listItems)
    }
    console.log(list)
//we add a event that listen to a click to our header three
headerThree.addEventListener('click', function() {
    //we want to show our list of items everytime we click the header three.
    container.appendChild(list);
})

```

## PROBLEM SET

```JS 
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
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
//console.log(wordYeller(words)) // "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
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

```