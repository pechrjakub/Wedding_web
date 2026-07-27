import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  journeyCard:{
    width: "min(100%. 520px)",
    border: "1px, solid, rgba(47, 37, 34, 0.12)",
    padding: "1rem",
    boxShadow: "0 12px 35px rgba(47, 37, 34, 0.12)",
  },
  journeyPhoto:{
    width: "500px",
    aspectRatio: "4 / 3",
    objectFit: "cover",
  }
}
type JourneyPhoto = {
  year: string;
  title: string;
  description: string;
  image: string;
};

type JourneyCardProps = JourneyPhoto & {
  index: number;    
}

function JourneyCard ({year, title, description, image, index}:JourneyCardProps){
    return (
        <article key={title} style={{...styles.journeyCard, alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',}}> 
              <img 
                style={styles.journeyPhoto}
                src={image}
                alt={title}
                loading="lazy"
              />
              <h1>{year}</h1>
              <h1>{title}</h1>
              <h2>{description}</h2>
        </article> /*Article zvoleno, jelikož je to již cílený samostatný obsah. Je možno použít klasický, obecný div*/
    )
}

export default JourneyCard