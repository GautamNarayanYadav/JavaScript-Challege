function calcTip(data) {
    if (data >= 50 && data <= 300) {
        return data * 0.15;
    } else
        return data * 0.20;

}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
function calcTip1(data1) {
    return data1 >= 50 && data1 <= 300 ? data1 * 0.15 : data1 * 0.20;
}
const bills1 = [125, 555, 44];
const tips1 = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])];
const totals = [bills[0] + calcTip1(bills[0]), bills[1] + calcTip1(bills[1]), bills[2] + calcTip1(bills[2])];
console.log(bills1, tips1, totals);

