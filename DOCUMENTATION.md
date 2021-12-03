## **1. Az alkalmazás célja**

A cél, egy olyan többfunkciós oldal létrehozása, ahol a megrendelők a számukra megfelelő ételt kiválaszthatják. Több szempont szerint választhatnak: ízlés,  kinézet, összetétel.

## **2. Az alkalmazás telepítése**

- A célgépre le kell klónozni az adott GitHub repository tartalmát:
https://github.com/veni75/vizsgaremek
git clone https://github.com/veni75/vizsgaremek.git
- Telepíteni kell az alkalmazás függőségeit az `npm i` parancs segítségével a frontend és a backend mappában is külön-külön.
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.


## **3. Az alkalmazás konfigurálása**

A _config.service.ts_ állományban be kell állítani az API végpont elérési útvonalát:  

- http://localhost:3000

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást.
- A backend mappában a npm run docker-compose:up paranccsal indítható az alkalmazás.

Felhasználónév: varga.endre@gmail.com és Jelszó: testtest segítségével lehet belépni és a védett oldalakat is megtekinteni, valamint szerkeszteni bizonyos adatokat.

## **5. A végpontok dokumentációja**

Swagger

- Az alábbi URL-en érhető el a swagger dokumentáció: https://localhost:3000/api-docs

---
---

## **Linkek:**  

- [A User Story (felhasználói és adminisztrátori szerepkör) itt érhető el.](https://github.com/veni75/vizsgaremek/blob/main/README.md)
