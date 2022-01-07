let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let date = new Date(); //Date task was created, set to date Create button was clicked
    let table = document.getElementById('list'); //References List table in index
    let row = table.insertRow(1); //Creates new row (0 based index, header is 0)
    row.setAttribute('id', `item-${id}`); //Gives ID to each new row, not incremented yet

    row.insertCell(0).innerHTML = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; //Sets value of 2nd cell, under Date header (yyyy-mm-dd because it's easier)

    row.insertCell(1).innerHTML = document.getElementById('mood').value; //Sets value of 1st cell in row, under Mood header
    
    row.insertCell(2).innerHTML = document.getElementById('topic').value; //Sets value of 3rd cell, under Start Topic header

    row.insertCell(3).innerHTML = document.getElementById('emotions').value; //Sets value of 4th cell, under Due Emotions header

    row.insertCell(4).innerHTML = document.getElementById('emotions').value; //Sets value of 4th cell, under Due Thoughts header

    row.insertCell(5).innerHTML = document.getElementById('emotions').value; //Sets value of 4th cell, under Due Distortions header

    row.insertCell(6).innerHTML = document.getElementById('emotions').value; //Sets value of 4th cell, under Due Feelings header

    let delete = row.insertCell(7); //Variable created for Delete button
    delete.appendChild(createDeleteButton(id++)); //Beginning of delete button. This increments ID
    document.getElementById('date').value = ''; //Clears value of task field after every click of button
    //Why aren't lines 23-25 working?

});

//From To Do App video
// function createDeleteButton(id){
//     let btn = document.createElement('button'); //Creates button
//     btn.className = 'btn btn-primary'; //Give button Bootstrap styling
//     btn.id = id; //Give button a unique ID
//     btn.innerHTML = 'Delete'; //Give HTML text to button
//     btn.onclick = () => { //Binds function to button; onclick is same as an event listener for click
//         console.log(`Deleting row with ID: item-${id}`); //For testing
//         let elementToDelete = document.getElementById(`item-${id}`);
//         elementToDelete.parentNode.removeChild(elementToDelete); //Removes child from parent, must take child as argument so it knows what to delete
//     };
//     return btn; //Returns button at end
// }