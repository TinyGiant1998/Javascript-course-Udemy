// // // // // // let js = "amazing";
// // // // // // if (js === "amazing") alert("Javascript is Fun!");
// // // // // // console.log(40 + 8 + 23 - 10);

// // // // // 'use strict';
// // // // // // const suraj = [
// // // // // //     'Suraj',
// // // // // //     'Budhathoki',
// // // // // //     2024 - 1998,
// // // // // //     'Customer Onboarding Consultant',
// // // // // //     ['Surya', 'Sandhaya', 'Susan']
// // // // // // ];

// // // // // // const types =[];
// // // // // // // creating a loop to run the surajArray form 0 rto 4
// // // // // // // try not to hardcode i<5

// // // // // // for (let i = 0; i < suraj.length; i++){
// // // // // //     //reading from surajArray
// // // // // // console.log(suraj[i], typeof suraj[i]);

// // // // // // //filling types os array
// // // // // // //types[i] = typeof surajArray[i];

// // // // // // types.push(typeof suraj[i]);

// // // // // // }
// // // // // // console.log(types);

// // // // // // const years = [1998, 2000, 2003, 2004];
// // // // // // const age =[];

// // // // // // for (let i = 0; i<years.length; i++){
// // // // // //     age.push(2024 - years[i]);
// // // // // // }

// // // // // // console.log(age);


// // // // // // //continue and break 
// // // // // // console.log('-------Only String-------')
// // // // // // for (let i = 0; i <suraj.length; i++){
// // // // // //     if (typeof suraj[i] !== 'string') continue; 
// // // // // //     console.log(suraj[i], typeof suraj[i]);  
// // // // // // }

// // // // // // console.log('-------Break with Number-------')
// // // // // // for (let i = 0; i <suraj.length; i++){
// // // // // //     if (typeof suraj[i] === 'number') break; 
// // // // // //     console.log(suraj[i], typeof suraj[i]);  
// // // // // // }

// // // // // // const a1 = suraj.length;

// // // // // // console.log("---------Backward-----------")
// // // // // // for (let i = a1 - 1; i >= 0; i--){
// // // // // //     console.log(suraj[i]);
// // // // // // }


// // // // // // console.log("----------Loop inside of a loop----------")

// // // // // // for (let exercise = 1; exercise <=3; exercise++){
// // // // // //     console.log(`----------Starting exercise ${exercise}------------`);
// // // // // //     for (let rep = 1; rep <=5; rep++){
// // // // // //         console.log(`Exercise ${exercise}: Lifing weight repetition ${rep}`)
// // // // // //     }
// // // // // // }



// // // // // // // While loop 
// // // // // // // comparing with while loop 
// // // // // // // for (let rep = 1; rep <= 10; rep++){
// // // // // // //     console.log(`Lifting weight repetition ${rep}`);
// // // // // // // }


// // // // // // let rep = 1;
// // // // // // while (rep <= 10){
// // // // // //     console.log(`Lifting weight repetition ${rep}`);
// // // // // //     rep++; 
// // // // // // }

// // // // // // let dice = Math.trunc(Math.random() * 6) + 1;
// // // // // // console.log(dice);

// // // // // // while (dice !== 6){
// // // // // //     console.log(`You rolled a ${dice}`);
// // // // // //     dice = Math.trunc(Math.random()*6)+ 1;
// // // // // //     if (dice === 6)
// // // // // //         console.log('Loop is about to end ____');
// // // // // // }



// // // // // //Problem to calculate Temperature Amplitude i.e. the difference between highest and lowest temperature
// // // // // // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // // // // // const calcTemoAmplitude = function (temps) {
// // // // // //     let max = temps[0];
// // // // // //     let min = temps[0];
// // // // // //     for (let i = 0; i < temps.length; i++) {
// // // // // //         const curTemp = temps[i];
// // // // // //         if (typeof curTemp !== 'number') continue;
// // // // // //         if (curTemp > max) max = curTemp;
// // // // // //         if (curTemp < min) min = curTemp;
// // // // // //     }
// // // // // //     console.log(max, min);
// // // // // //     return max - min;
// // // // // // }

// // // // // // const amplitude = calcTemoAmplitude(temperatures);
// // // // // // console.log(amplitude);



// // // // // // const calcTemoAmplitudeNew = function (t1, t2) {
// // // // // //     const temps = t1.concat(t2);
// // // // // //     console.log(temps);
// // // // // //   let max = temps[0];
// // // // // //   let min = temps[0];
// // // // // //   for (let i = 0; i < temps.length; i++) {
// // // // // //     const curTemp = temps[i];
// // // // // //     if (typeof curTemp !== "number") continue;
// // // // // //     if (curTemp > max) max = curTemp;
// // // // // //     if (curTemp < min) min = curTemp;
// // // // // //   }
// // // // // //   console.log(max, min);
// // // // // //   return max - min;
// // // // // // };

// // // // // // const amplitudeNew = calcTemoAmplitudeNew([3,5,1], [9,8,7]);
// // // // // // console.log(amplitudeNew);

// // // // // // const measureKelvin = function () {
// // // // // //     const measurement = {
// // // // // //         type: 'temp',
// // // // // //         unit: 'celsius',
// // // // // //         // value: Number (prompt('Degree celsius:'))
// // // // // //         value : 10
// // // // // //     }
 
