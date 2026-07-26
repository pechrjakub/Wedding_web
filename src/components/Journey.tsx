import type { CSSProperties } from "react";

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
  }
}
function Journey(){
    return(
      <section style={styles.journey}>
        <div style={styles.journeyContent}>
          <h1 style={styles.journeyLabel}>Naše společná cesta životem</h1> 
        </div>
      </section>
    );
}

export default Journey;