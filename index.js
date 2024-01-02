// How To Run JavaScript In VSCode :
// ==> Node <Filename>.js
// ==> Node index.js

// Section 1  Values and Variables in JavaScript

// Naming Practice
var _myName = "Celina";
console.log(_myName);
/*** Output :- Celina ***/

// var 1myName ="Maisuriya";
// console.log(1myName);
/*** Output :- Error ***/

var _1my_Name = "Sanjay";
console.log(_1my_Name);
/*** Output :- Sanjay ***/

var $myName = "Celina Maisuriya";
console.log($myName);
/*** Output :- Celina Maisuriya ***/

/*************************************************/

// Section 2 Data Type in JavaScript
//  Challenge 1
var myName = "Celina Maisuriya";
console.log(myName);
/*** Output :- Celina Maisuriya ***/

var myAge = 22;
console.log(myAge);
/*** Output :- 22 ***/

var iAmMaisuriya = true;
console.log(iAmMaisuriya);
/*** Output :- true ***/

var iAmMaisuriya = true;
console.log(iAmMaisuriya);
/*** Output :- true ***/

/*************************************************/

// typeof Operator
console.log(typeof myAge);
/*** Output :- number ***/

console.log(typeof iAmMaisuriya);
/*** Output :- boolean ***/

/*** DataType Practice ***/
// Challenge 2
console.log(10 + "20");
/*** Output :- 1020 ***/

console.log(9 - "4"); //bug
/*** Output :- 5 ***/

console.log("Java" + "Script");
/*** Output :- JavaScript ***/

console.log(" " + " ");
/*** Output :-  blank space ***/

console.log(" " + 0);
/*** Output :- 0 ***/

console.log("Celina" - "Maisuriya"); //Not a Number
/*** Output :-  NaN ***/

console.log(true + true); //1 = true 0 = false
/*** Output :-  2 ***/

console.log(true + false);
/*** Output :- 1 ***/

console.log(false + true);
/*** Output :- 1 ***/

console.log(false - true);
/*** Output :-  -1 ***/

console.log(false - false);
/*** Output :- 0 ***/

console.log(true - false);
/*** Output :- 1 ***/

/*************************************************/

/*** Interview Question 1 ***/
// Difference between null and undefined

var iAmUesless = null;
console.log(iAmUesless);
/*** Output :- null ***/

console.log(typeof iAmUesless); //JavaScript Bug
/*** Output :- object ***/

var iAmStandBy;
console.log(iAmStandBy);
/*** Output :- undefined ***/

console.log(typeof iAmStandBy);
/*** Output :- undefined ***/

/*************************************************/

/*** Interview Question 2 ***/
// 2. What is NaN?
// ==> NaN is Property of Global Object.
// ==> In Other Words, It is a variabel in Global Scope.
// ==> The initial Value of NaN is Not A Number.

var myPhoneNumber = 6353413547;
console.log(myPhoneNumber);
/*** Output :- 6353413547 ***/

console.log(isNaN(myPhoneNumber));
/*** Output :- false ***/

var myName = "Maisuriya Celina SanjayKumar";
console.log(myName);
/*** Output :- Maisuriya Celina SanjayKumar ***/

console.log(isNaN(myName));
/*** Output :- true ***/

if (isNaN(myName)) {
  console.log("Please Enter Valid Phone Number");
}
/*** Output :- Please Enter Valid Phone Number ***/

// NaN Practice

NaN === NaN;
console.log(NaN === NaN);
/*** Output :- false ***/

Number.NaN === NaN;
console.log(Number.NaN === NaN);
/*** Output :- false ***/

isNaN(NaN);
console.log(isNaN(NaN));
/*** Output :- true ***/

Number.isNaN(NaN);
console.log(Number.isNaN(NaN));
/*** Output :- true ***/

/*** Output false ave che atle a variable ni value Number che.
     ane jo variable ni value Number hoy ane apde check kria ke number ni value not a number che 
     to a true ave atle a number nathi.
***/

/*************************************************/

// Section 3 Expressions and Operators

// 1. Assignment Operator
// ==> An Assignment Operator assigns a value to its left operand based on the value of its right operand.
// ==> The Simple assignment Operator is Equal (=).

var x = 5;
var y = 5;
console.log("It both the x and y are equal or not" + x == y); // Output is Wrong it's just like Bug
/*** Output :- false ***/

console.log(x == y);
/*** Output :- true ***/

console.log(`Is both the x and y are equal : ${x === y}`);
/*** Output :- Is both the x and y are equal : true ***/

// 2. Arithmatic Operator
// ==> An Arithmatic Operator takes numerical values (either literals or variabels) as their operands and returen a singel numarical value.

console.log(3 + 3);
/*** Output :- 6 ***/

console.log(10 - 5);
/*** Output :- 5 ***/

console.log(20 / 5);
/*** Output :- 4 ***/

console.log(5 * 6);
/*** Output :- 30 ***/

console.log("Modulo or Remainder Operator : " + (81 % 8));
/*** Output :- Modulo or Remainder Operator : 1 ***/

/*** Interview Question 3 ***/
// 3. Increment and Decrement Operator
// ==> Operator : x++ or ++x : Increment
// ==> Operator : x-- or --x : Decrement

// ==> Postfix : x++ or x--
// ==> Prefix : ++x or --x

// ==> If used postfix, with operator after operand (for example, x++), the increment operator increments and returens the value befor incrementing.

// Challenge 3

/*** Increment Postfix ***/
var num = 15;
var newNum = num++;

console.log(num);
console.log(newNum);

/*** Output :- 16 ***/
/*** Output :- 15 ***/

var num1 = 15;
var newNum1 = num1++ + 5;

console.log(num1);
console.log(newNum1);

/*** Output :- 16 ***/
/*** Output :- 20 ***/

/*** Decrement Postfix ***/

var num = 15;
var newNum = num--;

console.log(num);
console.log(newNum);

/*** Output :- 14 ***/
/*** Output :- 15 ***/

var num = 15;
var newNum = num-- + 5;

console.log(num);
console.log(newNum);

/*** Output :- 14 ***/
/*** Output :- 20 ***/

// ==> Postfix increment operator means the expression is evaluated first using the original value of the variabel and then the variabel is incremented(incresed).

// ==> If used prefix, with operator befor operand (for example, ++x), the increment operator increments and returens the value after incrementing.

/*** Increment Prefix ***/

var num = 15;
var newNum = ++num;

console.log(num);
console.log(newNum);

/*** Output :- 16 ***/
/*** Output :- 16 ***/

var num = 15;
var newNum = ++num + 5;

console.log(num);
console.log(newNum);

/*** Output :- 16 ***/
/*** Output :- 21 ***/

/*** Decrement Prefix ***/

var num = 15;
var newNum = --num;

console.log(num);
console.log(newNum);

/*** Output :- 14 ***/
/*** Output :- 14 ***/

var num = 15;
var newNum = --num + 5;

console.log(num);
console.log(newNum);

/*** Output :- 14 ***/
/*** Output :- 19 ***/

// ==> Prefix increment operator means the variabel is incrementd first and then the expression is evaluated using the new value of the variable.

// 3.Comparison Operators
// ==> A Comparison Operator compares its operands and returen a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

// Equal (=)
console.log(a == b);
/*** Output :- false ***/

// Not Equal
console.log(a != b);
/*** Output :- true ***/

// Greater Than (>)
console.log(a > b);
/*** Output :- true ***/

// Greater Than or Equal (>=)
console.log(a >= b);
/*** Output :- true ***/

// Less Than
console.log(a < b);
/*** Output :- false ***/

// Less Than or Equal(<=)
console.log(a <= b);
/*** Output :- false ***/

// Section 4
// 4.Logical Operator
// ==> Logical Operators are typically used with Boolean (Logical) values, when they are, return Boolean value.

var a = 30;
var b = -20;

// Logical And (&&)
// ==> The Logical And (&&) operator (logical Conjunction) for a set of operands is true if and only if all of its operands are true.

console.log(a > b);
/*** Output :- true ***/

console.log(a > b && b > -20);
/*** Output :- false ***/

console.log(a > b && b > -20 && b < -50);
/*** Output :- false ***/

console.log(a > b && b > -50 && b < 0);
/*** Output :- true ***/

// Logical OR (||)
// ==> The Logical OR(||) operator (Logical Disjuction) for a set of operands is true if and only if one or more of its operands is true.

console.log(a > b || b > 0 || b < 0);
/*** Output :- true ***/

console.log(a < b || b > 0 || b > 0);
/*** Output :- false ***/

// Logical NOT (!)
// ==> The Logical NOT (!) operator (Logical Complement , Negation) takes truth to falsity and vice versa.

console.log(a > 0 || b > 0);
/*** Output :- true ***/

console.log(!(a > 0) || b > 0);
/*** Output :- false ***/

console.log(!true);
/*** Output :- false ***/

console.log(!false);
/*** Output :- true ***/

/*** Interview Question 4 ***/
// 5. String Concatenation (Operators)
// ==> The Concatenation operator (+) concatenates two String values together, returning another String that is the union of the two operand Strings.

console.log("Celina Maisuriya");
/*** Output :- Celina Maisuriya ***/

console.log("Celina" + "Maisuriya");
/*** Output :- CelinaMaisuriya ***/

console.log("Celina " + "Maisuriya");
/*** Output :- Celina Maisuriya ***/

var myName = "Celina";
console.log(myName + " Maisuriya");
/*** Output :- Celina Maisuriya ***/

console.log(myName + " SanjayKumar");
/*** Output :- Celina SanjayKumar ***/

console.log(myName + " SanjayKumar Maisuriya");
/*** Output :- Celina SanjayKumar Maisuriya ***/

// Challenge 4

