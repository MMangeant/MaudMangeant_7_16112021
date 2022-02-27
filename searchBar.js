//* ALGO RECHERCHE *//

let allRecettes = [...document.querySelectorAll('.recetteEncart')];

let inputValue;

function getValue(e) {
  inputValue = document.getElementById('searchBar').value;

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
