import { LOGIN, LOGOUT } from "../reducers/authReducer";

export const login = (token) => {
  return { type: LOGIN, payload: token };
};
export const logout = () => {
  return { type: LOGOUT };
};
