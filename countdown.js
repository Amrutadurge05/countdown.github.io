

function updateCountdown() {
    var targetDate = new Date("2024-05-01T00:00:00"); 
    var currentDate = new Date();

    var timeDifference = targetDate - currentDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

updateCountdown();
setInterval(updateCountdown, 1000);


