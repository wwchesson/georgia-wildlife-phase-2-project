import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewAnimalForm({ onAddAnimal }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nombre: "",
    type: "",
    image: "",
    threatened: false,
  });

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleCheckChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newAnimal) => {
        onAddAnimal(newAnimal);
        setFormData({
          name: "",
          nombre: "",
          type: "",
          image: "",
          threatened: false,
        });
        navigate("/animals");
      });
  }

  return (
    <div className="submit-form">
      <form className="animal-form" onSubmit={handleSubmit}>
        <h3 className="add-animal">
          <strong>Add an Animal!</strong>
        </h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter the animal's name..."
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Enter the animal's name in Spanish..."
          className="input-text"
        ></input>
        <br />
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          placeholder="Enter the animal's class..."
          className="input-text"
        ></input>
        <br />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Enter the animal's image URL..."
          className="input-text"
        ></input>
        <br />
        <h2 className="threat">Is this animal threatened?</h2>
        <label className="yes">
          Yes
          <input
            type="checkbox"
            name="threatened"
            checked={formData.threatened}
            onChange={handleCheckChange}
            className="form-check-input"
          ></input>
        </label>
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="btn"
        ></input>
      </form>
    </div>
  );
}

export default NewAnimalForm;
