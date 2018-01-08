var branze = [ // eslint-disable-line no-unused-vars
// Uprawy rolne, chów i hodowla zwierząt, łowiectwo, włączając działalność usługową
        "Uprawy rolne inne niż\xA0wieloletnie",
        "Uprawa roślin wieloletnich",
        "Rozmnażanie roślin",
        "Chów i\xA0hodowla zwierząt",
        "Uprawy rolne połączone z chowem i\xA0hodowlą zwierząt (działalność mieszana)",
        "Działalność usługowa wspomagająca rolnictwo i następująca po zbiorach",
        "Łowiectwo i\xA0pozyskiwanie zwierząt łownych, włączając działalność usługową",
// Leśnictwo i pozyskiwanie drewna
        "Gospodarka leśna i\xA0pozostała działalność leśna, z\xA0wyłączeniem pozyskiwania produktów leśnych",
        "Pozyskiwanie drewna",
        "Pozyskiwanie dziko rosnących produktów leśnych, z\xA0wyłączeniem drewna",
        "Działalność usługowa związana z\xA0leśnictwem",
// Rybactwo
        "Rybołówstwo",
        "Chów i\xA0hodowla ryb oraz\xA0pozostałych organizmów wodnych",
// Wydobywanie węgla kamiennego i węgla brunatnego (lignitu)
        "Wydobywanie węgla kamiennego",
        "Wydobywanie węgla brunatnego (lignitu)",
// Górnictwo ropy naftowej i gazu ziemnego
        "Górnictwo ropy naftowej",
        "Górnictwo gazu ziemnego",
// Górnictwo rud metali
        "Górnictwo rud żelaza",
        "Górnictwo rud metali nieżelaznych",
// Pozostałe górnictwo i wydobywanie
        "Wydobywanie kamienia, piasku i\xA0gliny",
        "Górnictwo i\xA0wydobywanie, gdzie\xA0indziej niesklasyfikowane",
// Działalność usługowa wspomagająca górnictwo i wydobywanie
        "Działalność usługowa wspomagająca eksploatację złóż ropy naftowej i\xA0gazu ziemnego",
        "Działalność usługowa wspomagająca pozostałe górnictwo i\xA0wydobywanie",
// Produkcja artykułów spożywczych
        "Przetwarzanie i\xA0konserwowanie mięsa oraz\xA0produkcja wyrobów z\xA0mięsa",
        "Przetwarzanie i\xA0konserwowanie ryb, skorupiaków i\xA0mięczaków",
        "Przetwarzanie i\xA0konserwowanie owoców i\xA0warzyw",
        "Produkcja olejów i\xA0tłuszczów pochodzenia roślinnego i\xA0zwierzęcego",
        "Wytwarzanie wyrobów mleczarskich",
        "Wytwarzanie produktów przemiału zbóż, skrobi i\xA0wyrobów skrobiowych",
        "Produkcja wyrobów piekarskich i\xA0mącznych",
        "Produkcja pozostałych artykułów spożywczych",
        "Produkcja gotowych paszy i\xA0karmy dla\xA0zwierząt",
        "Produkcja napojów",
        "Produkcja wyrobów tytoniowych",
// produkcja wyrobów tekstylnych
        "Przygotowanie i\xA0przędzenie włókien tekstylnych",
        "Produkcja tkanin",
        "Wykończanie wyrobów włókienniczych",
        "Produkcja pozostałych wyrobów tekstylnych",
// Produkcja odzieży
        "Produkcja odzieży, z\xA0wyłączeniem wyrobów futrzarskich",
        "Produkcja wyrobów futrzarskich",
        "Produkcja odzieży dzianej",
        "Wyprawa skór, garbowanie; wyprawa i\xA0barwienie skór futerkowych; produkcja toreb bagażowych, toreb ręcznych i\xA0podobnych wyrobów kaletniczych; produkcja wyrobów rymarskich",
        "Produkcja obuwia",
//Produkcja wyrobów z drewna oraz korka, z wyłączeniem mebli; produkcja wyrobów ze słomy i materiałów używanych do wyplatania
        "Produkcja wyrobów tartacznych",
        "Produkcja wyrobów z drewna, korka, słomy i\xA0materiałów używanych do wyplatania",
// Produkcja papieru i wyrobów z papieru
        "Produkcja masy włóknistej, papieru i\xA0tektury",
        "Produkcja wyrobów z\xA0papieru i\xA0tektury",
// poligrafia i reprodukcja zapisanych nośników informacji
        "Drukowanie i\xA0działalność usługowa związana z\xA0poligrafią",
        "Reprodukcja zapisanych nośników informacji",
// Wytwarzanie i przetwarzanie koksu i produktów rafinacji ropy naftowej
        "Wytwarzanie i\xA0przetwarzanie koksu",
        "Wytwarzanie i\xA0przetwarzanie produktów rafinacji ropy naftowej",
// Produkcja chemikaliów i wyrobów chemicznych
        "Produkcja podstawowych chemikaliów, nawozów i\xA0związków azotowych, tworzyw sztucznych i\xA0kauczuku syntetycznego w\xA0formach podstawowych",
        "Produkcja pestycydów i\xA0pozostałych środków agrochemicznych",
        "Produkcja farb, lakierów i\xA0podobnych powłok, farb drukarskich i\xA0mas uszczelniających",
        "Produkcja mydła i\xA0detergentów, środków myjących i\xA0czyszczących, wyrobów kosmetycznych i\xA0toaletowych",
        "Produkcja pozostałych wyrobów chemicznych",
        "Produkcja włókien chemicznych",
// Produkcja podstawowych substancji farmaceutycznych oraz leków i pozostałych wyrobów farmaceutycznych
        "Produkcja podstawowych substancji farmaceutycznych",
        "Produkcja leków i\xA0pozostałych wyrobów farmaceutycznych",
// Produkcja wyrobów z gumy i tworzyw sztucznych
        "Produkcja wyrobów z\xA0gumy",
        "Produkcja wyrobów z\xA0tworzyw sztucznych",
// Produkcja wyrobów z pozostałych mineralnych surowców niemetalicznych
        "Produkcja szkła i\xA0wyrobów ze\xA0szkła",
        "Produkcja wyrobów ogniotrwałych",
        "Produkcja ceramicznych materiałów budowlanych",
        "Produkcja pozostałych wyrobów z\xA0porcelany i\xA0ceramiki",
        "Produkcja cementu, wapna i\xA0gipsu",
        "Produkcja wyrobów z betonu, cementu i\xA0gipsu",
        "Cięcie, formowanie i\xA0wykańczanie kamienia",
        "Produkcja wyrobów ściernych i\xA0pozostałych wyrobów z mineralnych surowców niemetalicznych, gdzie\xA0indziej niesklasyfikowana",
// Produkcja metali
        "Produkcja surówki, żelazostopów, żeliwa i\xA0stali oraz\xA0wyrobów hutniczych",
        "Produkcja rur, przewodów, kształtowników zamkniętych i\xA0łączników, ze\xA0stali",
        "Produkcja pozostałych wyrobów ze stali poddanej wstępnej obróbce",
        "Produkcja metali szlachetnych i\xA0innych metali nieżelaznych",
        "Odlewnictwo metali",
// Produkcja metalowych wyrobów gotowych, z wyłączeniem maszyn i urządzeń
        "Produkcja metalowych elementów konstrukcyjnych",
        "Produkcja zbiorników, cystern i\xA0pojemników metalowych",
        "Produkcja wytwornic pary, z\xA0wyłączeniem kotłów do\xA0centralnego ogrzewania gorącą wodą",
        "Produkcja broni i\xA0amunicji",
        "Kucie, prasowanie, wytłaczanie i\xA0walcowanie metali; metalurgia proszków",
        "Obróbka metali i\xA0nakładanie powłok na metale; obróbka mechaniczna elementów metalowych",
        "Produkcja wyrobów nożowniczych, sztućców, narzędzi i\xA0wyrobów metalowych ogólnego przeznaczenia",
        "Produkcja pozostałych gotowych wyrobów metalowych",
// Produkcja komputerów, wyrobów elektronicznych i optycznych
        "Produkcja elektronicznych elementów i\xA0obwodów drukowanych",
        "Produkcja komputerów i\xA0urządzeń peryferyjnych",
        "Produkcja sprzętu (tele)komunikacyjnego",
        "Produkcja elektronicznego sprzętu powszechnego użytku",
        "Produkcja instrumentów i\xA0przyrządów pomiarowych, kontrolnych i\xA0nawigacyjnych; produkcja zegarków i\xA0zegarów",
        "Produkcja urządzeń napromieniowujących, sprzętu elektromedycznego i\xA0elektroterapeutycznego",
        "Produkcja instrumentów optycznych i\xA0sprzętu fotograficznego",
        "Produkcja magnetycznych i\xA0optycznych niezapisanych nośników informacji",
// Produkcja urządzeń elektrycznych
        "Produkcja elektrycznych silników, prądnic, transformatorów, aparatury rozdzielczej i\xA0sterowniczej energii elektrycznej",
        "Produkcja baterii i\xA0akumulatorów",
        "Produkcja izolowanych przewodów i\xA0kabli oraz sprzętu instalacyjnego",
        "Produkcja elektrycznego sprzętu oświetleniowego",
        "Produkcja sprzętu gospodarstwa domowego",
        "Produkcja pozostałego sprzętu elektrycznego",
// Produkcja maszyn i urządzeń, gdzie indziej niesklasyfikowana
        "Produkcja maszyn ogólnego przeznaczenia",
        "Produkcja pozostałych maszyn ogólnego przeznaczenia",
        "Produkcja maszyn dla rolnictwa i\xA0leśnictwa",
        "Produkcja maszyn i\xA0narzędzi mechanicznych",
        "Produkcja pozostałych maszyn specjalnego przeznaczenia",
// Produkcja pojazdów samochodowych, przyczep i naczep, z wyłączeniem motocykli
        "Produkcja pojazdów samochodowych, z\xA0wyłączeniem motocykli",
        "Produkcja nadwozi do pojazdów silnikowych; produkcja przyczep i\xA0naczep",
        "Produkcja części i\xA0akcesoriów do\xA0pojazdów silnikowych",
// Produkcja pozostałego sprzętu transportowego
        "Produkcja statków i\xA0łodzi",
        "Produkcja lokomotyw kolejowych oraz\xA0taboru szynowego",
        "Produkcja statków powietrznych, statków kosmicznych i\xA0podobnych maszyn",
        "Produkcja wojskowych pojazdów bojowych",
        "Produkcja sprzętu transportowego, gdzie\xA0indziej niesklasyfikowana",
// Produkcja mebli
        "Produkcja mebli",
// Pozostała produkcja wyrobów
        "Produkcja wyrobów jubilerskich, biżuterii i\xA0podobnych wyrobów",
        "Produkcja instrumentów muzycznych",
        "Produkcja sprzętu sportowego",
        "Produkcja gier i\xA0zabawek",
        "Produkcja urządzeń, instrumentów oraz\xA0wyrobów medycznych, włączając dentystyczne",
        "Produkcja wyrobów, gdzie\xA0indziej niesklasyfikowana",
// Naprawa, konserwacja i instalowanie maszyn i urządzeń
        "Naprawa i konserwacja metalowych wyrobów gotowych, maszyn i\xA0urządzeń",
        "Instalowanie maszyn przemysłowych, sprzętu i\xA0wyposażenia",
// Wytwarzanie i zaopatrywanie w energię elektryczną, gaz, parę wodną, gorącą wodę i powietrze do układów klimatyzacyjnych
        "Wytwarzanie, przesyłanie, dystrybucja i\xA0handel energią elektryczną",
        "Wytwarzanie paliw gazowych; dystrybucja i\xA0handel paliwami gazowymi w\xA0systemie sieciowym",
        "Wytwarzanie i\xA0zaopatrywanie w parę wodną, gorącą wodę i\xA0powietrze do\xA0układów klimatyzacyjnych",
        "Pobór, uzdatnianie i\xA0dostarczanie wody",
        "Odprowadzanie i\xA0oczyszczanie ścieków",
// Działalność związana ze zbieraniem, przetwarzaniem i unieszkodliwianiem odpadów; odzysk surowców
        "Zbieranie odpadów",
        "Przetwarzanie i\xA0unieszkodliwianie odpadów",
        "Odzysk surowców",
        "Działalność związana z rekultywacją i\xA0pozostała działalność usługowa związana z\xA0gospodarką odpadami",
// Roboty budowlane związane ze wznoszeniem budynków
        "Realizacja projektów budowlanych związanych ze\xA0wznoszeniem budynków",
        "Roboty budowlane związane ze\xA0wznoszeniem budynków mieszkalnych i\xA0niemieszkalnych",
// Roboty związane z budową obiektów inżynierii lądowej i wodnej
        "Roboty związane z\xA0budową dróg kołowych i\xA0szynowych",
        "Roboty związane z\xA0budową rurociągów, linii telekomunikacyjnych i\xA0elektroenergetycznych",
        "Roboty związane z budową pozostałych obiektów inżynierii lądowej i\xA0wodnej",
// Roboty budowlane specjalistyczne
        "Rozbiórka i\xA0przygotowanie terenu pod budowę",
        "Wykonywanie instalacji elektrycznych, wodno-kanalizacyjnych i\xA0pozostałych instalacji budowlanych",
        "Wykonywanie robót budowlanych wykończeniowych",
        "Pozostałe specjalistyczne roboty budowlane",
// Handel hurtowy i detaliczny pojazdami samochodowymi; naprawa pojazdów samochodowych
        "Sprzedaż hurtowa i\xA0detaliczna pojazdów samochodowych, z\xA0wyłączeniem motocykli",
        "Konserwacja i\xA0naprawa pojazdów samochodowych, z wyłączeniem motocykli",
        "Sprzedaż hurtowa i\xA0detaliczna części i\xA0akcesoriów do pojazdów samochodowych, z\xA0wyłączeniem motocykli",
        "Sprzedaż hurtowa i\xA0detaliczna motocykli, ich naprawa i\xA0konserwacja oraz\xA0sprzedaż hurtowa i\xA0detaliczna części i\xA0akcesoriów do\xA0nich",
// Handel hurtowy, z wyłączeniem handlu pojazdami samochodowymi
        "Sprzedaż hurtowa realizowana na zlecenie",
        "Sprzedaż hurtowa płodów rolnych i\xA0żywych zwierząt",
        "Sprzedaż hurtowa żywności, napojów i\xA0wyrobów tytoniowych",
        "Sprzedaż hurtowa artykułów użytku domowego",
        "Sprzedaż hurtowa narzędzi technologii informacyjnej i\xA0komunikacyjnej",
        "Sprzedaż hurtowa maszyn, urządzeń i\xA0dodatkowego wyposażenia",
        "Pozostała wyspecjalizowana sprzedaż hurtowa",
        "Sprzedaż hurtowa niewyspecjalizowana",
// Handel detaliczny, z wyłączeniem handlu detalicznego pojazdami samochodowymi
        "Sprzedaż detaliczna prowadzona w\xA0niewyspecjalizowanych sklepach",
        "Sprzedaż detaliczna żywności, napojów i\xA0wyrobów tytoniowych prowadzona w\xA0wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna paliw do pojazdów silnikowych na\xA0stacjach paliw",
        "Sprzedaż detaliczna narzędzi technologii informacyjnej i\xA0komunikacyjnej prowadzona w\xA0wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna artykułów użytku domowego prowadzona w\xA0wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna wyrobów związanych z kulturą i\xA0rekreacją prowadzona w\xA0wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna pozostałych wyrobów prowadzona w\xA0wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna prowadzona na straganach i\xA0targowiskach",
        "Sprzedaż detaliczna prowadzona poza\xA0siecią sklepową, straganami i\xA0targowiskami",
// transport lądowy oraz transport rurociągowy
        "Transport kolejowy pasażerski międzymiastowy",
        "Transport kolejowy towarów",
        "Pozostały transport lądowy pasażerski",
        "Transport drogowy towarów oraz\xA0działalność usługowa związana z przeprowadzkami",
        "Transport rurociągowy",
// transport wodny
        "Transport morski i\xA0przybrzeżny pasażerski",
        "Transport morski i\xA0przybrzeżny towarów",
        "Transport wodny śródlądowy pasażerski",
        "Transport wodny śródlądowy towarów",
// transport lotniczy
        "Transport lotniczy pasażerski",
        "Transport lotniczy towarów i\xA0transport kosmiczny",
// Magazynowanie i działalność usługowa wspomagająca transport
        "Magazynowanie i\xA0przechowywanie towarów",
        "Działalność usługowa wspomagająca transport",
// działalność pocztowa i kurierska
        "Działalność pocztowa objęta obowiązkiem świadczenia usług powszechnych (operatora publicznego)",
        "Pozostała działalność pocztowa i\xA0kurierska",
// Zakwaterowanie
        "Hotele i\xA0podobne obiekty zakwaterowania",
        "Obiekty noclegowe turystyczne i\xA0miejsca krótkotrwałego zakwaterowania",
        "Pola kempingowe (włączając pola dla\xA0pojazdów kempingowych) i\xA0pola namiotowe",
        "Pozostałe zakwaterowanie",
// Działalność usługowa związana z wyżywieniem
        "Restauracje i\xA0pozostałe placówki gastronomiczne",
        "Przygotowywanie żywności dla odbiorców zewnętrznych (katering) i\xA0pozostała gastronomiczna działalność usługowa",
        "Przygotowywanie i\xA0podawanie napojów",
// Działalność wydawnicza
        "Wydawanie książek i\xA0periodyków oraz\xA0pozostała działalność wydawnicza, z\xA0wyłączeniem w\xA0zakresie oprogramowania",
        "Działalność wydawnicza w\xA0zakresie oprogramowania",
// Działalność związana z produkcją filmów, nagrań wideo, programów telewizyjnych, nagrań dźwiękowych i muzycznych
        "Działalność związana z\xA0filmami, nagraniami wideo i\xA0programami telewizyjnymi",
        "Działalność w zakresie nagrań dźwiękowych i\xA0muzycznych",
// Nadawanie programów ogólnodostępnych i abonamentowych
        "Nadawanie programów radiofonicznych",
        "Nadawanie programów telewizyjnych ogólnodostępnych i\xA0abonamentowych",
// telekomunikacja
        "Działalność w\xA0zakresie telekomunikacji przewodowej",
        "Działalność w\xA0zakresie telekomunikacji bezprzewodowej, z\xA0wyłączeniem telekomunikacji satelitarnej",
        "Działalność w\xA0zakresie telekomunikacji satelitarnej",
        "Działalność w\xA0zakresie pozostałej telekomunikacji",
        "Działalność związana z\xA0oprogramowaniem i\xA0doradztwem w\xA0zakresie informatyki oraz\xA0działalność powiązana",
// Działalność usługowa w zakresie informacji
        "Przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i\xA0podobna działalność; działalność portali internetowych",
        "Pozostała działalność usługowa w\xA0zakresie informacji",
// Finansowa działalność usługowa, z wyłączeniem ubezpieczeń i funduszów emerytalnych
        "Pośrednictwo pieniężne",
        "Działalność holdingów finansowych",
        "Działalność trustów, funduszów i\xA0podobnych instytucji finansowych",
        "Pozostała finansowa działalność usługowa, z\xA0wyłączeniem ubezpieczeń i\xA0funduszów emerytalnych",
// Ubezpieczenia, reasekuracja oraz fundusze emerytalne, z wyłączeniem obowiązkowego ubezpieczenia społecznego
        "Ubezpieczenia",
        "Reasekuracja",
        "Fundusze emerytalne",
// Działalność wspomagająca usługi finansowe oraz ubezpieczenia i fundusze emerytalne
        "Działalność wspomagająca usługi finansowe, z wyłączeniem ubezpieczeń i\xA0funduszów emerytalnych",
        "Działalność wspomagająca ubezpieczenia i\xA0fundusze emerytalne",
        "Działalność związana z\xA0zarządzaniem funduszami",
// Działalność związana z obsługą rynku nieruchomości
        "Kupno i\xA0sprzedaż nieruchomości na\xA0własny rachunek",
        "Wynajem i\xA0zarządzanie nieruchomościami własnymi lub\xA0dzierżawionymi",
        "Działalność związana z\xA0obsługą rynku nieruchomości wykonywana na\xA0zlecenie",
// Działalność prawnicza, rachunkowo-księgowa i doradztwo podatkowe
        "Działalność prawnicza",
        "Działalność rachunkowo-księgowa; doradztwo podatkowe",
// Działalność firm centralnych (head offices); doradztwo związane z zarządzaniem
        "Działalność firm centralnych (head offices) i\xA0holdingów, z\xA0wyłączeniem holdingów finansowych",
        "Doradztwo związane z\xA0zarządzaniem",
// Działalność w zakresie architektury i inżynierii; badania i analizy techniczne
        "Działalność w zakresie architektury i\xA0inżynierii oraz\xA0związane z\xA0nią doradztwo techniczne",
        "Badania i\xA0analizy techniczne",
// Badania naukowe i prace rozwojowe
        "Badania naukowe i\xA0prace rozwojowe w\xA0dziedzinie nauk przyrodniczych i\xA0technicznych",
        "Badania naukowe i\xA0prace rozwojowe w dziedzinie nauk społecznych i\xA0humanistycznych",
// Reklama, badanie rynku i opinii publicznej
        "Reklama",
        "Badanie rynku i\xA0opinii publicznej",
// Pozostała działalność profesjonalna, naukowa i techniczna
        "Działalność w\xA0zakresie specjalistycznego projektowania",
        "Działalność fotograficzna",
        "Działalność związana z\xA0tłumaczeniami",
        "Pozostała działalność profesjonalna, naukowa i techniczna, gdzie indziej niesklasyfikowana",
        "Działalność weterynaryjna",
// Wynajem i dzierżawa
        "Wynajem i\xA0dzierżawa pojazdów samochodowych, z\xA0wyłączeniem motocykli",
        "Wypożyczanie i\xA0dzierżawa artykułów użytku osobistego i\xA0domowego",
        "Wynajem i dzierżawa pozostałych maszyn, urządzeń oraz\xA0dóbr materialnych",
        "Dzierżawa własności intelektualnej i\xA0podobnych produktów, z\xA0wyłączeniem prac chronionych prawem autorskim",
// Działalność związana z zatrudnieniem
        "Działalność związana z wyszukiwaniem miejsc pracy i\xA0pozyskiwaniem pracowników",
        "Działalność agencji pracy tymczasowej",
        "Pozostała działalność związana z\xA0udostępnianiem pracowników",
// Działalność organizatorów turystyki, pośredników i agentów turystycznych oraz pozostała działalność usługowa w zakresie rezerwacji i działalności z nią związane
        "Działalność agentów i\xA0pośredników turystycznych oraz\xA0organizatorów turystyki",
        "Pozostała działalność usługowa w\xA0zakresie rezerwacji i\xA0działalności z\xA0nią związane",
// Działalność detektywistyczna i ochroniarska
        "Działalność ochroniarska, z\xA0wyłączeniem obsługi systemów bezpieczeństwa",
        "Działalność ochroniarska w\xA0zakresie obsługi systemów bezpieczeństwa",
        "Działalność detektywistyczna",
// Działalność usługowa związana z utrzymaniem porządku w budynkach i zagospodarowaniem terenów zieleni
        "Działalność pomocnicza związana z\xA0utrzymaniem porządku w\xA0budynkach",
        "Sprzątanie obiektów",
        "Działalność usługowa związana z\xA0zagospodarowaniem terenów zieleni",
// Działalność związana z administracyjną obsługą biura i pozostała działalność wspomagająca prowadzenie działalności gospodarczej
        "Działalność związana z\xA0administracyjną obsługą biura, włączając działalność wspomagającą",
        "Działalność centrów telefonicznych (call center)",
        "Działalność związana z\xA0organizacją targów, wystaw i\xA0kongresów",
        "Działalność komercyjna, gdzie\xA0indziej niesklasyfikowana",
// administracja publiczna i obrona narodowa; obowiązkowe zabezpieczenia społeczne
        "Administracja publiczna oraz\xA0polityka gospodarcza i\xA0społeczna",
        "Usługi na rzecz całego społeczeństwa",
        "Obowiązkowe zabezpieczenia społeczne",
// edukacja
        "Wychowanie przedszkolne",
        "Szkoły podstawowe",
        "Gimnazja i\xA0szkoły ponadgimnazjalne, z\xA0wyłączeniem szkół policealnych",
        "Szkoły policealne oraz\xA0wyższe",
        "Pozaszkolne formy edukacji",
        "Działalność wspomagająca edukację",
// Opieka zdrowotna
        "Działalność szpitali",
        "Praktyka lekarska",
        "Pozostała działalność w\xA0zakresie opieki zdrowotnej",
// Pomoc społeczna z zakwaterowaniem
        "Pomoc społeczna z\xA0zakwaterowaniem zapewniająca opiekę pielęgniarską",
        "Pomoc społeczna z\xA0zakwaterowaniem dla\xA0osób z\xA0zaburzeniami psychicznymi",
        "Pomoc społeczna z\xA0zakwaterowaniem dla\xA0osób w\xA0podeszłym wieku i\xA0osób niepełnosprawnych",
        "Pozostała pomoc społeczna z\xA0zakwaterowaniem",
// Pomoc społeczna bez zakwaterowania
        "Pomoc społeczna bez zakwaterowania dla\xA0osób w\xA0podeszłym wieku i\xA0osób niepełnosprawnych",
        "Pozostała pomoc społeczna bez\xA0zakwaterowania",
        "Działalność twórcza związana z\xA0kulturą i\xA0rozrywką",
        "Działalność bibliotek, archiwów, muzeów oraz\xA0pozostała działalność związana z\xA0kulturą",
        "Działalność związana z\xA0grami losowymi i\xA0zakładami wzajemnymi",
// Działalność sportowa, rozrywkowa i rekreacyjna
        "Działalność związana ze\xA0sportem",
        "Działalność rozrywkowa i\xA0rekreacyjna",
// Działalność organizacji członkowskich
        "Działalność organizacji komercyjnych, pracodawców oraz\xA0organizacji profesjonalnych",
        "Działalność związków zawodowych",
        "Działalność pozostałych organizacji członkowskich",
// Naprawa i konserwacja komputerów i artykułów użytku osobistego i domowego
        "Naprawa i\xA0konserwacja komputerów i\xA0sprzętu komunikacyjnego",
        "Naprawa i\xA0konserwacja artykułów użytku osobistego i\xA0domowego",
        "Pozostała indywidualna działalność usługowa",
        "Gospodarstwa domowe zatrudniające pracowników",
// Gospodarstwa domowe produkujące wyroby i świadczące usługi na własne potrzeby
        "Gospodarstwa domowe produkujące wyroby na\xA0własne potrzeby",
        "Gospodarstwa domowe świadczące usługi na\xA0własne potrzeby"
    ];
