import {
  CLEAR_ARTIST_ART_LIST,
  SET_ARTIST_ARTLIST,
  SET_ARTIST_LAST_ART,
  SET_ARTIST_PROFILE,
  SET_ERROR_ARTIST_PROFILE,
  SET_IS_LOADING_ARTIST_PROFILE,
} from '../action/action.type';

const initialState = {
  artistProfile: [],
  artistArtList: [[], [], []],
  artistLastArt: [],
  error: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ARTIST_ART_LIST:
      return {
        ...state,
        artistArtList: [[], [], []],
      };

    case SET_ARTIST_PROFILE:
      return {
        ...state,
        artistProfile: action.payload,
        error: '',
      };
    case SET_ARTIST_ARTLIST:
      //   const { col1, col2, col3 } = state.artistArtList;
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
        state.artistArtList[0].concat(newCol1),
        state.artistArtList[1].concat(newCol2),
        state.artistArtList[2].concat(newCol3),
      ];

      return {
        ...state,
        artistArtList: newArtList,
        isLoading: false,
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
    case SET_IS_LOADING_ARTIST_PROFILE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