// // // // // //     const kelvin = measurement.value + 273;
// // // // // //     return kelvin;
// // // // // // }
// // // // // // console.log(measureKelvin()); 



// // // // // // const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // // // // // const calcTemoAmplitude = function (temps) {
// // // // // //   let max = temps[0];
// // // // // //   let min = temps[0];
// // // // // //   for (let i = 0; i < temps.length; i++) {
// // // // // //     const curTemp = temps[i];
// // // // // //     if (typeof curTemp !== "number") continue;
// // // // // //     if (curTemp > max) max = curTemp;
// // // // // //     if (curTemp < min) min = curTemp;
// // // // // //   }
// // // // // //   console.log(max, min);
// // // // // //   return max - min;
// // // // // // };

// // // // // // const amplitude = calcTemoAmplitude(temperatures);
// // // // // // console.log(amplitude);

// // // // // // const calcTemoAmplitudeBug = function (t1, t2) {
// // // // // //   const temps = t1.concat(t2);
// // // // // //   console.log(temps);
// // // // // //   let max = 0;
// // // // // //   let min = 0;
// // // // // //   for (let i = 0; i < temps.length; i++) {
// // // // // //     const curTemp = temps[i];
// // // // // //       if (typeof curTemp !== "number") continue;
// // // // // //       debugger;
// // // // // //     if (curTemp > max) max = curTemp;
// // // // // //     if (curTemp < min) min = curTemp;
// // // // // //   }
// // // // // //   console.log(max, min);
// // // // // //   return max - min;
// // // // // // };

// // // // // // const amplitudeBug = calcTemoAmplitudeBug([3, 5, 1], [9, 8, 7]);
// // // // // // console.log(amplitudeBug);

// // // // // // const data1 = [17, 21, 23];
// // // // // // const data2 = [12, 5, -5, 0, 4];

// // // // // // const printForecasrt = function (arr) {
// // // // // //     let str = '';
// // // // // //     for (let i = 0; i < arr.length; i++) {
// // // // // //         str = str + `${arr[i]}°C of ${i + 1} days... `;
// // // // // //     }
// // // // // //     console.log(`...` + str);
// // // // // // }

// // // // // // printForecasrt(data1);
// // // // // // printForecasrt(data2);

// // // // // // const arr12 = [3, 2, 1];
// // // // // // arr12.sort();
// // // // // // arr12.reverse();
// // // // // // console.log(arr12);

// // // // // // const suraj = [1, 2, 3];
// // // // // // suraj[suraj.length] = suraj.pop();
// // // // // // console.log(suraj);
// // // // // // console.log(suraj.pop());

// // // // // // const name = "Jonas";

// // // // // // const first = () => {
// // // // // //     let a = 1;
// // // // // //     const b = second(7, 9);
// // // // // //     a = a + b;
// // // // // //     return a;
// // // // // // };

// // // // // // function second(x, y) {
// // // // // //     var c = 2;
// // // // // //     return c;
// // // // // // }
// // // // // // const x = first();
// // // // // // console.log(x);

// // // // // // function calcAge(birthyear) {
// // // // // //     const now = 2024;
// // // // // //     const age = now - birthyear;
// // // // // //     return age;
 
// // // // // // }

// // // // // // const myName = "Suraj";

// // // // // // function first() {
// // // // // //     const age = 32;

// // // // // //     if (age >= 30) {
// // // // // //         const decade = 3;
// // // // // //         var millenial = true;
// // // // // //     }

// // // // // //     function second() {
// // // // // //         const job = "Teacher"

// // // // // //         console.log(`${myName} is a ${age} years old ${job}`)
// // // // // //     }
// // // // // //     second();

// // // // // // }
// // // // // // first();

// // // // // // const a = 'Jonas';
// // // // // // first();

// // // // // // function first() {
// // // // // //     const b = 'Hello!'
// // // // // //     second();

// // // // // //     function second() {
// // // // // //         const c = 'Hi!';
// // // // // //         third();
// // // // // //     }
// // // // // // }

// // // // // // function third() {
// // // // // //     const d = 'Hey!';
// // // // // //     console.log(d + c + b + a);
// // // // // // }



// // // // // //Hosting with var, let & const
// // // // // // console.log(me);
// // // // // // console.log(job);
// // // // // // console.log(year);

// // // // // // var me = 'Suraj';
// // // // // // let job = 'Student';
// // // // // // const year = 2024;


// // // // // // //function
// // // // // // console.log(addDecl(2, 3));
// // // // // // console.log(addExpr(2, 3));
// // // // // // console.log(addArrow(2, 3));

// // // // // // function addDecl(a, b) {
// // // // // //     return a + b;
// // // // // // }

// // // // // // const addExpr = function (a, b) {
// // // // // //     return a + b;
// // // // // // }

// // // // // // const addArrow = (a, b) => a + b;


// // // // // // //Example
// // // // // // var numProduct = 10;
// // // // // // if (!numProduct) deleteShoppingCart();


// // // // // // function deleteShoppingCart() {
// // // // // //     console.log('All products deleted');
// // // // // // }

