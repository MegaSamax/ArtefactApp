import { observer } from "mobx-react";
import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { store } from "../../store.js";

export const RandomTask = observer(() => {
  return (
    <View style={styles.Button}>
      {/* Slime Name */}
      <Text>{store.getCategory().name}</Text>

      {/* Navigate Categories */}
      {/* Left buttom */}
      <Button onPress={store.prevCategory} title="<" color="#D1603D" />
      {/* Right buttom */}
      <Button onPress={store.nextCategory} title=">" color="#D1603D" />

      {/* Generate Task Button */}
      <Button
        onPress={store.selectRandomTask}
        title="Random Task"
        color="#D1603D"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
