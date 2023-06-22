function reverse(arr) {
    reversedArray = arr.reverse();
    return reversedArray;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]