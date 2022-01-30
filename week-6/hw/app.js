class CatService {

}









// class HouseService { //CRUD operations
//     static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

//     static getAllHouses() { //GET ALL
//         return $.get(this.url);
//     }

//     static getHouse(id) { //GET
//         return $.get(this.url + `/${id}`);
//     }

//     static createHouse(house) { //CREATE   Takes instance of House class
//         return $.post(this.url, house);
//     }

//     static updateHouse(house) { //UPDATE
//         return $.ajax({
//             url: this.url + `/${house._id}`, //Need ._id with MongoDB because that's the value that will automatically be created for our house
//             dataType: 'json',
//             data: JSON.stringify(house), //Takes object and converts to JSON string for sending it through HTTP request. Object we want to convert is passed in as parameter 
//             contentType: 'application/json',
//             type: 'PUT'
//         });
//     }

//     static deleteHouse(id) { //DELETE   Just need house's id, not the whole house
//         return $.ajax({
//             url: this.url + `/${id}`,
//             type: 'DELETE'
//         });
//     }
// }