import { useState, useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { Link } from "react-router-dom";

import "./detail.css";

function Detail() {
  const countryDetail = useSelector((state) => state.detail);
  console.log(countryDetail);
  const dispatch = useDispatch();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getDetail(id)).then((res) => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      {!loading ? (
        <div>
          <img src={countryDetail[0]?.image} alt="" />
          <h1>ID: {countryDetail[0]?.id}</h1>
          <h1>Name: {countryDetail[0]?.name}</h1>
          <h1>Continent: {countryDetail[0]?.continent}</h1>
          <h1>Capital: {countryDetail[0]?.capital}</h1>
          <h1>Subregion: {countryDetail[0]?.subregion}</h1>
          <h1>Area: {countryDetail[0]?.area}</h1>
          <h1>Poblacion: {countryDetail[0]?.population}</h1>

          <Link to="/home">
            <button className="Home-button">Home</button>
          </Link>
        </div>
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
}

export default Detail;
