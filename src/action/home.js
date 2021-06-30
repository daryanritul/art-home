import { firestore } from "../firebase";
import { ADD_HOME_PAGE_ART, SET_LAST_ART } from "./action.type";

export const getArtListHomeFun =
  ({ categoryFilter, lastArt }) =>
  async (dispatch) => {
    console.log("categoryFilter", categoryFilter);
    try {
      const artList = firestore
        .collection("art")
        .where("isArchive", "==", false);

      if (categoryFilter === "") {
        console.log("if 1");
        const snapshot = await artList
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          console.log("No Post Found");
        } else {
          const tempDoc = snapshot.docs.map((doc) => {
            return { artId: doc.id, ...doc.data() };
          });
          dispatch({
            type: SET_LAST_ART,
            payload: snapshot.docs[snapshot.docs.length - 1],
          });
          dispatch({ type: ADD_HOME_PAGE_ART, payload: tempDoc });
        }
      } else if (categoryFilter !== "") {
        const snapshot = await artList
          .where("category", "==", categoryFilter)
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          console.log("Now Post Found");
        } else {
          const tempDoc = snapshot.docs.map((doc) => {
            return { artId: doc.id, ...doc.data() };
          });
          dispatch({
            type: SET_LAST_ART,
            payload: snapshot.docs[snapshot.docs.length - 1],
          });
          dispatch({ type: ADD_HOME_PAGE_ART, payload: tempDoc });
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
