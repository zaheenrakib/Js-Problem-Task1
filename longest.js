function findLongestWord(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let longestLength = 0;

    // Iterate through each word and update the longest word if needed
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestLength) {
            longestWord = currentWord;
            longestLength = currentWord.length;
        }
    }

    return longestWord;
}

// Example usage
const inputString = 'I am learning Programming to become a programmer';
const result = findLongestWord(inputString);

console.log(`Longest word: ${result}`);
