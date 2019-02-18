import * as React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router";

export interface AppContentProps {}

export default class AppContent extends React.Component<AppContentProps, any> {
  public render() {
    return (
      <Layout.Content>
        <Switch>
          <Route exact={true} path="/" component={() => <p>Home</p>} />
          <Route path="/home" component={() => <p>Home</p>} />
          <Route path="/contact" component={() => <p>Contact</p>} />
        </Switch>
      </Layout.Content>
    );
  }
}
