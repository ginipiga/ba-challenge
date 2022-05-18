const clockTitle = document.querySelector(".js-clock");

function C_Day() {
    const masTime = new Date("2022-12-25, 0:00:00");
    const todayTime = new Date();
    const diff = masTime - todayTime;
    const diffDay = String(Math.floor(diff / (1000*60*60*24)));
    const diffHour =String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
    const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
    const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
    clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`; }
    
C_Day();
setInterval(C_Day, 1000);