// // // // // // var x = 1;
// // // // // // var y = 2;
// // // // // // var z = 3;

// // // // // // console.log(x === window.x);


// // // // // //  ways to call functions

// // // // // // const suraj = {
// // // // // //     name: 'Suraj',
// // // // // //     year: 1998,
// // // // // //     calcAge: function () {
// // // // // //         return 2024 - this.year;
// // // // // //     }
// // // // // // }

// // // // // // console.log(suraj.calcAge());


// // // // // const jonas = {
// // // // //     firstName: "Suraj",
// // // // //     year: 1995,
// // // // //     calcAge: function () {
// // // // //         console.log(this);
// // // // //         console.log(2024 - this.year);


// // // // //         //Solution 1 - using self or that
// // // // //     //     const self = this;
// // // // //     //     const isMillenial = function () {
// // // // //     //         console.log(self.year >= 1991 && self.year <= 1996);
// // // // //     //         // console.log(this.year >= 19981 && this.year <= 1996);
// // // // //     //     }
// // // // //     //     isMillenial();
// // // // //     // },

// // // // //         //Solution 2  -Using Arrow function - coz arrow function use this from its parent class
// // // // //         const isMillenial = () => {
// // // // //             // console.log(self.year >= 1991 && self.year <= 1996);
// // // // //             console.log(this.year >= 1991 && this.year <= 1996);
// // // // //         }
// // // // //         isMillenial();
// // // // //     },

// // // // //     greet: () => console.log(`Hey ${this.firstName}`)
// // // // // }

// // // // // jonas.greet();
// // // // // jonas.calcAge();


// // // // // //Argument Keywords
// // // // // const addExpr = function (a, b) {
// // // // //     console.log(arguments);
// // // // //     return a + b;
// // // // // };

// // // // // console.log(addExpr(3, 5, 8, 9, 0));


// // // // // var addArrow = (a, b) => a + b;



// // // // // let age = 30;
// // // // // let oldAge = age;
// // // // // age = 31;
// // // // // console.log(age);
// // // // // console.log(oldAge);

// // // // // const me = {
// // // // //     name: 'Suraj',
// // // // //     age: 26
// // // // // }

// // // // // const friend = me;

// // // // // friend.age = 30;

// // // // // console.log('Friend', friend);
// // // // // console.log('Me', me);


// // // // // // Primitive types
// // // // // let lastName = 'Williams';
// // // // // let oldLastName = lastName;
// // // // // lastName = 'Davis';

// // // // // console.log(lastName, oldLastName);

// // // // // // Reference types
// // // // // const rojina = {
// // // // //     firstName: "Rojina",
// // // // //     lastName: "Bhandari",
// // // // //     age: 24
// // // // // };

// // // // // const marriedRojina = rojina; 
// // // // // marriedRojina.lastName = 'Budhathoki';

// // // // // console.log('Before Marriage', rojina);
// // // // // console.log("After Marriage", marriedRojina);


// // // // // // copying object

// // // // // const rojina2 = {
// // // // //   firstName: "Rojina",
// // // // //   lastName: "Bhandari",
// // // // //     age: 24,
// // // // //   family: ['Suraj', 'Sandhaya']
// // // // // };

// // // // // const rojinaCopy = Object.assign({}, rojina2);
// // // // // rojinaCopy.lastName = 'Budhathoki';


// // // // // console.log("Before Marriage", rojina2);
// // // // // console.log("After Marriage", rojinaCopy);

// // // // // rojinaCopy.family.push('Susan');
// // // // // rojinaCopy.family.push("Surya");



// // // // const resturant = {
// // // //     name: 'Classico Italiano',
// // // //     location: 'Sydney, Australia',
// // // //     categories: ['Italain', 'Pizzeria', 'Vegetarian', 'Organic'],
// // // //     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// // // //     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// // // //     openingHours: {
// // // //         thu: {
// // // //             open: 12,
// // // //             close: 22
// // // //         },

// // // //         fri: {
// // // //             open: 11,
// // // //             close: 23
// // // //         },

// // // //         sat: {
// // // //             open: 0,
// // // //             close: 24
// // // //         }
// // // //     },
// // // //     order: function (starterIndex, mainIndex) {
// // // //         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// // // //     },

// // // //     orderDelivery: function ({starterIndex = 1, mainIndex = 0, time, address}) {
// // // //         // console.log(`Order received! ${this.starterMenu} and ${this.mainIndex} will be delivered in ${this.address} at ${this.time}`);
// // // //         console.log(
// // // //           `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
// // // //         );
        
// // // //     },

// // // //     orderPasta: function (ing1, ing2, ing3) {
// // // //         console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
// // // //     },
    
// // // //     orderPizza: function (mainIngredient, ...otherIngredient) {
// // // //         console.log(mainIngredient);
// // // //         console.log(otherIngredient);
        
// // // //     }
// // // // };


// // // // resturant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// // // // resturant.orderPizza("mushroom");
// // // // // Real world Examples
// // // // // const ingredient = [
// // // // //   prompt("Let's make pasta! Ingredient 1?"),
// // // // //   prompt("Let's make pasta! Ingredient 2?"),
// // // // //     prompt("Let's make pasta! Ingredient 3?")
// // // // // ];

