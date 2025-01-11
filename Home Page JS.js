const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Set the target date for Republic Day
const targetDate = "26 Jan 2024";

function countdown() {
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = new Date().getTime();

    const totalSeconds = (targetDateTime - currentDateTime) / 1000;

    if (totalSeconds <= 0) {
        // If the countdown has reached the target date, display "Sale Ended"
        document.getElementById("timer").innerHTML = "Sale Ended!";
        return; // Stop further execution
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

// Update the countdown every second
setInterval(countdown, 1000);
