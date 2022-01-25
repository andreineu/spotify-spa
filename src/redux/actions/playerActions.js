import {
  PLAY,
  PAUSE,
  SET_DURATION,
  SET_VOLUME,
  SET_CURRENT_TIME,
  SET_ACTIVE,
} from "../reducers/playerReducer";

export const playTrack = () => {
  return { type: PLAY };
};
export const pauseTrack = () => {
  return { type: PAUSE };
};
export const setDuration = (payload) => {
  return { type: SET_DURATION, payload };
};
export const setVolume = (payload) => {
  return { type: SET_VOLUME, payload };
};
export const setCurrentTime = (payload) => {
  return { type: SET_CURRENT_TIME, payload };
};
export const setActiveTrack = (payload) => {
  return { type: SET_ACTIVE, payload };
};
