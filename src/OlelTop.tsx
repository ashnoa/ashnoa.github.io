import './OlelTop.css';
import { Link } from 'react-router-dom';
import React from 'react';

function OlelTop() {
  return (
    <div className="OlelTop">
        <img src="./images/Icon_olel_light.png" className='OlelTop-header-image' alt="olel light icon" />
        <p className="OlelTop-header-title">
            olel - Simple Note App
        </p>
        <p className='OlelTop-created'>
            created by <Link to="/" className='App-link'>Hiroki Asano</Link>
        </p>
    </div>
  );
}

export default OlelTop;
