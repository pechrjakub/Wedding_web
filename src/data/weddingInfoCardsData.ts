type weddingInfoCardsData = { /*Slouží to k určení typu dat, aby to nedělalo bordel*/
  title: string;
  lines: string[];
};

export const weddingInfoCardsData = [
    {
        title: "Místo",
        lines: ["Adresa", "PSČ", "Kontakt"],
    },
    {
        title: "Drescode",
        lines: ["Oblek na obřad", "Pak je to jedno"],
    },
    {
        title: "Ještě třeba něco, ale nemusí být",
        lines: ["Text", "Text", "Text"],
    },
]