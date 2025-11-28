// ============================================
// STACK VS HEAP: HOW JAVASCRIPT STORES DATA
// ============================================

// STACK: Fast, fixed-size memory for primitives
// - Stores actual values directly
// - Automatically managed (LIFO - Last In, First Out)
// - Fast access but limited size

// HEAP: Flexible memory for complex data structures
// - Stores objects, arrays, functions
// - Variables on the stack hold references (pointers) to heap locations
// - Slower access but can grow dynamically

// ============================================
// PRIMITIVE TYPES (Stored in Stack)
// ============================================

// Primitives store the ACTUAL VALUE in the stack
// When copied, the VALUE is duplicated (independent copies)

// 7 Primitive Types:
// - String, Number, Boolean, Null, Undefined, Symbol, BigInt

const firstName = 'John';
const age = 30;
const isActive = true;
const emptyValue = null;
const notDefined = undefined;

console.log('=== PRIMITIVE VALUES ===');
console.log('firstName:', firstName);
console.log('age:', age);

// ============================================
// REFERENCE TYPES (Stored in Heap)
// ============================================

// Reference types store a POINTER/REFERENCE in the stack
// The actual data lives in the heap
// When copied, the REFERENCE is duplicated (both point to same data)

// 3 Main Reference Types:
// - Objects, Arrays, Functions

const person = {
    firstName: 'John',
    age: 30
};

console.log('\n=== REFERENCE VALUES ===');
console.log('person:', person);

// ============================================
// PRIMITIVES: COPY BY VALUE
// ============================================

// When you assign a primitive to a new variable,
// the VALUE is copied (creates an independent copy)

let newFirstName = firstName;  // Copies the value "John"
console.log('\n=== PRIMITIVE COPY BY VALUE ===');
console.log('Original:', firstName);     // "John"
console.log('Copy:', newFirstName);      // "John"

newFirstName = 'Jane';
console.log('\nAfter changing copy to "Jane":');
console.log('Original:', firstName);     // "John" (unchanged!)
console.log('Copy:', newFirstName);      // "Jane"

newFirstName = 'Johnathan';
console.log('\nAfter changing copy to "Johnathan":');
console.log('Original:', firstName);     // "John" (still unchanged!)
console.log('Copy:', newFirstName);      // "Johnathan"

// KEY TAKEAWAY: Primitives are independent when copied

// ============================================
// REFERENCES: COPY BY REFERENCE
// ============================================

// When you assign an object to a new variable,
// the REFERENCE is copied (both variables point to the same object)

let newPerson = person;  // Copies the reference, not the object!
console.log('\n=== REFERENCE COPY BY REFERENCE ===');
console.log('Original person:', person);
console.log('New person:', newPerson);
console.log('Are they the same object?', person === newPerson); // true

// Changing newPerson affects person (they're the same object!)
newPerson.firstName = 'Jane';
console.log('\nAfter changing newPerson.firstName to "Jane":');
console.log('Original person:', person);      // { firstName: 'Jane', age: 30 }
console.log('New person:', newPerson);        // { firstName: 'Jane', age: 30 }
console.log('Both changed!'); // ⚠️ This is the key difference

// KEY TAKEAWAY: Objects share the same memory location when copied

// ============================================
// CREATING TRUE COPIES: SHALLOW COPY
// ============================================

// To create an independent copy, use Object.assign() or spread operator (...)
// These create a SHALLOW COPY (only copies the first level)

console.log('\n=== SHALLOW COPY METHODS ===');

// Method 1: Object.assign()
const anotherPerson = Object.assign({}, person);
anotherPerson.firstName = 'Mike';

console.log('\nUsing Object.assign():');
console.log('Original person:', person);          // { firstName: 'Jane', age: 30 }
console.log('Another person:', anotherPerson);    // { firstName: 'Mike', age: 30 }
console.log('Are they the same?', person === anotherPerson); // false

// Method 2: Spread operator (modern approach, more readable)
const yetAnotherPerson = { ...person };
yetAnotherPerson.firstName = 'Sarah';

