const digitalClock = document.querySelector('.digital-clock');
const handHour = document.querySelector('.hour');
const handMinute = document.querySelector('.minute');
const secondhand = document.querySelector('.second');
const datee = document.querySelector('.date');

function clockFun() {
    const now = new Date();

    const month = now.getMonth() + 1; 
    const day = now.getDate(); 
    const year = now.getFullYear();

    const hours = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    
    const hoursDeg = ((hours % 12) / 12) * 360 + (minute / 60) * 30;
    const minuteDeg = ((minute + second / 60) / 60) * 360;
    const secondDeg = (second / 60) * 360;

  
    handHour.style.transform = `rotate(${hoursDeg}deg)`;
    handMinute.style.transform = `rotate(${minuteDeg}deg)`;
    secondhand.style.transform = `rotate(${secondDeg}deg)`;

    // Format digital clock
    const formattedMinute = minute < 10 ? "0" + minute : minute;
    const formattedSeconds = second < 10 ? "0" + second : second;
    const formattedHours = hours < 10 ? "0" + hours : hours;

    const formattedMonth = month < 10 ? "0" + month : month;
    const formattedDay = day < 10 ? "0" + day : day;

    digitalClock.innerHTML = `${formattedHours}:${formattedMinute}:${formattedSeconds}`;
    datee.innerHTML = `${formattedDay}.${formattedMonth}.${year}`;
}

setInterval(clockFun, 1000);
clockFun();
