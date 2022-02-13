
// let encartsTri = document.querySelectorAll('.encarTri')
// encartsTri.forEach(tri =>{
//   tri.addEventListener("click", function triClicked(){
//     tri.classList.add("clicked");
//   });
// })


/* APPEL TABLEAU JSON */

const sectionRecettes = document.querySelector('.recettes');

recipes.forEach(recette =>{
    
    nameRecette = recette.name;
    timeRecette = recette.time;
    ingredientsRecette = recette.ingredients;
    descriptionRecette = recette.description;
  
    sectionRecettes.innerHTML += `
    <div class="recetteEncart">
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


// ${listIngredientsRecette.map(elt => `<div><span>${ingredientsRecette}</span> : ${elt.quantity}${elt.unit}</div>`).join('')}

// message = `${horse.name} is ${
//   horse.age > 5 ? "an old-horse" : "a young-horse"
// }`;