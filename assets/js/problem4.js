/**
 * Problem #4 - Alternating Texts
 */

window.setInterval(swapText, 3000);    // Run swapText every three seconds

var currIndex = 0;
var phraseList = ["Display alternating text using a timer or when a user clicks a button",
                  "Display text that alternates using a button or when a user clicks a timer",
                  "Text button using a display or when a user's click alternates"];

function swapText() {
    var section = document.getElementById("p4-text");

    section.innerText = phraseList[currIndex % phraseList.length]
    currIndex++;
}