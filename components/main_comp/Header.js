import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
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
      <View style={[styles.container, styles.completedContainer]}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Open:
        </Text>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {store.tasks.length}
        </Text>
      </View>

      <View style={[styles.container, styles.completedContainer]}>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Closed:
        </Text>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          {store.completedTasks}
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
    alignSelf: "center",
    margin: 5,
  },
  completedContainer: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#b6dfff",
    backgroundColor: "white",
    margin: 2,
  },
});
