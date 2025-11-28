This is a crucial topic for technical interviews. Understanding how memory works separates junior developers from mid-level developers.

---

# 🧠 JavaScript Memory: Stack vs. Heap

JavaScript automatically handles memory, but understanding _where_ data is stored explains why your code sometimes behaves unexpectedly (like when changing one object accidentally changes another).

## 1. The Two Storage Engines

|**Feature**|**Stack ⚡**|**Heap 📦**|
|---|---|---|
|**Speed**|Extremely Fast|Slower (Dynamic)|
|**Size**|Fixed / Limited|Flexible / Large|
|**What's inside?**|Primitive values & Pointers|Objects, Arrays, Functions|
|**Organization**|LIFO (Last In, First Out)|Unordered pile of memory|

---

## 2. Primitive Types (Stack)

**Primitives** are simple data types. Because they are small and fixed in size, JavaScript stores the **actual value** directly in the Stack.

- **The 7 Primitives:** `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.

### Copy by Value (Independent Copies)

When you copy a primitive, JS makes a real photocopy. Changing one does not affect the other.

JavaScript

```
let name1 = 'John';
let name2 = name1; // Creates a totally separate copy of "John"

name2 = 'Jane'; 

console.log(name1); // 'John' (Remained unchanged)
console.log(name2); // 'Jane'
```

---

## 3. Reference Types (Heap)

**Reference Types** (Objects, Arrays, Functions) can grow infinitely (e.g., an array with 1 million items). They are too big for the Stack.

1. The **Data** lives in the **Heap**.

2. The **Variable** (in the Stack) stores a **Pointer** (address) to that data.

### Copy by Reference (Shared Address)

When you copy an object, you are **not** copying the data. You are copying the **address** (the key to the house). Both variables now point to the exact same object in memory.

JavaScript

```
const person = { name: 'John' };
const newPerson = person; // Copies the REFERENCE (Address), not the object!

newPerson.name = 'Jane';

console.log(person.name); // 'Jane' (Changed! Because they share the same memory)
```

---

## 4. How to Copy Objects Properly

Since `=` only copies the reference, we need special methods to create actual copies of data.

### A. Shallow Copy (The "First Layer" Copy)

Use the Spread Operator (`...`) or `Object.assign`.

- **Good for:** Simple, flat objects.

- **Bad for:** Nested objects. The "top level" is copied, but nested arrays/objects are still references.   

```js
const original = { 
    name: 'Alice', 
    address: { city: 'Wonderland' } // Nested Object
};

const shallowCopy = { ...original };

// ✅ Changing top-level works fine
shallowCopy.name = 'Bob'; 

// ❌ Changing nested object affects BOTH!
shallowCopy.address.city = 'New City'; 

console.log(original.address.city); // 'New City' (Ouch!)
```

### B. Deep Copy (The "True" Copy)

To disconnect the objects completely, you need a Deep Copy.

#### Method 1: `structuredClone()` (Modern Standard 🏆)

This is the best modern way to deep copy. It handles dates, circular references, and nested arrays perfectly.


```js
const deepCopy = structuredClone(original);

deepCopy.address.city = 'Hidden City';

console.log(original.address.city); // 'Wonderland' (Safe! Unchanged)
```

#### Method 2: `JSON.parse(JSON.stringify())` (The Old Hack)

Before `structuredClone`, we used this. It converts the object to a string and back to an object.

- **Warning:** It fails if your object contains `Functions`, `undefined`, or `Symbol`.

---

## Summary Checklist

- **Primitives** = Values. Copies are independent.
- **Objects/Arrays** = References. Copies share memory.
- **`...` (Spread)** = Shallow Copy. Good for flat objects, bad for nested ones.
- **`structuredClone()`** = Deep Copy. The modern standard for duplicating complex data.

---
