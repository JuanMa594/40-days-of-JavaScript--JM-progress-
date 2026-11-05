console.log("Day 15: JavaScript Array Master Course");
/*- [ ] Introduction
- [ ] What is an Array in JavaScript?
- [ ] How to Create an Array in JavaScript?
- [ ] How to Get Elements from an Array in JS?
- [ ] How to Add Elements to an Array in JS?
- [ ] How to Remove Elements from an Array in JS?
- [ ] How to Copy and Clone an Array in JS?
- [ ] How to Determine if a Value is an Array in JS?
- [ ] Array Destructuring in JavaScript
    - [ ] How to Assign a Default Value to a Variable?
    - [ ] How to Skip a Value in an Array?
    - [ ] Nested Array Destructuring in JS
- [ ] How to Use the Rest Parameter in JS?
- [ ] How to Use the Spread Operator in JS?
- [ ] Destructuring Use Cases in JavaScript
    - [ ] How to Swap Values with Destructuring?
    - [ ] How to Merge Arrays?
- [ ] The length property
- [ ] JavaScript Array Methods
    - [ ] How to Create. Remove. Update. and Access Arravs in JavaScript?
        - [ ] The concat() array method
        - [ ] The join() array method
        - [ ] The fill() array method
        - [ ] The includes() array method
        - [ ] The indexOf() array method
        - [ ] The reverse() array method
        - [ ] The sort() array method
        - [ ] The splice() array method
        - [ ] The at() Method
        - [ ] The copyWithin() Method
        - [ ] The flat() Method
        - [ ] Gruping elements in Array
- [ ] Static Array Methods in JavaScript
    - [ ] The Array-Like
    - [ ] The Array. from() array method
    - [ ] The Array. fromAsync() array method
    - [ ] The Array.of() array method
- [ ] Array Iterator Methods in JavaScript
    - [ ] The filter() array method
    - [ ] The map() array method
    - [ ] The flatMap() array method
    - [ ] The reduce() array method
    - [ ] The reduceRight() array method
    - [ ] The some() array method
    - [ ] The find() array method
    - [ ] The findIndex() array method
    - [ ] The findLast() array method
    - [ ] The findLastIndex() array method
    - [ ] The forEach() array method
    - [ ] The every() array method
    - [ ] The entries() method
    - [ ] The values() method
    - [ ] Immutability
    - [ ] The toReversed() method
    - [ ] The toSorted() method
    - [ ] The toSpliced() method
    - [ ] The with() method
- [ ] Tasks and Quizzes With Interview Questions*/

{
    const mixedArray = [100, true, "tapaScript", {}];

    // index = The position of an element in the array is known as its index.
    // index starts with 0
    // index end with length - 1

    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    function Car(model) {
        this.model = model;
    }

    const bmwCar = new Car("BMW X1");
    console.log(bmwCar);

    const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");

    console.log("Salad", salad);
    console.log("Another Salad", anotherSalad);

    console.log(salad === anotherSalad);

    const two = new Array(1, 2);
    const two2= new Array(2);//this will create an array with 2 lenght
    console.log(two); // [1, 2]

    // const element = array[index]

    console.log(salad[0]); // '🍅'
    console.log(salad[2]); // '🥦'
    console.log(salad[5]); // '🥕'

    // const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

    for (let i = 0; i <= salad.length - 1; i++) {
        console.log(`Element at index ${i} is ${salad[i]}`);
    }

    // push() - end - gets added at the end of the array
    const ret = salad.push("🥜");
    console.log(ret); // 8
    console.log(salad);

    // unshift() - start - gets added at the beggining of the array

    const unRet = salad.unshift("🥜");
    console.log(unRet); // 9
    console.log(salad);

    // pop - end - removed the last element of the array
    console.log(salad);
    const popRet = salad.pop();
    console.log(popRet);
    console.log(salad);

    // shift() - start - removed the first element of the array
    console.log(salad);
    const shiftRet = salad.shift();
    console.log(shiftRet);
    console.log(salad);

    // slice() - copying an array

    // salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
    const saladCopy = salad.slice();
    console.log("Salad Before Copy", salad); //['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
    console.log("Salad After Copy", saladCopy); //['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
    console.log(salad === saladCopy); // false

    // Deletermine if Array
    Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // true;
    Array.isArray("🍅"); // returns false
    Array.isArray({ tomato: "🍅" }); // returns false
    Array.isArray([]); // returns true

    const arr = [1, 2, 3, 4];
    Array.isArray(arr); // true
}
// Array Destructuring
{
    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

    const tomato = salad[0];
    const mushroom = salad[1];
    const carrot = salad[5];
}

