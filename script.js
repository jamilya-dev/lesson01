const title = 'Название проекта';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 300;
const rollback = 99;
const fullPrice = 100000;
const adaptive = true;


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость разработки сайта ' + screenPrice + '₽');
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback / 100));