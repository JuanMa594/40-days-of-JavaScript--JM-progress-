console.log("Day 11 - Closures");
/*A closure is a function
        that has access to variables in its outer scope, even after the outer function
        has finished executing. This allows us to create functions that can remember and access 
        variables from their outer scope*/

function outerFunction() {
    let count = 0; // This variable is in the outer scope
    return function innerFunction() { // This is the closure
        count++; // The inner function has access to the 'count' variable
        console.log(count); // It can also modify the 'count' variable
    }
}

const myClosure = outerFunction();
myClosure(); // Output: 1
myClosure(); // Output: 2
myClosure(); // Output: 3

//BANK ACCOUNT EXAMPLE
function createBankAccount(initialBalance) {
    let balance = initialBalance; // This variable is in the outer scope
    return {
        deposit: (amount) =>{ // This is a closure
            balance += amount; // The closure has access to the 'balance' variable
            console.log(`Deposit of ${amount} successful. New balance: ${balance}`);
        },
        withdraw: (amount) => { // This is another closure
            if (amount > balance) {
                console.log(`Withdrawal of ${amount} failed. Insufficient funds.`);
            } else {
                balance -= amount;
                console.log(`Withdrawal of ${amount} successful. New balance: ${balance}`);
            }
        }, 
        checkBalance: () => console.log(`Current balance: ${balance}`) // This is another closure
    }
}
const myAccount = createBankAccount(100); //The initial balance is 100
myAccount.checkBalance(); // Output: Current balance: 100
myAccount.deposit(50); // Output: Deposit of 50 successful. New balance: 150
myAccount.withdraw(20); // Output: Withdrawal of 20 successful. New balance: 130
myAccount.checkBalance(); // Output: Current balance: 130

//BIG DATA EXAMPLE ---- IT´S NOT RECOMMENDED TO USE CLOSURES IN THIS WAY, BUT IT´S JUST AN EXAMPLE
function dealingWithBigData() {
    let bigData = new Array(1000000).fill("*"); // This variable is in the outer scope
    return function () { 
        console.log(bigData[3]);
    }
}
const bigDataClosure = dealingWithBigData();
bigDataClosure(); // Output: *
//It´s not recommended to use closures in this way, because it can lead to memory leaks.
//The bigData variable will remain in memory as long as the closure exists, even if we don´t need it anymore.

/* **Advantages/Usefulness of Closures** (36:25)

- **Private variables:** They allow variables to be kept private without direct exposure (37:06).
- **Preventing variable pollution:** They stop variables from being polluted by not being directly exposed (37:20).
- **Function factories:** They facilitate the creation of functions that maintain persistent state (37:44).
- **Variables alive between multiple calls:** They keep variables alive and updated across multiple function invocations */

//Closure in Event Handler
/*function counter(){
    let count = 0; // This variable is in the outer scope
    document.getElementById("counterButton").addEventListener("click", function() { // This is a closure
        count++; // The closure has access to the 'count' variable
        console.log(`Button clicked ${count} times`); // It can also modify the 'count' variable
    });
}
counter();*/

//TASKS
//## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    }
}
const double = createMultiplier(2); // This will create a function that multiplies numbers by 2
console.log(double(5));

//## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
function createCounter(initialValue = 0) { //If no initial value is provided, it will default to 0
    let count = initialValue;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = initialValue;
        },
        getValue: () => count
    };
}
const myCounter = createCounter(5);
console.log(myCounter.getValue()); // Output: 5
myCounter.increment();
console.log(myCounter.getValue()); // Output: 6
myCounter.decrement();
console.log(myCounter.getValue()); // Output: 5
myCounter.reset();
console.log(myCounter.getValue()); // Output: 5