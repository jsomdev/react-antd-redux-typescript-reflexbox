import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

export type RootState = {
  router: RouterState;
};
export default (history: any) => {
  return combineReducers({
    router: connectRouter(history)
  });
};
