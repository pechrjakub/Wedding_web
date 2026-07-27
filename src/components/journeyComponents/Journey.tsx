import type { CSSProperties } from "react";
import { journeyPhotos } from '../../data/journeyPhotos';
import JourneyCard from "./journeyCard";

const styles: Record<string, CSSProperties> = {
  journey: {
    padding: "4rem 2rem",
    backgroundColor: "#E0E6EF",
    color: "#2f2522",
    minHeight: "50dvh",
  },
  journeyContent: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  journeyLabel: {
    fontSize: "3rem",
    textTransform: "uppercase",
    color: "#D289C3",
  },
  journeyTimeline: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
  },

}
function Journey(){
    return(
      <section style={styles.journey}>
        <div style={styles.journeyContent}>
          <h1 style={styles.journeyLabel}>Naše společná cesta životem</h1> 
        </div>

        <div style={styles.journeyTimeline}>
          {journeyPhotos.map((photo, index) =>(
            <JourneyCard
              year={photo.year}
              title={photo.title}
              description={photo.description}
              image={photo.image}
              index={index}
            />
          ))}

        </div>
      </section>
    );
}

export default Journey;