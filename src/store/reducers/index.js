import { combineReducers } from "redux";
import auth from "./auth";
import categories from "./categories";
import month from "./month";
import main from "./main";

const rootReducer = combineReducers({
  auth,
  categories,
  month,
  main
});

export default rootReducer;
