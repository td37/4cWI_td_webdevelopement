// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert: 
// X X X X 
// O O O O 
// X X X X 
// O O O O 
for (let i = 0; i<4; i++){
    let output = "";
    for(let j = 0; j<4; j++){
        if(i%2!=0){
            output  += "X";
        }
        else {
            output += "O"
        }
       
    }
    console.log(output);
}
// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
// XX X XX X 
// X    X X   X 
// X            X
// X            X

