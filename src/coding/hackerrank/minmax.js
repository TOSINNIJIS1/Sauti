// function stringadd(str) {
//     console.log(str)
// }

// console.log(str('1,2,'))

// function add(a,b) {
//     return a + b
// }

// console.log(add(2,2))

// console.log([1,5].reduce(add))


function mnmx (arr) {
    arr.sort()

    let lenlast = arr[arr.length -1]
    lenlast
    let mn = arr.reduce((a,b) => a+b, - lenlast)

    lenfirst = arr[0]
    lenfirst
    let mx = arr.reduce((a,b) => a+b, - lenfirst)
    
    console.log(mn, mx)
}
console.log(mnmx([7,69, 2 ,221, 8974]))