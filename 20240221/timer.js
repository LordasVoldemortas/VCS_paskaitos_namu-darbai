let seconds = 600;
let milliseconds = 0;
let timerInterval;
let stopwatchInterval;

// timer kintamieji
let timerOpen = true;
const timerSeconds = document.querySelector('.timer .seconds');
const timerMinutes = document.querySelector('.timer .minutes');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const timerdisplay = document.querySelector('.timer');
// stopwatch kintamieji
const stopwatchTab = document.querySelector('.stopwatchtab');
const stopWatchSeconds = document.querySelector('.stopwatch .seconds');
const stopWatchMinutes = document.querySelector('.stopwatch .minutes');
const timertab = document.querySelector('.timertab');
const stopwatchdisplay = document.querySelector('.stopwatch');
const stopwatchmilliseconds = document.querySelector('.stopwatch .milliseconds')

const updateTimer = () => {
    timerMinutes.innerText = Math.floor(seconds / 60);
    timerSeconds.innerText = seconds % 60;
};

updateTimer();

timerdisplay.style.display = 'none';
stopwatchdisplay.style.display = 'block';

const timer = () => {
    updateTimer();
    if (seconds === 0) {
        clearInterval(timerInterval);
        alert('TIME IS UP!')
    }
    seconds--;
};

const stopWatch = () => {
    stopwatchmilliseconds.inner
    if(milliseconds === 999) {
        stopWatchSeconds.textContent = 1;
        milliseconds = 0;
    }
    milliseconds++;
};

startButton.onclick = () => {
    if (timerOpen) {//timer tab
        if (startButton.textContent === 'start') {
            startButton.textContent = 'stop';
            timerInterval = setInterval(timer, 1000);
        } else {
            startButton.textContent = 'start';
            clearInterval(timerInterval);
        }
    } else {//stowatch tab
        if (startButton.textContent === 'start') {
            startButton.textContent = 'stop';
            stopwatchInterval = setInterval(stopWatch, 1);
        } else {
            startButton.textContent = 'start';
            clearInterval(stopwatchInterval);
        }
    }
};

resetButton.onclick = () => {
    clearInterval(timerInterval);
    seconds = 600;
    updateTimer();
};

stopwatchTab.onclick = () => {
    timerdisplay.style.display = 'none';
    stopwatchdisplay.style.display = 'block';
    timerOpen = false;
};

timertab.onclick = () => {
    timerdisplay.style.display = 'block';
    stopwatchdisplay.style.display = 'none';
    timerOpen = true;
};