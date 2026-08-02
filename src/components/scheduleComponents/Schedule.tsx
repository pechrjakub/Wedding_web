import type { CSSProperties } from "react";
import { scheduleData } from '../../data/scheduleData';
import ScheduleCard from "./scheduleCard";

const styles: Record<string, CSSProperties> = {
  schedule: {
    padding: "4rem 2rem",
    color: "#2f2522",
    minHeight: "40dvh",
    backgroundImage: "linear-gradient(rgba(255, 247, 243, 0.5), rgba(255, 247, 243, 0.5)),url('/images/Pozadi.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  scheduleContent: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  scheduleH1: {
    fontSize: "3rem",
    color: "#AABBD5",
    paddingBottom: "2rem",    
  },
}

function Schedule (){
    return(
        <section style={styles.schedule}>
            <div style={styles.scheduleContent}>
                <h1 style={styles.scheduleH1}>Harmonogram dne</h1>
                {scheduleData.map((card) => (
                    <ScheduleCard
                    key = {card.title}
                    image = {card.image}
                    title = {card.title}
                    time = {card.time}
                    />
                ))}
            </div>
        </section>
    )
}

export default Schedule