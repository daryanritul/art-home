import { firestore } from "../firebase";
import {
  SET_ARTIST_ARTLIST,
  SET_ARTIST_LAST_ART,
  SET_ARTIST_PROFILE,
} from "./action.type";

export const getArtistProfileFun =
  ({ uid }) =>
  async (dispatch) => {
    const profileDoc = await firestore.collection("artist").doc(uid).get();

    if (profileDoc.exists) {
      dispatch({ type: SET_ARTIST_PROFILE, payload: profileDoc.data() });
    } else {
      console.log("Proifle not Found");
    }
  };

export const getArtistArtFun =
  ({ uid, lastArt }) =>
  async (dispatch) => {
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
        console.log("No ART FOUDN");
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
      console.log("no uid found");
    }
  };
