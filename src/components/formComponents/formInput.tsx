import type { CSSProperties, InputHTMLAttributes } from "react";
import { forwardRef } from "react";

/*forwardRef - importuji kvůli tomu, aby to fungovalo s React Hook Form. Bez tohoto by se "ref", které se předává s register()
vůbec nedostalo na skutečný HTML input. Zkrátka by se to nedostalo do vnitřního inputu. "Ref" říká, že toto je ten input, který se má sledovat
Vesměs: Když někdo pošle "ref" komponentě FormInput, tak to přepošli až dovnitř na skutečný <input>*/


type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

/*InputHTMLAttributes = Tahle komponenta umí přijímat běžné vlastnosti, které umí html input. Je to TYP, po buildu zmizí. Slouží ke kontrole kódu
<HTMLInputElement> toto říká, že vlastnost jde konkrétně HTML inputu a ne třeba divu, buttonu nebo tak.
Celé to pak říká: FormInputProps je složeno ze všech běžných input vlastností + mojí vlastní vlastnosti label. Pokud bude chybět, tak na to budu upozorněn
*/

const styles ={
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
} satisfies Record<string, CSSProperties>
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({label, ...inputProps}, ref) => {
    /*
    Tady říám, že ref bude ukazovat přímo na skutečný input a props této komponenty mají typ FormInputProps
    Jinak řečeno: Vytvářím komponentu, která přijímá moje FormInputProps a umí předat ref přímo na HTML input
    
    Místo function používám const kvůli forwardref. Je to kvůli tomu, že forwardref je funkce, která má návratovou hodnotu React komponentu
    Tedy: Vytvoří se komponenta přes forwardRef a uloží se do konstanty FormInput. Následný export a import je stejný
    
    {label, ...inputProps} tímto zápisem říkám, ať si to vytáhne label zvlášť a zbytek uloží do inputProps = rest syntax.
    <input {...inputProps} /> = spread syntax - vše rozbal

    forwardRef dostane jako argument celou funkci. ({label, ...inputProps}, ref) jedná se o argumenty vnitřní funkce, kterou předávám do forwardRef
     => říká "z těchto parametrů proveď toto"
    Před šipkou: Co funkce přijímá. Za šipkou: Co funkce vykoná
    */
    return(
        
        /* Type nr. 1
        <div style={styles.formInputGroup} className="formInputGroup">
            <input type="text" autoComplete = "off" style={styles.formInput} required/>
            <label style={styles.formLabel}>Name</label>
        </div>
        */
        <div style={styles.formInputGroup} className="formInputGroup">
            <input 
                ref={ref}
                style={styles.formInput}
                autoComplete = "off"
                {...inputProps}
            />
            <label style={styles.formLabel}>{label}</label>
        </div>
    )
    }
)

export default FormInput