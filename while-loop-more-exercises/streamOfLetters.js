function streamOfLetters(params) {
   let validLetter = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
   let i = 0;
   let word = "";
   let text = "";
   let isC = false;
   let isO = false;
   let isN = false;
   let currentSimvol = params[0];
   while (currentSimvol !== "End") {
      for (let j = 0; j < validLetter.length; j++) {
         let validChar = validLetter[j];
         let isValid = currentSimvol === validChar;
         if (isC === true && isO === true && isN === true) {
            isC = false;
            isN = false;
            isO = false;
            text += word + " ";
            word = "";
         }
         if (isValid) {
            if (validChar === "c") {
               if (isC === false) {
                  isC = true;
               } else {
                  word += currentSimvol;
               }
            } else if (validChar === "o") {
               if (isO === false) {
                  isO = true;
               } else {
                  word += currentSimvol;
               }
            } else if (validChar === "n") {
               if (isN === false) {
                  isN = true;
               } else {
                  word += currentSimvol;
               }
            } else {
               word += currentSimvol
            }
            j++;
         }
      }
      i++;
      currentSimvol = params[i];
   }
   console.log(text);
}
streamOfLetters(["H", " 6", ":", "n", "e", "l",
   "l", "o", "o", "%", "c", "t",
   "c", "h", "o", "e",
   "r", "e", "n", "e", "End"
])
streamOfLetters(["o", "S", "%", "o", "l", "^",
   "v", "e", "c", "n", "&", "m", "e", "c",
   "o", "n", "End"])
streamOfLetters(["%", "!", "c", "^", "B", "`",
   "o", "%", "o", "o", "M", ")", "{", "n", "/", "A", "D", "End"])