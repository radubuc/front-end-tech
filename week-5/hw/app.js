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

    console.log(divs);


    $('#main-board').on("click", (evt) => { 
        // console.log(evt) //for testing
        if (player % 2 == 0) {
            // evt.target.innerText = "X"; 
            // evt.target.style.fontSize = "30px";
            console.log(evt.target.innerHTML.includes("img"));
        
                // if (evt.target.classList.value.includes("X") || evt.target.classList.value.includes("O")) {
                //     alert("Square is already filled!");
                   
                // } else {
                //     evt.target.classList.add("X"); 
                //     evt.target.setAttribute("onclick", "return false");
                //     player++;
                // }

                evt.target.classList.add("X"); 
                evt.target.setAttribute("onclick", "return false");
                player++;
              
        }
        else {
            // evt.target.innerText = "0";
            // evt.target.style.fontSize = "30px";
            // while (player % 2 !== 0) {
            //     if (evt.target.classList.value.includes("X") || evt.target.classList.value.includes("O")) {
            //         alert("Square is already filled!");
            //     } else {
            //         evt.target.classList.add("O"); 
                    
            //         player++;
            //     }
            // }

            evt.target.classList.add("O"); 
            evt.target.setAttribute("onclick", "return false");
            player++;
            
        }
    });

    //Add an alert box after game ends that says who won

    //Add a reset button at bottom



    //Resources
    //Maybe check animate doc -- api.jquery.com/animate Give image a class so logic can check by class for winner
    //api.jquery.com/on