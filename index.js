// console. log("Hello world!");
// console. log("Hello Nikita!");
// console. log("I love Javascript!");
// fullName = "Nikita";
// console.log(fullName);
// console. log("Cloning Javascript project to Github");

// // CONTENT for displaying on website

// window.alert("This is an alert.");
// document.getElementById("myh2-forjs").textContent = "This text is written by Javascript.";
// let firstName = "Nikita";
// let favouriteFood = "Pizza";
// let email = "Nikita123@gmail.com";

// console.log(typeof email);
// console.log("Your name is ", firstName);
// console.log("You like ", favouriteFood); 
// console.log("Your Email is ", email);

// let studentName = "Raghav";
// let age = 23;

// document.getElementById("p1").textContent = `Student name is ${studentName}`;
// document.getElementById("p2").textContent = `Student age is ${age}`;

// <---------------Taking username as input----------->

// let username;
// document.getElementById("submit").onclick = function(){
//     username =document.getElementById("username").value;
//     document.getElementById("hello").textContent = `Hello ${username}`;
//     console.log(username);
// }

// <---------Type conversion------->

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);