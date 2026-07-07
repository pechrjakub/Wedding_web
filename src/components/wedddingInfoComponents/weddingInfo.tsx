import {weddingInfoCardsData} from '../../data/weddingInfoCardsData';
import {weddingInfoColorCardsData} from "../../data/weddingInfoColorCardsData";
import WeddingInfoCard from './weddingInfoCard';
import { useState } from 'react';
import type { CSSProperties } from "react";


export const weddingInfoCard: CSSProperties ={
  flex: "1", /*Vyplň prostor*/
  padding: "2rem",
  backgroundColor: "#dfb4d0",
  borderRadius: "1rem",
}

const styles: Record<string, CSSProperties> = {
  weddingInfo:{
    padding: "4rem 2rem", /*Vnitřní odszaení*/
    backgroundColor: "#fff7f3",
    color: "#2f2522",
  },
  weddingInfoContent:{
    maxWidth: "1200px",
    margin: "0 auto", /*doprostřed stránky zarovnání*/
    textAlign: "center",
  },
  weddingInfoDeckOfCards:{
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
  },
  weddingInfoColorCard: {
    border: "none",
    cursor: "pointer",
    font: "inherit",
    transition: "background-color 0.4s ease, transform 0.2s ease",
  }
}


function Wedding_info(){
  const [colorIndex, setColorIndex] = useState(0);
  const selectedColor = weddingInfoColorCardsData[colorIndex];

function handleNextColor() { /* Pokud je spuštěna tato funkce, vezmi předchozí index a přidej k němu 1. Pokud to dojde na konec, jdi na začátek*/
  setColorIndex((prevIndex) => (prevIndex + 1) % weddingInfoColorCardsData.length);
}
  return(
      <section style={styles.weddingInfo}>
        <div style={styles.weddingInfoContent}>
          <div className="weddingInfoDeckOfCards" style={styles.weddingInfoDeckOfCards}>
            {weddingInfoCardsData.map((card) => (
              <WeddingInfoCard
                key={card.title}
                title={card.title}
                lines={card.lines}
              />
            ))}
            <button className="weddingInfoColorCard"  
              style={{ 
                ...styles.weddingInfoColorCard,
                ...weddingInfoCard,
                backgroundColor: selectedColor.hexcolor }} 
              onClick={handleNextColor}
            >
              <h1>{selectedColor.description}</h1>
            </button>
          </div>  
        </div>
      </section>
    );
}

export default Wedding_info;