function scanLetters(input){
    var foundUpperCaseChar = false;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element >= 'A' && element <= 'Z'){
            foundUpperCaseChar = true;
            console.log(element);
            break;
        }
    }
    if (!foundUpperCaseChar){
        console.log(`There is no upper case letter in "${input}".`);
    }
}


const withUpperCaseChar = "there is storm coming to the East of the Philippines";
const withOutUpperCaseChar = "no more rainy days here, sun is about to show up";

scanLetters(withUpperCaseChar);
scanLetters(withOutUpperCaseChar);