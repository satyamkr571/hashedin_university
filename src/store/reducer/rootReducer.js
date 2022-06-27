import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { courseReducer } from "./courseReducer";
import { wishListReducer } from "./wishListReducer";
import { cartReducer } from "./cartReducer";
import { modalReducer } from "./modalReducer";
import { courseDetailReducer } from "./courseDetailReducer";
export const rootReducer = combineReducers({
  profileReducer,
  courseReducer,
  wishListReducer,
  cartReducer,
  modalReducer,
  courseDetailReducer,
});
