import "./CashCrewTop.css";
import { Link } from "react-router-dom";
import React from "react";

function CashCrewTop() {
  return (
    <div className="CashCrewTop">
      {/* <img
        src="./images/Icon_cashcrew_light.png"
        className="CashCrewTop-header-image"
        alt="CashCrew light icon"
      /> */}
      <p className="CashCrewTop-header-title">
        CashCrew - 将来のお金の動きがわかる家計簿
      </p>
      <p className="CashCrewTop-created">
        created by{" "}
        <Link to="/" className="App-link">
          Hiroki Asano
        </Link>
      </p>
    </div>
  );
}

export default CashCrewTop;
