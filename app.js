let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function capitalizeFirstLetter(word) {
    if (word === "rock")
        return "Rock";
    if (word === "paper")
        return "Paper";
    if (word === "scissor")
        return "Scissor";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalizeFirstLetter(userChoice)} beats ${capitalizeFirstLetter(computerChoice)}. You Win 🏆`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalizeFirstLetter(userChoice)} loses to ${capitalizeFirstLetter(computerChoice)}. You Lost 💩`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${capitalizeFirstLetter(userChoice)} repels ${capitalizeFirstLetter(computerChoice)} so. It's A Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win( userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose( userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw( userChoice, computerChoice);
            break;
    }
}


function main () {
 rock_div.addEventListener('click',() => game("rock"))

 paper_div.addEventListener('click',() => game("paper"))

 scissor_div.addEventListener('click',() => game("scissor"))
}

main();