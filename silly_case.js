function sillycase(silly) {
  firstHalfNum = Math.ceil(silly.length / 2);
  singleChar = silly.split("");
    for ( var i = 0; i < singleChar.length; i++){
      if (i < firstHalfNum){
        singleChar[i] = singleChar[i].toLowerCase();
      } else {
        singleChar[i] = singleChar[i].toUpperCase();
      }
    }
  return singleChar.join("");
}