console.log("Day 05");

// for loop is using when there´s a fixe loop. We know how many times we want to loop.
// while loop is using when we don´t know how many times we want to loop. We want to loop until a condition is met.
// do while loop is using when we want to loop at least once. We want to loop until a condition is met.

for(let cont = 0; cont <= 5; cont++){
    console.log("Iteration/Loop: ", cont);
}

//Adition of even numbers from 1 to 100
for(let num=1; num <= 100; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}

let language= "JavaScript";
for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));
}

//Nested loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`Row: ${i}, Column: ${j}`);
    }
}

//Break/Continue
for(let i=1; i<=10; i++){
    if(i === 5) break; //Stop the loop when i is 5
    console.log(i);
}
for(let i=1; i<=10; i++){
    if(i === 5) continue; //Skip the iteration when i is 5
    console.log(i);
}

//Print a triangle of stars
let linea = "";
for (let i=1; i<6; i++){
    linea += "*";
    console.log(linea);
}

//While loop
let count = 0;
while(count < 5){
    console.log("Iteration/Loop: ", count);
    count++;
}

//Do while loop
let num = 0;
do {
    console.log("Iteration/Loop: ", num);
    num++;
} while(num < 5);

// ----------- Tasks
//2. Craete Multiplication Table (Using for loop)
let number = 5;
for(let i=1; i<11;i++){
    console.log(`${number} x ${i} = ${number*i}`);
}
//## 4. Skipping Multiples of 3
for(let i=1; i<=20; i++){
    if(i % 3 === 0) continue;
    console.log(i);
}