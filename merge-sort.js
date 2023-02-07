function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(arrA, arrB) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      merged.push(arrA[i++]);
    } else {
      merged.push(arrB[j++]);
    }
  }

  while (i < arrA.length) {
    merged.push(arrA[i++]);
  }

  while (j < arrB.length) {
    merged.push(arrB[j++]);
  }

  return merged;
}

module.exports = [merge, mergeSort];
