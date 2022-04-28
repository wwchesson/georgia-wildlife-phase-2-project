import React, { useEffect, useState } from "react";
import { HomeStyle } from "./StyleElements";

function Home() {
  const [homePhoto, setHomePhoto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/photos")
      .then((r) => r.json())
      .then((photo) => {
        setHomePhoto(photo);
      });
  }, []);

  const photoToDisplay = homePhoto.map((photo) => (
    <img className="deer" key={photo.id} src={photo.image} alt="home"></img>
  ));

  return (
    <HomeStyle>
      <h1 className="wildlife">Georgia Wildlife</h1>
      {photoToDisplay}
      <h3 className="intro">
        Learn about naturally occuring wildlife in the state of Georgia.
      </h3>
    </HomeStyle>
  );
}

export default Home;
