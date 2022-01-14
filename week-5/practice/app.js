//INSTALLING JQUERY VIDEO NOTES
console.log('INSTALLING JQUERY VIDEO NOTES');
console.log($('body'));


//INTERACTING WITH ELEMENTS USING JQUERY VIDEO NOTES
console.log(`\n INTERACTING WITH ELEMENTS USING JQUERY VIDEO NOTES`);
let p = $('#test'); // $(#"test") is a substitute for document.getElementById("test")
let div = $('.my-class');
let ul = $('ul');

console.log(p);
console.log(div);
console.log(ul);

// How to get and set HTML values and attributes
//The next 3 lines should show "Hello World" from our paragraph tag output, then change to "New Text," then see "New Value" entered into our textbox
console.log(p.text()); //text() is a method of #test, which is the jQuery element object
p.text('New Test') //Blank string gets the text, passed in string sets the text

// $('input').val('New Value'); //Sets value of input

//How to access placeholder field on input -- Need to comment out line 21
$('input').attr('placeholder', 'Placeholder text'); //Takes attribute and value of attribute

//How to add elements to DOM: Append(), prepend(), before(), and after(). 
// Append: Adds content inside of existing element at the end
// Prepend: Adds content inside existing element at the beginning
// Before: Adds content outside existing element, immediately before it
// After: Adds content outside existing element, immediately after it
div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph added before div</p>');
div.after('<p>paragraph added after div</p>');

//How to remove elements from DOM: Remove() and empty()
div.empty(); //Removed everything from inside div
ul.remove(); //Removed div itself and everything inside


//How to hide and shoe elements in DOM: Hide() and show()
//Task: Hide our input and set timeout to make it reappear after 3 seconds
$('input').hide();
setTimeout(() => $('input').show(), 2000); //Shows input again after 2000 ms (2 s)


//AJAX VIDEO NOTES
console.log(`\n AJAX VIDEO NOTES`)
$.get('https://reqres.in/api/users/2', (data) => console.log(data)); //Gets user #2 and logs their info (think like Postman from Back End)

$.post('https://reqres.in/api/users', { //Creates a user with the following info
    name: 'Tommy',
    job: 'Front End Software Developer'

}, (data) => console.log(data));