// 1. What will be that Output of 3**3?
console.log(3 ** 3); // 3 * 3 * 3
/*** Output :- 27 ***/

console.log(10 ** -1); // 1/10
/*** Output :- 0.1 ***/

// 2. What will be the output, when we add a number and a String?
console.log(24 + " Celina");
/*** Output :- 24 Celina ***/

console.log(24 - "Celina");
/*** Output :- NaN ***/

// 3. Write a Program to swap two numbers?
var a = 5;
var b = 10;

var c = b; //c = 10
b = a; // b = 5
a = c;

console.log("The Value Of a is " + a);
console.log("The Value Of b is " + b);

/*** 
    Output :- 
        The Value Of a is 10
        The Value Of b is 5
***/

// 4. Write a program to swap two numbers without using third variable?
var a = 5;
var b = 10;

a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log("The Value Of a is " + a);
console.log("The Value Of b is " + b);

/*** 
    Output :- 
        The Value Of a is 10
        The Value Of b is 5
***/

/*** Interview Question 5 ***/
// What is Difference between == VS === ?
var num1 = 5;
var num2 = "5";

console.log(typeof num1);
console.log(typeof num2);

console.log(num1 == num2);

/*** 
    Output :- 
        number
        string
        true 
***/

/*** Section 5 Control Statement :- ***/
// 1. If...Else :-
// ==> If Statement executes a statement if a specified condition is truthy.
// ==> If the condition is falsy ,another statement can be executed.

var tomr = "rain";

if (tomr == "rain") {
  console.log("Take a raincoat");
} else {
  console.log("No need to take a raincopat");
}

/*** 
    Output :- Take a raincoat
***/

var tomr = "Sunny";

if (tomr == "rain") {
  console.log("Take a raincoat");
} else {
  console.log("No need to take a raincoat");
}

/*** 
    Output :- No need to take a raincoat
***/

// Challenge 5
// Write a program that works out whether if a given year is a leap year or not?
// Anormal year has 365 days, leap years have 366, with an extra day in february.

var year = 2023;
debugger;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + " is a leap year");
    } else {
      console.log("The year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}

/*** 
    Output :- The year 2023 is not a leap year
***/

var year = 2024;
debugger;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + " is a leap year");
    } else {
      console.log("The year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}

/*** 
    Output :- The year 2024 is a leap year
***/

// What is truthy and falsy values in JavaScript?

// We have total 5 falay values in javascrit :-
//==> 0,"",undefined,null,NaN,False** is false anyway

if ((score = 0)) {
  // 0,"",undefined,null,NaN,False
  console.log("OMG , We Loss The Game :(");
} else {
  console.log("Yay, We Won The Game :)");
}

/*** 
    Output :- Yay, We Won The Game :)
***/

if ((score = 10)) {
  console.log("OMG, We Loss The Game :(");
} else {
  console.log("Yay, We Won The Game :)");
}

/*** 
    Output :- OMG, We Loss The Game :(
***/

/***  Interview Question 6 ***/
// 2. Conditional (ternary) Operator:
// ==> The conditional (ternary) operator is the only JavaScript operator that takes three oprands.

var age = 18;
console.log(age >= 18 ? "You Can Vote" : "You Can't Vote");

/*** 
    Output :- You Can Vote
***/

// 3. Switch Statement
// ==> Evaluates an expression, matching the expression's value to a case clause, and excutes statements associated with that case.

// 1st without break statement
// Find The Area Of Circle, triangle and rectangle?

//Try With if conditions:

var area = "circle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("The area of the circle is : " + PI * r ** 2); //3.142 * 3 * 3
} else if (area == "triangle") {
  console.log("The area of the triangle is : " + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("The area of the rectangle is : " + l * b);
} else {
  console.log("Please Enter Valid Area");
}

/*** 
    Output :- The area of the circle is : 28.278
***/

var area = "triangle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("The area of the circle is : " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("The area of the triangle is : " + (l * b) / 2); //5 * 4 / 2
} else if (area == "rectangle") {
  console.log("The area of the rectangle is : " + l * b);
} else {
  console.log("Please Enter Valid Area");
}

/*** 
    Output :- The area of the triangle is : 10
***/

var area = "rectangle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("The area of the circle is : " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("The area of the triangle is : " + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("The area of the rectangle is : " + l * b); // 5 * 4
} else {
  console.log("Please Enter Valid Area");
}

/*** 
    Output :- The area of the rectangle is : 20
***/

