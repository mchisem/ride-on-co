import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '../Features/style.css';

const FeaturesPage = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <hr style={{backgroundColor:"orange", width: "40%"}}></hr>
        <br></br>
        <br></br>
        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="10">
              <MDBIcon icon="users" size="10x" className="orange-text" />
                <h5 className="font-weight-bold mb-3">Community Based</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="10">
              <MDBIcon icon="recycle" size="10x" className="orange-text" />
                <h5 className="font-weight-bold mb-3">Environmentally Friendly</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="10">
              <MDBIcon icon="biking" size="10x" className="orange-text" />
                <h5 className="font-weight-bold mb-3">Fast and Efficient Delivery</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="10">
              <MDBIcon icon="gift" size="10x" className="orange-text" />
                <h5 className="font-weight-bold mb-3">Earn Points</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;