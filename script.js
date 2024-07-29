'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?")
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrices: function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
      let price = 0

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'форма');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
      }
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price))

      sum += +price
    }
    return sum
  },
  getFullPrice: function getFullPrice() {
    return +appData.screenPrice + appData.allServicePrices;;
  },
  getServicePercentPrices: function getServicePercentPrices() {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  getTitle: function getTitle() {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
  },
  getRollbackMessage: function (price) {
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
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(key + ' ' + appData[key]);
    }
  }
}

appData.start();