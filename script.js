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

