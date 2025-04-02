function isPalindrome(word) {
  // Write your algorithm here
}

function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase(); // Convert word to lowercase
  const reversedWord = lowerCaseWord.split('').reverse().join(''); // Reverse the word
  return lowerCaseWord === reversedWord; // Compare original and reversed
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
