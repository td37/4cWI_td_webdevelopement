let random = Math.random() * 1000;
let integerRandom = Math.round(random);

//wenn größer als 800
if (integerRandom > 800) {
    console.log(integerRandom + " ist größer als 800")
}
//wenn zw. 500 und 800
if (integerRandom > 500 && integerRandom < 800){
    console.log(integerRandom + " ist zwischen 500 und 800");
}
//wenn zw. 200 und 500
if (integerRandom > 200 && integerRandom < 500){
    console.log(integerRandom + " ist zwischen 200 und 500");
}
//wenn zw. 0 und 200
if (integerRandom > 0 && integerRandom < 200){
    console.log(integerRandom + " ist zwischen 0 und 200");
}

