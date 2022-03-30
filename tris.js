
// TABLEAUX CHOIX TRI

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


// CHARGEMENT CHOIX POSSIBLES

const choixIng = document.querySelector('#choixIngredients');
const choixApp = document.querySelector('#choixAppareils');
const choixUst = document.querySelector('#choixUstensiles');

tabAppareils.forEach(elt =>{
  choixApp.innerHTML += ` <li class="choixA">${elt.toLowerCase()}</li> `;
})

tabUstensils.forEach(elt =>{
  choixUst.innerHTML += ` <li class="choixU">${elt.toLowerCase()}</li> `;
})

tabIngredients.forEach(elt =>{
  choixIng.innerHTML += ` <li class="choixI">${elt.toLowerCase()}</li> `;
})


// CHANGEMENT PLACEHOLDER & OUVERTURE/FERMETURE

/* input ingrédients */

const inputIng = document.querySelector('#inputIngredient');
const selectIng = document.querySelector('#selectIngredient');

selectIng.addEventListener("click", function(e){
  e.stopPropagation();
  inputIng.placeholder = "Rechercher un ingrédient";
  selectIng.classList.add("focus");
  choixIng.style.display="block";
});

/* input appareils */

const inputApp = document.querySelector('#inputAppareil');
const selectApp = document.querySelector('#selectAppareil');

selectApp.addEventListener("click", function(e){
  e.stopPropagation();
  inputApp.placeholder = "Rechercher un appareil";
  selectApp.classList.add("focus");
  choixApp.style.display="block";
});

/* input ustensiles */

const inputUst = document.querySelector('#inputUstensile');
const selectUst = document.querySelector('#selectUstensile');

selectUst.addEventListener("click", function(e){
  e.stopPropagation();
  inputUst.placeholder = "Rechercher un ustensile";
  selectUst.classList.add("focus");
  choixUst.style.display="block";
});

/* fermeture choix */

document.addEventListener("click", function(){

  inputIng.placeholder = "Ingrédients";
  selectIng.classList.remove("focus");
  choixIng.style.display="none";

  inputApp.placeholder = "Appareils";
  selectApp.classList.remove("focus");
  choixApp.style.display="none";

  inputUst.placeholder = "Ustensiles";
  selectUst.classList.remove("focus");
  choixUst.style.display="none";

});


//* AFFICHAGE CHOIX *//

let allChoixAppareils = [...document.querySelectorAll('.choixA')];
let allChoixUstensiles = [...document.querySelectorAll('.choixU')];
let allChoixIngredients = [...document.querySelectorAll('.choixI')];

let inputAppValue;
let inputIngValue;
let inputUstValue;

/* fonction tri appareils */

function triApp(e) {
  
  inputAppValue = inputApp.value;

  allChoixAppareils.map(choix =>{

    let valueApp = choix.innerHTML;

    if(inputAppValue.length >= 3){
      if(valueApp.includes(inputAppValue)){
        choix.style.display="block";
      }
      else{
        choix.style.display="none";
      }
    } 
    else{
      choix.style.display="block";
    }
  })  

}

/* fonction tri ustensiles */

function triUst(e) {
  
  inputUstValue = inputUst.value;

  allChoixUstensiles.map(choix =>{

    let valueUst = choix.innerHTML;

    if(inputUstValue.length >= 3){
      if(valueUst.includes(inputUstValue)){
        choix.style.display="block";
      }
      else{
        choix.style.display="none";
      }
    } 
    else{
      choix.style.display="block";
    }
  }) 

}

/* fonction tri ingredients */

function triIng(e) {
  
  inputIngValue = inputIng.value;

  allChoixIngredients.map(choix =>{

    let valueIng = choix.innerHTML;

    if(inputIngValue.length >= 3){
      if(valueIng.includes(inputIngValue)){
        choix.style.display="block";
      }
      else{
        choix.style.display="none";
      }
    } 
    else{
      choix.style.display="block";
    }
  })  
}


// AFFICHAGE CHOIX TRI

let allChoix = [...document.querySelectorAll('.choixI, .choixA, .choixU')];

let choixSelect = document.querySelector('#choixSelectionne');

let tabChoixSelect = [];

allChoix.map(choix => choix.addEventListener('click', createTag));

function createTag(){

  choixSelect.innerHTML += ` 
      <div class="${this.className == 'choixI' ? 'ingredient' : this.className == 'choixA' ? 'appareil' : this.className == 'choixU' ? 'ustensile' : ""}">
        ${this.innerHTML}
        <img data-choix="${this.innerHTML}" onclick="closeChoice(this)" class="cross" alt="cross" src="images/cross.svg"/>
      </div> 
    `;   
  tabChoixSelect.push(this.innerHTML);
  trierRecettes();

}

function closeChoice(croix){

  croix.parentNode.style.display="none";
  crossChoix = croix.dataset.choix;
  tabChoixSelect = tabChoixSelect.filter(elt => elt !== crossChoix);
  trierRecettes();

}

function trierRecettes(){

  allRecettes.filter(recipe =>{
    const allString = `${recipe.dataset.ingredients} ${recipe.dataset.appareil} ${recipe.dataset.ustensiles}`.toLowerCase();
    if(tabChoixSelect.every(motCle => allString.includes(motCle))){
      recipe.style.display = "block" 
    }else{
      recipe.style.display = "none" 
    }
  });

};

