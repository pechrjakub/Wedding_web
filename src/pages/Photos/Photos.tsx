import { Link } from 'react-router-dom';
import './Photos.css';

// Veřejný odkaz na Dropbox File request, nikoli odkaz ke sdílené složce.
function getUploadUrl(): string | null {
  const value = import.meta.env.VITE_DROPBOX_FILE_REQUEST_URL?.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      ['www.dropbox.com', 'dropbox.com'].includes(url.hostname) &&
      /^\/request\/[^/]+\/?$/.test(url.pathname) &&
      !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export default function Photos() {
  const uploadUrl = getUploadUrl();

  return (
    <main className="photos-page">
      <nav className="photos-nav" aria-label="Navigace">
        <Link to="/pechrovi">← Zpět na svatební web</Link>
        <span>Pechrovi</span>
      </nav>

      <section className="photos-card" aria-labelledby="photos-title">
        <p className="photos-eyebrow">Náš den vašima očima</p>
        <svg className="photos-camera" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M10 20h12l4-7h12l4 7h12a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4Z" />
          <circle cx="32" cy="36" r="11" />
          <path d="M47 27h5" />
        </svg>
        <h1 id="photos-title">Svatební fotky</h1>
        <p className="photos-intro">
          Úsměvy, objetí i poslední tanec. Podělte se s námi o chvíle,
          které jste zachytili, a pomozte nám uchovat vzpomínky na náš den.
        </p>

        <div className="photos-action">
          {uploadUrl ? (
            <>
              <a className="photos-button" href={uploadUrl} rel="noreferrer">
                Nahrát fotky do Dropboxu <span aria-hidden="true">↗</span>
              </a>
              <p>Pokračujete na Dropbox. Vlastní účet nepotřebujete.</p>
            </>
          ) : (
            <div className="photos-pending">
              <h2>Nahrávání ještě není otevřené</h2>
              <p>Fotky si zatím schovejte. Až sběr otevřeme, najdete tady tlačítko pro jejich nahrání.</p>
            </div>
          )}
        </div>

        <section className="photos-guide" aria-labelledby="photos-guide-title">
          <h2 id="photos-guide-title">Jak to bude fungovat</h2>
          <ol>
            <li><span aria-hidden="true">01</span><div><h3>Vyberte své momentky</h3><p>Po otevření Dropboxu vyberte fotky z telefonu. Můžete jich přidat více najednou.</p></div></li>
            <li><span aria-hidden="true">02</span><div><h3>Odešlete je k nám</h3><p>Dokončete formulář a počkejte na potvrzení nahrání. U většího výběru se hodí Wi-Fi.</p></div></li>
            <li><span aria-hidden="true">03</span><div><h3>Vzpomínky jsou doma</h3><p>Fotky dorazí přímo k nám. Děkujeme za každý zachycený okamžik!</p></div></li>
          </ol>
        </section>
        <p className="photos-signature">Děkujeme, že jste u toho s námi.</p>
      </section>
      <footer className="photos-footer">S láskou, Pechrovi</footer>
    </main>
  );
}
