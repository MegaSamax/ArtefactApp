import { StyleSheet, Text, Button } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import View from "react-native";

import { store } from "../store.js";
import { ScrollView } from "react-native-gesture-handler";

export const Task = observer(({ task }) => {
  return (
    <>
      <ScrollView>
        <Text style={styles.title}>
          {task.text}
          {task.urgent ? <Text>!</Text> : ""}
        </Text>
      </ScrollView>

      <Button
        style={styles.delete}
        title="delete"
        onPress={() => {
          store.deleteTask(task.id);
        }}
        color={store.getCategory().cssColour}
      />
    </>
  );
});

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    margin: 5,
  },
  delete: {
    alignItems: "flex-end",
  },
});
