// import fetch from "node-fetch";
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const headers = {
    // "content-type": "multipart/form-data;",
    "x-api-key": 'efa41676-51c2-4291-b4f6-db182903776d'
};

// fetch(url, headers)
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

//Upload cat image
$("#upload-image-form").on("submit", (evt) => {
    evt.preventDefault();
    // console.log("catFile", evt.currentTarget[0].files); 
    let catFile = evt.currentTarget[0].files[0];
    postCatPic(catFile);
});

function postCatPic(catFile) {
    const getData = async (url,data) => {
        const req = await fetch(url, {
          method: 'POST',
          body: data,
          headers: headers,
        });
        const json = await req.json(); 
        console.log(json);
      };
      const url = "https://api.thecatapi.com/v1/images/upload";

      var data = new FormData()
      data.append('file', catFile)
      data.append('sub_id', 'test1')

    //   const data = JSON.stringify({
    //     file: catFile,
    //   });
      getData(url, data);
}

//Get my uploaded images
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/images/?limit=10",
  "method": "GET",
  "headers": {
    "x-api-key": "efa41676-51c2-4291-b4f6-db182903776d"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


//Delete my uploaded image

$("#delete-image-form").on("submit", (evt) => {
  evt.preventDefault();
  // console.log("catId", evt.currentTarget[`${id}`].files); 
  let id = evt.currentTarget.files[id];
  deleteImage(id);
});


function deleteImage(id) {
  var picURL = `https://api.thecatapi.com/v1/images/${id}`
  var settings = {
    "url": picURL,
    "method": "DELETE",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json",
      "x-api-key": "efa41676-51c2-4291-b4f6-db182903776d"
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
});
}



//From Cat API docs
// var http = require("https");
// const { FetchError } = require("node-fetch");

// var options = {
//   "method": "POST",
//   "hostname": "api.thecatapi.com",
//   "port": null,
//   "path": "/v1/images/upload",
//   "headers": {
//     "content-type": "multipart/form-data;",
//     "x-api-key": "efa41676-51c2-4291-b4f6-db182903776d"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.end();


// var require: NodeRequire
// (id: string) => any

// const fetch = require('node-fetch');

// require("dotenv").config();
// const CAT_API_KEY = process.env.API_KEY;


// const getData = async (url,headers) => { //https://www.realpythonproject.com/a-cheat-sheet-for-javascripts-fetch-api/
//     const res = await fetch(url,{
//         headers: headers
//     });
//     const json = await res.json();
//     console.log(json);
//     };
//     const url =
//     "https://api.thecatapi.com/v1/images/search";
//     const headers = {
//         "x-api-key": 'efa41676-51c2-4291-b4f6-db182903776d',
//     };
//     getData(url,headers);


// class CatService {
//     static url = 'https://api.thecatapi.com/v1/images/search'; //https://docs.thecatapi.com/api-reference/images/images-upload 
//     headers['x-api-key'] = "efa41676-51c2-4291-b4f6-db182903776d"; //My API key that was emailed to me. See https://docs.thecatapi.com/authentication

//     static getAllPublicImages() { //GET ALL
//         return $.get(this.url);
//     }

//     static getMyImages(apiKey) { //GET
//         return $.get(this.url + `/${apiKey}`);
//     }
   


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
//The Cat API Official docs
// https://docs.thecatapi.com/api-reference/images/images-upload  

//The Cat API, Postman
// https://documenter.getpostman.com/view/5578104/RWgqUxxh 

//API keys in general
// https://swagger.io/docs/specification/authentication/api-keys/ 

//API Cheatsheet
// https://www.realpythonproject.com/a-cheat-sheet-for-javascripts-fetch-api/ 

//The Coding Train
// https://www.youtube.com/watch?v=ecT42O6I_WI 

//Also Web Dev Simplified on Youtube

// https://github.com/node-fetch/node-fetch/issues/1000 

//Fetch Docs
// https://www.npmjs.com/package/node-fetch 

//Google Maps API example
// https://developers.google.com/maps/documentation/javascript/get-api-key

// MDN Headers 
// https://developer.mozilla.org/en-US/docs/Web/API/Headers

//MDN Request.headers
// https://developer.mozilla.org/en-US/docs/Web/API/Request/headers

// MDN Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//MDN Using Files from Web App
//https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications 


