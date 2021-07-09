import {
  ADD_HOME_PAGE_ART,
  CLEAR_ART_LIST,
  SET_ERROR_HOME,
  SET_IS_LOADING_HOME,
  SET_LAST_ART,
} from '../action/action.type';

const initialState = {
  artList: { col1: [], col2: [], col3: [] },
  lastArt: [],
  error: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_PAGE_ART:
      const { col1, col2, col3 } = state.artList;
      const { payload } = action;
      const payloadlen = payload.length;

      const newCol1 = payload.slice(0, payloadlen / 3);
      const newCol2 = payload.slice(payloadlen / 3, (payloadlen / 3) * 2);
      const newCol3 = payload.slice((payloadlen / 3) * 2, payloadlen);

      const newArtList = {
        col1: Object.values(col1).concat(newCol1),
        col2: Object.values(col2).concat(newCol2),
        col3: Object.values(col3).concat(newCol3),
      };

      console.log('newCol1', newCol1);
      console.log('newCol2', newCol2);
      console.log('newCol3', newCol3);

      return {
        ...state,
        artList: newArtList,
        isLoading: false,
      };

    case CLEAR_ART_LIST:
      return {
        ...state,
        artList: { col1: [], col2: [], col3: [] },
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
    case SET_IS_LOADING_HOME:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
