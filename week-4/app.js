// FINDING ELEMENTS IN THE DOM VIDEO NOTES

//Method 1: Using getElementById()
let button = document.getElementById("my-button");
console.log(button);

//Method 2: Using getElementsByTagName()
let buttonsByTag = document.getElementsByTagName("button"); //Note the "s" on "Elements"
console.log(buttonsByTag);

//Method 3: Using getElementsByClassName()
let buttonsByClassName = document.getElementsByClassName("my-class"); //Note the "s" on "Elements"
console.log(buttonsByClassName);

//Method 4: Using CSS selectors and querySelectorAll()
let buttonsByCSSSelector = document.querySelectorAll("button.my-class"); //Finds only buttons with "my-class" class applied
console.log(buttonsByCSSSelector);

