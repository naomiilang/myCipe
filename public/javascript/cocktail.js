var getCocktail = function () {
    // var apiKey = "1"
    fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)
        });
};