var area = "square";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("The area of the circle is : " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("The area of the triangle is : " + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("The area of the rectangle is : " + l * b);
} else {
  console.log("Please Enter Valid Area");
}

/*** 
    Output :- Please Enter Valid Area
***/

// Try With Switch Statement
/***  Interview Question 7 ***/
// Different Between Break and Continue

// 1. break :
// ==> Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

// 2. continue
// ==> Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

var area = "circle"; //"triangle" , "rectangle"
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

switch (area) {
  case "circle":
    console.log("The area of the circle is : " + PI * r ** 2);
    break;

  case "triangle":
    console.log("The area of the triangle is : " + (l * b) / 2);
    break;

  case "rectangle":
    console.log("The area of the rectangle is : " + l * b);
    break;

  default:
    console.log("Please Enter Valid Area");
}
/*** 
    Output :- The area of the circle is : 28.278
***/

// 4 While Loop Statement
// ==> The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

var num = 0;
// Block Scope
while (num <= 10) {
  console.log(num);
  num++;
}

/*** 
    Output :- 
        0
        1
        2
        3
        4   
        5
        6
        7
        8
        9   
        10  
***/

// 5. Do-While Loop:-
var num = 20;

do {
  console.log(num);
  num++;
} while (num <= 10);

/*** 
    Output :- 20
***/

// 6. For Loop
for (var num = 0; num <= 10; num++) debugger;
{
  console.log(num);
}
/*** 
    Output :- 11
***/

//  Challenge 6
//JavaScript program to print table for given number (8, 9, 12, 15)?
for (var num = 1; num <= 10; num++) {
  var tableOf = 8; // 9, 12, 15
  console.log(tableOf + " * " + num + " = " + tableOf * num);
}

/*** 
    Output :- 
        8 * 1 = 8
        8 * 2 = 16
        8 * 3 = 24
        8 * 4 = 32
        8 * 5 = 40
        8 * 6 = 48
        8 * 7 = 56
        8 * 8 = 64
        8 * 9 = 72
        8 * 10 = 80
***/

/***  Section 6 Functions in JavaScript ***/

// A JavaScript function is a block of code designed to perform a particular task.

//  1. Function Definition

// ==> Before we use a function, we need to define it.
// ==> A function definition (also called a function declaration, or function statement)
// consists of the function keyword, followed by:

// ==> The name of the function.
// ==> A list of parameters to the function, enclosed in parentheses and separated by commas.
// ==> The JavaScript statements that define the function, enclosed in curly brackets, {...}.

// way 1
var a = 10;
var b = 20;
var sum = a + b;
console.log(sum);

/*** 
    Output :- 30
***/

//way 2 using function

function sum() {
  var a = 10,
    b = 40;
  var total = a + b;
  console.log(total);
}

/*** 
    Output :- 50
***/

// 2. Calling functions
// ==> Defining a function does not execute it.
// ==> A JavaScript function is executed when "something" invokes it (calls it).

function sums() {
  var a = 10,
    b = 40;
  var total = a + b;
  console.log(total);
}
sums();

/*** 
    Output :- 50
***/

// 3.  Function Parameter vs Function Arguments
//==> Function parameters are the names listed in the function's definition.
//==> Function arguments are the real values passed to the function.

function Sum(a, b) {
  var total = a + b;
  console.log(total);
}

Sum();
Sum(20, 30);
Sum(50, 50);
Sum(5, 6);

/*** 
    Output :- 
            NaN
            50
            100
            11
***/

/***  Interview Question  ***/

// 8. Why Functions?
// ==> You can reuse code: Define the code once, and use it many times.
// ==> You can use the same code many times with different arguments, to produce different results.

// OR

// ==> A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

// DRY => do not repeat yourself

// 4️. Function expressions
// ==> "Function expressions simply means create a function and put it into the variable "

function Sum(a, b) {
  var total = a + b;
  console.log(total);
}

var funExp = Sum(5, 15);

/*** 
    Output :- 20
***/

// 5. Return Keyword
// ==> When JavaScript reaches a return statement, the function will stop executing.

// ==> Functions often compute a return value. The return value is "returned" back to the "caller"

function Sum(a, b) {
  return (total = a + b);
}

var funExp = Sum(5, 25);

console.log("The Sum Of Two No Is : " + funExp);

/*** 
    Output :- The Sum Of Two No Is : 30
***/

// 6️. Anonymous Function

// ==> A function expression is similar to and has the same syntax as a function declaration One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions.

var funExp = function (a, b) {
  return (total = a + b);
};

var Sum = funExp(15, 15);
console.log("The Sum Of Two No Is : " + Sum);

/*** 
    Output :- The Sum Of Two No Is : 30
***/

var funExp = function (a, b) {
  return (total = a + b);
};

var Sum = funExp(15, 15);
var sum1 = funExp(20, 15);

console.log(Sum > sum1);

/*** 
    Output :- false
***/

//  Now It's Time for Modern JavaScript

//  Features of ECMAScript 2015 also known as ES6

// 1️. LET VS CONST  vs  VAR

var myName = "Celina ";
console.log(myName);

/*** 
    Output :- Celina
***/

myName = "Celina Maisuriya";
console.log(myName);

/*** 
    Output :-Celina Maisuriya
***/

let myName1 = "Celina";
console.log(myName1);

/*** 
    Output :- Celina
***/

myName = "Celina Maisuriya";
console.log(myName);

/*** 
    Output :- Celina Maisuriya
***/

const myName2 = "Celina";
console.log(myName2);

/*** 
    Output :- Celina
***/

myName = "Celina Maisuriya";
console.log(myName);

/*** 
    Output :- Celina Maisuriya
***/

function biodata() {
  let myFirstName = "Jeremi";
  console.log(myFirstName);

  if (true) {
    let myLastName = "Maisuriya";
    console.log("inner " + myLastName);
    console.log("inner " + myFirstName);
  }

  //   console.log("innerOuter " + myLastName); // We can not used let value in outer of Block Scope.
}

biodata();

/*** 
    Output :- 
        Jeremi
        inner Maisuriya
        inner Jeremi
***/

// var => Function scope
// let and const => Block Scope

// 2️. Template literals (Template strings)

// JavaScript program to print table for given number (12)?

for (let num = 1; num <= 10; num++) {
  let tableOf = 12;
  // console.log(tableOf + " * " + num + " = " + tableOf * num); //old way
  console.log(` ${tableOf} * ${num} = ${tableOf * num}`); //new way
}

/*** 
    Output :- 
        12 * 1 = 12
        12 * 2 = 24
        12 * 3 = 36
        12 * 4 = 48
        12 * 5 = 60
        12 * 6 = 72
        12 * 7 = 84
        12 * 8 = 96
        12 * 9 = 108
        12 * 10 = 120
***/

// 3️. Default Parameters
// ==> Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

function mult(a, b = 5) {
  return a * b;
}

console.log(mult(3));

/*** 
    Output :- 15
***/

// 4️. Destructuring in ES6
// ==> The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//  Array Destructuring  :-

const myBioData4 = ['Celina', 'Maisuriya', 22];

// let myFName = myBioData4[0];
// let myLName = myBioData4[1];
// let myAge0 = myBioData4[2];
  
let [myFName1,myAge1, myLName1] = myBioData4;
console.log(myFName1);

/*** 
    Output :- Celina
***/
// we can add values too 
  
let [myFName,myLName,myAge3, myDegree="MCA"] = myBioData4;
console.log(myDegree);

/*** 
    Output :- MCA
***/

//  Object destructuring :-
const myBioData5 = {
  myFname1 : 'Celina',
  myLname1 : 'Maisuriya',
  myAge2 : 22
}

// let age1 = myBioData5.age1;
// let myFname1 = myBioData5.myFname1;

let {myFname1,myLname1,myAge2, myDegree1="MCA"} = myBioData5;
console.log(myAge2);

/*** 
    Output :- 22
***/

// 5️. Object Properties 

// ➡ we can now use Dynamic Properties 

let myName4 = "Celina";
const myBio = {
  [myName4] : "hello how are you?",
  [20 + 2] : "is my age"
}

console.log(myBio);

/*** 
    Output :- 
      { '22': 'is my age', Celina: 'hello how are you?' }
***/

// ➡ no need to write key and value, if both are same 

let myName5 = "Celina Maisuriya";
let myAge4 = 22;

const myBio1 = {myName4,myAge4}

console.log(myBio1);

/*** 
    Output :- 
      { myName4: 'Celina', myAge4: 22 }
***/

// 6. Fat Arror Function
//  Normal Way of writing Function

function anstotal() {
  let a = 5;
  b = 6;
  let ans = a + b;
  return `the sum of the two number is : ${ans}`;
}
console.log(anstotal());

/*** 
    Output :- 
        the sum of the two number is : 11
***/

//  How to convert in into Fat Arrow Function

const ans = () => `the sum of the two number is : ${(a = 6) + (b = 6)}`;

console.log(ans());

/*** 
    Output :- 
        the sum of the two number is : 12
***/

// 7️. Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

const MyFavColors = [ ...colors, 'yellow', 'black'];

console.log(MyFavColors);

/*** 
    Output :- 
        [
            'red',   'green',
            'blue',  'white',
            'pink',  'yellow',
            'black'
        ]
***/

// ES7 features 

// 1: array include 
const colors1 = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = colors1.includes('purple');   // const isPresent = colors1.includes('pink');
console.log(isPresent);

/*** 
    Output :- false // true
***/

// 2: **
console.log(2**3); 

/*** 
    Output :- 8
***/

// ES8 Features 2017

// 1. String padding :-

const message = "my name is Celina";
console.log(message);

/*** 
    Output :- my name is Celina
***/

console.log(message.padStart(5));

/*** 
    Output :- my name is Celina
***/

console.log(message.padEnd(10));

/*** 
    Output :- my name is Celina
***/

// 2. Object.values():-

const person = { name: 'Fred', age: 87 };
console.log( Object.values(person) );

/*** 
    Output :- [ 'Fred', 87 ]
***/

// 3. Object.entries() :-

console.log(Object.entries(person));

/*** 
    Output :- 
        [ [ 'name', 'Fred' ], [ 'age', 87 ] ]
***/

const arrObj =  Object.entries(person);
console.log(Object.fromEntries(arrObj));

/*** 
    Output :- { name: 'Fred', age: 87 }
***/


// ES2018

const person1 = { name: 'Fred', age: 87, degree : "mcs" };
console.log(person1);

/*** 
    Output :- { name: 'Fred', age: 87, degree: 'mcs' }
***/

const sPerson = { ...person };
console.log(sPerson);

/*** 
    Output :- { name: 'Fred', age: 87 }
***/

// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);

/*** 
    Output :- 9007199254740991
***/

console.log( 9007199254740991n + 12n );

/*** 
    Output :- 9007199254741003n
***/

const newNum2 = 9007199254740991n + 12n;

console.log(newNum2);

/*** 
    Output :- 9007199254741003n
***/

console.log(typeof newNum);

/*** 
    Output :- number
***/

const foo = null ?? 'default string';
console.log(foo);

/*** 
    Output :- default string
***/

// ES2014

// "use strict";

x = 3.14; 
console.log(x);

/*** 
    Output :- 3.14
***/

"use strict";

let x1 = 3.14; 
console.log(x1);

/*** 
    Output :- 3.14
***/
/**** Section 7 Arrays in JavaScript  ****/

// ==> When we use var, we can stored only one value at a time.

var friend1 = "Reema";
var friend2 = "Nidhi";
var friend3 = "Pratik";

var myFriends = ["Reema", "Nidhi", "Pratik"];

// ==> When we feel like storing multiple values in one variable then instead of var, we will use an Array.

// ==> In JavaScript, we have an Array class, and arrays are the prototype of this class.

// 1️. Array Subsection 1  Traversal in array
// ==> navigate through an array

// ==> if we want to get the single data at a time  and also if we want to change the data

var myFriends = ["Reema", "Nidhi", "Pratik", "Himanshi"];
console.log(myFriends[myFriends.length - 1]);

/*** 
    Output :- Himanshi
***/

// if we want to check the length of elements of an array

console.log(myFriends.length);

/*** 
    Output :- 4
***/

// we use for loop to navigate

var myFriends = ["Reema", "Nidhi", "Pratik", "Himanshi"];
for (var i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

/*** 
    Output :-
        Reema
        Nidhi
        Pratik
        Himanshi
***/

// After ES6 we have for..in and for..of loop too

var myFriends = ["Reema", "Nidhi", "Pratik", "Himanshi"];

for (let elements in myFriends) {
  console.log(elements);
}

/*** 
    Output :-
        0
        1
        2
        3
***/

for (let elements of myFriends) {
  console.log(elements);
}

/*** 
    Output :-
        Reema
        Nidhi
        Pratik
        Himanshi
***/

// Array.prototype.forEach()
// ==> Calls a function for each element in the array.
// ==> It's combination of for in loop and for of loop.

var myFriends = ["Reema", "Nidhi", "Pratik", "Himanshi"];

myFriends.forEach(function (element, index, array) {
  console.log(element + " index : " + index + " " + array);
});

/*** 
    Output :-
        Reema index : 0 Reema,Nidhi,Pratik,Himanshi
        Nidhi index : 1 Reema,Nidhi,Pratik,Himanshi
        Pratik index : 2 Reema,Nidhi,Pratik,Himanshi
        Himanshi index : 3 Reema,Nidhi,Pratik,Himanshi
***/

// forEach function using Fat Arrow function
// ==> Fat Arrow Function is not support this arrgument.

myFriends.forEach((element, index, array) => {
  console.log(element + " index : " + index + " " + array);
});

/*** 
    Output :-
        Reema index : 0 Reema,Nidhi,Pratik,Himanshi
        Nidhi index : 1 Reema,Nidhi,Pratik,Himanshi
        Pratik index : 2 Reema,Nidhi,Pratik,Himanshi
        Himanshi index : 3 Reema,Nidhi,Pratik,Himanshi
***/

var myFriends = ["Reema", "Nidhi", "Pratik", "Himanshi"];
console.log(myFriends[2]);

/*** 
    Output :- Pratik
***/

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
   for(let i = 0; i < companies.length; i++) {
     console.log(companies[i]);
  }
  
  // forEach :- 
  // ==> The forEach() method calls a function for each element in an array.
  // ==> The forEach() method is not executed for empty elements.

  companies.forEach(function(company) {
    console.log(company.name);
  });
  
  /*** 
   * Output :-
        Company One
        Company Two
        Company Three   
        Company Four
        Company Five
        Company Six
        Company Seven
        Company Eight
        Company Nine
   
  ***/

// 2️. Array Subsection 2  Searching and Filter in an Array

// Array.prototype.indexOf() - It's Searching topic
// ==> Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element from the 0th index number

/***  Interview Question 9 ***/
// 9. different between last index and Indexof array

//IndexOf
// ==> The JavaScript array indexOf() method is used to search the position of a particular element in a given array. This method is case-sensitive.
// ==> The index position of first element in an array is always start with zero. If an element is not present in an array, it returns -1.

var myFriendNames = [
  "Celina",
  "Sanjaykumar",
  "maisuriya",
  "jeremi",
  "Maisuriya",
];

console.log(myFriendNames.indexOf("Maisuriya", 3));

/*** 
    Output :- 4
***/

// Array.prototype.lastIndexOf()
// ==> Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element last to first.

var myFriendNames = [
  "Celina",
  "Sanjaykumar",
  "maisuriya",
  "jeremi",
  "Maisuriya",
];

console.log(myFriendNames.lastIndexOf("Maisuriya", 3));

/*** 
    Output :- -1
***/

// Array.prototype.includes()
// ==> Determines whether the array contains a value, returning true or false as appropriate.

var myFriendNames = [
  "Celina",
  "Sanjaykumar",
  "maisuriya",
  "jeremi",
  "Maisuriya",
];

console.log(myFriendNames.includes("Maisuriya"));

/*** 
    Output :- true
***/

// Array.prototype.find()

// arr.find(callback(element[, index[, array]])[, thisArg])

// ==> Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.
// ==> Only problem is that it return only one element

const prices = [200, 300, 350, 400, 450, 500, 600];

prices < 400;
const findElem = prices.find((currVal) => currVal < 400);

console.log(findElem);

/*** 
    Output :- 200
***/

console.log(prices.find((currVal) => currVal > 1400));

/*** 
    Output :- undefined
***/

// Array.prototype.findIndex()

// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.

console.log(prices.findIndex((currVal) => currVal > 1400));

/*** 
    Output :- -1
***/

// Array.prototype.filter() 

// ==> Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
// ==> The filter() method creates a new array filled with elements that pass a test provided by a function.
// ==> The filter() method does not execute the function for empty elements.
// ==> The filter() method does not change the original array.

const prices1 = [200, 300, 350, 400, 450, 500, 600];

prices1 < 400;
const newPriceTag = prices1.filter((elem, index) => {
  return elem > 1400;
});
console.log(newPriceTag);

/*** 
    Output :- []
***/

/** 
    const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

**/
// Get 21 and older

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);
/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
        length: 9
    **/

const canDrink1 = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
});

