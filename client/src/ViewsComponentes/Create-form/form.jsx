import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, addActivity } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const [state, setState] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    cId: [],
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(addActivity(state));
    // resetForm()
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setState({
      ...state,
      cId: state.cId.concat(e.target.value),
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setState({
        ...state,
        countries: e.target.value,
      });
    }
  };

  useEffect(() => {
    // console.log(countries)
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button className="btn">Back</button>
      </Link>
      <form className="form" onSubmit={handleOnSubmit}>
        <div>
          <label className="label">Nombre: </label>
          <input
            type="text"
            className="input"
            name="name"
            value={state.name}
            placeholder="Name here..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Duracion (minutos): </label>
          <input
            type="text"
            className="d-input"
            name="duration"
            value={state.duration}
            placeholder="Duration here..."
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">Dificultad: </label>
          <select className="select" name="difficulty" onChange={handleChange}>
            <option value="---">Select difficulty</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label className="label">Estacion: </label>
          <select className="select" name="season" onChange={handleChange}>
            <option value="---">Select season</option>
            <option value={state.Summer}>Summer</option>
            <option value={state.Autumn}>Autumn</option>
            <option value={state.Winter}>Winter</option>
            <option value={state.Spring}>Spring</option>
          </select>
        </div>
        <div>
          <label className="label">Paises: </label>
          <select
            className="select"
            name="Paises"
            onChange={handleSelect}
            value={state.id}
          >
            <option>Selecciona los paises de la activdad...</option>
            {countries?.map((mp) => (
              <option key={mp.cca3} value={mp.id}>
                {mp.name}
              </option>
            ))}

            {console.log(state.cId)}
            <div>
              {" "}
              {state.cId &&
                state.cId.map((mp) => (
                  <ul className="countries-creates" key={mp}>
                    {mp}
                  </ul>
                ))}{" "}
            </div>
          </select>
        </div>
        <button className="btn">Add activity</button>
      </form>
    </div>
  );
}

export default Form;
