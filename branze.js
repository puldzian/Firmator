var branze = [ // eslint-disable-line no-unused-vars
// Uprawy rolne, chów i hodowla zwierząt, łowiectwo, włączając działalność usługową
        "Uprawy rolne inne niż wieloletnie",
        "Uprawa roślin wieloletnich",
        "Rozmnażanie roślin",
        "Chów i hodowla zwierząt",
        "Uprawy rolne połączone z chowem i hodowlą zwierząt (działalność mieszana)",
        "Działalność usługowa wspomagająca rolnictwo i następująca po zbiorach",
        "Łowiectwo i pozyskiwanie zwierząt łownych, włączając działalność usługową",
// Leśnictwo i pozyskiwanie drewna
        "Gospodarka leśna i pozostała działalność leśna, z wyłączeniem pozyskiwania produktów leśnych",
        "Pozyskiwanie drewna",
        "Pozyskiwanie dziko rosnących produktów leśnych, z wyłączeniem drewna",
        "Działalność usługowa związana z leśnictwem",
// Rybactwo
        "Rybołówstwo",
        "Chów i hodowla ryb oraz pozostałych organizmów wodnych",
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
        "Wydobywanie kamienia, piasku i gliny",
        "Górnictwo i wydobywanie, gdzie indziej niesklasyfikowane",
// Działalność usługowa wspomagająca górnictwo i wydobywanie
        "Działalność usługowa wspomagająca eksploatację złóż ropy naftowej i gazu ziemnego",
        "Działalność usługowa wspomagająca pozostałe górnictwo i wydobywanie",
// Produkcja artykułów spożywczych
        "Przetwarzanie i konserwowanie mięsa oraz produkcja wyrobów z mięsa",
        "Przetwarzanie i konserwowanie ryb, skorupiaków i mięczaków",
        "Przetwarzanie i konserwowanie owoców i warzyw",
        "Produkcja olejów i tłuszczów pochodzenia roślinnego i zwierzęcego",
        "Wytwarzanie wyrobów mleczarskich",
        "Wytwarzanie produktów przemiału zbóż, skrobi i wyrobów skrobiowych",
        "Produkcja wyrobów piekarskich i mącznych",
        "Produkcja pozostałych artykułów spożywczych",
        "Produkcja gotowych paszy i karmy dla zwierząt",
        "Produkcja napojów",
        "Produkcja wyrobów tytoniowych",
// produkcja wyrobów tekstylnych
        "Przygotowanie i przędzenie włókien tekstylnych",
        "Produkcja tkanin",
        "Wykończanie wyrobów włókienniczych",
        "Produkcja pozostałych wyrobów tekstylnych",
// Produkcja odzieży
        "Produkcja odzieży, z wyłączeniem wyrobów futrzarskich",
        "Produkcja wyrobów futrzarskich",
        "Produkcja odzieży dzianej",
        "Wyprawa skór, garbowanie; wyprawa i barwienie skór futerkowych; produkcja toreb bagażowych, toreb ręcznych i podobnych wyrobów kaletniczych; produkcja wyrobów rymarskich",
        "Produkcja obuwia",
//Produkcja wyrobów z drewna oraz korka, z wyłączeniem mebli; produkcja wyrobów ze słomy i materiałów używanych do wyplatania
        "Produkcja wyrobów tartacznych",
        "Produkcja wyrobów z drewna, korka, słomy i materiałów używanych do wyplatania",
// Produkcja papieru i wyrobów z papieru
        "Produkcja masy włóknistej, papieru i tektury",
        "Produkcja wyrobów z papieru i tektury",
// poligrafia i reprodukcja zapisanych nośników informacji
        "Drukowanie i działalność usługowa związana z poligrafią",
        "Reprodukcja zapisanych nośników informacji",
// Wytwarzanie i przetwarzanie koksu i produktów rafinacji ropy naftowej
        "Wytwarzanie i przetwarzanie koksu",
        "Wytwarzanie i przetwarzanie produktów rafinacji ropy naftowej",
// Produkcja chemikaliów i wyrobów chemicznych
        "Produkcja podstawowych chemikaliów, nawozów i związków azotowych, tworzyw sztucznych i kauczuku syntetycznego w formach podstawowych",
        "Produkcja pestycydów i pozostałych środków agrochemicznych",
        "Produkcja farb, lakierów i podobnych powłok, farb drukarskich i mas uszczelniających",
        "Produkcja mydła i detergentów, środków myjących i czyszczących, wyrobów kosmetycznych i toaletowych",
        "Produkcja pozostałych wyrobów chemicznych",
        "Produkcja włókien chemicznych",
// Produkcja podstawowych substancji farmaceutycznych oraz leków i pozostałych wyrobów farmaceutycznych
        "Produkcja podstawowych substancji farmaceutycznych",
        "Produkcja leków i pozostałych wyrobów farmaceutycznych",
// Produkcja wyrobów z gumy i tworzyw sztucznych
        "Produkcja wyrobów z gumy",
        "Produkcja wyrobów z tworzyw sztucznych",
// Produkcja wyrobów z pozostałych mineralnych surowców niemetalicznych
        "Produkcja szkła i wyrobów ze szkła",
        "Produkcja wyrobów ogniotrwałych",
        "Produkcja ceramicznych materiałów budowlanych",
        "Produkcja pozostałych wyrobów z porcelany i ceramiki",
        "Produkcja cementu, wapna i gipsu",
        "Produkcja wyrobów z betonu, cementu i gipsu",
        "Cięcie, formowanie i wykańczanie kamienia",
        "Produkcja wyrobów ściernych i pozostałych wyrobów z mineralnych surowców niemetalicznych, gdzie indziej niesklasyfikowana",
// Produkcja metali
        "Produkcja surówki, żelazostopów, żeliwa i stali oraz wyrobów hutniczych",
        "Produkcja rur, przewodów, kształtowników zamkniętych i łączników, ze stali",
        "Produkcja pozostałych wyrobów ze stali poddanej wstępnej obróbce",
        "Produkcja metali szlachetnych i innych metali nieżelaznych",
        "Odlewnictwo metali",
// Produkcja metalowych wyrobów gotowych, z wyłączeniem maszyn i urządzeń
        "Produkcja metalowych elementów konstrukcyjnych",
        "Produkcja zbiorników, cystern i pojemników metalowych",
        "Produkcja wytwornic pary, z wyłączeniem kotłów do centralnego ogrzewania gorącą wodą",
        "Produkcja broni i amunicji",
        "Kucie, prasowanie, wytłaczanie i walcowanie metali; metalurgia proszków",
        "Obróbka metali i nakładanie powłok na metale; obróbka mechaniczna elementów metalowych",
        "Produkcja wyrobów nożowniczych, sztućców, narzędzi i wyrobów metalowych ogólnego przeznaczenia",
        "Produkcja pozostałych gotowych wyrobów metalowych",
// Produkcja komputerów, wyrobów elektronicznych i optycznych
        "Produkcja elektronicznych elementów i obwodów drukowanych",
        "Produkcja komputerów i urządzeń peryferyjnych",
        "Produkcja sprzętu (tele)komunikacyjnego",
        "Produkcja elektronicznego sprzętu powszechnego użytku",
        "Produkcja instrumentów i przyrządów pomiarowych, kontrolnych i nawigacyjnych; produkcja zegarków i zegarów",
        "Produkcja urządzeń napromieniowujących, sprzętu elektromedycznego i elektroterapeutycznego",
        "Produkcja instrumentów optycznych i sprzętu fotograficznego",
        "Produkcja magnetycznych i optycznych niezapisanych nośników informacji",
// Produkcja urządzeń elektrycznych
        "Produkcja elektrycznych silników, prądnic, transformatorów, aparatury rozdzielczej i sterowniczej energii elektrycznej",
        "Produkcja baterii i akumulatorów",
        "Produkcja izolowanych przewodów i kabli oraz sprzętu instalacyjnego",
        "Produkcja elektrycznego sprzętu oświetleniowego",
        "Produkcja sprzętu gospodarstwa domowego",
        "Produkcja pozostałego sprzętu elektrycznego",
// Produkcja maszyn i urządzeń, gdzie indziej niesklasyfikowana
        "Produkcja maszyn ogólnego przeznaczenia",
        "Produkcja pozostałych maszyn ogólnego przeznaczenia",
        "Produkcja maszyn dla rolnictwa i leśnictwa",
        "Produkcja maszyn i narzędzi mechanicznych",
        "Produkcja pozostałych maszyn specjalnego przeznaczenia",
// Produkcja pojazdów samochodowych, przyczep i naczep, z wyłączeniem motocykli
        "Produkcja pojazdów samochodowych, z wyłączeniem motocykli",
        "Produkcja nadwozi do pojazdów silnikowych; produkcja przyczep i naczep",
        "Produkcja części i akcesoriów do pojazdów silnikowych",
// Produkcja pozostałego sprzętu transportowego
        "Produkcja statków i łodzi",
        "Produkcja lokomotyw kolejowych oraz taboru szynowego",
        "Produkcja statków powietrznych, statków kosmicznych i podobnych maszyn",
        "Produkcja wojskowych pojazdów bojowych",
        "Produkcja sprzętu transportowego, gdzie indziej niesklasyfikowana",
// Produkcja mebli
        "Produkcja mebli",
// Pozostała produkcja wyrobów
        "Produkcja wyrobów jubilerskich, biżuterii i podobnych wyrobów",
        "Produkcja instrumentów muzycznych",
        "Produkcja sprzętu sportowego",
        "Produkcja gier i zabawek",
        "Produkcja urządzeń, instrumentów oraz wyrobów medycznych, włączając dentystyczne",
        "Produkcja wyrobów, gdzie indziej niesklasyfikowana",
// Naprawa, konserwacja i instalowanie maszyn i urządzeń
        "Naprawa i konserwacja metalowych wyrobów gotowych, maszyn i urządzeń",
        "Instalowanie maszyn przemysłowych, sprzętu i wyposażenia",
// Wytwarzanie i zaopatrywanie w energię elektryczną, gaz, parę wodną, gorącą wodę i powietrze do układów klimatyzacyjnych
        "Wytwarzanie, przesyłanie, dystrybucja i handel energią elektryczną",
        "Wytwarzanie paliw gazowych; dystrybucja i handel paliwami gazowymi w systemie sieciowym",
        "Wytwarzanie i zaopatrywanie w parę wodną, gorącą wodę i powietrze do układów klimatyzacyjnych",
        "Pobór, uzdatnianie i dostarczanie wody",
        "Odprowadzanie i oczyszczanie ścieków",
// Działalność związana ze zbieraniem, przetwarzaniem i unieszkodliwianiem odpadów; odzysk surowców
        "Zbieranie odpadów",
        "Przetwarzanie i unieszkodliwianie odpadów",
        "Odzysk surowców",
        "Działalność związana z rekultywacją i pozostała działalność usługowa związana z gospodarką odpadami",
// Roboty budowlane związane ze wznoszeniem budynków
        "Realizacja projektów budowlanych związanych ze wznoszeniem budynków",
        "Roboty budowlane związane ze wznoszeniem budynków mieszkalnych i niemieszkalnych",
// Roboty związane z budową obiektów inżynierii lądowej i wodnej
        "Roboty związane z budową dróg kołowych i szynowych",
        "Roboty związane z budową rurociągów, linii telekomunikacyjnych i elektroenergetycznych",
        "Roboty związane z budową pozostałych obiektów inżynierii lądowej i wodnej",
// Roboty budowlane specjalistyczne
        "Rozbiórka i przygotowanie terenu pod budowę",
        "Wykonywanie instalacji elektrycznych, wodno-kanalizacyjnych i pozostałych instalacji budowlanych",
        "Wykonywanie robót budowlanych wykończeniowych",
        "Pozostałe specjalistyczne roboty budowlane",
// Handel hurtowy i detaliczny pojazdami samochodowymi; naprawa pojazdów samochodowych
        "Sprzedaż hurtowa i detaliczna pojazdów samochodowych, z wyłączeniem motocykli",
        "Konserwacja i naprawa pojazdów samochodowych, z wyłączeniem motocykli",
        "Sprzedaż hurtowa i detaliczna części i akcesoriów do pojazdów samochodowych, z wyłączeniem motocykli",
        "Sprzedaż hurtowa i detaliczna motocykli, ich naprawa i konserwacja oraz sprzedaż hurtowa i detaliczna części i akcesoriów do nich",
// Handel hurtowy, z wyłączeniem handlu pojazdami samochodowymi
        "Sprzedaż hurtowa realizowana na zlecenie",
        "Sprzedaż hurtowa płodów rolnych i żywych zwierząt",
        "Sprzedaż hurtowa żywności, napojów i wyrobów tytoniowych",
        "Sprzedaż hurtowa artykułów użytku domowego",
        "Sprzedaż hurtowa narzędzi technologii informacyjnej i komunikacyjnej",
        "Sprzedaż hurtowa maszyn, urządzeń i dodatkowego wyposażenia",
        "Pozostała wyspecjalizowana sprzedaż hurtowa",
        "Sprzedaż hurtowa niewyspecjalizowana",
// Handel detaliczny, z wyłączeniem handlu detalicznego pojazdami samochodowymi
        "Sprzedaż detaliczna prowadzona w niewyspecjalizowanych sklepach",
        "Sprzedaż detaliczna żywności, napojów i wyrobów tytoniowych prowadzona w wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna paliw do pojazdów silnikowych na stacjach paliw",
        "Sprzedaż detaliczna narzędzi technologii informacyjnej i komunikacyjnej prowadzona w wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna artykułów użytku domowego prowadzona w wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna wyrobów związanych z kulturą i rekreacją prowadzona w wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna pozostałych wyrobów prowadzona w wyspecjalizowanych sklepach",
        "Sprzedaż detaliczna prowadzona na straganach i targowiskach",
        "Sprzedaż detaliczna prowadzona poza siecią sklepową, straganami i targowiskami",
// transport lądowy oraz transport rurociągowy
        "Transport kolejowy pasażerski międzymiastowy",
        "Transport kolejowy towarów",
        "Pozostały transport lądowy pasażerski",
        "Transport drogowy towarów oraz działalność usługowa związana z przeprowadzkami",
        "Transport rurociągowy",
// transport wodny
        "Transport morski i przybrzeżny pasażerski",
        "Transport morski i przybrzeżny towarów",
        "Transport wodny śródlądowy pasażerski",
        "Transport wodny śródlądowy towarów",
// transport lotniczy
        "Transport lotniczy pasażerski",
        "Transport lotniczy towarów i transport kosmiczny",
// Magazynowanie i działalność usługowa wspomagająca transport
        "Magazynowanie i przechowywanie towarów",
        "Działalność usługowa wspomagająca transport",
// działalność pocztowa i kurierska
        "Działalność pocztowa objęta obowiązkiem świadczenia usług powszechnych (operatora publicznego)",
        "Pozostała działalność pocztowa i kurierska",
// Zakwaterowanie
        "Hotele i podobne obiekty zakwaterowania",
        "Obiekty noclegowe turystyczne i miejsca krótkotrwałego zakwaterowania",
        "Pola kempingowe (włączając pola dla pojazdów kempingowych) i pola namiotowe",
        "Pozostałe zakwaterowanie",
// Działalność usługowa związana z wyżywieniem
        "Restauracje i pozostałe placówki gastronomiczne",
        "Przygotowywanie żywności dla odbiorców zewnętrznych (katering) i pozostała gastronomiczna działalność usługowa",
        "Przygotowywanie i podawanie napojów",
// Działalność wydawnicza
        "Wydawanie książek i periodyków oraz pozostała działalność wydawnicza, z wyłączeniem w zakresie oprogramowania",
        "Działalność wydawnicza w zakresie oprogramowania",
// Działalność związana z produkcją filmów, nagrań wideo, programów telewizyjnych, nagrań dźwiękowych i muzycznych
        "Działalność związana z filmami, nagraniami wideo i programami telewizyjnymi",
        "Działalność w zakresie nagrań dźwiękowych i muzycznych",
// Nadawanie programów ogólnodostępnych i abonamentowych
        "Nadawanie programów radiofonicznych",
        "Nadawanie programów telewizyjnych ogólnodostępnych i abonamentowych",
// telekomunikacja
        "Działalność w zakresie telekomunikacji przewodowej",
        "Działalność w zakresie telekomunikacji bezprzewodowej, z wyłączeniem telekomunikacji satelitarnej",
        "Działalność w zakresie telekomunikacji satelitarnej",
        "Działalność w zakresie pozostałej telekomunikacji",
        "Działalność związana z oprogramowaniem i doradztwem w zakresie informatyki oraz działalność powiązana",
// Działalność usługowa w zakresie informacji
        "Przetwarzanie danych; zarządzanie stronami internetowymi (hosting) i podobna działalność; działalność portali internetowych",
        "Pozostała działalność usługowa w zakresie informacji",
// Finansowa działalność usługowa, z wyłączeniem ubezpieczeń i funduszów emerytalnych
        "Pośrednictwo pieniężne",
        "Działalność holdingów finansowych",
        "Działalność trustów, funduszów i podobnych instytucji finansowych",
        "Pozostała finansowa działalność usługowa, z wyłączeniem ubezpieczeń i funduszów emerytalnych",
// Ubezpieczenia, reasekuracja oraz fundusze emerytalne, z wyłączeniem obowiązkowego ubezpieczenia społecznego
        "Ubezpieczenia",
        "Reasekuracja",
        "Fundusze emerytalne",
// Działalność wspomagająca usługi finansowe oraz ubezpieczenia i fundusze emerytalne
        "Działalność wspomagająca usługi finansowe, z wyłączeniem ubezpieczeń i funduszów emerytalnych",
        "Działalność wspomagająca ubezpieczenia i fundusze emerytalne",
        "Działalność związana z zarządzaniem funduszami",
// Działalność związana z obsługą rynku nieruchomości
        "Kupno i sprzedaż nieruchomości na własny rachunek",
        "Wynajem i zarządzanie nieruchomościami własnymi lub dzierżawionymi",
        "Działalność związana z obsługą rynku nieruchomości wykonywana na zlecenie",
// Działalność prawnicza, rachunkowo-księgowa i doradztwo podatkowe
        "Działalność prawnicza",
        "Działalność rachunkowo-księgowa; doradztwo podatkowe",
// Działalność firm centralnych (head offices); doradztwo związane z zarządzaniem
        "Działalność firm centralnych (head offices) i holdingów, z wyłączeniem holdingów finansowych",
        "Doradztwo związane z zarządzaniem",
// Działalność w zakresie architektury i inżynierii; badania i analizy techniczne
        "Działalność w zakresie architektury i inżynierii oraz związane z nią doradztwo techniczne",
        "Badania i analizy techniczne",
// Badania naukowe i prace rozwojowe
        "Badania naukowe i prace rozwojowe w dziedzinie nauk przyrodniczych i technicznych",
        "Badania naukowe i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych",
// Reklama, badanie rynku i opinii publicznej
        "Reklama",
        "Badanie rynku i opinii publicznej",
// Pozostała działalność profesjonalna, naukowa i techniczna
        "Działalność w zakresie specjalistycznego projektowania",
        "Działalność fotograficzna",
        "Działalność związana z tłumaczeniami",
        "Pozostała działalność profesjonalna, naukowa i techniczna, gdzie indziej niesklasyfikowana",
        "Działalność weterynaryjna",
// Wynajem i dzierżawa
        "Wynajem i dzierżawa pojazdów samochodowych, z wyłączeniem motocykli",
        "Wypożyczanie i dzierżawa artykułów użytku osobistego i domowego",
        "Wynajem i dzierżawa pozostałych maszyn, urządzeń oraz dóbr materialnych",
        "Dzierżawa własności intelektualnej i podobnych produktów, z wyłączeniem prac chronionych prawem autorskim",
// Działalność związana z zatrudnieniem
        "Działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników",
        "Działalność agencji pracy tymczasowej",
        "Pozostała działalność związana z udostępnianiem pracowników",
// Działalność organizatorów turystyki, pośredników i agentów turystycznych oraz pozostała działalność usługowa w zakresie rezerwacji i działalności z nią związane
        "Działalność agentów i pośredników turystycznych oraz organizatorów turystyki",
        "Pozostała działalność usługowa w zakresie rezerwacji i działalności z nią związane",
// Działalność detektywistyczna i ochroniarska
        "Działalność ochroniarska, z wyłączeniem obsługi systemów bezpieczeństwa",
        "Działalność ochroniarska w zakresie obsługi systemów bezpieczeństwa",
        "Działalność detektywistyczna",
// Działalność usługowa związana z utrzymaniem porządku w budynkach i zagospodarowaniem terenów zieleni
        "Działalność pomocnicza związana z utrzymaniem porządku w budynkach",
        "Sprzątanie obiektów",
        "Działalność usługowa związana z zagospodarowaniem terenów zieleni",
// Działalność związana z administracyjną obsługą biura i pozostała działalność wspomagająca prowadzenie działalności gospodarczej
        "Działalność związana z administracyjną obsługą biura, włączając działalność wspomagającą",
        "Działalność centrów telefonicznych (call center)",
        "Działalność związana z organizacją targów, wystaw i kongresów",
        "Działalność komercyjna, gdzie indziej niesklasyfikowana",
// administracja publiczna i obrona narodowa; obowiązkowe zabezpieczenia społeczne
        "Administracja publiczna oraz polityka gospodarcza i społeczna",
        "Usługi na rzecz całego społeczeństwa",
        "Obowiązkowe zabezpieczenia społeczne",
// edukacja
        "Wychowanie przedszkolne",
        "Szkoły podstawowe",
        "Gimnazja i szkoły ponadgimnazjalne, z wyłączeniem szkół policealnych",
        "Szkoły policealne oraz wyższe",
        "Pozaszkolne formy edukacji",
        "Działalność wspomagająca edukację",
// Opieka zdrowotna
        "Działalność szpitali",
        "Praktyka lekarska",
        "Pozostała działalność w zakresie opieki zdrowotnej",
// Pomoc społeczna z zakwaterowaniem
        "Pomoc społeczna z zakwaterowaniem zapewniająca opiekę pielęgniarską",
        "Pomoc społeczna z zakwaterowaniem dla osób z zaburzeniami psychicznymi",
        "Pomoc społeczna z zakwaterowaniem dla osób w podeszłym wieku i osób niepełnosprawnych",
        "Pozostała pomoc społeczna z zakwaterowaniem",
// Pomoc społeczna bez zakwaterowania
        "Pomoc społeczna bez zakwaterowania dla osób w podeszłym wieku i osób niepełnosprawnych",
        "Pozostała pomoc społeczna bez zakwaterowania",
        "Działalność twórcza związana z kulturą i rozrywką",
        "Działalność bibliotek, archiwów, muzeów oraz pozostała działalność związana z kulturą",
        "Działalność związana z grami losowymi i zakładami wzajemnymi",
// Działalność sportowa, rozrywkowa i rekreacyjna
        "Działalność związana ze sportem",
        "Działalność rozrywkowa i rekreacyjna",
// Działalność organizacji członkowskich
        "Działalność organizacji komercyjnych, pracodawców oraz organizacji profesjonalnych",
        "Działalność związków zawodowych",
        "Działalność pozostałych organizacji członkowskich",
// Naprawa i konserwacja komputerów i artykułów użytku osobistego i domowego
        "Naprawa i konserwacja komputerów i sprzętu komunikacyjnego",
        "Naprawa i konserwacja artykułów użytku osobistego i domowego",
        "Pozostała indywidualna działalność usługowa",
        "Gospodarstwa domowe zatrudniające pracowników",
// Gospodarstwa domowe produkujące wyroby i świadczące usługi na własne potrzeby
        "Gospodarstwa domowe produkujące wyroby na własne potrzeby",
        "Gospodarstwa domowe świadczące usługi na własne potrzeby"
    ];
