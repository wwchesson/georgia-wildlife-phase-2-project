import React, { useState } from "react";
import { Card, IMG, H3 } from "./StyleElements";

function Animal({ animal }) {
  const { name, image, nombre } = animal;
  const [showSpanish, setShowSpanish] = useState(false);

  function handleSpanishClick() {
    setShowSpanish((showSpanish) => !showSpanish);
  }

  return (
    <Card>
      <H3>
        <strong>{name}</strong>
      </H3>
      <IMG src={image} alt="animal"></IMG>
      <div className="spanish-content">
        {showSpanish ? <H3>{nombre}</H3> : null}
        <button className="btn" onClick={handleSpanishClick}>
          {showSpanish ? "Hide Spanish Name" : "Show Spanish Name"}
        </button>
      </div>
    </Card>
  );
}

export default Animal;
