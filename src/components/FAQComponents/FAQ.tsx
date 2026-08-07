import type { CSSProperties } from "react";
import FAQQuestion from "./FAQQuestion";
import {FAQData} from "../../data/FAQData";

const styles = {
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
    FAQH1:{
        fontSize: "4rem",
        color: "#D289C3",
        paddingBottom: "2rem",
        fontFamily: "The Artist Script",
    },
    FAQQuestion:{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
    },
} satisfies Record<string, CSSProperties>

function FAQ (){
    return (
        <section style = {styles.FAQ}>
            <div style = {styles.FAQContent}>
                <h1 style={styles.FAQH1}>FAQ</h1>
                <div style={styles.FAQQuestion}>
                    {FAQData.map((FAQ) => (
                        <FAQQuestion
                            key = {FAQ.question}
                            question = {FAQ.question}
                            answer = {FAQ.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