console.log("Day 14 - Error Handling");

//try catch
try{
    console.log("execution starts here");
    abc;
    console.log("execution ends here");
}catch (error){
    console.error("An error has occured");
    console.log(error.name); //It gives the name 
    console.log(error.message); //It gives a message where it says what had happened
    console.log(error.stack); //It gives a stack where the error is located 
}

//Real-World use cases
function divNumbers(a, b){
    try{
        if(b===0){
            throw new Error("Cannot divide by zero");
        }else{
            const result = a/b;
            console.log(`The result is ${result}`);
        }
    }catch(error){
        console.error("Got a math error: ", error.message)
    }
}
divNumbers(12,4);
divNumbers(12,0);

//Validate Age
function validateAge(age){
    try{
        if(isNaN(age)){
            throw new Error("Age must be a number");
        }
        console.log(`Age is ${age}`);
    }catch(error){
        console.error("Validation Error: ", error.message)
    }
}

//Rethrow
function validateForm (formData){
    try{
        if (!formData.username) throw new Error("Username is required");
        if (!formData.email.includes("@")) throw new Error("Wrong Email Format");
    }catch (error){
        console.error("Validation Error: ", error.message);
        throw error; //rethrow
    }
}
try{
    validateForm({username: "Juan", email: "elsupermail.com"});
}catch{
    console.error("Showing error message for user creation", error.message);
}

//try-catch-finally
/*try{ //code that may throw an error

}catch{ //code to handle the error

}finally{ //code that always runs (cleanup actions)

}*/
function processInformation(information){
    try{
        console.log(information);
        if(!information) throw new Error("No information provided");
    }catch (error){
        console.error("Error: ", error.message);
    }finally{
        console.log("Cleanup: Closing the conection");
    }
}
processInformation("Now we are here, passing some info");

//Custom Error
function ValidationError(message){
    this.name = "ValidationError";
    this.message = message;
}
function validateCitizen(age){
    if (age<60){
        throw new ValidationError("You´re not a senior citizen")
    }
    return "You are a senior citizen";
}
try{
    const message = validateCitizen(55);
    console.log(message);
}catch(error){
    console.error(`Validation Error: ${error.name}, ${error.message}`);
}

//## 2. Write a function processPayment(amount) that checks if the amount is 
// positive and not exceeding balance. If any condition fails, throw appropriate errors
function proccessPayment(amount, balance){
    try{
        if(!amount>0) throw new Error("Amount must be positive");
        if(!amount>balance) throw new Error ("Amount exceeds balance");
        console.log("Payment processed successfully");
    }catch(error){
        console.error("Something went wrong: ", error.message)
    }
}
proccessPayment(100,150);

//## 5. Implement a custom error type ValidationError using constructor functions to 
// handle form validation errors

Example:

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```
function ValidationError2 (message){
    this.name = "ValidationError";
    this.message = message;
}
function validateUser(userInput){
    try{
        if(!userInput.username) throw new ValidationError2("Username cannot be empty");
        if(userInput.age<0) throw new ValidationError2("Age must be a positive number");
    }catch (error){
        console.log(`Validation Error: ${error.name}, ${error.message}`);
    }
}
const userInput = { username: "", age: -2 };
validateUser(userInput);