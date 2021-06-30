import { SET_ARTIST_ARTLIST, SET_ARTIST_PROFILE } from "../action/action.type";

const initialState = {
  artistProfile: [],
  artistArtList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_PROFILE:
      return {
        ...state,
        artistProfile: action.payload,
      };
    case SET_ARTIST_ARTLIST:
      console.log("reducer SET_ARTIST_ARTLIST ");
      return {
        ...state,
        artistArtList: action.payload,
      };

    default:
      return state;
  }
};
