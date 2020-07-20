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