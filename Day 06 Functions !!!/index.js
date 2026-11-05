console.log("Day 06");

//Functions :)

//Define or Declare a function
function printingSomething() {
    console.log("Printing...");
}
//Calling or Invoking a function
printingSomething();

//Function as an Expression
let printMe= function() {
    console.log("Print Me!");
}
printMe();

//Parameters and Arguments
function sumTwoNumbers(a, b){ //a and b are parameters
    const sum = a + b;
    console.log(sum);
}
sumTwoNumbers(3, 4); //3 and 4 are arguments
sumTwoNumbers(10, 20);
sumTwoNumbers(100, 200);
function sumTwoNumbers2(a, b){ //a and b are parameters
    const sum = a + b;
    return sum;
}
const result = sumTwoNumbers2(3, 4); //3 and 4 are arguments
console.log(result);
function doble(x){
    return 2 * x;
}
console.log(doble(result));

//Default Parameters
function resta(a, b = 0){
    return a - b;
}
console.log(resta(10));

//Rest Parameters
function calculate(x, y, ...rest){
    console.log(x, y, rest);
}
calculate(1,2,3,4,5,6);

//Nested Functions
function outerFunction(){
    console.log("Outer Function");
    function innerFunction(){
        console.log("Inner Function");
    }
    innerFunction(); //Only the innerFunction can be called inside the outerFunction, it is not accessible outside of it.
                    //It can be called outside, only if we return it from the outerFunction and assign it to a variable.
    //return innerFunction;
}
outerFunction();
//let inner = outerFunction();
//inner(); Here we are calling the innerFunction outside of the outerFunction

//Callback Functions
function greet(callback){
    console.log("Hello ");
    callback();
}
greet(function(){ //This function doesn't have a name, it is an anonymous function, and it is passed as an argument to the greet function, which will call it after printing "Hello ".
    console.log("World!");
});

//Higher Order Functions
//It can take a function as an argument, or it can return a function, or both.
function higherOrderFunction(callback){ 
    callback();
}
higherOrderFunction(function(){
    console.log("This is a higher order function!");
});

function anotherHigherOrderFunction(callback){
    return function(){
        console.log("This is another higher order function!");
    }
}
const anotherFunction = anotherHigherOrderFunction();
anotherFunction();

//Arrow Functions
const arrowFunction = () => {
    console.log("This is an arrow function!");
}
arrowFunction();

let sum = (a, b) => a + b; //If the function has only one expression, we can omit the curly braces and the return statement.
console.log(sum(5, 10));

const isEven = num => num % 2 === 0; //If the function has only one parameter, we can omit the parentheses.
console.log(isEven(4));
console.log(isEven(5));

//IIFE (Immediately Invoked Function Expression)
//It´s exexuted immediately after it is defined, and it is not accessible outside of it, it is a self-invoking function.
(function(number){
    console.log("This is an IIFE!", number);
})(2);

//------------Tasks
//## 1. Write a Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30));

//## 2. Create a Function to Find the Maximum of Two Numbers
function findMax(a, b){
    return a > b ? a : b;
}
console.log(findMax(10, 20));

//## 4. Write a Function to Find Factorial of a Number
(function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
})(5);