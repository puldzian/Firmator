/*global $, document, branze, setTimeout, poczatek, srodek, koncowka */

var BRANZE_N = branze.length,
    // IMIONAZEN_N = imionaZenskie.length,
    // KONCOWKAZEN_N = koncowkaZenska.length,
    POCZATEK_N = poczatek.length,
    SRODEK_N = srodek.length,
    KONCOWKA_N = koncowka.length;
    // trybGeneratora = 1;

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

// Sprawdź czy jest dubel i usuń (ale tylko pierwszy)
var usunDubel = function (slowo) {
    "use strict";
    var slowoBezDubla,
        a,
        b,
        i; //JSLint to chuj
    for (i = 0; i < slowo.length; i += 1) {
        b = slowo[i];
        if (i > 0) {
            a = slowo[i - 1];
        }
        // Czy litery są tożsame?
        if (a === b) {
            // alert("Slowo[a] to " + slowo[i] + ", a slowo[b] to " + slowo[i - 1]);
            var ab = a + b;
            slowoBezDubla = slowo.replace(ab, a);
        }
    }
    return slowoBezDubla;
};

// Maszyna czytająca nazwę przedsiębiorstwa
var czytelnik = function (slowo) {
    // Słowo na array - DONE
    // operacja na arrayu,
    // później powrót do słowa!
    "use strict";
    var slowoArray = [],
        a,
        b,
        c,
        i;
    for (i = 0; i < slowo.length; i += 1) {
        slowoArray.push(slowo[i]);
    }
    // console.log(slowoArray);
    for (i = 0; i < slowoArray.length; i += 1) {
        a = slowoArray[i],
        b = slowoArray[i + 1],
        c = slowoArray[i + 2];
        // console.log(a + " " + b + " " + c);
        // Testy na 3litery wtedy, kiedy b i c != undefined, bo inaczej nie trzeba
        // Testy na 2litery, kiedy b != undefined
        if (a === "l" &&  b === "c" && c === "l") {
            // LCL
            console.log("Wykryto LCL:" + a + " + " + b + " " + c);
            slowoArray.splice(i + 1, 1);
        }
        if (a === "o" && (b === "u" || b === "e" || b === "a" || b === "u")) {
            // OU
            console.log("Wykryto OA/OU/OE:" + a + " + " + b);
            slowoArray.splice(i+1, 1);
        }
        if (a === b && i != 1) {
            // DUBEL, oprócz pierwszego ZOO
            console.log("Wykryto dubel:" + a + " + " + b);
            slowoArray.splice(i, 1);
        }

    }
    var slowoNowe = slowoArray.join("");
    // console.log("Słowo po korekcie to: " + slowoNowe);
    return slowoNowe;
};

/* RZECZY DO KOREKTY

EU > ale w otoczeniu!
ua
abf > af
aeu >
rwm >
ntl >
aoi >
Amberplaststudio - stst
Archiecoimo
Centerczareo
Sebuaks
Audioeks
Fotoieo
smd
Jureklasmex
Drogtiuks
Adbutweks
Stolserwdex
Plasinwpol
Instlastek

*/


// Korektor który nic nie robi
var korektor = function (slowo) {
    "use strict";
    // var noweSlowo = usunDubel(slowo);
    czytelnik(slowo);
    var noweSlowo = slowo;
    return noweSlowo;
};

// Generator firm
var nowyGenerator = function () {
    "use strict";
    var nr1 = losuj(POCZATEK_N),
        nr2 = losuj(SRODEK_N),
        nr3 = losuj(KONCOWKA_N),
        firma1 = poczatek[nr1],
        firma2 = srodek[nr2],
        firma3 = koncowka[nr3],
        firma123 = firma1 + firma2 + firma3;
    console.log("Słowo przed korektą to: " + firma123);
    // UWAGA UWAGA, powinien byc (firma123)
    var firma456 = czytelnik(firma123);
    $("#jsFirma1").html(firma456);
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

// To następuje po wduszeniu przycisku
var rozrusznik = function () { // eslint-disable-line no-unused-vars
    "use strict";
    glownaPetla();

    // TO DO: ograniczaj szybkie wduszanei przez oczekiwanie na nowe słowo
};

// Funkcja główna - póki co nic
$(document).ready(function () {
    "use strict";
    // Tutaj będzie co:
    // może uzgadnianie seeda przy ładowaniu strony
});
