console.log("Day 13 - this keyword");

//this keyword and window object
console.log(this);

//this keyword in a function or object
//Inside of an object - Implicit binding
const person = {
    name: "Juan",
    age: 30,
    returnThis: function() {
        return this;
    },
    getpersonalData: function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};
console.log(person.returnThis()); //it reurn the person object
console.log(person.getpersonalData()); //it reurn the personal data of the person object

const tom ={
    name: "Tom",
    age: 25,
}
const jerry ={
    name: "Jerry",
    age: 20
}
function greetMe(obj){
    obj.logMessage = function(){
        console.log(`Hello, ${this.name}, you are ${this.age} years old.`);
    }
}
greetMe(tom);
tom.logMessage(); //Hello, Tom, you are 25 years old.
greetMe(jerry);
jerry.logMessage(); //Hello, Jerry, you are 20 years old.

//Arrow functions and this keyword
const food={
    name: "Mango",
    color: "Yellow",
    //getFoodInfo: () => 'The ${this.name} is ${this.color}'; //it will return undefined because arrow functions 
    // do not have their own this keyword, it inherits from the parent scope

    //Correct way to use this keyword in an object method
    getFoodInfo: function() {
        return `The ${this.name} is ${this.color}`;
    }

    //However if we want to use an arrow function, we can use a regular function to return the string and then call it inside the arrow function
    //getFoodInfo: function() {
    //    return () => `The ${this.name} is ${this.color}`;
    //} 
}
console.log(food.getFoodInfo()); //The Mango is Yellow

//Explicit binding - call, apply and bind methods

//call
//If we want to use the getFoodInfo method of the food object for another object, we can use the call method
const fruit = {
    name: "Apple",
    color: "Red"
}
console.log(food.getFoodInfo.call(fruit)); //The Apple is Red
//another example with paramaters
const likes = function(fruit1, fruit2){
    console.log(`${this.name} likes ${fruit1} and ${fruit2}`);
}
likes.call(person, "Mango", "Apple"); //Juan likes Mango and Apple
//apply
//It is useful when there are more parameters and we want to pass them as an array
const fruits = ["Banana", "Grapes"];
likes.apply(person, fruits); //Juan likes Banana and Grapes
//bind
//It returns a new function with the this keyword bound to the specified object
//It is useful when we want to use the function later or in a different context
const boundLikes = likes.bind(person, "Pineapple", "Strawberry");
boundLikes(); //Juan likes Pineapple and Strawberry

//Example with a constructor function
const Cartoon= function(name, animal){
    this.name = name;
    this.animal = animal;
    this.getInfo = function(){
        console.log(`${this.name} is a ${this.animal}`);
    }
}
const tomCat = new Cartoon("Tom", "Cat");
tomCat.getInfo(); //Tom is a Cat

const jerryMouse = new Cartoon("Jerry", "Mouse");
jerryMouse.getInfo(); //Jerry is a Mouse

//Another simple example
const obj2 = {
    name: "Object 2",
    getName: function(){
        console.log(this.name);
    }
}
const gtName = obj2.getName;
gtName(); //Object 2