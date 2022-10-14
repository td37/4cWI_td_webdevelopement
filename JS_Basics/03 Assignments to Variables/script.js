// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

let banana = "Banane";
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let averageWeightBanana = 0.22;
let averageWeightApple = 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let bananasPerKilo = 1/averageWeightBanana;
let applesPerKilo = 1/averageWeightApple;
console.log("Man benötigt " + bananasPerKilo + " Bananen für 1kg und " + applesPerKilo + " Äpfel für 1kg.");

let pricePerBanana = averageWeightBanana*bananaPricePerKilo;
let pricePerApple = averageWeightApple*applePricePerKilo;
console.log("Banane kostet " + pricePerBanana + " Apfel kostet " + pricePerApple);

// Preis von 8 Äpfeln
let result = pricePerApple*8;
console.log(result);
// Preis von 17 Bananen
result = pricePerBanana*17;
console.log(result);
// Preis von 1 Tonne Äpfel
result = applePricePerKilo*1000;
console.log(result);
// Preis von 1 Tonne Bananen
result = bananaPricePerKilo*1000;
console.log(result);
