//FULL CRUD APP PART 1 & 2 VIDEO NOTES
class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(name, area) {
        this.rooms.push(new Room(name, area));
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

class HouseService { //CRUD operations
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses() { //GET ALL
        return $.get(this.url);
    }

    static getHouse(id) { //GET
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house) { //CREATE   Takes instance of House class
        return $.post(this.url, house);
    }

    static updateHouse(house) { //UPDATE
        return $.ajax({
            url: this.url + `/${house._id}`, //Need ._id with MongoDB because that's the value that will automatically be created for our house
            dataType: 'json',
            data: JSON.stringify(house), //Takes object and converts to JSON string for sending it through HTTP request. Object we want to convert is passed in as parameter 
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    static deleteHouse(id) { //DELETE   Just need house's id, not the whole house
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager {
    static houses; //Allows us to find house that matches id that's passed into

    static getAllHouses() { //method doesn't exist yet - Top Down dev
        HouseService.getAllHouses().then(houses => this.render(houses)); //Takes a callback. Sets up getting all houses and renders to DOM. Render method not created yet
    }

    static createHouse(name) {
        HouseService.createHouse(new House(name))
        .then(() => { //Handles promise that comes back
            return HouseService.getAllHouses(); //Notice a pattern?
        })
        .then((houses) => this.render(houses)); //Create house, then render all houses
    }

    static deleteHouse(id) {
        HouseService.deleteHouse(id)
            .then(() => {
                return HouseService.getAllHouses(); //When we delete a house successfully, we want to get all houses again
            })
            .then((houses) => this.render(houses)); //Then we want to render houses again
    }

    static addRoom(id) {
        for (let house of this.houses) { //Loop through array to find house
            if (house._id == id) { //If current house id matches house id we passed in...
                house.rooms.push(new Room($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`).val())) //Push a new room (with name and area) to rooms array. Breakdown of symbols: $() jQuery, `${}` template literal, # find by id
                HouseService.updateHouse(house) //Take house whose new room I just added to rooms array and send update request to API to save new data
                    .then((data) => {
                        console.log(data);
                        return HouseService.getAllHouses(); //Gets all houses
                    })
                    
                    .then((houses) => this.render(houses)); //Rerenders houses after update
                    console.log("2nd .then in addRoom function")
            }
        }
    }

    static deleteRoom(houseId, roomId) {
        for (let house of this.houses) { //When we find the right house...
            if (house._id == houseId) { //(Means house id = house id passed in)
                for (let room of house.rooms) { //and when we find the right room...
                    if (room._id == roomId) { //(Means room id = room id passed in)
                        house.rooms.splice(house.rooms.indexOf(room), 1); //Removes element from rooms array
                        HouseService.updateHouse(house)
                            .then(() => {
                                return HouseService.getAllHouses();
                            })
                            .then((houses) => this.render(houses));
                    }
                }
            }
        }
    }

    static render(houses) { //Takes list of houses and renders houses to DOM
        this.houses = houses;
        $('#app').empty(); //Clears everytime we render, so we can later rerender
        for (let house of houses) { //Goes over all houses and renders
            $('#app').prepend(
                `<div id="${house._id}" class="card">
                    <div class="card-header">
                        <h2>${house.name}</h2>
                        <button class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')">Delete House</button>
                    </div> 
                    <div class="card-body">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-name" class="form-control" placeholder="Room Name">
                                </div>
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-area" class="form-control" placeholder="Room Area">
                                </div>
                            </div><br />
                            <button id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control">Add Room</button>
                        </div>
                    </div>
                </div><br />`

                //Line 75: When we create new room, method will know which house id to take and add room to 
            ); // Stopped working at timestamp 22 min in video, before adding Delete button, card body, and Add button divs above. Update: Works suddenly \_(o_O)_/

            for (let room of house.rooms) { //House refers to current iterations' house
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                        <span id="name-${room._id}"><strong>Name: </strong> ${room.name}</span>
                        <span id="area-${room._id}"><strong>Area: </strong> ${room.area}</span>
                        <button class="btn btn-danger" onclick="DOMManager.deleteRoom('${house._id}', '${room._id}')">Delete Room</button></p>`
                );
            }
        }
    }
}

$('#create-new-house').click(() => {
    DOMManager.createHouse($('#new-house-name').val());
    $('#new-house-name').val('');
});

DOMManager.getAllHouses();

// Stopped working at timestamp 22 min in video, before adding nested rooms for loop above 
//Update: After restarting it up 2 days later, it works as intended without any changes! Ok

//CRUD PART 1 SUMMARY
//HTML - 2 DIVS
//JS - HOUSE, ROOM, HOUSESERVICE, DOMMANAGER CLASSES CREATED
//JS - HOUSESERVICE: GETALLHOUSES, GETHOUSE, CREATEHOUSE, UPDATEHOUSE, DELETEHOUSE
//JS - DOMMANGAGER: GETALLHOUSES, RENDER, ROOM/HOUSE FOR LOOP


//CRUD PART 2 SUMMARY









//Troubleshooting help
// https://stackoverflow.com/questions/68108890/crud-how-to-make-name-and-area-change