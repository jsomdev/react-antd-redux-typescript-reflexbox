import * as React from "react";
import { Layout } from "antd";

export interface AppFooterProps {}

export default class AppFooter extends React.Component<AppFooterProps, any> {
  public render() {
    return <Layout.Footer>Footer</Layout.Footer>;
  }
}
