function calculate_bmi(weightInkg, heightInMeters){
    var bmi = weightInkg/(heightInMeters**2);
    console.log(`Your BMI is ${bmi.toFixed(2)}`);
}


const weightInkg = 60;
const heightInMeters = 1.65;

calculate_bmi(weightInkg, heightInMeters);
