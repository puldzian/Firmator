/*global $, document, poczatek, srodek, koncowka, branze*/

var baza1 = poczatek.length,
    baza2 = srodek.length,
    baza3 = koncowka.length,
    bazaB = branze.length,
    firma1,
    firma2,
    firma3;

var zniknij = function () {
    $(".znikajace").animate({
        opacity:0
    });
};
var pojaw = function () {
    $(".znikajace").animate({
        opacity:1
    });
};

$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});

// Losuje któryś z N - 1 elementów
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
        var numerek1 = losuj(baza1),
            numerek2 = losuj(baza2),
            numerek3 = losuj(baza3);
        firma1 = poczatek[numerek1];
        firma2 = srodek[numerek2];
        firma3 = koncowka[numerek3];
    }
    $("#jsFirma1").html(firma1);
    $("#jsFirma2").html(firma2);
    $("#jsFirma3").html(firma3);
};

// Odświeżanie ekranu i przejazd przez wszystko
var glownaPetla = function () {
    "use strict";
    navigator.vibrate(200);
    $(".znikajace").fadeOut();
    setTimeout(function(){
        generatorFirmy();
        generatorBranzy();
        $(".znikajace").fadeIn();
    }, 400);
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
    // Tutaj będzie co:
    // może uzgadnianie seeda przy ładowaniu strony
});