//Destructuring an array to give the value to a variable
{
    const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
    const [tomato, mushroom, carrot] =  ['🍅', '🍄', '🥕'];
    console.log(tomato, mushroom, carrot);
}
//Default Value
{
    const [tomato, mushroom = '🍄'] = ['🍅'];

    console.log(tomato); // '🍅'
    console.log(mushroom ); // '🍄'
}
//skipping assigning a value from an array
{
    const [tomato, ,carrot] = ['🍅', '🍄', '🥕'];

    console.log(tomato); // '🍅'
    console.log(carrot); // '🥕'
}


// Nested Array

// [1 ,2, [4, [6, 8, ['q']]]]
{
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
const veg = fruits[4]; // ['🍅', '🍄', '🥕']
const carrot = veg[2]; // '🥕'

fruits[4][2]; // '🥕'
//skipping assigning a value from an array
let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

}

// Rest and Spread
// ...
{
const [tomato, mashroom, ...rest] =  ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(rest); //Using this when I dont want to need the other variables

const mySalad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const mySaaladCopy = [...mySalad]; //When copying for example an array, without typing element by element

console.log(mySaaladCopy); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

mySalad === mySaaladCopy; // false
}
*/

// Swapping
{
let first = '😔';
let second = '🙂';

[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
}


// Merge

{
const emotions = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotions, ...veggies];

console.log(emotionalVeggies);
}

// length

{
const arr1 = [11, 21, 73];
const arr2 = new Array(7);

console.log(arr1.length); // 3
console.log(arr2.length); // 7

// 2 ** 32 - 1 // 4294967295

arr1.length = 9
console.log(arr1)

}

// concat() - to concat one or many arrays

{
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    const third = [7, 8, 9];

    const merged = first.concat(second, third);
    console.log(merged);

    console.log(first); // [1, 2, 3]
    console.log(second); // [4, 5, 6]

    // array.concat(arr1, arr2,..,..,..,arrN);
}

// join() - it converts an array to a string, and sperate each element by a content separator(by default is the comma)
{
    const emotions = ["🙂", "😍", "🙄", "😟"];

    const joined = emotions.join("<=>");
    console.log(joined);

    [].join(); // return ""
}

// fill() - fill some elements with a value
{
    const colors = ["red", "blue", "green"];
    colors.fill("pink", 1, 3); //here, it replaces the [1] and [2] element by pink
    console.log(colors); ["red", "pink", "pink"];
}

// includes() //check if something is in an array
{
    const names = ["tom", "alex", "bob", "john"];

    console.log(names.includes("tom")); //true
    console.log(names.includes("july")); //false
}

// indexOf() and lastIndexOf() //the index of a value, and what´s the last time a value appears in an array
{
    const names = ["tom", "alex", "bob", "tom"];

    names.indexOf("alex"); // 1
    names.indexOf("rob"); // -1 (not found)

    names.indexOf("tom"); // 0
    names.lastIndexOf("tom"); // 3 (because tom is againg, but the last time it appears is in the [3] position)
}

// reverse() - reverse the positions of the elements
{
    const names = ["tom", "alex", "bob"];
    console.log(names.reverse());
}

// sort() 
// The default sort() method converts the element types into strings
//  The default sorting order is ascending.

{
    const names = ["tom", "alex", "bob"];
    console.log("After default sorting", names.sort());

    const artists = [
        "John White Abbott",
        "Leonardo da Vinci",
        "Charles Aubry",
        "Anna Atkins",
        "Barent Avercamp",
    ];

    console.log("Default sorting of artists array", artists.sort());

    artists.sort(function (a, b) {
        return a === b ? 0 : a > b ? -1 : 1;
    });

    console.log("Sort the artist names(Descending)", artists);

    let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

    console.log(
        "age with default sorting",
        ages.sort(function (a, b) {
            return a === b ? 0 : a > b ? 1 : -1;
        })
    );
}

// splice()
{
    // splice(start, deleteCount, item, item1, item2)

    const names = ["tom", "alex", "bob"];

    //console.log(names.splice(0, 1, "john")); // ['tom'] (because it´s deleting 1 element of the position 0, and adding ath that position jhon)
    //console.log(names); ["john", "alex", "bob"];

    //names.splice(1, 0, 'zack');

    names.splice(2, 1, "zack");
    console.log(names); ["tom", "alex", "zack"];
}

// at() - gives the valua AT [x] position
{
    const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

    junkFoodILove.at(0); // '🥖'

    junkFoodILove.at(3); // '🍕'

    junkFoodILove.at(-1); // '🍿' //Now counting from right to left

    junkFoodILove.at(-5); // '🍕'

    junkFoodILove.at(-8); // '🥖'

    junkFoodILove.at(10); // undefined
}

