let display = document.getElementById("display");

let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiply = document.getElementById("multiply");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let subtract = document.getElementById("subtract");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let add = document.getElementById("add");
let zero = document.getElementById("zero");
let decimal = document.getElementById("decimal");
let equals = document.getElementById("equals");

let equation = "";

clear.addEventListener("click", function() {
   equation = "";
   display.value = "";
});

backspace.addEventListener("click", function() {
  equation = equation.slice(0, -1);
  display.value = equation;
  });
  
  divide.addEventListener("click", function() {
  equation += "/";
  display.value = equation;
  });
  
  multiply.addEventListener("click", function() {
  equation += "*";
  display.value = equation;
  });
  
  subtract.addEventListener("click", function() {
  equation += "-";
  display.value = equation;
  });
  
  add.addEventListener("click", function() {
  equation += "+";
  display.value = equation;
  });
  
  decimal.addEventListener("click", function() {
  equation += ".";
  display.value = equation;
  });
  
  zero.addEventListener("click", function() {
  equation += "0";
  display.value = equation;
  });
  
  one.addEventListener("click", function() {
  equation += "1";
  display.value = equation;
  });
  
  two.addEventListener("click", function() {
  equation += "2";
  display.value = equation;
  });
  
  three.addEventListener("click", function() {
  equation += "3";
  display.value = equation;
  });
  
  four.addEventListener("click", function() {
  equation += "4";
  display.value = equation;
  });
  
  five.addEventListener("click", function() {
  equation += "5";
  display.value = equation;
  });
  
  six.addEventListener("click", function() {
  equation += "6";
  display.value = equation;
  });
  
  seven.addEventListener("click", function() {
  equation += "7";
  display.value = equation;
  });
  
  eight.addEventListener("click", function() {
  equation += "8";
  display.value = equation;
  });
  
  nine.addEventListener("click", function() {
  equation += "9";
  display.value = equation;
  });
  
  equals.addEventListener("click", function() {
  try {
  equation = eval(equation);
  display.value = equation;
  } catch (error) {
  display.value = "Error";
  }
  });