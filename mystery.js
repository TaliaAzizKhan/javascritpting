
/* Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code
// A room can be either of - dining room, gallery, ballroom, or billiards room

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

var room = "billiards room";
var suspect = "Mr. Parkes";
var weapon = "";  // Initial value
var solved = false;


if (room === 'ballroom') {
    weapon = 'poison';
    // Mr. Kalehoff was present in the ballroom at the time of the murder
    if(suspect==="Mr. Kalehoff") 
        solved = true;
}
/* ANOTHER WAY OF CHECKING THE CONDITION
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;
}
We suggest you to try this way of checking the condition as well for an unsolved mystery.
*/
else if (room === 'gallery') {
    weapon = 'trophy';
    // Ms. Van Cleve was present in the gallery at the time of the murder
    if(suspect==="Ms. Van Cleve") 
        solved = true;
}
else if (room === 'billiards room') {
    weapon = 'pool stick';
    // Mrs. Sparr was present in the billiards room at the time of the murder
    if(suspect==="Mrs. Sparr") 
        solved = true;
} 
else if (room === 'dining room') {
    weapon = 'knife';
    // Mr. Parkes was present in the dining room at the time of the murder
    if(suspect==="Mr. Parkes") 
        solved = true;
}   

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

/* ****************************************** */