// copyWithin() It copies a part of an array within it, and then its located from the target position
{
    // copyWithin(target, start, end)

    const array = [1, 2, 3, 4, 5, 6, 7];
    array.copyWithin(0, 3, 6);
    console.log(array); // [ 4, 5, 6, 4, 5, 6, 7]
    [4, 5, 6, 4, 5, 6, 7];

    const array1 = [1, 2, 3, 4, 5, 6, 7];
    array1.copyWithin(0, 4);
    console.log(array1); // [5, 6, 7, 4, 5, 6, 7]
}

// flat()
{
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat()); // [0, 1, 2, 3, 4]

    const arr2 = [0, 1, [2, [3, [4, 5]]]];
    console.log(arr2.flat(Infinity)); //It allows to return a single array
                                      //[0, 1, 2, 3, 4, 5]
}

// grouping
{
    const employees = [
        { name: "Bob", dept: "Engineering", salary: 5000 },
        { name: "Alex", dept: "HR", salary: 3000 },
        { name: "Ravi", dept: "Engineering", salary: 7000 },
        { name: "John", dept: "Engineering", salary: 1000 },
        { name: "Tom", dept: "Sales", salary: 6000 },
    ];
    //structure: first the name of the complex array, then a callback function, specifying a key in wich I'm interested in 
    const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
    console.log(groupedByDet); //it´s going to say how many employees by department
                               //Engineering 3, HR 1, Sales 1

    const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
        return salary >= 5000 ? "More than 5k" : "Less than 5k";
    });
    console.log(groupedByMoreThan5000); //More than 5k 3
                                        //Less than 5k 2
}
// -------------------------------------------------
/*INMUTABILITY:  immutability in programming means that you do not directly change the data structure, 
 such as an array, once it is created (1:40:34). Instead, if you need to modify the data, 
 you should create a copy of it and apply the changes to that new copy */

// toReversed() Creates a copy of the original array with the eleements in reverse order
{
    const items = [1, 2, 3];

    const reversedItems = items.toReversed();

    console.log(reversedItems);
    console.log(items);
}

// toSorted() Creates a copy of the original array with the elements sorted in ascending order
{
    const months = ["Mar", "Jan", "Feb", "Dec"];
    const sortedMonths = months.toSorted();

    console.log(sortedMonths); //Copy of the original one
    console.log(months);
}

// toSpliced() Creates a copy of the original array with some eleements replaced
{
    const months = ["Jan", "Mar", "Apr", "May"];

    const months2 = months.toSpliced(1, 0, "Feb");

    console.log("Original Array", months); //["Jan", "Mar", "Apr", "May"]
    console.log("Spliced Array", months2); //["Jan","Feb", "Mar", "Apr", "May"]
}

// with() Creates a copy of the original array with the eleement I want replaced
{
    const numbers = [1, 2, 3, 4, 5];

    // numbers[2] = 6;

    const newArray = numbers.with(2, 6);

    console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
    console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

    // numbers[-2] = 8 // undefined
    const anotherArray = numbers.with(-2, 8);
    console.log(numbers);
    console.log(anotherArray); // [1, 2, 3, 8, 5]
    // with(index, value)
}

// Array Like
{
    // {key: "value"} // object
    // [1,2,3] // array

    const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

    console.log(arr_like);

    arr_like[2]; // 'array-like'
    arr_like.length; // 3

    console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

    console.log("is arr_like is an object?", arr_like instanceof Object); // true

    function checkArgs() {
        console.log("Array Like Args", arguments); 
        const argArr = [...arguments]; // This converts the array-like object into an array
        console.log("Converetd Arary Args", argArr);
        argArr.forEach((elem) => {
            console.log(elem);
        });
    }

    checkArgs(1, 45);

    console.log(
        "HTML COllection as Array Like",
        document.getElementsByTagName("li")
    );
    const collectionArr = Array.from(document.getElementsByTagName("li")); //Using the Array.from() method to convert the HTML collection(an array-like) into an array
    console.log("Converted Array", collectionArr);
}

// fromAsync()
{
    const collectionPromise = Array.fromAsync(
        document.getElementsByTagName("li")
    );
    console.log("Converted Array", collectionPromise);

    collectionPromise.then((value) => console.log(value));

    const ret = Array.fromAsync({
        0: Promise.resolve("tapaScript"),
        1: Promise.resolve("Google"),
        2: Promise.resolve("Apple"),
        length: 3,
    }).then((value) => console.log(value));

    console.log(ret);
}

// of()
{
    const a = new Array(2, 3, 4); // [2,3,4]
    const b = [4, 5, 6]; // [4,5,6]

    const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
    console.log("c", c); // [2, true, 'test', { name: 'Alex' }, [1, 2, 3]]
}

// ---------------Array Iterator Methods

