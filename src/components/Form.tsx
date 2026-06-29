import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import React from 'react';

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
    attendance: 'yes',
    guestCount: 1,
    allergies: '',
    songRequest: '',
  },
});

const attendanceState = watch('attendance');

const onSubmit: SubmitHandler<FormData> = (data) => {
  console.log("Odeslaná data:", data);
};

React.useEffect(() => {
  if (attendanceState === 'no') {
    unregister(['guestCount', 'allergies', 'songRequest']);
  }
}, [unregister, attendanceState]);

return(
      <section className="form">
        <div className="form_content">

          <h1>Dejte nám vědět, jestli dorazíte</h1> 

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', {required: true})} placeholder='Jméno'/>
            {errors.name && <p className='error'>Vyplněte své jmeno</p>}
            <select {...register("attendance", { required: true })}>
              <option value="yes">Ano</option>
              <option value="no">Ne</option>
            </select>
            {attendanceState === 'yes' && (
              <div className="attendee_details">
                <input min={1} max={10} type="number" placeholder="Počet hostů" {...register("guestCount", {required: true, max: 10, min: 1})} />
                <input maxLength={50} type="text" placeholder="Máš nějaké alergie?" {...register("allergies", { maxLength: 50})} />
                <input maxLength={100} type="text" placeholder="Nějaký song, co bys chtěl zahrát?" {...register("songRequest", { maxLength: 100})} />
              </div>)}
            <input type="submit"/>
          
          </form>
        </div>
      </section>
    );
}

export default Form;