function arr(arr, value) {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [i, j];
      }
    }
  }
}
console.log(arr([20, 9, 14, 25, 29], 34));
