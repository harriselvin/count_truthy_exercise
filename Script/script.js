let booleanValues = [true, true, false, true, false]
let value = 0

function calcBool() {
    for (bool of booleanValues) {

        if (bool == true) {
            console.log(bool);
            value++
            console.log(value);
        }
    }
}

calcBool()