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
      />

      {/* Title */}
      <Text>Task List</Text>

      {/* List of tasks */}
      {store.tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}

      {/* Add Task Navigation Button */}
      <Button
        onPress={() => navigation.push("Add")}
        title="Add"
        color="#D1603D"
      />

      {/* Body */}
      {/* Display Saved Tasks */}
      <ScrollView></ScrollView>
    </View>
  );
});

export default List;
