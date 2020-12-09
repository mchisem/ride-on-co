import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import '../Footer/style.css';

function FooterPage() {

  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <div>
            <h4>Get the culture delivered to your email</h4>
            <hr style={{backgroundColor: "orange", width: "50%"}}></hr>
            <br></br>
            <p>Promotions, News, Business Updates, Employment Opportunities, and more...</p>
            <div className="subscription">
                <input placeholder="Email address..."></input>
                <button id="subscribe-btn">Subscribe</button>
            </div>
            <br></br>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;