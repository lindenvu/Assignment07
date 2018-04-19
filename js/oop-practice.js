/*eslint-env browser*/

//1.	Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.

function Cat() {
    "use strict";
}

var Dog  = function () {
    "use strict";
};

//2.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

var Stimpy = new Cat();
var Ren = new Dog();

//3.	Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window. 

function Animal() {
    "use strict";
    this.createAnimal = function () {
        window.console.log("The animal has been created");
    };
}

var Bird = new Animal();
Bird.createAnimal();

//4.	Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

function Animal2(msg) {
    "use strict";
    this.createAnimal = function () {
        window.console.log(msg);
    };
}
var Fish = new Animal2("The fish has been created");
Fish.createAnimal();

//5.	Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.

function Animal3(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

//6.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

var Garfield = new Animal3("cat", "tabby", "orange", "short", "fat");
var property;

for (property in Garfield) {
    window.console.log(property);
}

//7.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

Animal3.prototype.speak = function () {
    "use strict";
    if (this.type === "dog") {
        window.console.log("The " + this.color + " dog is barking!");
    }
    if (this.type === "cat") {
        window.console.log("The " + this.color + " cat is meowing!");
    }
};

var Odie = new Animal3("dog", "dashchund", "yellow", "short", "skinny");
Odie.speak();

//8.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

function Animal4(type, breed, color, height, length) {
    "use strict";
    var Type = type, Breed = breed, Color = color, Height = height, Length = length;
    var checkType = function () {
        if (Type === "dog") {
            return "dog";
        }
        if (Type === "cat") {
            return "cat";
        }
    };
    this.speak = function () {
        window.console.log("The " + checkType() + " has made a noise!");
    };
}

var Nermal = new Animal4("cat", "tabby", "grey", "short", "skinny");
Nermal.speak();

//9.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.

String.prototype.findWords = function (word) {
    "use strict";
    var myArray = this.valueOf().split(word);
    return myArray.length - 1;
};

window.console.log("dog eat dog world".findWords("cat"));
window.console.log("dog eat dog world".findWords("eat"));
window.console.log("dog eat dog world".findWords("dog"));