console.log(canDrink1);

/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
    length: 9
**/
const canDrink2 = ages.filter(age => age >= 21);

console.log(canDrink2);

/** 
    Output :-
        (9) [33, 54, 21, 44, 61, 45, 25, 64, 32]
        0 : 33
        1 : 54 
        2 : 21
        3 : 44 
        4 : 61
        5 : 45
        6 : 25
        7 : 64
        8 : 32
    length: 9
**/

// Filter retail companies

const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});
console.log(retailCompanies);

/** 
    Output :
        0 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 3
**/

const retailCompanies1 = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies1);

/** 
    Output :
        0 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 3
**/

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

/**
    Output :-
        0 : {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
        1 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        2 : {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
        3 : {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}   
        4 : {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
    length : 5
**/

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

/** 
    Output :-
        0 : {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
        1 : {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
        2 : {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
        3 : {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
        4 : {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}
    length : 5
**/
// 3️. Array Subsection 3 How to sort an Array

// Array.prototype.sort()

// ==> The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ["March", "Jan", "Feb", "April", "Dec", "Nov"];
console.log(months.sort());

/*** 
    Output :-
        [ 'April', 'Dec', 'Feb', 'Jan', 'March', 'Nov' ]
***/

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());

/*** 
    Output :-
        [ 1, 100000, 21, 30, 4, 99 ]
***/

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect result when sorting numbers.

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Sort companies by start year

const sortedCompanies  = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies1);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//  challenge 7

// 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

// compareFunction	Optional.
// ==>A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments,
// like: function(a, b){return a-b}

// for asecnding order
array1.sort(function (a, b) {
  console.log(a, b);
  if (a > b) {
    return 1;
    // b comes first and then a
  }
  if (a < b) {
    // a comes first and then b
    return -1;
  }
  if (a == b) {
    // No changes
    return 0;
  }
});

/*** 
    Output :-
        100000 1
        21 100000
        21 100000
        21 1
        30 21
        30 100000
        4 30
        4 21
        4 1
        99 21
        99 100000
        99 30
***/

// for desecnding order
array1.sort(function (a, b) {
  console.log(a, b);
  if (a > b) {
    return -1;
    // b comes first and then a
  }
  if (a < b) {
    // a comes first and then b
    return 1;
  }
  if (a == b) {
    // No changes
    return 0;
  }
});
/*** 
    Output :-
        100000 1
        21 100000
        21 1
        21 100000
        30 21
        30 100000
        4 21
        4 1
        99 21
        99 30
        99 100000
***/

console.log(array1);

// 2: sort the array in descending order

var fruits = ["Banana", "Orange", "Apple", "Mango"];

let aFruits = fruits.sort();

// Array.prototype.reverse()
// ==> The reverse() method reverses an array in place.
// ==> The first array element becomes the last, and the last array element becomes the first

// 4. Array Subsection 4 Perform CRUD

// Array.prototype.push()
// ==> The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ["pigs", "goats", "sheep"];
const count = animals.push("chicken");
console.log(count);

/*** 
    Output :- 4 
***/

animals.push("chicken", "cats", "cow");
console.log(animals);

/*** 
    Output :-
        [
            'pigs',    'goats',
            'sheep',   'chicken',
            'chicken', 'cats',
            'cow'
        ]
***/

// Array.prototype.unshift()
// ==> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const animals1 = ["pigs", "goats", "sheep"];
const count1 = animals1.unshift("chicken");
console.log(count1);

/*** 
    Output :- 4 
***/

console.log(animals1);

/*** 
    Output :- 
        [ 'chicken', 'pigs', 'goats', 'sheep' ]
***/

animals1.unshift("chicken", "cats", "cow");
console.log(animals1);

/*** 
    Output :- 
        [
            'chicken', 'cats',
            'cow',     'chicken',
            'pigs',    'goats',
            'sheep'
        ]
***/

// Example 2

const myNumber = [1, 2, 3, 5];
myNumber.unshift(4, 6);
console.log(myNumber);

/*** 
    Output :- [ 4, 6, 1, 2, 3, 5 ]
***/

Array.prototype.pop();
// ==> The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plant = ["Broccoli", "Cauliflower", "Kale", "Tomato", "Cabbage"];
console.log(plant);

/*** 
    Output :- 
        ['Broccoli', 'Cauliflower',  'Kale', 'Tomato', 'Cabbage']
***/

console.log(plant.pop());

/*** 
    Output :- Cabbage
***/

console.log(plant);

/*** 
    Output :- 
        ['Broccoli', 'Cauliflower',  'Kale', 'Tomato']
***/

// Array.prototype.shift()
// ==> The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const plants = ["Broccoli", "Cauliflower", "Kale", "Tomato", "Cabbage"];
console.log(plants);

/*** 
    Output :- 
        ['Broccoli', 'Cauliflower',  'Kale', 'Tomato', 'Cabbage']
***/

console.log(plants.shift());

/*** 
    Output :- 
        Broccoli
***/

console.log(plants);

/*** 
    Output :- 
        ['Cauliflower',  'Kale', 'Tomato', 'Cabbage']
***/

// Challenge 8

// Array.prototype.splice()
// ==> Adds and/or removes elements from an array.

const months1 = ["Jan", "march", "April", "June", "July"];

// 1. Add Dec at the end of an array?
const newMonth = months1.splice(months1.length, 0, "Dec");
console.log(months1);

/*** 
    Output :- 
        [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]
***/

// 2. What is the return value of splice method?
console.log(newMonth);

/*** 
    Output :- []
    // Our output is [], Because we can not splice(remove) any value.
***/

// 3. update march to March (update)?
const indexOfMonth = months1.indexOf("march");

if (indexOfMonth != -1) {
  const updateMonth = months1.splice(indexOfMonth, 1, "March");
  console.log(months1);
} else {
  console.log("No such data found");
}

/***
    Output :-
        [ 'Jan', 'March', 'April', 'June', 'July', 'Dec' ] 
***/

// 4. Delete June from an array?
const indexOfMonth1 = months1.indexOf("June"); // Search that Month of you try to Delete

if (indexOfMonth != -1) {
  const updateMonth = months1.splice(indexOfMonth1, 1);
  console.log(months1);
  console.log(updateMonth);
} else {
  console.log("No such data found");
}

/***
    Output :-
        [ 'Jan', 'March', 'April', 'July', 'Dec' ]  // Output of console.log(months1)
        [ 'June' ] // Output of console.log(updateMonth)
***/

// 5️. Array Subsection 4 Map and Reduce Method

// Array.prototype.map()
// Syntax:

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// ==> Returns a new array containing the results of calling a function on every element in this array.

const array2 = [1, 4, 9, 16, 25];
num > 9;
let newArr = array2.map((curElem, index, arr) => {
  return curElem > 9;
});
console.log(array2);

/***
    Output :-
        [ 1, 4, 9, 16, 25 ]
    ***/

console.log(newArr);

/***
    Output :-
        [ false, false, false, true, true ]
***/

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
});
console.log(companyNames);

/** 
    Output :-
        0 : "Company One"
        1 : "Company Two"
        2 : "Company Three"
        3 : "Company Four"
        4 : "Company Five"
        5 : "Company Six"
        6 : "Company Seven"
        7 : "Company Eight"
        8 : "Company Nine"
    length : 9
**/

const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});

console.log(testMap);

/** 
    Output :
        0 : "Company One [1981 - 2004]"
        1 : "Company Two [1992 - 2008]"
        2 : "Company Three [1999 - 2007]"
        3 : "Company Four [1989 - 2010]"
        4 : "Company Five [2009 - 2014]"
        5 : "Company Six [1987 - 2010]"
        6 : "Company Seven [1986 - 1996]"
        7 : "Company Eight [2011 - 2016]"
        8 : "Company Nine [1981 - 1989]"
    length : 9 
**/

