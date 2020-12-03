function sumOfArr (arr) {
    let emptyArr = [];
    let count = 0;

    for (let i of arr) {
        if (emptyArr) {
            count += i
        }
    }
    return count
}

console.log(sumOfArr([1,2,3]))

function sum (num) {
    let 
    count = 0;

    let FN = num.toString().split(',')
    FN

    for (let i of FN) {
        if (num) {
            let I = Number(i)
            count+=I
        }
    }
    return count
}

console.log(sum([1,2]))