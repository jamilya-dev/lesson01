let title = 'Название проекта';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 300;
let rollback = 99;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость разработки сайта ' + screenPrice + '₽');
let arr = screens.toLowerCase().toString().split("");
console.log(arr);
console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать? пример: "Простые, Сложные, Интерактивные"');
screenPrice = prompt('Сколько будет стоить данная работа?');
adaptiveQuest = prompt('Нужен ли адаптив на сайте?');
if (adaptiveQuest === 'Да' || adaptiveQuest === 'да') {
  adaptive = true;
} else if (adaptiveQuest === 'Нет' || adaptiveQuest === 'нет') {
  adaptive = false;
} else {
  adaptive = 'Некорректное значение';
};
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);
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
