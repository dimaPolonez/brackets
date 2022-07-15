/* module.exports = function check(str, bracketsConfig) {

let arrString = [];
let arrOpen = [];

arrString = str.split('');

if (arrString.lentg % 2 != 0) {
  return false;
} else {
  arrString.forEach(function (value) {
    for (i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i].includes(value) === true) {
        arrOpen.push(String(i));
      }
    }
  });
  arrOpen.forEach((value) => {
    if (value === value + 2) {
      return false;
    }
  })
}
} */

/* const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];  */



const str = '([{}])';
const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];

let strNew = str;
let subStr = '';
let bracketNew = [];
bracketsConfig.forEach( (value) => {
  bracketNew.push(value.join(''));
});

if (strNew.length % 2 !== 0) {
  return false;
} else {
  while (strNew.length != 0){
    bracketNew.forEach((value) => {
      strNew.replace(value, '');
      console.log(strNew);
      console.log(strNew.length);
    })
  }
} 
console.log(bracketNew);


