# Svatební web

## Fotky s přístupem přes QR

Stránka /pechrovi/fotky bez klíče zůstává zamčená. QR obsahuje adresu
https://pechrovi.cz/pechrovi/fotky#klic=TAJNY_KLIC.
Klíč ověřuje POST /api/photo-access na serveru, který až po ověření vrátí Dropbox odkaz.
Odpovědi nejsou cachované. Odkaz ani klíč se nevkládají do klientského JS.

### Nastavení

V .env.local a na Vercelu nastavte serverové proměnné (bez prefixu VITE_):
- PHOTO_ACCESS_KEY: náhodný klíč, alespoň 32 znaků; lokálně již vygenerovaný.
- DROPBOX_FILE_REQUEST_URL: HTTPS odkaz Dropbox žádosti.

Z Vercelu odstraňte původní VITE_DROPBOX_FILE_REQUEST_URL. Nastavte nové proměnné
pro Production (případně Preview), commitněte a pushněte kód a proveďte deployment.
Lokální URL pro QR je v ignorovaném photo-access.local.txt. Tento soubor ani
.env.local necommitujte. Klíč neměňte po vytištění QR, pokud ho nechcete zneplatnit.

npm run dev podporuje stejný serverový handler přes Vite middleware.
Po změně .env.local restartujte server. npm run preview serverovou funkci neposkytuje.
Testy přístupu: npm run test:server

### Ověření nasazení

Bez fragmentu a s nesprávným klíčem se tlačítko nesmí zobrazit.
S platným klíčem se zobrazí Dropbox odkaz. Zkontrolujte i odstranění fragmentu
ze stejného okna. Síťová chyba nabídne opakování ověření.

Celý zkopírovaný QR odkaz funguje stejně jako výtisk. Přímý Dropbox odkaz lze
po získání použít samostatně. Starší veřejné deploymenty mohou obsahovat původní
Dropbox odkaz: pro zneplatnění použijte novou žádost a původní uzavřete.

