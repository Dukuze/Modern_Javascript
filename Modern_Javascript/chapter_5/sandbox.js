// Object Literals


/* 0- 10 min du cours 

// Voir la class user et les objets.

/*

console.log(user);
console.log(user.name);

// user.age = 35;

console.log(user.age);

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

*/

// const blogs = [
//     {title: 'skyblog', likes: 30},
//     {title: 'Villages Vacances', likes: 50}
// ]; 
 
//   console.log(blogs);

/* 10 - 20 min du cours 

let user = {
    name: 'crystal',
    age: 30,
    email: 'raekwon@gmail.com',
    location : 'New York',
    blogs: [    {title: 'skyblog', likes: 30},
    {title: 'Villages Vacances', likes: 50}],

    login(){
        console.log ('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },

    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
*/

// Math Object

/*

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); // Arrondi vers l’entier le plus proche
console.log(Math.floor(area)); // Arrondi nombre décimal vers le bas “entier le plus proche”
console.log(Math.ceil(area)); // Arrondi nombre décimal vers le haut
console.log(Math.trunc(area)); // Tronque les chiffre après la valeur décimal

// Random Numbers 

const random = Math.random(); // Nombre aléatoire

console.log(random);
console.log(Math.round (random*100)); // Nombre aléatoire * 100
 
*/

// Primitive Values / Voir le schéma

/*

let scoreOne = 50;
let scoreTwo = scoreOne 

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100; // réecris la valeur de scoreOne 
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`); // ici scoreTwo vas renvoyer 50 car sa valeur n'est pas réécrite
*/

// Reference Values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne,userTwo); // Ici sworeTwo renvoi la même valuer que scoreOne

userOne.name = 'chun-li'; // Réécrit la valeur name de User
console.log (userOne, userTwo) // ScoreTwo vas afficher la même valeur que UserOne après sa réécriture
