import { firestore } from "../firebase";
import { SET_ARTIST_LIST } from "./action.type";

export const getArtistListFun = (data) => async (dispatch) => {
  const snapshot = await firestore.collection("artist").get();

  if (snapshot.empty) {
    console.log("No Post Found");
  } else {
    const tempDoc = snapshot.docs.map((doc) => {
      return { artId: doc.id, ...doc.data() };
    });
    console.log("temp", tempDoc);
    dispatch({ type: SET_ARTIST_LIST, payload: tempDoc });
  }
};
