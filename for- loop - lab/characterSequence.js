function characterSequence(params) {
    let index = 0;
    let text = params[index];
    index++;
    for (i = 0; i < text.length; i++) {
        let letter = text.charAt(i);
        console.log(letter);
    };
};
characterSequence(["ice cream"]);