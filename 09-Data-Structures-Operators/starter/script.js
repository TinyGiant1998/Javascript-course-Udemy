'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}

const saturday = [
  'JavaScript Course',
  'GitHub',
  'GitGub CoPilot',
  'GitHub Cloning',
];

const sunday = function () {
  return saturday;
};

console.log(sunday());

// Define to-do lists for each day of the week
const todos = {
  Monday: ['Meeting with team', 'Workout', 'Study JavaScript', 'Client call'],
  Tuesday: ['Code review', 'Write blog post', 'Learn Git', 'React project'],
  Wednesday: [
    'Team meeting',
    'Client presentation',
    'JavaScript exercises',
    'Catch up on reading',
  ],
  Thursday: [
    'Prepare for presentation',
    'Work on side project',
    'Yoga',
    'Write test cases',
  ],
  Friday: [
    'Office lunch',
    'Check emails',
    'Work on main project',
    'Watch JavaScript tutorial',
  ],
  Saturday: ['JavaScript Course', 'GitHub', 'GitHub CoPilot', 'GitHub Cloning'],
  Sunday: [
    'Review week tasks',
    'Plan for next week',
    'Clean workspace',
    'Go for a walk',
  ],
};

// Function to get the to-do list for any day
function getTodoList(day) {
  // Normalize the input day to ensure it's case insensitive
  const normalizedDay =
    day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

  // Check if the day exists in the todos object
  if (todos[normalizedDay]) {
    return todos[normalizedDay];
  } else {
    return `No tasks found for ${day}.`;
  }
}

// Example: Get the to-do list for Monday
console.log(getTodoList('Monday'));

// Example: Get the to-do list for Wednesday
console.log(getTodoList('Wednesday'));

// Example: Get the to-do list for a day that doesn't exist
console.log(getTodoList('Friday'));
