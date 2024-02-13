/*
Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/

const binarySearch = (arr, searchValue) => {
  let beginning = 0;
  let end = arr.length - 1;

  while (beginning < end) {
    const middle = (beginning + end) / 2;
    if (arr[middle] == searchValue) {
      return true;
    } else if (searchValue < arr[middle]) {
      end = middle - 1;
    } else {
      beginning = middle + 1;
    }
  }
  return false;
};

const arr = [1, 5, 7, 8, 9, 66, 20];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 99));
