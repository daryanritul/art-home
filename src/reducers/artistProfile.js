import {
  CLEAR_ARTIST_ART_LIST,
  SET_ARTIST_ARTLIST,
  SET_ARTIST_LAST_ART,
  SET_ARTIST_PROFILE,
  SET_ERROR_ARTIST_PROFILE,
} from "../action/action.type";

const initialState = {
  artistProfile: [],
  artistArtList: [],
  artistLastArt: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ARTIST_ART_LIST:
      return {
        ...state,
        artistArtList: [],
      };

    case SET_ARTIST_PROFILE:
      return {
        ...state,
        artistProfile: action.payload,
      };
    case SET_ARTIST_ARTLIST:
      const { artistArtList } = state;

      const newArtList = Object.values(artistArtList).concat(action.payload);

      return {
        ...state,
        artistArtList: newArtList,
      };
    case SET_ARTIST_LAST_ART:
      return {
        ...state,
        artistLastArt: action.payload,
      };

    case SET_ERROR_ARTIST_PROFILE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
