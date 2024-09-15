'use strict';

function calcAge(birthYear) {
    const age = 2024 - birthYear;

    function printAge() {
        let output = `${firstName}, you are the ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            //Creating new variable with same name as  outer scope's variable
            const firstName = "Jonas";

            //Reassigning outer scope's variable
            output = 'NEW OUTPUT!';
            
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            
        }

        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
   
    return age;
}
const firstName = 'Suraj';
calcAge(1985);
