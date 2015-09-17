/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if ( a > b ) return a
   	return b
}
/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */


var maxOfThree = function getmaxOfThree(a, b, c){
    var d = max(a,b)
    var maxthree = max(d,c)
    return maxthree
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

// PART 1.5

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(array){
	var d;
	var m = 0;
	for (var i = 0; i <= array.length-2; i++){
		// console.log(i);
		if (typeof array[i] === "string" || typeof array[i+1] === "string")
		{

			return NaN;
		}
		d = max(array[i],array[i+1])
			if (d > m) {
				m = d;
				}
	}
return m
}

// console.log(maxOfArray([1,2,"bucklemyshoe"]))
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([2,4,23]) === 23)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))
	

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    var vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (var i = 0; i < vowels.length; i++){
		if (symbol === vowels[i]){
			return true
		}
	}		
	return false
}
// console.log(isVowel("E"))

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

function rovarspraket(letters){
    var newrs = []
    var count = 0
    for (var i = 0; i < letters.length; i++){
		if (isVowel(letters[i]) === false){
    		newrs += letters[i] + 'o' + letters[i]
    	}
    	if (isVowel(letters[i]) === true){
    		newrs += letters[i]
    	}
    }
    if (typeof letters != 'string'){
    	return letters.toString()
    }
    return newrs
}

// console.log(rovarspraket('b'))


console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
	var revstr=''
	
	for(var i = str.length-1; i >= 0; i--){
		// console.log(typeof revstr)
		revstr += str[i]
	}
	return revstr
}
// console.log(reverse('books'))
console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var sensplit = sentence.split(" ")
    var sensplitnew = ''
    var sensplitcount = 0
    var longword = ''
    for (var i = 0; i < sensplit.length; i++){
    	// console.log(sensplit[i])
    	if (sensplit[i].match("\'")){
    		sensplit[i] = sensplit[i].replace("\'","")
    		// continue
		}
		// longword += sensplit[i]
    	if (sensplitcount < sensplit[i].length){
    		sensplitcount = sensplit[i].length
    		longword = sensplit[i]
    	}
    }	
    return longword
    // return sensplit
}
// console.log(findLongestWord("don't mess with Texas"))
console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



