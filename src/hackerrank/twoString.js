// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Example


// These share the common substring .



// These do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below.

// twoStrings has the following parameter(s):

// string s1: a string
// string s2: another string
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of test cases.

// The following  pairs of lines are as follows:

// The first line contains string .
// The second line contains string .
// Constraints

//  and  consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.

// Sample Input

// 2
// hello
// world
// hi
// world
// Sample Output

// YES
// NO
// Explanation

// We have  pairs to check:

// , . The substrings  and  are common to both strings.
// , .  and  share no common substrings.


// function twoStrings(s1, s2) {
//     let dict = []
    
//     for (let i in s1) {
//         let a = s1[i]
//         dict[a] = 'YES'
//     }
    
//     for (let i in s2) {
//         let b = s2[i]
        
//         if (dict[b]) {
//             return 'YES'
//         }
//     }
//     return 'NO'
// }

// function twoStrings(s1, s2) {
//     let result = "NO";
//     const s1len = s1.length;
//     const s2len = s2.length;
//     if (s1len >= 1
//          && s1len <= 100000
//          && s2len >= 1
//          && s2len <= 100000) {
         
//          result = (s1.split('')
//                   .filter((el, key) => s2.indexOf(el) > -1)
//                   .length > 0) ? "YES" : "NO";
//     }
//     return result;
// }


// function twoStrings(cont) {
//     let a = cont[0]
//     let b = cont[1]

//     console.log(b)
    
// }

function twoStrings (a, b) {
    let dup = [];

    for (let i in a) {
        let c = a[i]
        dup[c] = 'Yes'
    }

    for (let i in a) {
        let d = b[i]

        if (dup[d]) {
            return 'Yes'
        }
    }
    return 'No'
}

console.log(twoStrings('bang', 'cav'))

