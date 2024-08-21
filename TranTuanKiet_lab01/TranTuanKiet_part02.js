//Challenge #1
console.log('---Challenge 1---');
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAverageScoreChallenge1 = calcAverage(44, 23, 71);
let koalasAverageScoreChallenge1 = calcAverage(65, 54, 49);
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log(`No team wins!`);
    }
}
console.log('Data 1')
checkWinner(dolphinsAverageScoreChallenge1, koalasAverageScoreChallenge1);
let dolphinsAverageScoreChallenge2 = calcAverage(85, 54, 41);
let koalasAverageScoreChallenge2 = calcAverage(23, 34, 27);
console.log('Data 2')
checkWinner(dolphinsAverageScoreChallenge2, koalasAverageScoreChallenge2);

//Challenge #2
console.log('---Challenge 2---');
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${total}`);

//Challenge #3
console.log('---Challenge 3---');
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
}
else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}

//Challenge #4
console.log('---Challenge 4---');
let billsChallenge4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tipsChallenge4 = [];
let totalsChallenge4 = [];
for (let i = 0; i < billsChallenge4.length; i++) {
    tipsChallenge4.push(calcTip(billsChallenge4[i]));
    totalsChallenge4.push(billsChallenge4[i] + tipsChallenge4[i]);
}
function calcAverageChallenge4(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(`Bills: ${billsChallenge4}`);
console.log(`Tips: ${tipsChallenge4}`);
console.log(`Totals: ${totalsChallenge4}`);
console.log(`Average: ${calcAverageChallenge4(totalsChallenge4)}`);