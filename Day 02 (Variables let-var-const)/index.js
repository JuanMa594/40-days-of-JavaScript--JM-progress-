console.log("Here we go again!");

// 'var': Funtcion-scoped, can be redeclared (not recommended)
// 'let': Block-scoped, can be reassigned
// 'const': Block-scoped, **cannot** be redeclared or reassigned

/*var address= "Bangalore";
console.log(address);
var address="Barcelona";
console.log(address);*/

/*let address= "Bangalore";
console.log(address);
address="Barcelona";
console.log(address);*/
let name, age, isStudent, favprogram_language;// Declaring multiple variables in one line, and is a good way 
                                              // to keep the code clean and organized.
name = "Sara";
age = 30;
isStudent = true;
favprogram_language = "JavaScript";
console.log(name, age, isStudent, favprogram_language);


const address= "Bangalore";
console.log(address);
// address="Barcelona"; // This will throw an error because 'address' is a constant

/*
- ** Primitive Data Types: **
    - String: Text Value ("Hello, World!")
    - Number: Numeric Value (42, 3.14)
    - BigInt: Large integers, numbers (9007199254740991n)
    - Boolean: True or False (true, false)
    - Null: Represents "no value" (null)
    - Undefined: Variable declared but not assigned a value (undefined)
    - Symbol: Unique identifier (Symbol('id'))
- ** Non-Primitive (Reference) Data Types: **
    - Object: Collection of key-value pairs ({ name: "Alice", age: 30 })
    - Array: Ordered list of values ([1, 2, 3, "Hello"])
    - Function: Code that can be executed (function greet() { console.log("Hello!"); })
*/

function greet() {
    let message = "Hello, World!";
    console.log(message);
}  
greet();
object1 = { name: "Alex", age: 30 };
for (let key in object1) {
    console.log(key + ": " + object1[key]);
}
array1 = [1, 2, 3, "Hello"];
for (let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}