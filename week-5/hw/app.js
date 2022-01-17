// let square1 = $('square1');
// let square2 = $('square2');
// let square3 = $('square3');
// let square4 = $('square4');
// let square5 = $('square5');
// let square6 = $('square6');
// let square7 = $('square7');
// let square8 = $('square8');
// let square9 = $('square9');

// //Vanilla JS
// // player = 0;
// // let divs = $('.col-3');
// // for ( let i = 0; i < divs.length; i++ ) {
// //     divs[i].addEventListener('click', handleClick(evt));
// // }

// // function handleClick(evt) {
// //     if (player % 2 == 0) {
// //         evt.target.classList.add("X"); 
// //         evt.remove
// //         player++;
// //     } else {
// //         evt.target.classList.add("X"); 
// //         evt.target.setAttribute("onclick", "return false");
// //         player++;
// //     }
// // }

// //     console.log(divs);


//     // $('#main-board').on("click", (evt) => { 
//     //     // console.log(evt) //for testing
//     //     if (player % 2 == 0) {
//     //         // evt.target.innerText = "X"; 
//     //         // evt.target.style.fontSize = "30px";
//     //         console.log(evt.target.innerHTML.includes("img"));
        
//     //             // if (evt.target.classList.value.includes("X") || evt.target.classList.value.includes("O")) {
//     //             //     alert("Boo, not cool! Square is already filled.");
                   
//     //             // } else {
//     //             //     evt.target.classList.add("X"); 
//     //             //     evt.target.setAttribute("onclick", "return false");
//     //             //     player++;
//     //             // }

//     //             evt.target.classList.add("X"); 
//     //             evt.target.setAttribute("onclick", "return false");
//     //             player++;
              
//     //     }
//     //     else {
//     //         // evt.target.innerText = "0";
//     //         // evt.target.style.fontSize = "30px";
//     //         // while (player % 2 !== 0) {
//     //         //     if (evt.target.classList.value.includes("X") || evt.target.classList.value.includes("O")) {
//     //         //         alert("Square is already filled!");
//     //         //     } else {
//     //         //         evt.target.classList.add("O"); 
                    
//     //         //         player++;
//     //         //     }
//     //         // }

//     //         evt.target.classList.add("O"); 
//     //         evt.target.setAttribute("onclick", "return false");
//     //         player++;
            
//     //     }
//     // });


// //Turn checker logic and change counter above board
var turn = 1;

$("button").on("click", (evt) => {
    if (turn == 1) {
        $("turn-counter").text("Morty's turn");
    } else {
        $("#turn-counter").text("Rick's turn");
    }
});

// //Check for illegal moves
$("button").on("click", (evt) => {
    if ($(this).hasClass="X" || $(this).hasClass("O")) {
        // alert("Boo, not cool! Square is already filled."); ASCII art https://www.reddit.com/r/rickandmorty/comments/3rmsgf/does_anyone_have_the_ascii_art_of_the_head_saying/

        $("modal").dialog();
        //Is this how you call modal box? See https://stackoverflow.com/questions/19659173/how-do-i-display-image-in-alert-confirm-box-in-javascript
    }
        
});

//Check for all win possibilities --use green rgb (75, 245, 66) for win
function check(symbol) {
    if ($(".sq1").hasClass(symbol) &&
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq2").css("color", "green");
        $(".sq3").css("color", "green");
        return true;
    } else if ($(".sq4").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq6").hasClass(symbol))
    {
        $(".sq4").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq6").css("color", "green");
        return true;
    } else if ($(".sq7").hasClass(symbol)
            && $(".sq8").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq7").css("color", "green");
        $(".sq8").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq4").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq4").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else if ($(".sq2").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq8").hasClass(symbol))
    {
        $(".sq2").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq8").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq6").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq3").css("color", "green");
        $(".sq6").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq3").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else {
        return false;
    }
}





//     //Add an alert box after game ends that says who won

//     //Add a reset button at bottom



//     //Resources
//     //Maybe check animate doc -- api.jquery.com/animate Give image a class so logic can check by class for winner
//     //api.jquery.com/on