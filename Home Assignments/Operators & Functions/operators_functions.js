function convertCelciusToKelvin(tempCelcius){
    let tempKelvin = tempCelcius + 273.15;
    return tempKelvin;
}

function convertFahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) * (5/9) + 273.15;
    return tempKelvin;
}

console.log(convertCelciusToKelvin(30))
console.log(convertFahrenheitToKelvin(100))

function computeTip(totalBill){
    let tip = totalBill * 0.10;
    return tip;
}

console.log(computeTip(2500));