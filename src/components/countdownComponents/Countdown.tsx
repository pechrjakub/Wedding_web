import { useState, useMemo } from "react";
import { useEffect } from "react";
import CountdownCard from "./CountdownCard";
import type { CSSProperties } from "react";

const styles = {
    countdown:{
    padding: "4rem 2rem", /*Vnitřní odszaení*/
    backgroundColor: "#FFF7F3",
    textAlign: "center",
    minHeight: "40dvh",
    color: "#2f2522",
    backgroundImage: "linear-gradient(rgba(255, 247, 243, 0.5), rgba(255, 247, 243, 0.5)),url('/images/Pozadi.jpg')",
    backgroundSize: "cover",
    },
    countdownContent:{
    maxWidth: "700px",
    margin: "0 auto", /*doprostřed stránky zarovnání*/
    },
    countdownDeckOfCards:{
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    justifyContent: "center",
    alignItems: "center",
    },
    countdownH1:{
    fontSize: "3rem",
    color: "#AABBD5",
    paddingBottom: "2rem",
    }
} satisfies Record<string, CSSProperties>

type CzechCountdownWords = {
    one: string,
    few: string,
    many: string,
}

function makeCzech(value: number, words: CzechCountdownWords){
    if (value === 1){
        return words.one;
    }
    if (value >=2 && value <= 4){
        return words.few;
    }

    return words.many;
}

const weddingDate = new Date('2026-09-26T12:00:00');


function Countdown(){
    const [now, setNow] = useState(new Date());
    
    const {days_left, hours_left, minutes_left, seconds_left} = useMemo(() => { /*Z objektu, který vrátí useMemo rovnou vytvoř samostnané proměnné uvedené v {} = destructuring*/
        const difference = weddingDate.getTime() - now.getTime(); /*getTime to hodí na milisekundy*/
        
        return{
        days_left: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours_left: Math.floor((difference / (1000 * 60 * 60)) % 24),/*%24 vrátí zbytek po dělení 24 (hodiny)*/
        minutes_left: Math.floor((difference / (1000 * 60)) % 60),
        seconds_left: Math.floor((difference / 1000) % 60),
        }
    }, [now]);
    
    const countdownNumbers = [
        {label: makeCzech(days_left, {one: 'den', few: 'dny', many: 'dní'}), value: days_left},
        {label: makeCzech(hours_left, {one: 'hodina', few: 'hodiny', many: 'hodin'}), value: hours_left},
        {label: makeCzech(minutes_left, {one: 'minuta', few: 'minuty', many: 'minut'}), value: minutes_left},
        {label: makeCzech(seconds_left, {one: 'sekunda', few: 'sekundy', many: 'sekund'}), value: seconds_left},
    ];
    

    /*() => {} je arrow function. Je bez vstupních parametrů, šipka určuje, že "následuje tělo fce", {} obsahují příkazy funkce*/
    useEffect (() => { /*Po vykreslení komponenty se spustí funkce v useEffect*/
    const interval = setInterval(() => { /*setInterval vytváří opakující se časovač, jeho identifikátor se uloží do "interval"*/
        setNow(new Date()); /*do stavu uloží aktuální čas. Tohle běží neustále, jelikož si stránka interval pamatuje*/ 
    }, 1000); /*interval nastaven na 1 sekundu*/
    return () => clearInterval(interval); /*Toto slouží k zastavení intervalu, pokud není komponenta vykreslována*/
    }, []); /*[] značí to, že se useEffect spustí pouze při prvním zobrazení komponenty*/ 

    return(
    <section id="countdown" style={styles.countdown}>
        <h1 style={styles.countdownH1}>Každou vteřinou blíž k našemu ANO</h1>
        <div style={styles.countdownContent}>
            <div className="countdownDeckOfCards" style={styles.countdownDeckOfCards}>
                {countdownNumbers.map((time) => (
                    <CountdownCard
                        key={time.label}
                        label={time.label}
                        value={time.value}
                    />
                ))}
            </div>
        </div>
    </section>
    );
}

export default Countdown;