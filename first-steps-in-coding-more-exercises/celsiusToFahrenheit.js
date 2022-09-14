function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = (celsius * 1.8 + 32).toFixed(2);

    console.log(fahrenheit);
}
celsiusToFahrenheit([25])