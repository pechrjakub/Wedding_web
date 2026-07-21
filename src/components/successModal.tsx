import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    modalScene:{
        position: "fixed",
        inset: "0",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000",
    },
    modalWindow:{
        height: "400px",
        width: "400px",
        border: "1px solid rgb(0, 0, 0, 0.40)",
        borderRadius: "1rem",
        backgroundColor: "#fff7f3",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    modalButton:{
        marginTop: "40px",
        width: "12rem",
        padding: "0.5rem",
        fontSize: "1rem",
        backgroundColor: "#AABBD5",
        border: "1px solid rgb(0, 0, 0, 0.20)",
        borderRadius: "5px",
    },
    checkmark:{
        height: "120px",
        width: "120px",
        marginBottom: "60px",
    },
}
type modalProps = {
    isOpen: boolean;
    onClose: () => void; /*Funkce bez vstupních hodnot a nic nevrací. To je její typ*/
};

function SuccessModal({isOpen, onClose}: modalProps){
    if(!isOpen){
        return null; /*null abych dal vědět, že nechci nic vykreslit*/
    }

    return(
        <div style={styles.modalScene}>
            <div style={styles.modalWindow}>
                <img src="/images/Green_checkmark.png" alt="úspěšně odesláno" style={styles.checkmark}/> 
                <label>Děkujeme za vyplnění</label>
                <button style={styles.modalButton} onClick={onClose}>
                    Pokračovat
                </button>
            </div>
        </div>
    );
}

export default SuccessModal;