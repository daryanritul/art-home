import { firestore } from "../firebase";
import { ADD_HOME_PAGE_ART, SET_ERROR_HOME, SET_LAST_ART } from "./action.type";

export const getArtListHomeFun =
  ({ categoryFilter, search, lastArt }) =>
  async (dispatch) => {
    try {
      console.log("categoryFilter", categoryFilter);
      console.log("search", search);
      const artList = firestore
        .collection("art")
        .where("isArchive", "==", false);

      if (categoryFilter === "All" && !search) {
        const snapshot = await artList
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          dispatch({ type: SET_ERROR_HOME, payload: "NO ART FOUND" });
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
      } else if (categoryFilter !== "All" && !search) {
        const snapshot = await artList
          .where("category", "==", categoryFilter)
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          dispatch({ type: SET_ERROR_HOME, payload: "NO ART FOUND" });
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
      } else if (categoryFilter !== "All" && search) {
        console.log("if 3");
        const snapshot = await artList
          .where("category", "==", categoryFilter)
          .where("arrayForSearch", "array-contains", search)
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        if (snapshot.empty) {
          dispatch({ type: SET_ERROR_HOME, payload: "NO ART FOUND" });
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
      } else if (categoryFilter === "All" && search) {
        console.log("IF 4");
        console.log("IF 4 lastArt", lastArt);
        const snapshot = await artList
          .where("arrayForSearch", "array-contains", "red")
          .orderBy("timeStamp", "desc")
          .startAfter(lastArt)
          .limit(10)
          .get();

        console.log("snapshot", snapshot);

        if (snapshot.empty) {
          dispatch({ type: SET_ERROR_HOME, payload: "NO ART FOUND" });
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

      // as
    } catch (error) {
      dispatch({ type: SET_ERROR_HOME, payload: error });
    }
  };
