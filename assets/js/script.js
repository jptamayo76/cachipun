// DEFINICION:
// "TIJERA" = 0
// "PAPEL"  = 1
// "PIEDRA" = 2

// CONSTANTES GLOBALES
const iconoptions = ["far fa-hand-scissors fa-5x", "far fa-hand-paper fa-5x", "far fa-hand-rock fa-5x"];

// VARIABLES GLOBALES
var ciclo = 0;
var rondas = 0;
var contadorPlayer = 0, contadorMachine = 0;

function setMusic() {
    /* Se asigna musica aleatoria */
    let randomAudio = "assets/audio/music" + Math.floor(Math.random() * 7) + ".mp3";
    document.getElementById("Audio").setAttribute("src", randomAudio);

    /* Se ajusta volumen */
    document.getElementById("Audio").volume = 0.01;
}

function ronda() {
    rondas = parseInt(document.getElementById('rondasnumber').value);

    if (isNaN(rondas) || rondas < 1) {
        alert("Debe ingresar un número de 1 o más rondas a jugar! ");
        location.reload();
    } else {
        $("#rondas-section").toggle('slow');
        $("#jugada-section").css("display", "block");
    }

    setMusic();
}

function cachipun(tiradaplayer, tiradamachine) {
    let player1, machine;

    player1 = parseInt(tiradaplayer);
    machine = parseInt(tiradamachine);

    switch (player1) {
        case 0:         // Usuario eligio TIJERA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    document.getElementById("Mensaje").innerHTML = "Empataste esta ronda";
                    break;
                case 1:     // Machine eligio PAPEL
                    contadorPlayer++;
                    document.getElementById("Mensaje").innerHTML = "Ganaste esta ronda";
                    break;
                case 2:     // Machine eligio PIEDRA
                    contadorMachine++;
                    document.getElementById("Mensaje").innerHTML = "Perdiste esta ronda";
                    break;
            }
            break;
        case 1:         // Usuario eligio PAPEL
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    contadorMachine++;
                    document.getElementById("Mensaje").innerHTML = "Perdiste esta ronda";
                    break;
                case 1:     // Machine eligio PAPEL
                    document.getElementById("Mensaje").innerHTML = "Empataste esta ronda";
                    break;
                case 2:     // Machine eligio PIEDRA
                    contadorPlayer++;
                    document.getElementById("Mensaje").innerHTML = "Ganaste esta ronda";
                    break;
            }
            break;
        case 2:         // Usuario eligio PIEDRA
            switch (machine) {
                case 0:     // Machine eligio TIJERA
                    contadorPlayer++;
                    document.getElementById("Mensaje").innerHTML = "Ganaste esta ronda";
                    break;
                case 1:     // Machine eligio PAPEL
                    contadorMachine++;
                    document.getElementById("Mensaje").innerHTML = "Perdiste esta ronda";
                    break;
                case 2:     // Machine eligio PIEDRA
                    document.getElementById("Mensaje").innerHTML = "Empataste esta ronda";
                    break;
            }
            break;
    }
}

function jugarPlayer(tirada) {
    let player1, machine;

    if (ciclo < rondas) {
        ciclo++;
        player1 = parseInt(tirada);
        machine = Math.floor(Math.random() * 3);
        cachipun(player1, machine);

        /* Insertar datos en elemntos html */
        document.getElementById("Ronda").innerHTML = ciclo + 1;
        document.getElementById("Robot").innerHTML = " = " + contadorMachine;
        document.getElementById("Jugador").innerHTML = contadorPlayer + " = ";

        $("#opcionJug").removeClass();
        $("#opcionCom").removeClass();
        $("#opcionJug").addClass(iconoptions[player1]);
        $("#opcionCom").addClass(iconoptions[machine]);

        if (ciclo == rondas) {
            /* Ocultar sección Jugada y mostrar sección ResultParcial */
            $("#jugada-section").toggle('slow');
            $("#parcialresults-section").toggle('slow');

            /* Insertar los puntos de cada jugador a los elementos html */
            document.getElementById("RobotFinal").innerHTML = " = " + contadorMachine;
            document.getElementById("JugadorFinal").innerHTML = contadorPlayer + " = ";

            if (contadorPlayer > contadorMachine) {
                /* Insertar mensaje en elemento html */
                document.getElementById("MensajeFinal").innerHTML = `
                !Felicidades! <br>
                Le has ganado a "La máquina"! <br>
                ¡Eres el nuevo campeon!`;
            } else if (contadorPlayer < contadorMachine) {
                /* Insertar mensaje en elemento html */
                document.getElementById("MensajeFinal").innerHTML = `
                !Has perdido! <br>
                Jaja! nadie puede ganarle a "La máquina"! <br>
                ¡Eres el nuevo perdedor!`;
            } else {
                /* Insertar mensaje en elemento html */
                document.getElementById("MensajeFinal").innerHTML = `
                !Ha sido un empate! <br>
                Ja! lograste igualarte contra "La máquina"! <br>
                ¡Eres un digno rival!`;
            }

            /* Setea el tiempo de visibilidad de la sección ResultParcial y al terminar mostrar sección Resultado Final */
            setTimeout(function () {
                $("#parcialresults-section").toggle('slow');
                $("#finalresults-section").toggle('slow');
            }, 3000);

        } else {
            /* Ocultar sección Jugada y mostrar sección ResultParcial */
            $("#jugada-section").toggle('slow');
            $("#parcialresults-section").toggle('slow');

            /* Setea el tiempo de visibilidad de la sección ResultParcial y al terminar mostrar sección jugada */
            setTimeout(function () {
                $("#parcialresults-section").toggle('slow');
                $("#jugada-section").toggle('slow');
            }, 3000);
        }
    }
}

$(function () {
    $('[data-bs-toggle="popover"]').popover();
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#flexSwitchCheckSilenciar').change(function (event) {
        // State has changed to checked/unchecked.
        var thisCheck = $(this);

        if (thisCheck.is(':checked')) {
            /* Se SILENCIA volumen */
            document.getElementById("Audio").volume = 0.00;
        } else {
            /* Se ajusta volumen */
            document.getElementById("Audio").volume = 0.01;
        }
    });
});