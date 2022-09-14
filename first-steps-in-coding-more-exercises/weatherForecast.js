function weatherForecast (input) {
    let weather=input[0]
    if( weather==="sunny") {weather="It's warm outside!"}    else{weather="It's cold outside!"}
    console.log(weather)    
}
weatherForecast(["cold"])
