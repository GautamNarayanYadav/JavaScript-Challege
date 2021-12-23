const calAverage = (x, y, z) => {
    let average = (x + y + z) / 3;
    return average;
};
const avgDolphins = calAverage(85, 54, 41);
const avgKoalas = calAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins win');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas win');
    } else {
        console.log('no team win');
    }
}
checkWinner(avgDolphins, avgKoalas);