let countdownInterval;
let countdownTargetTime;
let countdownCurrentTime;
let stopwatchInterval;
let stopwatchSeconds = 0;

function startCountdown() {
  const inputTime = document.getElementById("countdownInput").value;
  if (inputTime === "") {
    alert("Please enter a valid time.");
    return;
  }

  countdownTargetTime = getTimeInSeconds(inputTime);
  countdownCurrentTime = countdownTargetTime;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdownTimer").textContent = "Countdown stopped";
}

function updateCountdown() {
  countdownCurrentTime--;

  if (countdownCurrentTime < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdownTimer").textContent = "Time's up!";
    return;
  }

  const hours = Math.floor(countdownCurrentTime / 3600);
  const minutes = Math.floor((countdownCurrentTime % 3600) / 60);
  const seconds = countdownCurrentTime % 60;

  const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("countdownTimer").textContent = formattedTime;
}

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function updateStopwatch() {
  stopwatchSeconds++;
  const hours = Math.floor(stopwatchSeconds / 3600);
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
  const seconds = stopwatchSeconds % 60;

  const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("stopwatch").textContent = formattedTime;
}

function getTimeInSeconds(timeString) {
  const time = timeString.split(":");
  const hours = parseInt(time[0], 10) || 0;
  const minutes = parseInt(time[1], 10) || 0;
  const seconds = parseInt(time[2], 10) || 0;

  return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
