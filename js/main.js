const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('modal');
const scoreboard = {
    player: 0,
    computer: 0,
}

// Play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
  }
  

//get computers choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//get game winner
function getWinner(player,computer) {
    if(player === computer) {
        return 'draw';
    } else if(player === 'rock'){
        if(computer === 'paper') {
            return 'computer'
        } else {
            return 'player';
        }
    } else if(player === 'paper'){
        if(computer==='scissors'){
            return 'computer'
        } else {
            return 'player';
        }
    } else if(player === 'scissors'){
        if(computer==='rock'){
            return 'computer'
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player'){
        scoreboard.player++;
        //show modal
        result.innerHTML = `
        <h1 class="text-win">You win</h1>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else if(winner === 'computer') {
        //inc computer score
        scoreboard.computer++;
        //show modal result
        result.innerHTML = `
        <h1 class="text-lose">You lose!</h1>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else {
        result.innerHTML = `
        <h1>it's a draw</h1>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;

    }
    //show score
    score.innerHTML = `<p>player: ${scoreboard.player}</p>
    <p>computer: ${scoreboard.computer} </p>
    `;

    modal.style.display = 'block';
    
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));