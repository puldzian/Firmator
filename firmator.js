/*global $, document, branze, setTimeout, imionaZenskie, koncowkaZenska */

// Dlugosc zbioru branz
var BRANZE_N = branze.length,
    IMIONAZEN_N = imionaZenskie.length,
    KONCOWKAZEN_N = koncowkaZenska.length,
    trybGeneratora = 0;

// Losuje któryś z N-1 elementów
var losuj = function (n) {
    "use strict";
    return Math.floor(Math.random() * n);
};

// Osobny generator branż
var generatorBranzy = function (seed) {
    "use strict";
    if (seed === undefined) {
        seed = 0;
    }
    if (seed === 0) {
        var branzaLos = losuj(BRANZE_N);
        var branzaWstaw = branze[branzaLos];
        $("#jsBranza").html(branzaWstaw);
    }
};

// Generator firm
var nowyGenerator = function () {
    "use strict";
    var nrSilnika;
    if (trybGeneratora == 0) {
        // Tutaj będzie liczba dostępnych silników
        nrSilnika = 0;
    } else {
        // Albo silnik po prostu brany z radioboksa
        nrSilnika = trybGeneratora;
    }
    // Tutaj następuje właściwy wybór silnika
    switch(nrSilnika) {
        case 0:
            // Imię z końcówką
            var nr1 = losuj(IMIONAZEN_N),
                nr2 = losuj(KONCOWKAZEN_N);
            var firma1 = imionaZenskie[nr1],
                firma2 = koncowkaZenska[nr2];
                $("#jsFirma1").html(firma1);
                $("#jsFirma2").html(firma2);
            break;
        default:
            $("#jsFirma1").html("ZEPSUŁO SIĘ");
    }
}

// Odświeżanie ekranu i przejazd przez wszystko
var glownaPetla = function () {
    "use strict";
    // navigator.vibrate(200); to nie jest potrzebne :)
    $(".znikajace").fadeOut();
    setTimeout(function(){
        nowyGenerator();
        generatorBranzy();
        $(".znikajace").fadeIn();
    }, 400);
};

// To następuję po wduszeniu przycisku
var rozrusznik = function () { // eslint-disable-line no-unused-vars
    "use strict";
    glownaPetla();
};

// Funkcja główna - póki co nic
$(document).ready(function () {
    "use strict";
    // Tutaj będzie co:
    // może uzgadnianie seeda przy ładowaniu strony
});
