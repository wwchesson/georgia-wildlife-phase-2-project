import React from "react";
import SearchBar from "./SearchBar";
import { Card, IMG, H3, AnimalTiles } from "./StyleElements";

function Threatened({ animals, onSearch }) {
  const threatenedAnimals = animals.filter(
    (animal) => animal.threatened === true
  );

  return (
    <div className="animal-container">
      <SearchBar onSearch={onSearch} />
      <AnimalTiles>
        {threatenedAnimals.map((animal) => (
          <Card key={animal.id}>
            <div>
              <H3>
                <strong>{animal.name}</strong>
              </H3>
              <IMG src={animal.image} alt="animal"></IMG>
            </div>
    
          </Card>
        ))}
      </AnimalTiles>
    </div>
  );
}

export default Threatened;
