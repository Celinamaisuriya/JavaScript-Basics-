// The length Property :-
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);

/* 
    Output :- 4 
*/

// The toString() Method :-
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1);

/*
    Output :- [ 'Banana', 'Orange', 'Apple', 'Mango' ]
*/

// The at() Method :-
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits2.at(2);
console.log(fruit2);

/*
    Output :- Apple
*/

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3[3];
console.log(fruit3);

/*
    Output :- Mango
*/

/* 
==> The at() method returns an indexed element from an array.
==> The at() method returns the same as [].
*/

// The join() Method :-
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.join(" * "));

/*
    Output :- Banana * Orange * Apple * Mango
*/

// pop() Method :-
// The pop() method removes the last element from an array.

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5);
fruits5.pop();
console.log(fruits5);

/*
    Output :- 
        [ 'Banana', 'Orange', 'Apple', 'Mango' ]
        [ 'Banana', 'Orange', 'Apple' ]
*/

// The pop() method returns the value that was "popped out" :-

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.pop()); 
console.log(fruits6);

/*
    Output :- 
        Mango
        [ 'Banana', 'Orange', 'Apple' ]
*/

// The push() Method :-

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7); 
fruits7.push("Kiwi");
console.log(fruits7); 

/*
    Output :- 
        [ 'Banana', 'Orange', 'Apple', 'Mango' ]
        [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
*/

// The push() method returns the new array length :-

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.push("Kiwi")); 
console.log(fruits8); 

/*
    Output :- 
        5
        [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
*/

// The shift() Method :-

const fruits9= ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9); 
fruits9.shift();
console.log(fruits9);

/*
    Output :- 
        [ 'Banana', 'Orange', 'Apple', 'Mango' ]
        [ 'Orange', 'Apple', 'Mango' ]
*/

// The shift() method returns the element that was shifted out.

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits10.shift()); 
console.log(fruits10); 

/*
    Output :- 
        Banana
        [ 'Orange', 'Apple', 'Mango' ]
*/

// The unshift() Method :-
// The unshift() method adds new elements to the beginning of an array.

const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11);
fruits11.unshift("Lemon");
console.log(fruits11); 

/*
    Output :- 
        [ 'Banana', 'Orange', 'Apple', 'Mango' ]
        [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
*/

// The unshift() method returns the length of the new array

const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits12.unshift("Lemon"));
console.log(fruits12);

/*
    Output :- 
        5
        [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
*/

