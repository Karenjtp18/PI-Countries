import { GET_COUNTRIES } from "./actions";
import { GET_COUNTRIES_NAME } from "./actions";
import { GET_DETAIL } from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  detail: [],
  activities: [],
  continentFilter: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
