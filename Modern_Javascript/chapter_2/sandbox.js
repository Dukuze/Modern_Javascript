// Type conversion

let score = ' 100 ';

// score = Number (score);
// console.log(score +1);
// console.log(typeof score);

// let result = Number ('hello');

// let result = String(50);
// let result = Boolean(0);
let result = Boolean ('');

console.log (result, typeof result);




// BOOLEAN & COMPARiSON

// loose comparison ( different types can still be equal)

// let age = 25

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// Strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// console.log(true,false, "true","false");

// Methods can returns booleans

// let email = "raekwon@gmail.com";
// let names = ['Goku', 'Vegeta', 'Gohan' ];

// let result = email.includes('!');
// let result = names.includes('Piccolo');

// console.log(result);

// Comparison Operators

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 20);
// console.log(age >= 20);

// let name = ' Goku';

// console.log( name == 'Goku' );
// console.log( name == 'Goku' );
// console.log( name > 'Vegeta' );
// console.log( name > 'Gohan' );
// console.log( name > 'Crystal' );
// console.log( name > 'Goku' );


// NULL UNDEFINED $

// let age = null;

// console.log (age, age +3,`the ages is ${age}`);



// Collection

// let ninjas = ['Goku', 'Vegeta', 'Gohan', ];

// ninjas[1] = 'ken';  // ici la valeur et réécrite à la place de 'Vegeta'
// console.log(ninjas[1]); // Affiche la 2ème valeur de l'array.

// let ages = [20,25,30,35];
// console.log(ages[2]); // Affiche 30

// let random = ['shaun', 'crystal',30 , 20];
// console.log(random);

// Array methods

// let result = ninjas.join(', '); // Renvoi une chaîne de carac tères en joignant tous les élements de l'array
// let result = ninjas.indexOf('Goku'); // Renvoi l'index du 1er élement "vegeta " de l'array , si il y en pas renvoi -1
// let result = ninjas.concat(['piccolo', 'krilin',]);// Fusionne deux tableaux "array" ou plus pour en créer un nouveau.
// let result = ninjas.push('piccolo'); // Ajoute un ou plusieurs éléments à la fin du tableau ainsi que sa nouvelle longuer
// result = ninjas.pop(); // Supprime le dernier élément du tableaux  içi "piccolo"
// console.log(ninjas); // Affiche le tableaux :  goku , vegeta , gohan





// Template strings

// const title = ' Best reads of 2019';
// const author = ' Goku'
// const likes = 30;

//  Concatenation way 

// let result ='The Blog called ' + title + 'by' author + 'has' + likes + 'likes'
// console.log(result);

// Template string way

// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// Creating html templates

// let html = `
// <h2> ${title}</h2>
// <p> ${author}</p>
// <span> This blog has ${likes} likes </span>`;

// console.log(html);



//  COURS SUR LES NOMBRES

/*

 let radius = 10;
 const pi = 3.14;

 console.log(radius, pi);

// math operators +, -, *; /, **, %

 console.log(10/2);
 let result = radius % 3;
 let result = pi * radius**2;

 Order of operation - B I D M A S

 let result = 5 * (10 -3)**2;

 console.log(result);

 let likes = 10;

 likes = likes + 1;
 likes ++;
 likes --;
 likes += 10;
 likes -=5;
 likes *= 2;
 likes /= 2;

 console.log(likes);

 Nan - not a number

 console.log(5 / 'hello');
 console.log(5 * 'hello');

 let result = ' the blog has ' + likes + ' likes';
 console.log(result);
*/


// COURS SUR LES STRINGS

/*

 let age = 25;
 let year = 2023;

 log things to console
 console.log(age , year);

 
 
/* age = 30;

 console.log(age);

 const points = 100;

 console.log (points);
 var score = 75;
console.log (score);

 */

// Strings 

/*

 console.log('hello, word');

 let email = 'raekwon@gmail.com';
 console.log(email);

 */

 // String concatenation

/*

let firstName = 'Ol dirty';
let lastName = 'Bastard';

let fullName = firstName +  ' ' +  lastName;
console.log(fullName);

*/

// Getting characters 

/*
 console.log(fullName[1]);
*/

// String length

// console.log(fullName.length);

// String methods

/*
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index); 
*/

/* Common string methods

// let email = 'raekwon@gmail.com';

// let result = email.lastIndexOf('n'); // Renvoie l'index de la dernière occurrence du caractère spécifié dans la chaîne.

// let result= email.slice(0,10); // Renvoie une portion de la chaîne, délimitée par deux indices spécifiés.

// let result = email.substr(4,10); // Renvoie une sous-chaîne à partir de l'indice 4 avec une longueur de 10 caractères, soit 'won@gmail.c

// let result = email.replace('r', 'w'); // Remplace la première occurrence de 'r' par 'w' dans 'raekwon@gmail.com'

// console.log(result);

*/