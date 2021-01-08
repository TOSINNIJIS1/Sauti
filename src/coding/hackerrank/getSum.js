// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = -2, b = 3
// Output: 1

function getSum (a, b) {
    if (b == 0) {
        return a
    } else if (a == 0) {

    } else {
        return getSum( a ^ b, (a & b) << 1 )
    }
}

console.log(getSum(-2,3))

console.log(getSum(-2, 3))
console.log(getSum(1, 2))
