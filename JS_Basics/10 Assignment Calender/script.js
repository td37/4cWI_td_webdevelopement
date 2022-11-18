let month = 2;
let monthLength=0;
let startDayOfWeek = 3;
let dayOfMonth = 1;
let empty = "|    ";
let daysInAWeek = 7;
const daysOnAPage = 35;
let header = "| MO | DI | MI | DO | FR | SA | SO |"

switch (month) {
    case 1:
        monthLength = 31;
        break;
    case 2:
        monthLength = 28;
        break;
    case 3:
        monthLength = 31;
        break;
    case 4:
        monthLength = 30;
        break;
    case 5:
        monthLength = 31;
        break;
    case 6:
        monthLength = 30;
        break;
    case 7:
        monthLength = 31;
        break;
    case 8:
        monthLength = 31;
        break;
    case 9:
        monthLength = 30;
        break;
    case 10:
        monthLength = 31;
        break;
    case 11:
        monthLength = 30;
        break;
    case 12:
        monthLength = 31;
        break;
}

console.log(header);

let outputPerWeek = "";


    for (let j = 1; j <= daysOnAPage; j++) {
        if (j < startDayOfWeek || dayOfMonth > monthLength) {
            outputPerWeek += empty;
        }
        else {
            if (dayOfMonth < 10) {
                outputPerWeek += "|  " + dayOfMonth + " ";
                dayOfMonth++;
            }
            else {
                outputPerWeek += "| " + dayOfMonth + " ";
                dayOfMonth++;
            }
        }
        if (j % 7 == 0) {
            outputPerWeek += "|";
            console.log(outputPerWeek);
            outputPerWeek = "";
        }

    }


