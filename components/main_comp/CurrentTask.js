import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { store } from "../../store.js";

export const CurrentTask = observer(() => {
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
        <Text>{store.getCurrentTask()?.text}</Text>
      </View>

      {/* Complete Task Button */}
      <View
        style={{
          flex: 1,
          alignSelf: "flex-end",
        }}
      >
        <Button
          onPress={store.completeTask}
          title="Complete"
          color={store.getCategory().cssColour}
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
