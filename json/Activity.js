// Create an array
let originalArray = ['apple', 'banana', 'cherry', 'guava', 'mango'];
let joinedString = originalArray.join(', '); 
console.log("Joined string:", joinedString);
let slicedArray = originalArray.slice(1, 4); 
console.log("Sliced array:", slicedArray);
let splicedArray = originalArray.splice(2, 2, 'grape', 'fig'); 
console.log("Spliced array:", splicedArray); 
console.log("Original array after splice:", originalArray);
let sortedArray = originalArray.sort(); 
console.log("Sorted array:", sortedArray);
let copiedArray = originalArray.copyWithin(2, 0, 2);
console.log("Copied array:", copiedArray);
