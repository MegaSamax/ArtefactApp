import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { store } from "../../store.js";

export const CurrentTask = observer(() => {
  const onPressCompleteTask = () => console.log("Temp Function");

  return (
    <View style={styles.container}>
      {/* Current Task Title */}
      <View
        style={[
          {
            alignSelf: "flex-start",
          },
          styles.wrapping,
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>Task</Text>
      </View>

      {/* Current Task Content */}
      <View style={[{ flex: 4, alignSelf: "stretch" }, styles.wrapping]}>
        <Text>
          {store.tasks.find((task) => task.id === store.currentTask)?.text}
        </Text>
      </View>

      {/* Complete Task Button */}
      <View
        style={{
          flex: 1,
          alignSelf: "flex-end",
        }}
      >
        <Button
          onPress={onPressCompleteTask}
          title="Complete"
          color="#D1603D"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    alignItems: "center",
  },
  wrapping: {
    borderRadius: 4,
    borderWidth: 2,
    padding: 5,
    marginBottom: 5,
  },
});
