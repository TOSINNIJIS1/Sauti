function findMode (a) {
    let count = {};

    a.map(i =>  {
        if (!count[i]) {
            count[i] = 1
            count
        } else {
            count[i] += 1
        }
    })

    let highestVal = 0;
    let highestValKey = -Infinity;

    for (let key in count) {
        const val = count[key]
        if (val > highestVal) {
            highestVal = val
            highestValKey = key
            
        }
    }
    return Number(highestValKey)
}

let a = [1,2,2,4,6]
console.log(findMode(a))