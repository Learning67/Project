function updateTime() {
  const now = new Date(); //Captures the current date and time
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeString;
}
 
updateTime(); //Shows the initial time
 
setInterval(updateTime, 1000); //Updates the time every second