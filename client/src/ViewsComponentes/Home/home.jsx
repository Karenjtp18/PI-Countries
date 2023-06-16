import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Navbar from "../../Componentes/NavBar/navbar";
import Cards from "../../Componentes/Cards/cards";
import style from "./home.css";
// import style from "./home.css?inline";

const pageSize = 10;

function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  // console.log("estado global ", countries);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(countries.length / pageSize);
  const indexOfLastCountry = currentPage * pageSize;
  const indexOfFirstCountry = indexOfLastCountry - pageSize;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const next = () => {
    if (indexOfLastCountry > countries.length) return;
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (indexOfFirstCountry < 1) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(getCountries()).then((res) => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar></Navbar>

      {loading ? (
        <div>
          <img
            src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952542dzbun2w1r7f3dk1x94igjth33h99grfpijkha&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="loading"
          />
        </div>
      ) : countries.length === 0 ? (
        <div>
          <h1 className={style.mensaje}>NO SE ENCONTRO EL PAIS</h1>
        </div>
      ) : (
        <>
          <div className={style.paginado}>
            <button className={style.buttonPaginado} onClick={() => prev()}>
              PREV
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                className={
                  currentPage === index + 1
                    ? style.unButton
                    : style.buttonPaginado
                }
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className={style.buttonPaginado} onClick={() => next()}>
              NEXT
            </button>
          </div>

          <Cards countries={currentCountries}></Cards>

          <div className={style.paginado}>
            <button className={style.buttonPaginado} onClick={() => prev()}>
              PREV
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                className={
                  currentPage === index + 1
                    ? style.unButton
                    : style.buttonPaginado
                }
                key={index}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className={style.buttonPaginado} onClick={() => next()}>
              NEXT
            </button>
          </div>
        </>
      )}
    </div>

    // <div className="home">
    //   <h2 className="home-title"> Estas en el Home </h2>
    //   <Navbar />
    //   <Cards countries={countries} />
    // </div>
  );
}

export default Home;
