import "./Pop.css";
const Pop = () => {
  return (
    <div className="pop">
      <div className="popular-experiences">
        <div className="popular-experiences-in">
          Popular experiences in Sicily
        </div>
        <div className="best-place-to">Best place to eat nearby</div>
        <div className="deal">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <b className="los-angeles">Viri Ku C’e</b>
          <b className="los-angeles1">
            {" "}
            Via Riviera Lanterna, 29, Scoglitti, Vittoria RG
          </b>
          <b className="los-angeles2"> +39 0932 980016</b>
          <img className="map-pin-icon" alt="" src="/mappin.svg" />
          <img className="phone-call-icon" alt="" src="/phonecall.svg" />
        </div>
        <div className="deal1">
          <img className="image-icon" alt="" src="/image1@2x.png" />
          <b className="los-angeles3">Trattoria Piccolo Napoli</b>
          <b className="los-angeles1">
            {" "}
            Piazzetta Mulino a Vento, 4, 90139 Palermo
          </b>
          <b className="los-angeles2">+39 091 320431</b>
          <img className="map-pin-icon1" alt="" src="/mappin1.svg" />
          <img className="phone-call-icon" alt="" src="/phonecall1.svg" />
        </div>
        <div className="deal2">
          <img className="image-icon2" alt="" src="/image2@2x.png" />
          <b className="los-angeles6">Da Vittorio</b>
          <b className="los-angeles7">
            Via Friuli Venezia Giulia, 9, 92013 Menfi AG
          </b>
          <b className="los-angeles8">+39 0925 78381</b>
          <img className="map-pin-icon2" alt="" src="/mappin2.svg" />
          <img className="phone-call-icon2" alt="" src="/phonecall2.svg" />
        </div>
        <div className="view-all">
          <div className="view-all1">View all</div>
          <img className="view-all-child" alt="" src="/vector-1.svg" />
        </div>
        <img className="mapsicle-map-icon" alt="" src="/mapsicle-map@2x.png" />
      </div>
    </div>
  );
};

export default Pop;
