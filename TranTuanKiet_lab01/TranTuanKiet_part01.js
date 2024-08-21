//#Challenge 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log('---Challenge 1---');
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

//#Challenge 2
console.log('---Challenge 2---');
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

//#Challenge 3
console.log('---Challenge 3---');
let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;
if (dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphins win with an average score of ${dolphinsAverageScore}`);
}
else if (dolphinsAverageScore < koalasAverageScore) {
    console.log(`Koalas win with an average score of ${koalasAverageScore}`);
}
else {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAverageScore}`);
}
//#Bonus 1
let dolphinsAverageScoreBonus1 = (97 + 112 + 101) / 3;
let koalasAverageScoreBonus1 = (109 + 95 + 123) / 3;
if (dolphinsAverageScoreBonus1 > koalasAverageScoreBonus1 && dolphinsAverageScoreBonus1 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverageScoreBonus1}`);
}
else if (dolphinsAverageScoreBonus1 < koalasAverageScoreBonus1 && koalasAverageScoreBonus1 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverageScoreBonus1}`);
}
else {
    console.log(`No team wins the trophy!`);
}
//#Bonus 2
let dolphinsAverageScoreBonus2 = (97 + 112 + 101) / 3;
let koalasAverageScoreBonus2 = (109 + 95 + 106) / 3;
if (dolphinsAverageScoreBonus2 > koalasAverageScoreBonus2 && dolphinsAverageScoreBonus2 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAverageScoreBonus2}`);
}
else if (dolphinsAverageScoreBonus2 < koalasAverageScoreBonus2 && koalasAverageScoreBonus2 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAverageScoreBonus2}`);
}
else {
    console.log(`No team wins the trophy!`);
}
//#Challenge 4
console.log('---Challenge 4---');
let bill = 275;
if (bill >= 50 && bill <= 300) {
    console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`);
}else {
    console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`);
}
bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