const testMap1 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap1);

/** 
    Output :
        0 : "Company One [1981 - 2004]"
        1 : "Company Two [1992 - 2008]"
        2 : "Company Three [1999 - 2007]"
        3 : "Company Four [1989 - 2010]"
        4 : "Company Five [2009 - 2014]"
        5 : "Company Six [1987 - 2010]"
        6 : "Company Seven [1986 - 1996]"
        7 : "Company Eight [2011 - 2016]"
        8 : "Company Nine [1981 - 1989]"
    length : 9 
**/

const ageSqure = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(ageSqure);

const ageSqure1 = ages.map(age => Math.sqrt(age));
console.log(ageSqure1);

const ageTimeTwo = ages.map(age => age * 2);
console.log(ageTimeTwo);
/** 
    Output :-
        0 : 66
        1 : 24
        2 : 40
        3 : 32
        4 : 10
        5 : 108
        6 : 42
        7 : 88
        8 : 122
        9 : 26
        10 : 30
        11 : 90
        12 : 50
        13 : 128
        14 : 64
    length : 15
**/

const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

  console.log(ageMap);
/**
    Output :- 
        0 : 11.489125293076057
        1 : 6.928203230275509
        2 : 8.94427190999916
        3 : 8
        4 : 4.47213595499958
        5 : 14.696938456699069
        6 : 9.16515138991168
        7 : 13.2664991614216
        8 : 15.620499351813308
        9 : 7.211102550927978
        10 : 7.745966692414834
        11 : 13.416407864998739
        12 : 10
        13 : 16
        14 : 11.313708498984761
    length : 15
**/

/*** Interview Question 10 ***/
// 10. Different between map() and forEach()

// map()
// ==> The map() method returns a new array.
// ==> The map() method is used to transform the elements of an array.

let newArr1 = array2.map((curElem, index, arr) => {
  return `Index no = ${index} and the value is ${curElem} belong to ${arr} `;
});
console.log(newArr1);

/***
    Output :-
        [
            'Index no = 0 and the value is 1 belong to 1,4,9,16,25 ',
            'Index no = 1 and the value is 4 belong to 1,4,9,16,25 ',
            'Index no = 2 and the value is 9 belong to 1,4,9,16,25 ',
            'Index no = 3 and the value is 16 belong to 1,4,9,16,25 ',
            'Index no = 4 and the value is 25 belong to 1,4,9,16,25 '
        ]
***/

// forEach()
// ==> The forEach() method does not return a new array.
// ==> The forEach() method is used to loop through the elements of an array.

let newArrfor = array1.forEach((curElm, index, arr) => {
  return `Index no = ${index} and the value is ${curElm} belong to ${arr} `;
});
console.log(newArrfor);

/***
    Output :- undefined
***/

// It return new array without mutating the orignal array.

// Challenge 9

// 1. Find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((curElem) => Math.sqrt(curElem));
console.log(arrSqr);

/***
    Output :- 
        [ 5, 6, 7, 8, 9 ]
***/

// 2. Multiply each element by 2 and return only those elements which are greater than 10?
let arr1 = [2, 3, 4, 6, 8];

let arr2 = arr1.map((curElm) => curElm * 2).filter((curElem) => curElem > 10);
console.log(arr2);
/***
    Output :- 
        [ 12, 16 ]
***/

let arr3 = arr1
  .map((curElm) => curElm * 2)
  .filter((curElem) => curElem > 10)
  .reduce((accumulator, curElem) => {
    return (accumulator += curElem);
  });
console.log(arr3);

/***
    Output :- 28
***/

// we can use the chaining too.

// Reduce Method

// ==> flatten an array means to convert the 3d or 2d array into a single dimensional array.
// ==> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// The reducer function takes four arguments:
// ==> Accumulator
// ==> Current Value
// ==> Current Index
// ==> Source Array

let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

const ageSum1 = ages.reduce(function(total, age) {
  return total + age;
}, 0);

console.log(ageSum1);

const ageSum2 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum2);

// Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

const totalYears1 = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears1);


// total 4 subject
// subject 1 mark = 7 // store in singel data
// subject 2,3,4 marks = [5,6,2] // store in multiple data in 1 array

let A = [5, 6, 2];

let Ans = A.reduce((accumulator, curElem) => {
  debugger;
  return (accumulator *= curElem);
});
console.log(Ans);

/***
    Output :- 60
***/

let B = [5, 6, 2];

let Ans1 = B.reduce((accumulator, curElem) => {
  debugger;
  return (accumulator += curElem);
}, 7);
console.log(Ans1);

/***
    Output :- 20
***/

// How to fatten an array
// ==> converting 2d and 3d array into one dimensional array

const arrs = [
  ["zone_1", "zone_2"],
  ["zone_3", "zone_4"],
  ["zone_5", "zone_6"],
  ["zone_7", "zone_8"],
];

let flatArr = arrs.reduce((accum, currVal) => {
  return accum.concat(currVal);
}, []);

console.log(flatArr); // OR console.log(arrs.flat(Infinity)); Both are same output

/***
    Output :-
        [
            'zone_1', 'zone_2',
            'zone_3', 'zone_4',
            'zone_5', 'zone_6',
            'zone_7', 'zone_8'
        ]
***/

const arrs1 = [
  ["zone_1", "zone_2"],
  ["zone_3", ["zone_1", "zone_2", ["zone_1", "zone_2"]]],
];
console.log(arrs1.flat(3));

/***
    Output :-
        [
            'zone_1', 'zone_2',
            'zone_3', 'zone_1',
            'zone_2', 'zone_1',
            'zone_2'
        ]
***/

// console.log(arrs1);

/***
    Output :-
        [
            [ 'zone_1', 'zone_2' ],
            [ 'zone_3', [ 'zone_1', 'zone_2', [Array] ] ]
        ]
***/

console.log(arrs1.flat(Infinity)); 
/***
    Output :-
        [
            'zone_1', 'zone_2',
            'zone_3', 'zone_1',
            'zone_2', 'zone_1',
            'zone_2'
        ]
***/



/*** Section 7 Strings in JavaScript ***/
// ==> A JavaScript string is zero or more characters written inside quotes.

// ==> JavaScript strings are used for storing and manipulating text.
// ==> You can use single or double quotes

// ==> Strings can be created as primitives, from string literals, or as objects, using the String() constructor

let Name = "Celina";
let myChannelName = "Celina Maisuriya";

// let ytName = new String("Celina"); // It's work with constructor
// console.log((ytName));

/*** 
    Output :- 
       [String: 'Celina']
***/

let fbName = "Celi";
console.log("My Name is : " + Name);
console.log("My Facebook Name is : " + fbName);

/*** 
    Output :- 
        Celina 
        Celi
***/

//  How to find the length of a string

// String.prototype.length
// ==> Reflects the length of the string.

let myname = "Celina Maisuriya";
console.log(myname.length);

/*** 
    Output :- 16
***/

// Escape Character

// let anySentence = "We are the so-called "Vikings" from the north."; // We can not write this beacuse it's throw error.
// console.log(anySentence);

/*** 
    Output :- 
       let anySentence = "We are the so-called "Vikings" from the north.";
                                                ^^^^^^^
        SyntaxError: Unexpected identifier
***/

let anySentence0 = 'We are the so-called "Vikings" from the north.';
console.log(anySentence0);

/*** 
    Output :- 
        We are the so-called "Vikings" from the north.
***/

// if you dont want to mess, simply use the alternate quotes

let anySentence1 = 'We are the so-called "Vikings" from the north.';
console.log(anySentence1);

/*** 
    Output :- 
        We are the so-called "Vikings" from the north.
***/

let anySentence2 = "We are the so-called 'Vikings' from the north.";
console.log(anySentence2);

/*** 
    Output :- 
        We are the so-called 'Vikings' from the north.
***/

// Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex])

// ==> The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

const myBioData = "I am the Celina Maisuriya";
console.log(myBioData.indexOf("celina"));

/*** 
    Output :- -1 // Our output is -1, Beacuse indexof method is Case-Sensitive.
***/

const myBioData0 = "I am the Celina Maisuriya";
console.log(myBioData0.indexOf("i", 15));

/*** 
    Output :- 18
***/

// ==> JavaScript counts positions from zero.
// ==> 0 is the first position in a string, 1 is the second, 2 is the third ...

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// ==> Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

const myBioData1 = "I am the Celina Maisuriya";
console.log(myBioData1.lastIndexOf("u"));

/*** 
    Output :- 20
***/

console.log(myBioData1.lastIndexOf("u", 6));

/*** 
    Output :- -1
***/

// Searching for a String in a String

// String.prototype.search(regexp)

// ==> The search() method searches a string for a specified value and returns the position of the match

const myBioData2 = "I am the Celina Maisuriya";
let sData = myBioData2.search("Maisuriya");
console.log(sData);

/*** 
    Output :- 16
***/

// ==> The search() method cannot take a second start position argument.

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// ==> slice(start, end)
// ==> substring(start, end)
// ==> substr(start, length)

// The slice() Method
// ==> slice() extracts a part of a string and returns the extracted part in a new string.
// ==> The method takes 2 parameters: the start position, and the end position (end not included).

var str = "Apple, Bananaa, Kiwi, mango";

let res = str.slice(0, 4);
console.log(res);
/*** 
    Output :- 
        Appl
***/

let res1 = str.slice(7);
console.log(res1);

/*** 
    Output :- 
        Bananaa, Kiwi, mango
***/

let res2 = str.slice(7, -2);
console.log(res2);

