import type { CSSProperties } from "react";

type FAQData = {
    question: string,
    answer: string
}


const styles ={
    FAQQuestionH1:{
        fontSize: "2rem",
        color: "#D289C3",
        paddingBottom: "1rem",
        fontFamily: "The Artist Script",
    },
} satisfies Record<string, CSSProperties>

function FAQQuestion({question, answer}: FAQData) {
    return (
        <div>
            <h1 style={styles.FAQQuestionH1}>{question}</h1>
            <h2>{answer}</h2>
        </div>
    )
}

export default FAQQuestion