/*global $, document, firmy, branze*/

var bazaF = firmy.length,
    bazaB = branze.length,
    firma;

// Losuje któryś z N - 1 elementów
var losuj = function (n) {
    "use strict";
    return Math.floor(Math.random() * n);
};

// Osobny generator wariantów nazw

// Osobny generator branż
var generatorBranzy = function (seed) {
    "use strict";
    if (seed === undefined) {
        seed = 0;
    }
    if (seed === 0) {
        var branza1 = losuj(bazaB),
            branza2 = losuj(bazaB),
            branza3 = losuj(bazaB),
            branza11,
            branza22,
            branza33;
        if (branza1 === branza2) {
            branza2 = losuj(bazaB);
        }
        if (branza1 === branza3) {
            branza3 = losuj(bazaB);
        }
        if (branza2 === branza3) {
            branza3 = losuj(bazaB);
        }
        branza11 = branze[branza1];
        branza22 = branze[branza2];
        branza33 = branze[branza3];
        $("#jsBranza1").html(branza11);
        $("#jsBranza2").html(branza22);
        $("#jsBranza3").html(branza33);
    }
};

// Główna funkcja generująca - Firme
var generatorFirmy = function (seed) {
    "use strict";
    if (seed === undefined) {
        seed = 0;
    }
    if (seed === 0) {
        var numerek = losuj(bazaF);
        firma = firmy[numerek];
    }
    $("#jsFirma").html(firma);
};

// Odświeżanie ekranu i przejazd przez wszystko
var glownaPetla = function () {
    "use strict";
    generatorFirmy();
    generatorBranzy();
};

// Kliknij i wygeneruj
var rozrusznik = function () {
    "use strict";
    glownaPetla();
};

// Uruchom skrypt.
// Ważne; sprawdź, czy nie przybywa z określonego URLem ziarna
$(document).ready(function () {
    "use strict";
    // Tutaj będzie
});
