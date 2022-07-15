module.exports = function check(str, bracketsConfig) {

  let strNew = str;
  let bracketNew = [];
  let lenOld = null;
  
  bracketsConfig.forEach( (value) => {
    bracketNew.push(value.join(''));
  });
  
  if (strNew.length % 2 !== 0) {
    return false;
  } else {
    while (strNew.length != 0){
      bracketNew.forEach((value) => {
        strNew = strNew.replace(value, '');
      })
      if (strNew.length === lenOld){
        break;
      }
      lenOld = strNew.length;
    }
    return (strNew.length === 0);
  } 
  
} 