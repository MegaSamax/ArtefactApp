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
  ScrollView,
} from "react-native";

import { store } from "../store.js";

import { Task } from "../components/Task.js";

import { observer } from "mobx-react";

const List = observer(({ navigation }) => {
  return (
    <View>
      {/* Header */}
      {/* Navigate Back */}
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
        color={store.getCategory().cssColour}
      />

      {/* Title */}
      <Text>Task List</Text>

      {/* List of tasks */}
      {store.tasks
        .filter((task) => store.getCategory().colour === task.colour)
        .map((task) => {
          return <Task key={task.id} task={task} />;
        })}

      {/* Add Task Navigation Button */}
      <Button
        onPress={() => navigation.push("Add")}
        title="Add"
        color={store.getCategory().cssColour}
      />

      {/* Body */}
      {/* Display Saved Tasks */}
      <ScrollView></ScrollView>
    </View>
  );
});

export default List;
