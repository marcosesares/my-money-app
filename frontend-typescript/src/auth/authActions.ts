import axios from "axios";
import { toast } from "react-toastify";

import {
  USER_FETCHED,
  TOKEN_VALIDATED,
  OAPI_URL,
} from "../common/constants/constants";

function submit(values: string[], url: string) {
  return (dispatch: any) => {
    axios
      .post(url, values)
      .then((resp) => {
        console.log(resp.data);
        dispatch([{ type: USER_FETCHED, payload: resp.data }]);
      })
      .catch((e) => {
        e.response.data.errors.forEach((error: string) => toast.error(error));
      });
  };
}

const login = (values: string[]) => {
  console.log(typeof values);
  return submit(values, `${OAPI_URL}/login`);
};

const logout = () => {
  return { type: TOKEN_VALIDATED, payload: false };
};

const signup = (values: string[]) => {
  return submit(values, `${OAPI_URL}/signup`);
};

const validateToken = (token: string) => {
  return (dispatch: any) => {
    if (token) {
      axios
        .post(`${OAPI_URL}/validateToken`, { token })
        .then((resp) => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch((e) => dispatch({ type: TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false });
    }
  };
};

export { login, validateToken, signup, logout };
