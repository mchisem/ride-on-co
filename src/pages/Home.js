import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from  "../components/Header/header";
import MediaObject from '../components/MediaObject/index';
import Works from '../components/Works/index';
import Features from '../components/Features/index';
import Search from '../components/Search/index';
import Footer from "../components/Footer/index";

function Homepage() {
  return (
    <div style={{textAlign:"center"}}>
      <Header></Header>
      <MediaObject></MediaObject>
      <Works></Works>
      <Features></Features>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;