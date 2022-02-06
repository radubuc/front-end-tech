const headers = {
    "x-api-key": 'efa41676-51c2-4291-b4f6-db182903776d',
};

//Get top 25 public cat images
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.thecatapi.com/v1/images/search?limit=25",
	"method": "GET",
	"headers": {
	  "x-api-key": "efa41676-51c2-4291-b4f6-db182903776d"
	}
  }
  
  $.ajax(settings).done(function (response) {
	console.log(`Get top 25 public images:`, response);
  });

//Upload cat image - Uses jQuery and Fetch
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
    getData(url, data);
}

//Get my uploaded images - Uses AJAX
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
  console.log(`Get your 10 latest uploaded images:`, response);
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
    	console.log(`Status of image with ${id}:`, response);
	});
}





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


//Ex from Stack Overflow - https://stackoverflow.com/questions/47046736/ajax-how-to-pass-api-key-in-header 
//     var apiKey = "fd6b8ec7d651960788351ee2b1baffba6ac1a9c8eb047118a1a823c247bdade0";
// $.ajax({
//     type: "GET",
//     url: "https://apifootball.com/api/?action=get_events&from=2017-10-30&to=2017-11-01",
//     headers: { "APIkey": apiKey },
//     success: function(result){
//       result[i].league_name
//     }
//  });
//} 



