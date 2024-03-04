const prompt= require("prompt-sync")();
// question1 
console.log("--------Question 1--------------")
let x = prompt("Enter Number 1:");
let y = prompt("Enter Number 2:");

console.log("Before swapping x: ", x);
console.log("Before swapping y: ", y);

x = parseInt(x); // Convert input to integers
y = parseInt(y);

x = x + y;
y = x - y;
x = x - y;

console.log("After swapping x: ", x);
console.log("After swapping y: ", y);


// question2
console.log("--------Question 2--------------")
function area(a){
    let area =a*a;
    return area;
}
let a =prompt("Enter value of edge of square: ");
console.log("Area for "+a+ ":"+area(a))

// question 3
console.log("--------Question 3--------------")
function kmTocm(){
    let km=prompt("Kilometer value:")
    let cm=km*100000
    console.log("Value in Centimeter: ",cm+"cm")
}
kmTocm()
// Question 4
console.log("--------Question 4--------------")

function performOperation(x, y, operation) {
    let result;
  
    switch (operation) {
      case "add":
        result = x + y;
        break;
      case "subtract":
        result = x - y;
        break;
      case "multiply":
        result = x * y;
        break;
      case "divide":
        if (y === 0) {
          result = "Division by zero is not allowed.";
        } else {
          result = x / y;
        }
        break;
      default:
        result = "Invalid operation";
        break;
    }
  
    return result;
  }
  
  // Test the function with different operations
let num1=prompt("Enter Number 1:")
let num2=prompt("Enter Number 2:")
  
  console.log("Addition:", performOperation(num1, num2, "add"));
  console.log("Subtraction:", performOperation(num1, num2, "subtract"));
  console.log("Multiplication:", performOperation(num1, num2, "multiply"));
  console.log("Division:", performOperation(num1, num2, "divide"));
  