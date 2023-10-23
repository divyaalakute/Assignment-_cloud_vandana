// Q1 take a sentence as input and reverse every word in that sentence.  Example: This is a sunny day>shiT si a ynnus yad.
function reverseWords(sentence) {
 const words = sentence.split(' ');  // Split the sentence into words.
 const reversedWords = words.map(word => word.split('').reverse().join(''));  // Reverse each word.
  return reversedWords.join(' '); // Join the reversed words back into a sentence.
}

// Example usage:
const sentence = 'This is a sunny day';
const reversedSentence = reverseWords(sentence);

console.log(reversedSentence); // Output: 'sihT si a ynnus yad'
// Q2.  PERFORM SORTING OF AN ARRAY IN DESCENDING ARRAY.                                          
 const arr = [5, 3, 2, 1, 4];
arr.sort((a, b) => b - a); // Sort the array in descending order.
console.log(arr); // Output: [5, 4, 3, 2, 1]  // Log the sorted array.