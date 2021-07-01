import { firestore } from "../firebase";
import {
  SET_ARTIST_ARTLIST,
  SET_ARTIST_LAST_ART,
  SET_ARTIST_PROFILE,
  SET_ERROR_ARTIST_PROFILE,
} from "./action.type";

export const getArtistProfileFun =
  ({ uid }) =>
  async (dispatch) => {
    try {
      const profileDoc = await firestore.collection("artist").doc(uid).get();

      if (profileDoc.exists) {
        dispatch({ type: SET_ARTIST_PROFILE, payload: profileDoc.data() });
      } else {
        dispatch({
          type: SET_ERROR_ARTIST_PROFILE,
          payload: "Profile Not Found",
        });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR_ARTIST_PROFILE, payload: error });
    }
  };

export const getArtistArtFun =
  ({ uid, lastArt }) =>
  async (dispatch) => {
    try {
      if (uid) {
        const artList = firestore.collection("art");

        const snapshot = await artList
          .where("uid", "==", uid)
          .where("isArchive", "==", false)
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          dispatch({
            type: SET_ERROR_ARTIST_PROFILE,
            payload: "No ART FOUND",
          });
        } else {
          const tempDoc = snapshot.docs.map((doc) => {
            return { artId: doc.id, ...doc.data() };
          });
          dispatch({
            type: SET_ARTIST_LAST_ART,
            payload: snapshot.docs[snapshot.docs.length - 1],
          });
          dispatch({ type: SET_ARTIST_ARTLIST, payload: tempDoc });
        }
      } else {
        dispatch({
          type: SET_ERROR_ARTIST_PROFILE,
          payload: "No Uid Found",
        });
      }
    } catch (error) {
      dispatch({
        type: SET_ERROR_ARTIST_PROFILE,
        payload: error,
      });
    }
  };
