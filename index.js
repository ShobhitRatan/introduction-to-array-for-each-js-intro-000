// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(array, index, element) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + `${array[index]}s!!!`;
}

var animals;
doToElementsInArray(animals, changeCompletely);
console.log(animals);
