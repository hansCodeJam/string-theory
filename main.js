function crazyCase(str) {
  let newString = '';
      for(i = 0; i < str.length; i++) {
      newString += i % 2 == 1 ? str.charAt(i).toUpperCase() : str.charAt(i);
    }
  
  return newString;
}

function exclaim(str) {
  let newString = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '?') {
      newString = newString + '!';
    } else {
      newString = newString + str[i];
    }
  }
  return newString;
}

function ciEmailify(str) {
  let newString = '';

  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ') {
      newString = newString + '.';
    } else {
      newString = newString + str[i];
    }
  }
  return `${newString.toLowerCase()}@codeimmersives.com`;
  
}

function reverse(str) {
  let splitStr = str.split("");
  let reverseArray =  splitStr.reverse();
  let joinArray = reverseArray.join("");

  return joinArray;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let stringNoSpace = str.split(' ').join('');
  let newString = '';

    for(let i = 0; i < stringNoSpace.length; i++) {
    newString += i % 2 == 1 ? stringNoSpace.charAt(i).toUpperCase() : stringNoSpace.charAt(i);
  }
  
  return newString;
}

function titleCase(str) {
  let newStringToLowerCaseSplit = str.toLowerCase().split(' ');
  let newString = '';

  for(let i = 0; i < newStringToLowerCaseSplit.length; i++) {
    newString = newStringToLowerCaseSplit[0].toUpperCase() + newStringToLowerCaseSplit.substr(1);
  }

  return newString.join(' ');
}

function onlyVowels(str) {
  let newString = '';
  let vowel = 'aeiouAEIOU';

  for(let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])){
      newString = newString + str[i];
    }
    return newString;
  }
}

function crazyCase3SonOfCrazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1){
      newStr = newStr + str.charAt(i).toUpperCase()
    } else {
      newStr = newStr + str.charAt(i).toLowerCase()
    }
  }
  return newStr
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}