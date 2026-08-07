import type { CSSProperties } from "react";
import { journeyPhotos } from '../../data/journeyPhotos';
import JourneyCard from "./journeyCard";

const styles = {
  journey: {
    padding: "4rem 2rem",
    backgroundColor: "#E0E6EF",
    color: "#2f2522",
    minHeight: "50dvh",
  },
  journeyContent: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  journeyLabel: {
    fontSize: "5rem",
    color: "#D289C3",
    marginBottom: "3rem",
    fontFamily: "The Artist Script",
  },
  journeyTimeline: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    position: "relative",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  journeyLine: {
    position: "absolute",
    top: "0",
    bottom: "0", /*position, top a bottom = natáhni čáru od horního okraje rodiče až dolu*/
    width: "2px",
    backgroundColor: "#D289C3",
    transform: "translateX(-50%)",/*Posuň to zpátky doleva o polovinu vlastní šířky*/
    zIndex: 1,
  },
  journeyTimelineItem: {
    position: "relative", /*relative je nadřazený absolute. relative nastaví součadnice rodiči, absolute se podle nich umístí*/
    display: "flex",
    
  },
  journeyDate: {
    position: "absolute",
    color: "#D289C3",
    top: "50%",
    transform: "translate(-50%, -50%)", /*Posuň to zpátky doleva o polovinu vlastní šířky*/
    zIndex: 2,
    padding: "0.5rem",
    backgroundColor: "#E0E6EF",

    /* KOLEČKO, KDYBY NÁHODOU
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "3px solid #AABBD5",
    backgroundColor: "#E0E6EF",*/
  },
} satisfies Record<string, CSSProperties>

function Journey(){
    return(
      <section style={styles.journey}>
        <div style={styles.journeyContent}>
          <h1 style={styles.journeyLabel}>Střípky z naší společné cesty životem</h1> 
        </div>
        <div style={styles.journeyTimeline}>
          <div style={styles.journeyLine} className="journeyLine"></div>        
          {journeyPhotos.map((photo, index) =>(
            <div 
              key={photo.title}
              style={styles.journeyTimelineItem}
              className={index % 2 === 0 ? "journeyTimelineItemLeft" : "journeyTimelineItemRight"}
            >
              <div style={styles.journeyDate} className="journeyDate">{photo.year}</div>
              <JourneyCard
                title={photo.title}
                description={photo.description}
                image={photo.image}
              />
            </div>
          ))}

        </div>
      </section>
    );
}

export default Journey;