# JavaScript Data Types: Complete Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Primitive Data Types](#primitive-data-types)
    - [String](#1-string)
    - [Number](#2-number)
    - [Boolean](#3-boolean)
    - [Null](#4-null)
    - [Undefined](#5-undefined)
    - [Symbol](#6-symbol)
    - [BigInt](#7-bigint)
3. [Reference Types](#reference-types)
    - [Object](#1-object)
    - [Array](#2-array)
    - [Function](#3-function)
4. [Checking Data Types](#checking-data-types)
5. [Dynamic vs Static Typing](#dynamic-typing-vs-static-typing)
6. [Primitive vs Reference](#primitive-vs-reference-key-differences)
7. [Type Coercion](#type-coercion)
8. [Quick Reference](#quick-reference)

---

## Introduction

JavaScript organizes data into two main categories:

|Category|Description|Storage Method|
|---|---|---|
|**Primitive Types**|Immutable, simple values|Stored by value|
|**Reference Types**|Mutable, complex structures|Stored by reference (memory address)|

JavaScript has **7 primitive types** and **3 main reference types** we'll cover in this guide.

---

## Primitive Data Types

Primitives are the most basic data types. They are **immutable** (cannot be changed) and **stored by value**.

### 1. String

Represents text data—a sequence of characters.

**Key Points:**

- Must be enclosed in quotes (`'` or `"`) or backticks (`` ` ``)
- Immutable (you create new strings, not modify existing ones)
- Template literals (backticks) allow string interpolation

```javascript
let fullName = "John Doe";
let greeting = 'Hello';
let template = `Welcome, ${fullName}!`; // String interpolation

console.log(fullName, typeof fullName);     // "John Doe" "string"
console.log(template);                      // "Welcome, John Doe!"
```

**When to use:**

- Storing names, messages, user input
- Building dynamic text with template literals

---

### 2. Number

Represents both integers and floating-point (decimal) numbers.

**Key Points:**

- JavaScript has only ONE number type (no separate int/float)
- Range: `-(2^53 - 1)` to `(2^53 - 1)`
- Special values: `Infinity`, `-Infinity`, `NaN`

```javascript
let age = 30;                    // Integer
let height = 5.9;                // Float
let negative = -15;              // Negative number
let result = 10 / 0;             // Infinity
let invalid = "text" * 5;        // NaN (Not a Number)

console.log(age, typeof age);           // 30 "number"
console.log(height, typeof height);     // 5.9 "number"
console.log(result);                    // Infinity
console.log(invalid);                   // NaN
console.log(typeof NaN);                // "number" (quirk!)
```

**Important Quirk:**

- `NaN` (Not a Number) is technically type `"number"`
- Use `isNaN()` or `Number.isNaN()` to check for NaN

**When to use:**

- Calculations, counters, measurements
- Any numeric data

---

### 3. Boolean

Represents logical values: `true` or `false`.

**Key Points:**

- Only two possible values
- Often results from comparisons
- Used in conditional statements (if/else, loops)

```javascript
let isStudent = false;
let isActive = true;
let hasAccess = 10 > 5;          // true (comparison result)

console.log(isStudent, typeof isStudent);   // false "boolean"
console.log(hasAccess);                     // true
```

**Common Use Cases:**

- Flags and switches (isLoggedIn, isVisible)
- Comparison results
- Controlling program flow

---

### 4. Null

Represents the **intentional absence** of any value.

**Key Points:**

- Explicitly set by programmers to mean "no value"
- Different from `undefined` (which means "not yet assigned")
- `typeof null` returns `"object"` (this is a **known JavaScript bug**)

```javascript
let emptyValue = null;
let selectedItem = null;         // Nothing selected yet

console.log(emptyValue, typeof emptyValue);  // null "object" ⚠️
```

**⚠️ Important Quirk:**

- `typeof null` incorrectly returns `"object"`
- This is a legacy bug that cannot be fixed without breaking existing code
- Use strict equality (`=== null`) to check for null

**When to use:**

- Reset a variable to "no value"
- Indicate something is intentionally empty
- Database queries that return no results

---

### 5. Undefined

A variable that has been **declared but not assigned** a value.

**Key Points:**

- Default value for uninitialized variables
- Functions without `return` statements return `undefined`
- Accessing non-existent object properties returns `undefined`

```javascript
let notAssigned;
let anotherVar;

console.log(notAssigned, typeof notAssigned);  // undefined "undefined"

function noReturn() {
    // No return statement
}
console.log(noReturn());         // undefined
```

**Null vs Undefined:**

|`null`|`undefined`|
|---|---|
|Intentional "no value"|Unintentional absence|
|Set by programmer|Set by JavaScript|
|`typeof null` → `"object"`|`typeof undefined` → `"undefined"`|

---

### 6. Symbol

A **unique and immutable** primitive value, primarily used as object property keys.

**Key Points:**

- Every Symbol is unique, even with the same description
- Used to create "hidden" or unique object properties
- Less commonly used in everyday code

```javascript
let uniqueId1 = Symbol("id");
let uniqueId2 = Symbol("id");

console.log(uniqueId1, typeof uniqueId1);    // Symbol(id) "symbol"
console.log(uniqueId1 === uniqueId2);        // false (unique!)

// Use case: Creating unique property keys
const ID = Symbol("id");
const user = {
    name: "Alice",
    [ID]: 12345  // Symbol as property key
};
console.log(user[ID]);           // 12345
```

**When to use:**

- Creating truly unique identifiers
- Adding "private" properties to objects
- Avoiding property name collisions in libraries

---

### 7. BigInt

Represents integers with **arbitrary precision** (beyond the safe integer limit).

**Key Points:**

- For numbers larger than `Number.MAX_SAFE_INTEGER` (`2^53 - 1`)
- Created with `n` suffix or `BigInt()` constructor
- Cannot mix BigInt with regular numbers in operations

```javascript
let bigNumber1 = 9007199254740991n;          // Using 'n' suffix
let bigNumber2 = BigInt(9007199254740991);   // Using BigInt()
let hugeNumber = 12345678901234567890n;

console.log(bigNumber1, typeof bigNumber1);  // 9007199254740991n "bigint"
console.log(hugeNumber);                     // 12345678901234567890n

// ⚠️ Cannot mix BigInt with regular numbers
// console.log(bigNumber1 + 100);  // TypeError!
console.log(bigNumber1 + 100n);    // ✅ Works (both BigInt)
```

**When to use:**

- Financial calculations requiring exact precision
- Working with very large integers
- Cryptography

---

## Reference Types

Reference types are **complex data structures** that store references (memory addresses) rather than direct values.

### 1. Object

A collection of **key-value pairs** (properties).

**Key Points:**

- Most fundamental reference type
- Mutable (properties can be added, changed, deleted)
- Can contain any data type as values

```javascript
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
```

**Reference Behavior:**

```javascript
let person1 = { name: "Alice" };
let person2 = person1;           // Both point to same object!

person2.name = "Bob";
console.log(person1.name);       // "Bob" (changed!)
```

**Key Concept:** When you assign an object to another variable, you're copying the **reference**, not the object itself. Both variables point to the same object in memory.

---

### 2. Array

An **ordered collection** of values (elements).

**Key Points:**

- Technically a special type of object
- Elements are accessed by numeric index (starting at 0)
- Can hold mixed data types
- Dynamic size (can grow/shrink)

```javascript
let colors = ["red", "green", "blue"];
let mixedArray = [1, "text", true, null, { key: "value" }];
let numbers = [10, 20, 30, 40];

console.log(colors, typeof colors);          // [...] "object"
console.log(Array.isArray(colors));          // true (correct check!)
console.log(colors[0]);                      // "red" (first element)
console.log(colors.length);                  // 3
```

**Important:**

- `typeof []` returns `"object"`, not `"array"`
- Use `Array.isArray()` to properly check for arrays

**When to use:**

- Lists of items (users, products, todos)
- Ordered data
- Collections that need iteration

---

### 3. Function

A reusable **block of code** designed to perform a specific task.

**Key Points:**

- Functions are "first-class objects" in JavaScript
- Can be assigned to variables, passed as arguments, returned from other functions
- Three ways to define: function declaration, function expression, arrow function

```javascript
// Function declaration
function greet() {
    console.log("Hello, World!");
}

// Function expression
const sayHi = function() {
    console.log("Hi there!");
};

// Arrow function
const sayHello = () => {
    console.log("Hello!");
};

console.log(greet, typeof greet);            // [Function: greet] "function"
console.log(typeof sayHi);                   // "function"
```

**Functions as First-Class Objects:**

```javascript
// Functions can be passed as arguments
function executeFunction(fn) {
    fn();
}
executeFunction(greet);              // "Hello, World!"
```

---

## Checking Data Types

### Using `typeof` Operator

The `typeof` operator returns a string indicating the type of a value.

```javascript
console.log(typeof "hello");         // "string"
console.log(typeof 42);              // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof Symbol());        // "symbol"
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object" ⚠️
console.log(typeof null);            // "object" ⚠️
console.log(typeof function(){});    // "function"
```

### ⚠️ `typeof` Quirks and Limitations

|Value|`typeof` Result|Note|
|---|---|---|
|`null`|`"object"`|Historical bug|
|`[]`|`"object"`|Arrays are objects|
|`NaN`|`"number"`|NaN is technically a number|

### Better Type Checking Methods

```javascript
// Check for arrays
console.log(Array.isArray([]));              // true
console.log([] instanceof Array);            // true

// Check for null
console.log(null === null);                  // true

// Check for NaN
console.log(Number.isNaN(NaN));              // true
console.log(isNaN("hello"));                 // true (less reliable)
```

---

## Dynamic Typing vs Static Typing

### JavaScript is DYNAMICALLY TYPED

**What this means:**

- Variable types are determined at **runtime** (when code executes)
- Variables can hold **any type** and can **change types**
- No explicit type declarations needed

```javascript
let dynamicVar = "I'm a string";
console.log(typeof dynamicVar);      // "string"

dynamicVar = 42;                     // Now it's a number!
console.log(typeof dynamicVar);      // "number"

dynamicVar = true;                   // Now it's a boolean!
console.log(typeof dynamicVar);      // "boolean"
```

### The Flexibility Problem

Dynamic typing is powerful but can lead to unexpected bugs:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));             // 15 (numbers)
console.log(add("5", "10"));         // "510" (string concatenation!)
console.log(add(5, "10"));           // "510" (type coercion!)
```

**Problem:** JavaScript doesn't prevent you from passing the wrong types to functions.

---

### Static Typing (Java, C++, TypeScript)

**What this means:**

- Variable types are defined at **compile time** (before code runs)
- Types **cannot change** after declaration
- Catches type errors **before code runs**

**TypeScript Example:**

```typescript
let userName: string = "Alice";
userName = 42;  // ❌ Error: Type 'number' is not assignable to type 'string'

function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(5, "10");  // ❌ Error: Argument of type 'string' not assignable
```

**Benefits of Static Typing:**

- Catches bugs early
- Better IDE autocomplete
- Self-documenting code
- Safer refactoring

---

## Primitive vs Reference: Key Differences

Understanding this distinction is **critical** to avoiding bugs in JavaScript.

### Primitives: Stored by VALUE

When you assign a primitive to another variable, the **value is copied**.

```javascript
let a = 10;
let b = a;      // Copy the value
b = 20;         // Change b

console.log(a); // 10 (unchanged!)
console.log(b); // 20
```

**Visual representation:**

```
Memory:
a → 10
b → 20 (separate copy)
```

---

### References: Stored by REFERENCE

When you assign an object/array to another variable, the **reference (memory address) is copied**.

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;       // Copy the reference (both point to same object!)
obj2.value = 20;       // Change through obj2

console.log(obj1.value); // 20 (changed!)
console.log(obj2.value); // 20
```

**Visual representation:**

```
Memory:
obj1 → [Address: 0x001] → { value: 20 }
obj2 → [Address: 0x001] → (same object)
```

**Key Takeaway:** Multiple variables can reference the **same object** in memory. Changing the object through one variable affects all references.

---

### Practical Implications

```javascript
// ✅ Primitives - Safe to copy
let x = 5;
let y = x;
y = 10;
console.log(x); // 5 (x is unchanged)

// ⚠️ Objects - Copies share the same data
let person1 = { name: "Alice" };
let person2 = person1;
person2.name = "Bob";
console.log(person1.name); // "Bob" (person1 changed too!)

// Solution: Create a shallow copy
let person3 = { ...person1 };  // Spread operator
person3.name = "Charlie";
console.log(person1.name); // "Bob" (person1 unchanged)
```

---

## Type Coercion

JavaScript **automatically converts** types in certain situations. This can be helpful or cause unexpected bugs.

### Implicit Type Coercion Examples

```javascript
// Addition with strings (converts to string)
console.log("5" + 5);          // "55" (number → string)

// Subtraction, multiplication, division (converts to number)
console.log("5" - 5);          // 0 (string → number)
console.log("5" * "2");        // 10 (both strings → numbers)

// Booleans to numbers
console.log(true + 1);         // 2 (true → 1)
console.log(false + 1);        // 1 (false → 0)

// Invalid conversions
console.log("hello" - 5);      // NaN (can't convert "hello")
```

### Best Practice: Explicit Conversion

Avoid relying on implicit coercion. Be explicit to prevent bugs:

```javascript
// ✅ Explicit conversion
console.log(Number("5") + 5);        // 10
console.log(String(5) + String(5));  // "55"
console.log(parseInt("42px"));       // 42
console.log(parseFloat("3.14"));     // 3.14
console.log(Boolean(0));             // false
console.log(Boolean("text"));        // true
```

---

## Quick Reference

### Primitive Types Summary

|Type|Example|`typeof` Result|Use Case|
|---|---|---|---|
|String|`"hello"`|`"string"`|Text data|
|Number|`42`, `3.14`|`"number"`|Numeric data|
|Boolean|`true`, `false`|`"boolean"`|Logical values|
|Null|`null`|`"object"` ⚠️|Intentional "no value"|
|Undefined|`undefined`|`"undefined"`|Uninitialized|
|Symbol|`Symbol("id")`|`"symbol"`|Unique identifiers|
|BigInt|`123n`|`"bigint"`|Large integers|

### Reference Types Summary

|Type|Example|`typeof` Result|Check Method|
|---|---|---|---|
|Object|`{ key: "value" }`|`"object"`|`typeof x === "object"`|
|Array|`[1, 2, 3]`|`"object"` ⚠️|`Array.isArray(x)`|
|Function|`function() {}`|`"function"`|`typeof x === "function"`|

---

## Key Takeaways

1. **Primitives are immutable** and stored by value
2. **References are mutable** and stored by reference (memory address)
3. **Use `const` by default** for objects/arrays (prevents reassignment, not mutation)
4. **`typeof null` is a bug** that returns `"object"`
5. **Use `Array.isArray()`** to check for arrays, not `typeof`
6. **Be careful with type coercion** - use explicit conversion when possible
7. **Understand reference behavior** to avoid unexpected mutations
8. **JavaScript is dynamically typed** - types are determined at runtime

---

## Practice Exercises

Test your understanding with these exercises:

1. What is the output of `typeof null`? Why is this considered a JavaScript quirk?
2. Create an array and copy it to another variable. Modify the copy—what happens to the original?
3. What's the difference between `null` and `undefined`? When would you use each?
4. What does `"5" + 5` evaluate to? What about `"5" - 5`?
5. How can you check if a variable is an array without using `typeof`?
6. Create a Symbol and explain why `Symbol("id") !== Symbol("id")`
7. What's the maximum safe integer in JavaScript? What data type do you use beyond that?
8. Fix this code:

```js
let obj1 = { count: 0 };let obj2 = obj1;obj2.count = 10;
// Goal: obj1.count should still be 0
```


Happy coding! 🚀


---
[Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types)