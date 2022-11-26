function alertOxygenObservation(SpO2){
    if (SpO2 > 95){
        return `${SpO2}% >> Normal Reading.`
    } else if (SpO2 == 95){
        return `${SpO2}% >> Acceptable to continue home monitoring.`
    }else if (SpO2 >= 92 && SpO2 < 95){
        return `${SpO2}% >> Seek advice from health professionals.`
    }else{
        return `${SpO2}% >> Seek urgent medical advice.`
    }
}

console.log(alertOxygenObservation(97))
console.log(alertOxygenObservation(96))
console.log(alertOxygenObservation(95))
console.log(alertOxygenObservation(94))
console.log(alertOxygenObservation(92))
console.log(alertOxygenObservation(91))

function alertPulseReading(pulseRate){
    if (pulseRate >= 40 && pulseRate <= 100){
        return `${pulseRate} >> Normal reading.`
    }else if (pulseRate >= 101 && pulseRate <= 109){
        return `${pulseRate} >> Acceptable continue home monitoring.`
    }else if (pulseRate >= 110 && pulseRate <= 130){
        return `${pulseRate} >> Seek advice from health professionals.`
    }else if (pulseRate >= 131){
        return `${pulseRate} >> Seek urgent medical advice.`
    }else{
        return `${pulseRate} >> Out of range.`
    }
}

console.log(alertPulseReading(40))
console.log(alertPulseReading(100))
console.log(alertPulseReading(101))
console.log(alertPulseReading(109))
console.log(alertPulseReading(110))
console.log(alertPulseReading(130))
console.log(alertPulseReading(131))
console.log(alertPulseReading(140))
console.log(alertPulseReading(20))