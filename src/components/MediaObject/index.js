import React from 'react';
import { MDBMedia } from 'mdbreact';
import '../MediaObject/style.css';

const MediaObjectPage = () => {
  return (
    <MDBMedia id="media-container">
      <MDBMedia left className="mr-3">
        <MDBMedia id="media-picture" object src="https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </MDBMedia>
      <MDBMedia body id="media-text">
        <MDBMedia heading>
          Media heading
      </MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </MDBMedia>
    </MDBMedia>
  );
}

export default MediaObjectPage;