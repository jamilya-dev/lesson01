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

const createHello = (hours) => {
  if (hours <= 5 || hours >= 21) {
    return "Доброй ночи";
  } else if (hours > 5 && hours <= 11) {
    return "Доброe утро";
  } else if (hours > 11 && hours <= 15) {
    return "Добрый день";
  } else if (hours > 15 && hours < 21) {
    return "Добрый вечер";
  }
};

const createDays = (day) => {
  if (day.toString()[day.toString().length - 1] === "1") {
    return " день";
  } else if (
    day.toString()[day.toString().length - 1] > "1" &&
    day.toString()[day.toString().length - 1] < "5"
  ) {
    return " дня";
  } else {
    return " дней";
  }
};

const createBlock = () => {
  block.innerHTML = `${createHello(hours)},<br>
	Сегодня ${dayWeek[weekDay - 1]},<br>
	Текущее время ${formatTime},<br>
	До нового года осталось ${day} ${createDays(day)}`;
  document.body.append(block);
};

createBlock();
