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