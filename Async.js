// 1 Callbacks :-
// ==> "I will call back later!"
// ==> A callback is a function passed as an argument to another function.
// ==> This technique allows a function to call another function.
// ==> A callback function can run after another function has finishe. 

// JavaScript functions are executed in the sequence they are called. -->

function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

// Output : Goodbye 

//  JavaScript functions are executed in the sequence they are called. 

function myDisplayer1(some) {
    console.log(some);
}

function myFirst1() {
    myDisplayer1("Hello");
}

function mySecond1() {
    myDisplayer1("Goodbye");
}

mySecond1();
myFirst1();

// Output : Hello 

// Sequence Control :-
// Sometimes you would like to have better control over when to execute a function.


function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

// Output :  10

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5, 5);

// Output :  10

function myDisplayer(something) {
    console.log(something);
}

function C(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

C(5, 5, myDisplayer);

// Output :  10

// Callback Functions :-

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers);

// Remove negative numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Output :  [ 4, 1, 5, 9 ]

// 2. Asynchronous :-
// ==> Functions running in parallel with other functions are called asynchronous.

function myDisplayer(something) {
    console.log(something);
}
  
function C1(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
C1(5, 5, myDisplayer);

// Output : 10

function myDisplayer(some) {
   console.log(some);
}
  
function C2(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
  
C2(5, 5);

// Output : 10

// setTimeout() with a Callback :-

setTimeout(myFunction, 3000);

function myFunction() {
  console.log( "Celina !!");
}

// Wait 3 seconds (3000 milliseconds) for this page to change.

// Output : Celina !!

// setInterval() with a Callback :-

setTimeout(function() { 
    myFunction("Celina !!!"); 
}, 3000);

function myFunction(value) {
  console.log(value);
}

// Output : Celina !!!

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); 
// }

// Output : 16:14:54 
// Using setInterval() to display the time every second (1000 milliseconds).

// 3. Promises :-
// ==> "Producing code" is code that can take some time "Consuming code" is code that must wait for the result.
// ==> A Promise is an Object that links Producing code and Consuming code. 

// The then() Metod :-

function myDisplayer(some) {
    console.log(some);
}
  
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0; // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } 
    
    else {
      myReject("Error");
    }
});
  
myPromise.then(
    function(value) {
        myDisplayer(value);
    },

    function(error) {
        myDisplayer(error);
    }
);

/*
    Output : OK
*/

const myPromise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("Celina Maisuriya"); 
    }, 3000);
});
  
myPromise1.then(function(value) {
    console.log(value);
});

/* 
    Output : Celina Maisuriya
*/

// function myDisplayer(some) {
//     console.log(some);
// }
  
// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } 
        
//         else {
//             myCallback("Error: " + req.status);
//         }
//     }
//     req.open('GET', "car.html");
//     req.send();
// }
  
// getFile(myDisplayer); 