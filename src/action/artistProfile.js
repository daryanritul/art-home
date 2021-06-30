import { firestore } from "../firebase";
import { SET_ARTIST_ARTLIST, SET_ARTIST_PROFILE } from "./action.type";

export const getArtistProfileFun =
  ({ uid }) =>
  async (dispatch) => {
    console.log("uid", uid);
    const profileDoc = await firestore.collection("artist").doc(uid).get();

    if (profileDoc.exists) {
      console.log(" profileDoc.data() ", profileDoc.data());
      dispatch({ type: SET_ARTIST_PROFILE, payload: profileDoc.data() });
    } else {
      console.log("Proifle not Found");
    }
  };

export const getArtistArtFun =
  ({ uid }) =>
  async (dispatch) => {
    if (uid) {
      console.log("uid dd", uid);
      const artList = firestore.collection("art");

      const snapshot = await artList
        .where("uid", "==", uid)
        .where("isArchive", "==", false)
        .orderBy("timeStamp", "desc")
        .limit(10)
        .get();

      if (snapshot.empty) {
        console.log("No ART FOUDN");
      } else {
        const tempDoc = snapshot.docs.map((doc) => {
          return { artId: doc.id, ...doc.data() };
        });
        // dispatch({
        //   type: SET_LAST_ART,
        //   payload: snapshot.docs[snapshot.docs.length - 1],
        // });
        console.log("temp doc", snapshot);
        dispatch({ type: SET_ARTIST_ARTLIST, payload: tempDoc });
      }
    } else {
      console.log("no uid found");
    }
  };
