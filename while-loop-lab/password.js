function password(params) {
    let index = 0;
    let username = params[index++];
    let rightPassword = params[index++];
    let pass = params[index++];
    while (pass !== rightPassword) {
        pass = params[index++];
    }
    console.log(`Welcome ${username}!`);
}

password(["Gosho", "secret", "secret"])

