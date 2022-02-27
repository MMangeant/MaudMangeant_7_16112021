
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
