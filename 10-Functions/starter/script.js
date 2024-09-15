'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassangers = 1,
//   price = 999 * numPassangers
// ) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('Lh123', undefined, '1000');

const flight = 'LH123';
const suraj = {
  name: 'Suraj Budhathoki',
  passport: 9843567
}

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = 'Mr.' + passanger.name;

  if (passanger.passport === 9843567) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, suraj);
console.log(flight);
console.log(suraj);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(suraj);
console.log(suraj);
checkIn(flight, suraj);