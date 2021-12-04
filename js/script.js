function piedra(player1){
    alert("piedra");
}

function papel(){
    alert("papel");
}

function tijera(){
    alert("tijera");
}


function jugarPlayer1() {
    var player1;
    var opcion;

    while (typeof player1 == "undefined") {
        
        opcion = opcion.toUpperCase();

        switch (opcion) {
            case "TIJERA":
                player1 = 0;
                break;
            case "PAPEL":
                player1 = 1;
                break;
            case "PIEDRA":
                player1 = 2;
                break;
            default:
                alert("Debes escribir una de las opciones Piedra, Papel o Tijera");
                break;
        }
    }
    return player1;
}

const opciones = ["TIJERA", "PAPEL", "PIEDRA"];
var player1;
var machine;
var winner;
var rondas = parseInt(prompt("Hola Player1, ¿cuantas rondas desea jugar? "));

/* for (var i = 1; i <= rondas; i++) {

    player1 = parseInt(jugarPlayer1());
    machine = Math.floor(Math.random() * 3); */

    switch (player1) {
        case 0:         // Usuario eligio PIEDRA
            switch (machine) {
                case 0:     // Machine eligio PIEDRA
                    winner = "Empate"
                    alert("Empataste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Player1"
                    alert("Empataste esta ronda");
                    break;
                case 2:     // Machine eligio TIJERA
                    winner = "Machine"
                    alert("Empataste esta ronda")
                    break;
            }
            break;
        }
    }

/*
for (var i = 1; i <= rondas; i++) {

    player1 = parseInt(jugarPlayer1());
    machine = Math.floor(Math.random() * 3);

    switch (player1) {
        case 0:         // Usuario eligio TIJERA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Empate"
                    alert("Empataste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Player1"
                    alert("Empataste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Machine"
                    alert("Empataste esta ronda")
                    break;
            }
            break;


        case 1:         // Usuario eligio PAPEL
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Machine"
                    alert("Empataste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Empate"
                    alert("Empataste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Player1"
                    alert("Empataste esta ronda");
                    break;
            }
            break;
        case 2:         // Usuario eligio PIEDRA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Player1"
                    alert("Empataste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Machine"
                    alert("Empataste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Empate"
                    alert("Empataste esta ronda");
                    break;
            }
            break;
    }

    document.write("<br><br>JUGADA " + i);
    document.write("<br>Player1 : " + opciones[player1]);
    document.write("<br>Machine : " + opciones[machine]);
    document.write("<br>El ganador es : " + winner);

    

}
*/