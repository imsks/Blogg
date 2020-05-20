import authReducer from "./authReducers";
import projectReducer from "./projectReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
