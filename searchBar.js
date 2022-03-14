//* ALGO RECHERCHE *//

let allRecettes = [...document.querySelectorAll('.recetteEncart')];

let inputValue;

let recettesAffichees = [];
let erreurMessage = document.querySelector('#erreurMessage');

function getValue(e) {
  inputValue = document.getElementById('searchBar').value;
  console.log("valeur bar " + inputValue);

  allRecettes.map(recipe =>{
    let dataName = recipe.dataset.name.toLowerCase();
    let dataIngredients = recipe.dataset.ingredients.toLowerCase();
    let dataDescription = recipe.dataset.description.toLowerCase();

    if(inputValue.length >= 3){
        if(dataIngredients.includes(inputValue) || dataName.includes(inputValue) || dataDescription.includes(inputValue)){
          recipe.style.display="block";
          recipe.classList.add("displayed");
          // recettesAffichees = recettesAffichees.push(recipe);
        }
        else{
          recipe.style.display="none";
          recipe.classList.remove("displayed");
        }
    } 
    else{
      // console.log(inputValue + "is too short");
      recipe.style.display="block";
      // recipe.classList.add("displayed");
    }
    
    if(recipe.classList.contains('displayed')){
      recettesAffichees.push(recipe);
    }
    else{
      recettesAffichees = recettesAffichees.filter(elt => elt !== recipe);
    }

  });

  if(recettesAffichees.length === 0){
    erreurMessage.style.display = "block";
  }
  else{
    erreurMessage.style.display = "none";
  }

}



