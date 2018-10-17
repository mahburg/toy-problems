function sequentialArr(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) {
            return false;
        }
    }
    return true;
}