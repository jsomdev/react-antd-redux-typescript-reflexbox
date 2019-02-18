import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "../../../redux/rootReducer";
import { getActiveRoute } from "./routes";
import { routerActions } from "connected-react-router";
import Navigation from "./navigation";

const mapStateToProps = (state: RootState) => {
  return {
    activeRoute: getActiveRoute()
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    navigateRoute: (key: string) => {
      dispatch(routerActions.push(key));
    }
  };
};
export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
