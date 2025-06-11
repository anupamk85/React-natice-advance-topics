// What is Hoisting?
// Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope—before the code is executed.

// 👇 There are two things that get hoisted:
// Variable declarations (var)

// Function declarations
// ✅ Example 1: Function Hoisting
// js
// Copy
// Edit
// sayHello(); // ✅ Works

// function sayHello() {
//   console.log("Hello!");
// }
// 🧠 Why it works:
// Function declarations are hoisted completely—both the name and the body of the function.

// 🚫 Example 2: Variable Hoisting with var
// js
// Copy
// Edit
// console.log(a); // undefined
// var a = 10;
// 🧠 Why it's undefined:
// Only the declaration (var a) is hoisted, not the initial value (= 10).
// JavaScript treats it like:

// js
// Copy
// Edit
// var a;         // hoisted
// console.log(a); // undefined
// a = 10;
// 🚫 Example 3: let and const are NOT hoisted the same way
// js
// Copy
// Edit
// console.log(b); // ❌ ReferenceError
// let b = 20;
// 🧠 Why it fails:
// let and const are hoisted but kept in a Temporal Dead Zone (TDZ)—they cannot be used before declaration.

// 📚 Interview Explanation (Simple English)
// "Hoisting means JavaScript moves variable and function declarations to the top of their scope. For example, I can call a function before it's written because it's hoisted. But if I use var to declare a variable, it’s also hoisted, but its value is not. let and const are safer because they are block scoped and stay in a temporary dead zone before initialization."

// ✅ Quick Summary
// Type	Hoisted?	Usable before declaration?
// function	✅ Yes	✅ Yes
// var	✅ Yes	⚠️ Only undefined
// let / const	✅ Yes	❌ No (TDZ error)