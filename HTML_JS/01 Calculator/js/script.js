
function getInputOfUser() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Es sind nicht alle Eingaben Zahlen");
    }
    else {
        let returnValue = { num1: num1, num2: num2 };
        return returnValue;
    }

}

function addNumbers() {
    let values = getInputOfUser();
    let result = values.num1 + values.num2;
    document.getElementById("output").innerHTML = result;
}

function subtractNumbers() {
    let values = getInputOfUser();
    let result = values.num1 - values.num2;
    document.getElementById("output").innerHTML = result;
}

function multiplyNumbers() {
    let values = getInputOfUser();
    let result = values.num1 * values.num2;
    document.getElementById("output").innerHTML = result;
}

function divideNumbers() {
    let values = getInputOfUser();
    let result = values.num1 / values.num2;
    document.getElementById("output").innerHTML = result;
}