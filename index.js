function sumItems(array) {
  // Base: no items in array, return 0
  if (!array.length) {
    return 0;

    // If first item is an array, call sumItems on it and sum the rest
  } else if (Array.isArray(array[0])) {
    return sumItems(array.shift()) + sumItems(array);

    // If first item is number, add the number itself 
    // and sum the rest of the array
  } else {
    return array.shift() + sumItems(array);
  }
}

module.exports = sumItems;