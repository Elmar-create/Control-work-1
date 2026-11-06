let time = 10;
let interval = null;

const timer = document.getElementById("timer");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

// START
start.addEventListener("click", () => {
    if (interval !== null || time === 0) return;

    interval = setInterval(() => {
        time--;
        timer.textContent = time;

        if (time === 0) {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
});

// STOP
stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

// RESET
reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    time = 10;
    timer.textContent = time;
});