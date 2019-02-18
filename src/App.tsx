import React, { Component } from "react";
import logo from "./logo.svg";
import { Layout, Button } from "antd";
import "./App.css";
import AppHeader from "./scenes/shared/appHeader";
import AppContent from "./scenes/shared/appContent";
import AppFooter from "./scenes/shared/appFooter";
import { ReflexProvider } from "reflexbox";

const space = [0, 8, 16, 24, 48];
const breakpoints = [32, 48, 64];
class App extends Component {
  render() {
    return (
      <ReflexProvider space={space} breakpoints={breakpoints}>
        <Layout className="App">
          <AppHeader />
          <AppContent />
          <AppFooter />
        </Layout>
      </ReflexProvider>
    );
  }
}

export default App;
