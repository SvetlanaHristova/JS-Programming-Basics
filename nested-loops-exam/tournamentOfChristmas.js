function tournamentOfChristmas(params) {
   let index = 0;
   let day = Number(params[index++]);
   let sum = 0;
   let winDay = 0;

   for (let i = 1; i <= day; i++) {
      let win = 0;
      let lose = 0;
      let game = params[index++];

      while (game !== "Finish") {
         let type = params[index++];
         switch (type) {
            case "win": win++; break;
            case "lose": lose++; break;
         }
         game = params[index++];
      }

      let sumPerDay = win * 20;

      if (win > lose) {
         winDay++;
         sumPerDay *= 1.1;
      }
      sum += sumPerDay;
   }

   if (winDay > day / 2) {
      sum *= 1.2;
      console.log(`You won the tournament! Total raised money: ${sum.toFixed(2)}`);
   } else {
      console.log(`You lost the tournament! Total raised money: ${sum.toFixed(2)}`);
   }
}