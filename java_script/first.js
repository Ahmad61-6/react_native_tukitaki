console.log("Hello, world");
let fullName = "John Doe";

price = 99.88;
x = null;
y = undefined;
console.log(fullName);

console.log(price);
console.log(x);
console.log(y);

let student = {
    fullName : "John Doe",
    age : 24,
    price : 99.88,
    x : null,
    y : undefined
}
console.log(student);
console.log(typeof student);
console.log(student.fullName);

const product = {
    name: "Ball pen",
    rating: 4,
    reviews: 7002,
    actual_price: 285,
    discount_percentage: 5,
    getDiscountedPrice: function() {
        return this.actual_price - (this.actual_price * this.discount_percentage / 100);
    }
}
console.log(product);
console.log(product.getDiscountedPrice());

let mode = "dark";
let age = 30;
let canVote = false;

if(mode === "dark") {
    console.log("Dark mode is on");
}
if(age >=18){
    canVote = true;
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

let value = 10;

value%2 ===0 ? console.log("Even number") : console.log("Odd number");
alert("This is an alert message");
let num = prompt ("Please enter your name");
alert(num % 5 === 0 ? "The number is divisible by 5" :"The number is not divisible by 5");

for(let i=1; i<=5; i++){
    console.log(i);
}

let strVal = "javascript";

for(let i of strVal){
    console.log("i = ", i);
}
for(let i in student){
    console.log(i, " = ", student[i]);
}

let gameEnd = false;
let correctNumber = 7;
while(!gameEnd){
    let userInput = prompt("Guess the correct number to end the game (between 1 and 10)");
    if(parseInt(userInput) === correctNumber){
        alert("Congratulations! You guessed the correct number.");
        gameEnd = true;
    }
    else{
        alert("Wrong guess. Try again!");
    }
}

let userInput = prompt("Enter the username");
alert(userInput ? `Welcome, @${userInput}${userInput.length}` : "No username entered");
let heros = ["superman", "batman", "spiderman","thor","ironman"];

for(let i = 0 ; i<heros.length;i++){
    console.log(heros[i]);
}
