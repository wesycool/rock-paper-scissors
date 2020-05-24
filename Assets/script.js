var rockBtn = document.querySelector("#rock");
var paperBtn = document.querySelector("#paper");
var scissorsBtn = document.querySelector("#scissors");

var myScore = {win:0,lose:0,tie:0};

function playRPS(myChoice) {
    var randomChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)];
    var results = (myChoice == randomChoice)? "tie" : ['rockscissors','paperrock','scissorspaper'].includes(myChoice+randomChoice)? "win" : "lose";
    myScore[results]++;

    document.getElementById('rps').style.backgroundImage = `url(./Assets/${randomChoice[0]}.png)`;
    document.getElementById('list').innerHTML += `<li>Player: ${myChoice} - Computer: ${randomChoice} - You ${results}</li>`
    document.getElementById(results).textContent = myScore[results];
}

rockBtn.addEventListener("click", function(){playRPS('rock')});
paperBtn.addEventListener("click", function(){playRPS('paper')});
scissorsBtn.addEventListener("click", function(){playRPS('scissors')});
