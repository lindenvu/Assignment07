/*eslint-env browser*/

/*
Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/


function Recipe(title, servings, ingredients) {
    "use strict";
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
    this.print = function () {
        window.console.log(this.title);
        window.console.log("Serves: " + this.servings);
        window.console.log("Ingredients:");
        var x;
        for (x = 0; x < ingredients.length; x += 1) {
            window.console.log("- " + ingredients[x]);
        }
    };
}

var Guacamole = new Recipe("Guacamole", 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);
Guacamole.print();
                           
                           
