function maxNumber(params) {
    let index=0;
    let commond=params[index++];
    let max=Number.MIN_SAFE_INTEGER;
     while (commond!=="Stop") {
        let num=Number(commond);
        if (num>max) {
            max=num;
        }
        commond=params[index++];
     }
     console.log(max);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])

