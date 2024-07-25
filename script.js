'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать? пример: "Простые, Сложные, Интерактивные"');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let rollback = 10
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (rollback / 100));
let allServicePrices;


const showTypeOf = function (variable) {
  return variable + typeof variable;
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

const getAllServicePrices = function (price1, price2) {
  allServicePrices = Number(price1) + Number(price2);
  return allServicePrices;
}

function getFullPrice(price, allprice) {
  fullPrice = Number(price) + Number(allprice);
  return fullPrice;
}

function getTitle(title) {
  title = title.toLowerCase();
  title = title[1].toUpperCase() + title.substring(2);
  return title;
}

function getServicePercentPrices(price, percent) {
  servicePercentPrice = price - (price * (percent / 100));
  return servicePercentPrice;
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getAllServicePrices(servicePrice1, servicePrice2)
getFullPrice(screenPrice, allServicePrices);
getTitle(title);
getServicePercentPrices(fullPrice, rollback);

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));