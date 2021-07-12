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
  artistArtList: { col1: [], col2: [], col3: [] },
  artistLastArt: [],
  error: '',
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ARTIST_ART_LIST:
      return {
        ...state,
        artistArtList: { col1: [], col2: [], col3: [] },
      };

    case SET_ARTIST_PROFILE:
      return {
        ...state,
        artistProfile: action.payload,
        error: '',
      };
    case SET_ARTIST_ARTLIST:
      const { col1, col2, col3 } = state.artistArtList;
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
