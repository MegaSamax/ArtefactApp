import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export const Header = () => {
  const onPressTaskList = () => console.log("Temp Function");
  const onPressAddTask = () => console.log("Temp Function");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "baseline",
      }}
    >
      {/* List Icon */}
      <View style={styles.container}>
        <Button onPress={onPressTaskList} title="List" color="#D1603D" />
      </View>

      {/* Open / Completed Task Counters */}
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Open #
        </Text>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Complete #
        </Text>
      </View>

      {/* Add Task Icon */}
      <View style={styles.container}>
        <Button onPress={onPressAddTask} title="Add" color="#D1603D" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 5,
    margin: 2,
  },
});
