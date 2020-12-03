// function concate (arr) {
//     let a = 0;
//     let b = 0;

//     arr.map(data => {
//         a += data;

//         let str = '' + data;
//         let size = str.length

//         let pow = Math.pow(10, size)
//         b += pow
//     })

//     return a * arr.length + a * b
// }

// // Question 1
// Given a positive integer number n, your task is to calculate the difference between the product of its digits and the sum of its digits.

// Note: The order matters; the answer should be of the form product - sum (and not sum - product).

// Example
// For n = 123456, the output should be digitsManipulations(n) = 699.

// The product of the digits is equal to 1 * 2 * 3 * 4 * 5 * 6 = 720. The sum of the digits is equal to 1 + 2 + 3 + 4 + 5 + 6 = 21. So the final answer is 720 - 21 = 699.

// For n = 1010, the output should be digitsManipulations(n) = -2.

// The multiplication of the digits is equal to 1 * 0 * 1 * 0 = 0. The sum of the digits is equal to 1 + 0 + 1 + 0 = 2. So the final answer is 0 - 2 = -2.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n A positive integer.

// Guaranteed constraints: 1 ≤ n ≤ 109.

// [output] integer

// The difference between the product of n's digits and the sum of n's digits.

function NumberManipulation (n) {
    let funcN = n.toString().split('')
    let prod = funcN.reduce((a, b) => {
        a *= b
        return a
    })

    let add = funcN.reduce((a, b) => {
        a = parseInt(a) + parseInt(b)

        return a
    })

    
    console.log(prod)
    console.log(add)

    return prod - add
}
console.log(NumberManipulation(123456))
console.log(NumberManipulation(1010))



// Question 2
// You are given two strings pattern and s. The first string pattern contains only the symbols 0 and 1, and the second string s contains only lowercase English letters.

// Let's say that pattern matches a substring s[l..r] of s if the following 3 conditions are met:

// they have equal length;
// for each 0 in pattern the corresponding letter in the substring is a vowel;
// for each 1 in pattern the corresponding letter is a consonant.
// Your task is to calculate the number of substrings of s that match pattern.

// Note: In this task we define the vowels as 'a', 'e', 'i', 'o', 'u', and 'y'. All other letters are consonants.

// Example
// For pattern = "010" and s = "amazing", the output should be binaryPatternMatching(pattern, s) = 2.

// "010" matches s[0..2] = "ama", because both 0s match a, which is a vowel, and 1 match m, which is a consonant; "010" doesn't match s[1..3] = "maz", because the first 0 corresponds to an m, which is a consonant, not a vowel; "010" matches s[2..4] = "azi", because the first 0 matches an a (vowel), 1 matches z (consonant), and the second 0 matches i (vowel); "010" doesn't match s[3..5] = "zin", because the first 0 corresponds to a consonant (z); "010" doesn't match s[4..6] = "ing", because the second 0 corresponds to the letter g, which is a consonant.

// So, there are only 2 matches.

// For pattern = "100" and s = "codesignal", the output should be binaryPatternMatching(pattern, s) = 0.

// There are no double vowels in the string "codesignal", so it's not possible for any of its substrings to match this pattern.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string pattern A string of 0s and 1s.

// Guaranteed constraints: 1 ≤ pattern.length ≤ 103.

// [input] string s A string of lowercase English letters.

// Guaranteed constraints: 1 ≤ s.length ≤ 103.

// [output] integer


// Question 3
// Suppose you are creating a new programming language. This language will support OOP, and to make it special, you want some features of it to differ from the standard.

// In some languages (such as C or Java), class constructor names are forced to have the same name as the class. Here you want to weaken this restriction, and to allow constructor names to be acceptable as long as they're close to the class name. We will consider two strings close if one can be obtained from the other, using the following operations:

// swap any two symbols in one of the strings,
// swap occurrences of any two existing symbols in one of the strings (for example, if your string contains both as and bs, you can change all as to bs and all the bs to as).
// Now you want to write a method that finds out whether the given methodName is considered close to the given className, by the definition above.

// Hint: One of the possible ways to solve the task might be the following. For both methodName and className build a map with the numbers of occurrences of each symbol. Then check whether the sets of the keys of both maps, containing symbols of the names, are equal. Since all occurrences of any two existing symbols can be freely swapped, you can, finally, check whether the multisets of the values of both maps are also equal.

