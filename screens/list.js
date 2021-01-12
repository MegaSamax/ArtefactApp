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

import { normalTasks, urgentTasks, currentTask } from "../store.js";

import Tasks from "../components/tasks.js";

const List = ({ navigation }) => {
  let state = {
    taskArray: [],
    taskText: "",
  };

  let tasks = state.taskArray.map((val, key) => {
    return (
      <Tasks
        key={key}
        keyval={key}
        val={val}
        deleteMethod={() => deleteTask(key)}
      />
    );
  });

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
};

export default List;