// // // // // console.log(ingredient);

// // // // // resturant.orderPasta(...ingredient);


// // // // // objects

// // // // const newReaturant = { foundIn: 1998, ...resturant, fouder: 'Suraj Budhathoki' }
// // // // console.log(newReaturant);

// // // // const resturantCopy = { ...resturant };
// // // // resturantCopy.name = 'Suraj Resturant';
// // // // console.log(resturantCopy.name);
// // // // console.log(resturant.name);


// // // // resturant.orderDelivery({
// // // //     time: '22:30',
// // // //     address: 'Hurstville',
// // // //     mainIndex: 2,
// // // //     starterIndex: 2
// // // // })

// // // // const arr = [2, 3, 4];

// // // // const [x, y, z] = arr;
// // // // console.log(x, y, z);

// // // // let [main, ,secondary] = resturant.categories;
// // // // console.log(main, secondary);

// // // // // Switching variable
// // // // // const temp = main;
// // // // // main = secondary;
// // // // // secondary = temp;
// // // // // console.log(main, secondary);

// // // // [main, secondary] = [secondary, main];
// // // // console.log(main, secondary);


// // // // const [starter, mainCourse] = resturant.order(2, 0); 
// // // // console.log(starter, mainCourse);

// // // // // Nested structuring
// // // // const nested = [2, 4, [5, 6]];
// // // // // const [i, , j] = nested;
// // // // // console.log(i, j);
// // // // const [i, , [j, k]] = nested;
// // // // console.log(i, j, k);


// // // // //Default values 
// // // // const [p=1, q=1, r=1] = [8, 9];
// // // // console.log(p, q, r);





// // // const books = [
// // //   {
// // //     title: "Algorithms",
// // //     author: ["Robert Sedgewick", "Kevin Wayne"],
// // //     publisher: "Addison-Wesley Professional",
// // //     publicationDate: "2011-03-24",
// // //     edition: 4,
// // //     keywords: [
// // //       "computer science",
// // //       "programming",
// // //       "algorithms",
// // //       "data structures",
// // //       "java",
// // //       "math",
// // //       "software",
// // //       "engineering",
// // //     ],
// // //     pages: 976,
// // //     format: "hardcover",
// // //     ISBN: "9780321573513",
// // //     language: "English",
// // //     programmingLanguage: "Java",
// // //     onlineContent: true,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.41,
// // //         ratingsCount: 1733,
// // //         reviewsCount: 63,
// // //         fiveStarRatingCount: 976,
// // //         oneStarRatingCount: 13,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: "Structure and Interpretation of Computer Programs",
// // //     author: [
// // //       "Harold Abelson",
// // //       "Gerald Jay Sussman",
// // //       "Julie Sussman (Contributor)",
// // //     ],
// // //     publisher: "The MIT Press",
// // //     publicationDate: "2022-04-12",
// // //     edition: 2,
// // //     keywords: [
// // //       "computer science",
// // //       "programming",
// // //       "javascript",
// // //       "software",
// // //       "engineering",
// // //     ],
// // //     pages: 640,
// // //     format: "paperback",
// // //     ISBN: "9780262543231",
// // //     language: "English",
// // //     programmingLanguage: "JavaScript",
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 3.36,
// // //         ratingsCount: 14,
// // //         reviewsCount: 3,
// // //         fiveStarRatingCount: 8,
// // //         oneStarRatingCount: 0,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: "Computer Systems: A Programmer's Perspective",
// // //     author: ["Randal E. Bryant", "David Richard O'Hallaron"],
// // //     publisher: "Prentice Hall",
// // //     publicationDate: "2002-01-01",
// // //     edition: 1,
// // //     keywords: [
// // //       "computer science",
// // //       "computer systems",
// // //       "programming",
// // //       "software",
// // //       "C",
// // //       "engineering",
// // //     ],
// // //     pages: 978,
// // //     format: "hardcover",
// // //     ISBN: "9780130340740",
// // //     language: "English",
// // //     programmingLanguage: "C",
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.44,
// // //         ratingsCount: 1010,
// // //         reviewsCount: 57,
// // //         fiveStarRatingCount: 638,
// // //         oneStarRatingCount: 16,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: "Operating System Concepts",
// // //     author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
// // //     publisher: "John Wiley & Sons",
// // //     publicationDate: "2004-12-14",
// // //     edition: 10,
// // //     keywords: [
// // //       "computer science",
// // //       "operating systems",
// // //       "programming",
// // //       "software",
// // //       "C",
// // //       "Java",
// // //       "engineering",
// // //     ],
// // //     pages: 921,
// // //     format: "hardcover",
// // //     ISBN: "9780471694663",
// // //     language: "English",
// // //     programmingLanguage: "C, Java",
// // //     onlineContent: false,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 3.9,
// // //         ratingsCount: 2131,
// // //         reviewsCount: 114,
// // //         fiveStarRatingCount: 728,
// // //         oneStarRatingCount: 65,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: "Engineering Mathematics",
// // //     author: ["K.A. Stroud", "Dexter J. Booth"],
// // //     publisher: "Palgrave",
// // //     publicationDate: "2007-01-01",
// // //     edition: 14,
// // //     keywords: ["mathematics", "engineering"],
// // //     pages: 1288,
// // //     format: "paperback",
// // //     ISBN: "9781403942463",
// // //     language: "English",
// // //     programmingLanguage: null,
// // //     onlineContent: true,
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.35,
// // //         ratingsCount: 370,
// // //         reviewsCount: 18,
// // //         fiveStarRatingCount: 211,
// // //         oneStarRatingCount: 6,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // //   {
// // //     title: "The Personal MBA: Master the Art of Business",
// // //     author: "Josh Kaufman",
// // //     publisher: "Portfolio",
// // //     publicationDate: "2010-12-30",
// // //     keywords: ["business"],
// // //     pages: 416,
// // //     format: "hardcover",
// // //     ISBN: "9781591843528",
// // //     language: "English",
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.11,
// // //         ratingsCount: 40119,
// // //         reviewsCount: 1351,
// // //         fiveStarRatingCount: 18033,
// // //         oneStarRatingCount: 1090,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: "Crafting Interpreters",
// // //     author: "Robert Nystrom",
// // //     publisher: "Genever Benning",
// // //     publicationDate: "2021-07-28",
// // //     keywords: [
// // //       "computer science",
// // //       "compilers",
// // //       "engineering",
// // //       "interpreters",
// // //       "software",
// // //       "engineering",
// // //     ],
// // //     pages: 865,
// // //     format: "paperback",
// // //     ISBN: "9780990582939",
// // //     language: "English",
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.7,
// // //         ratingsCount: 253,
// // //         reviewsCount: 23,
// // //         fiveStarRatingCount: 193,
// // //         oneStarRatingCount: 0,
// // //       },
// // //     },
// // //   },
// // //   {
// // //     title: "Deep Work: Rules for Focused Success in a Distracted World",
// // //     author: "Cal Newport",
// // //     publisher: "Grand Central Publishing",
// // //     publicationDate: "2016-01-05",
// // //     edition: 1,
// // //     keywords: ["work", "focus", "personal development", "business"],
// // //     pages: 296,
// // //     format: "hardcover",
// // //     ISBN: "9781455586691",
// // //     language: "English",
// // //     thirdParty: {
// // //       goodreads: {
// // //         rating: 4.19,
// // //         ratingsCount: 144584,
// // //         reviewsCount: 11598,
// // //         fiveStarRatingCount: 63405,
// // //         oneStarRatingCount: 1808,
// // //       },
// // //     },
// // //     highlighted: true,
// // //   },
// // // ];



