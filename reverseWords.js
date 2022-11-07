/**
 * This function reverses each word in a string
 * @param {string} str 
 * @returns str with each word reversed
 */
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
  }