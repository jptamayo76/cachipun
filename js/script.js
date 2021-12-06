// "TIJERA" = 0
// "PAPEL"  = 1
// "PIEDRA" = 2

function cachipun(tiradaplayer, tiradamachine) {
    var player1, machine, winner;

    player1 = parseInt(tiradaplayer);
    machine = parseInt(tiradamachine);

    switch (player1) {
        case 0:         // Usuario eligio TIJERA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Empate";
                    console.log("Empataste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Player1";
                    contadorPlayer++;
                    console.log("Ganaste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Machine";
                    contadorMachine++;
                    console.log("Perdiste esta ronda");
                    break;
            }
            break;

        case 1:         // Usuario eligio PAPEL
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Machine"
                    contadorMachine++;
                    console.log("Perdiste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Empate"
                    console.log("Empataste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Player1"
                    contadorPlayer++;
                    console.log("Ganaste esta ronda");
                    break;
            }
            break;
        case 2:         // Usuario eligio PIEDRA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    winner = "Player1"
                    contadorPlayer++;
                    console.log("Ganaste esta ronda");
                    break;
                case 1:     // Machine eligio PAPEL
                    winner = "Machine"
                    contadorMachine++;
                    console.log("Perdiste esta ronda");
                    break;
                case 2:     // Machine eligio PIEDRA
                    winner = "Empate"
                    console.log("Empataste esta ronda");
                    break;
            }
            break;
    }
    return winner;
}

function jugarPlayer(tirada) {
    var player1, machine, winner, texto;
    var resultadofinal = "EMPATE";

    if (ciclo < rondas) {
        ciclo++;
        player1 = parseInt(tirada);
        machine = Math.floor(Math.random() * 3);

        winner = cachipun(player1, machine);

        texto = "JUGADA " + ciclo;
        texto += "<br>Player1 : " + opciones[player1];
        texto += "<br>Machine : " + opciones[machine];
        texto += "<br>El ganador es : " + winner;

        document.getElementById("txtresults").innerHTML = texto;

        if (ciclo == rondas) {

            if (contadorPlayer > contadorMachine) {
                resultadofinal = "Player1";
            } else if (contadorPlayer < contadorMachine) {
                resultadofinal = "Machine";
            } else {4
                resultadofinal = "EMPATE";
            }

            texto = "RESULTADO FINAL :  a " + ciclo + " rondas.";
            texto += "<br>Player1 : " + contadorPlayer + " partida(s)";
            texto += "<br>Machine : " + contadorMachine + " partida(s)";
            texto += "<br>El ganador es : " + resultadofinal;

            document.getElementById("txtfinalresults").innerHTML = texto;
        }
    }
}

const opciones = ["TIJERA", "PAPEL", "PIEDRA"];
var ciclo = 0;
var rondas = 0;
var contadorPlayer = 0, contadorMachine = 0;

while (rondas < 1) {
    rondas = parseInt(prompt("Hola Player1, ¿cuantas rondas desea jugar? "));
    if (isNaN(rondas) || rondas < 1) {
        alert("Debe ingresar un numero de 1 o mas rondas a jugas! ");
        rondas = 0;
    }
}
