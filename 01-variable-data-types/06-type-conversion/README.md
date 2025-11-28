# JavaScript Type Conversion Guide

Converting between data types is fundamental in JavaScript. Understanding both **explicit conversion** (intentional) and **implicit conversion** (automatic) helps you write predictable code and avoid common bugs.

---

## 1. Converting Strings to Numbers

**When you need this:** Processing user input, form data, or URL parameters that arrive as strings but need mathematical operations.

### The Four Main Methods

|Method|Syntax|Best For|Example|
|---|---|---|---|
|**parseFloat**|`parseFloat(str)`|Decimal numbers|`parseFloat("10.55")` → `10.55`|
|**parseInt**|`parseInt(str, 10)`|Whole numbers|`parseInt("10.55", 10)` → `10`|
|**Number**|`Number(str)`|Strict conversion|`Number("10.5")` → `10.5`|
|**Unary +**|`+str`|Concise syntax|`+"10.5"` → `10.5`|

**Key differences:**

- `parseFloat` and `parseInt` are **forgiving** — they extract numbers from strings like `"42px"` → `42`
- `Number()` and `+` are **strict** — `Number("42px")` returns `NaN`
- Always include the radix parameter with `parseInt`: `parseInt(str, 10)` to prevent unexpected octal conversion

### ⚠️ The NaN Trap

When conversion fails, JavaScript returns `NaN` (Not a Number):

```javascript
Number("hello")  // NaN
+"abc"          // NaN
parseInt("")    // NaN
```

**Critical:** `NaN` is the only value in JavaScript that doesn't equal itself, so use `Number.isNaN()` to check for it.

---

## 2. Converting Numbers to Strings

**When you need this:** Displaying values to users, concatenating with text, or storing in formats requiring strings.

### Three Approaches (Best to Good)

**1. Template Literals** (Modern standard)

```javascript
const price = 29.99;
`Total: $${price}` // "Total: $29.99"
```

**2. .toString() method** (Explicit and clear)

```javascript
const count = 42;
count.toString() // "42"
```

**3. String() constructor** (Safest for edge cases)

```javascript
String(null)      // "null" (doesn't throw)
String(undefined) // "undefined"
```

---

## 3. Boolean Conversion: Truthy vs. Falsy

JavaScript evaluates every value as either "truthy" or "falsy" in conditional contexts. This matters for `if` statements, ternaries, and logical operators.

### The Complete Falsy List (Only 7 Values)

Everything else is truthy. Memorize these:

1. `false`
2. `0`
3. `-0`
4. `""` (empty string)
5. `null`
6. `undefined`
7. `NaN`

### Common Truthy Surprises

These often trip up developers:

```javascript
Boolean("false")  // true (non-empty string!)
Boolean("0")      // true (string, not number)
Boolean(" ")      // true (whitespace counts)
Boolean([])       // true (empty array)
Boolean({})       // true (empty object)
Boolean(-1)       // true (any non-zero number)
```

**Rule of thumb:** Only the 7 falsy values convert to `false`. Everything else—including empty arrays, objects, and negative numbers—is truthy.

---

## 4. Edge Cases & Gotchas

### Null vs. Undefined in Math

They behave differently when converted:

```javascript
Number(null)      // 0 (null represents "intentional absence")
Number(undefined) // NaN (undefined means "not yet assigned")
```

### Checking for NaN Correctly

```javascript
const result = Number("invalid");

// ❌ Wrong (always false!)
result === NaN

// ✅ Correct
Number.isNaN(result)

// ⚠️ Legacy (less precise)
isNaN(result) // also converts to number first
```

**Why `NaN !== NaN`?** By IEEE 754 spec design, NaN represents "invalid calculation result," and no two invalid results should be considered equal.

---

## 5. Quick Reference

```javascript
// ============================================
// STRING → NUMBER
// ============================================
parseFloat("10.99")    // 10.99
parseInt("10", 10)     // 10 (always specify radix!)
Number("10.99")        // 10.99
+"10.99"               // 10.99

// Forgiving vs. strict
parseFloat("42px")     // 42 (extracts number)
Number("42px")         // NaN (rejects invalid format)

// ============================================
// NUMBER → STRING
// ============================================
`Value: ${42}`         // "Value: 42" (preferred)
(42).toString()        // "42"
String(42)             // "42"

// ============================================
// → BOOLEAN
// ============================================
// Falsy values (only these 7!)
Boolean(false)         // false
Boolean(0)             // false
Boolean("")            // false
Boolean(null)          // false
Boolean(undefined)     // false
Boolean(NaN)           // false

// Common gotchas (all truthy!)
Boolean("false")       // true ⚠️
Boolean("0")           // true ⚠️
Boolean([])            // true ⚠️
Boolean({})            // true ⚠️
Boolean(-1)            // true

// ============================================
// SPECIAL CASES
// ============================================
Number(null)           // 0
Number(undefined)      // NaN
Number.isNaN(NaN)      // true ✅
NaN === NaN            // false ❌
```

---

## Practical Tips

1. **Default to explicit conversion** — `Number()`, `.toString()`, `Boolean()` make your intentions clear
2. **Watch for implicit coercion** — operations like `"5" - 2` silently convert strings to numbers
3. **Validate user input** — always check for `NaN` after converting strings to numbers
4. **Remember the falsy seven** — everything else is truthy, including empty arrays and objects