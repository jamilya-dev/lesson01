"use strict";
const date = new Date();
const block = document.createElement("p");

const dayWeek = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const hours = date.getHours();
const weekDay = date.getDay();
const newYear = new Date(2024, 11, 31);
const dateNewYear = new Date(2024, 11, 31).getTime();
const dateNow = date.getTime();
const time = (dateNewYear - dateNow) / 1000;
const day = Math.floor(time / 60 / 60 / 24);
const formatTime = date.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

let days;
let text;

if (hours <= 6 || hours >= 22) {
  text = "Доброй ночи";
} else if (hours > 6 && hours <= 12) {
  text = "Доброe утро";
} else if (hours > 12 && hours <= 16) {
  text = "Добрый день";
} else if (hours > 16 && hours < 22) {
  text = "Добрый вечер";
}

if (day.toString()[day.toString().length - 1] === 1) {
  days = " день";
} else if (
  day.toString()[day.toString().length - 1] > 1 &&
  day.toString()[day.toString().length - 1] < 5
) {
  days = " дня";
} else {
  days = " дней";
}

block.innerHTML = `${text},<br>
Сегодня ${dayWeek[weekDay - 1]},<br>
Текущее время ${formatTime},<br>
До нового года осталось ${day} ${days}`;
document.body.append(block);
