import { combineReducers } from "redux";
import auth from "./auth";
import categories from "./categories";
import month from "./month";

const rootReducer = combineReducers({
  auth,
  categories,
  month,
});

export default rootReducer;
