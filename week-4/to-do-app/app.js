// TO DO APP VIDEO NOTES
let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); //Date task was created, set to date Create button was clicked
    let table = document.getElementById('list'); //References List table in index
    let row = table.insertRow(1); //Creates new row (0 based index, header is 0)
    row.setAttribute('id', `item-${id}`); //Gives ID to each new row, not incremented yet
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; //Sets value of 1st cell in row, under Task header
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //Sets value of 2nd cell, under Date Created header (yyyy-mm-dd because it's easier)
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value; //Sets value of 3rd cell, under Start Date header
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value; //Sets value of 4th cell, under Due Date header
    let actions = row.insertCell(4); //Variable created for Delete button
    actions.appendChild(createDeleteButton(id++)); //Beginning of delete button, see line 19. This increments ID
    document.getElementById('new-task').value = ''; //Clears value of task field after every click of button

});

function createDeleteButton(id){
    let btn = document.createElement('button'); //Creates button
    btn.className = 'btn btn-primary'; //Gives button Bootstrap styling
    btn.id = id; //Gives button a unique ID
    btn.innerHTML = 'Delete'; //Gives HTML text to button
    btn.onclick = () => { //Binds function to button; onclick is same as an event listener for click
        console.log(`Deleting row with ID: item-${id}`); //For testing
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete); //Removes child from parent, must take child as argument so it knows what to delete
    };
    return btn; //Returns button at end
}