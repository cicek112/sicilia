import "./CardBest1.css";
const CardBest1 = () => {
  return (
    <div className="card-best1">
      <div className="hotel2">
        <div className="rectangle-parent1">
          <div className="rectangle2" />
          <b className="naxos-archeological-park">Naxos Archeological Park</b>
          <img
            className="taormina-teatro-1-icon"
            alt=""
            src="/taorminateatro-1@2x.png"
          />
        </div>
        <div className="four-options1">
          <div className="four-options-item" />
          <div className="starting-time-flexible1">
            <p className="starting-time1">Starting time</p>
            <p className="flexible1">Flexible</p>
          </div>
          <div className="duration-5-to-15-container1">
            <p className="starting-time1">Duration</p>
            <p className="flexible1">5 to 15 days</p>
          </div>
          <div className="availability-whole-year1">
            <p className="starting-time1">Availability</p>
            <p className="flexible1">Whole year</p>
          </div>
          <div className="personal-guide-yes1">
            <p className="starting-time1">Personal Guide</p>
            <p className="flexible1">Yes</p>
          </div>
          <img className="info-icon1" alt="" src="/info.svg" />
          <img className="clock-icon1" alt="" src="/clock.svg" />
          <img className="calendar-icon1" alt="" src="/calendar.svg" />
          <img className="users-icon1" alt="" src="/users.svg" />
        </div>
      </div>
      <div className="card-best-child">
        <div className="group">
          <div className="div2">$349</div>
          <div className="from1">From</div>
        </div>
      </div>
      <div className="review1">
        <div className="review-child">
          <div className="rectangle-frame">
            <div className="group-inner" />
          </div>
        </div>
        <div className="div3">4.8</div>
        <div className="reviews1">100 reviews</div>
        <img className="stars-icon1" alt="" src="/stars.svg" />
      </div>
    </div>
  );
};

export default CardBest1;
