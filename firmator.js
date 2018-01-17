/*global $, document, branze, setTimeout, poczatek, srodek, koncowka, console */

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

// 1 jeśli samogłoska (nie "i", i jest ok)
var czySamogloska = function (litera) {
    "use strict";
    return ["a", "ą", "e", "ę", "o", "ó", "u", "y"].indexOf(litera) > -1;
};

// 1 jeśli spółgłoska i nie jebane undefined
var czySpolgloska = function (litera) {
    "use strict";
    if (litera !== undefined) {
        return ["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"].indexOf(litera.toLowerCase()) < 0;
    }
};

// Maszyna czytająca nazwę przedsiębiorstwa
var czytelnik = function (slowo) {
    "use strict";
    var slowoArray = [],
        a,
        b,
        c,
        i,
        niespodzianka,
        slowoNowe;
    // Przepychamy słowo w array
    for (i = 0; i < slowo.length; i += 1) {
        slowoArray.push(slowo[i]);
    }
    // Zachodzi właściwa korekta, litera po literze
    for (i = 0; i < slowoArray.length; i += 1) {
        a = slowoArray[i];
        b = slowoArray[i + 1];
        c = slowoArray[i + 2];
        // DUBEL
        if (a === b && i !== 1) {
            console.log("Wykryto dubel:" + a + b);
            slowoArray.splice(i, 1);
        } else if (czySamogloska(a) && czySamogloska(b)) {
            console.log("Wykryto dwie samogłoski:" + a + b);
            if (i === 0 || i === 1) {
                // empty
            } else if (a === "o") {
                slowoArray.splice(i + 1, 1);
            } else if (czySamogloska(c)) {
                niespodzianka = losuj(2);
                slowoArray.splice(i + niespodzianka, 1);
                i -= 1;
            } else {
                niespodzianka = losuj(2);
                slowoArray.splice(i + niespodzianka, 1);
                i -= 1;
            }
        } else if (czySpolgloska(a) && czySpolgloska(b) && czySpolgloska(c)) {
            console.log("Wykryto trzy spółgłoski: " + a + b + c);
            if (i === 0 || i === 1 || (a === "n" && b === "d" && c === "l")) {
                // SZKŁ
                console.log("Ale niech se będą, bo początek");
                i += 1;
            } else if ((a === "k" || a === "s") && b === "t" && c === "r") {
                //
                console.log("Ale spoko, bo to elektro albo gastro");
                i += 1;
            } else if ((a === "c" && b === "h") || (b === "c" && c === "h")) {
                //
                console.log("Ale spoko, bo to >ch<");
                i += 1;
            } else if (a === "s" && (b === "t" || b === "r")) {
                //
                console.log("Prawie spoko, bo to >st< albo >sr<");
                slowoArray.splice(i + 2, 1);
                i += 1;
            } else if (b === "s" && (c === "t" || c === "r")) {
                //
                console.log("Prawie spoko, bo to >st< albo >sr<");
                slowoArray.splice(i, 1);
                i += 1;
            } else if (b === "g" && c === "r") {
                //
                console.log("Prawie spoko, bo to >gr<");
                slowoArray.splice(i, 1);
                i += 1;
            } else if (b === "s" && c === "p") {
                //
                console.log("Prawie spoko, bo to >sp<");
                slowoArray.splice(i, 1);
                i += 1;
            } else {
                // USUŃ przypadkową!
                niespodzianka = losuj(3);
                slowoArray.splice(i + niespodzianka, 1);
                i -= 1;
            }
        }
    }
    slowoNowe = slowoArray.join("");
    return slowoNowe;
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
        firma123 = firma1 + firma2 + firma3,
        firma456;
    console.log("Słowo przed korektą to: " + firma123);
    firma456 = czytelnik(firma123);
    $("#jsFirma1").html(firma456);
};

// Odświeżanie ekranu i przejazd przez wszystko
var glownaPetla = function () {
    "use strict";
    // TO DO: rozbij znikanie na 2 etapy
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
    // TO DO: ograniczaj szybkie wduszanei
    // przez oczekiwanie na nowe słowo
};

// Funkcja główna - póki co nic
$(document).ready(function () {
    "use strict";
    // Tutaj będzie co:
    // może uzgadnianie seeda przy ładowaniu strony
});
