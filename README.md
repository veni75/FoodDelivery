# User Story 
## _Ételfutár alkalmazás_


# Felhasználói szerepkör

## _A program célja_
A cél, egy olyan többfunkciós oldal létrehozása, ahol a megrendelők a számukra megfelelő ételt kiválaszthatják. Több szempont szerint választhatnak: ízlés,  kinézet, összetétel.

## I. Főoldal

### 1. Felhasználói történet:
A felhasználó egy információs oldalra kerül, néhány aktuális étel fotóját tekintheti meg.
 
### Elfogadási kritérium:
 > Az oldal legyen mobilbarát, legyen ízléses és figyelemfelkeltő, e követelmények megvalósítása mellett legyen áttekinthető, és egyszerű.

 ### 2. Felhasználói történet:
A felhasználó egy menü segítségével kiválaszthatja:

- mely oldalak tartalma érdekli,
- választhat étrendek közül, vagy
- megnézheti az oldalak közül azokat, amelyekre jogosultsága van.

  
### Elfogadási kritérium:
 > A menü legyen mobilbarát, legyen könnyen kezelhető, e követelmények megvalósítása mellett legyen áttekinthető, valamint az oldal felső részén mindig látható.

 ### 3. Felhasználói történet:

 Az oldalon a felhasználónak lehetősége lesz regisztrációra, belépésre. Egyes oldalak megtekintésére, valamint rendelésre csak regisztráció és belépés után lesz lehetőség.
 
 
### Elfogadási kritérium:
 > A regisztráció egy űrlap kitöltésével történik, amely legyen mobilbarát, valamint egyértelmű és könnyen kezelhető.  Az adatok legyenek ellenőrizve, hogy megfelelő adatot irt-e be a felhasználó.

## II. Étrendek oldal

### 1. Felhasználói történet:
Ezen az oldalon az étlapok és az árak szerepelnek. A felhasználó megtekintheti az étrendeket, amelyből kiválaszthatja a megrendelni kívánt ételeket.
Étrendek, amelyek közül választhat: 
- hagyományos konyha,
- mentes ételek,
- vegetáriánus étrend,
- vegán étrend,
- nyers vegán étrend,
- alacsony szénhidrát tartalmú étrend.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, az ételek és az árak legyenek világosan feltüntetve, legyen megjelenítve az ételről kép, az étel neve és az étel összetevőinek felsorolása, az étel ára, valamint megrendelés gomb. A különböző étrendek aloldalakon jelenjenek meg. 

## III. Rendelési tájékoztató

### 1. Felhasználói történet:
Ezen az oldalon a felhasználó a rendelés, fizetés, kiszállítás általános tudnivalóiról, feltételeiről tájékozódhat.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, világosan írja le, hogy mik a rendelés feltételei, meddig rendelhető az étlapon szereplő étel, lehetséges-e online rendelés. A kiszállítás, fizetés feltételei egyértelműen legyenek ismertetve.

## IV. Kapcsolat

### 1. Felhasználói történet:
A felhasználó megtekintheti a cég elérhetőségeit, címét, telefonszámát, e-mail címét, és üzenetet is tud küldeni a cég részére.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, szerepeljen rajta a cég neve, telefonszáma, e-amil címe és egy térkép, amelyen fel van tüntetve a cég címe. Legyen az oldalon egy kapcsolati űrlap.

## V. Miben van a legtöbb ...? oldal:

### Felhasználói történet:
A felhasználó választhat a tápanyagok listájáról és megtudhatja, hogy mely ételekben van a legtöbb az adott tápanyagból, ezzel segítve a döntését az ételek kiválasztásában. Az adatok között lehet keresni, az adatokat lehet rendezni.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, világos és érthető formában tüntesse fel az ételek tápanyagtartalmát, a makro- és mikrotápanyagokat (árványi anyagokat és vitaminokat). Az adattárolás és az adatkezelés egy felhőben található MongoDB adatbázisban történjen. Az adatok szűrése és rendezése legyen a felhasználónak egyértelmű és könnyen kezelhető.


## VI. Belépés után Profilom oldal

### 1. Felhasználói történet:
A felhasználó ezen az oldalon szerkesztheti az adatait.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, jól áttekinthető. Az oldalon szerepeljen egy űrlap, amelyben legyenek feltüntetve az adatbázisban szereplő adatok és az űrlapba történő beírást követően az adatok legyenek módosíthatók. Az adatok tárolása és kezelése egy felhőben található MongoDB adatbázisban történjen.



# Adminisztrátori szerepkör

## _A program célja_
A cél a felhasználói szerepkörben leírtakon túlmenően az adminisztrátori feladatok ellátásához szükséges oldal létrehozása, ahol az arra jogosultsággal rendelkezők az oldallal kapcsolatos és az oldalon szereplő összes adatot megtekinthetik, illetve szerkeszthetik. 


## VII. Admin oldal

### 1. Felhasználói történet:
Ezen az oldalon az alábbiak listája lesz kereshető, rendezhető módon elérhető:
- számlák,
- rendelések, 
- ételek,
- összetevők,
- megrendelők,
- üzenetek listája.


### Elfogadási kritérium:
> Az oldal legyen mobilbarát, az adatok aloldalakon jelenjenek meg táblázatos formában. Az adatok szűrése és rendezése legyen az adminisztrátornak egyértelmű és könnyen kezelhető.

### 2. Felhasználói történet:
Lehetőség lesz az adatok megjelenítésére, törlésére, új elem bevitelére, módosításra. 

### Elfogadási kritérium:
> Az oldal legyen mobilbarát, az adatok kezelése során a CRUD műveletek (lekérdezés, törlés, módosítás, új adatok bevitele) legyen megoldva.

### 3. Felhasználói történet:
Jogosultságok kezelése: a cég dolgozói megtekinthetik mind az 5 aloldalt és jogosultságuk van  törlésre, új elem bevitelére, módosításra. Egyéb felhasználóknak az admin oldal megtekintésére nincs jogosultságuk.

### Elfogadási kritérium:
> Az oldal legyen mobilbarát. Attól függően, hogy a bejelentkező adminisztrátori jogosultsággal rendelkezik-e vagy nem, ennek függvényében az adminisztrátoroknak legyen jogosultsága az oldal megtekintésére, az adatok szerkesztésére.


## A projekt egyéb adatai:


Az alkalmazás kódja itt található: [https://github.com/veni75/vizsgaremek].

Megvalósítás időtartama: 10 hét
