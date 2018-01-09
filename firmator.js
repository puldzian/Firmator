/*global $, document, branze, setTimeout, imionaZenskie, koncowkaZenska, poczatek, srodek, koncowka */

// Dlugosc zbioru branz
var BRANZE_N = branze.length,
    IMIONAZEN_N = imionaZenskie.length,
    KONCOWKAZEN_N = koncowkaZenska.length,
    POCZATEK_N = poczatek.length,
    SRODEK_N = srodek.length,
    KONCOWKA_N = koncowka.length,
    trybGeneratora = 1;

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
        var branzaLos = losuj(BRANZE_N),
            branzaWstaw = branze[branzaLos];
        $("#jsBranza").html(branzaWstaw);
    }
};

// Korektor
var korektor = function (problem) {
    "use strict";
    var slowo = problem,
        a,
        b,
        dd = slowo.length,
        i;
    for (i = 0; i < dd; i += 1) {
        b = slowo[i];
        if (i > 0) {
            a = slowo[i - 1];
        }
        // Czy litery są tożsame?
        if (a === b) {
            alert("Slowo[a] to " + slowo[i] + ", a slowo[b] to " + slowo[i - 1]);
            // problem = string, więc splice nie działa
            slowo[i] = "C";
            // Rekalkuluj długość
            dd = slowo.length;
        }
    }
    return slowo;
};

// Imię żeńskie z końcowką
var silnik1 = function () {
    "use strict";
    var nr1 = losuj(IMIONAZEN_N),
        nr2 = losuj(KONCOWKAZEN_N),
        firma1 = imionaZenskie[nr1],
        firma2 = koncowkaZenska[nr2];
    $("#jsFirma1").html(firma1);
    $("#jsFirma2").html(firma2);
};

// Klasyczny, duży silnik
var silnik2 = function () {
    "use strict";
    var nr1 = losuj(POCZATEK_N),
        nr2 = losuj(SRODEK_N),
        nr3 = losuj(KONCOWKA_N),
        firma1 = poczatek[nr1],
        firma2 = srodek[nr2],
        firma3 = koncowka[nr3],
        firma123 = firma1 + firma2 + firma3;
    // UWAGA UWAGA, powinien byc (firma123)
    firma123 = korektor("MIGAAGIM");
    $("#jsFirma1").html(firma123);
};

// Generator firm
var nowyGenerator = function () {
    "use strict";
    var nrSilnika;
    if (trybGeneratora === 0) {
        // Tutaj będzie liczba dostępnych silników
        nrSilnika = 0;
    } else {
        // Albo silnik po prostu brany z radioboksa
        nrSilnika = trybGeneratora;
    }
    // Tutaj następuje właściwy wybór silnika
    switch (nrSilnika) {
    case 0:
        silnik1();
        break;
    case 1:
        silnik2();
        break;
    default:
        $("#jsFirma1").html("ZEPSUŁO SIĘ");
    }
};

// Odświeżanie ekranu i przejazd przez wszystko
var glownaPetla = function () {
    "use strict";
    // navigator.vibrate(200); to nie jest potrzebne :)
    $(".znikajace").fadeOut();
    setTimeout(function () {
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
