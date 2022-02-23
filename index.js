// let encartsTri = document.querySelectorAll('.encarTri')
// encartsTri.forEach(tri =>{
//   tri.addEventListener("click", function triClicked(){
//     tri.classList.add("clicked");
//   });
// })


///**  APPEL TABLEAU JSON  **///

const sectionRecettes = document.querySelector('.recettes');

recipes.forEach(recette =>{
    
    nameRecette = recette.name;
    timeRecette = recette.time;
    ingredientsRecette = recette.ingredients;
    descriptionRecette = recette.description;


    // appel encarts de recettes
  
    sectionRecettes.innerHTML += `
    <div class="recetteEncart" data-name="${nameRecette}" data-ingredients="${ingredientsRecette.map(elt => elt.ingredient).join(' ')}" data-description="${descriptionRecette}">
      <div class="recetteEncart__img">
        <img src="" alt="">
      </div>
      <div class="recetteEncart__txt">
        <div class="recetteH">
          <div class="recetteH__titre">${nameRecette}</div>
          <div class="recetteH__temps">
            <img class="clock" alt="clock" src="images/clock.svg"/>
            ${timeRecette} min
          </div>
        </div>
        <div class="recetteB">
          <div class="recetteB__ingredients">
            ${ingredientsRecette.map(elt => `<div><span>${elt.ingredient}</span>${elt.quantity ? " : " + elt.quantity : ""}${elt.unit ? " " + elt.unit : ""}</div>`).join('')}
          </div>
          <div class="recetteB__description">${descriptionRecette}</div>
        </div>
      </div>
    </div>  
    `;
    
})



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

const inputIng = document.querySelector('#inputIngredient');

inputIng.addEventListener("focus", function(){
  inputIng.placeholder = "Rechercher un ingrédient";
});
inputIng.addEventListener("blur", function(){
  inputIng.placeholder = "Ingrédient";
});





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



//* ALGO RECHERCHE *//

let allRecettes = [...document.querySelectorAll('.recetteEncart')];

let inputValue;

function getValue(e) {
  inputValue = document.getElementById('searchBar').value;
  // alert(inputValue);

  allRecettes.map(recipe =>{

    let dataName = recipe.dataset.name.toLowerCase();
    let dataIngredients = recipe.dataset.ingredients.toLowerCase();
    let dataDescription = recipe.dataset.description.toLowerCase();

    if(inputValue.length >= 3){
        if(dataIngredients.includes(inputValue) || dataName.includes(inputValue) || dataDescription.includes(inputValue)){
          recipe.style.display="block";
        }
        else{
          recipe.style.display="none";
        }
    } 
    else{
      // console.log(inputValue + "is too short");
      recipe.style.display="block";
    }
     
  });
  
}



// let arr = [1,2,3,4,5,6,7,8,9];

// // MAP //

// let tab1 = arr.map(number => {
//    let result = number * 2 ;
//    return result;
//  });
//  let tab2 = tab1.filter(x => x > 5);
//  console.log(tab2);
 
//  //     =======     //

// let tab1 = arr.map(number => number * 2 ).filter(x => x > 5);
// console.log(tab1);


// // FOREACH //

// let tab4= [];
// let tab3 = arr.forEach(number => {
//   let result = number * 2 ;
//   tab4.push(result)
// });
// console.log(tab4);