console.log('\nUsing spread operator:');
console.log('Original person:', person);              // { firstName: 'Jane', age: 30 }
console.log('Yet another person:', yetAnotherPerson); // { firstName: 'Sarah', age: 30 }

// ============================================
// SHALLOW COPY LIMITATION: NESTED OBJECTS
// ============================================

// ⚠️ IMPORTANT: Shallow copies only copy the first level
// Nested objects/arrays are still REFERENCED, not copied!

const complexPerson = {
    name: 'Alice',
    age: 25,
    address: {              // Nested object
        city: 'Wonderland',
        zip: '12345'
    },
    hobbies: ['reading', 'coding']  // Array (also a reference type!)
};

console.log('\n=== SHALLOW COPY PROBLEM ===');
console.log('Original complex person:', complexPerson);

// Create a shallow copy
const anotherComplexPerson = { ...complexPerson };

// Change a top-level property (works as expected)
anotherComplexPerson.name = 'Bob';
console.log('\nAfter changing name:');
console.log('Original name:', complexPerson.name);          // "Alice" (unchanged)
console.log('Copy name:', anotherComplexPerson.name);       // "Bob"

// Change a nested property (⚠️ affects both!)
anotherComplexPerson.address.city = 'New Wonderland';
console.log('\nAfter changing nested address.city:');
console.log('Original city:', complexPerson.address.city);          // "New Wonderland" ⚠️
console.log('Copy city:', anotherComplexPerson.address.city);       // "New Wonderland"
console.log('Both changed! Nested objects are still referenced.');

// Change array (⚠️ affects both!)
anotherComplexPerson.hobbies.push('gaming');
console.log('\nAfter adding to hobbies array:');
console.log('Original hobbies:', complexPerson.hobbies);            // ['reading', 'coding', 'gaming'] ⚠️
console.log('Copy hobbies:', anotherComplexPerson.hobbies);         // ['reading', 'coding', 'gaming']

// ============================================
// CREATING TRUE COPIES: DEEP COPY
// ============================================

console.log('\n=== DEEP COPY SOLUTIONS ===');

// Solution 1: JSON.parse + JSON.stringify (simple but has limitations)
const deepCopyPerson = JSON.parse(JSON.stringify(complexPerson));
deepCopyPerson.address.city = 'Deep Copy City';
deepCopyPerson.hobbies.push('swimming');

console.log('\nUsing JSON.parse(JSON.stringify()):');
console.log('Original city:', complexPerson.address.city);      // "New Wonderland" (unchanged!)
console.log('Deep copy city:', deepCopyPerson.address.city);    // "Deep Copy City"
console.log('Original hobbies:', complexPerson.hobbies);        // ['reading', 'coding', 'gaming']
console.log('Deep copy hobbies:', deepCopyPerson.hobbies);      // ['reading', 'coding', 'gaming', 'swimming']

// ⚠️ JSON method limitations:
// - Cannot copy functions, undefined, Symbol, Date objects
// - Cannot handle circular references
// - Loses prototypes

const objWithFunction = {
    name: 'Test',
    greet: function() { return 'Hello'; },  // Function
    date: new Date(),                       // Date object
    undef: undefined,                       // Undefined
    sym: Symbol('test')                     // Symbol
};

const jsonCopy = JSON.parse(JSON.stringify(objWithFunction));
console.log('\nJSON copy limitations:');
console.log('Original:', objWithFunction);
console.log('JSON copy:', jsonCopy);
// Note: function, undefined, and symbol are lost!

// Solution 2: structuredClone() (Modern, best approach for most cases)
// Supported in modern browsers and Node.js 17+
const structuredClonePerson = structuredClone(complexPerson);
structuredClonePerson.address.city = 'Structured Clone City';
structuredClonePerson.hobbies.push('painting');

console.log('\nUsing structuredClone():');
console.log('Original city:', complexPerson.address.city);              // "New Wonderland" (unchanged!)
console.log('Structured clone city:', structuredClonePerson.address.city);  // "Structured Clone City"
console.log('Original hobbies:', complexPerson.hobbies);
console.log('Structured clone hobbies:', structuredClonePerson.hobbies);

