import type { CSSProperties } from "react";

const styles = {
  place: {
    padding: "4rem 2rem",
    color: "#2f2522",
    minHeight: "40dvh",
    backgroundImage: "linear-gradient(rgba(255, 247, 243, 0.5), rgba(255, 247, 243, 0.5)),url('/images/Pozadi.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  placeContent: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  placeImage: {
    width: "clamp(5rem, 18vw, 11rem)",
  },
  placeH1:{
    margin: "0.5rem",
  },
} satisfies Record<string, CSSProperties>

function Place (){
  return (
    <section style={styles.place}>
        <div style={styles.placeContent}>
            <img src="/images/Location.png" alt="Zde to bude" style={styles.placeImage}/>
            <h1 style={styles.placeH1}>Stodola Plástovice</h1>    
            <h1 style={styles.placeH1}>Plástovice 5</h1>
            <h1 style={styles.placeH1}>Sedlec-Dívčice, 373 48</h1>
        </div>
    </section>
  )
}

export default Place