module.exports = function transform(txt, code) {
  if (typeof txt !== "string") throw new TypeError("transform(txt) wants a string!");
  let baseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let replaceChars = [
        // Japanglish
        "大乃匸占巳斤追井l子力レ瓜冂回尸只尺乙匕凵ソ山乂平弓大乃匸占巳斤追井l子力レ瓜冂回尸只尺乙匕凵ソ山乂平弓",
        // Diacritic
        "åƀçðèƒġħíĵķľṁñõþƣŗŝŧùʋŵχÿžÅßÇÐÈƑĠĦÍĴĶĽṀÑÕÞƢŖŜŦÙƲŴΧŸŽ",
        // Rotate-13
        "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    ];
    let selected = 0;
    try{
      if (code < 0 || code > 2){
        selected = 0;
      }
    }catch{
      selected = 0;
    }
    let result = txt;
    if(txt){
      result = '';
      var limit = txt.length;
      var character = "";
      var indexInBaseChars = -1;
      var x = 0;
      for(x = 0; x < limit; x++){
          character = txt[x];
          indexInBaseChars = baseChars.indexOf(character);
          if(indexInBaseChars > -1){
              result = result + replaceChars[selected][indexInBaseChars];
          }else{
              result = result + character;
          }
      }
    }
    return result
}
