import React from "react";
import "./App.css";
import LinkOtherSite from "./LinkOtherSite";

function Header() {
  return (
    <header className="App-header">
      <p className="App-header-title">
        Tanka Poet / Software Developer in Japan
      </p>
      <p className="App-header-name">Hiroki Asano</p>
      <div className="App-header-contents">
        <p className="App-header-address">asano.hiroki@gmail.com</p>
        <LinkOtherSite
          title="Twitter"
          url="https://twitter.com/ashnoa"
        ></LinkOtherSite>
        <LinkOtherSite
          title="Blog"
          url="https://ashnoa.hatenablog.com/"
        ></LinkOtherSite>
        <LinkOtherSite
          title="YouTube"
          url="https://youtube.com/@ashnoa?si=oJK3FoML3XyhQ5r1"
        ></LinkOtherSite>
      </div>
    </header>
  );
}

export default Header;
