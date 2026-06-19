import { useState, useMemo } from "react";
import { useEffect } from "react";
import CountdownCard from "./CountdownCard";

const weddingDate = new Date('2026-09-26T12:00:00');


function Countdown(){
    const [now, setNow] = useState(new Date());
    const difference = weddingDate.getTime() - now.getTime(); /*getTime to hodí na milisekundy*/
        
    const days_left = useMemo(() => Math.floor(difference / (1000 * 60 * 60 * 24)) /*tady dělím milisekundy na dny*/, [now]);

    const hours_left = Math.floor((difference /(1000 * 60 * 60)) % 24); /*%24 vrátí zbytek po dělení 24 (hodiny)*/
    const minutes_left = Math.floor((difference / (1000 * 60)) % 60);
    const seconds_left = Math.floor((difference / 1000) % 60);

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
    <section className="countdown">
        <h2>Do svatby zbývá</h2>
        <div className="countdown_content">
            <div className="countdown_cards">
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