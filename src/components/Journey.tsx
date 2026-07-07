import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  journey: {
    padding: "4rem 2rem",
    backgroundColor: "#fff7f3",
    color: "#2f2522",
  },
  journeyContent: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  journeyLabel: {
    fontSize: "4rem",
    textTransform: "uppercase",
    color: "#D289C3",
  }
}
function Journey(){
    return(
      <section style={styles.journey}>
        <div style={styles.journeyContent}>
          <h1 style={styles.journeyLabel}>Něco málo o nás</h1> 
          <p className="journey_text">Tady je ten text</p>
        </div>
      </section>
    );
}

export default Journey;