import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  countdownCard:{
    padding: "1rem 0",
    width: "clamp(20px, 12vw, 150px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    color: "#AABBD5",
  },
  countdownCardH1:{
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  countdownCardH2:{
    fontSize: "2rem",

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
            <h2 style={styles.countdownCardH2}>{label}</h2>
        </div>
    );

}

export default CountdownCard;