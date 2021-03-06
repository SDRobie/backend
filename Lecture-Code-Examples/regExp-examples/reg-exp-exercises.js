//Write a function that accepts a number and uses regular expressions to check if the number begins with a 1, 2, or 3
// and returns true if so.  Otherwise, return false.


function validateNumber(num) {
    
    'use strict';
    var check = /^(1|2|3)/;
    var check2 = /^[123]/;    //alternate solution for reg expression  - only has to match 1 of the items in the set
    var check3 = /^[1-3]/;    //alternate solution for reg expression - only has to match 1 or 2 or 3 in the set
    
    return check3.test(num);
    // or not have any variables:
    // return /^[1-3]/.test(num);

}

console.log('\nCheck the first digit\n');
console.log(validateNumber(123)); // true
console.log(validateNumber(248)); // true
console.log(validateNumber(8)); // false
console.log(validateNumber(321)); // true
console.log(validateNumber(9453)); // false


//Write a function that accepts a number and uses regular expressions to check if the number ends with a 1, 2, or 3
// and returns true if so.  Otherwise, return false.

function validateNumber1(num) {
    
    'use strict';
    var check = /(1|2|3)$/;
    var check2 = /[123]$/;    //alternate solution for reg expression  - only has to match 1 of the items in the set
    var check3 = /[1-3]$/;    //alternate solution for reg expression - only has to match 1 or 2 or 3 in the set
    
    return check3.test(num);
    // or not have any variables:
    // return /^[1-3]/.test(num);

}



console.log('\nCheck the last digit: \n');
console.log(validateNumber1(123)); // true
console.log(validateNumber1(248)); // false
console.log(validateNumber1(8)); // false
console.log(validateNumber1(321)); // true
console.log(validateNumber1(9452)); // true


//Write a function that accetps a string arugment and return true if that string is a digit. Otherwise, return false. User regular expressions.

function myIsDigit (num) {
  
// Using variables and constructor for Reg Exp    
//    var dig = new RegExp('^[0-9]$');
//    var dig1 = /^\d$/;                  //alternate solution - you're only checking one digit. You could do '/ /'
//    return dig1.test(num);  
    
    //The '1-liner solution' -  ditch the variables and go with a literal reg exp:
    return /^\d$/.test(num);
    
}

console.log('\nCheck for a single digit:\n')
console.log(myIsDigit('')); // false
console.log(myIsDigit('7')); // true
console.log(myIsDigit(' ')); // false
console.log(myIsDigit('a')); // false
console.log(myIsDigit('2')); // true
console.log(myIsDigit('a5')); // false
console.log(myIsDigit('14')); // false




// Write af function that accepts a date and checks to see if the date is formatted '00-00-0000 00:00'

function dateChecker (myDate) {
    
    //Brenna is checking on why the RegExp constructor doesn't work
    //var checkDate = new RegExp('^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}$');
    var checkDate2 = /^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}$/;
    return checkDate2.test(myDate);
    
    
} 

console.log('\nCheck dates: \n');
console.log(dateChecker('01-09-2016 01:20')); //true
console.log(dateChecker('01-09-2016 01;20')); //false
console.log(dateChecker('01_09_2016 01:20')); //false
console.log(dateChecker('14-10-1066 12:00')); //true
console.log(dateChecker('Tenth of January')); //false


//Write a function that accepts a date and checks to see if the date is formatted '00/00/0000 00:00'

function dateCheck(newDate) {
    
    var myDate = /^\d{2}\/\d{2}\/\d{4}\s\d{2}:\d{2}$/;  //escape the '/' 
    var myDate2 = /^\d{2}[/]\d{2}[/]d{4}\s\d{2}:\d{2}$/;
    return myDate.test(newDate);
}



console.log('\nChecking a different date format: \n');
console.log(dateCheck('01/09/2016 01:20')); //true
console.log(dateCheck('01/09/2016 01;20')); //false
console.log(dateCheck('01_09_2016 01:20')); //false
console.log(dateCheck('14/10/1066 12:00')); //true
console.log(dateCheck('Tenth of January')); //false


// Write a function that takes a string and returns the number of vowels in that string. Use a regular expressin to find the vowels in the string.

function countVowels(str) {
    var vowelCheck = /[aeiou]/gi;
    
    if (vowelCheck.exec(str) !== null) {
        return str.match(vowelCheck).length;
    } else {
        return 0;
    }
    
    // alternate solution
//    var matchArray = str.match(vowelCheck);
//    return matchArray ? matchArray.length : 0;  // if the matchArray.length is null
}




console.log('\nCount vowels in a string: \n');
console.log(countVowels('bbababba'));   // 3
console.log(countVowels('hellohellohellohello'));   // 8
console.log(countVowels('krtmndsptzxvbmnwrt'));   // 0
console.log(countVowels('asljdflsajfieworiuewnvndsfbawofejawefjiofajdsdf'));    // 16
console.log(countVowels('asljdflsAjfiewOriuEwnvndsfbawofejawefjIOfajdsdf'));    // 16



//Write a function that takes a string and returns the number of lowercase letters in that string. Use a regular expression to find the lowercase
//letters in the string.

function lowercaseCount(str1) {
    var lower = /[a-z]/g;
    var results = str1.match(lower);
    
    return results ? results.length : 0;
    
    
}



console.log('\nCount the number of lowercase letters in a string: \n');
console.log(lowercaseCount('abc')); // 3
console.log(lowercaseCount('abcABC123')); // 3
console.log(lowercaseCount('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 3
console.log(lowercaseCount('')); // 0;
console.log(lowercaseCount('ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~')); // 0
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz')); // 26


// Write a function that takes an array of filenames and returns an aray of only the PNG images.

function findPNG(arr) {
    var png = /\.png$/;
    var finalArr = []; 
  
    for (var i = 0; i < arr.length; i++) {
        if (png.test(arr[i])) {
            finalArr.push(arr[i]);
        }
    }
    
    return finalArr; 
}



console.log('\nReturn an array of filenames with .png extensions\n');
console.log(findPNG(['img01.jpeg', 'file.png', 'xrf214579.gif', 'image.png', 'dogs.tif']));   // ['file.png', 'image.png']
console.log(findPNG(['asfldjasdfjpng.jpeg', 'pngsagsdfj.png', '.pngsdfasdfsaf.gif', '.pngasdfasifsda.png', 'uiuiuiiaisdfi.tif']));    
// ['pngsagsdfj.png', '.pngasdfasifsda.png']