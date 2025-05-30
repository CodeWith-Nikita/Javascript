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
// document.addEventListener("DOMContentLoaded",function(){
//     let username;
//     document.getElementById("mySubmit").onclick = function(){
//         username = document.getElementById("myText").value;
//         console.log(username);
//     }
// });


// <---------TYPE CONVERSION------>
// age = Number(age);

//Calculaing the circumference
document.addEventListener("DOMContentLoaded",function(){
    let circumference;
    const PI = 3.14;
    let radius;
    document.getElementById("mySubmit").onclick = function(){
        radius = document.getElementById("myText").value;
        radius = Number(radius);
        circumference = 2 * PI * radius;
        document.getElementById("Pcircumference").textContent = `The Circumference is ${circumference} `;
        console.log(circumference);
    }
}); 