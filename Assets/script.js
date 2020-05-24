var myScore = {win:0,lose:0,tie:0};
var arrayChoice = ['rock', 'paper', 'scissors'];

function playRPS(myChoice) {
    var randomChoice = arrayChoice[Math.floor(Math.random()*3)];
    var results = (myChoice == randomChoice)? "tie" : ['rs','pr','sp'].includes(myChoice[0]+randomChoice[0])? "win" : "lose";
    myScore[results]++;

    document.getElementById('rps').style.backgroundImage = `url(./Assets/${randomChoice}.png)`;
    document.getElementById('list').innerHTML += `<li>Player: ${myChoice} - Computer: ${randomChoice} - You ${results}</li>`
    document.getElementById(results).textContent = myScore[results];
}

arrayChoice.forEach(value => document.querySelector(`#${value}`).addEventListener("click", function(){playRPS(value)}));