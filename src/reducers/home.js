import {
  ADD_HOME_PAGE_ART,
  CLEAR_ART_LIST,
  SET_LAST_ART,
} from "../action/action.type";

const initialState = {
  artList: [],
  lastArt: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_PAGE_ART:
      const { artList } = state;

      const newArtList = Object.values(artList).concat(action.payload);

      return {
        ...state,
        artList: newArtList,
      };

    case CLEAR_ART_LIST:
      return {
        ...state,
        artList: [],
      };
    case SET_LAST_ART:
      return {
        ...state,
        lastArt: action.payload,
      };
    default:
      return state;
  }
};
