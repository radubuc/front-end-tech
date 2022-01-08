let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); //Date task was created, set to date Create button was clicked
    let table = document.getElementById('list'); //References List table in index
    let row = table.insertRow(1); //Creates new row (0 based index, header is 0)
    row.setAttribute('id', `item-${id}`); //Gives ID to each new row, not incremented yet

    row.insertCell(0).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //Sets value of 1st cell, under Date header (yyyy-mm-dd because it's easier)

    //Mood showing as undefined. How do I get this to see the value of the radio buttons? I tried adding id="mood" everywhere I could and also setting value="terrible" on the mood input tag
    // row.insertCell(1).innerHTML = document.getElementById('mood').value; //Sets value of 2nd cell in row, under Mood header
    
    //Mood attempt 2--Used moodRadioInline1 from mood input tag. Result is "on", which probably means it see the first radio button is selected, but not what I'm looking for.
    // row.insertCell(1).innerHTML = document.getElementById('moodRadioInline1').value; //Sets value of 2nd cell in row, under Mood header

    //Mood attempt 3--Used .innerHTML instead of .value. Result is "Mood" with each of the 5 radio buttons and their text
    // row.insertCell(1).innerHTML = document.getElementById('mood').innerHTML; //Sets value of 2nd cell in row, under Mood header

    //Mood attempt 4--Used W3Schools https://www.w3schools.com/jsref/prop_radio_value.asp Result is "Terrible" no matter which mood I chose. This is because moodRadioInline1 corresponds to "Terrible", so how can I look at just the mood I chose?
    var m = document.getElementById("moodRadioInline1").value;
    row.insertCell(1).innerHTML = m; //Sets value of 2nd cell in row, under Mood header

    //Mood attempt 5--Based on attempt 4. Removed number at end of each of the 5 moods here and in index. Result is all mood radio buttons are disabled
    // var m = document.getElementById("moodRadioInline").value;
    // row.insertCell(1).innerHTML = m; //Sets value of 2nd cell in row, under Mood header
    
    //Topic attempt 1--Result is "undefined", despite each topic having a corresponding value attribute
    // row.insertCell(2).innerHTML = document.getElementById('topic').value; //Sets value of 3rd cell, under Topic header
    
    //Topic attempt 2--Used Mood attempt 4 as a template. Result is Topic = Family no matter what option I choose because topicInlineCheckbox corresponds to "Family". Since this is a checkbox, how can I pull multiple values?
    // var t = document.getElementById("topicInlineCheckbox1").value;
    // row.insertCell(2).innerHTML = t; //Sets value of 3rd cell, under Topic header
    
    //Topic attempt 3--Used SO https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button  Result is "false". Must be a Boolean checking if "Family" is selected, which it wasn't. I chose "Friends". Do I need an if statement?
    var t = document.getElementById("topicInlineCheckbox1").checked;
    row.insertCell(2).innerHTML = t; //Sets value of 3rd cell, under Topic header

    row.insertCell(3).innerHTML = document.getElementById('emotions').value; //Sets value of 4th cell, under Emotions header

    row.insertCell(4).innerHTML = document.getElementById('thoughts').value; //Sets value of 4th cell, under Thoughts header

    row.insertCell(5).innerHTML = document.getElementById('distortions').value; //Sets value of 4th cell, under Distortions header

    row.insertCell(6).innerHTML = document.getElementById('feelings').value; //Sets value of 4th cell, under Feelings header

    let actions = row.insertCell(7); //Variable created for Delete button
    actions.appendChild(createDeleteButton(id++)); //Beginning of delete button. This increments ID
    document.getElementById('date').value = ''; //Clears value of task field after every click of button
    //Why aren't lines 23-25 working?


});

function createDeleteButton(id){
    let btn = document.createElement('button'); //Creates button
    btn.className = 'btn btn-primary'; //Give button Bootstrap styling
    btn.id = id; //Give button a unique ID
    btn.innerHTML = 'Delete'; //Give HTML text to button
    btn.onclick = () => { //Binds function to button; onclick is same as an event listener for click
        console.log(`Deleting row with ID: item-${id}`); //For testing
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete); //Removes child from parent, must take child as argument so it knows what to delete
    };
    return btn; //Returns button at end
}