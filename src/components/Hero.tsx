import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  hero: {
    minHeight: "100dvh", 
    display: "flex", /*"automatické" rozložení obsahu*/
    alignItems: "center", /*svisle na střed*/
    justifyContent: "center", /*vodorovně na střed*/
    textAlign: "center",

    backgroundImage: "url('/images/Uvodni_foto.JPG')",
    backgroundSize: "cover", /*Obrázek vyplní celou část*/
    backgroundPosition: "center", /*Střed obrázku na středu*/
    backgroundRepeat: "no-repeat", /*Obrázek nebude jak dlaždice*/

    color: "#FFFFFF",
    position: "relative", /*vše, co bude v hero jako absolute, tak se podřídí .hero*/
    padding: "2rem",
  },
  heroContent: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    border: "3px solid rgb(0, 0, 0, 0.40)",
    borderRadius: "1rem",
    padding: "4rem",
  },
  heroH1: {
    fontSize: "clamp(3rem, 12vw, 10rem)", /*plynulá změna velikosti. Minimální, ideální, maximální*/
    margin: "0.5rem 0",
    maxWidth: "1200px",
    textShadow: "0 4px 18px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Tangerine', cursive",
  },
  heroP:{
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    margin: "0.5rem 0", /*Vnější odsazení*/
    textShadow: "0 4px 18px rgba(0, 0, 0, 0.5)",
  },
  heroArrowA: { /*Styl nalezen online*/
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "46px",
    height: "46px",
    display: "inline-block",
    textDecoration: "none",
    transition: "opacity 300ms ease",
  },
  heroArrowCircle:{ /*Stylování kolečka pro scroll*/
    position: "absolute",
    inset: "-5px",
    border: "2px solid #FFFFFF",
    borderRadius: "50%",
    boxSizing: "border-box",
  },
  heroArrowDart:{ /*Stylování sipek pro scroll*/
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "16px",
    height: "16px",
    borderLeft: "2px solid #FFFFFF",
    borderBottom: "2px solid #FFFFFF",
    transform: "translate(-50%, -60%) rotate(-45deg)",
    boxSizing: "border-box",
  }
}

function Hero(){
    return (
    <section className="hero" style={styles.hero}>
        <div className="heroContent" style={styles.heroContent}>
          <h1 style={styles.heroH1}>Karolína & Jakub</h1>
          <p style={styles.heroP}> 26 - 09 - 26</p>
        </div>
        <a className="heroArrowA" style={styles.heroArrowA} href="#countdown">
          <span style={styles.heroArrowCircle}></span>
          <span style={styles.heroArrowDart}></span>
        </a>
      </section>
    );
}

export default Hero;