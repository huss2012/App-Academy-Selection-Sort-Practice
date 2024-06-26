

function selectionSort(arr) {

  // Copy the original array
  // Create an array to store the sorted values
  // While the array is not empty...
    // Do not move this console.log
    // Find the index of the minimum value in the unsorted half
    // Save and remove the value at the min index
  // Add the min value to the end of the sorted array
  let newArr = [...arr];
  let sorted = [];

  while (newArr.length) {
    console.log(sorted.join(","));
    let minVal = newArr[0];
    let minIndex = 0;
    for (let i = 1; i < newArr.length; i++){
      if (newArr[i] < minVal) {
        minVal = newArr[i];
        minIndex = i;
      }
    }
    newArr.splice(minIndex, 1);
    sorted.push(minVal);

  }
  //console.log(sorted);
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // // Do not move this console.log
    // console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

  // Increment the divider and repeat
  let divider = 0;

  while (divider !== arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    let minVal = arr[divider];
    let minIndex = divider;

    for (let i = arr.length - 1; i >= divider; i--){
      if (arr[i] < minVal) {
        minVal = arr[i];
        minIndex = i;
      }
    }
    // for (let i = divider; i < arr.length; i++){
    //   if (arr[i] < minVal) {
    //     minVal = arr[i];
    //     minIndex = i;
    //   }
    // }
    for (let i = minIndex; i > divider; i--){
      arr[i] = arr[i - 1];
    }

    arr[divider] = minVal;

    divider++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