// // // // console.log(`--------------Rest Syntax-------------`);

// // // // const [ mainKeyword, ...rest ] = books[0].keywords;
// // // // console.log(mainKeyword); 
// // // // console.log(rest);

// // // // const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// // // // console.log(bookPublisher, restOfTheBook);


// // // // const printBookAuthorsCount = function (title, ...authors) {
// // // //     console.log(`The book ${title} has ${authors.length} authors`);
// // // // }

// // // // printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne", "Suraj Budhathoki");




// // // // const [firstBook, SecondBook] = books;
// // // // const [, , thirdBook] = books;
// // // // const ratings = [
// // // //   ["rating", 4.19],
// // // //   ["ratingsCount", 144584],
// // // // ];

// // // // const [[a, b], [c, d]] = ratings;
// // // // console.log(b, d);

// // // // const ratingStars = [63405, 1808];
// // // // const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;

// // // // console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // // // const { title, author, ISBN } = books[0];


// // // // const { keywords: tags } = books[0];
// // // // console.log(tags);

// // // // console.log(books[6]);

// // // // const { language, programmingLanguage = "unknown" } = books[6];
// // // // console.log(language, programmingLanguage);

// // // // let bookTitle = "unknown";
// // // // let bookAuthor = "unknown";

// // // // // const ["bookTitle", "bookAuthor"] = books[0]; --mistake

// // // // ({ title: bookTitle, author: bookAuthor } = books[0]);
// // // // console.log(bookAuthor, bookTitle);

// // // // const { thirdParty: { goodreads: { rating: bookRating } } } = books[0];
// // // // console.log(bookRating);

// // // // function printBookInfo({ title, author, year = "year unknown" }) {
// // // //   console.log(`${title} by ${author}, ${year}`);
// // // // }

// // // // printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
// // // // printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });


// // // // const bookAuthors = [...books[0].author, ...books[1].author]
// // // // console.log("-------------------------------------------")
// // // // console.log(`The name of book Author Spread Operator ${bookAuthors}`);

// // // // function spellWord(word) {
// // // //     console.log(...word)
// // // // }

// // // // spellWord("JavaScript");

// // // // //spread - beacuse used in right side
// // // // const arrSuraj = [1, 2, ...[3, 4]];

// // // // //REST - because used in left side
// // // // const [a1, b1, ...others] = [1, 2, 3, 4, 5];
// // // // console.log(a1, b1, others);

// // // // const [pizza, , risotto, ...otherFood] = [...resturant.mainMenu, ...resturant.starterMenu];
// // // // console.log(pizza, risotto, otherFood);


// // // // //objects











// // // // const arr12 = [7, 8, 9];
// // // // const badNewArr = [1, 2, arr12[0], arr12[1], arr12[2]];
// // // // console.log(badNewArr);

