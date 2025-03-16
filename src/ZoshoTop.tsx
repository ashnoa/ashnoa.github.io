import "./ZoshoTop.css";
import { Link } from "react-router-dom";
import React from "react";

function ZoshoTop() {
  return (
    <div className="ZoshoTop">
      {/* <img
        src="./images/Icon_zosho_light.png"
        className="ZoshoTop-header-image"
        alt="Zosho light icon"
      /> */}
      <p className="ZoshoTop-header-title">Zosho - 蔵書管理</p>
      <p className="ZoshoTop-created">
        created by{" "}
        <Link to="/" className="App-link">
          Hiroki Asano
        </Link>
      </p>
    </div>
  );
}

export default ZoshoTop;
