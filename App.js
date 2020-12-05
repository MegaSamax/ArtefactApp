import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Header } from "./components/Header.js";
import { RandomTask } from "./components/RandomTask.js";
import { CurrentTask } from "./components/CurrentTask.js";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 10 }}>
        <Header />
      </View>

      <View style={{ flex: 45 }}>
        <RandomTask />
      </View>

      <View style={{ flex: 45 }}>
        <CurrentTask />
      </View>
    </View>
  );
}
