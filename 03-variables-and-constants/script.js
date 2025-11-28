
// ============================================
// VARIABLE DECLARATIONS IN JAVASCRIPT
// ============================================

// Three ways to declare variables: var, let, const
// - var: Old way (avoid in modern code)
// - let: For values that will change
// - const: For values that won't be reassigned

// ============================================
// BASIC DECLARATIONS
// ============================================

let firstName = 'John';
let lastName = 'Doe';
console.log(`The first and last name is: ${firstName} ${lastName}`);

let age = 30;
console.log(`The age is ${age}.`);

// ============================================
// NAMING CONVENTIONS
// ============================================

// Valid characters: letters, numbers, underscores (_), dollar signs ($)
// ❌ Cannot start with a number
// ✅ Case-sensitive (age !== Age)

// Common naming styles:
// - camelCase (recommended for variables/functions): firstName, getUserData
// - PascalCase (for classes/components): Person, UserProfile
// - UPPER_SNAKE_CASE (for constants): MAX_SIZE, API_KEY
// - snake_case (less common in JS): first_name, user_id

// ============================================
// RE-ASSIGNING VARIABLES (let)
// ============================================

age = 31; // ✅ Works because 'age' was declared with 'let'
console.log(`The age is now ${age}.`);

// Declare without initializing, then assign later
let score;
score = 1;
console.log(`The score is ${score}`);

score++; // Increment by 1
console.log(`The score is now ${score}`);

// ============================================
// CONSTANTS (const)
// ============================================

const PI = 3.14; // Use UPPER_CASE for true constants
console.log(`The constant PI is equal to ${PI}`);

// ❌ This would throw an error:
// PI = 3.14159; // TypeError: Assignment to constant variable

// ⚠️ IMPORTANT: const prevents reassignment, NOT mutation
// You CAN modify arrays and objects declared with const

const arr = [1, 2, 3, 4];
arr.push(5); // ✅ Modifying the array is allowed
console.log(`The array is [${arr}]`);

// ❌ But you CANNOT reassign the entire array:
// arr = [1, 2, 3]; // TypeError

const person = { name: 'Brad' };
person.name = 'John'; // ✅ Modifying properties is allowed
person.email = 'john@gmail.com';
console.log('The person object is:', person); // Better way to log objects

// ============================================
// MULTIPLE DECLARATIONS
// ============================================

// You can declare multiple variables in one line
let a = 3, b = 4, c = 45;
console.log('Multiple values:', a, b, c);

// But for readability, prefer separate lines:
let x = 10;
let y = 20;
let z = 30;
