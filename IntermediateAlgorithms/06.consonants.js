/**
 * Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
	function check(obj) {
		return [ 'a', 'i', 'u', 'e', 'o' ].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
	}

	return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

translatePigLatin('consonant');
