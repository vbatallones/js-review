# HTML 
## boilerplate

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>JS REVIEW</title>
</head>
<body>
    <h1>JS REVIEW</h1>
    <div class="container" id="board">

    </div>
 <script src="./app.js"></script>
</body>
</html>
```
setting up boilerplate with shorcuts and placing class and id. 

linking the **CSS** file at the head of the **HTML**

linking the **JS** file at the bottom of the body in a script tag


## FORM TAG

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>HTML <FORM:post></FORM:post></title>
</head>
<body>
    <h1>HTML FORM</h1>
	// we make sure that our action is connected to an HTML  
	// we make sure if we have a file to get we want to include the 
	// use multipart/form-data when your form includes any <input type="file"> elements
    <form action="result.html" method="get" enctype="multipart/form-data">
        <div>
		// in order to link the label and input we want to specify that to whom It is going to connect
		// here we are saying the label name is connected to the input text.
		// for name, name = name and has a id of name.
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" required> // required attribute means that it its required to fill this up 
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required>
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age" min="1" max="200" required>
        </div>
        <div>
            <h2>Favorite Foods</h2>
            <label for="bananas">Bananas</label>
            <input type="checkbox" name="bananas" id="bananas">

            <label for="apples">Apples</label>
            <input type="checkbox" name="apples" id="apples">
        </div>
        <div>
            <label for="file">File</label>
            <input type="file" name="file" id="file">
        </div>
        <div>
            <button type="submit">Submit info</button>
        </div>
    </form>
    <div class="container">

    </div>
    
    <script src="app.js"></script>
</body>
</html>
```

## CONNECTED TO FORM 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
</head>
<body>
    <h1>Result</h1>
    <div class="container">
        <div id="result"></div>
        <a href="./index.html">Back to Form</a>
    </div>

    <script src="results.js"></script>
</body>
</html>
```

### JS CONNECTED TO THE RESULT HTML

```JS
const resultDiv = document.querySelector('#result');
console.log(resultDiv)

//  using the URLSearchParams will log the value and of our form from the index html

new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name);
    console.log(value);
    
    // let nameElement = document.createElement('p');
    // let valueElement = document.createElement('p');

    // nameElement.textContent = name;
    // valueElement.textContent = value;

    // console.log(nameElement);
//     resultDiv.appendChild(nameElement);
//     resultDiv.appendChild(valueElement);
let resultElement = document.createElement('p');
resultElement.textContent = name + ": " + value;
resultDiv.appendChild(resultElement)
});
```