// A simple array of strings for our content
const content = [
    "$ get-joke",
    "> Why do programmers prefer dark mode?",
    "> Because light attracts bugs!",
    "",
    "$ get-trend --topic=frontend",
    "> [SYSTEM_LOG]: Tailwind CSS is on the rise due to its utility-first approach.",
    " ",
    "$ whoami",
    "> Console Says: The ultimate source for developer humor.",
];

// Get the console container element
const consoleContainer = document.querySelector('.console-container');
let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 50; // Milliseconds per character

function typeLine() {
    if (lineIndex < content.length) {
        if (charIndex < content[lineIndex].length) {
            consoleContainer.innerHTML += content[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, typingSpeed);
        } else {
            consoleContainer.innerHTML += '<br>'; // Add a line break
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, typingSpeed * 5); // Pause before next line
        }
    }
}

// Start the typing animation
typeLine();