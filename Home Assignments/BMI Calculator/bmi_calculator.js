function calculate_bmi(weightInkg, heightInMeters){
    var bmi = weightInkg/(heightInMeters**2);
    console.log(`Your BMI is ${bmi.toFixed(2)}`);
}


//const weightInkg = 60;
//const heightInMeters = 1.65;

//calculate_bmi(weightInkg, heightInMeters);


//manual test 
//w => 55 h => 1.70 should print Your BMI is 19.03
calculate_bmi(55, 1.70);

//w => 58 h => 1.68 should print Your BMI is 20.55
calculate_bmi(58, 1.68);