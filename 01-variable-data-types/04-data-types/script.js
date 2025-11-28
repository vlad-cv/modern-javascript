
// ============================================
// JAVASCRIPT DATA TYPES
// ============================================

// JavaScript has two categories of data types:
// 1. Primitive Types (immutable, stored by value)
// 2. Reference Types (mutable, stored by reference)

// ============================================
// PRIMITIVE DATA TYPES (7 types)
// ============================================

// 1. STRING
// - Sequence of characters for text
// - Must be enclosed in quotes (single/double) or backticks
// - Immutable (cannot be changed, only replaced)

let fullName = "John Doe";
let greeting = 'Hello';
let template = `Welcome, ${fullName}!`; // Template literal with interpolation

console.log(fullName, typeof fullName);     // "John Doe" "string"
console.log(template);                      // "Welcome, John Doe!"

// ============================================
// 2. NUMBER
// - Represents both integers and floating-point numbers
// - Range: -(2^53 - 1) to (2^53 - 1)
// - Special values: Infinity, -Infinity, NaN (Not a Number)

let age = 30;                    // Integer
let height = 5.9;                // Float
let negative = -15;              // Negative number
let result = 10 / 0;             // Infinity
let invalid = "text" * 5;        // NaN

console.log(age, typeof age);           // 30 "number"
console.log(height, typeof height);     // 5.9 "number"
console.log(result);                    // Infinity
console.log(invalid);                   // NaN
console.log(typeof NaN);                // "number" (NaN is technically a number type!)

// ============================================
// 3. BOOLEAN
// - Logical entity with only two values: true or false
// - Used for conditional logic and comparisons

let isStudent = false;
let isActive = true;
let hasAccess = 10 > 5;          // true (result of comparison)

console.log(isStudent, typeof isStudent);   // false "boolean"
console.log(hasAccess);                     // true

// ============================================
// 4. NULL
// - Represents the intentional absence of any value
// - Often used to explicitly set "no value"
// - typeof null returns "object" (this is a known JavaScript bug!)

let emptyValue = null;
let selectedItem = null;         // Nothing selected yet

console.log(emptyValue, typeof emptyValue);  // null "object" ⚠️ (quirk!)

// ============================================
// 5. UNDEFINED
// - A variable that has been declared but not assigned a value
// - Default value for uninitialized variables
// - Functions without return statements return undefined

let notAssigned;
let anotherVar;

console.log(notAssigned, typeof notAssigned);  // undefined "undefined"

function noReturn() {
    // No return statement
}
console.log(noReturn());         // undefined

const myObject = () => {}; // Arrow function returning object
console.log(myObject, typeof(myObject));        // [Function: myObject] "function"

// ============================================
// 6. SYMBOL
// - A unique and immutable primitive value
// - Primarily used as unique identifiers for object properties
// - Even if two symbols have the same description, they are different

let uniqueId1 = Symbol("id");
let uniqueId2 = Symbol("id");

console.log(uniqueId1, typeof uniqueId1);    // Symbol(id) "symbol"
console.log(uniqueId1 === uniqueId2);        // false (each symbol is unique!)

// Use case: Creating unique property keys
const ID = Symbol("id");
const user = {
    name: "Alice",
    [ID]: 12345  // Symbol as property key
};
console.log(user[ID]);           // 12345

// ============================================
// 7. BIGINT
// - Represents integers with arbitrary precision
// - Used for numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
// - Created by appending 'n' to the end of an integer or using BigInt()

let bigNumber1 = 9007199254740991n;          // Using 'n' suffix
let bigNumber2 = BigInt(9007199254740991);   // Using BigInt()
let hugeNumber = 12345678901234567890n;

console.log(bigNumber1, typeof bigNumber1);  // 9007199254740991n "bigint"
console.log(hugeNumber);                     // 12345678901234567890n

// ⚠️ Cannot mix BigInt with regular numbers in operations
// console.log(bigNumber1 + 100);  // TypeError!
console.log(bigNumber1 + 100n);    // ✅ Works (both are BigInt)

// ============================================
// REFERENCE TYPES (Objects)
// ============================================

// Reference types store a reference (memory address) to the value
// Multiple variables can reference the same object in memory

// 1. OBJECT
// - Collection of key-value pairs (properties)
// - Most fundamental reference type

let person = {
    fullName: "Jane Doe",
    age: 25,
    isStudent: true,
    address: {
        city: "New York",
        zip: "10001"
    }
};

