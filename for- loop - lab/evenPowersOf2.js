function evenPowersOf2(params) {
  let index = 0;
  let n = Number(params[index]);
  index++;
  for (let i = 0; i <= n; i += 2) {
    let num = Math.pow(2, i);
    console.log(num);
  };
};
evenPowersOf2(["20"]);