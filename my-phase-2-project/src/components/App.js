import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import AnimalsContainer from "./AnimalsContainer";
import Threatened from "./Threatened";
import NewAnimalForm from "./NewAnimalForm";

function App() {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3001/animals")
      .then((r) => r.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);

  const animalsToDisplay = animals
    .filter((animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((animal1, animal2) => animal1.name.localeCompare(animal2.name));

  function handleAddAnimal(newAnimal) {
    setAnimals([...animals, newAnimal]);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/animals"
            element={<AnimalsContainer 
              animals={animalsToDisplay} 
              onSearch={setSearchTerm}
              />}
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/threatened"
            element={<Threatened 
              animals={animalsToDisplay} 
              onSearch={setSearchTerm}
              />}
          />
          <Route
            path="/newanimal"
            element={<NewAnimalForm onAddAnimal={handleAddAnimal} />}
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

const theme = {
  font: { primary: "'Cantarell'. sans-serif" },
};
