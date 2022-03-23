
///**  APPEL TABLEAU JSON  **///

recipes.forEach(recette =>{
    
  nameRecette = recette.name;
  timeRecette = recette.time;
  ingredientsRecette = recette.ingredients;
  descriptionRecette = recette.description;
  appareilRecette = recette.appliance;
  ustensilRecette = recette.ustensils;

  // appel encarts de recettes
  
  sectionRecettes.innerHTML += `
  <div class="recetteEncart" data-name="${nameRecette}" data-ingredients="${ingredientsRecette.map(elt => elt.ingredient).join(' ')}" data-description="${descriptionRecette}" data-appareil="${appareilRecette}" data-ustensiles="${ustensilRecette.map(elt => elt).join(' ')}">
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
