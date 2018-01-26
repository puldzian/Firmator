/*global $, document, setTimeout, dictBranze, dictPrefix, dictInfix, dictSufix */

var BRANZA_N = dictBranze.length,
    branzaNum,
    branzaStr,
    PREFIX_N = dictPrefix.length,
    prefixNum,
    prefixStr,
    INFIX_N = dictInfix.length,
    infixNum,
    infixStr,
    SUFIX_N = dictSufix.length,
    sufixNum,
    sufixStr,
    firmaStr;

// Losuje któryś z N-1 elementów
var losuj = function (n) {
    "use strict";
    return Math.floor(Math.random() * n);
};

// Maszyna czytająca nazwę przedsiębiorstwa
var czytelnik = function (slowo) {
    "use strict";
    var slowoArray = [],
        a,
        b,
        c,
        i,
        slowoNowe,
    // 1 jeśli samogłoska (nie "i", i jest ok)
        czySamogloska = function (litera) {
            return ["a", "ą", "e", "ę", "o", "ó", "u", "y"].indexOf(litera) > -1;
        },
    // 1 jeśli spółgłoska i nie jebane undefined
        czySpolgloska = function (litera) {
            if (litera !== undefined) {
                return ["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"].indexOf(litera.toLowerCase()) < 0;
            }
        };
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
            // console.log("Wykryto dubel:" + a + b);
            slowoArray.splice(i, 1);
        } else if (czySamogloska(a) && czySamogloska(b)) {
            // console.log("Wykryto dwie samogłoski:" + a + b);
            if (i === 0 || i === 1) {
                // empty
                // odpieprz się
            } else if (a === "o") {
                slowoArray.splice(i + 1, 1);
            } else if (czySamogloska(c)) {
                slowoArray.splice(i + 2, 1);
                i -= 1;
            } else {
                slowoArray.splice(i + 1, 1);
                i -= 1;
            }
        } else if (czySpolgloska(a) && czySpolgloska(b) && czySpolgloska(c)) {
            // console.log("Wykryto trzy spółgłoski: " + a + b + c);
            if (i === 0 || i === 1 || (a === "n" && b === "d" && c === "l")) {
                // SZKŁ
                // console.log("Ale niech se będą, bo początek");
                i += 1;
            } else if ((a === "k" || a === "s") && b === "t" && c === "r") {
                // console.log("Ale spoko, bo to elektro albo gastro");
                i += 1;
            } else if ((a === "c" && b === "h") || (b === "c" && c === "h")) {
                // console.log("Ale spoko, bo to >ch<");
                i += 1;
            } else if (a === "s" && (b === "t" || b === "r")) {
                // console.log("Prawie spoko, bo to >st< albo >sr<");
                slowoArray.splice(i + 2, 1);
                i += 1;
            } else if (b === "s" && (c === "t" || c === "r")) {
                // console.log("Prawie spoko, bo to >st< albo >sr<");
                slowoArray.splice(i, 1);
                i += 1;
            } else if (b === "g" && c === "r") {
                // console.log("Prawie spoko, bo to >gr<");
                slowoArray.splice(i, 1);
                i += 1;
            } else if (b === "s" && c === "p") {
                // console.log("Prawie spoko, bo to >sp<");
                slowoArray.splice(i, 1);
                i += 1;
            } else {
                // USUŃ przypadkową!
                // niespodzianka = losuj(3);
                // nie, jednak ostatnią bo wychodzą gówna
                slowoArray.splice(i + 2, 1);
                i -= 1;
            }
        }
    }
    slowoNowe = slowoArray.join("");
    return slowoNowe;
};

// Odśwież branże. arg to czas fade
var odswiezBranze = function (arg) {
    "use strict";
    $("meta[name='og:description']").attr('content', "Działam w branży: " + branzaStr);
    if (arg === 0) {
        $("#jsBranza").html(branzaStr);
    } else {
        $(".znikajace2").fadeTo(200, 0);
        setTimeout(function () {
            $("#jsBranza").html(branzaStr);
        }, 200);
        setTimeout(function () {
            $(".znikajace2").fadeTo(200, 1);
        }, 200);
    }
};

// Odśwież firme. Jeśli "0" - bez fade
var odswiezFirme = function (arg) {
    "use strict";
    firmaStr = prefixStr + infixStr + sufixStr;
    firmaStr = czytelnik(firmaStr);
    $("meta[name='og:title']").attr('content', "Moja firma to: " + firmaStr);
    if (arg === 0) {
        $("#jsFirma1").html(firmaStr);
    } else {
        $(".znikajace1").fadeTo(arg, 0);
        setTimeout(function () {
            $("#jsFirma1").html(firmaStr);
        }, arg);
        setTimeout(function () {
            $(".znikajace1").fadeTo(arg, 1);
        }, arg);
    }
};