/*** 
    Output :- 
       Bananaa, Kiwi, man
***/

// ==> The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.

// Challenge 10

// Display only 280 characters of a string like the one used in Twitter?

let myTweets =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);

/*** 
    Output :- 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent
***/

console.log(myActualTweet.length);

/*** 
    Output :- 280
***/

// The substring() Method
// ==> substring() is similar to slice().
// ==> The difference is that substring() cannot accept negative indexes.

var str1 = "Apple, Banana, Kiwi";
let res3 = str1.substring(0, 4);
console.log(res3);

/*** 
    Output :- Appl
***/

let res4 = str1.substring(8, -2); // -2 means :- total number of string value and remove last 2 value of a string.
console.log(res4);

/*** 
    Output :- Apple, B
***/

// ==> If we give negative value then the characters are counted from the 0th possition.

// The substr() Method
// ==> substr() is similar to slice().
// ==> The difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Bananaa, Kiwi";
let res5 = str.substr(0, 10);
console.log(res5);

/*** 
    Output :- Apple, Ban
***/

let res6 = str.substr(-4);
console.log(res6);

/*** 
    Output :- Kiwi
***/

// Replacing String Content()
// String.prototype.replace(searchFor, replaceWith)
// ==> The replace() method replaces a specified value with another value in a string.

let myBioData3 = `I am celina sanjaykumar maisuriya celina`;

let repalceData = myBioData3.replace("celina", "Celina");
console.log(myBioData3);

/*** 
    Output :- I am celina sanjaykumar maisuriya celina
***/

console.log(repalceData);

/*** 
    Output :- I am Celina sanjaykumar maisuriya celina
***/

// Points to remember
// 1: The replace() method does not change the string it is called on. It returns a new string.
// 2: By default, the replace() method replaces only the first match.
// 3: By default, the replace() method is case sensitive. Writing CELINA (with upper-case) will not work

// Extracting String Characters

// There are 3 methods for extracting string characters:
// ==> charAt(position)
// ==> charCodeAt(position)
// ==> Property access [ ]

// The charAt() Method
// ==> The charAt() method returns the character at a specified index (position) in a string

let str2 = "HELLO WORLD";

console.log(str2.charAt(9));

/*** 
    Output :- L
***/

// The charCodeAt() Method

// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// ==> The method returns a UTF-16 code (an integer between 0 and 65535).
// ==> The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language.
// ==> UTF-8 is a popular Unicode encoding which has 88-bit code units.

var str3 = "HELLO WORLD";

console.log(str3.charCodeAt(0));

/*** 
    Output :- 72
***/

// Challenge 11

// Return the Unicode of the last character in a string

let str4 = "HELLO WORLD";
let lastChar = str4.length - 1;
console.log(str4.charCodeAt(lastChar));

/*** 
    Output :- 68
***/

// Property Access
// ==> ECMAScript 5 (2009) allows property access [ ] on strings

var str = "HELLO WORLD";
console.log(str[1]);

/*** 
    Output :- E
***/

// Other useful methods

let myName3 = "celina maiSuriya";
console.log(myName3.toUpperCase());

/*** 
    Output :- CELINA MAISURIYA
***/

console.log(myName3.toLowerCase());

/*** 
    Output :- celina maisuriya
***/

// The concat() Method
// ==> concat() joins two or more strings

let fName = "celina";
let lName = "maisuriya";

console.log(fName + lName);

/*** 
    Output :- celinamaisuriya
***/

console.log(`${fName} ${lName}`);

/*** 
    Output :- celina maisuriya
***/

console.log(fName.concat(lName));

/*** 
    Output :- celinamaisuriya
***/

console.log(fName.concat(" ", lName));

/*** 
    Output :- celina maisuriya
***/

// String.trim()
// ==> The trim() method removes whitespace from both sides of a string

var string = "              Hello  World!             ";
console.log(string.trim());

/*** 
    Output :- Hello  World!

***/

var str6 = "              Hello         World!             ";
console.log(str6.trim());

/*** 
    Output :- Hello         World!

***/

// ==> Converting a String to an Array.
// ==> A string can be converted to an array with the split() method.

var txt = "a,b,c | d,e"; // String
var txt1 = "a, b,c  d,e"; // String 1

console.log(txt.split(",")); //  Split on commas
console.log(txt1.split(","));

/*** 
    Output :- 
        [ 'a', 'b', 'c | d', 'e' ]      // String 
         [ 'a', ' b', 'c  d', 'e' ]     // String 1
***/

console.log(txt.split("  ")); //  Split on spaces

/*** 
    Output :- 
        [ 'a,b,c | d,e' ]
***/

console.log(txt.split("|")); //  Split on pipe

/*** 
    Output :- 
        [ 'a,b,c ', ' d,e' ]
***/

/**** Section 8 Date and Time in JavaScript ****/

// ==> JavaScript Date objects represent a single moment in time in a platform-independent format.
// ==> Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects
// There are 4 ways to create a new date object:

// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds) //it takes 7 arguments
// 3. new Date(milliseconds)  //we cannot avoid month section
// 4. new Date(date string)

// ==> Date objects are created with the new Date() constructor.

let currDate = new Date();
console.log(currDate);

/*** 
    Output :- 
        2023-09-06T05:24:00.936Z
***/

console.log(new Date());

/*** 
    Output :- 
        2023-09-06T05:19:04.676Z
***/

console.log(new Date().toLocaleString());

/*** 
    Output :- 
        6/9/2023, 10:52:50 am
***/

console.log(new Date().toString());

/*** 
    Output :- 
        Wed Sep 06 2023 10:54:52 GMT+0530 (India Standard Time)
***/

// Date.now()
// ==> Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now());

/*** 
    Output :- 
        1693977941599
***/

// new Date(year, month, ...)
// ==> 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)

// Note:
// ==> JavaScript counts months from 0 to 11.
// ==> January is 0. December is 11.

var d = new Date(2023, 0);
console.log(d.toLocaleString());

/*** 
    Output :- 
        1/1/2023, 12:00:00 am
***/

var d = new Date(2001, 1, 24, 6, 30, 33, 0);
console.log(d.toLocaleString());

/*** 
    Output :- 
        24/2/2001, 6:30:33 am
***/

// new Date(dateString)
// ==> new Date(dateString) creates a new date object from a date string

var d = new Date("October 13, 1995, 11:58:00");
console.log(d.toLocaleString());

/*** 
    Output :- 
        13/10/1995, 11:58:00 am
***/

// new Date(milliseconds)
// ==> new Date(milliseconds) creates a new date object as zero time plus milliseconds:

var d1 = new Date(0);
console.log(d1.toLocaleString());

/*** 
    Output :- 
        1/1/1970, 5:30:00 am
***/

var d2 = new Date(1693982050345);
console.log(d2.toLocaleString());

/*** 
    Output :- 
        6/9/2023, 12:04:10 pm
***/

var d3 = new Date(86400000 * 2);
console.log(d3.toLocaleString());

/*** 
    Output :- 
        3/1/1970, 5:30:00 am
***/

// Dates Method

const curDate = new Date(); // how to get the indivisual date
console.log(curDate.toLocaleString());

/*** 
    Output :- 
        6/9/2023, 12:07:12 pm
***/

console.log(curDate.getFullYear());

/*** 
    Output :- 
        2023
***/

console.log(curDate.getMonth()); // 0-11 jan to dec

/*** 
    Output :- 
        8
***/

console.log(curDate.getDate());

/*** 
    Output :- 
        6
***/

console.log(curDate.getDay()); // sun - sat

/*** 
    Output :- 
        3
***/

// how to set the indivisual date

console.log(curDate.setFullYear(2023));

/*** 
    Output :- 
        1693982140177
***/

// The setFullYear() method can optionally set month and day

console.log(curDate.setFullYear(2023, 9, 6));

/*** 
    Output :- 
        1696574140177
***/

let setmonth = curDate.setMonth(2); // 0-11 jan to dec
console.log(setmonth);

/*** 
    Output :- 
       1678084540177
***/

console.log(curDate.setDate(5));

/*** 
    Output :- 
       1677998140177
***/

console.log(curDate.toLocaleString());

/*** 
    Output :- 
       5/3/2023, 12:07:12 pm
***/

// Time Methods

const curTime = new Date(); // how to get the indivisual Time
console.log(curTime.getTime());

/*** 
    Output :- 
        1693982920397
***/

// The getTime() method returns the number of milliseconds since January 1, 1970

console.log(curTime.getHours());

/*** 
    Output :- 12
***/

// The getHours() method returns the hours of a date as a number (0-23)

console.log(curTime.getMinutes());

/*** 
    Output :- 21
***/

console.log(curTime.getSeconds());

/*** 
    Output :- 5
***/

console.log(curTime.getMilliseconds());

/*** 
    Output :- 593
***/

// // how to set the indivisual Time

let curTime1 = new Date();
// console.log(curTime1.setTime());

/*** 
    Output :- NaN
***/

console.log(curTime1.setHours(5));

/*** 
    Output :- 
        1693958031076
***/

console.log(curTime1.setMinutes(5));

/*** 
    Output :- 1693956951076
***/

console.log(curTime1.setSeconds(5));

/*** 
    Output :- 1693956905076
***/

console.log(curTime1.setMilliseconds(5));

/*** 
    Output :- 1693956905005
***/

// This Practice Work and Challenge work in index.html

// Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();

// Practice Work :

// new Date().toLocaleTimeString(); // 9/6/2023 AM

// new Date().toLocaleDateString(); // 9/6/2023

// new Date().toLocaleString(); // 9/6/2023, 12:58:33 PM

/**** Section 9 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// (Math.PI);
console.log(Math.PI);

/*** 
    Output :- 3.141592653589793
***/

// Math.round()
// ==> returns the value of x rounded to its nearest integer

