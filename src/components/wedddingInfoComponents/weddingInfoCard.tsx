type WeddingInfoCardsProps = { /*Slouží to k určení typu dat, aby to nedělalo bordel*/
  title: string;
  lines: string[];
};

function WeddingInfoCards({ title, lines }: WeddingInfoCardsProps) { /*funkce si vezme props z CardsProp*/
  return (
    <div className="wedding_info_card">
      <h2>{title}</h2>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

export default WeddingInfoCards;