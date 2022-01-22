let sq1 = $('sq1');
let sq2 = $('sq2');
let sq3 = $('sq3');
let sq4 = $('sq4');
let sq5 = $('sq5');
let sq6 = $('sq6');
let sq7 = $('sq7');
let sq8 = $('sq8');
let sq9 = $('sq9');

// //Vanilla JS
let player = 0;
let divs = $('.col-3');

function setBoard() {
    
    for ( let i = 0; i < divs.length; i++ ) {
        $(divs[i]).on("click", () => {
            handleClick(divs[i]);
            // checkForWin();
            
        })
    }
    
}

console.log(divs[5]);


function handleClick(evt) {
    // if(player == 0) {
    //     $("#reset").removeAttr("disabled");
    // }
    if (player % 2 == 0) {
        $(evt).addClass("X");
        console.log(evt.target);
        player++;
        $(evt).off("click");
        
    } else {
        $(evt).addClass("O");
        console.log(evt.target);
        player++;
        $(evt).off("click");
        
    }
} //Come up with conditional so setBoard() only runs once!
// -Counter? If on click has fired...

// Reset button functionality 
function reset() {
    
    $("div").removeClass("X O");
    // turn = 1;
    player = 0;
    // $("#reset").off("click");
    setBoard();
    // $("#reset").attr("disabled");
    
}
// $("#reset").on("click", reset());

 setBoard(); //Sets board for 1st time


    // console.log(divs);


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


//Turn checker logic - Geeksforgeeks
var turn = 1;

$("button").on("click", (evt) => {
    if (turn == 1) {
        $("#turn-counter").text("Rick's turn");

        $(this).addClass("X");
        turn = 2;
    } else {
        $("#turn-counter").text("Morty's turn");

        $(this).addClass("O");
        turn = 1;
    }
});

// //Check for illegal moves
// $("button").on("click", (evt) => {
//     if ($(this).hasClass="X" || $(this).hasClass("O")) {
//         // alert("Boo, not cool! Square is already filled."); 
//         $("modal").dialog();
//         //Is this how you call modal box? See https://stackoverflow.com/questions/19659173/how-do-i-display-image-in-alert-confirm-box-in-javascript
//     }
        
// });

//Check for all win possibilities --use green rgb(75, 245, 66) for win 
// function check(symbol) {
    //Use variables declared above for sq1
//     if ($(sq1).hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
//         $(".sq1").css("color", "rgb(75, 245, 66)"); $(".sq2").css("color", "rgb(75, 245, 66)"); $(".sq3").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
//         $(".sq4").css("color", "rgb(75, 245, 66)"); $(".sq5").css("color", "rgb(75, 245, 66)"); $(".sq6").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
//         $(".sq7").css("color", "rgb(75, 245, 66)"); $(".sq8").css("color", "rgb(75, 245, 66)"); $(".sq9").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
//         $(".sq1").css("color", "rgb(75, 245, 66)"); $(".sq4").css("color", "rgb(75, 245, 66)"); $(".sq7").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
//         $(".sq2").css("color", "rgb(75, 245, 66)"); $(".sq5").css("color", "rgb(75, 245, 66)"); $(".sq8").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
//         $(".sq3").css("color", "rgb(75, 245, 66)"); $(".sq6").css("color", "rgb(75, 245, 66)"); $(".sq9").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
//         $(".sq1").css("color", "rgb(75, 245, 66)"); $(".sq5").css("color", "rgb(75, 245, 66)"); $(".sq9").css("color", "rgb(75, 245, 66)");
//         return true;

//     } else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
//         $(".sq3").css("color", "rgb(75, 245, 66)"); $(".sq5").css("color", "rgb(75, 245, 66)"); $(".sq7").css("color", "rgb(75, 245, 66)");
//         return true;
        
    // } else {
    //     return false;
    //     alert(`It's a draw, Morty!
    //     Oh geez, Rick.`);
    // }
// }




//     //Add an alert box or modal box after game ends that says who won

//     //Finish reset button at bottom. Try refreshing browser on click instead: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery

//Worse case scenario, just submit what I have



//Resources
//https://www.geeksforgeeks.org/create-a-tic-tac-toe-game-using-jquery/ 

// ASCII art https://www.reddit.com/r/rickandmorty/comments/3rmsgf/does_anyone_have_the_ascii_art_of_the_head_saying/


//Maybe check animate doc -- api.jquery.com/animate Give image a class so logic can check by class for winner
//api.jquery.com/on