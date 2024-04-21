//Code Explained//

// When the document is fully loaded, execute the function defined inside
document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the id 'board' to manipulate it later
    const board = document.getElementById('board');
    // Initialize 'toggle' to true, which will help alternate square colors
    let toggle = true;
    // Loop to create 64 squares (8x8 board)
    for (let i = 0; i < 64; i++) {
        // Create a new div element for each square
        const square = document.createElement('div');
        // Assign classes based on 'toggle'; this alternates square colors
        square.className = 'square ' + (toggle ? 'black' : 'white');
        // Add the newly created square to the board element
        board.appendChild(square);
        // Toggle the boolean value to switch colors for the next square
        toggle = !toggle;
        // Every 8 squares (end of a row), toggle twice to start the new row with the same color as the previous row's start
        if ((i + 1) % 8 === 0) {
            toggle = !toggle;
        }
    }
});


// Function to change the board's theme to Chess, triggered by a button click
function changeToChess() {
    // Change the text of the element with class 'checker-board' to "Chess"
    document.querySelector('.checker-board').innerText = 'Chess';
    // Select all elements with class 'black' and change their background color to dark brown
    document.querySelectorAll('.black').forEach(square => square.style.backgroundColor = '#8B4513');
    // Select all elements with class 'white' and change their background color to light brown
    document.querySelectorAll('.white').forEach(square => square.style.backgroundColor = '#F5DEB3');
}

// Function to reset the board to the original Checkerboard theme
function resetToCheckerboard() {
    // Change the text of the element with class 'checker-board' back to "Checkerboard"
    document.querySelector('.checker-board').innerText = 'Checkerboard';
    // Select all elements with class 'black' and reset their background color to black
    document.querySelectorAll('.black').forEach(square => square.style.backgroundColor = 'black');
    // Select all elements with class 'white' and reset their background color to white
    document.querySelectorAll('.white').forEach(square => square.style.backgroundColor = 'white');
}




//SAME CODE NO EXPLANATION

// document.addEventListener('DOMContentLoaded', function () {
//     const board = document.getElementById('board');
//     let toggle = true; // Start with black
//     for (let i = 0; i < 64; i++) {
//         const square = document.createElement('div');
//         square.className = 'square ' + (toggle ? 'black' : 'white');
//         board.appendChild(square);
//         toggle = !toggle;
//         if ((i + 1) % 8 === 0) { // Switch starting color every new row
//             toggle = !toggle;
//         }
//     }
// });

// function changeToChess() {
//     document.querySelector('.checker-board').innerText = 'Chess';
//     document.querySelectorAll('.black').forEach(square => square.style.backgroundColor = '#8B4513');
//     document.querySelectorAll('.white').forEach(square => square.style.backgroundColor = '#F5DEB3');
// }

// function resetToCheckerboard() {
//     document.querySelector('.checker-board').innerText = 'Checkerboard';
//     document.querySelectorAll('.black').forEach(square => square.style.backgroundColor = 'black');
//     document.querySelectorAll('.white').forEach(square => square.style.backgroundColor = 'white');
// }

