import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";

import Tasks from "../components/tasks.js";

const Add = ({ navigation }) => {
  return (
    <View>
      {/* Header */}
      {/* Back to Previous Screen */}
      <Button
        title="Discard"
        onPress={() => {
          navigation.goBack();
        }}
      />

      {/* Title */}
      <Text>Add Task</Text>

      {/* Body */}
      {/* Urgent Task Toggle Button */}

      {/* Text Input */}
      <TextInput
        onChangeText={(taskText) => setState}
        placeholder="Enter task here"
        underlineColorAndroid="transparent"
      ></TextInput>

      {/* Confirmation Button */}
      <Button title="Save" />
    </View>
  );
};

export default Add;
