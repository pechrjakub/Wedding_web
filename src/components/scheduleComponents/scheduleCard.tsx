import type { CSSProperties } from "react";
const styles: Record<string, CSSProperties> = {
  scheduleCard:{
    padding: "1rem",
    width: "150px", /*To 100% dělá, že karta bude responzivní podle clamp(), ale nikdy nepřeleze šířku rodiče*/
    margin: "0 auto",
    },
  schedulePhoto:{
    maxWidth: "100%",
    objectFit: "cover",
  },
  scheduleH1:{
    margin: "0.5rem 0",
  }
}

type scheduleData = {
    image: string;
    time: string;
    title: string;
}

function ScheduleCard({image, time, title}: scheduleData) {
    return (
        <div style={styles.scheduleCard}>
            <img style={styles.schedulePhoto} src={image} alt={title} loading="lazy" />
            <h1 style={styles.scheduleH1}>{title}</h1>
            <h1 style={styles.scheduleH1}>{time}</h1>
        </div>

    )
}

export default ScheduleCard