import "./CardBest.css";
const CardBest = () => {
  return (
    <div className="card-best">
      <div className="hotel1">
        <div className="rectangle-container">
          <div className="rectangle1" />
          <b className="teatro-greco-di">Teatro greco di Siracusa</b>
          <img
            className="teatro-greco-siracusa-hd-1-icon"
            alt=""
            src="/teatrogrecosiracusahd-1@2x.png"
          />
        </div>
        <div className="four-options">
          <div className="four-options-child" />
          <div className="starting-time-flexible">
            <p className="starting-time">Starting time</p>
            <p className="flexible">Flexible</p>
          </div>
          <div className="duration-5-to-15-container">
            <p className="starting-time">Duration</p>
            <p className="flexible">5 to 15 days</p>
          </div>
          <div className="availability-whole-year">
            <p className="starting-time">Availability</p>
            <p className="flexible">Whole year</p>
          </div>
          <div className="personal-guide-yes">
            <p className="starting-time">Personal Guide</p>
            <p className="flexible">Yes</p>
          </div>
          <img className="info-icon" alt="" src="/info.svg" />
          <img className="clock-icon" alt="" src="/clock.svg" />
          <img className="calendar-icon" alt="" src="/calendar.svg" />
          <img className="users-icon" alt="" src="/users.svg" />
        </div>
      </div>
      <div className="card-best-inner">
        <div className="parent">
          <div className="div">$349</div>
          <div className="from">From</div>
        </div>
      </div>
      <div className="review">
        <div className="review-inner">
          <div className="rectangle-wrapper">
            <div className="group-item" />
          </div>
        </div>
        <div className="div1">4.8</div>
        <div className="reviews">100 reviews</div>
        <img className="stars-icon" alt="" src="/stars.svg" />
      </div>
    </div>
  );
};

export default CardBest;
