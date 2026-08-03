import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    FAQ:{
        padding: "4rem 2rem", /*Vnitřní odszaení*/
        backgroundColor: "#E0E6EF",
        color: "#2f2522",
    },
    FAQContent:{
        maxWidth: "1000px",
        margin: "0 auto", /*doprostřed stránky zarovnání*/
        textAlign: "center",
    },
}

function FAQ (){
    return (
        <section style = {styles.FAQ}>
            <div style = {styles.FAQContent}>
                <h1>Hodí se Vám vědět:</h1>
            </div>
        </section>
    )
}

export default FAQ