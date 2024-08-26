let currentPlayer = 1; // 1 for 'X', 2 for 'O'
const board = Array(9).fill(null); // Array to track the board state

const imageList = {
    1: 'images/cross.png',
    2: 'images/circle.png'
};

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const handleClick = (e) => {
    const index = parseInt(e.id); // Get index from id

    board[index] = currentPlayer; // Update board state

    const myRoom = document.getElementById(e.id);
    const img = document.createElement('img');
    img.src = imageList[currentPlayer];
    myRoom.append(img);
    myRoom.classList.add("none");

    if (checkWin()) {
        alert(`Player ${currentPlayer === 1 ? 'X' : 'O'} wins!`);
        resetGame();
        return;
    }

    if (board.every(cell => cell !== null)) {
        alert("It's a draw!");
        resetGame();
        return;
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;
};

const checkWin = () => {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] == currentPlayer)
    })
};

const resetGame = () => {
    board.fill(null);
    document.querySelectorAll('.room').forEach(room => {
        room.innerHTML = '';
        room.classList.remove("none");
    });
    currentPlayer = 1; // Reset to player 'X'
};
