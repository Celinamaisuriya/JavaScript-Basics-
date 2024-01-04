// let lecture = 10;
// let section = 3;
// let title = 'javascript';

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'javascript',
//     notes: {
//         introduction: "Welcome to javascript"
//     },
//     enroll() {
//         console.log('You are sucessfully enrolled');
//     }
// }
// course.enroll()
// console.log(course)

// course.price = 999;

//Array and function they both are object //

let a = 1;
let b = "celina";
let c = true;
let d;
let e = "";

console.log(typeof (a)); // number
console.log(typeof (b)); // string
console.log(typeof (c)); // boolean
console.log(typeof (d)); // undefined
console.log(typeof (e)); // string


//  Q - What is primitive and non-primitive in JS?
//  ==> Primitive data types are number, string, boolean, NULL, Infinity and symbol. 
//  ==> Non-primitive data types is the object. 

const youtube = {
    name: "Celina",
    subs: "100"
}

youtube.prof = "Webdevloper";

console.log(youtube);
/*
    Output :
        name : "Celina" 
        prof : "Webdevloper"
        subs : "100"
*/

console.log(youtube.prof);
/* 
    Output : Webdevloper
*/

console.log(typeof ({}));
/* 
    Output : Object
*/

console.log(typeof ([]));
/* 
    Output : Object
*/

console.log(typeof (function () { }));
/* 
    Output : function
*/
const check = () => {
    console.log("Checking");
}

check.letshavefun = "allright I an Object too";
console.log(check.letshavefun);
/*
     Output : allright I am Object too
 */

let lecture = 10;
let section = 3;
let title = 'javascript';

const course = {
    lecture: 10,
    section: 3,
    title: 'javascript',
    notes: {
        introduction: "Welcome to javascript"
    },
    enroll() {
        console.log('You are sucessfully enrolled');
    }
}
course.enroll()

/*
     Output : You are sucessfully enrolled
 */

console.log(course)
/* 
    Output :
        enroll :  enroll()
        lecture : 10
        notes : {introduction: 'Welcome to javascript'}
        section : 3
        title : "javascript"
*/

course.price = 999;
/*
    Output :
        enroll :  enroll()
        lecture : 10
        notes : {introduction: 'Welcome to javascript'}
        price : 999
        section : 3
        title : "javascript"
*/

//factory function //


function createcource() {
    const courses = {
        lecture: 10,
        section: 3,
        title: 'javascript',
        notes: {
            introduction: "Welcome to javascript"
        },
        enroll() {
            console.log('You are sucessfully enrolled');
        }
    }
    return courses;
}
const courses = createcource('javascript');
courses.enroll()

//constructor function

function Course() {
    this.title = title,
        this.enroll = function () {
            console.log('you are sucessfully enrolled');
        }
}
const Course = new course1('javascript');
Course.enroll()

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30

console.log(myNumbers);

// Create an Object
myNumbers1 = {};

// Make it Iterable
myNumbers1[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done };
        }
    };
}

let text = ""
for (const num of myNumbers1) {
    text += num + "<\n>"
}

console.log(text);


// Object Set :- 
// ==> A JavaScript Set is a collection of unique values.
// ==> Each value can only occur once in a Set.
// ==> A Set can hold any value of any data type. 


// Create a new Set
const letters = new Set(["a", "b", "c"]);

// Add a new Element
letters.add("d");
letters.add("e");

// Display set.size
console.log(letters.size);

// Create a Set
const letters1 = new Set();

// Add values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");
letters1.add("c");

// Display set
console.log(letters1);


//object set Foreach  //

// Create a Set
const l = new Set(["a", "b", "c"]);

// List all Elements
let text1 = "";
l.forEach(function (value) {
    text1 += value + "<\n>";
})

console.log(text1);


//Iterating Set values //


// Create a Set
const Iterating_set = new Set(["a", "b", "c"]);

// List all Elements
let t = "";
for (const x of Iterating_set.values()) {
    text += x + "<\n>";
}

console.log(t);

// Set.keys() returns a Set Iterator //

// Create a Set
const k = new Set(["a", "b", "c"]);

// Display set.size
console.log(k.keys());


//entries() Returns an Iterator with [value,value] pairs from a Set //


// Create a Set
const es = new Set(["a", "b", "c"]);

// List all entries
const iterator = es.entries();
let ts = "";
for (const entry of iterator) {
    ts += entry + "<\n>";
}

console.log(ts);

// The typeof operator returns object //

// Create a new Set
const to = new Set(["a", "b", "c"]);

// Display typeof
console.log(typeof (to));


//The instanceof operator returns true //


// Create a new Set
const i = new Set(["a", "b", "c"]);

// Display typeof
console.log(i instanceof Set);;


//Object Map
// ==> A Map holds key-value pairs where the keys can be any datatype.
// ==> A Map remembers the original insertion order of the keys.
// ==> A Map has a property that represents the size of the map. 


//Creating a Map from an Array //


// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"));


//Using Map.set() //


// Create a Map
const ms = new Map();

// Set Map Values
ms.set("apples", 500);
ms.set("bananas", 300);
ms.set("oranges", 200);

console.log(ms.get("apples"));


//Using Map.get() //


// Create a Map
const mg = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(mg.get("apples"));


// Using Map.size //

const Ms = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(Ms.size);


//Deleting Map elements //

// Create a Map
const dm = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Delete an Element
dm.delete("apples");

console.log(dm.size);


//Clearing a Map //


// Create a Map
const cm = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Clear the Map
cm.clear();

console.log(cm.size);


// Using Map.has() 


// Create a Map
const mh = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(mh.has("apples"));



// Create a Map
const mh1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Delete an Element
mh1.delete("apples");

console.log(mh1.has("apples"));


// Map typeof 


// Create a Map
const mt = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(typeof mt);


// Map instanceof 


// Create a Map
const mi = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(mi instanceof Map);


//  Using Map.forEach() 

// Create a Map
const mfe = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let mfet = "";
mfe.forEach(function (value, key) {
    mfet += key + ' = ' + value + "<\n>"
})

console.log(mfet);


// Using Map.entries() 

// Create a Map
const me = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let et = "";
for (const x of me.entries()) {
    et += x + "<\n>";
}

console.log(et);


// Using Map.keys() 

// Create a Map
const mk = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let kt = "";
for (const x of mk.keys()) {
    kt += x + "<\n>";
}

console.log(kt);


//  Using Map.values() 

// Create a Map
const mv = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let vt = "";
for (const x of mv.values()) {
    vt += x + "<\n>";
}

console.log(vt);


// Create a Map
const mv1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let total = 0;
for (const x of mv1.values()) {
    total += x;
}
console.log(total);

// Being able to use objects as keys is an important Map feature 

// Create Objects
const apples1 = { name: 'Apples' };
const bananas1 = { name: 'Bananas' };
const oranges1 = { name: 'Oranges' };

// Create a Map
const mf = new Map();

// Add the Objects to the Map
mf.set(apples1, 500);
mf.set(bananas1, 300);
mf.set(oranges1, 200);

console.log(mf.get(apples1));


//  undefined Map Object 


// Create Objects
const apples2 = { name: 'Apples' };
const bananas2 = { name: 'Bananas' };
const oranges2 = { name: 'Oranges' };

// Create a Map
const uf = new Map();

// Add Elements to the Map
uf.set(apples2, 500);
uf.set(bananas2, 300);
uf.set(oranges2, 200);

console.log(uf.get("apples2"));