let customers = [
    {
        id: 001,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"],
    },
    {
        id: 002,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: 003,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: 004,
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: 005,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
];

// filter() - Get 'Senior Citizens' by Filtering out other customers
//filter() is used to create a new array with all elements that pass the test implemented by the provided function.

const seniorCustomers = customers.filter((customer) => { //If the age of the customer is greater than or equal to 60, then it will be included in the seniorCustomers array
    return customer.age >= 60;
});
console.log("Senior Customer list", seniorCustomers);

// map() - Transform to add title and full name
//map() is used to create a new array populated with the results of calling a provided function on every element in the calling array.

const customersWithFullName = customers.map((customer) => {
    let title = "";

    if (customer.gender === "M") {
        title = "Mr.";
    } else if (customer.gender === "F" && customer.married) {
        title = "Mrs.";
    } else {
        title = "Miss";
    }

    customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

    return customer;
});

console.log("Customer after adding fullname", customersWithFullName);

// reduce() - The average age of the Customers who have purchased the Item, 'Book'.
//Reduce is used to execute a reducer function (that you provide) on each element of the array, resulting in a single output value.
/*arr.reduce(
    reducer(
       accumulator,
       currentValue,
       index,
       array),
    initialValue);
// A reducer function which is also called as callback function to be called on each element of the array.

const ret = function reducer(accumulator, currentValue, index, array) {
    // do something with accumulator and currentvalue
    // You get a result
    // You return that result
}
*/
{
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);
}

let count = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Book")) {
        accumulator = accumulator + customer.age;
        count = count + 1;
    }
    return accumulator;
}, 0);

console.log("Customer Avg age Purchased Book:", Math.floor(total / count));

// reduceRight() -- To reduce from the right
// It works the same as reduce(), but it starts from the rightmost element and moves to the leftmost element of the array.
let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
    return accumulator - current;
});

console.log("Subs", subsResult); // 15 - 40 - 100 = -125

// some() - Do we have a Young Customer(age less than 10 years)?
//some() is used to test whether at least ONE element in the array passes the test implemented by the provided function. It returns a Boolean value.

const hasYoungCustomer = customers.some((customer) => {
    return customer.age < 10;
});

console.log("Has Young Customer(Age < 10):", hasYoungCustomer); //false

// every() - Every Customer is Married?
//every() is used to test whether ALL elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isAllMarried = customers.every((customer) => {
    return customer.married;
});

console.log("All Customer Married?:", isAllMarried); //false

// find() - Find a customer with age less than 10 years
//find() is used to return the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const foundYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer(Age < 10): ", foundYoungCustomer);

// findIndex() method
//findIndex() is used to return the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const youngCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex);

// findLast() method
//findLast() is used to return the value of the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const lastFoundYoungCustomer = customers.findLast((customer) => {
    return customer.age < 10;
});
console.log(
    "[find] Last Found Young Customer(Age < 10): ",
    lastFoundYoungCustomer
);

// Array method Chaining

// Use Case: Get the total amount spent by Married Customers

// reduce()
// map()
// filter()

// Find all the married customers

const totalExpense = customers
    .filter((customer) => {
        return customer.married;
    })
    .map((marriedCustomer) => {
        return marriedCustomer.expense;
    })
    .reduce((accum, expense) => {
        return accum + expense;
    }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);


const arr = [1,2,3,4,5];

// forEach()
// forEach() is used to execute a provided function once for each array element. It does not return a new array, and it does not change the original array.
let sum = 0;
arr.forEach((elem) => {
    sum = sum + elem;
    //console.log(elem)
});
console.log("Sum using forEach", sum)

// entries()
//entries() is used to return a new Array Iterator object that contains the key/value pairs for each index in the array. The key is the index of the element, and the value is the element itself.
const arrItr = arr.entries();
/*console.log("Array Iterator", arrItr.next().value) // [0, 1]
console.log("Array Iterator", arrItr.next().value) // [1, 2]*/

for(const [index, element] of arrItr) {
    console.log(index, element)
}

// values()
//It only takes the value of the array, and it returns an Array Iterator object that contains the values for each index in the array, not the index.
const arrItr2  = arr.values();

for (const value of arrItr2) {
    console.log(value);
}

// flatMap()

const arr1 = [1, 2, 3, 4];

console.log("simple map", arr1.map(item => item *2));
console.log("simple flatmap", arr1.flatMap(item => item *2));

console.log("complex map", arr1.map(item => [item *2])); //[[2], [4], [6],..]
console.log("complex flat map", arr1.flatMap(item => [item *2])); // [2, 4, 6, 8] - it flattens the array one level, so it removes the [] and only leaves the values

arr1.map(item => [[item *2]]);
arr1.flatMap(item => [[item *2]]) // [[2], [4], [6], [8]] - it only flattens one level, if I want to flatten more, I have to use flat(Infinity) method