import {useState} from 'react';

function Form(){
   
const [guestName, setGuestName] = useState('');
const [guestNameError, setGuestNameError] = useState('');
const [attendance, setAttendance] = useState('');
const [guestCount, setGuestCount] = useState('1');
const [foodAlergies, setFoodAlergies] = useState('');

function handleSubmit(e: React.FormEvent<HTMLFormElement>){ /* e je proměnná typu události formuláře, konkrétně HTML formuláře. Je to tam kvůli preventDefault, aby TS věděl*/
  e.preventDefault(); //Zabrání tomu, že se stránka reloaduje po kliknutí na tlačítko

  if (guestName.trim() === "") { /*trim() odstraní vsechny mezerové znaky z základního textu*/
    setGuestNameError("Zadejte jmeno");
    return;
  }

  console.log("Já: ", guestName);
  console.log("Dorazím: ", attendance);
  console.log("Bude nás: ", guestCount);
  console.log("Jsem alergik na: ", foodAlergies);
}


return(
      <section className="form">
        <div className="form_content">
          <h1>Dejte nám vědět, jestli dorazíte</h1> 

          <form onSubmit={handleSubmit}> 
            <label>
              Vaše jméno?
              <input
                type="text"
                placeholder="Jméno hosta"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}/> 
            </label>

            {guestNameError && (
              <p className="form_error">{guestNameError}</p>
            )}

            <label>
              Dorazíte?
              <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
                <option value="yes">Ano</option>
                <option value="no">Ne</option>
              </select>
            </label>

            {attendance === "yes" && (
              <label>
                Kolik Vás bude?
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}/>
              </label>
            )}

            <label>
              Máš nějaké alergie?
              <textarea
                value={foodAlergies}
                onChange={(e) => setFoodAlergies(e.target.value)}/>
            </label>
            <button type="submit">Odeslat</button>
          </form>

          <p>Tvoje jméno je {guestName}</p>
        </div>
      </section>
    );
}

export default Form;