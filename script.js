'use strict';
const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать? пример: "Простые, Сложные, Интерактивные"');
const screenPrice = prompt('Сколько будет стоить данная работа?');
const answer = confirm("Нужен ли адаптив на сайте?")
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = prompt('Сколько это будет стоить?');
const fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const servicePercentPrice = Math.ceil(fullPrice - rollback);
switch (true) {
  case fullPrice >= 30000:
    console.log('Даем скидку в 10%');
    break
  case fullPrice >= 15000 && fullPrice < 30000:
    console.log('Даем скидку в 5%');
    break
  case fullPrice >= 0 && fullPrice < 15000:
    console.log('Скидка не предусмотрена');
    break
  case fullPrice < 0:
    console.log('Что то пошло не так');
    break
}
console.log(servicePercentPrice);
