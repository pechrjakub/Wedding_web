type countdownNumbers = {
    label: string;
    value: number;
}

function CountdownCard({label, value}: countdownNumbers){
    return(
        <div className="countdown_card">
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    );

}

export default CountdownCard;