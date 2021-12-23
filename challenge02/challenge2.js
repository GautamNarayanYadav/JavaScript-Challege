const gautamWeight = 55;
const gautamHeight = 1.66;
const santoshWeight = 60;
const santoshHeight = 1.44;
const gautamBMI = gautamWeight / gautamHeight ** 2;
const santoshBMI = santoshWeight / santoshHeight ** 2;
const comparison = santoshBMI >= gautamBMI;
console.log(gautamBMI, santoshBMI, comparison);
if (comparison) {
    console.log(`santosh (${santoshBMI}) is higher than Gautam (${gautamBMI})`);
} else {
    console.log('Gautam BMI is higher than Santosh BMI');
}
