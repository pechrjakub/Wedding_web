import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  journeyCard:{
    border: "1px solid rgba(47, 37, 34, 0.12)",
    padding: "1rem",
    boxShadow: "0 12px 35px rgba(47, 37, 34, 0.12)",
    width: "min(100%, clamp(200px, 45vw, 520px))", /*To 100% dělá, že karta bude responzivní podle clamp(), ale nikdy nepřeleze šířku rodiče*/
    zIndex: 3,
    position: "relative",
    },
  journeyPhoto:{
    maxWidth: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
  },
  journeyH1:{
    fontSize: "1rem",
    padding: "1rem 0",
    textAlign: "center",
  }
}
type JourneyPhoto = {
  title: string;
  description: string;
  image: string;
};


function JourneyCard ({title, description, image}:JourneyPhoto){
    return (
        <div style={styles.journeyCard} >  
              <img 
                style={styles.journeyPhoto}
                src={image}
                alt={title}
                loading="lazy"
              />
              <h1 style={styles.journeyH1}>{description}</h1>
        </div>
    )
}

export default JourneyCard