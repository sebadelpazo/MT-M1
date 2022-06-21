'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var res = 0;
  var pos = 0;
for (let i = num.length - 1; i >= 0; i++){
  res = res + num[i] * 2 ** pos 
  pos++
}
return res;
}

function DecimalABinario(num) {
  // tu codigo aca
  var res = '';
while(num !== 0){
  res = num % 2 + res ;
  num = Math.floor(num/2)
}
return res;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}