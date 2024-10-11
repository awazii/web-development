const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let playerScore = 0;
let computerScore = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || currentPlayer !== 'X') return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        alert('Player wins!');
        playerScore++;
        updateScores();
        resetGame();
    } else if (board.every(cell => cell !== '')) {
        alert('It\'s a tie!');
        resetGame();
    } else {
        currentPlayer = 'O';
        computerMove();
    }
}

function computerMove() {
    let availableCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    board[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';

    if (checkWin()) {
        alert('Computer wins!');
        computerScore++;
        updateScores();
        resetGame();
    } else if (board.every(cell => cell !== '')) {
        alert('It\'s a tie!');
        resetGame();
    } else {
        currentPlayer = 'X';
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}

