// Merge Sort
    // divide array into halves
    // recursively sort each half
    // merge two halves

const mergeSort = (array) => {
  let aux = [];
  return sort(array, aux, 0, array.length - 1);
}

const sort = (array, aux, low, high) => {

  if (high <= low) {
    return;
  }

  let mid = Math.floor(low + (high - low) / 2);
  sort(array, aux, low, mid);
  sort(array, aux, mid + 1, high);
  return merge(array, aux, low, mid, high);
}

const merge = (array, aux, low, mid, high) => {
  for (let i = low; i <= high; i++) {
    aux[i] = array[i];
  }

  let i = low;
  let j = mid + 1;

  for (let k = low; k <= high; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > high) {
      array[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      array[k] = aux[j++];
    } else {
      array[k] = aux[i++];
    }
  }

  return array;
}