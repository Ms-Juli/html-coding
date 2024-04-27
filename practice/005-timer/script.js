const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const currentDate = new Date();
// const birthDay = new Date("2025-02-07");
const birthDay = new Date("2024-04-28");
let diff = Math.floor((birthDay - currentDate)/(1000));

console.log(Math.floor (diff));

setInterval(()=> {
    diff = diff - 1;

    let day = diff/60/60/24;
    console.log(day);
},1000);