// // // // const newArr = [1, 2, ...arr12];
// // // // console.log(...newArr);

// // // // const newMenu = [...resturant.mainMenu, "Gnocci"];
// // // // console.log(newMenu);

// // // // // copy array

// // // // const mainMenuCopy = [...resturant.mainMenu];

// // // // // join 2 arrays together
// // // // const joinMenu = [...newMenu, ...mainMenuCopy]
// // // // console.log(joinMenu);
// // // // const joinMenuT = [...new Set(joinMenu)];
// // // // console.log(joinMenuT);

// // // // const str = "Suraj";
// // // // const letters = [...str, '', 'S.'];
// // // // console.log(...letters);

// // // // //objects
// // // // const { sat, ...weekDays } = resturant.openingHours;
// // // // console.log(weekDays);


// // // // //functions

// // // // const add = function (...numbers) {
// // // //     // console.log(numbers);
// // // //     let sum = 0;
// // // //     for (let i = 0; i < numbers.length; i++)
// // // //         sum += numbers[i];
// // // //     console.log(sum);
    
// // // // }

// // // // add(2, 3);
// // // // add(5, 3, 7, 2);
// // // // add(3, 6, 8, 9, 0, 3, 4);
// // // // const x1 = [23, 5, 7];
// // // // add(...x1 );


// // const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']

// // const openingHours = {
// //     [weekdays[3]]: {
// //         open: 12,
// //         close: 22
// //     },

// //     fri: {
// //         open: 11,
// //         close: 23
// //     },

// //     sat: {
// //         open: 0,
// //         close: 24
// //     }
// // };



// // const resturant = {
// //     name: 'Classico Italiano',
// //     location: 'Sydney, Australia',
// //     categories: ['Italain', 'Pizzeria', 'Vegetarian', 'Organic'],
// //     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //     mainMenu: ['Pizza', 'Pasta', 'Risotto'],


// //     // ES^ enhanced onject literal
// //     openingHours,
// //     order(starterIndex, mainIndex) {
// //         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //     },

// //     orderDelivery({starterIndex = 1, mainIndex = 0, time, address}) {
// //         // console.log(`Order received! ${this.starterMenu} and ${this.mainIndex} will be delivered in ${this.address} at ${this.time}`);
// //         console.log(
// //           `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
// //         );
        
// //     },

// //     orderPasta(ing1, ing2, ing3) {
// //         console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
// //     },
    
// //     orderPizza: function (mainIngredient, ...otherIngredient) {
// //         console.log(mainIngredient);
// //         console.log(otherIngredient);
        
// //     }
// // };

// // if (resturant.openingHours.mon)
// //     console.log(resturant.openingHours.mon.open);

// // //optional Chaining 
// // console.log(resturant.openingHours.mon?.open);


// // const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
// // for (const day of days) {
// //     //console.log(day);
// //     const open = resturant.openingHours[day]?.open ?? "closed";
// //     console.log(`On ${day}, we open at ${open}`)
// // }


// // //calling methods 
// // console.log(resturant.order123?.(0, 1) ?? "Method does not exits")

// // //optional chaining in arrays

// // const user123 = [{
// //     name: "Suraj",
// //     email: "surajbudhathoki750@gmail.com",
// //     id: "001"
// // }, {
// //     last: "Budhathoki"
// // }]
// // console.log(user123[1]?.last ?? "User array empty");
// // console.log(user123[0]);

// // const properties = Object.keys(openingHours);
// // console.log(properties);

// // let openStr = `We are open ${properties.length} days in a week `;
// // for (const day of properties) {
// //     openStr += `${day}, `
// // }

// // console.log(openStr);


// // const values = Object.values(openingHours);
// // console.log(values);

// // //Entire object
// // const entries = Object.entries(openingHours);
// // // console.log(entries);

// // for (const [key, {open, close}] of entries) {
// //     console.log(`On ${key} we open at ${open} and close at ${close}`);
// // }


// // console.log("----------------Sets and Maps-------------")
// // const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
// // console.log(orderSet);

// // console.log(new Set('Suraj'));

// // console.log(orderSet.size);
// // console.log(orderSet.has('Pizza'));
// // console.log(orderSet.has("Bread"));
// // orderSet.add('Garlic Bread');
// // orderSet.add("Garlic Bread");
// // orderSet.delete('Risotto')
// // // orderSet.clear();
// // console.log(orderSet.size);
// // console.log(orderSet);

// // for (const order of orderSet)
// //     console.log(order);


// // //Example

// // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);
// // console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)

// // console.log(new Set('SurajBudhathoki').size)

// // console.log("********************* Maps *******************");
// // const rest = new Map();
// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy')
// // rest.set(2, 'Lisbon, Portugal')
// // console.log(rest);
// // rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open 😁').set(false, 'We are closed 😢');

// // console.log(rest.get('name'));

// // const time = 21;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // // rest.clear();

// // const arr = [1, 2] 
// // rest.set(arr, 'Test')
// // rest.set(document.querySelector('h1', 'Heading'))
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr));

