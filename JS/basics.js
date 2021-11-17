// Ctrl+Alt+N

// Variables
var x = 10; // global level access
var y = 10;
console.log(x + y);

let a = 10; // block level access
let b = 20;
let c = a + b;
console.log(c);

/*
for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); //5
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
console.log(i) // error
*/

// const
const num = 100;
console.log(num);
// num = 200; // error


// Object - {} 
const person = {
    name: "Ram",
    age: 24,
    address: {
        dNo: "123",
        street: "TNagar",
        city: "Chennai"
    },
    contactNos: [9999911111, 9999922222]
}

// Read
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.contactNos);
console.log(person.address.city);
console.log(person.contactNos[1]);

// Modify name of person
person.name = "Sam";
person.address.dNo = 234;
// Add new number
person.contactNos.push(9999933333);
person.contactNos.push(9999944444);
console.log(person);
// remove number from array
person.contactNos.pop();
console.log(person);


// Array - []
const colors = ["white", "red", "green"];
// colors = []; // Can't reassign const variables

colors.push("brown");
colors.push("orange");
console.log(colors);

colors[0] = "yellow";
console.log(colors);

// Data types in JS
// typeof method returns type of variable
console.log(typeof (x)); // number
console.log(typeof (10.01)); // number
console.log(typeof ("Hello"))// string
console.log(typeof (person)); // object
console.log(typeof (colors)); // object
console.log(typeof (null));// object
console.log(typeof (true));// boolean


// function
function add(x, y) {
    return (x + y);
}

function add(x, y, z) {
    return (x + y + z);
}

// call funtion
console.log(add(10, 20));

console.log(typeof (add));// function

// Rest parameter(...) - collects infinite values
function add(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40));
console.log(add(10, 20, 30, 40, 50));

function sub(x, y, ...nums) {
    let result = x - y;  // 10
    for (let i = 0; i < nums.length; i++) {
        result -= nums[i];
    }
    return result;
}

console.log(sub(20)); // NaN
console.log(sub(30, 20)); //10
console.log(sub(30, 20, 10));  //0
console.log(sub(30, 20, 10, 5)); // -5


// Arrow function - ECMA Script -6
// function add(x, y) {
//     return x + y;
// }
const addition = (x, y) => x + y;
console.log(addition(20, 30));

// ex:2 
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//          return false;
//     }
// }

let e1 = num => {
    return num % 2 == 0 ? true : false;
}

console.log(e1(10)); // true


// Spread Operator(...) - ES6 - copy one array elements into another array
const shapes = ["circle", "triangle", "rectangle"];
//const newShapes = [...shapes];
// inserting new shapes while copying another array elements
// const newShapes = ["cube", ...shapes];
// const newShapes = [...shapes, "cube"];
const newShapes = ["sphere", ...shapes, "cube"];
console.log(shapes);
console.log(newShapes);


// Destructuring
// Object Destructuring & Array Destructuring
const { name, age, address, contactNos } = person
const { dNo, street, city } = person.address;
console.log(name);
console.log(age);
console.log(address);
console.log(dNo);
console.log(street);
console.log(city);
console.log(contactNos);
console.log(contactNos[0]);

const [num1, num2, num3] = person.contactNos;
console.log(num1);
console.log(num2);
console.log(num3);


// class, import & export, map&filter
