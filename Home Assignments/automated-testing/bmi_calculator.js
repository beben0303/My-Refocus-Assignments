function calculate_bmi(weightInkg, heightInMeters){
    var bmi = weightInkg/(heightInMeters**2);
    return `Your BMI is ${bmi.toFixed(2)}`;
}

module.exports = calculate_bmi;