let num3 = 10.501;
console.log(Math.round(num3));

/*** 
    Output :- 11
***/

// Math.pow()
// ==> Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(2, 3));
console.log(2 ** 3);

/*** 
    Output :- 
        8
        8
***/

// Math.sqrt()
// ==> Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));

/*** 
    Output :- 5
***/

console.log(Math.sqrt(81));

/*** 
    Output :- 9
***/

console.log(Math.sqrt(66));

/*** 
    Output :- 8.12403840463596
***/

// Math.abs()
// ==> Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));

/*** 
    Output :- 55
***/

console.log(Math.abs(-55.5));

/*** 
    Output :- 55.5
***/

console.log(Math.abs(-955));

/*** 
    Output :- 955
***/

console.log(Math.abs(4 - 6));

/*** 
    Output :- 2
***/

// Math.ceil()
// ==> Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.51));

/*** 
    Output :- 5
***/

console.log(Math.round(4.51));

/*** 
    Output :- 5
***/

console.log(Math.ceil(99.01));

/*** 
    Output :- 100
***/

console.log(Math.round(99.1));

/*** 
    Output :- 99
***/

// Math.floor()
// ==> Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.7));
/*** 
    Output :- 4
***/

console.log(Math.floor(99.1));

/*** 
    Output :- 99
***/

/*** Interview Question 11 ***/
// 11. Difference between ceil round and floor
// ==> ceil :- ceil rounds up to the nearest Integer which can be equal to or above the actual value.

// ==> floor :- floor rounds up to the nearest Integer which can be equal to or below the actual value.

// ==> round :- rounds up to the nearest Integer which can be above, below or equal to the actual value.

// Math.min()
// ==> Math.min() can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200));

/*** 
    Output :- -200
***/

// Math.max()
// ==> Math.max() can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200));

/*** 
    Output :- 150
***/

// Math.random()
// ==> Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(Math.floor(Math.random() * 10));

/*** 
    Output :- 9
***/

console.log(Math.floor(Math.random() * 10)); // 0 to 9

/*** 
    Output :- 5
***/

// Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.

console.log(Math.round(4.6));

/*** 
    Output :- 5
***/

console.log(Math.round(99.1));

/*** 
    Output :- 99
***/

// Math.trunc()
// ==>The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));

/*** 
    Output :- 4
***/

console.log(Math.trunc(-99.1));

/*** 
    Output :- -99
***/

// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to Math.floor(), otherwise Math.trunc() is equivalent to Math.ceil().

/**** Section 10 Document Object model in JavaScript  ****/

// 1.  Window vs Document

// Window :-
// ==> 1️. Window is the main container or we can say the global Object and any operations related to entire browser window can be a part of window object.
// ==> 2. All the members like objects, methods or properties. If they are the part of window object then we do not refer the window object. Since window is the global object so you do not have to write down window. - it will be figured out by the runtime.
// ==> For example :-
//          window.screen or just screen is a small information object about physical screen dimensions.
//          window.location giving the current URL
//          window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM.
// ==> 3. Window has methods, properties and object. ex setTimeout() or setInterval() are the methods where as Document is the object of the Window and It also has a screen object with properties describing the physical display.

// Document :-
// ==> 1️. whereas the DOM is the child of Window Object.
// ==> 2. Where in the DOM we need to refer the document, if we want to use the document object, methods or properties
// ==> For example :-
//          document.getElementById()
// ==> 3. document is just the object of the global object that is window, which deals with the document, the Htmml elements themselves.

// 2. DOM vs BOM

// DOM :-
// ==> The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you would do in it, events, etc.
// ==> For Exameple :-
//          change the background color to red
//          document.body.style.background = "red";

// BOM :-
// ==> The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser). OR
// ==> In simple meaning all the Window operations which comes under BOM are performed usign BOM.

// Let's see more practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// ==> they are directly not related to the document, but represent pure browser methods of communicating with the user.
// ==> For Exameple :-
//          alert(location.href); // shows current URL
//          if (confirm("Want to Visit ThapaTechnical?"))
//          {
//              location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
//          }

// 3️. Navigate through the DOM :-

// ==> 1: document.documentElement returns the Element that is the root element of the document.
// ==> 2: document.head
// ==> 3: document.body
// ==> 4: document.body.childNodes (include tab,enter and whiteSpace) list of the direct children only
// ==> 5: document.children (without text nodes, only regular Elements)
// ==> 6: document.childNodes.length

// try with Dom Navigate.html 

// Practice Time :-
// How to check whether an element has child nodes or not?
// ==> we will use document.body.hasChildNodes()

// Practice Time :-
// 1. How to find the child in DOM tree
// ==> document.body.firstElementChild;

// 1. firstChild vs firstElementChild
// ==> const data = document.body.firstElementChild;

// ==> document.body.firstElementChild.firstElementChild

// ==> const firstchild = document.body.firstElementChild.firstElementChild

// ==> firstchild 

// ==> document.body.firstElementChild.firstElementChild.style.color = "red" OR firstchild.style.color = "black"

// vs
// ==> const childTwo = document.querySelector(".child_two");

// ==> childTwo 

// ==> childTwo.style.color = "yellow"

// OR

// ==> const childTwo = document.querySelector(".child_two").style.color = "yellow";

// lastChild vs lastElementChild

// 2. How to find the Parent Nodes
// ==> document.body.parentNode

// ==> document.body.parentElement

// 3. How to find or access the siblings
// ==> document.body.nextSibling

// ==> document.body.nextElementSibling

// ==> document.body.previousSibling

// ==> document.body.previousElementSibling

// ==> document.head.nextSibling

// ==> document.head.nextElementSibling

// 4️. How to search the Elements and the References We will see the new file

/*** Interview Question 12 ***/

// 12 Difference Between getElementById And querySelector?
// ==> getElementById() only works with ID attributes, while querySelector() can work with any CSS selector.
// ==> Additionally, getElementById() is faster than querySelector() because it only needs to search for one element, whereas 
// ==> querySelector() may need to search for multiple elements before returning the first match.


/**** Section 11 EVENTS in JavaScript ****/

// ==> HTML events are "things" that happen to HTML elements.
// ==> When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// HTML Events
//==> An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// ==> An HTML web page has finished loading
// ==> An HTML input field was changed
// ==> An HTML button was clicked
// ==> Often, when events happen, you may want to do something.

// ==> JavaScript lets you execute code when events are detected.
// ==> HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// SubSection 1️:- 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

// SubSection 2️ :- What is Event Object?
// ==> Event object is the parent object of the event object. 

// for Example :-
//      MouseEvent, focusEvent, KeyboardEvent etc 


// SubSection ️3️:- MouseEvent in JavaScript
// ==> The MouseEvent Object Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.


// SubSection ️4️ :- KeyboardEvent  in JavaScript
// ==> Events that occur when user presses a key on the keyboard, belongs to the KeyboardEvent Object.
// ==> https://www.w3schools.com/jsref/obj_keyboardevent.asp


// SubSection 5️:- InputEvents in JavaScript 
// ==> The onchange event occurs when the value of an element has been changed.
// ==> For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.


/*** Interview Question 13 ***/

// 13. Differnt Between onClick And addEventListener?
// 1. onclick:
// ==> onclick can add only a single event to an element. It is basically a property, so gets overwritten.
// ==> Event propagation cannot be controlled by onclick.
// ==> onclick can be added as an HTML attribute also.
// ==> onclick works in all browsers.

// 2. addEventListener :-
// ==> addEventListener can add multiple events to a particular element.
// ==> addEventListener can take a third argument that can control the event propagation.
// ==> addEventListener can only be added within <script> elements or in external JavaScript file.
// ==> addEventListener does not work in older versions of Internet explorer, which uses attachEvent instead.


/**** Section 12 Timing Based Events in JavaScript ****/

// ==> The window object allows execution of code at specified time intervals.

// ==> These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// 1. setTimeout(function, milliseconds)
// ==> Executes a function, after waiting a specified number of milliseconds.

// 2. setInterval(function, milliseconds)
// ==> Same as setTimeout(), but repeats the execution of the function continuously.


// 1. setTimeout():
// ==> The setTimeout() method in JavaScript is used to execute a function after waiting for the specified time interval. 
// ==> This method returns a numeric value that represents the ID value of the timer. 

// 2. clearTimeout() :
// ==> The global clearTimeout() method cancels a timeout previously established by calling setTimeout() . 
// ==> If the parameter provided does not identify a previously established action, this method does nothing.

// 3. setInterval() :
// ==> The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval. 
// ==> It evaluates an expression or calls a function at given intervals. 
// ==> This method continues the calling of function until the window is closed or the clearInterval() method is called.

// 4. clearInterval() :
// ==> The clearInterval function in javascript is used to stop the event of the recurring calling of a function at a fixed delay set by the setInterval() function. 
// ==> This function can be used only when a setInterval() function is previously used.


/*** Interview Question 14 ***/
// 14. Difference Between setTimeout and setInterval()?

/**** Section 13 OOPS in JavaScript ****/

// 1️. What is Object Literal?
// ==> Object literal is simply a key:value pair data structure. 
// ==> Storing variables and functions together in one container, we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  let bioData = { 
      myName : "Maisuriya Celina",
      myAge : 22,
      getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
      }
  }

  bioData.getData();

/*** 
    Output :- 
        My name is Maisuriya Celina and my age is 22
***/

// 2nd way no need to write functions as well after es6

