//     What is this?
// ==> In JavaScript, the this keyword refers to an object.
// ==> Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:
// ==> In an object method, this refers to the object.
// ==> Alone, this refers to the global object.
// ==> In a function, this refers to the global object.
// ==> In a function, in strict mode, this is undefined.
// ==> In an event, this refers to the element that received the event.
// ==> Methods like call(), apply(), and bind() can refer this to any object.

//     this in a Method :-
// ==> When used in an object method, this refers to the object.
// ==> In the example on top of this page, this refers to the person object.
// ==> Because the fullName method is a method of the person object.

// Create an object:
const person = {
  firstName: 'Celina',
  lastName: 'Maisuriya',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Display data from the object:
console.log(person.fullName())

const person1 = {
  firstName: 'Celi',
  lastName: 'Maisuriya',
  id: 2421,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Display data from the object:
console.log(person1.fullName())

//     this Alone
// ==> When used alone, this refers to the global object.
// ==> Because this is running in the global scope.
// ==> In a browser window the global object is [object Window]:

let x = this;
console.log(x);