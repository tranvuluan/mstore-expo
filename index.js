/** @format */

import { AppRegistry, LogBox, YellowBox } from "react-native";
import App from "./App";

// ignore specific yellowbox warnings
LogBox.ignoreLogs([
  "Warning: isMounted(...) is deprecated", // works
  "Module RCTImageLoader", // works
  "Require cycle:", // doesn't work
  "ListItem",
  "Failed prop type",
  "It appears that you are using old version of react-navigation library",
  "Warning: `flexWrap: `wrap``",
  "Deprecation in 'navigationOptions'",
  "Require cycles",
  "console.disableYellowBox",
]);

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state",
  "Warning: Cannot update a component from inside the function body of a different component",
]);

AppRegistry.registerComponent("mstore", () => App);
