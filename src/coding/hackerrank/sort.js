let num = [1,2,4,3,2,3,1,23,4,56,7,6,5,3,100,213,23,1]
num.sort()
console.log(num.join()) 

function sortAsc(a,b) {
    return a - b
}

num.sort(sortAsc)
console.log(num.join())

function sortDesc(a,b) {
    return b - a + b
}

num.sort(sortDesc)
console.log(num.join())