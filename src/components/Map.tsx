import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  placeMap:{
    width:"100%",
    height:"50dvh",
    border: "0",
  },
}
function Map () {
  const latitude = 49.06911462681072;
  const longitude = 14.30299697328157;
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
        <iframe style={styles.placeMap}/*iframe vloží jinou webovou stránku do té mé*/
            title="Mapa svatebního místa" /*Slouží například pro čtečky, aby vědělo, co to je */
            src={mapUrl} /*co tma mám načíst*/
            loading="lazy" /*načti mapu až ve chvíli, kdy se k ní uživatel přiblíží scrollováním*/
            referrerPolicy="no-referrer-when-downgrade" /*Jaké informace se posílají googlu o stránce. V tomto případě je to nejbezpečnější varianta*/
        />
    )
}

export default Map