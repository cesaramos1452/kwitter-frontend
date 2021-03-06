import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { messageReducer } from "./messages";
import { likesReducer } from "./likes";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messageReducer,
  likes: likesReducer,
});
