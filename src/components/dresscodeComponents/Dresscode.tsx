import type { CSSProperties } from "react";
import DresscodeCard from "./dresscodeCard";
import {dresscodeCardData} from "../../data/dresscodeCardData";

const styles: Record<string, CSSProperties> = {
  dresscode: {
    padding: "4rem 2rem",
    backgroundColor: "#E0E6EF",
    color: "#2f2522",
    minHeight: "50dvh",
  },
  dresscodeContent: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  dresscodeH1:{
    fontSize: "4rem",
    color: "#D289C3",
    paddingBottom: "2rem",
    fontFamily: "The Artist Script",
  },
  dresscodeH2:{
    fontSize: "1rem",

    paddingBottom: "2rem",
  },
    dresscodeDeckOfCards:{
    display: "flex",
    gap: "2rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

}

function Dresscode (){
    return (
        <section style={styles.dresscode}>
            <div style={styles.dresscodeContent}>
                <h1 style={styles.dresscodeH1}>Dress code</h1>
                <h2 style={styles.dresscodeH2}>Pastelové barvy + formální outfit = vstupenka na obřad a hostinu.</h2>
                <h2 style={styles.dresscodeH2}>Jakmile přijde čas pořádně oslavovat, převlékněte se do čehokoli, v čem zvládnete tančit až do rána. Jen počítejte s tím, že večer může být chladno, tak si přibalte něco přes ramena.</h2>
            </div>
                <div style={styles.dresscodeDeckOfCards}>
                    {dresscodeCardData.map((card) => (
                        <DresscodeCard
                            key={card.hexcolor}
                            hexcolor={card.hexcolor}
                        />
                    ))}
                </div>
        </section> 
    )
}

export default Dresscode;