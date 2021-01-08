function timestimeifoverfive(a){
    for (let i of a) {
        if (i >= 5) {
            i *= 10
        }
        console.log(i)
    }
}

let a = [23, 9, 11, 2, 10, 6]

console.log(timestimeifoverfive(a))