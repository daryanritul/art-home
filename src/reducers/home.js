import {
  ADD_HOME_PAGE_ART,
  CLEAR_ART_LIST,
  SET_ERROR_HOME,
  SET_LAST_ART,
} from '../action/action.type';

const initialState = {
  artList: [],
  lastArt: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_PAGE_ART:
      const { artList } = state;

      //   const newArtList = Object.values(artList).concat(action.payload);

      return {
        ...state,
        artList: [...artList, action.payload],
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
    case SET_ERROR_HOME:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
