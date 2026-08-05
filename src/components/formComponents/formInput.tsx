import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> ={
    /* Type nr. 1
    formInputGroup:{
        position: "relative",
        maxWidth: "500px",
        width: "100%",
    },
    formInput:{
        padding: "0.5rem",
        outline: "none",
        border: "2px solid #c8c8c8",
        backgroundColor: "transparent",
        width: "100%",
    },
    formLabel:{
        position: "absolute",
        left: "0.8rem",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#646464",
        backgroundColor: "transparent",
        transition: "all 0.3s ease",
        pointerEvents: "none", /*Jestli bude reagovat na pointer eventy (vše, co dělám s myškou)*//*
    },*/
    
    
    formInputGroup:{
        position: "relative",
        margin: "1rem",
        width: "50%",
    },
    formInput:{
        border: "none",
        borderBottom: "2px solid #AABBD5",
        padding: "0.5rem",
        outline: "none",
        width: "100%",
        backgroundColor: "transparent",
    },
    formLabel:{
        position: "absolute",
        top: "0",
        left: "0",
        color: "#AABBD5",
        pointerEvents: "none",
        transition: "all 0.3s ease",
    },

}
function FormInput (){
    return(
        
        /* Type nr. 1
        <div style={styles.formInputGroup} className="formInputGroup">
            <input type="text" autoComplete = "off" style={styles.formInput} required/>
            <label style={styles.formLabel}>Name</label>
        </div>
        */
        <div style={styles.formInputGroup} className="formInputGroup">
            <input type="text" autoComplete = "off" style={styles.formInput} required/>
            <label style={styles.formLabel}>Jméno a příjmení</label>
        </div>
    )
}

export default FormInput