// Deprecated
// $(document).ready(

// )

$(function() { //The new document.ready()
    //Deprecated
    // $('.text').text('The DOM is now loaded');

    // $('.text').on('mouseover', () => {
    //     $('<p class="secondP">You hovered over the text</p>').appendTo('body');
    // });


    //Pure/Vanilla JS
    // let divs = document.querySelectorAll('.col-2');

    // for (let i = 0; i < divs.length; i++) {
    //     divs[i].addEventListener('click', (evt) => {
    //         // console.log(evt.target);
    //         // console.log(evt.target.innerText);
    //         evt.target.innerText = "X"; //Would have to flip between players and markers with a conditional statement and a counter i++
    //     })
    // }


    //jquery version for adding event listeners
    player = 0;
    // let divs = $('.col-2');
    $('.container').on("click", (evt) => { //api.jquery.com/on
        // console.log(evt) //for testing
        if (player % 2 == 0) {
            // evt.target.innerText = "X"; //How can I add an image instead of an X?
            // evt.target.innerHTML = <img src="../hw/x-rick.png" class="X">rick</img>; //Try innerHTML instead of innerText. Maybe check animate doc -- api.jquery.com/animate Give image a class so logic can check by class for winner
            evt.target.style.fontSize = "30px";
            player++;
        }
        else {
            evt.target.innerText = "0";
            evt.target.style.fontSize = "30px";
            player++;
        }

    //Need logic to quickly figure out all possibilities of winning and if a char is 3x in row. Don't need to check for winner till move 5. Try to find cleanest way possible with as few ifs as possible
    //Look into erase method to clear innerHTML and cycling through a loop with a button. Maybe don't use erase or remove, idk yet

    //for loop below is obsolete with the on click event in j query
    // for (let i = 0; i < divs.length; i++) {
    //     $.divs[i].on("click", (evt) => {
    //         console.log(evt.target);
    //     })
    // }
        
    // });

    $( "#clickme" ).on("click", function() {
        $( "#rick" ).animate({ //animate doesn't work with slim.js
          opacity: 0.25,
          left: "+=50",
          height: "toggle"
        }, 5000, function() {
          // Animation complete.
        });
      });

      //app_js14 screenshot of hide animation

      //check out rapidapi.com
      //This is from https://dog.ceo/dog-api/
      const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://dog.ceo/api/breeds/image/random",
        "method": "GET"
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    $.get("https://dog.ceo/api/breeds/image/random", (response) => {
        console.log(response);
    });


    
})