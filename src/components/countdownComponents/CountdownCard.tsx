import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  countdownCard:{
    backgroundImage: "linear-gradient(rgba(255, 247, 243, 0.5), rgba(255, 247, 243, 0.5)),url('/images/Pozadi.jpg')",
    backgroundSize: "cover",

    border: "1px solid #AABBD5",
    padding: "2rem",
    flex: "1",
    width: "clamp(120px, 18vw, 160px)",

    color: "#AABBD5",
  },
  countdownCardH1:{
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
}

type countdownNumbers = {
    label: string;
    value: number;
}

function CountdownCard({label, value}: countdownNumbers){
    return(
        <div style={styles.countdownCard}>
            <h1 style={styles.countdownCardH1}>{value}</h1>
            <p>{label}</p>
        </div>
    );

}

export default CountdownCard;