// TEAM APP VIDEO NOTES

class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = []; //Array of members, not required as an argument
    }

    addMember(member) {
        this.members.push(member);
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}

let teams = []; //Array used to render or draw new HTML to DOM in browser
let teamId = 0; //ID assigned to each time. Will be incremented later

onClick('new-team', () => { //"new-team" is the id and the arrow function is the action passed in
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDOM(); //Function will be created on line 46 (top down model of coding)
})

//Event listener added to a function, so just function can be called everytime
function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) { //Function exists so we can just pass in team name and ID is determined automatically on line 30
    return document.getElementById(id).value;
}

function drawDOM() { //Iterates over teams array and build table for each team
    let teamDiv = document.getElementById('teams'); //Grabs ID of div on index.html
    clearElement(teamDiv); //Clears div so we can program it later
    for (team of teams) { //Iterates through teams array and draw that team to team div
        let table = createTeamTable(team); //Creates a table for each team
        let title = document.createElement('h2');
        title.innerHTML = team.name; //Changes HTML text to match team name (pulled in dynamically)
        title.appendChild(createDeleteTeamButton(team)); //Create "Delete Team" button - function to be built on line 81
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member); //Need all 3 so we can access team and the table the member is being added to. Function built on line 62
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2); //Inserts row at position 2 (other data will be above it)
    row.insertCell(0).innerHTML = member.name; //Inserts member name in cell 1 of row 2
    row.insertCell(1).innerHTML = member.position; //Inserts member position in cell 2 of row 2
    let actions = row.insertCell(2); //Beginning of "Delete Row" button code in cell 3 of row 2
    actions.appendChild(createDeleteRowButton(team, member)); //"createDeleteRowButton function to be built on line 70"
}

function createDeleteRowButton(team, member) { //Creates new button and adds to cell
    let btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.innerHTML = "Delete"; //Adds HTML text of "Delete" to button
    btn.onclick = () => { //Deletes member by index on click
        let index = team.members.indexOf(member);
        team.members.splice(index, 1); //Changes data
        drawDOM(); //Re-renders data - needs to be done after each change to data
    };
    return btn; //Needed so button can be appended on row and table level (line 67)
}

function createDeleteTeamButton(team) { //Takes in team to be deleted from array
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Team'; //Adds HTML text of "Delete Team" to button
    btn.onclick = () => { //Deletes team by index on click
        let index = teams.indexOf(team);
        teams.splice(index, 1); //Changes data
        drawDOM(); //Re-renders data
    };
    return btn; //Needed so button can be appended on title (line 53)
}

function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary'; //Gives Bootstrap style
    btn.innerHTML = 'Create';
    btn.onclick = () => { //Pushes new member to members array on team AKA instantiating an instance of member class
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`))); //Changes data
        drawDOM(); //Re-renders data
    };
    return btn; //Must return button
}

function createTeamTable(team) { //Takes team and builds table off of it
    let table = document.createElement('table'); //Going to build entire HTML table with all the tags here
    table.setAttribute('class', 'table table-dark table-striped');
    let row = table.insertRow(0);

    let nameColumn = document.createElement('th'); //Inserts <th>Name Column</th> on 1st row
    nameColumn.innerHTML = "Name";
    row.appendChild(nameColumn);

    let positionColumn = document.createElement('th'); //Inserts <th>Position Column</th> on 1st row
    positionColumn.innerHTML = "Position";
    row.appendChild(positionColumn);

    let formRow = table.insertRow(1); //Form on row 2 where we insert new team members
    let nameTh = document.createElement('th');
    let positionTh = document.createElement('th');
    let createTh = document.createElement('th');

    let nameInput = document.createElement('input'); //Creates place for name to be input
    nameInput.setAttribute('id', `name-input-${team.id}`); //Code to allow name to be input
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control'); //Gives Bootstrap style of "form-control"

    let positionInput = document.createElement('input'); //Creates place for position to be input
    positionInput.setAttribute('id', `position-input-${team.id}`); //Code to allow position to be input
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control'); //Gives Bootstrap style of "form-control"

    let newMemberButton = createNewMemberButton(team); //Uses data from team to associate this button with this specific team. Going to be built on line 
    nameTh.appendChild(nameInput); //Appends input to cell
    positionTh.appendChild(positionInput); //Appends input to cell
    createTh.appendChild(newMemberButton); //Appends button to cell?
    formRow.appendChild(nameTh); //Appends cell to row
    formRow.appendChild(positionTh); //Appends cell to row
    formRow.appendChild(createTh); //Appends cell to row
    return table;

    
}

function clearElement(element) { //Remove every first child while their is still a first child. Don't want to delete, just clear everything out
    while(element.firstChild) { //While true, remove first child
        element.removeChild(element.firstChild);
    }
}