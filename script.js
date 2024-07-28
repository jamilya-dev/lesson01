'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice))

  adaptive = confirm("Нужен ли адаптив на сайте?")
}

const showTypeOf = function (variable) {
  return variable + ' ' + typeof variable;
}

const getRollbackMessage = function (price) {
  switch (true) {
    case price >= 30000:
      return "Даем скидку в 10%";
      break
    case price >= 15000 && price < 30000:
      return 'Даем скидку в 5%';
      break
    case price >= 0 && price < 15000:
      return 'Скидка не предусмотрена';
      break
    case price < 0:
      return 'Что то пошло не так';
      break
  }
}

const getAllServicePrices = function () {
  let sum = 0
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'форма');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
    }
    sum += +prompt('Сколько это будет стоить?');
    while (!isNumber(sum)) {
      sum += +prompt('Сколько это будет стоить?');
    }
  }
  return sum
}

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
  return fullPrice;
}

function getTitle() {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLocaleLowerCase();
}

function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screenPrice);

console.log(allServicePrices, 'allServicePrices')
console.log(getRollbackMessage(fullPrice));
console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens.length);
console.log(getServicePercentPrices());
console.log('Стоимость верстки экранов ' + screenPrice + '₽' + ' и ' + 'Стоимость разработки сайта ' + fullPrice + '₽');