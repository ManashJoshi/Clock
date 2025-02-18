
// Clock Functionality
function updateClocks() {
  const localTime = new Date().toLocaleTimeString();
  const nyTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });
  const londonTime = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" });
  const tokyoTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });

  document.getElementById("local-time").innerText = `Local Time: ${localTime}`;
  document.getElementById("new-york-time").innerText = `New York: ${nyTime}`;
  document.getElementById("london-time").innerText = `London: ${londonTime}`;
  document.getElementById("tokyo-time").innerText = `Tokyo: ${tokyoTime}`;
}
setInterval(updateClocks, 1000);

// Timer Functionality
let timerInterval;
function startTimer() {
  const minutes = parseInt(document.getElementById("timer-minutes").value) || 0;
  const seconds = parseInt(document.getElementById("timer-seconds").value) || 0;
  let totalSeconds = minutes * 60 + seconds;

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    document.getElementById("timer-display").innerText = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    if (totalSeconds === 0) {
      clearInterval(timerInterval);
      alert("Timer Finished!");
    }
    totalSeconds--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer-display").innerText = "00:00";
}

// Alarm Functionality
let alarmTime = null;
let alarmInterval;

function setAlarm() {
  alarmTime = document.getElementById("alarm-time").value;
  const alarmSound = document.getElementById("alarm-sound");

  if (alarmTime) {
    document.getElementById("alarm-status").innerText = `Alarm Set for ${alarmTime}`;
    if (alarmInterval) clearInterval(alarmInterval);

    alarmInterval = setInterval(() => {
      const currentTime = new Date().toTimeString().slice(0, 5);
      if (currentTime === alarmTime) {
        clearInterval(alarmInterval);
        alarmSound.play();
        alert("Alarm Ringing!");
      }
    }, 1000);
  } else {
    document.getElementById("alarm-status").innerText = "No Alarm Set";
  }
}
