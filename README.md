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
    //old school
    function arguments (parameters) {

    }

    //mid 
    const input = function () {

    }

    //newer 
    const input = (parameter) => {
        
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

## CALL BACK FUNCTIONS

```JS
function greeting (name, callback) {
    let sentence = 'Hello, my name is '+ name;

   let otherSentence = callback();

   return sentence + otherSentence
}

function anotherGreeting() {
    let sentence = ' I forgot my last name';
    
    return sentence;
}

let myName = 'Levin';
console.log(greeting(myName, anotherGreeting));

function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let numbers = array[i];

        console.log(numbers);
    }
    callback(array);
}
//the first iteration will be 1 to 9 and it will connect the to the call back function
//which is going to start at number 1 to 9 again. it loops to the same array 
//giving us from the function printArray the 1 to 9 and the callback function is 1 to 9 too.
function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
}

const numberArray = [1,2,3,4,5,6,7,8,9];

printArray(numberArray, printArrayAgain);


function calculator (num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result;
}
//The first callback will do whats inside of it which is here it's addition
function addNumbers(num1, num2) {
  
    let result = num1 + num2; 
    return result;
}
//the second callback will do whats inside of it which is here it's subtraction
function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    return result;
}
//and now we are checking if our function works. It works!
console.log(calculator(5,77, addNumbers, subtractNumbers));

function superHero (callbackOne, callbackTwo) {
    let result =  callbackOne() + 'and' + callbackTwo()
    return result;
} 

function superPowers () {
    let sentence = " I can jump 1000ft ";
    return sentence;
}

function superPowersTwo () {
    let sentence = " I can side step quickly";
    return sentence;
}

console.log(superHero(superPowers, superPowersTwo));
```

## SET TIMEOUT 

```JS
//Set time off for our function
function blastOff () {
    let num = 0;
//This will log from 10 to 0
    for (let i = 10; i >= num; i--) {
        console.log(i)
    }//by the time it reaches to Zero it will log the string BLAST OFF!!!
    console.log('BLAST OFF!!!!')
}//we set our countdown for 5000 milliseconds, which is 5 seconds 
setTimeout(blastOff, 5000)

//This function will log my name in 5 milliseconds
function printName(name) {
    console.log('Levin');
}
setTimeout(printName, 5000);

/ I create a function first so I can use it globaly
function myName(name) {
   console.log(name);
}
let myNameTwo = 'Levin' // I declare a variable for my function which is my name
setTimeout(function() { // This is another way of setting the setTimeout 
    myName(myNameTwo) //it will log my name in 5 milliseconds
}, 5000);
```

## ITERATORS

### FOREACH
```JS
const collectables = ['Bomag', 'CMI corp', 'Wirtgen', 'Caterpillar'];
collectables.forEach(function(element){ // using a for each loop in a regular function
    console.log(element); // logging the collectables element
});

collectables.forEach(element => { // arrow function
    console.log(element);
});

collectables.forEach(element => { //arrow fucntion 
    if (element.length > 6) {       // our condition is if the length of an element is less than 6
        console.log(element);   //we want to log that element 
    }
});
```

### MAP

```JS
const someNumbers = [24, 65, 347, 34];

const addFive = someNumbers.map(element => { // map will return a new array
    return element + 5; // in this case we are returning a new array, but we are adding 5.
});
```

### FILTER

```JS
const someNumbers = [24, 65, 347, 34];

console.log(addFive);

const filterNumbers = someNumbers.filter(element => { // we are filtering elements
    if(element > 50) { // we want to filter that is less than 50 
        return element; // and we want to return that element
    }
});

console.log(filterNumbers)
```

## DOM ADD EVENT LISTENER
```JS
document.addEventListener('DOMContentLoaded', function(){
    //everything that happens inside these curly’s will occur After the entire DOM has loaded
    let helloDiv = document.getElementById('hello');
    let seeYouDiv = document.getElementById('see-you');

    let alertClick = function() {
        console.log("Hello was clicked");
    }
    
    helloDiv.addEventListener('click', alertClick);

    seeYouDiv.addEventListener('click', function(){
        console.log('You clicked see you tomorrow');
        helloDiv.removeEventListener('click', alertClick);
    })
    
})
```


## API DOCUMENTATION

```JS
document.addEventListener('DOMContentLoaded', function() {
 const requestURL = "https://randomuser.me/api/?results=5"
const unorderdList = document.getElementById('people')
fetch(redditSite)
 function addPerson (person) {
     //create an li dom elements and add to my ul 
    let newPerson = document.createElement('li')
    let date = Date(person.dob.date)
    console.log(date)
    newPerson.innerText = "Name: " +person.name.first+ " "+person.name.last + '\n' + 'Date of birth: '+ date + "\n" +"Age: " +person.dob.age
    unorderdList.appendChild(newPerson)
     //li shoud contain info about the person
 }
    fetch(requestURL).then(function(responseData){
        //fetch will package the response into an object with some methods
        // that allows us to do some useful things with the response
        //use the .json() method to return the data in JSON format
        console.log(responseData)
        return responseData.json()

 })
 .then(function(jsonData){
     //now we have the data in json format
     //use it!
    //  let firstPerson = jsonData.results[0].name
    //  console.log('first Person:', firstPerson, firstPerson.last)
     let people = jsonData.results
     console.log(jsonData)
    people.forEach(addPerson)
 })
 .catch(function(err) {
     //any errors encountered in the request 
     //or the .then promise will be passed into this catch callback
     console.log("oh no, there's been an error!", err)
 })
});
```

 ## MORE API DOCUMENTATION

```JS
const container = document.querySelector('.container'); // we grab the div container in our HTML
const body = document.querySelector('body'); // we grab our body for our easy access to append element

fetch('https://pokeapi.co/api/v2/pokemon/charmander') // this is our API link to get some info out of third party
.then(response => {     //fetch will package the response into an object with some methods
                         // that allows us to do some useful things with the response
                        //use the .json() method to return the data in JSON format
   return response.json();
})
.then(data => {   //now we have the data in json format
                   //use it! and access data
    let pokeName = data.name;
    let weight = data.weight;
    let height = data.height;
    let moves = data.moves
    let charMoves = moves[2].move.name;
    let type = data.types[0].type.name;
    let sprites = data.sprites;
    let profilePic = sprites.front_default;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem'
    
    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body');
    
    let firstChar = pokeName.charAt(0).toUpperCase();
    let otherLetters = pokeName.slice(1)
    let finalName = firstChar + otherLetters;
    
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = finalName
    
    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');
    cardWeight.classList.add('card-text')
    cardHeight.classList.add('card-text')
    cardMove.classList.add('card-text')
    cardType.classList.add('card-text')
    cardWeight.textContent = "Weight: " + weight;
    cardHeight.textContent = "Height: "+ height;
    cardMove.textContent = "Move: " + charMoves;
    cardType.textContent = "Type: " + type;
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);
    
    card.appendChild(image);
    card.appendChild(cardBody);
    
    body.appendChild(card)

})
 ```

## OBJECT ORIENTED PROGRAMMING

```JS

// Prototypal Inheritance is what's going in here
const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
}; 

const dogTwo = {};

dogTwo.__proto__ = dog;

console.log(dogTwo);
console.log(dog);

// console.log(dogTwo.goodBoy);
console.log(dogTwo.name)

const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"
}; 

const dogTwo = {
    name: "Rocco"
    color: "Brown" //the object brown in DOGTWO will not inherit by the DOG.
};                 

dogTwo.__proto__ = dog; //unless we reverse this like dog.__proto__ = dogTwo

console.log(dogTwo);
console.log(dog);

// console.log(dogTwo.goodBoy);
console.log(dogTwo.name)

my own class
const shoes = {
    name: "jordan 1",
    fake: false,
    artist: 'Travis Scott'
}

const shoesTwo = {
    name: 'Adidas',
}

shoesTwo.__proto__ = shoes;
console.log(shoesTwo)

console.log(shoesTwo.fake)


shoesTwo.fake = true;
console.log(shoesTwo.fake)
```

## CONSTRUCTOR FUNCTION

```JS
//WHENEVER YOU USE CONSTRUCTION FUNCTION THE FIRST
//CHAR NEEDS TO BE CAPITALIZE
//this. is referring to the user
//everytime we have a function we have to return something

function User(name) {
    //
    this.name = name;

    //return this
}

let adam = new User('Adam');

// console.log(adam.name)

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;

    //no need to return because it is already return the object by the syntax
    // this.
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true)

// console.log(steph)
// console.log(steph.name)


function Cars (name, brand, allWheelDrive) {
    this.name = name;
    this.brand = brand;
    this.allWheelDrive = allWheelDrive
    this.intro = function() {
        console.log("This car is " + this.name)
    }
}

let toyota = new Cars("FRZ-86", "Toyota", false)
let subaru = new Cars("WRX", "Subaru", true)
// console.log(toyota)
// console.log(toyota.brand)
// console.log(toyota.allWheelDrive)
// console.log(subaru);
// console.log(subaru.brand);
// // console.log(subaru.allWheelDrive);
// toyota.intro()
// subaru.intro()
```

## CLASS 

```JS
//keyword is "class"
//everything you have to invoke should be inside of the "class"
class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }
    drive() {
        console.log('Vroom');
    } //dont forget to always use the "this" if you want to call it.
    intro() {
        console.log('This car is a '+ this.make + " " + this.model + "!")
    }
}

let tesla = new Car(2020, 'Tesla', 'Model S', 'red');
console.log(tesla)

tesla.drive()
tesla.intro()
// We create a class for us to use on our fetch
class GitHubProfile { 
    constructor(username, name, url) {
        this.username = username; //whatever the parameter name is we want to return that.
        this.name = name;
        this.url = url;
    }
    intro() { // we invoke a function here that everytime this function is called it will execute this block of code.
        console.log(`My name is ${this.name} and my username is @${this.username}`)
    }
}

fetch('https://api.github.com/users/vbatallones') //fetch API

.then(response => { // make the file to .json()
    return response.json();
})
.then(data => { // we are using the .json() format.
    let gitHubUrl = data.url;
    let gitHubName = data.name;
    let gitHubUserName = data.login

    let levin = new GitHubProfile(gitHubUserName, gitHubName, gitHubUrl);
    console.log(levin)

    levin.intro() // calling back the function intro with a block of line to execute.
})
```

## PROMISE

```JS
//ES5: Part 1

let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

console.log(willIGetNewPhone)
//then you are going to wait by ".then" and see for the result
willIGetNewPhone.then(result => {
    console.log(result)
})
```

## PROMISE ALWAYS HAS A TWO PARAMETER   
### RESOLVE and REJECT

```JS
let goToBed = true;
//this is already a function so we dont need to do the word "function"
let willIGotoBed = new Promise((resolve, reject) => { 
    if(goToBed) { // if this is true it will proceed to give this object to user.
        let bed = {
            pillow: 'hug',
            blanket: 'wrap'
        };
        resolve(bed); // run the resolve
    } else { // otherwise, it will give you an error 
        reject('GO STUDY')
    }
});
// here is where we want to return the result we call the function THEN this result. 
willIGotoBed.then(result => {
    console.log(result)
});
```

## ASYNC FUNCTION
```JS
//keyword is "async" without the quotes.

// the fat-arrow will automatically return the response.json(). same as below.
    fetch(endpoint).then(response => response.json()); 
 //they are the same from above.
    fetch(endpoint)
    .then(response => {
        return response.json();
    })

//removing the 'await' will give you the Promise object data
//with the await it will give you the actual data
//you cant just use the await anywhere. 
// "it should be always inside the "async function!"
async function printUsers() {
    const endpoint = 'https://api.github.com/users/vbatallones';
    let users = await fetch(endpoint).then(response => response.json());
    console.log(users)
    
}
printUsers();


async function printFacebook () {
    let facebookEndPoint = 'https://api.github.com/users/facebook';
    let levin = await fetch(facebookEndPoint).then(response => response.json());
  
    console.log(levin.login) //will give us the value of the object.
}
printFacebook();
```