function computeSumOrTriple(a, b) {
    // Check if the two integers are the same
    if (a === b) {
        return 3 * (a + b); // Return triple their sum
    } else {
        return a + b; // Return the sum of the two integers
    }
}

// Example usage:
const num1 = 5;
const num2 = 5;
const result = computeSumOrTriple(num1, num2);
console.log("Result:", result); // Output will be 30 since both numbers are the same (5), and their sum is 10, which is tripled to 30.