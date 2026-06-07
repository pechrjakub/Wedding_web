import {weddingInfoCardsData} from '../../data/weddingInfoCardsData';
import {weddingInfoColorCardsData} from "../../data/weddingInfoColorCardsData";
import WeddingInfoCard from './weddingInfoCard';
import { useState } from 'react';


function Wedding_info(){
  const [colorIndex, setColorIndex] = useState(0);
  const selectedColor = weddingInfoColorCardsData[colorIndex];

function handleNextColor() { /* Pokud je spuštěna tato funkce, vezmi předchozí index a přidej k němu 1. Pokud to dojde na konec, jdi na začátek*/
  setColorIndex((prevIndex) => (prevIndex + 1) % weddingInfoColorCardsData.length);
}
  return(
      <section className="wedding_info">
        <div className="wedding_info_content">
          <div className="wedding_info_cards">
            {weddingInfoCardsData.map((card) => (
              <WeddingInfoCard
                key={card.title}
                title={card.title}
                lines={card.lines}
              />
            ))}
            <button 
              className="wedding_info_card wedding_info_color_card"
              style={{ backgroundColor: selectedColor.hexcolor }}
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