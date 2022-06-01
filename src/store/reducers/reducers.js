import expenseReducer from "./expenseReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

export default combineReducers({
  expenseReducer,
  categoryReducer,
});
