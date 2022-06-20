import axios from "axios";
import {
  GET_COINNAME_SUCCCESS,
  GET_COINNAME_ERROR,
  RESET_COIN_LIST,
  RESET_VISIBILITY,
} from "./navSearchReducer";

export const getCoinName = (coinName) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinName}`
    );
    console.log("DATA", data);
    dispatch({
      type: GET_COINNAME_SUCCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINNAME_ERROR,
      payload: err,
    });
  }
};

export const resetList = () => (dispatch, getState) => {
  dispatch({
    type: RESET_COIN_LIST,
  });
};

export const resetVisibility = () => (dispatch, getState) => {
  dispatch({
    type: RESET_VISIBILITY,
  });
};
