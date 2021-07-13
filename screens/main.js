import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Header } from "../components/main_comp/Header.js";
import { RandomTask } from "../components/main_comp/RandomTask.js";
import { CurrentTask } from "../components/main_comp/CurrentTask.js";

const Main = ({ navigation }) => {
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
        <Header navigation={navigation} />
      </View>

      <View style={{ flex: 45 }}>
        <RandomTask navigation={navigation} />
      </View>

      <View style={{ flex: 45 }}>
        <CurrentTask navigation={navigation} />
      </View>
    </View>
  );
};

export default Main;
