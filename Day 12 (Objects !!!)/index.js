console.log("Day 12 - Objects");

let user={
    name:"Juan",
    age:30,
    "is adult":true //property with space
};
console.log(user.name);//Juan
console.log(user.age);//30
console.log(user["is adult"]);//true

//Adding new properties to an object
user.country="Japan";
console.log(user.country);//Japan
user["city of residence"]="Tokyo";
console.log(user["city of residence"]);//Tokyo

//Deleting properties from an object
delete user["is adult"];
console.log(user);

//Dynamic key names
let cars= prompt("Enter the brand of the cars you own");
let favCars={
    [cars]:5
}
console.log(favCars);

//Constructor function
function Cars(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
}
let car1=new Cars("Toyota","Corolla",2020); //An object was created using the constructor function
console.log(car1);
let car2=new Cars("Honda","Civic",2019);
console.log(car2);

//Object constructor
let person=new Object();
person.name="Alice";
person.age=25;
console.log(person); //{name: "Alice", age: 25}, but it is not recommended to create objects this way, 
// it is better to use object literals or constructor functions.

//Factory function
function createPerson(name,age){
    return{
        name,
        age,
        greet(){
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
}
let person1=createPerson("Bob",30);
console.log(person1);
person1.greet(); //That´s a function inside an object, also known as a method.
let person2=createPerson("Charlie",35);
console.log(person2);

//Nested objects
let profile={
    name:"David",
    age:40,
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        zip:10001
    },
    message: function(){
        console.log(`My name is ${this.name} and I live at ${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`);
    }
};
console.log(profile.address.street); //123 Main St, that´s how we access nested objects.
profile.message(); //My name is David and I live at 123 Main St, that´s how we call a method inside an object.
console.log(profile.address.city);

//if want to get all the values or keys: for...in loop
for(let key in profile){
    console.log(key);
    console.log(profile[key]);
}
//To get the keys of an object we can use Object.keys() method
console.log(Object.keys(profile));

//Static methods
const target={a:1,b:2,c:3};
const source={b:4,c:5,d:6};
const returnedTarget=Object.assign(target,source);
console.log(target); //{a: 1, b: 4, c: 5}
console.log(returnedTarget); //{a: 1, b: 4, c: 5, d: 6}, Object.assign() is a static method that copies the values of all enumerable own properties
// from one or more source objects to a target object. It returns the target object.

//Assigning something to a nested object
const letras={
    a:1,
    b:{c:2}
}
const letras2=Object.assign({},letras);
console.log(letras2); //{a: 1, b: {c: 2}}, but if we change the value of c in letras2, 
// it will also change in letras, because they are both pointing to the same object in memory.
letras2.b.c=3;
console.log(letras.b.c); //3
console.log(letras2.b.c); //3

//Convert an object to an array
const obj={a:1,b:2,c:3};
const arr=Object.entries(obj);
console.log(arr); //[["a", 1], ["b", 2], ["c", 3]], Object.entries() is a static method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

//Convert an array to an object
const arr2=[["a", 1], ["b", 2], ["c", 3]];
const obj2=Object.fromEntries(arr2);
console.log(obj2); //{a: 1, b: 2, c: 3}, Object.fromEntries() is a static method that transforms a list of key-value pairs into an object. It is the inverse of Object.entries().

//Freezing an object, so it cannot be modified
const frozenObj={a:1,b:2,c:3};
Object.freeze(frozenObj);
frozenObj.a=10;
console.log(frozenObj); //{a: 1, b: 2, c: 3}
console.log(Object.isFrozen(frozenObj)); //true

//Sealing an object, so it cannot be extended or deleted, but its existing properties can be modified
const sealedObj={a:1,b:2,c:3};
Object.seal(sealedObj);
sealedObj.a=10;
delete sealedObj.b;
console.log(sealedObj); //{a: 10, b: 2, c: 3}
console.log(Object.isSealed(sealedObj)); //true

//Checking if an object has a property
const obj3={a:1,b:2,c:3};
console.log(Object.hasOwn(obj3,"a")); //true, Object.hasOwn() is a static method that returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). 

//Destructuring an object
const person3={
    name:"Eve",
    age:28,
    subjects: ["Math","Science","History"],
    address:{
        street:"456 Main St",
        city:"Los Angeles",
        state:"CA",
        zip:90001
    }
} 
const {name,age, height=1.75}=person3; //we can use destructuring to extract values from an object and assign them to variables. We can also assign default values to properties that do not exist in the object, in this case height.
console.log(name); //Eve
console.log(age); //28
console.log(height); //1.75, we can assign a default value to a property that does not exist in the object, in this case height. If we try to access a property that does not exist without assigning a default value, it will return undefined.

//Using a dynamic property name in destructuring
const {subjects, numberOfsubjects=subjects.length}=person3; //we can use a dynamic property name in destructuring, in this case numberOfsubjects, which will be assigned the value of subjects.length.
console.log(numberOfsubjects); //3

//Alliasing a property name in destructuring    
const {age:edadPersona3}=person3;
console.log(edadPersona3);

//Nested Object Destructuring
const {address:{city, state}}=person3; //we can also destructure nested objects, in this case we are destructuring the address object and extracting the city and state properties.
console.log(city); //Los Angeles
console.log(state); //CA

function sendEmail({name, address: {street, city}}){
    console.log(`Sending email to ${name} at ${street}, ${city}`);
}
sendEmail(person3);

//Same way but with a function expression
const getPerson3 = () => {
    return {
        name: "Eve",
        age: 28,
        subjects: ["Math", "Science", "History"],
        address: {
            street: "456 Main St",
            city: "Los Angeles",
            state: "CA",
            zip: 90001
        }
    }
}

const {name:person3Name, age:person3Age} = getPerson3();
console.log(person3Name, person3Age); //Eve 28

//for of loop with destructuring
const students = [
    {name:"Alice", grade:"A"},
    {name:"Bob", grade:"B"},
    {name:"Charlie", grade:"C"}
];
for(let {name, grade} of students){
    console.log(`${name}: ${grade}`);
}
//Alice: A
//Bob: B
//Charlie: C

//Optional chaining
const userProfile={
    name:"Frank",
    address:{
        street:"789 Main St",
        city:"New York",
        state:"NY",
        zip:10001
    }
};
console.log(userProfile.job?.title); //undefined, optional chaining allows us to access 
// properties of an object that may not exist without throwing an error. 
// In this case, userProfile.job does not exist, so it returns undefined instead of throwing an error.

// -------- TASKS
//## 1. What will be the output and why?
const user4 = { name: "Alex", age: undefined };
console.log(user4.age ?? "Not provided");

//## 3. Given an object with deeply nested properties, extract name, company,
//  and address.city using destructuring

const personTask = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
const {name: nombrePersonaTask, company: {name: companyName, location: {city: ciudadPersonaTask}}} = personTask;
console.log(nombrePersonaTask, companyName, ciudadPersonaTask);

//## 4. Build a Student Management System

//- Store student details in an object (name, age, grades).
//- Implement a method to calculate the average grade.
const student=[
    {
        name:"Juanito",
        age: 20,
        grades: [85, 90, 78]
    },
    {
        name:"Bodoque",
        age: 22,
        grades: [92, 88, 95]
    
    },
    {
        name:"Sara",
        age: 19,
        grades: [50, 55, 30]
    }
]

// Using destructuring to extract name and grades directly from the student object
const calculateAverageGrade = ({ name, grades }) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    console.log(`Student: ${name}, Average Grade: ${average.toFixed(2)}`);
    return average;
}

students.forEach(calculateAverageGrade);

//## 10. Loop and print values using Object destructuiring
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
users.forEach(({name, address, age}) => {
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
});

//Another option using for...of loop
for(let {name, address, age} of users){
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}