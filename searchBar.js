//* ALGO RECHERCHE *//

let allRecettes = [...document.querySelectorAll('.recetteEncart')];

let inputValue;

let recettesAffichees = [];
let erreurMessage = document.querySelector('#erreurMessage');

function research(e) {

  inputValue = document.getElementById('searchBar').value;

  allRecettes.map(recipe =>{
    let dataName = recipe.dataset.name.toLowerCase();
    let dataIngredients = recipe.dataset.ingredients.toLowerCase();
    let dataDescription = recipe.dataset.description.toLowerCase();

    if(inputValue.length >= 3){
        if(dataIngredients.includes(inputValue) || dataName.includes(inputValue) || dataDescription.includes(inputValue)){
          recipe.style.display="block";
          recettesAffichees.push(recipe);
        }
        else{
          recipe.style.display="none";
          recettesAffichees = recettesAffichees.filter(elt => elt !== recipe);
        }
    } 
    else{
      recipe.style.display="block";
    }

  });

  // condition pour l'affichage du message d'erreur

  if(recettesAffichees.length === 0){
    erreurMessage.style.display = "block";
  }
  else{
    erreurMessage.style.display = "none";
  }

}



