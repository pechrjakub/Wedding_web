import type { CSSProperties, InputHTMLAttributes} from "react";
import {forwardRef} from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label: string;
};

const styles = {
  formAttendanceInput:{
    opacity: "0",
    pointerEvents: "none",
    position: "absolute",
  },
  formAttendanceLabel:{
    border: "2px solid #AABBD5",
    padding: "0.2rem",
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  }   
} satisfies Record<string, CSSProperties>

const FormBox = forwardRef<HTMLInputElement, FormInputProps>(({id, label, ...inputProps}, ref) => {
    return(
        <div>
            <input 
            id={id} 
            ref={ref}
            {...inputProps}
            style={styles.formAttendanceInput} 
            className="formAttendanceInput"/>
            <label htmlFor={id} style={styles.formAttendanceLabel}>{label}</label>
        </div>
)})

export default FormBox