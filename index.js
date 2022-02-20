// let encartsTri = document.querySelectorAll('.encarTri')
// encartsTri.forEach(tri =>{
//   tri.addEventListener("click", function triClicked(){
//     tri.classList.add("clicked");
//   });
// })


///**  APPEL TABLEAU JSON  **///

const sectionRecettes = document.querySelector('.recettes');

const choixIng = document.querySelector('#choixIngredients');
const choixApp = document.querySelector('#choixAppareils');
const choixUst = document.querySelector('#choixUstensiles');

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

    // appel tri ingredients, appareils, ustensiles 

    choixIng.innerHTML += `
    <li>${ingredientsRecette.map(elt => elt.ingredient).join(' ')}</li>
    `;
      
    let arrayIng = [];
    arrayIng.push(ingredientsRecette.map(elt => elt.ingredient).reduce((test, elt) => test + elt))

    // recipes.forEach((recipe) => {
    //   if (recipe.ingredients.length) {
    //     const ingredientsMap = recipe.ingredients.map((ingr) => ingr.ingredient.toLowerCase());
    //     list.push(...ingredientsMap);
    //   }
    // });

    console.log(arrayIng);
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
      console.log(inputValue + "is too short");
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
