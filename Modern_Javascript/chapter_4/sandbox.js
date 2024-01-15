// Function declaration 

/*
ç 
function greet () {
    console.log('hello there')
}

greet(); 

*/

// Function expression

/* const speak = function () {
    console.log('good day');
  };

  speak(); */


// Arguments et Parameters / Voir la documentation

/*

const speak = function (name = 'luigi', time = 'night') {
    console.log(` ${time} ${name}`);
  };

  speak();
  speak('goku');
  
  */

  // Returning values

/*   const speak = function (name = 'luigi', time = 'night') {
      console.log(` good ${time} ${name}`);
  };

const calcArea = function (radius) {
    let area =3.14 * radius ** 2;
    return area;
}
const area = calcArea(5);
console.log(area);

const calcVol = function (area) {
    
}; */

// Arrow function 

/*const calcArea = (radius) => {
    return area =3.14 * radius ** 2;
};

const calcArea = radius => 3.14 * radius ** 2;
    
const area = calcArea(5);
console.log('area is:', area); */

// Practice arrow functions

/* const greet = function () {
     return 'hello world';
 };

const greet =  () => 'hello world';
const result = greet();
console.log(result);


const bill = function (products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products [i]*tax;
    }
    return total;
}



const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products [i]*tax;
    }
    return total;
}

console.log(bill([10,15,30],0.2))

*/

/*

const name = 'shaun';
// Function

const greet = () => 'hello '

let resultOne = greet();
console.log(resultOne);

// Methods

let resultTwo = name.toUpperCase();
console.log (resultTwo);
*/

// Callbacks & foreach = callback et une fonction de rappel voir la doc

/*const myFunc = (callbackFunc) => {
    let value =50;
    callbackFunc(value);
};

myFunc (value => {
    // do something
    console.log(value);
}); */

/*

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person,index ) => {
    console.log(`${index} - hello ${person}`);

};

people.forEach(logPerson); 

*/

/* Ancien exemple

// people.forEach((person,index ) => {
//     console.log(index,person);

// });

*/

// Get a Reference to the 'ul'

const ul = document.querySelector ('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = '';

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log (html);
ul.innerHTML = html;