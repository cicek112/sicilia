import "./Left.css";
const Left = () => {
  return (
    <div className="left">
      <div className="jump-to-chapter">Jump to chapter</div>
      <div className="how-to-get">How to get there</div>
      <div className="history">History</div>
      <div className="did-you-know">Did you know?</div>
      <div className="whats-hot">What’s hot</div>
      <div className="popular-attraction-nearby-container">
        <span className="popular-attraction-nearby-container1">
          <p className="popular-attraction">Popular attraction</p>
          <p className="popular-attraction">nearby</p>
        </span>
      </div>
      <div className="quick-facts2">Quick facts</div>
      <div className="tripadvisor-reviews">TripAdvisor reviews</div>
      <div className="google-reviews">Google reviews</div>
      <div className="hotel">
        <div className="rectangle-parent">
          <div className="rectangle" />
          <b className="favignana-tuna-fishing">Favignana tuna fishing</b>
        </div>
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="search">Plan your trip</div>
        <img className="mattanza-2-icon" alt="" src="/mattanza-2@2x.png" />
      </div>
    </div>
  );
};

export default Left;
