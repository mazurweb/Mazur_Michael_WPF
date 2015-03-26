/**
 * Created by Mikemaz2005 on 3/26/2015.
 */
/*
 Michael Mazur
 032015 SDI Functions Assignment
 3/26/2015
 */

//function for FL Lottery Numbers
function flLottery(min, max, num){

    //Variable to store lottery numbers in an array
    var flLotteryNumbers = [];

    for(var i = 0; i < num; i++){
        //Calculate and store random lottery number
        var randomLotteryNumber = Math.round(Math.random() * (max - min) + min);
        //Stores the random lottery numbers into the array of flLotteryNumbers
            flLotteryNumbers[i] = randomLotteryNumber;
    }
    //Returns flLotteryNumbers
    return flLotteryNumbers;
}

//function for powerball
function powerBall(min, max, num){
    var powerballNumbers = [];

    for(var i = 0; i < num; i++){
        //Calculate and store random powerball numbers
        var randomPowerballNumbers = Math.round(Math.random() * (max - min) + min);
        //stores the random powerball numbers into the array of powerballNumbers
        powerballNumbers[i] = randomPowerballNumbers;
    }
    //Returns powerballNumbers
    return powerballNumbers;
}
//function for last powerball number
function lastPowerball(min, max){
    //Store random number for last powerball number
    var lastPowerballNumber = Math.round(Math.random() * (max - min) + min);

    return lastPowerballNumber;
}

var flLotteryNumbs = flLottery(1, 53, 6);
var powerballNumbs = powerBall(1, 59, 5);
var lastPbNumb = lastPowerball(1, 35);

console.log("Your Florida Lottery Numbers are: " + flLotteryNumbs);
console.log("Your Powerball Numbers are: " + powerballNumbs + "; And your last powerball number is " + lastPbNumb);