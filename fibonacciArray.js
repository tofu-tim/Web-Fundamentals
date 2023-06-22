function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        nacci = (fibArr[i - 1] + fibArr[i - 2]);
        fibArr.push(nacci);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);

// expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]