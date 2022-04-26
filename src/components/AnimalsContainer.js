import React, {useState} from "react";
import Animal from "./Animal";
import styled from "styled-components";
import {H3, AnimalTiles} from "./StyleElements"

function AnimalContainer({animals}) {
    const [category, setCategory] = useState("All")
    

  function handleCategoryChange(category) {
      setCategory(category)
  }

  const animalsToDisplay = animals.filter(animal => {
      if (category === "All") { 
          return true
      } else {
          return animal.type === category
      }
  })

  return (
    <div className="animal-container">
        <div className="animal-filter"> 
        <H3><strong>Filter by animal class
          </strong>
            </H3>
             <select className="select" value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Amphibians">Amphibians</option>
        <option value="Birds">Birds</option>
        <option value="Insects">Insects</option>
        <option value="Mammals">Mammals</option>
        <option value="Reptiles">Reptiles</option>
      </select>
        </div>
     
      <AnimalTiles>
        {animalsToDisplay.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </AnimalTiles>
    </div>
  );
}

export default AnimalContainer;