// Example
// For className = "abbzccc" and methodName = "babzzcz", the output should be constructorNames(className, methodName) = true.

// One possible way to transform "abbzccc" to "babzzcz" is this:

// "abbzccc" (this string is className) "babzccc" (swap positions of the first two characters) "babczzz" (switch all c and z characters) "babzzcz" (swap positions of the characters at indices 3 and 5; this string is now methodName) For className = "abcbdb" and methodName = "bbbcca", the output should be constructorNames(className, methodName) = false.

// Since className contains the character "d" but methodName doesn't, it won't be possible to make these strings equal through any series of swaps.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string className A string that contains only lowercase English letters.

// Guaranteed constraints: 1 ≤ className.length ≤ 105.

// [input] string methodName

// A string that contains only lowercase English letters.

// Guaranteed constraints: 1 ≤ methodName.length ≤ 105.

// [output] boolean

// Return true if the two names are considered close, and false otherwise.



// Question 4
// You are developing a new programming language. You believe that ordinary dictionaries are boring, so you've decided to add a cool feature to make your language unique!

// You want the cool feature to be able to perform two types of queries. With two arrays, a and b, the two types of queries are as follows:

// If the query is of the form [0, i, x], then b[i] should be assigned the value of x. If the query is of the form [1, x], then find the total number of pairs of indices i and j such that a[i] + b[j] = x. You will be given the arrays of integers a and b, as well as query, an array of queries in either of the forms described above. Your task is to implement this cool feature, perform the given queries and return an array of the results of the queries of the second type.

// Example
// For a = [1, 2, 3], b = [3, 4], and query = [[1, 5], [0, 0, 1], [1, 5]], the output should be coolFeature(a, b, query) = [2, 1].

// The arrays look like this before the first query:

// a = [1, 2, 3] and b = [3, 4]
// There are two ways to form a sum of 5 using an element from each array: 5 = 1 + 4 = a[0] + b[1] and 5 = 2 + 3 = a[1] + b[0]. So the result is 2.

// The second query re-assigns the value of b[0] to 1, so the arrays look like this before the third query: a = [1, 2, 3] and b = [1, 4] There's now only one way to form a sum of 5 using an element from each array: 5 = 1 + 4 = a[0] + b[1]. So the result is 1.

// Since the two queries of type 1 gave results of 2 and 1, the answer is [2, 1].

// For a = [1, 2, 2], b = [2, 3], and query = [[1, 4], [0, 0, 3], [1, 5]], the output should be coolFeature(a, b, query) = [3, 4].

// The arrays look like this before the first query:

// a = [1, 2, 2] and b = [2, 3]
// There are three ways to form a sum of 4 using an element from each array: 4 = 1 + 3 = a[0] + b[1], 4 = 2 + 2 = a[1] + b[0], and 4 = 2 + 2 = a[2] + b[0]. So the result is 3.

// The second query re-assigns the value of b[0] to 3, so the arrays look like this before the third query: a = [1, 2, 2] and b = [3, 3] There are now 4 ways to form a sum of 5 using an element from each array: 5 = 2 + 3 = a[1] + b[0], 5 = 2 + 3 = a[1] + b[1], 5 = 2 + 3 = a[2] + b[0], and 5 = 2 + 3 = a[2] + b[1]. So the result is 4.

// Input/Output
// [execution time limit] 10 seconds (js)

// [input] array.integer a An array of integers. Guaranteed constraints: 1 ≤ a.length ≤ 103, 0 ≤ a[i] ≤ 109.

// [input] array.integer b An array of integers.

// Guaranteed constraints:

// 1 ≤ b.length ≤ 5 · 104
// 0 ≤ b[i] ≤ 109
// [input] array.array.integer query

// An array of queries, where query[i][0] represents the type of query, and the other elements represent the parameters of the query (i and x for type 0, and just x for type 1).

// For the first type of query, it is guaranteed that 0 ≤ query[i][1] < b.length and 0 ≤ query[i][2] ≤ 109. For the second type of query, it is guaranteed that 0 ≤ query[i][1] ≤ 2 · 109

// Guaranteed constraints:

// 1 ≤ query.length ≤ 103
// [output] array.integer

// The outputs of the queries of the second type, in the order they are given in the input.


