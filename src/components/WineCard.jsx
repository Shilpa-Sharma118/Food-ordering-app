import "../App.scss";

const WineCard = ({ wine }) => {
  return (
    <div className="wine-card">
      <img src={wine.image} alt="wine image" />
      <div>Wine name : {wine.wine}</div>
      <div>Winery : {wine.winery}</div>
    </div>
  );
};

export default WineCard;
