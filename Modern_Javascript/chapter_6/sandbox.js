 // Utilisation des méthodes Dom - JS
 
 /*
 const para = document.querySelector('body > h1');

 console.log(para);

 */

 /* QuerySelectorAll // référence tous éléments du document chosisi 

//  const paras = document.querySelectorAll('p');
//  const errors = document.querySelectorAll('.error');


// Cette méthode fonctionne aussi pour les afficher par ordre
paras.forEach(para => {
    console.log(para);
  });


// console.log(errors); // Affiche le résultat de tous les erreur du dom voir la constante erros
//  console.log(paras[2]); // le dernier <p> du dom et afficher par la console.

*/
/*

// Get an element by ID

const title = document.getElementById('page-title');
console.log(title);

// Get an element by their class name

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]); // affiche  la 1er erreur.
// forEach ne marche avec les classe ce n'est pas un fonction

*/

// Get an element by their tag name

/*
const paras = document.getElementsByTagName('p');
console.log(paras); // affiche tous les éléments référence par p
console.log(paras[1]); // affiche la 2ème zone de texte 
*/

// Change dom

/*
const para = document.querySelector('p');
// para.innerText = 'KAIOKEN SANBAIDA !'; // Modifier et remplace le texte indiquer

const paras = document.querySelectorAll('p');

// Change tout le texte grace a la query et la fonction para .innerText

// paras.forEach(para => {
//     console.log(para.innerText); 
//     para.innerText += ' new text ';
// });

const content = document.querySelector('.content'); 
// console.log(content.innerHTML);
// content.innerHTML += '<h2> This is New </h2>';

// permet de mettre à jour le html en y ajoutant un tableaux grace a innerHtml
const people = ['goku','vegeta', 'gohan'];

people.forEach(person => {
    content.innerHTML += `<p> ${person} </p>`
});

*/

/*
const link = document.querySelector('a');
console.log(link.getAttribute('href')); // affiche le lien du dom dans la console
link.setAttribute('href','https://github.com/'); // modification du lien
link.innerText = ' Github Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color: green;'); // Modifier le style du texte du dom via le javascript

*/

// JAVASCRIPT CCS STYLE 

/*
const title = document.querySelector('h1');

//title.setAttribute('style','margin: 50px');

console.log(title.style); // Affiche tout les propriétés de style 
console.log(title.style.color);

title.style.margin = '50px'; // Définis la marge
title.style.color = 'crimson'; // Change la couleur du dom (h1)
title.style.fontSize = '60px'; // Taille de la Police
title.style.margin = ''; // Réécrit la marge ici elle et supprimer

*/

// add et remove permette d'affiche le code css rapidement via le javascript

/*
const content = document.querySelector('p');


console.log(content.classList); // affiche tous les propriétés de content
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');
*/ 

// Modifier ajouter  du style a plusieurs éléments.

const paras = document.querySelectorAll('p');

paras.forEach(p => {
if(p.textContent.includes('error')){
    p.classList.add('error');

}
if(p.innerText.includes('success')){
    p.classList.add('success');

}
});

const title = document.querySelector('.title');

title.classList.toggle('test'); // alterne entre deux états ou valeurs.
title.classList.toggle('test');


//  Appronfondir le Js
