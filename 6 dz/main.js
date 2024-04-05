const formatNum = num => num < 10 ? `0${num}` : num;

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const timerInterval = setInterval(() => {
    let date = new Date();
    let Jasur = new Date(2024, 3, 6);
    let difference = Jasur.getTime() - date.getTime();

    if (difference <= 0) {
        clearInterval(timerInterval);
        document.body.innerHTML += "<h2>Поздравляем с наступлением дня рождения!</h2>";
    } else {
        day.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24));
        hour.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 % 24));
        minute.textContent = formatNum(Math.floor(difference / 1000 / 60 % 60));
        second.textContent = formatNum(Math.floor((difference / 1000) % 60));
    }
}, 1000);