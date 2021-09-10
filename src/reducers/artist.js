import { SET_ARTIST_LIST, SET_ERROR_ARTIST_PAGE } from "../action/action.type";

const initialState = {
  artistList: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_LIST:
      return {
        ...state,
        artistList: action.payload,
      };
    case SET_ERROR_ARTIST_PAGE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
