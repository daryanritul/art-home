import {
  ADD_HOME_PAGE_ART,
  CLEAR_ART_LIST,
  SET_ERROR_HOME,
  SET_IS_LOADING_HOME,
  SET_LAST_ART,
} from '../action/action.type';

const initialState = {
  artList: [[], [], []],
  lastArt: [],
  error: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_PAGE_ART:
      //   const { col1, col2, col3 } = state.artList;
      const { payload } = action;
      const payloadlen = payload.length;

      const newCol1 = payload.slice(0, Math.ceil(payloadlen / 3));
      const newCol2 = payload.slice(
        Math.ceil(payloadlen / 3),
        Math.ceil((payloadlen / 3) * 2)
      );
      const newCol3 = payload.slice(
        Math.ceil((payloadlen / 3) * 2),
        payloadlen
      );

      const newArtList = [
        state.artList[0].concat(newCol1),
        state.artList[1].concat(newCol2),
        state.artList[2].concat(newCol3),
      ];

      return {
        ...state,
        artList: newArtList,
        isLoading: false,
      };

    case CLEAR_ART_LIST:
      return {
        ...state,
        artList: [[], [], []],
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
