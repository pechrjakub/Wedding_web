import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> ={
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
        left: "0",
        padding: "0.5rem",
        color: "##646464",
        transition: "all 0.3s ease",
        backgroundColor: "transparent",
        pointerEvents: "none", /*Jestli bude reagovat na pointer eventy (vše, co dělám s myškou)*/
    },
}
function FormInput (){
    return(
        <div style={styles.formInputGroup} className="formInputGroup">
            <input type="text" autoComplete = "off" style={styles.formInput}/>
            <label style={styles.formLabel}>Name</label>
        </div>
    )
}

export default FormInput