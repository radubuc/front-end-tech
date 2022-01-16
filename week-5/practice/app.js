//INSTALLING JQUERY VIDEO NOTES
// console.log('INSTALLING JQUERY VIDEO NOTES');
// console.log($('body'));


// //INTERACTING WITH ELEMENTS USING JQUERY VIDEO NOTES
// console.log(`\n INTERACTING WITH ELEMENTS USING JQUERY VIDEO NOTES`);
// let p = $('#test'); // $(#"test") is a substitute for document.getElementById("test")
// let div = $('.my-class');
// let ul = $('ul');

// console.log(p);
// console.log(div);
// console.log(ul);

// // How to get and set HTML values and attributes
// //The next 3 lines should show "Hello World" from our paragraph tag output, then change to "New Text," then see "New Value" entered into our textbox
// console.log(p.text()); //text() is a method of #test, which is the jQuery element object
// p.text('New Test') //Blank string gets the text, passed in string sets the text

// // $('input').val('New Value'); //Sets value of input

// //How to access placeholder field on input -- Need to comment out line 21
// $('input').attr('placeholder', 'Placeholder text'); //Takes attribute and value of attribute

// //How to add elements to DOM: Append(), prepend(), before(), and after(). 
// // Append: Adds content inside of existing element at the end
// // Prepend: Adds content inside existing element at the beginning
// // Before: Adds content outside existing element, immediately before it
// // After: Adds content outside existing element, immediately after it
// div.prepend('<p>prepended paragraph</p>');
// div.append('<p>appended paragraph</p>');
// div.before('<p>paragraph added before div</p>');
// div.after('<p>paragraph added after div</p>');

// //How to remove elements from DOM: Remove() and empty()
// div.empty(); //Removed everything from inside div
// ul.remove(); //Removed div itself and everything inside


// //How to hide and shoe elements in DOM: Hide() and show()
// //Task: Hide our input and set timeout to make it reappear after 3 seconds
// $('input').hide();
// setTimeout(() => $('input').show(), 2000); //Shows input again after 2000 ms (2 s)


// //AJAX VIDEO NOTES
// console.log(`\n AJAX VIDEO NOTES`);
// $.get('https://reqres.in/api/users/2', (data) => console.log(data)); //Gets user #2 and logs their info (think like Postman from Back End)

// $.post('https://reqres.in/api/users', { //Creates a user with the following info
//     name: 'Tommy',
//     job: 'Front End Software Developer'

// }, (data) => console.log(data));


//QUIZ SCRATCH
console.log(`\n QUIZ SCRATCH`);

//jQuery
// Option 1
//See https://www.codegrepper.com/code-examples/javascript/how+to+append+rows+in+table+using+jquery+each+function 
// $('#customer-table tr:last').after('<tr><td>Some data here</td></tr>');


//Option 2
// https://stackoverflow.com/questions/5317890/how-do-i-create-these-nested-dom-elements-with-jquery
var table_id = "customer-table";
var table_body = "table-body";
var table_row = "table-row";
var first_name = "f-name";
var last_name = "l-name";
var email_address = "email";

var new_row = $("<tr>").attr("id", table_row).append(
    $("<td>").addClass("f_name"),
    $("<td>").addClass("l_name"),
    $("<td>").addClass("email")

);




//Vanilla JS
// document.getElementById('add').addEventListener('click', () => {
//     let createdDate = new Date(); //Date task was created, set to date Create button was clicked
//     let table = document.getElementById('list'); //References List table in index
//     let row = table.insertRow(1); //Creates new row (0 based index, header is 0)
//     row.setAttribute('id', `item-${id}`); //Gives ID to each new row, not incremented yet
//     row.insertCell(0).innerHTML = document.getElementById('new-task').value; //Sets value of 1st cell in row, under Task header
//     row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //Sets value of 2nd cell, under Date Created header (yyyy-mm-dd because it's easier)
//     row.insertCell(2).innerHTML = document.getElementById('new-start-date').value; //Sets value of 3rd cell, under Start Date header
//     row.insertCell(3).innerHTML = document.getElementById('new-end-date').value; //Sets value of 4th cell, under Due Date header
//     let actions = row.insertCell(4); //Variable created for Delete button
//     actions.appendChild(createDeleteButton(id++)); //Beginning of delete button, see line 19. This increments ID
//     document.getElementById('new-task').value = ''; //Clears value of task field after every click of button

// });