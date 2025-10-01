function diagonalDifference(n, arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))