// structuredClone() advantages:
// - Handles nested objects/arrays correctly
// - Copies Date, RegExp, Map, Set, ArrayBuffer, and more
// - Handles circular references
// ⚠️ Still cannot copy functions or DOM nodes

// Solution 3: Manual deep copy (most control, more code)
function manualDeepCopy(obj) {
    // Handle primitives and null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map(item => manualDeepCopy(item));
    }
    
    // Handle objects
    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = manualDeepCopy(obj[key]);
        }
    }
    return copy;
}

const manualCopy = manualDeepCopy(complexPerson);
manualCopy.address.city = 'Manual Copy City';
console.log('\nUsing manual deep copy:');
console.log('Original city:', complexPerson.address.city);      // "New Wonderland" (unchanged!)
console.log('Manual copy city:', manualCopy.address.city);      // "Manual Copy City"

// ============================================
// PRACTICAL EXAMPLES & COMMON PITFALLS
// ============================================

console.log('\n=== PRACTICAL EXAMPLES ===');

// Example 1: Array of objects (very common!)
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const usersCopy = [...users];  // Shallow copy of array
usersCopy[0].name = 'Charlie'; // Modifies nested object!

console.log('\nArray of objects:');
console.log('Original users:', users);      // [{ id: 1, name: 'Charlie' }, ...]
console.log('Users copy:', usersCopy);      // [{ id: 1, name: 'Charlie' }, ...]
console.log('Nested objects still referenced!');

// Correct way: Deep copy
const usersDeepCopy = structuredClone(users);
usersDeepCopy[0].name = 'David';
console.log('\nAfter deep copy:');
console.log('Original users:', users);          // [{ id: 1, name: 'Charlie' }, ...]
console.log('Deep copy users:', usersDeepCopy); // [{ id: 1, name: 'David' }, ...]

// Example 2: Function parameters
function modifyObject(obj) {
    obj.modified = true;  // This affects the original!
}

const myObj = { value: 10 };
modifyObject(myObj);
console.log('\nFunction parameter (reference):');
console.log('myObj:', myObj);  // { value: 10, modified: true }

// To avoid this, pass a copy
const safeObj = { value: 20 };
modifyObject({ ...safeObj });
console.log('safeObj:', safeObj);  // { value: 20 } (unchanged)

// ============================================
// SUMMARY & BEST PRACTICES
// ============================================

console.log('\n=== SUMMARY ===');
console.log(`
PRIMITIVES (Stack):
- Copied by VALUE
- Independent when assigned to new variables
- Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

REFERENCES (Heap):
- Copied by REFERENCE
- Multiple variables can point to same object
- Types: Object, Array, Function

COPYING OBJECTS:
1. Shallow copy (first level only):
   - { ...obj } or Object.assign({}, obj)
   
2. Deep copy (all levels):
   - structuredClone(obj) ✅ Best for most cases
   - JSON.parse(JSON.stringify(obj)) ⚠️ Loses functions/special types
   - Manual recursive function ⚠️ More control, more code

BEST PRACTICES:
- Use structuredClone() for deep copies (modern approach)
- Be aware of shallow vs deep copy limitations
- When passing objects to functions, consider if they should be mutated
- Use const for objects you don't want reassigned (but can still mutate properties)
`);

// ============================================
// VISUAL MEMORY DIAGRAM
// ============================================

console.log('\n=== MEMORY VISUALIZATION ===');
console.log(`
PRIMITIVE (Copy by Value):
Stack:
  firstName → "John"
  newFirstName → "Jane" (independent copy)

REFERENCE (Copy by Reference):
Stack:                  Heap:
  person → [0x001] →    { firstName: 'Jane', age: 30 }
  newPerson → [0x001] → (same object!)

SHALLOW COPY:
Stack:                      Heap:
  person → [0x001] →        { name: 'Alice', address: [0x002] }
  copy → [0x003] →          { name: 'Alice', address: [0x002] }
  address (shared) → [0x002] → { city: 'Wonderland' }

DEEP COPY:
Stack:                      Heap:
  person → [0x001] →        { name: 'Alice', address: [0x002] }
  deepCopy → [0x003] →      { name: 'Alice', address: [0x004] }
  (separate addresses)       (completely independent)
`);
