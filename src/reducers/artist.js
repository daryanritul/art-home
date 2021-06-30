import { SET_ARTIST_LIST } from "../action/action.type";

const initialState = {
  artistList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST_LIST:
      return {
        ...state,
        artistList: action.payload,
      };

    default:
      return state;
  }
};
