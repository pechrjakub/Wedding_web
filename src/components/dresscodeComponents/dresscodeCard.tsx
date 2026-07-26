import type { CSSProperties } from "react";


type dresscodeCardData = {
  hexcolor: string;
};

const styles: Record<string, CSSProperties> = {
    dresscodeCard: {
    width: "clamp(90px, 18vw, 160px)", /*Minimálně 90 px, ideální 18% šířky, max 160 px*/
    aspectRatio: "1 / 1", /*Poměr stran bude stejný*/
    borderRadius: "50%",
    border: "1px solid #AABBD5",
    },
}
function DresscodeCard ({hexcolor}: dresscodeCardData){
    return(
        <span style={{...styles.dresscodeCard, backgroundColor: hexcolor}}>
        </span>
    )
}

export default DresscodeCard