import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { store } from "../../store.js";

export const RandomTask = () => {
  return (
    <View style={styles.Button}>
      {/* Generate Task Button */}
      <Button
        onPress={store.selectRandomTask}
        title="Random Task"
        color="#D1603D"
      />
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
