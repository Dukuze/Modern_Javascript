// BOUCLE IF , ELSE , ELSE IF  , FOR , WHILE  = LOOPS

// FOR LOOPS

// for (let i = 0; i < 5; i++) {
//     console.log('in loop', i);
// }

// console.log('loop finished'); // affiche  [0,1,2,3,4]

// const names = ['goku','vegeta', 'gohan'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// WHILE LOOPS

// const names = ['goku','vegeta', 'gohan'];

// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// DO WHILE LOOPS

// let i = 3;

// do {
//     console.log ('val of i is', i);
//     i++;
// } while (i < 5);

// IF STATEMENTS

// const age = 25;

// if (age > 20) {
//     console.log ('you are over 20 years old');
// }

// const ninjas = ['goku','vegeta', 'gohan'];

// if (ninjas.length > 3) {
//     console.log ("that's a lot of ninjas");
// }

//  Très utile
 
// const password = 'p@ssword';

// if (password.length >=8) {
//     console.log('that password is long enough');
// }

//  ELSE IF STATEMENTS

// const password = 'p@ss';


// if (password.length >=12) {
//     console.log('that password is might strong');

// }
// else if (password.length >=8) {
//     console.log('that password is long enough!');
// } else {
//     console.log('that password is not long enough')
// }

// LOGICAL OPERATORS - OR || and AND &&

// const password = 'p@ssword';


// if (password.length >=12 && password.includes ('@')) {
//     console.log('that password is might strong');

// }
// else if (password.length >=8 || password.includes('@') && password.length >=5) {
//     console.log('that password is long enough!');
// } else {
//     console.log('that password is not long enough')
// }


// LOGICAL NOT (!)

// let user = false;

// if (!user) {
//     console.log('you must be logged in to continue');

// }

// console.log(true);
// console.log(false);


// BREAK AND CONTINUE

// const scores = [50,25,0,30,100,20,10];

// for (let i = 0; i < scores.length; i++) {
    
//     if(scores[i] === 0) {
//         continue;
//     }

//     console.log ('your score' , scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top scores');
//         break;
//     }
// }

//  SWITCH STATEMENTS

const grade = 'D'; // si la valeur n'est pas la bonne on aura le resultat "not" qui valide grade
 
// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//     case 'B':
//         console.log('you got an B!');
//     case 'C':
//         console.log('you got an C!');
//     case 'D':
//         console.log('you got an D!');
//     case 'E':
//         console.log('you got an E!');
//         break;
//         default:
//             console.log('not a valid grade');
// }

// VARIABLES & BLOCK SCOPE

const age = 30; // let est remplacé par une constante.


if (true){
   const age = 40;
   const name = 'akim';
    console.log('inside 1st code block', age, name);

    if (true) {
        const age = 50;
        console.log('inside 2nd code bloc:', age,);
        var test = 'hello world';
    }
}

console.log ('outside code block:', age, name);
