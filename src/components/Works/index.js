import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '../Works/Works.css';

const FeaturesPage = () => {
  return (
      <section className="text-center my-5" id="works">
        <h2 className="h1-responsive font-weight-bold my-5">
          How it works
        </h2>
        <MDBRow>
          <MDBCol md="3">
            <MDBIcon icon="search" size="4x" className="red-text" />
            <h5 className="font-weight-bold my-4">Browse</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="shopping-cart" size="4x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Order</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon icon="biking" size="4x" className="green-text" />
            <h5 className="font-weight-bold my-4">Delivery</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <MDBIcon far icon="star" size="4x" className="purple-text" />
            <h5 className="font-weight-bold my-4">Rate</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;