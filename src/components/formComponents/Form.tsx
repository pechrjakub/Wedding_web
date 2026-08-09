import { useForm } from 'react-hook-form';
/*import type { SubmitHandler } from 'react-hook-form';*/
import React from 'react';
import type { CSSProperties } from "react";
import { useState } from 'react';
import { supabase } from "../../../lib/supabaseClient";
import SuccessModal from '../successModal';
import FormInput from './formInput';
import FormBox from './formBox';

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
    position: "relative",
  },
  formSubmitButton:{
    color: "#AABBD5",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "1rem",
    border: "none",
    borderBottom: "1px solid #AABBD5",
  },
  formLegend:{
    fontSize: "1rem",
    color: "#AABBD5",
    marginBottom: "1rem",
  },
} satisfies Record<string, CSSProperties> 

type RSVPFormData ={
  name: string;
  attendance: 'yes' | 'no' | '';
  guestCount: number;
  allergies: string;
  songRequest: string;
  moreInfo: string;
  alcohol: 'yes' | 'no' | '';
  alcoholTypes: string[];
}

function Form(){
  
const { register, handleSubmit, formState: { errors }, watch, unregister} = useForm<RSVPFormData>({
  defaultValues: {
    name: '',
    attendance: '',
    guestCount: 1,
    allergies: '',
    songRequest: '',
    moreInfo: '',
    alcohol: '',
    alcoholTypes: [],
  },
});

const attendanceState = watch('attendance');
const alcoholState = watch ('alcohol');
const [modalState, setModalState] = useState (false);
const onSubmit = async (data: RSVPFormData) => { /*Async zde mám, protože ta funkce bude trvat delší dobu = čekám na odpověď databáze.*/
  const {error} = await supabase.from("wedding_form").insert({ /*{error} = z celého objektu si vem jen error. await čeká na odpověď databáze, musí být v async funkci*/
    name: data.name,
    attendance: data.attendance,
    guest_count: data.attendance === "yes" ? Number(data.guestCount) : 0,
    allergies: data.allergies || null, 
    requested_song: data.songRequest || null,
    more_info: data.moreInfo || null,
    alcohol: data.attendance === "yes" ? data.alcohol : "no",
    alcohol_types: data.alcohol === "yes" ? data.alcoholTypes : [],
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
    unregister(['guestCount', 'allergies', 'songRequest', 'moreInfo', 'alcohol']);
  }
}, [unregister, attendanceState]);

React.useEffect(() => {
  if (alcoholState === 'no') {
    unregister(['alcoholTypes']);
  }
}, [unregister, alcoholState]);

return(
      <section style={styles.form}>
        <div style={styles.formContent}>
          <h1 style={styles.formH1}>Dejte nám vědět, jestli dorazíte</h1> 
          
          <form onSubmit={handleSubmit(onSubmit)} style={styles.formRSVP}>
            <FormInput 
              label="Jméno"
              type="text"
              required
              placeholder=" " /*To tady využívám, kvůli stylování. (Používal jsem tam valid)*/
              {...register('name', {required: true})} /*Toto required je primárně pro ReactHookForm
              ↓ pokud existuje error.name, tak vykresli <p>. Pokud ne, nic nevykresluj
              */
            />
            {errors.name && <p className='error'></p>} 

            <fieldset style={{...styles.formRSVP, flexDirection: "row", gap: "1rem"}}>
              <legend style={styles.formLegend}>Dorazíte?</legend>
              <FormBox 
              label="Ano"
              value="yes"
              type="radio"
              id="yes"
              {...register("attendance", { required: true })}
              />
              <FormBox 
              label="Ne"
              value="no"
              type="radio"
              id="no"
              {...register("attendance", { required: true })}
              />
            </fieldset>

            {attendanceState === 'yes' && (
              <div className="attendee_details" style={styles.formRSVP}>
                
                <FormInput
                  label="Kolik vás můžeme očekávat?"
                  type="number"
                  placeholder=" "
                  min={1}
                  max={7}
                  {...register("guestCount", {required: true, max: 7, min: 1})}
                /> 
 
                <FormInput
                  label="Máte nějaké alergie?"
                  maxLength={50}
                  type="text"
                  placeholder=" "
                  {...register("allergies", { maxLength: 50})}
                />

                <FormInput
                  label="Máte písničku na přání?"
                  maxLength={100}
                  type="text"
                  placeholder= " "
                  {...register("songRequest", { maxLength: 100})}
                />
                
                <fieldset style={{...styles.formRSVP, flexDirection: "row", gap: "1rem"}}>
                  <legend style={styles.formLegend}>Budete pít alkohol?</legend>
                  <FormBox
                    label="Ano"
                    value="yes"
                    type="radio"
                    id="yes_2"
                    {...register("alcohol", { required: true })}
                  />
                  <FormBox
                    label="Ne"
                    value="no"
                    type="radio"
                    id="no_2"
                    {...register("alcohol", { required: true })}
                  />
                </fieldset>

              {alcoholState === 'yes' && (
                <fieldset style={{...styles.formRSVP, flexDirection: "row", gap: "1rem"}}>
                  <legend style={styles.formLegend}>Co přesně si dáte?</legend>
                  <FormBox
                    label="Pivo"
                    value="pivo"
                    type="checkbox"
                    id="beer"
                    {...register ("alcoholTypes")}
                  />
                  <FormBox
                    label="Víno"
                    value="víno"
                    type="checkbox"
                    id="wine"
                    {...register ("alcoholTypes")}
                  />
                  <FormBox
                    label="Drinky"  
                    value="drinky"
                    type="checkbox"
                    id="drinks"
                    {...register ("alcoholTypes")}
                  />
                </fieldset>
              )}

                <FormInput
                  label="Ještě něco, co bychom měli vědět?"
                  maxLength={200}
                  type="text"
                  placeholder= " "
                  {...register("moreInfo", { maxLength: 200})}
                />
              </div>)}
            <input type="submit" style={styles.formSubmitButton} value="Odeslat formulář" />
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