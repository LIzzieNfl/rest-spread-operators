/* Task 1: Declare a Destination Variable */
// Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination); // Should print "Ancient Egypt"

/* Task 2: Change the Destination */
// Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination); // Should print "Medieval Europe"

/* Task 3: Declare a Constant Travel Date */
// Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(travelDate); // Should print "2024-03-15"

// Observations:
// The value of `travelDate` cannot be changed because `const` is used. 
// Attempting to reassign the value will throw an error.

// travelDate = "2024-05-20"; // Uncommenting this line will throw an error because constants cannot be reassigned.

/* Task 4: Experiment with Variable Hoisting */
// Before declaring any variable, try to print a variable named `timeMachineModel` to the console.
console.log(timeMachineModel); // This will print 'undefined' due to hoisting

// Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`.
var timeMachineModel = "T-800";
console.log(timeMachineModel); // Should print "T-800"

// Observations:
// With `var`, the variable is hoisted to the top of the scope, but its value is not initialized until the assignment is executed.
// As a result, accessing the variable before the assignment results in `undefined`, not a ReferenceError.
