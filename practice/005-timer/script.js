const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const currentDate = new Date();
const birthDay = new Date("2025-02-07");
let diff = Math.floor((birthDay - currentDate)/(1000));

console.log('Result diff:', diff);

setInterval(()=> {
    diff = diff - 1;

    let diffDay = diff % (60*60*24);
    let day = (diff - diffDay) / (60*60*24);

    daysDOM.innerText = day;

    let diffHours = diffDay % (60*60);
    let hours = (diffDay - diffHours) / (60*60);

    hoursDOM.innerText = hours;

    let diffMinutes = diffHours % (60);
    let minutes = (diffHours - diffMinutes) / (60);

    minutesDOM.innerText = minutes;
    secondsDOM.innerText = diffMinutes;

    let outputTime =` Days: ${day}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${diffMinutes}`;
    console.log(outputTime);
},1000);