document.getElementById("convert").addEventListener("click", function () {
    convertCurrency();

})

function convertCurrency() {
    let amountOfMoney = document.getElementById("amountOfMoney").value

    if (isNaN(amountOfMoney)) {
        alert(amountOfMoney + "is not a number!")
    }
    else {
        var convertedAmountOfMoney = amountOfMoney/0.00073;
        console.log(convertedAmountOfMoney);
    }

}

