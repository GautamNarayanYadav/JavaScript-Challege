const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy!');
}
else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy!');
}