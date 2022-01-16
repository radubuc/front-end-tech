let square1 = $('square1');
let square2 = $('square2');
let square3 = $('square3');
let square4 = $('square4');
let square5 = $('square5');
let square6 = $('square6');
let square7 = $('square7');
let square8 = $('square8');
let square9 = $('square9');

player = 0;
    let divs = $('.col-3');
    $('#main-board').on("click", (evt) => { //api.jquery.com/on
        // console.log(evt) //for testing
        if (player % 2 == 0) {
            // evt.target.innerText = "X"; 
            // evt.target.style.fontSize = "30px";
            evt.target.innerHTML = "<img src='tinified/x-rick.png' class='X' alt='X Rick' />"; //Maybe check animate doc -- api.jquery.com/animate Give image a class so logic can check by class for winner
            evt.target.style.backgroundColor = "rgb(75, 245, 66)";
            
            player++;
        }
        else {
            // evt.target.innerText = "0";
            // evt.target.style.fontSize = "30px";
            evt.target.innerHTML = "<img src='tinified/o-morty.png' class='O' alt='O Morty' />";
            evt.target.style.backgroundColor = "rgb(255, 179, 0)";
            
            player++;
        }
    });

    //Add an alert box after game ends that says who won

    //Add a reset button at bottom