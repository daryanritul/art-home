import { firestore } from "../firebase";
import { SET_ARTIST_LIST, SET_ERROR_ARTIST_PAGE } from "./action.type";

export const getArtistListFun = (data) => async (dispatch) => {
  try {
    const snapshot = await firestore.collection("artist").get();

    if (snapshot.empty) {
      dispatch({ type: SET_ERROR_ARTIST_PAGE, payload: "No Artist Found" });
    } else {
      const tempDoc = snapshot.docs.map((doc) => {
        return { artId: doc.id, ...doc.data() };
      });

      dispatch({ type: SET_ARTIST_LIST, payload: tempDoc });
    }
  } catch (error) {
    dispatch({ type: SET_ERROR_ARTIST_PAGE, payload: error });
  }
};
