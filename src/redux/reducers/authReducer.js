const initialState = {
  isAuth: false,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
