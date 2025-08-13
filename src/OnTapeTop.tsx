import "./OnTapeTop.css";
import { Link } from "react-router-dom";
import React from "react";

function OnTapeTop() {
  return (
    <div className="OnTapeTop">
      {/* <img
        src="./images/Icon_ontape_light.png"
        className="OnTapeTop-header-image"
        alt="OnTape light icon"
      /> */}
      <p className="OnTapeTop-header-title">OnTape - Lofi Recorder</p>
      <p className="OnTapeTop-created">
        created by{" "}
        <Link to="/" className="App-link">
          Hiroki Asano
        </Link>
      </p>
    </div>
  );
}

export default OnTapeTop;
