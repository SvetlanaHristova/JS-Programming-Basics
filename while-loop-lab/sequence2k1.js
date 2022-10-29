function sequence2k1(params) {
  let index = 0;
  let n = Number(params[index++]);
  let num = 1;

  while (num <= n) {
    console.log(num);
    num = num * 2 + 1;
  }
}
sequence2k1(["31"])