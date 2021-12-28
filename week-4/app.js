// FINDING ELEMENTS IN THE DOM VIDEO NOTES

//How to find elements in the DOM
//Method 1: Using getElementById()
let button = document.getElementById("my-button");
console.log(button);

//Method 2: Using getElementsByTagName()
let buttonsByTag = document.getElementsByTagName("button"); //Note the "s" on "Elements"
console.log(buttonsByTag);

//Method 3: Using getElementsByClassName()
let buttonsByClassName = document.getElementsByClassName("my-class"); //Note the "s" on "Elements"
console.log(buttonsByClassName);


//FINDING ELEMENTS BY CSS SELECTORS VIDEO NOTES

//Method 4: Using CSS selectors and querySelectorAll()
let buttonsByCSSSelector = document.querySelectorAll("button.my-class"); //Finds only buttons with "my-class" class applied
console.log(buttonsByCSSSelector);


//INTERACTING WITH THE DOM VIDEO NOTES

//How to change elements in DOM - Add event listener to element itself
// document.getElementById("content").innerHTML = "Goodbye." //Overrides text in between opening and closing tags

let button2 = document.getElementById("btn");
let content = document.getElementById("content");

button2.addEventListener("click", () => {
    if(content.innerHTML == "Goodbye.") {
        content.innerHTML = "Hello.";
    } else {
        content.innerHTML = "Goodbye."
    }
});

//How to remove elements in DOM - Add event listener to anonymously returned element
document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value; //Added idToRemove and elementToRemove to retrofit function to support dynamically add and increment IDs on paragraphs
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = "";
});

//Set ID variable so I can increment ID after every new paragraph. Incrementation is done in "addInput" method starting on line 60
let id = 0;

//How to add new elements in DOM - Find parent, create new element, give new element attributes, append new element as child to parent
document.getElementById('add').addEventListener('click', () => { //Makes event listener
    var parent = document.getElementById('paragraphs'); //Finds parent
    var newElement = document.createElement('p'); //Creates new element. This string takes in the HTML tag we want. In this case, <p> but without <>
    newElement.innerHTML = 'This is a new paragraph.'; //Gives new element attributes
    parent.appendChild(newElement); //Appends child element to parent
}); //I split up "add" and "addInput", unlike in the video

//How to control what new paragraphs say - Add input to button
document.getElementById('addInput').addEventListener('click', () => { //Makes event listener
    var parent2 = document.getElementById('paragraphs2'); //Finds parent
    var newElement2 = document.createElement('p'); //Creates new element. This string takes in the HTML tag we want. In this case, <p> but without <>
    newElement2.innerHTML = document.getElementById('new-text').value; //Gives new element attributes
    newElement2.setAttribute('id', id++);
    parent2.appendChild(newElement2); //Appends child element to parent
    document.getElementById('new-text').value = ''; //Sets value blank after each click
});



