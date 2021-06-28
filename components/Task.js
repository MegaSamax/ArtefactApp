import { StyleSheet, Text, Button } from "react-native";
import React from "react";
import { observer } from "mobx-react";

import { store } from "../store.js";

export const Task = observer(({ task }) => {
  return (
    <>
      <Text>
        {task.text}
        {task.urgent ? <Text>!</Text> : ""}
      </Text>

      <Button
        title="delete"
        onPress={() => {
          store.deleteTask(task.id);
        }}
      />
    </>
  );
});
