// 1. Basic Logging & Multiple Arguments
// You can log strings, numbers, booleans, and variables all at once.
const amount = 100;
console.log(100);
console.log("Hello from script.js");
console.log("Values:", 20, 'hello', true, amount);

// 2. Alert Levels (Debugging hierarchy)
// Use these to filter logs in the browser console.
console.log('Standard log'); 
console.warn('Warning: API response slow'); 
console.error('Error: Database connection failed'); 

// 3. Visualizing Data (The "Pro" way)
// Instead of logging a messy object, use table() for a spreadsheet view.
const user = { name: 'Brad', email: 'example@gmail.com', role: 'Admin' };
const users = [
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Alice', email: 'alice@gmail.com' }
];

// Logs the object normally
console.log(user); 
// Logs the array of objects as a clean table
console.table(users); 

// 4. Grouping Logs
// Keeps your console clean by collapsing related messages.
// We use 'groupCollapsed' so it starts closed by default.
console.groupCollapsed('Server Connection Steps');
    console.log('Step 1: Connecting...');
    console.log('Step 2: Authenticating...');
    console.log('Step 3: Connected!');
console.groupEnd();

// 5. Custom Styling (CSS in Console)
// Great for making your own comments stand out in a busy console.
// Note: '10px' (no space allowed in CSS units).
const styles = 'padding: 10px; background-color: #222; color: #bada55; font-size: 16px';
console.log('%cHello World!', styles);

// 6. Performance Timing (Bonus)
// Great for measuring how long a loop or function takes.
console.time('Loop Timer');
let sum = 0;
for (let i = 0; i < 1000; i++) {
    // Simulating work
    sum+=i;
}
console.timeEnd('Loop Timer');
console.log(`The sum of the numbers of 0 to 999 is: ${sum}`);