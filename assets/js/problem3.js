/**
 * Problem #3 - Color Switching
 * Code based from stackoverflow
 * https://stackoverflow.com/a/1484514
 */
function changeColor() {
    var section = document.getElementById("problem3");  // Get section
    section.style.backgroundColor = getRandomColor();   // Generate a random color and set it to backgroundColor
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';                       // All possible characters in a hex color code
    var color = '#';                                        // Store empty color
    for (var i = 0; i < 6; i++) {                           // Loop six times to generate hex color code
        color += letters[Math.floor(Math.random() * 16)];   // Randomly pick hex value from 0 - F
    }
        return color;                                       // Return completed color
}