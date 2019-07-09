// Simple simulator of casino roulette. 
let maxRangeValue;
let rangeValue;
let userValue;
let prize;
let userPrize;
let maxPrize;
let attempt;
const maxAttempt = 3;
const rangeStep = 4;
const defaultRangeValue = 8;
const defaultPrize = 100;
const maxPrizeMultiplyer = 2;
const prizeDivider = 2;
for (; ;) {
    maxRangeValue = defaultRangeValue;
    userPrize = 0;
    maxPrize = defaultPrize;
    if (!confirm('Do you want to play a game?')) {
        alert('You did not become a billionaire, but can.');
        break;
    } else {
        do {
            prize = maxPrize;
            rangeValue = Math.floor(Math.random() * (maxRangeValue + 1));   
            // alert(rangeValue); // for checking
            for (attempt = maxAttempt; attempt >= 1; attempt--) {
                userValue = parseInt(prompt(
                    'Choose a roulette pocket number from 0 to ' + maxRangeValue + '\n Attempts left: ' 
                    + attempt + '\n Total prize: ' + userPrize + '$' +
                    '\n Possible prize on current attempt: ' + prize + '$', 0));
                if (userValue === rangeValue) {
                    break;
                } else {
                    if (attempt === 1) { // zeroing the prize after the last attempt
                        prize = 0;
                        userPrize = 0;
                    } else {
                        prize /= prizeDivider;
                    }                    
                }
            }
            userPrize += prize;
            if (prize > 0) {
                if (!confirm('Congratulation, you won! Your prize is: ' + prize + '$. Do you want to continue?')) {
                    break;
                }
                // alert(userPrize);  for checking
            }
            maxPrize *= maxPrizeMultiplyer; // prize raise before the next game
            maxRangeValue += rangeStep; // range value raise before the next game
        } while (prize > 0);
        alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
    }
}