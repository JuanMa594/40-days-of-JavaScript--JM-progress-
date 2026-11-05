console.log("Day 03");
//Operators: Arithmetic, Assignment, Comparison, Logical, Conditional, Type, Bitwise, grouping

//-------Arithmetic Operators: +, -, *, /, %(div, the residous of a div), 
// **(exponentiation), ++(we plus 1 to the number), -- (we minus 1 to the number)
console.log("***Arithmetic Operators***");
let a = 10;
let b=11;
console.log(a+b);
console.log(a-b); //And so on with the rest of the operators.

let number= 5;
console.log(number++); //This will print 5, but if we do console.log(number) it will print 6, because we have added 1 to the number.
console.log(number); //This will print 6, because we´ve added 1 to the number.
console.log(++number); //This will print 7, because we have added 1 to the number before it gets printed.

//-------Assignment Operators: =, +=, -=, *=, /=, %=
console.log("***Assignment Operators***");
let c = 10;
c += 5; //This is the same as c = c + 5, so it will print 15.
console.log(c);
c -= 3; //This is the same as c = c - 3, so it will print 12.

//---------Comparison Operators: ==(called loosely equals), !=, ===(called strict equal), !==(srict way diferences), >, <, >=, <=
console.log("***Comparison Operators***");
console.log(5 == "5"); //This will print true, because the double equal sign only compares the value, not the type.
console.log(5 === "5"); //This will print false, because the triple equal sign compares the value and the type.

let obj1= {name: "Juan"};
let obj2= {name: "Juan"};
console.log(obj1 === obj2); //This will print false, because they are different objects in memory, even though they have the same properties and values.

//--------Logical Operators: &&(and), ||(or), !(not), ??(nullish coalescing operator)
console.log("***Logical Operators***");
console.log(true && false); //This will print false, because both conditions need to be true for the result to be true.
console.log(true || false); //This will print true, because at least one of the conditions needs to be true for the result to be true.
console.log(!true); //This will print false, because the not operator negates the value.
console.log(null ?? "default value"); //This will print "default value", because the nullish coalescing operator returns the right-hand side operand when the left-hand side operand is null or undefined.
console.log(undefined ?? "default value"); //This will print "default value", because the nullish coalescing operator returns the right-hand side operand when the left-hand side operand is null or undefined.
console.log(false ?? "default value"); //This will print false, because the nullish coalescing operator only returns the right-hand side operand when the left-hand side operand is null or undefined, and false is not null or undefined.

//Conditional (Ternary) Operator: condition ? exprIfTrue : exprIfFalse
console.log("***Conditional (Ternary) Operator***");
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); //This will print "Yes, you can vote", because the condition is true.

// Bitwise Operators: &, |, ^, ~, <<, >>, >>>
console.log("***Bitwise Operators***");
console.log(5 & 3); //This will print 1, because the bitwise AND operator compares each bit of the first operand to the corresponding bit of the second operand, and if both bits are 1, the corresponding result bit is set to 1, otherwise it is set to 0. In this case, 5 in binary is 101 and 3 in binary is 011, so the result is 001, which is 1 in decimal.
console.log(5 | 3); //This will print 7, because the bitwise OR operator compares each bit of the first operand to the corresponding bit of the second operand, and if either bit is 1, the corresponding result bit is set to 1, otherwise it is set to 0. In this case, 5 in binary is 101 and 3 in binary is 011, so the result is 111, which is 7 in decimal.
console.log(5 ^ 3); //This will print 6, because the bitwise XOR operator compares each bit of the first operand to the corresponding bit of the second operand, and if the bits are different, the corresponding result bit is set to 1, otherwise it is set to 0. In this case, 5 in binary is 101 and 3 in binary is 011, so the result is 110, which is 6 in decimal.
console.log(~5); //This will print -6, because the bitwise NOT operator negates each bit of the operand
console.log(5 << 1); //This will print 10, because the left shift operator shifts the bits of the first operand to the left by the number of positions specified by the second operand. In this case, 5 in binary is 101, and shifting it to the left by 1 position gives us 1010, which is 10 in decimal.
console.log(5 >> 1); //This will print 2, because the right shift operator shifts the bits of the first operand to the right by the number of positions specified by the second operand. In this case, 5 in binary is 101, and shifting it to the right by 1 position gives us 10, which is 2 in decimal.

//Grouping Operator: ()
console.log("***Grouping Operator***");
a=1; // Removed 'let' because 'a' is already declared above
b=2; // Removed 'let' because 'b' is already declared above
console.log(a + b * 3); //This will print 7, because the multiplication operator has higher precedence than the addition operator, so it is evaluated first.
console.log((a + b) * 3); //This will print 9, because the parentheses group the addition operation together, so it is evaluated first, giving us 3, and then it is multiplied by 3, giving us 9.

//Type Operators: typeof, instanceof
console.log("***Type Operators***");
console.log(typeof 5); //This will print "number", because the typeof operator returns a string indicating the type of the operand.
console.log(typeof "Hello"); //This will print "string", because the typeof operator returns a string indicating the type of the operand.

console.log(typeof true); //This will print "boolean", because the typeof operator returns a string indicating the type of the operand.

//------------------------- Tasks   ----------------------
//##1 Odd or even?
let number1 = 10;
 if (number1%2===0){
  console.log(`The number ${number1} is even`);
 }else{
  console.log(`The number ${number1} is odd`);
 }
 //##2.Do you  have a driving license?
let age2=18;
age2>17 ? console.log("You can have a driving license") : console.log("You cannot have a driving license");
//##3.Calculate CTC with a Bonus
let monthlySalary=12300;
let anualSalary= (monthlySalary*12)+ (monthlySalary*12*0.2);
console.log(`Your anual salary with a 20% bonus is ${anualSalary}`);
//##4. Write a program for the Traffic Light Simulation.
let trafficLight = "green";
trafficLight === "green" ? console.log("Go") : trafficLight === "yellow" ? console.log("Slow down") : trafficLight === "red" ? console.log("Stop") : console.log("Invalid traffic light color");
//## 7. Max of Three Numbers
let p=14;
let q=9;
let r=10;
let max=0;;
if(p>q && p>r){
  max=p;
}else if(q>p && q>r){
  max=q;
}else{
  max=r;
}
console.log(`The maximum number is ${max}`);