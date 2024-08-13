'use strict';

class First {
  constructor(text) {
    this.text = text
  }
  hello() {
    console.log(this.text)
  };
}

const first = new First('Привет я метод родителя!')

class Second extends First {
  constructor(text) {
    super(text)
  }

  hello() {
    first.hello()
    super.hello()
  }
}

const second = new Second('А я наследуемый метод!')

second.hello()