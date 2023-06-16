import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_DETAIL = "GET_DETAIL";

const URL = "http://localhost:3001/";

export function getCountries() {
  return async function (dispatch) {
    const { data } = await axios.get(URL);

    return dispatch({
      type: "GET_COUNTRIES",
      payload: data,
    });
  };
}

export function getCountriesName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/countries?name=" + name
      );

      return dispatch({
        type: "GET_COUNTRIES_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDetail(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}countries/${id}`);

    return dispatch({
      type: "GET_DETAIL",
      payload: data,
    });
  };
}
