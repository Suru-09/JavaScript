//Calculating the time

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {

    const waitedDate = new Date("25 December 2021");
    const currentDate = new Date();

    console.log('I am the current date: ' , currentDate.toString());

//Diff is calculated in millisecond
    const diff = waitedDate.valueOf() - currentDate.valueOf();

    const seconds = Math.floor( (diff / 1000) % 60 );
    const minutes = Math.floor( (diff / 1000 / 60) % 60 );
    const hours =  Math.floor( ( diff/ 1000 / 3600) % 24 );
    const days = Math.floor( diff / 1000 / 60 / 60 / 24 );

    console.log('Seconds: ', seconds);
    console.log('Minutes: ', minutes);
    console.log('Hours: ', hours);
    console.log('Days: ', days);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {

    return time < 10 ? `0${time}` : time;
}
countdown();

//calling countdown each second
setInterval(countdown, 1000);


