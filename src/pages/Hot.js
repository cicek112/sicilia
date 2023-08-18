import "./Hot.css";
const Hot = () => {
  return (
    <div className="hot">
      <div className="hot1" />
      <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</div>
      <div className="whats-hot1">What’s hot</div>
      <div className="mattanza-1-parent">
        <img className="mattanza-1-icon" alt="" src="/mattanza-1@2x.png" />
        <img
          className="carbonplay-filled-alt-icon"
          alt=""
          src="/carbonplayfilledalt.svg"
        />
      </div>
      <div className="see-also-discovering-container">
        <span className="see-also-discovering-container1">
          <span>{`See also: `}</span>
          <span className="discovering-favignana">Discovering Favignana</span>
        </span>
      </div>
      <div className="hot-child" />
    </div>
  );
};

export default Hot;
