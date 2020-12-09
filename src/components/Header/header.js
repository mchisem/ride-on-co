import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import AppleIcon from '../AppleIcon/index';
import AndroidIcon from '../AndroidIcon/index';
import '../Header/header.css';

function HeaderDisplay() {
  return (
    <div>
      <header className="App-header">
        <p>
          Get the app and order now.
          <br></br>
          <AppleIcon></AppleIcon>
          <AndroidIcon></AndroidIcon>
        </p>
      </header>
    </div>
  );
}

export default HeaderDisplay;