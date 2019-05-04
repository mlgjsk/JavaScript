/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
	// LBH QVQ VG!
	return str.replace(/[A-Z]/g, (L) => String.fromCharCode(L.charCodeAt(0) % 26 + 65));
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');

/**2nd Solution:
 * 
 * function rot13(str) {
      var rotCharArray = [];
      var regEx = /[A-Z]/ ;
      str = str.split("");
      for (var x in str) {
        if (regEx.test(str[x])) {
          // A more general approach
          // possible because of modular arithmetic
          // and cyclic nature of rot13 transform
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
          rotCharArray.push(str[x].charCodeAt());
        }
      }
      str = String.fromCharCode.apply(String, rotCharArray);
      return str;
    }
 */
