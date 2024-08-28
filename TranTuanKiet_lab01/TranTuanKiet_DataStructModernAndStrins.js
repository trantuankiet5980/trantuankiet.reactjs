//Challenge#1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
    //1
    const [players1, players2] = game.players;
    //2
    const [gk, ...fieldPlayers] = players1;
    //3
    const allPlayers = [...players1, ...players2];
    //4
    const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
    //5
    const {team1, x: draw, team2} = game.odds;
    //6
    function printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
    }
    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    printGoals(...game.scored);
    //7
    team1 < team2 && console.log('Team 1 is more likely to win');
    team1 > team2 && console.log('Team 2 is more likely to win');


//Challenge#2
//1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}
//2
let sum = 0;
for (const odd of Object.values(game.odds)) {
    sum += odd;
}
console.log(sum / Object.values(game.odds).length);
//3
const odds = Object.entries(game.odds);
for (const [team, odd] of odds) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}
//4
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
