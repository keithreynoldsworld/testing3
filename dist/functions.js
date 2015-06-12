/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    if(typeof a !== "number"){throw 'Invalid Input';}
    if(typeof b !== "number"){throw 'Invalid Input';}
    if(a>b){return a;}
    else{return b;}
    //.
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if(typeof a !== "number"){throw 'Invalid Input';}
    if(typeof b !== "number"){throw 'Invalid Input';}
    if(typeof c !== "number"){throw 'Invalid Input';}
    if(a>=b && a>=c){return a;}
    if(b>=c && b>=a){return b;}
    else{return c;} 
    //...
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(a){
    "use strict";
    if(typeof a !== "string"){throw 'Invalid Input';}
    if(a.length!==1){throw 'Invalid Input';}
    if(a==="y"){throw 'Only Sometimes';}
    if(a==="Y"){throw 'Only Sometimes';}
    if(a.toLowerCase() === "a"){return true;}
    if(a.toLowerCase() === "e"){return true;}
    if(a.toLowerCase() === "i"){return true;}
    if(a.toLowerCase() === "o"){return true;}
    if(a.toLowerCase() === "u"){return true;}
    else{return false;}

 //   if char isAVowel return true;
    //...
};

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". 
//That is, double every consonant and place an occurrence of "o" in between. 
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(string){
    "use strict";
    if(typeof string === 'number') {
        throw 'Invalid Input';
    }

    var vowels = 'aeiouAEIOU';
    var resultString = '';

    for(var i=0; i<string.length; i++) {
        var currentCharacter = string.charAt(i);
        
        if(vowels.indexOf(currentCharacter) !== -1) {
            resultString += currentCharacter;
        }
        else {
            resultString += currentCharacter + 'o' + currentCharacter;
        }
    }
    return resultString;
}
    //...


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies 
//(respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a){
    "use strict";
    if(typeof a !== "object"){
        throw "Invalid Input";
    }
    var total = 0;

    for(var keith = 0; keith < a.length; keith++){
        total += a[keith];
    }

    return total;
}

function multiply(a){
    "use strict";
    if(typeof a !== "object"){throw "Invalid Input";}
    var america = 1;

    for(var keith = 0; keith < a.length; keith++){america *= a[keith];}

    return america;
}
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(a){
    "use strict";
    if(typeof a !== "string"){throw "Invalid Input"}
    var keith = a.split("");
    keith.reverse();
    return keith.join("");

}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(a){
    'use strict';
    if(a instanceof Array !== true) {
        throw 'Invalid Input';
    } else if (a.length<2){
        throw 'Invalid Input';
    }
    for(var z=0; z<a.length; z++) {
        if (typeof a[z] !== 'string') {
            throw 'Invalid Input';
        }
    }
    var result = a.sort(function(w, b) {return w.length - b.length} );
    return result[result.length-1];
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords (a, b) {
    'use strict';
    if(a instanceof Array !== true) {
        throw 'Invalid Input';
    } else if (a.length < 2){
        throw 'Invalid Input';
    } else if (typeof b !== 'number') {
        throw 'Invalid Input';
    } 
    var answer = [];

    for(var z=0; z<a.length; z++) {
        if (typeof a[z] !== 'string') {
            throw 'Invalid Input';
        } 
        else if(a[z].length > b) {
            answer.push(a[z]);
        }
    }
    return answer;

}
// ---------------------
// Write a function charFreq() that takes a string and builds a 
//frequency listing of the characters contained in it. 
//Represent the frequency listing as a Javascript object.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq (keith) {
    'use strict';
    if (typeof keith !== 'string') {
        throw 'Invalid Input';
    } else if (keith == '') {
        throw 'Invalid Input';
    } 
    var hamburger = []
    var object = {};
    for(var m=0; m<keith.length; m++) {
        var house = keith[m];
        var pinky = 0;
        for(var z=0; z<keith.length; z++) {
            if (keith[z] == house) {
                pinky ++;
            }
        }
        object[house] = pinky;
    }
    for (var easy in object) {
        hamburger.push(easy + ': ' + object[easy]);
    }
    hamburger = hamburger.join(', ');
    return hamburger;
}