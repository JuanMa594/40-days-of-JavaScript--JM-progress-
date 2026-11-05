console.log('Hello, World!');

let catchingTheBus = true;
if (catchingTheBus) {
  console.log('I am catching the bus!');
} else {
  console.log('I am not catching the bus!');
}
//Another option
catchingTheBus ? console.log('I am catching the bus!') : console.log('I am not catching the bus!');

let busNumber = 42;
if (busNumber === 42) {
  console.log('I am catching the bus number 42!');
} else if (busNumber > 42 && busNumber < 50) {
  console.log('I am catching a bus with a number between 42 and 50!');
} else if (busNumber >= 50) {
  console.log('I am catching a bus with a number greater than or equal to 50!');
} else {
  console.log('I am not catching any bus!');
}

//Switch-case statement
let dayOfWeek = 'Monday';
switch (dayOfWeek) {
    case 'Monday':
        console.log('Today is Monday!');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday!');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday!');
        break;
    case 'Thursday':
        console.log('Today is Thursday!');
        break;
    case 'Friday':
        console.log('Today is Friday!');
        break;
    case 'Saturday':
        console.log('Today is Saturday!');
        break
    case 'Sunday':
        console.log('Today is Sunday!');
        break;
    default:
        console.log('Invalid day of the week!');
}

//------------------- Tasks -------------------
//## 2. Build an ATM Cash Withdrawal System
let withDrawalAmount = 100;
if(withDrawalAmount % 100 === 0){
 console.log("Withdrawal succesful!")
}else{
  console.log("Invalid amount")
}
//3. Build a Calculator with switch-case
let operator="*";
let num1=10;
let num2=5;
switch(operator){
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}
//## 4. Pay for your movie ticket
let age=18;
if (age <18){
  console.log("Your ticket price is $3");
}else if(age >17 && age < 61){
  console.log("Your ticket price is $10");
}else if(age >60){
  console.log("Your ticket is $8");
}else{
  console.log("Invalid age");
}