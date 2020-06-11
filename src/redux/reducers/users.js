// TODO: implement
import {
  GET_USER_LIST,
  CREATE_NEW_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER_PICTURE,
  PUT_USER_PICTURE,
} from "../actions";

const INITIAL_STATE = {
  users: [],
  deletedUser: "",
  isAuthenticated: false,
  username: "",
  displayName: "",
  about: "",
  createdAt: "",
  updatedAt: "",
  pictureLocation: null,
  googleId: null,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  console.log("this is the action", { action });
  switch (action.type) {
    case GET_USER: {
      const {
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId,
      } = action.payload.user;
      return {
        ...INITIAL_STATE,
        username,
        displayName,
        about,
        createdAt,
        updatedAt,
        pictureLocation,
        googleId,
      };
    }
    case UPDATE_USER: {
      const { displayName, about, updatedAt } = action.payload.user;

      return {
        ...INITIAL_STATE,
        updatedAt,
        about,
        displayName,
      };
    }
    case GET_USER_LIST: {
      console.log(action.payload);
      const { users } = action.payload; //TODO
      return {
        ...INITIAL_STATE,
        users,
      };
    }
    case CREATE_NEW_USER: {
      return { ...INITIAL_STATE };
    }
    case DELETE_USER: {
      const { deletedUser } = action.payload;
      return { ...INITIAL_STATE, deletedUser };
    }
    default:
      return state;
  }
};
