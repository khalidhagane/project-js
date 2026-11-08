// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("JavaScript")); // 10


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// "Hello World Javascript"

// 1. Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([10, 5, 20, 8])); // 20


// 2. Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([10, 5, 20, 8])); // 5


// 3. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15


// 4. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5, 6], number => number % 2 === 0));
// [2, 4, 6]

// 1. Factorial
function factorial(n) {
    if (n < 0) {
        return "Invalid number";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // 120


// 2. Prime Number Check
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


// 3. Fibonacci Sequence
function fibonacci(n) {
    let sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

console.log(fibonacci(7));
// [0, 1, 1, 2, 3, 5, 8]