import { useState, useMemo } from "react";
import { useEffect } from "react";
import CountdownCard from "./CountdownCard";
import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
    countdown:{
    padding: "4rem 2rem", /*Vnitřní odszaení*/
    backgroundColor: "#fff7f3",
    textAlign: "center",
    color: "#2f2522",
    /*margin: 0 2rem;*/
    },
    countdownContent:{
    maxWidth: "800px",
    margin: "0 auto", /*doprostřed stránky zarovnání*/
    textAlign: "center",
    },
    countdownDeckOfCards:{
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
    justifyContent: "center",
    },
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
        {label: 'dní', value: days_left},
        {label: 'hodin', value: hours_left},
        {label: 'minut', value: minutes_left},
        {label: 'sekund', value: seconds_left},
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
        <h2>Do svatby zbývá</h2>
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