let bioData1 = { 
  myName : "Maisuriya Celina",
  myAge : 22,
  getData (){
    console.log(`My name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
  }
}

bioData1.getData();

/*** 
    Output :- 
        My name is Maisuriya Celina and my age is 22
***/

// 👉 What if we want object as a value inside an Object 


let bioData2 = { 
  myName : {
    realName : "Maisuriya Celina",
    channelName : "Celina Technical" 
  },
  myAge : 22,
  getData (){
    console.log(`My name is ${bioData2.myName} and my age is ${bioData2.myAge}`);
  }
}

console.log(bioData2.myName.channelName );

/*** 
    Output :- 
        Celina Technical
***/

// 2️. What is this Object?
// ==> The definition  of "this" object is that it contain the current context. 
// ==> The this object can have different values depending on where it is placed.  

// For Example 1 
// console.log(this.alert('Awesome')); // try in browser
// it refers to the current context and that is window global object 


// Example 2 
// function myName() {
//     console.log(this);
// }
// myName();

// Example 3 

// var myNames = 'Celina';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// Example 4 
// const obj = {
//     myAge : 22,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

/*** Interview Question 15 ***/
// this object will not work with arrow function bcz arrow function is bound to class.

// Example 1
// const obj1 = {
//     myAge : 22,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();

// Example 2

// let bioData3 = {
//     myName : {
//         realName : "Celina Maisuriya",
//         channelName : 'celina technical'
//     },

//     things to remember is that the myName is the key and the object is act like a value

//     myAge : 22,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData3.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 



/**** Section 14 Advanced JavaScript ****/

// 1️.: Event Propagation (Event Bubbling and Event Capturing)

// check Event Propagation.html file 


// 2️. Higher Order Function
// ==> function which takes another function as an arguments is called HOF 
// ==> wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️. Callback Function
// function which get passed as an argument to another function is called CBF A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 

// Jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum CallBack fun bolte hai 


// we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// I have to do the hardcoded for each operation which is bad we will use the callback and the HOF to make it simple to use 
// Now instead of calling each function indivisually we can call it by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// In the above example, calculator is the higher-order function, which accepts three arguments, the third one being the callback.
// Here the calculator is called the Higher Order Function because it takes another function as an argument and add, sub and mult are called the callback function bcz they are passed as an argument to another fucntion 

/***  InterView Question 16  ***/
// 16. Difference Between Higher Order Function and Callback Function ?
// 1. Callback Functions :-
// ==> In JavaScript, a callback function is a function that is passed into another function as an argument. 
// ==> This function can then be invoked during the execution of that higher order function (that it is an argument of).
// ==> Since, in JavaScript, functions are objects, functions can be passed as arguments.

// 2. Higher-Order Functions :-
// ==> In Javascript, functions can be assigned to variables in the same way that strings or arrays can. 
// ==> They can be passed into other functions as parameters or returned from them as well.
// ==> A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

/**** Section 15 Asynchronous JavaScript ****/ 


// // 6️. Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


/*** Interview Question 17 ***/ 

//**********************************************************************************************************************************************************************************************

// What is Event Loop in JavaScript? 
// ==> What is Event loop in JavaScript?
// ==> Let's look into JavaScript Event loop from a different angle. Sounds interesting, right? It is! So, sit tight and let's dive into it!
// ==>The concept of event loop is very simple. But in order to understand that, first we need to be clear about some concepts related to event loop.

// ==> Inside Browser, there is a Javascript engine (we are considering V8 for chrome.) and an environment to run javascript properly. 
// ==> Javascript engine has two parts, Heap and Call Stack. And the engine has some assistant named Web APIs and Callback Queue.

// 1. Heaps
// ==> It's an unstructured memory block. 
// ==> Our code's memory allocation happens here. 
// ==> As a programmer we don't have to worry much about heaps.

// 2. Call Stack
// ==> We can consider Call Stack as a kitchen where all our code executed or cooked. 
// ==> Whenever we try to run a piece of code, it goes to call stack first and then executed. 
// ==> It works in LIFO style. That is Last In First Out.

// Example :- 
// const lunch = () => console.log("It's time for lunch!");

// const dinner = () => console.log("It's time for dinner!");

// const breakfast = () => {
//   console.log("Time to breakfast!");
//   setTimeout(lunch, 3000);
//   dinner();
// };

// Example Explanation :- 
// 1. breakfast() :-
// ==> If we run the code above, The global execution context main() runs on the browser, and JS engine will start to read the code from the first line and will search for tasks. 
// ==> On the last line, one function is called. So, this function will go to the Call Stack and will execute the tasks. 
// ==> First it will print Time to breakfast! , then goes to the next line, where we have an asynchronous block of code.
// ==> As we know, JavaScript is synchronous and single-threaded language, this asynchronous block of code goes to the call stack and suddenly pops out. 
// ==> Here JS engine takes help from it's assistant, Web API. 
// ==> The setTimeout() waits on the Web API and after it's timer runs out (In this case, 3 seconds), After 3 seconds the callback function goes to the Callback Queue and waits for Call stack to be free. 
// ==> By this time, Call stack runs the other piece of codes. Prints

//It's time for dinner!

// 2. Web APIs :-
// ==> Web API works as JS engines assistant. When JS engine have to deal with asynchronous code, it takes the help of Web API. 
// ==> Web API handles the blocking behavior of JavaScript code.
// ==> In this case, from our code above, we can say Web API will take the callback function

 //setTimeout(lunch, 3000);

// run it's timer, and pass it to Callback Queue after 3 seconds.

// 3. Callback Queue
// ==> It's a guard who monitors the stack of asynchronous callback functions who just completed the task of waiting and passed the gate of Web API. 
// ==> Callback Queue works using FIFO (First In First Out ) method. 
// ==> And now, they waits here to go back to Call Stack. 
// ==> But how will Call Stack know that there's some callback functions waiting in Callback Queue?
// ==> Here comes the star, Event Loop!

// 4. Event Loop
// ==> Event loop is just a guardian who keeps a good communication with Call Stack and Callback Queue. 
// ==> It checks if the call stack is free, then lets know the callback queue. 
// ==> Then Callback queue passes the callback function to Call stack to be executed. 
// ==> When all the callback functions are executed, the call stack is out and global execution context is free.
//**********************************************************************************************************************************************************************************************

// 5️. Hoisting in JavaScript 

// we have a creation phase and execution phase.

// ==> Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.

// For Example 
// console.log(myName);
// let myName;
// myName = "Maisuriya";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "Maisuriya";

// ==> In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword  instead of var. 
// ==> (The other difference is that variables declared with let are local to the surrounding block, not the entire function.)

// 6️. What is Scope Chain and Lexical Scoping in JavaScript? 
// ==> The scope chain is used to resolve the value of variable names in JS.
// ==> scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code. 

// ==> At the top, we have the Global Scope, which is the window Object in the browser.

// ==> Lexical Scoping means Now, the inner function can get access to their parent functions variables But the vice-versa is not true.


// // For Example 

let a1 = "Hello guys. "; // global scope

const first= () => {
  let b = " How are you?"
 
    const second = () => {
      let c = " Hii, I am fine thank you";
      console.log(a+b+c);
    }
    second();
    console.log(a+b+c); //I can't use C 
}

first();

/*** 
    Output :-
        6 How are you? Hii, I am fine thank you
        6 How are you?10
***/


// 7️. What is Closures in JavaScript 

// ==> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// ==> In other words, a closure gives you access to an outer function’s scope from an inner function. 
// ==> In JavaScript, closures are created every time a function is created, at function creation time.

// For Example 

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a+b;
      console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5);

/*** 
    Output :-
        the sum of the two no is 15
***/

// ==> it same like lexical scoping 

// One more Example 

const outerFun1 = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a+b;
    console.log(`the sum of the two no is ${sum}`);
  }
  return innerFun;
}
let checkClousure = outerFun1(5);
console.dir(checkClousure); // OR checkClousure();

/*** 
    Output :-
       [Function: innerFun] // OR the sum of the two no is 15
***/

"use strict"
let x2 = "Celina";
console.log(x2);

/*** 
    Output :- Celina
***/

// Back To Advanced JavaScript 

// Currying

const sum0 = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 
sum0(5)(3)(8);

/*** 
    Output :- 16
***/

// 8️. CallBack Hell 

setTimeout(()=>{
    console.log(`1️ works is done`);    
    setTimeout(()=>{
        console.log(`2️ works is done`); 
        setTimeout(()=>{
            console.log(`3️ works is done`);  
            setTimeout(()=>{
                console.log(`4️ works is done`); 
                setTimeout(()=>{
                    console.log(`5️ works is done`);   
                    setTimeout(()=>{
                        console.log(`6️ works is done`);    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)

/*** 
    Output :-
        1️ works is done
        2️ works is done
        3️ works is done
        4️ works is done
        5️ works is done
        6️ works is done
***/

// JSON 

//  JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string, 

// Example :-

var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
console.log(object_as_string);

/*** 
    Output :- 
        {"key_1":"some text","key_2":true,"key_3":5}
***/

console.log(typeof(object_as_string));  
/*** 
    Output :- String
***/

// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, 

// Example :-

var object_as_string_as_object = JSON.parse(object_as_string);   
console.log(object_as_string_as_object);

/*** 
    Output :- 
        {"key_1":"some text","key_2":true,"key_3":5}
***/

console.log(typeof(object_as_string_as_object));  

/*** 
    Output :- object
***/


// 7️. AJAX Call using XMLHttprequest 

// 1. how to handled with the events and callback?
// ==> XMLHttpRequest (XHR) objects are used to interact with servers. 
// ==> You can retrieve data from a URL without having to do a full page refresh. 
// ==> This enables a Web page to update just part of a page without disrupting what the user is doing. 
// ==> XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();

// we need to call the api or request the api using GET method ki, me jo url pass kar kr rha hu uska data chaiye 

// request.open('GET', "https://covid-api.mmediagroup.fr/v1");

// request.send(); // we need to send the request and its async so we need to add the event to load the data adn get it

// to get the response 

// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });