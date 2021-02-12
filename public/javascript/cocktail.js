const cocktailPic = document.getElementById("pic");
const cocktailName = document.getElementById("drinkTitle");
const cocktailIngredient1= document.getElementById("drinkIngredient1");
const cocktailIngredient2= document.getElementById("drinkIngredient2");
const cocktailIngredient3= document.getElementById("drinkIngredient3");
const cocktailIngredient4= document.getElementById("drinkIngredient4");
const cocktailIngredient5= document.getElementById("drinkIngredient5");
const cocktailIngredient6= document.getElementById("drinkIngredient6");
const cocktailIngredient7= document.getElementById("drinkIngredient7");
const cocktailIngredient8= document.getElementById("drinkIngredient8");
const cocktailIngredient9= document.getElementById("drinkIngredient9");
const cocktailIngredient10= document.getElementById("drinkIngredien10");
const cocktailDescription = document.getElementById("drinkDescription");

var getCocktail = function () {
    // var apiKey = "1"
    fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
    .then(function(response) {
        response.json()
        .then(function(data) {
            drinkIm = data.drinks[0].strDrinkThumb;
            
            cocktailPic.setAttribute("src", drinkIm);
            // cocktailPic.style.height='20';
            // cocktailPic.style.width='auto';
            cocktailPic.setAttribute("alt", "Image of " + data.drinks[0].strDrink);

            cocktailName.textContent = data.drinks[0].strDrink;
            cocktailDescription.textContent = data.drinks[0].strInstructions;
            cocktailIngredient1.textContent = data.drinks[0].strIngredient1;
            cocktailIngredient2.textContent = data.drinks[0].strIngredient2;
            cocktailIngredient3.textContent = data.drinks[0].strIngredient3;
            cocktailIngredient4.textContent = data.drinks[0].strIngredient4;
            cocktailIngredient5.textContent = data.drinks[0].strIngredient5;
            cocktailIngredient6.textContent = data.drinks[0].strIngredient6;
            cocktailIngredient7.textContent = data.drinks[0].strIngredient7;
            cocktailIngredient8.textContent = data.drinks[0].strIngredient8;
            cocktailIngredient9.textContent = data.drinks[0].strIngredient9;
            cocktailIngredient10.textContent = data.drinks[0].strIngredient10;

           
            //get dog breed information
       
        })
    })
};

getCocktail();

// document.querySelector('#recipeBtn').addEventListener('click', getCocktail());