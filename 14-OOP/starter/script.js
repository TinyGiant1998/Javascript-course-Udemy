// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2025 - birthYear);
//   // };
// };

// const suraj = new Person('Suraj', 1998);
// console.log(suraj);

// const surya = new Person('Surya', 1997);
// console.log(surya, suraj);

// //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// suraj.calcAge();

// console.log(suraj.__proto__);
// console.log(suraj.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(suraj));

// Person.prototype.species = 'Homo Sapiens';
// console.log(suraj);
// console.log(suraj.species);

// console.log(suraj.hasOwnProperty('firstName'));
// console.log(suraj.hasOwnProperty('species'));

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// Car.prototype.acceleration = function () {
//   this.speed += 10;
//   console.log(`The speed of ${this.make} is ${this.speed}.`);
// };

// //

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`The speed of ${this.make} is ${this.speed}.`);
// };

// car1.acceleration();
// car1.acceleration();
// car1.brake();
// car1.acceleration();

//ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.fullName}`);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //static method
//   static hey() {
//     console.log('Hey there 😉');
//     console.log(this);
//   }
// }

// const suraj = new PersonCl('Suraj Budhathoki', 1998);
// console.log(suraj);
// suraj.calcAge();
// console.log(suraj.__proto__ === PersonCl.prototype);
// suraj.greet();
// console.log(suraj.age);
// PersonCl.hey();

// const walter = new PersonCl('Walter White', 1997);

// const account = {
//   owner: 'suraj',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1990;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1988);
// sarah.calcAge();
// console.log(sarah);

// //Challenge #02

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`The speed of ${this.make} is ${this.speed} km/hr.`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`The speed of ${this.make} is ${this.speed} km/hr.`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();

// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const suraj = new Student('Suraj', 1998, 'BIT');
// console.log(suraj);
// suraj.introduce();
// suraj.calcAge();

// //Challenge #02
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acclerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.acclerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h and charge is ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.acclerate();
// tesla.brake();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const suraj = new StudentCl('Suraj', 1998, 'BIT');
console.log(suraj);
suraj.introduce();

const PersonProto = {
  calacAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
console.log(jay);
jay.introduce();
jay.calacAge();

// 1. Public Fields
// 2. Private Fields
// 3. Public methods
// 4. Private methods

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;
  }

  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
    return this;
  }
}

const acc1 = new Account('Suraj', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);

acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(25000).withdraw(4000);
console.log(acc1);

//challenge #04
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The speed of ${this.make} is ${this.speed} km/hr.`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`The speed of ${this.make} is ${this.speed} km/hr.`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h and charge is ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(55).accelerate();

console.log(rivian.speedUS);
