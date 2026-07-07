import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  countdown_card:{
    backgroundImage: "url('/images/Pozadi.jpg')",
    backgroundSize: "cover",
    border: "1px solid #000000",
    padding: "2rem",
    borderRadius: "1rem",
    flex: "1",
  },
}

type countdownNumbers = {
    label: string;
    value: number;
}

function CountdownCard({label, value}: countdownNumbers){
    return(
        <div style={styles.countdown_card}>
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    );

}

export default CountdownCard;