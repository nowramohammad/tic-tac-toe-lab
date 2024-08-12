/*-------------------------------- Constants --------------------------------*/
const board =['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X';
let isGameActive = true;
const infoDisplay = document.getElementById('info');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
function handleSqrClick(event) {
    const clickedSqr = event.target;
    const sqrId = clickedSqr.getAttribute('id');

    if (board[sqrId] !== '' || !isGameActive) {
        return;
    }

    updateSqr(clickedSqr, sqrId);
    checkWinner();
}
function updateSqr(sqr, id) {
    board[id] = currentPlayer;
    sqr.textContent = currentPlayer;
}
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    infoDisplay.textContent = `Player ${currentPlayer}'s turn`;
}
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningCombos.length; i++) {
        const winCombos = winningCombos[i];
        const a = board[winCombos[0]];
        const b = board[winCombos[1]];
        const c = board[winCombos[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        infoDisplay.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        infoDisplay.textContent = 'Draw!';
        isGameActive = false;
        return;
    }

    switchPlayer();
}
function resetGame() {
    currentPlayer = 'X';
    isGameActive = true;
    board.fill('');
    document.querySelectorAll('.sqr').forEach(sqr => (sqr.textContent = ''));
    infoDisplay.textContent = `Player X's turn`;
}
document.querySelectorAll('.sqr').forEach(sqr => sqr.addEventListener('click', handleSqrClick));

/*
const info = document.querySelector("#info");
function creatboard() {
    const emptySqr = " ".repeat(9).split("");
    const sqrGrid = emptySqr
    .map((t) => `<button class="tile"></button>`)
    .join("");
    
    turn = "X";
    info.textContent = `${turn}'s turn;`
   
    

}
creatboard();

function checkScore() {
    const allSqr = [...document.querySelectorAll(".title")];
    const sqrValues = allSqr.map((t) => t.dataset.value);
    const isWinner = winningCombos.some((combo) => {
        const [a, b, c] = combo;
        return (
            sqrValues[a] &&
            sqrValues[a] === sqrValues[b] &&
            sqrValues[a] === sqrValues[c]

     );
    });
    if (isWinner) {
        return alert("you won!");
        
    }
    turn = turn === "X" ? "0" : "X";
}
function resetGame() {
let seconds = 3;
const timer = setInterval(() =>{
    info textContent =`Restarting in${seconds}..`;
    seconds--;
    if(seconds <0){
    clearInterval(timer);
    creatGameboard;
    }},
    1000);
}
    function showCongrats() {
    info.textContent = `${turn} wins!`;
    gameBoard.removeEventListener("'click", handelGameboardClick);
    gameBoard.setAttribute("inert", true);
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
    emojis: ["🥳", "🥳",👏🏻],
    });
    
    }


function handeleboardClick(e) {
    const valueExists = e.target.dataset.value;
    if (!valueExists) {
        e.target.datset.value = turn;
        turn = turn === "X" ? "0" : "X";
    }
    console.log("🖲️ ~ handelboardClick ~ valueExists:", valueExists);

}  */

/*----------------------------- Event Listeners -----------------------------*/



