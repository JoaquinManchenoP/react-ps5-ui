import React from "react";
import "./navBar.css";

export default function NavBAr() {
  return (
    <div className="nav">
      <div className="leftSide">
        <di className="leftItem">
          <span>Games</span>
        </di>

        <div className="leftItem">
          <span>Media</span>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightItem">
          <span>Icon 1</span>
        </div>
        <div className="rightItem">
          <span>Icon 2</span>
        </div>
        <div className="rightItem">
          <span>Icon 3</span>
        </div>
        <div className="rightItem">
          <span>Time</span>
        </div>
      </div>
    </div>
  );
}
