import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export const RandomTask = () => {
  const onPressRandomTask = () => console.log("Temp Function");

  return (
    <View style={styles.Button}>
      {/* Generate Task Button */}
      <Button onPress={onPressRandomTask} title="Random Task" color="#D1603D" />
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
