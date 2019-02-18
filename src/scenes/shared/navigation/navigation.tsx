import * as React from "react";
import { Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";

export interface NavigationProps {
  navigateRoute: (key: string) => void;
  activeRoute: string;
}

export default class Navigation extends React.Component<NavigationProps, any> {
  public render() {
    return (
      <Menu
        onClick={e => this.handleMenuClicked(e)}
        theme="light"
        mode="horizontal"
      >
        <Menu.Item key="home">
          <span>
            <Icon type="home" /> Home
          </span>
        </Menu.Item>
        <Menu.Item key="contact">
          <span>
            <Icon type="contact" /> Contact
          </span>
        </Menu.Item>
      </Menu>
    );
  }
  handleMenuClicked(e: ClickParam): void {
    this.props.navigateRoute(e.key);
  }
}
