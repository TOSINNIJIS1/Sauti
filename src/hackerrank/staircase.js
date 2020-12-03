function staircase(n) {
    let count = 0;
    n
    let m = n.toString().split('').join('')
    m
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i).padStart(n))
        count++
    }
    return count
}

console.log(staircase(6))