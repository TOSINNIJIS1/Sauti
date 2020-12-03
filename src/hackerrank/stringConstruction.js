// function stringConstruction(s) {
//     let a = s.split('')
    
//     let b = a.filter((v, i, p) => p.indexOf(v) == i);
//     b
//     return b.length
// }
// console.log(stringConstruction('ssaaa'))


function sum (ar) {
    let a = ar.toString().split('')
    let b = a.reduce((a, b) => {
        a = parseInt(a) + parseInt(b)
        
        return a
    } )
    console.log(b)


}



console.log(sum(123))



function sumArr(arr) {
    let count = 0
    let emptyArr = []
    for  (ar of arr) {
        if (emptyArr) {
            count += ar
        }
    }
    return count
}

console.log(sumArr([1,2,4]))