// Podmień wartość danego elementu:
// Arg: 0 - los, 1 - w lewo, 2 - w prawo
// Element: prefix, infix, sufix, branza
var zmienWartosc = function (arg, element, delay) { // eslint-disable-line no-unused-vars
    "use strict";
    var baza,
        limit,
        numer,
        slowo;
    // Tutaj pobieramy dane o elemencie
    switch (element) {
    case "branza":
        baza = dictBranze;
        limit = BRANZA_N;
        numer = branzaNum;
        slowo = branzaStr;
        break;
    case "prefix":
        baza = dictPrefix;
        limit = PREFIX_N;
        numer = prefixNum;
        slowo = prefixStr;
        break;
    case "infix":
        baza = dictInfix;
        limit = INFIX_N;
        numer = infixNum;
        slowo = infixStr;
        break;
    case "sufix":
        baza = dictSufix;
        limit = SUFIX_N;
        numer = sufixNum;
        slowo = sufixStr;
        break;
    }
    // Tutaj modyfikujemy to, co trzeba
    switch (arg) {
    case 0:
        numer = losuj(limit);
        break;
    case 1:
        numer = numer - 1;
        if (numer === -1) {
            numer = limit - 1;
        }
        break;
    case 2:
        numer = numer + 1;
        if (numer >= limit) {
            numer = 0;
        }
        break;
    }
    slowo = baza[numer];
    // Trzeba jeszcze zwrocić do aplikacji
    switch (element) {
    case "branza":
        branzaNum = numer;
        branzaStr = dictBranze[branzaNum];
        odswiezBranze(delay);
        break;
    case "prefix":
        prefixNum = numer;
        prefixStr = slowo;
        odswiezFirme(delay);
        break;
    case "infix":
        infixNum = numer;
        infixStr = slowo;
        odswiezFirme(delay);
        break;
    case "sufix":
        sufixNum = numer;
        sufixStr = slowo;
        odswiezFirme(delay);
        break;
    }
};

// Podmień firmę i branże

// TO MUSI BYĆ ZMIENIONE NA CZYSTE FLAKI BO KURWA jest za duże fadeinów na linii
var zmienWszystko = function (delay) {
    "use strict";
    branzaStr = dictBranze[losuj(BRANZA_N)];
    prefixStr = dictPrefix[losuj(PREFIX_N)];
    infixStr = dictInfix[losuj(INFIX_N)];
    sufixStr = dictSufix[losuj(SUFIX_N)];
    odswiezFirme(delay);
    odswiezBranze(delay);
};

// Naciśnięcie przycisku udostępnij!
var buttonShare = function () { // eslint-disable-line no-unused-vars
    "use strict";
    // Tutaj będzie kod udostępnianai
};

// Naciśnięcie przycisku losuj!
var buttonLosuj = function () { // eslint-disable-line no-unused-vars
    "use strict";
    zmienWszystko(200);
};

// Naciśnięcie przycisku start!
var buttonStart = function () { // eslint-disable-line no-unused-vars
    "use strict";
    // Znika to, co było
    $(".znikajace1").fadeOut(400);
    $(".znikajace2").fadeOut(400);
    $(".znikajace3").fadeOut(400);
    // Losujemy wartości firm i branży
    // Z opóźnieniem, żeby było ładniej
    setTimeout(function () {
        zmienWszystko(0);
    }, 400);
    // Pojawiamy spowrotem
    setTimeout(function () {
        $(".znikajace1").fadeIn(500);
        $(".znikajace2").fadeIn(1000);
        $(".pojawiajace").fadeIn(1200);
    }, 500);
};

function shareOverrideOGMeta(overrideTitle, overrideDescription, obrazek) {
	FB.ui({
		method: 'share_open_graph',
		action_type: 'og.shares',
		action_properties: JSON.stringify({
			object: {
				'og:title': overrideTitle,
				'og:description': overrideDescription,
                'og:image': obrazek
			}
		})
	},
        function () {
	// Action after response
	    });
}

var udostepnij = function () { // eslint-disable-line no-unused-vars
    "use strict";
    var tytul = "Moja firma to: " + firmaStr.toUpperCase();
    var opis = "Działam w branży: " + branzaStr;
    var image = "https://rozdzielchleb.pl/kody/zalozfirmy/oglogotyp.png";
    shareOverrideOGMeta(tytul, opis, image);
};

var pokazCzit = function () { // eslint-disable-line no-unused-vars
    "use strict";
    $(".tajnekody").css("display", "block");
};

var czytajCzit = function () { // eslint-disable-line no-unused-vars
    "use strict";
    prefixNum = document.getElementById('cheat1').value;
    infixNum = document.getElementById('cheat2').value;
    sufixNum = document.getElementById('cheat3').value;
    branzaNum = document.getElementById('cheat4').value;
    prefixStr = dictPrefix[prefixNum];
    infixStr = dictInfix[prefixNum];
    sufixStr = dictSufix[sufixNum];
    branzaStr = dictBranze[branzaNum];
    $("#jsFirma1").html(prefixStr);
    $("#jsFirma2").html(infixStr);
    $("#jsFirma3").html(sufixStr);
    $("#jsBranza").html(branzaStr);
    if (infixStr === undefined) {
        firmaStr = prefixStr + sufixStr;        
    } else {
        firmaStr = prefixStr + infixStr + sufixStr;        
    }

};

// Funkcja główna - póki co nic
$(document).ready(function () {
    "use strict";
    var szerokosc = $(document).width();
    if (szerokosc < 600) {
        $(".telefon").css("display", "block");
    }
});
