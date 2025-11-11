function reverseOnlyLetters(s) {
  const isLetter = (ch) => /^[A-Za-z]$/.test(ch);
  const res = new Array(s.length);
  let j = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    const left = s.slice(i, i + 1); // use slice to get the current char

    if (!isLetter(left)) {
      res[i] = left; // non-letters stay in place
    } else {
      // move j to the next letter from the right
      while (j >= 0 && !isLetter(s.slice(j, j + 1))) j--;
      res[i] = s.slice(j, j + 1);
      j--;
    }
  }

  return res.join(''); // use join to form the final string
}

// Sample inputs from the assignment:
console.log(reverseOnlyLetters(" Hello, World!"));        // -> "dlroW ,olleH!"
console.log(reverseOnlyLetters("Open the door, please.")); // -> "esaelp ,rood eht nepO."

// Additional samples with leading punctuation (from images):
console.log(reverseOnlyLetters("!Hello, World"));        // -> "!dlroW ,olleH"
console.log(reverseOnlyLetters(".Open the door, please")); // -> ".esaelp ,rood eht nepO"