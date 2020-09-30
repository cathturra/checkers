// THE GAME PLAN (pun intended)
 
//1) upon clicking the checker square there will be a change of class applied to the target element

//2) another event occurs when the checker in reaches the opposite end of the board => condition must be placed

//3) distinguish between players ie. darker checkers associated with player one

//4) counter applied to tally the games. when a specified number of wins is reached another event is called 

//5) when a move is made, isolate the two particular squares which the player can choose from

//6) when a checker becomes a queen, isolate the four square options

//7) when a checker is diagonal from the oposing checker, allow for the oposition to be jumped

//8) when one checker has been jumped another event is called in which it disappears


//select elements

var startingPosition = document.getElementsByClassName('checker-s')
var removedChecker = document.getElementsByClassName('checker-start')
var endingPosition = document.getElementsByClassName('new-pos')



//functions/events

function moveCheckerStartingPos(event) {
    //remove class checker-s from starting position
    event.target.className.remove('checker-s-left')
    if (removedChecker.classList.contains('checker-start')) {

    }
}

function moveCheckerEndingPos(event) {
    //target element
    //add the class checker-s to the ending position
    event.target.className.add('checker-s-left')
    // if (endingPosition.classList.contains('new-pos'){

    // })
}

//execute events

endingPosition.addEventListener('click', moveCheckerEndingPos)

//goal: move one checker



//using coordinates
// let x = ;
// let y = ;

// let elem = document.elementFromPoint(x, y)

// elem.getBoundingClientReact()


// var checker = document.querySelector('checker-s')
// var ckeckerBoard = document.getElementById('checkers')

// checkerBoard.addEventListener('click', getClickPosition)

// function getClickPosition(e) {
//     var xPosition = e.clientX;
//     var yPosition = e.clientY;

//     var translate3dValue = "translate3d(" + xPosition + "px" + yPosition + "px, 0)",
//     checker.style.transform = translate3dValue;
// }

