// Appel tri ingredients, appareils, ustensiles 



/* tableau appareils */

let tabAppareils = [...new Set(recipes.map(recipe => recipe.appliance))];


/* tableau ustensiles */

let ustensils = [];

recipes.map(recipe => {
  recipe.ustensils.map(truc =>{
    ustensils.push(truc)
  })
})

let tabUstensils = [...new Set(ustensils)]


/* tableau ingrédients */

let ingredients = [];

recipes.map(recipe => {
  recipe.ingredients.map(truc =>{
    ingredients.push(truc.ingredient)
  })
})

let tabIngredients = [...new Set(ingredients)]


/* */


// Chargement affichage choix possibles

const choixIng = document.querySelector('#choixIngredients');
const choixApp = document.querySelector('#choixAppareils');
const choixUst = document.querySelector('#choixUstensiles');

tabAppareils.forEach(elt =>{
  choixApp.innerHTML += ` <li>${elt.toLowerCase()}</li> `;
})

tabUstensils.forEach(elt =>{
  choixUst.innerHTML += ` <li>${elt.toLowerCase()}</li> `;
})

tabIngredients.forEach(elt =>{
  choixIng.innerHTML += ` <li>${elt.toLowerCase()}</li> `;
})



// Changement placeholder

/* input ingrédients */

const inputIng = document.querySelector('#inputIngredient');
const selectIng = document.querySelector('#selectIngredient');

inputIng.addEventListener("focus", function(){
  inputIng.placeholder = "Rechercher un ingrédient";
  selectIng.classList.add("focus");
  choixIng.style.display="block";
});
inputIng.addEventListener("blur", function(){
  inputIng.placeholder = "Ingrédients";
  selectIng.classList.remove("focus");
  choixIng.style.display="none";
});

/* input appareils */

const inputApp = document.querySelector('#inputAppareil');
const selectApp = document.querySelector('#selectAppareil');

inputApp.addEventListener("focus", function(){
  inputApp.placeholder = "Rechercher un appareil";
  selectApp.classList.add("focus");
  choixApp.style.display="block";
});
inputApp.addEventListener("blur", function(){
  inputApp.placeholder = "Appareils";
  selectApp.classList.remove("focus");
  choixApp.style.display="none";
});

/* input ustensiles */

const inputUst = document.querySelector('#inputUstensile');
const selectUst = document.querySelector('#selectUstensile');

inputUst.addEventListener("focus", function(){
  inputUst.placeholder = "Rechercher un ustensile";
  selectUst.classList.add("focus");
  choixUst.style.display="block";
});
inputUst.addEventListener("blur", function(){
  inputUst.placeholder = "Ustensiles";
  selectUst.classList.remove("focus");
  choixUst.style.display="none";
});



/* */

