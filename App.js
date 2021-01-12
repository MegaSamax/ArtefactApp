import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { Header } from "./components/main_comp/Header.js";
import { RandomTask } from "./components/main_comp/RandomTask.js";
import { CurrentTask } from "./components/main_comp/CurrentTask.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./screens/main.js";
import Add from "./screens/add.js";
import List from "./screens/list.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
