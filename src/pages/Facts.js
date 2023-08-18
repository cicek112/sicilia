import "./Facts.css";
const Facts = () => {
  return (
    <div className="facts">
      <div className="quick-facts">
        <div className="quick-facts1">Quick facts</div>
        <div className="quick-facts-child" />
        <b className="segestatourcom">segestatour.com</b>
        <b className="b">+39 0924 952356</b>
        <img
          className="icoutline-place-icon"
          alt=""
          src="/icoutlineplace.svg"
        />
        <b className="contrada-barbaro-snc">
          Contrada Barbaro SNC, 91013 Calatafimi-Segesta, Sicilia Italia
        </b>
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="group-icon" alt="" src="/group.svg" />
      </div>
      <div className="something-incorrect-in">
        Something incorrect in this review?
      </div>
      <div className="suggest-an-edit">Suggest an edit!</div>
    </div>
  );
};

export default Facts;
