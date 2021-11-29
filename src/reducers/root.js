import { combineReducers } from "redux";
import cardDB from "./cardDB";
import configure from "./configure";

const rootReducer = combineReducers({
  cardDB,
  configure
});

export default rootReducer;
