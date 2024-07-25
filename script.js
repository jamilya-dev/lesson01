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

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}

const retRollbackMessage = function (price) {
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

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(retRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость разработки сайта ' + screenPrice + '₽');
