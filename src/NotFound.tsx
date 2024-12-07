import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className="NotFound">
      <p className="NotFound-header-title">404 Not Found</p>
      <Link to="/" className="App-link">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
