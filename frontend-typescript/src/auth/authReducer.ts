import { ActionType } from "../common/types/types";
import { USER_KEY } from "../common/constants/constants";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(USER_KEY)!),
  validToken: false,
};

const AuthReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "TOKEN_VALIDATED":
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(USER_KEY);
        return { ...state, validToken: false, user: null };
      }
    case "USER_FETCHED":
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
};

export default AuthReducer;
