/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window-binding: default action for this 
* 2. Implict-binding: automatic binding most common
* 3. Explict-binding: forcing calling a fucntion changing this
* 4. New-Binding: for oop way of creating obj template
*
* write out a code example of each explanation above
*/

// // Principle 1
// // 'use strict';
//      function ghost(){
//       console.log(this.boo);
//     }
//      ghost();
//     const boo = '👻';

// // Principle 2
//     let myDog = {
//         name: 'Doggy',
//         pronoun: 'it',
//         sound: 'woof',
//         bark: function(){
//             console.log(this.sound)
//         }
//     }
//     myDog.bark();
// // code example for Implicit Binding

// // Principle 3

// function Person(properties){
//     this.newFirstName = properties.firstName,
//     this.newLastName = properties.lastName,
//     this.newGender = properties.gender,
//     this.newEmail = properties.email
// }
// const Joe = new Person({
//     firstName: 'Joe',
//     lastName: 'Oliver',
//     gender: 'M',
//     email: 'yomamma@gmail.com'
// })

// Principle 4
function greet() {
	console.log(this.name);
}

var person = {
	name:'JOJO'
}

greet.call(person);
// code example for Explicit Binding