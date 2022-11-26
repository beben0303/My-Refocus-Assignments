let cyclingPerMinute = 30;
let caloriesPerThirtyMinute = 225;
let daysOfCycling = 15;

let cyclingPerHour =  cyclingPerMinute/60;
let totalCaloriesBurned = daysOfCycling*caloriesPerThirtyMinute;

console.log(`Great work, Sam! After ${cyclingPerHour} hours of cycling every day for a week, you may lose a total of ${totalCaloriesBurned} calories.`)


let savingsGoal = 10000;
let amountSaved = 7500;

let savingsNeedPercentange = (savingsGoal-amountSaved)*100/savingsGoal;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${savingsNeedPercentange}% away from your goal of saving ₱${savingsGoal.toLocaleString()}.`)