// // const question = new Map([
// //     ['question', 'What is the best programming language in the world'],
// //     [1, 'C'],
// //     [2, 'Java'],
// //     [3, 'JavaScript'],
// //     ['correct', 3],
// //     [true, "Correct 😀"],
// //     [false, "Try Again"]
// // ])

// // console.log(question);
// // //Convert Object to Maps
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //     if (typeof key === 'number')
// //         console.log(`Answer ${key}: ${value}`);
// // }

// // const answer = 3 //Number(prompt('Your answer'));
// // console.log(answer);

// // console.log(question.get(answer === question.get('correct')));


// // //convert map to arrays

// // console.log([...question])


// // console.log("------------Game Challenege---------");
// // const game = {
// //   team1: "Bayern Munich",
// //   team2: "Borrussia Dortmund",
// //   players: [
// //     [
// //       "Neuer",
// //       "Pavard",
// //       "Martinez",
// //       "Alaba",
// //       "Davies",
// //       "Kimmich",
// //       "Goretzka",
// //       "Coman",
// //       "Muller",
// //       "Gnarby",
// //       "Lewandowski",
// //     ],
// //     [
// //       "Burki",
// //       "Schulz",
// //       "Hummels",
// //       "Akanji",
// //       "Hakimi",
// //       "Weigl",
// //       "Witsel",
// //       "Hazard",
// //       "Brandt",
// //       "Sancho",
// //       "Gotze",
// //     ],
// //   ],
// //   score: "4:0",
// //   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// //   date: "Nov 9th, 2037",
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // for (const [i, player] of game.scored.entries()) {
// //     console.log(`Goal ${i + 1}: ${player}`)
// // }

// // let average = 0; 
// // const odds = Object.values(game.odds);

// // for (const odd of odds) {
// // average += odd;}
// //     average /= odds.length;
// // console.log(average);

// // for (const [team, odd] of Object.entries(game.odds)) {
// //     const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
// //     console.log(`Odd of ${teamStr} ${odd}`)
// // }

// // const scorers = {};
// // for (const player of game.scored) {
// //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// // }

// // console.log(scorers)

// // const gameEvents = new Map([
// //   [17, "⚽️ GOAL"],
// //   [36, "🔁 Substitution"],
// //   [47, "⚽️ GOAL"],
// //   [61, "🔁 Substitution"],
// //   [64, "🔶 Yellow card"],
// //   [69, "🔴 Red card"],
// //   [70, "🔁 Substitution"],
// //   [72, "🔁 Substitution"],
// //   [76, "⚽️ GOAL"],
// //   [80, "⚽️ GOAL"],
// //   [92, "🔶 Yellow card"],
// // ]);


// // const events = [...new Set(gameEvents.values())]
// // console.log(events);

// // gameEvents.delete(64);
// // console.log(gameEvents);

// // const time1 = [...gameEvents.keys()].pop();
// // console.log(time1);

// // console.log(`An event happened,on average, every ${time1 / gameEvents.size} minutes`); 

// // for (const [min, events] of gameEvents) {
// //     const half = min <= 45 ? "First" : "Second";
// //     console.log(`[${half} Half] ${min}: ${events}`);
// // }





// // // const [player1, player2] = game.players;
// // // console.log(player1, player2);

// // // const [gk, ...fieldPlayers] = player1;
// // // console.log(gk, fieldPlayers);

// // // const allPlayer = [...player1, ...player2];
// // // console.log(allPlayer);

// // // const player1Final = [...player1, "Thiago", "Countinho", "Periscic"];

// // // const {
// // //   odds: { team1, x: draw, team2 },
// // // } = game;
// // // console.log(team1, draw, team2);

// // // const printGoals = function (...players) {
// // //   console.log(`${players.length} goals were scored`);
// // // };
// // // printGoals(...game.scored);

// // // team1 < team2 && console.log(`Team 1 is likely to win`);
// // // team1 > team2 && console.log(`Team 2 is likely to win`);


// // // resturant.numGuest = 0;
// // // const guests1 = resturant.numGuest || 10;
// // // console.log(guests1);

// // // const guests2 = resturant.numGuest ?? 10;
// // // console.log(guests2);

// // // const menu = [...resturant.starterMenu, ...resturant.mainMenu];

// // // for (const item of menu) console.log(item);

// // // for (const [i, el] of menu.entries()) {
// // //     console.log(`${i + 1}: ${el} `);

// // // }
// // //  console.log(...menu.entries());

// // // console.log("-------------- OR Operator------------");
// // // console.log(4 || 3 || "Suraj");
// // // console.log(false || true || false);

// // // resturant.numGuest = 55;
// // // const guests1 = resturant.numGuest ? resturant.numGuest : 10;
// // // console.log(guests1);

// // // const guests2 = resturant.numGuest || 10;
// // // console.log(guests2);


// // // console.log("-------------- AND Operator------------");
// // // console.log(0 && "Suraj");
// // // console.log(7 && "Suraj");

// // // if (resturant.orderPizza) {
// // //     resturant.orderPizza('Mushroom', 'Spinach');
// // // }

// // // resturant.orderPizza && resturant.orderPizza('Mushroom', 'Spinach');



// // // function hasExamplesInJava(book) {
// // //     const java = book.programmingLanguage === "Java" || "No data available"
// // //     console.log(java);
// // // }