console.log(person, typeof person);          // {...} "object"
console.log(person.fullName);                // "Jane Doe"

// Demonstrating reference behavior
let person1 = { name: "Alice" };
let person2 = person1;           // person2 references the same object

person2.name = "Bob";
console.log(person1.name);       // "Bob" (both variables point to same object!)

// ============================================
// 2. ARRAY
// - Ordered collection of values (elements)
// - Technically a special type of object
// - Can hold mixed data types

let colors = ["red", "green", "blue"];
let mixedArray = [1, "text", true, null, { key: "value" }];
let numbers = [10, 20, 30, 40];

console.log(colors, typeof colors);          // [...] "object" (arrays are objects!)
console.log(Array.isArray(colors));          // true (proper way to check for arrays)
console.log(colors[0]);                      // "red" (access by index)
console.log(colors.length);                  // 3

// ============================================
// 3. FUNCTION
// - Block of reusable code designed to perform a task
// - Functions are "first-class objects" in JavaScript

function greet() {
    console.log("Hello, World!");
}

const sayHi = function() {           // Function expression
    console.log("Hi there!");
};

const sayHello = () => {             // Arrow function
    console.log("Hello!");
};

console.log(greet, typeof greet);            // [Function: greet] "function"
console.log(typeof sayHi);                   // "function"

// Functions can be assigned to variables, passed as arguments, etc.
function executeFunction(fn) {
    fn();
}
executeFunction(greet);              // "Hello, World!"

// ============================================
// CHECKING DATA TYPES
// ============================================

// Using typeof operator
console.log(typeof "hello");         // "string"
console.log(typeof 42);              // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof Symbol());        // "symbol"
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" ⚠️
console.log(typeof null);            // "object" ⚠️ (historical bug)
console.log(typeof function(){});    // "function"

// Better ways to check specific types
console.log(Array.isArray([]));              // true
console.log([] instanceof Array);            // true
console.log(null === null);                  // true (use strict equality)

// ============================================
// DYNAMIC TYPING VS STATIC TYPING
// ============================================

// JavaScript is DYNAMICALLY TYPED
// - Variable types are determined at runtime
// - Variables can hold any type and can change types
// - No explicit type declarations needed

let dynamicVar = "I'm a string";
console.log(typeof dynamicVar);      // "string"

dynamicVar = 42;                     // Now it's a number!
console.log(typeof dynamicVar);      // "number"

dynamicVar = true;                   // Now it's a boolean!
console.log(typeof dynamicVar);      // "boolean"

// This flexibility is powerful but can lead to bugs:
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));             // 15 (numbers)
console.log(add("5", "10"));         // "510" (strings - concatenation!)
console.log(add(5, "10"));           // "510" (type coercion!)

// STATICALLY TYPED LANGUAGES (Java, C++, TypeScript)
// - Variable types are defined at compile time
// - Types cannot change after declaration
// - Catches type errors before code runs

// Example in TypeScript (JavaScript's statically-typed superset):
/*
let userName: string = "Alice";
userName = 42;  // ❌ Error: Type 'number' is not assignable to type 'string'

function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(5, "10");  // ❌ Error: Argument of type 'string' not assignable
*/

// ============================================
// PRIMITIVE VS REFERENCE: KEY DIFFERENCES
// ============================================

// PRIMITIVES: Stored by VALUE
let a = 10;
let b = a;      // Copy the value
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// REFERENCES: Stored by REFERENCE
let obj1 = { value: 10 };
let obj2 = obj1;       // Copy the reference (both point to same object)
obj2.value = 20;
console.log(obj1.value); // 20 (changed!)
console.log(obj2.value); // 20

// ============================================
// TYPE COERCION (Automatic Type Conversion)
// ============================================

// JavaScript automatically converts types in certain situations
console.log("5" + 5);          // "55" (number → string)
console.log("5" - 5);          // 0 (string → number)
console.log("5" * "2");        // 10 (both strings → numbers)
console.log(true + 1);         // 2 (true → 1)
console.log(false + 1);        // 1 (false → 0)
console.log("hello" - 5);      // NaN (can't convert "hello" to number)

// Best practice: Use explicit conversion to avoid surprises
console.log(Number("5") + 5);        // 10
console.log(String(5) + String(5));  // "55"
console.log(parseInt("42px"));       // 42
console.log(parseFloat("3.14"));     // 3.14
 

 