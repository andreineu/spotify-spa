const initialState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true,
};

export const PAUSE = "PAUSE";
export const PLAY = "PLAY";
export const SET_CURRENT_TIME = "SET_CURRENT_TIME";
export const SET_VOLUME = "SET_VOLUME";
export const SET_DURATION = "SET_DURATION";
export const SET_ACTIVE = "SET_ACTIVE";

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAUSE:
      return { ...state, pause: true };
    case PLAY:
      return { ...state, pause: false };
    case SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    case SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    default:
      return state;
  }
};

export default playerReducer;
