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
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.container}>
        <View styles={styles.content}>
          {/* Header */}
          <Button
            /* Back to Previous Screen */
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
            color={store.getCategory().cssColour}
          />
        </View>

        <View styles={styles.content}>
          {/* Add Task Button */}
          <Button
            title="Add"
            onPress={() => navigation.push("Add")}
            color={store.getCategory().cssColour}
          />
        </View>
      </View>

      {/* Title */}
      <Text style={[styles.title, styles.border]}>Task List</Text>

      {/* Body */}
      {/* List of tasks */}
      {store.tasks
        .filter((task) => store.getCategory().colour === task.colour)
        .map((task) => {
          return (
            <View
              style={[
                styles.border,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <Task key={task.id} task={task} />
            </View>
          );
        })}

      <ScrollView></ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  border: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#b6dfff",
    padding: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  content: {
    flex: 1,
  },
});

export default List;
