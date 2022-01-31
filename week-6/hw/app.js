class CatService {
    static url = 'https://api.thecatapi.com/v1/images/search'; //https://docs.thecatapi.com/api-reference/images/images-upload 
    headers['x-api-key'] = efa41676-51c2-4291-b4f6-db182903776d; //My API key that was emailed to me. See https://docs.thecatapi.com/authentication

    static getAllPublicImages() { //GET ALL
        return $.get(this.url);
    }

    static getMyImages(apiKey) { //GET
        return $.get(this.url + `/${apiKey}`);
    }
   


//Ex from Stack Overflow
//     var apiKey = "fd6b8ec7d651960788351ee2b1baffba6ac1a9c8eb047118a1a823c247bdade0";
// $.ajax({
//     type: "GET",
//     url: "https://apifootball.com/api/?action=get_events&from=2017-10-30&to=2017-11-01",
//     headers: { "APIkey": apiKey },
//     success: function(result){
//       result[i].league_name
//     }
//  });
//} https://stackoverflow.com/questions/47046736/ajax-how-to-pass-api-key-in-header 









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




//Resources
//The Cat API, Postman
// https://documenter.getpostman.com/view/5578104/RWgqUxxh 

//API keys in general
// https://swagger.io/docs/specification/authentication/api-keys/ 