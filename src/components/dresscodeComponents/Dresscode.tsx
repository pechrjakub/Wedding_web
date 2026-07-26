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
    fontSize: "1.5rem",
    color: "#D289C3",
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
                <h1 style={styles.dresscodeH1}>Náš dresscode</h1>
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