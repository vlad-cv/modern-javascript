// ============================================
// JavaScript Type Conversion Complete Guide
// ============================================

console.log('=== STRING TO NUMBER CONVERSIONS ===\n');

// Method 1: parseFloat() - Converts strings to floating-point numbers
let amount = '100.65';
console.log(`Original: "${amount}" (${typeof amount})`);
amount = parseFloat(amount);
console.log(`parseFloat(): ${amount} (${typeof amount})`);
console.log('✓ Use parseFloat() when you need decimal precision\n');

// Method 2: parseInt() - Converts strings to integers (whole numbers)
amount = '100.99';
console.log(`Original: "${amount}" (${typeof amount})`);
amount = parseInt(amount);
console.log(`parseInt(): ${amount} (${typeof amount})`);
console.log('✓ Use parseInt() when you only need whole numbers\n');

// Method 3: Number() - Universal conversion (handles both integers and floats)
amount = '250.75';
console.log(`Original: "${amount}" (${typeof amount})`);
amount = Number(amount);
console.log(`Number(): ${amount} (${typeof amount})`);
console.log('✓ Use Number() for general-purpose conversion\n');

// Method 4: Unary plus (+) - Shorthand conversion operator
amount = '42.5';
console.log(`Original: "${amount}" (${typeof amount})`);
amount = +amount;
console.log(`Unary +: ${amount} (${typeof amount})`);
console.log('✓ Use + operator for concise conversion\n');

// Edge Case: Converting non-numeric strings
console.log('--- Edge Case: Non-numeric String ---');
amount = 'hello';
console.log(`Original: "${amount}" (${typeof amount})`);
amount = Number(amount);
console.log(`Number("hello"): ${amount} (${typeof amount})`);
console.log('⚠️ Non-numeric strings convert to NaN (Not a Number)\n');

console.log('\n=== NUMBER TO STRING CONVERSIONS ===\n');

// Method 1: .toString() - Explicit method call
amount = 123;
console.log(`Original: ${amount} (${typeof amount})`);
amount = amount.toString();
console.log(`toString(): "${amount}" (${typeof amount})`);
console.log('✓ Use .toString() for explicit, readable conversion\n');

// Method 2: String() - Constructor function
amount = 456;
console.log(`Original: ${amount} (${typeof amount})`);
amount = String(amount);
console.log(`String(): "${amount}" (${typeof amount})`);
console.log('✓ Use String() when you need to handle null/undefined safely\n');

// Method 3: String concatenation - Implicit conversion
amount = 789;
console.log(`Original: ${amount} (${typeof amount})`);
amount = '' + amount;
console.log(`'' + number: "${amount}" (${typeof amount})`);
console.log('✓ Use concatenation for quick inline conversion\n');

// Method 4: Template literals - Modern approach
amount = 999;
console.log(`Original: ${amount} (${typeof amount})`);
amount = `${amount}`;
console.log(`Template literal: "${amount}" (${typeof amount})`);
console.log('✓ Use template literals for readable string embedding\n');

console.log('\n=== NUMBER TO BOOLEAN CONVERSIONS ===\n');

// Falsy numbers: 0, -0, NaN
let zero = 0;
console.log(`Original: ${zero} (${typeof zero})`);
console.log(`Boolean(0): ${Boolean(zero)} (${typeof Boolean(zero)})`);
console.log('⚠️ Zero converts to false (falsy value)\n');

let negativeZero = -0;
console.log(`Original: ${negativeZero} (${typeof negativeZero})`);
console.log(`Boolean(-0): ${Boolean(negativeZero)} (${typeof Boolean(negativeZero)})`);
console.log('⚠️ Negative zero also converts to false\n');

let notANumber = NaN;
console.log(`Original: ${notANumber} (${typeof notANumber})`);
console.log(`Boolean(NaN): ${Boolean(notANumber)} (${typeof Boolean(notANumber)})`);
console.log('⚠️ NaN converts to false\n');

