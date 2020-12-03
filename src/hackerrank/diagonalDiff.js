function diagonalDifference(arr) {
    let len = arr.length;
    let diag = 0;

    for (i in arr) {
        diag += arr[i][i]
        diag -= arr[len -1 - i][i]
    }
    return Math.abs(diag)
}

console.log(diagonalDifference([[1,2,3], [2,3,1], [3,2,1]]))