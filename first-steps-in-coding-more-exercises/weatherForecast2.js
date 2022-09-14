function weatherForecast2 (input) {
    let weather=Number( input[0])
    if(weather<=35 && weather>=26) {
    console.log ("Hot")
    }else if (weather<=25.9 && weather>=20.1){ 
    console.log ("Warm")
    }else if (weather<=20 && weather>=15) {
    console.log ("Mild")
    }else if(weather<=14.9 && weather>=12){
    console.log ("Cool")
    }else if (weather<=11.9 && weather>=5){
    console.log ("Cold")
    }else
    console.log ("unknown")
}
weatherForecast2(["35"])
