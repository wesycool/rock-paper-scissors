/*
    generate random between 'r', 'p', 's'
    compare myChoice with random

    if myChoice = 'r' then
        if random is 'r' = no win/lose
        if random is 'p' = lose
        if random is 's' = win


    if myChoice = 'p' then
        if random is 'p' = no win/lose
        if random is 's' = lose
        if random is 'r' = win


    if myChoice = 's' then
        if random is 's' = no win/lose
        if random is 'r' = lose
        if random is 'p' = win
*/

function playRPS() {
    var myArray = ['r', 'p', 's'];
    var myScore = {win:0,lose:0,tie:0};
    
    do {  
    var games = prompt(`How many games to play?`);
    } while (isNaN(Number(games)));

    for( var i=0; i < games ; i++ ){
        do {
            var myChoice = prompt(`Rock, Paper, Scissors! What is your choice: ${myArray}`).toLowerCase();
        } while (!myArray.includes(myChoice));

        var randomChoice = myArray[Math.floor(Math.random()*3)];
        var results = (myChoice == randomChoice)? "tie" : ['rs','pr','sp'].includes(myChoice+randomChoice)? "win" : "lose";
        myScore[results]++;

        console.log(`${i+1} - My Choice: ${myChoice}, Random Choice: ${randomChoice}`)
        console.log(`You ${results}`);
    }
    console.log( `Results of ${games} games - win: ${myScore.win}, lose: ${myScore.lose}, tie: ${myScore.tie}`);
}