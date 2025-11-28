
---

### 1. How to Comment in JavaScript

Comments are lines of code that the computer ignores. They are used to explain logic, leave notes for other developers, or temporarily disable code for testing.

#### A. Single-Line Comments

Use two forward slashes `//`. Everything following them on that specific line is ignored.

JavaScript

```
// This is a comment explaining the variable below
let userName = "Vladimir"; 

let age = 30; // You can also put comments at the end of a line
```

#### B. Multi-Line (Block) Comments

Use `/*` to start and `*/` to end. This is useful for longer descriptions or commenting out large chunks of code.

JavaScript

```js
/*
  This function calculates the total price
  including tax and shipping.
  It is currently in beta.
*/
function calculateTotal() {
  // logic here
}
```

#### C. Documentation Comments (JSDoc)

This is a professional standard (JSDoc). It uses `/**` (two stars). When you use this before a function, VS Code will show you a helpful popup (IntelliSense) when you hover over that function later.

JavaScript

```js
/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}
```

---

### 2. Most Common VS Code Shortcuts

Mastering these shortcuts will significantly increase your coding speed.

#### The "Must-Know" Shortcuts

|**Action**|**Windows / Linux**|**Mac**|**Why it's useful**|
|---|---|---|---|
|**Toggle Comment**|`Ctrl` + `/`|`Cmd` + `/`|Instantly comments out the selected line(s). Essential for your request!|
|**Command Palette**|`Ctrl` + `Shift` + `P`|`Cmd` + `Shift` + `P`|Opens the search bar to run _any_ command (e.g., "Reload Window", "Extensions").|
|**Quick Open File**|`Ctrl` + `P`|`Cmd` + `P`|Quickly find and open a file by name without using the sidebar mouse.|
|**Format Document**|`Shift` + `Alt` + `F`|`Shift` + `Option`+ `F`|Instantly fixes your indentation and spacing to look professional.|

#### Editing Superpowers

|**Action**|**Windows / Linux**|**Mac**|**Why it's useful**|
|---|---|---|---|
|**Move Line Up/Down**|`Alt` + `↑` / `↓`|`Option` + `↑` / `↓`|Moves the current line of code up or down. No need to Cut/Paste.|
|**Copy Line Down**|`Shift` + `Alt` + `↓`|`Shift` + `Option` + `↓`|Duplicates the current line immediately below.|
|**Multi-Cursor**|`Alt` + `Click`|`Option` + `Click`|Adds a cursor wherever you click so you can type in multiple places at once.|
|**Select Next Match**|`Ctrl` + `D`|`Cmd` + `D`|Highlights the next occurrence of the word your cursor is on (great for renaming variables quickly).|

#### Navigation

|**Action**|**Windows / Linux**|**Mac**|**Why it's useful**|
|---|---|---|---|
|**Go to Line**|`Ctrl` + `G`|`Ctrl` + `G`|Jump to a specific line number (useful when debugging errors).|
|**Toggle Sidebar**|`Ctrl` + `B`|`Cmd` + `B`|Opens/Closes the file explorer to give you more screen space for code.|
|**Toggle Terminal**|`` Ctrl` + ` ``|`` Ctrl` + ` ``|Opens/Closes the built-in command line terminal.|

---
  
