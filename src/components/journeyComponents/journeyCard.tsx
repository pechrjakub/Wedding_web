import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  journeyCard:{
    border: "1px solid rgba(47, 37, 34, 0.12)",
    padding: "1rem",
    boxShadow: "0 12px 35px rgba(47, 37, 34, 0.12)",
    width: "min(100%, clamp(280px, 45vw, 520px))", /*To 100% dělá, že karta bude responzivní podle clamp(), ale nikdy nepřeleze šířku rodiče*/
    zIndex: 3,
    position: "relative",
    },
  journeyPhoto:{
    maxWidth: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
  },
}
type JourneyPhoto = {
  title: string;
  description: string;
  image: string;
};


function JourneyCard ({title, description, image}:JourneyPhoto){
    return (
        <article style={styles.journeyCard} >  
              <img 
                style={styles.journeyPhoto}
                src={image}
                alt={title}
                loading="lazy"
              />
              <h1>{title}</h1>
              <h2>{description}</h2>
        </article> /*Article zvoleno, jelikož je to již cílený samostatný obsah. Je možno použít klasický, obecný div*/
    )
}

export default JourneyCard