import * as React from "react";
import { Layout } from "antd";
import { NavigationContainer } from "./navigation/navigationContainer";
export interface AppHeaderProps {}

export default class AppHeader extends React.Component<AppHeaderProps, any> {
  public render() {
    return <NavigationContainer />;
  }
}
