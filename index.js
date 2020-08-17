// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 has an embedded function, counter2 does not.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  Counter1. It has an inner function which pulls information from the outer function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *   Counter1 is likely preferable if you plan to use the main function multiple times to keep track of an increating number. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}

console.log("Task 2:")
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, inningsNum){
    homeScore = 0
    awayScore = 0
    
    for (let i = 0; i < inningsNum; i++) {
      homeScore += cb();
      awayScore += cb();
    }
    let bothScores = {
      Home: homeScore,
      Away: awayScore
    }
    return bothScores;
}

console.log("");
console.log("Task 3:");
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScoreCB, inningCB, inningsCount ) {
  let homeTotal = 0;
  let awayTotal = 0;

  for (let i  = 1; i <= inningsCount; i++) {
    let homeInning = getInningScoreCB();
    let awayInning = getInningScoreCB();
    homeTotal += homeInning;
    awayTotal += awayInning;
    console.log(`${i} inning: ${awayInning} - ${homeInning}`);
  }
  return `Final Score: ${awayTotal} - ${homeTotal}`

}

console.log("");
console.log("Task 4:")
console.log(scoreboard(inning, 0, 9));