// Truthy numbers: Any non-zero number
let positive = 42;
console.log(`Original: ${positive} (${typeof positive})`);
console.log(`Boolean(42): ${Boolean(positive)} (${typeof Boolean(positive)})`);
console.log('✓ Positive numbers convert to true\n');

let negative = -15;
console.log(`Original: ${negative} (${typeof negative})`);
console.log(`Boolean(-15): ${Boolean(negative)} (${typeof Boolean(negative)})`);
console.log('✓ Negative numbers (except -0) convert to true\n');

console.log('\n=== STRING TO BOOLEAN CONVERSIONS ===\n');

// Empty string is falsy
let emptyStr = '';
console.log(`Original: "${emptyStr}" (${typeof emptyStr})`);
console.log(`Boolean(""): ${Boolean(emptyStr)} (${typeof Boolean(emptyStr)})`);
console.log('⚠️ Empty string converts to false\n');

// Any non-empty string is truthy (even "false"!)
let nonEmpty = 'hello';
console.log(`Original: "${nonEmpty}" (${typeof nonEmpty})`);
console.log(`Boolean("hello"): ${Boolean(nonEmpty)} (${typeof Boolean(nonEmpty)})`);
console.log('✓ Non-empty strings convert to true\n');

let falseString = 'false';
console.log(`Original: "${falseString}" (${typeof falseString})`);
console.log(`Boolean("false"): ${Boolean(falseString)} (${typeof Boolean(falseString)})`);
console.log('⚠️ Even the string "false" converts to true!\n');

console.log('\n=== BOOLEAN TO OTHER TYPES ===\n');

// Boolean to Number
let boolTrue = true;
console.log(`Original: ${boolTrue} (${typeof boolTrue})`);
console.log(`Number(true): ${Number(boolTrue)} (${typeof Number(boolTrue)})`);
console.log('✓ true converts to 1\n');

let boolFalse = false;
console.log(`Original: ${boolFalse} (${typeof boolFalse})`);
console.log(`Number(false): ${Number(boolFalse)} (${typeof Number(boolFalse)})`);
console.log('✓ false converts to 0\n');

// Boolean to String
console.log(`String(true): "${String(true)}" (${typeof String(true)})`);
console.log(`String(false): "${String(false)}" (${typeof String(false)})`);
console.log('✓ Booleans convert to their string representations\n');

console.log('\n=== SPECIAL VALUES ===\n');

// null and undefined
console.log(`Number(null): ${Number(null)} (converts to 0)`);
console.log(`Number(undefined): ${Number(undefined)} (converts to NaN)`);
console.log(`Boolean(null): ${Boolean(null)} (falsy)`);
console.log(`Boolean(undefined): ${Boolean(undefined)} (falsy)`);
console.log(`String(null): "${String(null)}"`);
console.log(`String(undefined): "${String(undefined)}"\n`);

console.log('\n=== PRACTICAL TIP: Checking for NaN ===\n');

let result = Number('invalid');
console.log(`Number('invalid'): ${result}`);
console.log(`result === NaN: ${result === NaN} (❌ This doesn't work!)`);
console.log(`isNaN(result): ${isNaN(result)} (✓ Use isNaN() instead)`);
console.log(`Number.isNaN(result): ${Number.isNaN(result)} (✓ More reliable)\n`);

console.log('\n=== QUICK REFERENCE ===\n');
console.log('String → Number:');
console.log('  • parseFloat("10.5") → 10.5');
console.log('  • parseInt("10.5") → 10');
console.log('  • Number("10.5") → 10.5');
console.log('  • +"10.5" → 10.5\n');

console.log('Number → String:');
console.log('  • (100).toString() → "100"');
console.log('  • String(100) → "100"');
console.log('  • "" + 100 → "100"');
console.log('  • `${100}` → "100"\n');

console.log('To Boolean (Falsy values):');
console.log('  • 0, -0, NaN, "", null, undefined → false');
console.log('  • Everything else → true\n');

console.log('From Boolean:');
console.log('  • Number(true) → 1');
console.log('  • Number(false) → 0');
console.log('  • String(true) → "true"');