let scoreHomeContainer = document.getElementsByClassName("score-home")[0];
let scoreGuestContainer = document.getElementsByClassName("score-guest")[0];
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let counterHome = 0;
let counterGuest = 0;

function plusOneHome() {
    counterHome++;
    scoreHome.textContent = counterHome;
    
    highlightWinner();
}

function plusTwoHome() {
    counterHome += 2;
    scoreHome.textContent = counterHome;
    
    highlightWinner();
}

function plusThreeHome() {
    counterHome += 3;
    scoreHome.textContent = counterHome;
    
    highlightWinner();
}

function plusOneGuest() {
    counterGuest++;
    scoreGuest.textContent = counterGuest;
    
    highlightWinner();
}

function plusTwoGuest() {
    counterGuest += 2;
    scoreGuest.textContent = counterGuest;
    
    highlightWinner();
}

function plusThreeGuest() {
    counterGuest += 3;
    scoreGuest.textContent = counterGuest;
    
    highlightWinner();
}

function highlightWinner() {
    if(counterHome > counterGuest){
        scoreHomeContainer.style.border = "2px solid rgba(144, 238, 144, 1)";
        scoreGuestContainer.style.border = "2px solid #080001";
    }    
    else if (counterHome < counterGuest){
        scoreHomeContainer.style.border = "2px solid #080001";
        scoreGuestContainer.style.border = "2px solid rgba(144, 238, 144, 1)";
    }
    else 
    {
        scoreHomeContainer.style.border = "2px solid #080001";
        scoreGuestContainer.style.border = "2px solid #080001";
    }
}
let minutes = 12;
let seconds = 0;
let interval;

function updateDisplay() {
    const minutesElement = document.querySelector('.minutes-text');
    const secondsElement = document.querySelector('.seconds-text');

    // Format minutes and seconds to always show two digits
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function startTimer() {
    // Clear any existing intervals
    clearInterval(interval);

    // Initialize the display
    updateDisplay();

    // Start the interval to update the timer every second
    interval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                alert('Time is up!');
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

// Optional: Function to stop the timer manually
function stopTimer() {
    clearInterval(interval);
}

function newGame() {
    counterHome = 0;
    scoreHome.textContent = 0;
    counterGuest = 0;
    scoreGuest.textContent = 0;
    
    highlightWinner();
    
    minutes = 12;
    seconds = 0;
    stopTimer();
    updateDisplay(); // Update the timer display
}
