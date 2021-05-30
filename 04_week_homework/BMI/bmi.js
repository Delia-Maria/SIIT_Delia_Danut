/*
We’re at a nutrition center, and we have the data from our customers ( name, gender, height,
weight). Write a JS script that prints in browser Console the following info for each user:

John Doe | M | BMI: 24 | Normal Weight
Mary Anne | F | BMI: 30 | Obese

BMI formula:
BMI = x KG / (y M * y M)
x=bodyweight in KG
y=height in m

● If your BMI is less than 18.5, it falls within the underweight range.
● If your BMI is 18.5 to <25, it falls within the normal.
● If your BMI is 25.0 to <30, it falls within the overweight range.
● If your BMI is 30.0 or higher, it falls within the obese range
*/


var personList = [{
        name: "Mary Anne",
        gen: "F",
        weight: 100,
        height: 1.70,

    },
    {
        name: "John Doe",
        gen: "M",
        weight: 80,
        height: 1.80,

    }
]


for (var i = 0; i <= personList.length; i++) {
    var personCurrent = personList[i];
    var bmi = Math.round(personCurrent.weight / (personCurrent.height * personCurrent.height));

    function getBMIString(bmi) {
        if (bmi <= 18.5) {
            return "underweight"
        } else if (bmi <= 25) {
            return "normal"
        } else if (bmi <= 30) {
            return "overweight"
        } else {
            return "obese"
        }
    }

    console.log(
        "Name: ", personCurrent.name,
        " | BMI: ", bmi,
        " | BMI String:", getBMIString(bmi)
    )
}