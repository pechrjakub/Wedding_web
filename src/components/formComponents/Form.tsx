import { useForm } from 'react-hook-form';
/*import type { SubmitHandler } from 'react-hook-form';*/
import React from 'react';
import type { CSSProperties } from "react";
import { useState } from 'react';
import { supabase } from "../../../lib/supabaseClient";
import SuccessModal from '../successModal';
import FormInput from './formInput';

const styles = {
  form:{
    padding: "4rem 2rem", /*Vnitřní odszaení*/
    backgroundImage: "linear-gradient(rgba(255, 247, 243, 0.5), rgba(255, 247, 243, 0.5)),url('/images/Pozadi.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#2f2522",
  },
  formContent:{
    maxWidth: "1000px",
    margin: "0 auto", /*doprostřed stránky zarovnání*/
    textAlign: "center",
  },
  formH1:{
    fontSize: "3rem",
    color: "#AABBD5",
    paddingBottom: "2rem",   
  },
  formRSVP:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    width: "100%",
  },
} satisfies Record<string, CSSProperties> 

type FormData ={
  name: string;
  attendance: 'yes' | 'no';
  guestCount: number;
  allergies: string;
  songRequest: string;
}

function Form(){
  
const { register, handleSubmit, formState: { errors }, watch, unregister} = useForm<FormData>({
  defaultValues: {
    name: '',
    attendance: 'no',
    guestCount: 1,
    allergies: '',
    songRequest: '',
  },
});

const attendanceState = watch('attendance');
const [modalState, setModalState] = useState (false);
const onSubmit = async (data: FormData) => { /*Async zde mám, protože ta funkce bude trvat delší dobu = čekám na odpověď databáze.*/
  const {error} = await supabase.from("wedding_form").insert({ /*{error} = z celého objektu si vem jen error. await čeká na odpověď databáze, musí být v async funkci*/
    name: data.name,
    attendance: data.attendance,
    guest_count: Number(data.guestCount), /*Pojistka, že opravdu odesílám čáslo*/
    allergies: data.allergies || null, 
    requested_song: data.songRequest || null,
  });

  if (error) {
    console.error("Chyba odeslání formuláře: ", error.message);
    return;
  }
  console.log("Data úspěšně odeslána");
  setModalState(true);
};


React.useEffect(() => {
  if (attendanceState === 'no') {
    unregister(['guestCount', 'allergies', 'songRequest']);
  }
}, [unregister, attendanceState]);

return(
      <section style={styles.form}>
        <div style={styles.formContent}>
          <h1 style={styles.formH1}>Dejte nám vědět, jestli dorazíte</h1> 
          
          <form onSubmit={handleSubmit(onSubmit)} style={styles.formRSVP}>
            <FormInput 
              label="Jméno a příjmení"
              type="text"
              required
              placeholder=" " /*To tady využívám, kvůli stylování. (Používal jsem tam valid)*/
              {...register('name', {required: true})} /*Toto required je primárně pro ReactHookForm
              ↓ pokud existuje error.name, tak vykresli <p>. Pokud ne, nic nevykresluj
              */
            />
            {errors.name && <p className='error'></p>} 

            <select {...register("attendance", { required: true })}>
              <option value="yes">Ano</option>
              <option value="no">Ne</option>
            </select>
            {attendanceState === 'yes' && (
              <div className="attendee_details" style={styles.formRSVP}>
                <FormInput
                  label="Máš nějaké alergie?"
                  maxLength={50}
                  type="text"
                  placeholder=" "
                  {...register("allergies", { maxLength: 50})}
                />

                <FormInput
                  label="Song na přání"
                  maxLength={100}
                  type="text"
                  placeholder= " "
                  {...register("songRequest", { maxLength: 100})}
                />
                <input min={1} max={10} type="number" placeholder="Počet hostů" {...register("guestCount", {required: true, max: 10, min: 1})} />
                
                <FormInput
                  label="Ještě něco, co bychom měli vědět?"
                  maxLength={200}
                  type="text"
                  placeholder= " "
                  {...register("songRequest", { maxLength: 200})}
                />
              </div>)}
            <input type="submit"/>
          </form>


          {modalState && (
            <SuccessModal
            isOpen={modalState}
            onClose={() => setModalState(false)}
          />
          )}
        </div>
      </section>
    );
}

export default Form;