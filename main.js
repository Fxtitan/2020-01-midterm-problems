/******************
 * YOUR CODE HERE *
 ******************/
/*function fizzBuzzSingleNumber(num){
if(num !== 3 && num !== 5){
}if(num % 3 == 0 && num % 5 == 0){
return 'FizzBuzz';
}return num
if(num % 3 == 0 && num !== 5 ){

}
}*/

function fizzBuzzSingleNumber(num){
  if (num % 3 == 0 && num !== 5){
    return 'Fizz';
  }if (num % 5 == 0 && num !== 3){
    return 'Buzz';
  }if (num % 3 == 0 && num % 5 == 0){
    return 'FizzBuzz';
  }if (num !== 3 && num !== 5){
    return num;
  }
}

function getMiddleLetters(str){
  const emptyString = '';
for(let i = 0; i < str.length; i ++){
if (str.length % 2 == 0){
return str.length.slice(2,4);//if the word was 4 characters long?
}
}
}

function removeTrolls(arr){
  const theLowerKind = ['Something','NOTHING'];
    for(i = 0; i < arr.length; i++){
    theLowerKind += arr.charAt().toLowerCase();
    }return theLowerKind
  }

function cipher(){
}

function getNextLetter(){
const alpha = 'abcdefghijklmnopqrstuvwxyz';
for(i = 0; i < alpha.length; i ++){
  return alpha.indexOf(1);
}
}


//given an array of strings representing user posts, it returns an array of those posts that have at least one lower case 
//letter


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
