//* ALGO RECHERCHE *//

let allRecettes = [...document.querySelectorAll('.recetteEncart')];

let inputValue;

let recettesAffichees = [];
let erreurMessage = document.querySelector('#erreurMessage');

function research(e) {

  inputValue = document.getElementById('searchBar').value;

  for(let i = 0 ; i < allRecettes.length ; i++){
    let dataName = allRecettes[i].dataset.name.toLowerCase();
    let dataIngredients = allRecettes[i].dataset.ingredients.toLowerCase();
    let dataDescription = allRecettes[i].dataset.description.toLowerCase();
    
    if(inputValue.length >= 3){
      if(dataIngredients.includes(inputValue) || dataName.includes(inputValue) || dataDescription.includes(inputValue)){
        allRecettes[i].style.display="block";
        recettesAffichees.push(allRecettes[i]);
      }
      else{
        allRecettes[i].style.display="none";
        recettesAffichees = recettesAffichees.filter(elt => elt !== allRecettes[i]);
      }
    } 
    else{
      allRecettes[i].style.display="block";
    }

  }

  // condition pour l'affichage du message d'erreur
  
  if(recettesAffichees.length === 0){
    erreurMessage.style.display = "block";
  }
  else{
    erreurMessage.style.display = "none";
  }

}


