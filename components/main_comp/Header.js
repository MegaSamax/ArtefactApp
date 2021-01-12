import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { normalTasks, urgentTasks, currentTask } from "../../store.js";

export const Header = ({ navigation }) => {
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
          color="#D1603D"
        />
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
        <Button
          onPress={() => navigation.push("Add")}
          title="Add"
          color="#D1603D"
        />
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
