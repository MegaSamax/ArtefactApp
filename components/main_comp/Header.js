import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "../../store.js";
import { observer } from "mobx-react";

export const Header = observer(({ navigation }) => {
  console.log(navigation);

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
        <Button
          onPress={() => navigation.push("List")}
          title="List"
          color={store.getCategory().cssColour}
        />
      </View>

      {/* Open / Completed Task Counters */}
      <View style={styles.container}>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Open: {store.tasks.length}
        </Text>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Completed: {store.completedTasks}
        </Text>
      </View>

      {/* Add Task Icon */}
      <View style={styles.container}>
        <Button
          onPress={() => navigation.push("Add")}
          title="Add"
          color={store.getCategory().cssColour}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 5,
    margin: 2,
  },
});
