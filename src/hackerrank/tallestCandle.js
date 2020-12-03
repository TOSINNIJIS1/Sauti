// // Occurence

// function birthdayCakeCandles(candles) {
//     let count = {}
//     // Write your code here
//     candles.forEach(data => count[data] ? count[data] ++ : count[data] = 1 );
//     return count

// }
// console.log(birthdayCakeCandles([3,2,1,3]))


// // duplicates

function dupbirthdayCakeCandles(candles) {
    let max = Math.max(...candles)
    max
    let high = candles.filter((i, data) => i === max)

    let len = high.length


    return len

}
console.log(dupbirthdayCakeCandles([3,2,1,3]))


function sortNumber(a,b) {
    return a-b;
    }
    var listNumber = [1,2,5,3,5,5,3,5,7,8,7,98,65,7,3,6,7];
    listNumber.sort(sortNumber);
    console.log(listNumber.join());



// function  findl(arr) {
//     index = 0;
//     larg = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] > larg) {
//             index[i]
//             i = larg
//         }
//     }
//     return index
// }

// console.log(findl([1,2,3]))

// let num = [1,2,3,4]
// let result = 0

// for (let i of num) {
//     console.log(i *= num)
// }

// function bang (a, b) {
//     let result = 0;


// }

// console.log(bang(1,2))

