import { useCallback } from "react";
import "./Gray.css";
const Gray = () => {
  const onGroupContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='springText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="gray">
      <div className="gray-child" />
      <div className="rectangle-parent3">
        <div className="group-child1" />
        <div className="authentic">Authentic</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child2" />
        <div className="sailing">Sailing</div>
      </div>
      <div className="rectangle-parent5">
        <div className="group-child3" />
        <div className="connect-with-locals">Connect with locals</div>
      </div>
      <div className="tags">Tags</div>
      <div className="rectangle-parent6" onClick={onGroupContainer3Click}>
        <div className="group-child4" />
        <div className="history3">History</div>
      </div>
      <div className="rectangle-parent7">
        <div className="group-child5" />
        <div className="spring" data-scroll-to="springText">
          Spring
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="group-child6" />
        <div className="outdoors">Outdoors</div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-child7" />
        <div className="low-budget">Low budget</div>
      </div>
    </div>
  );
};

export default Gray;
