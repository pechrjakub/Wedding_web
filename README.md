# Svatební web

Pokus o svatební web

## Fotky ze svatby

Stránka pro hosty je na `/pechrovi/fotky`. Bez platného odkazu zobrazuje informaci,
že nahrávání ještě není otevřené.

Pro zapnutí nastavte `VITE_DROPBOX_FILE_REQUEST_URL` v `.env.local` na HTTPS odkaz
Dropbox File request ve tvaru `https://www.dropbox.com/request/...` a restartujte
vývojový server. Na Vercelu nastavte stejnou proměnnou a proveďte nový deployment.
Použijte žádost o soubory, nikoli sdílenou složku. Odkaz je veřejnou součástí webu;
heslo k žádosti do této proměnné ani zdrojového kódu nepatří.

QR kód má odkazovat na `/pechrovi/fotky` na produkční doméně, aby šlo později
změnit cíl tlačítka bez změny vytištěného QR. Samotná stránka neověřuje hosty.
