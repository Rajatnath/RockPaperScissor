const userScore = 0;
const computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

console.log(getComputerChoice());

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            console.log("USER WINS!!! ");
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log("USER LOSES :( ");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            console.log("DRAW. ");
            break;
    }
}


function main () {
 rock_div.addEventListener('click', function() {
    game("rock")
 })

 paper_div.addEventListener('click', function() {
    game("paper")
 })

 scissor_div.addEventListener('click', function() {
    game("scissor")
 })
}

main();