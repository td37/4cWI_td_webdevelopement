// Erstelle eine Zufallszahl zwischen 5 und 10
let random = Math.random() * 6 + 5;
let randomFloor = Math.floor(random);
// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.
switch (randomFloor) {
    case 10:
        console.log("ten");
        break;
    case 9:
        console.log("nine");
        break;
    case 8:
        console.log("eight");
        break;
    case 7:
        console.log("seven");
        break;
    case 6:
        console.log("six");
        break;
    case 5:
        console.log("five");
        break;
}