// // // hasExamplesInJava(books[0]);

// // // for (let i = 0; i < books.length; i++) {
// // //   books[i].onlineContent &&
// // //     console.log(`"${books[i].title}" provides online content`);
// // // }



// // // for (let i = 0; i < books.length; i++) {
// // //   books[i].onlineContent ??
// // //     console.log(`"${books[i].title}" provides online content`);
// // // }

// // // for (let i = 0; i < books.length; i++){
// // //     books[i].edition ||= 1;
// // //     // books[i].thirdParty.goodreads.rating;
// // // }

// // // // for (let i = 0; i < books.length; i++) {
// // // //     if (books[i].thirdParty.goodreads.rating < 4.2)
// // // //      books[i].highlighted &&= false;
// // // // }

// // // for (let i = 0; i < books.length; i++) {
// // //   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 2.2);
// // // }

// // // console.log(books[1].thirdParty.goodreads.rating);
// // // console.log(books[1].highlighted);




// // // const rest1 = {
// // //     name: 'Capri',
// // //     numGuests: 0
// // // }

// // // const rest2 = {
// // //     name: 'La Pizza',
// // //     owner: 'Giovanni Rossi'
// // // }

// // // // rest1.numGuests = rest1.numGuests || 10;
// // // // rest2.numGuests = rest2.numGuests || 10;

// // // // rest1.numGuests ||= 10;
// // // // rest2.numGuests ||= 10;

// // // rest1.numGuests ??= 10;
// // // rest2.numGuests ??= 30;

// // // rest2.owner &&= '<Anonymous>'

// // // console.log(rest1);
// // // console.log(rest2);

// // //Coding challenge Football game

// const airline = "Suraj ko Airlines";
// //  


// // Slice method 
// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log('BR456'[0]);

// // console.log(airline.length);
// // console.log(airline.indexOf('r'));
// // console.log(airline.lastIndexOf("r"));
// // console.log(airline.indexOf('airlines'));

// // console.log(airline.slice(4));
// // console.log(airline.slice(4, 16));


// // console.log(airline.slice(0, airline.indexOf(" ")));
// // console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// // console.log(airline.slice(-2));
// // console.log(airline.slice(1, -1));

// // const checkMiddleSeat = function (seat) {
// //   const s = seat.slice(-1);
// //   if (s === 'B' || s === 'E')
// //     console.log("You got middle seat")
// //   else {
// //     console.log("You did not got middle seat");
// //   }
    
// // }

// // checkMiddleSeat('11B');
// // checkMiddleSeat('23C');
// // checkMiddleSeat('3E');
// // checkMiddleSeat('3e')

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in passenger name
// const passanger = "sUrAJ"; 
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);


// //check emails / comparing email 

// const email = 'tinysuraj143@gmail.com';
// const loginEmail = ' Tinysuraj143@gmail.com \n';
// console.log("\n");

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normailsedEmail = loginEmail.toLowerCase().trim()
// console.log(email === normailsedEmail);

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'All passangers come to barding door 23. Bording door 23!'
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, "gate"));

// //bolleans
// const plane = "AirbusA320neo";
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('This is a part of AirBus');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowes omn this plane')
//   }
//     else 
//     console.log('Welcome Aboard!!!');
  
  
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera')
// checkBaggage('got some snacks and guns for protection')

// console.log('a+very+nice+string'.split('+'));
// console.log('Suraj Budhathoki'.split(' '));

// const [firstName, lastName] = 'Suraj Budhathoki'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// console.log(newName);


// // const capitalizeName = function (name) {
// //   const names = name.split(' ');
// //   const namesUpper = []
// //   for (const word of names) {
// //     namesUpper.push(word[0].toUpperCase() + word.slice(1));
// //   }
// //   console.log(namesUpper.join(" "))
// // }

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(" "));
// };
// capitalizeName('rojina bhandari budhathoki');
// capitalizeName('suraj budhathoki likes rojina bhandari a lot')


// //padding 
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, "+"));
// console.log('Suraj'.padStart(25, '+').padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const lastFour = str.slice(-4);
//   console.log(lastFour);
//   return lastFour.padStart(str.length, "*");

// }

// console.log(maskCreditCard("234567890987546565656"));
// console.log(maskCreditCard("2345678909876547"));

// //repeat

// const message2 = 'Bad weather ---- All departure delayed ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(10);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector("textarea").value;

  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    console.log(first, second);
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
    
    
    
    


// const namesUpper = []
// // //   for (const word of names) {
// // //     namesUpper.push(word[0].toUpperCase() + word.slice(1));
// // //   }
// const camelCase = function (string) {
//   const str = string.trim().toLowerCase().split("_");
//   console.log(str);
//   const newName = [];
//   for (const n of str) {
//    newName.push(n.replace(n[1], n[1].toUpperCase()))
//   }
//   console.log(newName.join(" "));
  
//   underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure


// console.log(camelCase("Suraj_budhathoki"));
// console.log(camelCase("underscore_case"));
// console.log(camelCase(" first_name"));
// console.log(camelCase("Some_Variable"));
// console.log(camelCase("  calculate_AGE"));
// console.log(camelCase("delayed_departure"));