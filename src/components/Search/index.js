import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import '../Search/style.css';

const SearchPage = () => {
  return (
    <MDBCol md="6">
        <hr style={{backgroundColor: "orange"}}></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <h1>Ready for the Culture?</h1>
        </div>
        <br></br>
        <div className="input-group">
        <div className="input-group-prepend">
           <span className="input-group-text white">
            <MDBIcon className="text-black" icon="map-marker-alt" />
          </span>
        </div>
        <input className="form-control" type="text" placeholder="Enter your address..." aria-label="Search" />
        <button id="search-btn">Search</button>
        </div>
        <br></br>
        <div>
            <h5>Get the app and order now</h5>
            
            <a
          className="app-download"
          href="https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_479177971632_pgrid_13945964887_&cid=aos-us-kwgo-brand-apple--slid---product-"
          target="apple"
          rel="apple download"
          >
            <MDBIcon 
            fab icon="apple" 
            style={{color: "black"}}
            />
          </a>
          <a
          className="app-download"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            <MDBIcon 
            fab icon="android"
            style={{color: "black"}}
            />
          </a>
        </div>
    </MDBCol>
  );
}

export default SearchPage;