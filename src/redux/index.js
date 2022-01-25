import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import playerReducer from "./reducers/playerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// export default rootReducer;

export default store;
