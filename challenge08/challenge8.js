"use strict"
const collectBMI = {
    fullName1: "Mark Miller",
    fullName2: "John Smith",
    mass1: "78",
    mass2: "92",
    height1: "1.69",
    height2: "1.95",
    calcBMI: function () {
        this.bmiMark = this.mass1 / this.height1 ** 2;
        this.bmiJohn = this.mass2 / this.height2 ** 2;
        return this.bmiMark;
        return this.bmiJohn;
    }
};
collectBMI.calcBMI();
console.log(collectBMI.bmiMark, collectBMI.bmiJohn);

if (collectBMI.bmiMark > collectBMI.bmiJohn) {
    console.log(`${collectBMI.fullName1}'s BMI (${collectBMI.bmiMark}) is higher than ${collectBMI.fullName2}'s(${collectBMI.bmiJohn})!`)
} else if (collectBMI.bmiJohn > collectBMI.bmiMark) {
    console.log(`${collectBMI.fullName2}'s BMI (${collectBMI.bmiJohn}) is higher than ${collectBMI.fullName1}'s(${collectBMI.bmiMark})!`)
}